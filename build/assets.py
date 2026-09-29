#!/usr/bin/env python3
"""Copies and optimizes repo assets into site/ (images -> webp/jpg, videos -> muted h264 + poster)."""
import os
import shutil
import subprocess
import sys
import urllib.request

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A = os.path.join(ROOT, 'assets')
OUT = os.path.join(ROOT, 'site')

try:
    import imageio_ffmpeg
    FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
except ImportError:
    FFMPEG = 'ffmpeg'

CASES = ['nega-nago', 'thumbdrop', 'ct-em-campo', 'canaltech-link-hub']
FONTS = {
    'sofia-sans-latin.woff2': 'https://fonts.gstatic.com/s/sofiasans/v20/Yq6R-LCVXSLy9uPBwlATrOF6kg.woff2',
    'sofia-sans-latin-ext.woff2': 'https://fonts.gstatic.com/s/sofiasans/v20/Yq6R-LCVXSLy9uPBwlATrO96kigt.woff2',
}


def need(src, dst):
    return not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(src)


def img(src, dst, fmt, quality, max_w=None):
    if not need(src, dst):
        return
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im = Image.open(src)
    if max_w and im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    if fmt == 'jpg':
        im.convert('RGB').save(dst, 'JPEG', quality=quality, optimize=True, progressive=True)
    elif fmt == 'webp':
        im.save(dst, 'WEBP', quality=quality, method=6)
    else:
        im.save(dst, 'PNG', optimize=True)
    print('img', os.path.relpath(dst, OUT), im.size, os.path.getsize(dst) // 1024, 'KB')


def video(src, dst_base, max_w, crf):
    mp4, jpg = dst_base + '.mp4', dst_base + '.jpg'
    if not need(src, mp4) and os.path.exists(jpg):
        return
    os.makedirs(os.path.dirname(mp4), exist_ok=True)
    vf = "scale='min(%d,iw)':-2" % max_w
    subprocess.run([FFMPEG, '-y', '-loglevel', 'error', '-i', src, '-an', '-vf', vf, '-c:v', 'libx264',
                    '-preset', 'slow', '-crf', str(crf), '-pix_fmt', 'yuv420p', '-profile:v', 'high',
                    '-movflags', '+faststart', mp4], check=True)
    subprocess.run([FFMPEG, '-y', '-loglevel', 'error', '-i', mp4, '-frames:v', '1', '-q:v', '3', jpg], check=True)
    print('vid', os.path.relpath(mp4, OUT), os.path.getsize(mp4) // 1024, 'KB')


def main():
    # fonts
    fd = os.path.join(OUT, 'fonts')
    os.makedirs(fd, exist_ok=True)
    for name, url in FONTS.items():
        p = os.path.join(fd, name)
        if not os.path.exists(p):
            urllib.request.urlretrieve(url, p)
            print('font', name)

    # shared
    for f in ('favicon.svg', 'og-image.jpg'):
        src = os.path.join(A, 'shared', f)
        if os.path.exists(src):
            shutil.copy2(src, os.path.join(OUT, f))
    shutil.copy2(os.path.join(ROOT, 'build', 'htaccess'), os.path.join(OUT, '.htaccess'))

    # home
    h = os.path.join(A, 'home')
    img(os.path.join(h, 'hero', 'foto-perfil.jpg'), os.path.join(OUT, 'img/home/foto-perfil.jpg'), 'jpg', 86, 1200)
    for n in ('premio', 'grupo', 'time'):
        img(os.path.join(h, 'sobre', 'foto-%s.png' % n), os.path.join(OUT, 'img/home/foto-%s.jpg' % n), 'jpg', 86, 1200)
    for n in ('kabum', 'netshoes', 'canaltech', 'motorola', 'magalu'):
        img(os.path.join(h, 'logos', 'logo-%s.png' % n), os.path.join(OUT, 'img/home/logo-%s.png' % n), 'png', None)

    # cases
    for c in CASES:
        d = os.path.join(A, 'cases', c)
        for f in sorted(os.listdir(d)):
            if f.endswith('.png'):
                img(os.path.join(d, f), os.path.join(OUT, 'img', c, f[:-4].replace('-TEMP', '') + '.webp'), 'webp', 90, 2400)

    # videos
    pg = os.path.join(h, 'playground')
    for f in sorted(os.listdir(pg)):
        if f.endswith('.mp4'):
            video(os.path.join(pg, f), os.path.join(OUT, 'video/playground', f[:-4]), 1000, 24)
    video(os.path.join(A, 'cases/thumbdrop/video-v1.mp4'), os.path.join(OUT, 'video/thumbdrop/video-v1'), 1200, 24)
    video(os.path.join(A, 'cases/thumbdrop/video-v2.mp4'), os.path.join(OUT, 'video/thumbdrop/video-v2'), 1200, 24)
    video(os.path.join(A, 'cases/ct-em-campo/07-motion.mp4'), os.path.join(OUT, 'video/ct-em-campo/motion'), 1920, 23)
    capas = os.path.join(h, 'capas')
    if os.path.isdir(capas):
        for f in sorted(os.listdir(capas)):
            if f.endswith('.mp4'):
                video(os.path.join(capas, f), os.path.join(OUT, 'video/capas', f[:-4]), 1300, 24)
            elif f.endswith(('-poster.png', '-poster.jpg')) and not os.path.exists(os.path.join(capas, f.rsplit('-poster', 1)[0] + '.mp4')):
                img(os.path.join(capas, f), os.path.join(OUT, 'video/capas', f.rsplit('-poster', 1)[0] + '.jpg'), 'jpg', 88, 1300)


if __name__ == '__main__':
    main()
