#!/usr/bin/env python3
"""Builds the static portfolio site from the Figma frames.

Inputs (build/src):
  fig/<view>_<page>.jsx   React+Tailwind output of Figma get_design_context,
                          one file per frame (d_ = desktop 1400, m_ = mobile 360)
  export/<page>.html      Pixel-perfect HTML exports, used only for the inline
                          SVG icons that the Figma asset URLs don't give us
  i18n/en.json            PT -> EN strings

Output: site/ (EN at the root, PT under /pt/), ready to upload.
"""
import hashlib
import html
import json
import os
import re
import shutil
import sys
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'build', 'src')
OUT = os.path.join(ROOT, 'site')

PAGES = {
    'home': {'file': 'index.html', 'title': 'Erick Teixeira · Product & design engineer'},
    'nega': {'file': 'nega-nago.html', 'title': 'Nega Nagô · Erick Teixeira'},
    'thumb': {'file': 'thumbdrop.html', 'title': 'ThumbDrop · Erick Teixeira'},
    'ct': {'file': 'ct-em-campo.html', 'title': 'CT em Campo · Erick Teixeira'},
    'links': {'file': 'canaltech-link-hub.html', 'title': 'Canaltech · Hub de links · Erick Teixeira'},
}

LINKS = {
    'cv': 'https://drive.google.com/file/d/1JTTRTSD7KfXLHvJ3SDQT1B0TvGoX8IiO/view?usp=sharing',
    'linkedin': 'https://www.linkedin.com/in/erick-teixeira-031b3a213/',
    'email': 'oerickteixeira@gmail.com',
    'figma': {
        'nega': 'https://www.figma.com/design/DPnAXlPAlYzHfeA6hp1j0i/Nega_Nago_Portfolio?node-id=0-1&m=dev',
        'thumb': 'https://www.figma.com/design/Hsb1TN5J2xfjRR8a00VlIn/ThumDrop-Portfolio?node-id=0-1&m=dev',
        'ct': 'https://www.figma.com/design/aUh8z5QbGFmJ4k48denDDk/CT_em_Campo_Portfolio?node-id=0-1&m=dev',
        'links': 'https://www.figma.com/design/Kvw7C8zKm7ppLMmgFErrf2/CT_Links_Portfolio?node-id=0-1&m=dev',
    },
}

# Case card (Home "projeto 01" rows and case "Ver mais" cards) -> page key
CASE_BY_TITLE = {
    'Nega Nagô': 'nega',
    'ThumbDrop': 'thumb',
    'CT em Campo · Canaltech × Netshoes': 'ct',
    'CT em Campo': 'ct',
    'Canaltech · Hub de links': 'links',
}

# Figma layer name (without the trailing copy number) -> site asset
IMAGES = {
    '23305bce-bac9-4b22-9ebb-dd6df0bc2acf': 'img/home/foto-perfil.jpg',
    'logo_kabum': 'img/home/logo-kabum.png',
    'logo_netshoes': 'img/home/logo-netshoes.png',
    'logo_cabaltech': 'img/home/logo-canaltech.png',
    'logo_motorola': 'img/home/logo-motorola.png',
    'logo_magalu': 'img/home/logo-magalu.png',
    'foto_premio': 'img/home/foto-premio.jpg',
    'foto_grupo': 'img/home/foto-grupo.jpg',
    'foto_time': 'img/home/foto-time.jpg',
    'card - hero - nega nago': 'img/nega-nago/01-hero.webp',
    'card---antes---nega-nago': 'img/nega-nago/02-antes.webp',
    'card---depois---nega-nago': 'img/nega-nago/03-depois.webp',
    'card - whatsapp - neganago': 'img/nega-nago/04-whatsapp.webp',
    'card - restricoes': 'img/nega-nago/05-restricoes.webp',
    'card---wireframe': 'img/nega-nago/06-wireframe.webp',
    'card---prototype': 'img/nega-nago/07-prototype.webp',
    'card - design system': 'img/nega-nago/08-design-system.webp',
    'neganagofluxoimagensia16x9-6': 'img/nega-nago/09-imagens-catalogo.webp',
    'card - hero - thumbdrop': 'img/thumbdrop/01-hero.webp',
    'card - 4 estados': 'img/thumbdrop/02-quatro-estados.webp',
    'card - comportamentos': 'img/thumbdrop/03-comportamentos.webp',
    'card - biblioteca': 'img/thumbdrop/04-biblioteca.webp',
    'card_thumbs': 'img/thumbdrop/05-thumbs.webp',
    'card - hero - ct em campo': 'img/ct-em-campo/01-hero.webp',
    'card - antes': 'img/ct-em-campo/02-antes.webp',
    'card - depois': 'img/ct-em-campo/03-depois.webp',
    'card - key visual': 'img/ct-em-campo/04-key-visual.webp',
    'card - CTA correção': 'img/ct-em-campo/05-cta-correcao.webp',
    'card - componentes e estado': 'img/ct-em-campo/06-componentes-e-estado.webp',
    'social_media': 'img/ct-em-campo/08-social-media.webp',
    'card - ponto de entrada': 'img/ct-em-campo/09-ponto-de-entrada.webp',
    'card---hero---mockup': 'img/canaltech-link-hub/01-hero-mockup.webp',
    'card - antes · a página própria': 'img/canaltech-link-hub/02-antes.webp',
    'card - depois · a página própria': 'img/canaltech-link-hub/03-depois.webp',
    'card - as quatro decisões': 'img/canaltech-link-hub/04-quatro-decisoes.webp',
    'card - Foundations': 'img/canaltech-link-hub/05-foundations.webp',
    'card - Components': 'img/canaltech-link-hub/06-components.webp',
    'card · a página nas duas densidades': 'img/canaltech-link-hub/07-duas-densidades.webp',
}

# Layers that share a base name but use a different picture
IMAGES_EXACT = {'card - hero - thumbdrop 1': 'img/thumbdrop/01-hero-mobile.webp'}

# Layers filled with a video in Figma -> (video, poster)
VIDEOS = {
    'illustration_home': 'video/playground/illustration',
    'avdc_home': 'video/playground/avdc',
    'tyler_home': 'video/playground/tyler',
    'rich_boy_home': 'video/playground/rich-boy',
    'gold_life_home': 'video/playground/gold-life',
    'will_home': 'video/playground/will',
    'thumbdrop_v1': 'video/thumbdrop/video-v1',
    'thumbdrop_v2': 'video/thumbdrop/video-v2',
    'motion_ct_em_campo': 'video/ct-em-campo/motion',
    'capa_nega_nago': 'video/capas/nega-nago',
    'capa_thumbdrop': 'video/capas/thumbdrop',
    'capa · ThumbDrop': 'video/capas/thumbdrop',
    'capa_ct_em_campo': 'video/capas/ct-em-campo',
    'capa_ct_links': 'video/capas/ct-links',
}

# Frames whose strokes take layout space in Figma (strokesIncludedInLayout); the rest are drawn as overlays
STROKES_IN_LAYOUT = {
    '2230:6627', '2264:1597', '2230:6899', '2264:1603', '2230:7123', '2264:1609', '2230:7314', '2230:7393',
    '2264:1615', '2264:1621', '2230:7687', '2230:7663', '2230:7711', '2264:1627', '2246:1906', '2246:1930',
    '2246:1954', '2264:1632', '2264:1637', '2247:2049', '2264:1642', '2264:1647', '2264:1585', '2264:1590'}

# Multi-line texts that Chrome wraps one line earlier than Figma (sub-pixel glyph width differences)
TEXT_SLACK = {'2247:1654': 4, '2230:7181': 4, '2230:6743': 4, '2247:1909': 4, '2247:2007': 4, '2247:1603': 4, '2247:2507': 4}


def load_dims():
    t = open(os.path.join(SRC, 'figma-metadata.xml'), encoding='utf-8').read()
    return {m.group(1): (float(m.group(2)), float(m.group(3)))
            for m in re.finditer(r'id="([^"]+)"[^>]*? width="([\d.]+)" height="([\d.]+)"', t)}


DIMS = load_dims()
HEIGHTS = {k: v[1] for k, v in DIMS.items()}


def has_media(el):
    return any(base_name(d) in IMAGES or base_name(d) in VIDEOS or (d.get('data-name') or '') in IMAGES_EXACT
               for d in el.iter())


def par_fills(el, parents):
    par = parents.get(el)
    if par is None or par.get('data-node-id') not in DIMS or 'flex-col' not in (par.get('class') or ''):
        return False
    pad = 0
    for c in (par.get('class') or '').split():
        m = re.fullmatch(r'(p|px|pl|pr)-\[(\d+(?:\.\d+)?)px\]', c)
        if m:
            pad += float(m.group(2)) * (2 if m.group(1) in ('p', 'px') else 1)
    return abs(DIMS[par.get('data-node-id')][0] - pad - DIMS[el.get('data-node-id')][0]) < 1.5


def inherited(el, parents, key):
    # font-size / line-height as Tailwind resolves them (own class first, then ancestors)
    node = el
    while node is not None:
        for c in (node.get('class') or '').split():
            m = re.fullmatch(key + r'-\[([\d.]+)(px)?\]', c)
            if m and not (key == 'text' and c.startswith('text-[#')):
                return float(m.group(1)), bool(m.group(2))
        node = parents.get(node)
    return None, None


# icon frames whose background lives on the frame itself in Figma
ICON_BOX = {'PersonSimpleRun': [('background-color', '#39332e'), ('border-radius', '99px'), ('overflow', 'hidden')]}

ZOOM_BADGE = ('<span class="zbadge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6" '
              'stroke="#fbf7f4" stroke-width="2"/><path d="M15 15l5 5M10.5 8v5M8 10.5h5" stroke="#fbf7f4" stroke-width="2" '
              'stroke-linecap="round"/></svg></span>')

# menu label -> section layer label, where they differ
MENU_ALIAS = {'Versões': 'A/B'}

ICON_LAYERS = {'ReadCvLogo', 'Copy', 'MapPinSimpleArea', 'PersonSimpleRun',
               'CaretRight', 'Ellipse', 'LinkedIn_icon 1', 'figma-icon 1'}

# ----------------------------------------------------------------- icons


def load_icons():
    """Inline SVGs from the HTML exports, keyed by icon + colour variant."""
    def svgs(name):
        t = open(os.path.join(SRC, 'export', name), encoding='utf-8').read()
        return re.findall(r'<svg.*?</svg>', t, flags=re.S)
    home = svgs('home.html')
    case = svgs('nega.html')
    icons = {
        'ReadCvLogo': home[0],
        'Copy:light': home[1],
        'MapPinSimpleArea': home[2],
        'PersonSimpleRun': home[3],
        'CaretRight': home[4],
        'Copy:dark': home[10],
        'ReadCvLogo:outline': home[11],
        'LinkedIn_icon 1': home[12],
        'figma-icon 1': case[0],
    }
    for k, v in icons.items():
        v = re.sub(r'\s+xmlns:xlink="[^"]*"', '', v)
        icons[k] = v.replace('<svg ', '<svg aria-hidden="true" focusable="false" ', 1)
    return icons


# ------------------------------------------------------------- JSX -> tree

TPL_RE = re.compile(r'\{`((?:[^`\\]|\\.)*)`\}', re.S)


def jsx_to_tree(src):
    body = src[src.index('export default function'):]
    body = body[body.index('return (') + len('return ('):]
    body = body[:body.rindex(');')]
    templates = []

    def keep(m):
        templates.append(m.group(1).replace('\\`', '`').replace('\\\\', '\\'))
        return '%d' % (len(templates) - 1)
    body = TPL_RE.sub(keep, body)
    body = re.sub(r'<SeletorDeIdioma className="([^"]*)" />', r'<langsel class="\1"></langsel>', body)
    body = re.sub(r'style=\{\{ backgroundImage: "([^"]*)" \}\}', r'style="background-image: \1"', body)
    body = re.sub(r'src=\{(\w+)\}', r'src="\1"', body)
    body = body.replace('className=', 'class=')
    body = body.replace('<br aria-hidden />', '<br />')
    assert '{' not in body.replace('', '').replace('', ''), re.findall(r'.{30}\{.{30}', body)[:3]
    body = re.sub(r'&(?![a-zA-Z]+;|#\d+;)', '&amp;', body)
    root = ET.fromstring(body)

    def fix_text(t):
        if t is None:
            return None
        if '\n' in t:
            lines = t.split('\n')
            out = []
            for i, line in enumerate(lines):
                if i:
                    line = line.lstrip(' \t')
                if i < len(lines) - 1:
                    line = line.rstrip(' \t')
                if line:
                    out.append(line)
            t = ' '.join(out)
        t = re.sub('(\\d+)', lambda m: templates[int(m.group(1))], t)
        return t or None

    for el in root.iter():
        el.text = fix_text(el.text)
        el.tail = fix_text(el.tail)
    return root


# --------------------------------------------------------- Tailwind -> CSS

WEIGHTS = {'font-light': '300', 'font-normal': '400', 'font-bold': '700',
           'font-extrabold': '800', 'font-black': '900'}
STATIC = {
    'relative': [('position', 'relative')],
    'absolute': [('position', 'absolute')],
    'flex': [('display', 'flex')],
    'block': [('display', 'block')],
    'flex-col': [('flex-direction', 'column')],
    'flex-row': [('flex-direction', 'row')],
    'flex-wrap': [('flex-wrap', 'wrap')],
    'content-stretch': [('align-content', 'stretch')],
    'content-center': [('align-content', 'center')],
    'content-start': [('align-content', 'flex-start')],
    'items-start': [('align-items', 'flex-start')],
    'items-center': [('align-items', 'center')],
    'items-end': [('align-items', 'flex-end')],
    'justify-between': [('justify-content', 'space-between')],
    'justify-center': [('justify-content', 'center')],
    'justify-end': [('justify-content', 'flex-end')],
    'self-stretch': [('align-self', 'stretch')],
    'shrink-0': [('flex-shrink', '0')],
    'min-w-px': [('min-width', '1px')],
    'min-h-px': [('min-height', '1px')],
    'min-w-full': [('min-width', '100%')],
    'w-full': [('width', '100%')],
    'h-full': [('height', '100%')],
    'h-0': [('height', '0')],
    'size-full': [('width', '100%'), ('height', '100%')],
    'inset-0': [('inset', '0')],
    'max-w-none': [('max-width', 'none')],
    'object-cover': [('object-fit', 'cover')],
    'pointer-events-none': [('pointer-events', 'none')],
    'cursor-pointer': [('cursor', 'pointer')],
    'overflow-clip': [('overflow', 'clip')],
    'uppercase': [('text-transform', 'uppercase')],
    'whitespace-nowrap': [('white-space', 'nowrap')],
    'whitespace-pre': [('white-space', 'pre')],
    'whitespace-pre-wrap': [('white-space', 'pre-wrap')],
    'mb-0': [('margin-bottom', '0')],
    'border': [('border-width', '1px')],
    'border-0': [('border-width', '0')],
    'border-b': [('border-bottom-width', '1px')],
    'border-r': [('border-right-width', '1px')],
    'border-t': [('border-top-width', '1px')],
    'border-solid': [('border-style', 'solid')],
    'bg-clip-padding': [('background-clip', 'padding-box')],
    '[word-break:break-word]': [('word-break', 'break-word')],
}
ARB = {
    'w': ['width'], 'h': ['height'], 'size': ['width', 'height'],
    'min-h': ['min-height'], 'p': ['padding'], 'px': ['padding-left', 'padding-right'],
    'py': ['padding-top', 'padding-bottom'], 'pt': ['padding-top'], 'pb': ['padding-bottom'],
    'pr': ['padding-right'], 'gap': ['gap'], 'gap-y': ['row-gap'],
    'rounded': ['border-radius'], 'leading': ['line-height'], 'tracking': ['letter-spacing'],
    'flex': ['flex'], 'aspect': ['aspect-ratio'],
}


def is_color(v):
    return v.startswith('#') or v.startswith('rgb') or v == 'transparent'


def tw_to_css(classes):
    decl = []
    for c in classes.split():
        if c in STATIC:
            decl += STATIC[c]
            continue
        if c in WEIGHTS:
            decl.append(('font-weight', WEIGHTS[c]))
            continue
        m = re.fullmatch(r"font-\['Sofia_Sans:[A-Za-z]+'\]", c)
        if m:
            decl.append(('font-family', "'Sofia Sans', system-ui, sans-serif"))
            continue
        m = re.fullmatch(r'([a-z-]+)-\[(.+)\]', c)
        if not m:
            raise ValueError('unknown class ' + c)
        key, val = m.group(1), m.group(2).replace('_', ' ')
        if key == 'text':
            decl.append(('color' if is_color(val) else 'font-size', val))
        elif key == 'bg':
            decl.append(('background-color', val))
        elif key == 'border':
            decl.append(('border-color', val))
        elif key == 'backdrop-blur':
            decl.append(('backdrop-filter', 'blur(%s)' % val))
            decl.append(('-webkit-backdrop-filter', 'blur(%s)' % val))
        elif key in ARB:
            for p in ARB[key]:
                decl.append((p, val))
        else:
            raise ValueError('unknown class ' + c)
    return decl


# ------------------------------------------------------------- rendering


class CSSRegistry:
    def __init__(self):
        self.rules = {}

    def cls(self, decl):
        body = ';'.join('%s:%s' % d for d in decl)
        if not body:
            return None
        name = self.rules.get(body)
        if not name:
            name = 'c' + hashlib.md5(body.encode()).hexdigest()[:6]
            self.rules[body] = name
        return name

    def stroke(self, decl):
        body = ';'.join('%s:%s' % d for d in decl)
        name = self.rules.get('::after' + body)
        if not name:
            name = 's' + hashlib.md5(body.encode()).hexdigest()[:6]
            self.rules['::after' + body] = name
        return name

    def css(self):
        out = []
        for b, n in sorted(self.rules.items(), key=lambda x: x[1]):
            if b.startswith('::after'):
                out.append('.%s::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;%s}' % (n, b[7:]))
            else:
                out.append('.%s{%s}' % (n, b))
        return '\n'.join(out)


def base_name(el):
    n = el.get('data-name') or ''
    return re.sub(r' \d+$', '', n)


def text_of(el):
    return ''.join(el.itertext()).strip()


class Renderer:
    """Renders one Figma frame (desktop or mobile) for one page and language."""
    uid = 0

    def __init__(self, page, view, lang, reg, icons, tr, prefix):
        self.page, self.view, self.lang = page, view, lang
        self.reg, self.icons, self.tr = reg, icons, tr
        self.prefix = prefix  # relative path to site root
        self.nav_targets = {}
        self.parent = {}
        self.scaled = set()
        self.menu_labels = []

    # -- helpers
    def t(self, s):
        return self.tr(s)

    def url(self, path):
        return self.prefix + path

    def page_url(self, key, lang=None):
        lang = lang or self.lang
        f = PAGES[key]['file']
        if f == 'index.html':
            f = ''
        return (self.prefix + ('pt/' if lang == 'pt' else '')) + f if f else (self.prefix + ('pt/' if lang == 'pt' else '')) or './'

    def ancestors(self, el):
        while el in self.parent:
            el = self.parent[el]
            yield el

    def render(self, root):
        self.root = root
        for p in root.iter():
            for c in p:
                self.parent[c] = p
        # root sections -> ids; menu labels -> ids
        self.section_ids = {}
        for c in root:
            n = base_name(c)
            m = re.fullmatch(r'\d\d · (.+)', n)
            label = m.group(1) if m else n
            if m or n in ('Contato', 'Projetos', 'Playground', 'Sobre', 'Ver mais', 'Hero'):
                self.section_ids[n] = slug(label)
                self.nav_targets[label] = slug(label)
        return self.el(root, root=True)

    def attrs(self, el, extra_decl=(), extra_cls=()):
        decl = tw_to_css(el.get('class', ''))
        par = self.parent.get(el)
        if par is not None and 'flex-wrap' in (par.get('class') or '').split():
            decl = [d for d in decl if d != ('align-self', 'stretch')]
        if el.get('style'):
            decl += [tuple(x.strip() for x in el.get('style').split(':', 1))]
        decl += list(extra_decl)
        nid = el.get('data-node-id')
        # desktop: text cards side by side (nbox, dbox, annotations) all take the tallest card's height
        par0 = self.parent.get(el)
        if self.view == 'd' and par0 is not None and re.fullmatch(r'nbox|dbox|card|anot \d+', el.get('data-name') or '') \
                and 'flex-col' not in (par0.get('class') or '').split() and 'flex-wrap' not in (par0.get('class') or '').split():
            decl = [d for d in decl if d[0] != 'align-self'] + [('align-self', 'stretch')]
        # mobile layout also serves wider phones and tablets: media boxes scale by their Figma ratio
        if self.view == 'm' and nid in DIMS and el.tag == 'div' and any(k == 'height' and v.endswith('px') for k, v in decl) \
                and has_media(el) and el.find('.//p') is None \
                and (('width', '100%') in decl or self.parent.get(el) in self.scaled):
            w, h = DIMS[nid]
            self.scaled.add(el)
            decl = [d for d in decl if d[0] != 'height']
            decl = [('width', '100%') if k == 'width' and v.endswith('px') else (k, v) for k, v in decl]
            decl += [('height', 'auto'), ('aspect-ratio', '%g / %g' % (w, h)), ('min-height', '0')]
        if el.tag == 'p' and nid in HEIGHTS and not any(c.tag == 'br' for c in el.iter()):
            fs, _ = inherited(el, self.parent, 'text')
            lh, px = inherited(el, self.parent, 'leading')
            if fs and lh:
                line = lh if px else lh * fs
                hug = any(k == 'width' and v.endswith('px') for k, v in decl)
                if hug and HEIGHTS[nid] < line * 1.5 and 'whitespace-' not in (el.get('class') or ''):
                    # hug the text so a longer translation grows the chip instead of being clipped
                    decl.append(('white-space', 'nowrap'))
                    decl = [x for k, v in decl for x in ([('width', 'max-content'), ('min-width', v)] if k == 'width' and v.endswith('px') else [(k, v)])]
        if self.view == 'm' and el.tag == 'p' and len(text_of(el)) > 24:
            # long single-line labels may wrap on narrow phones
            decl = [(k, 'normal') if k == 'white-space' and v == 'nowrap' else (k, v) for k, v in decl]
            decl = [('max-width', '100%') if k == 'max-width' else (k, v) for k, v in decl] + [('max-width', '100%')]
        # boxes that hold text grow with it (translations run longer than the Figma copy)
        if el.tag == 'div' and el.find('.//p') is not None and not has_media(el) \
                and any(k == 'height' and v.endswith('px') and float(v[:-2]) >= 80 for k, v in decl):
            decl = [('min-height', v) if k == 'height' else (k, v) for k, v in decl]
        # in mobile, fixed-width text that fills its column follows the column
        if self.view == 'm' and el.tag == 'p' and nid in DIMS and par_fills(el, self.parent) \
                and any(k == 'width' and v.endswith('px') for k, v in decl):
            decl = [('width', '100%') if k == 'width' else (k, v) for k, v in decl]
        # mobile rows of equal boxes (e.g. the stat grid) keep their column count at any width
        par = self.parent.get(el)
        if self.view == 'm' and par is not None and 'flex-wrap' in (par.get('class') or '').split() \
                and nid in DIMS and par.get('data-node-id') in DIMS:
            pw = DIMS[par.get('data-node-id')][0]
            m = re.search(r'gap-\[(\d+)px(?:_(\d+)px)?\]', par.get('class') or '')
            g = float(m.group(2) or m.group(1)) if m else 0
            cw = DIMS[nid][0]
            k = round((pw + g) / (cw + g)) if cw else 0
            if k >= 2 and abs(k * cw + (k - 1) * g - pw) < 2 and any(kk == 'width' and v.endswith('px') for kk, v in decl):
                decl = [(kk, v) for kk, v in decl if kk != 'width'] + [('width', 'calc((100%% - %gpx) / %d)' % ((k - 1) * g, k))]
        if nid in TEXT_SLACK:
            px = TEXT_SLACK[nid]
            decl = [('width', 'calc(%s + %dpx)' % (v, px)) if k == 'width' else (k, v) for k, v in decl if k != 'max-width']
            decl += [('margin-right', '-%dpx' % px), ('max-width', 'none')]
        # Figma strokes sit inside the frame and don't take layout space: draw them on an overlay
        stroke = [d for d in decl if d[0].startswith('border-') and d[0] != 'border-radius']
        if el.tag == 'langsel' or el.get('data-node-id') in STROKES_IN_LAYOUT:
            stroke = []
        decl = [d for d in decl if d not in stroke]
        if any(d[0].endswith('width') and d[1] != '0' for d in stroke):
            extra_cls = list(extra_cls) + [self.reg.stroke(stroke)]
        classes = [c for c in [self.reg.cls(decl)] + list(extra_cls) if c]
        dbg = ' data-n="%s"' % el.get('data-node-id') if DEBUG and el.get('data-node-id') else ''
        return (' class="%s"' % ' '.join(classes) if classes else '') + dbg

    def text(self, s):
        return html.escape(self.t(s), quote=False) if s else ''

    def children(self, el):
        out = self.text(el.text)
        for c in el:
            out += self.el(c)
            out += self.text(c.tail)
        return out

    # -- main
    def el(self, el, root=False):
        tag = el.tag
        name = el.get('data-name') or ''
        bname = base_name(el)
        cls = el.get('class', '')

        if tag == 'br':
            return '<br>'
        if tag == 'langsel':
            return self.langsel(el)
        if tag == 'img':
            return ''  # handled by the wrapper
        if name in ICON_LAYERS:
            return self.icon(el, name)

        extra_decl, extra_cls, attrs = [], [], ''
        out_tag = 'div' if tag not in ('p', 'span', 'a') else tag

        if root:
            extra_cls.append('frame')
            return '<main%s>%s</main>' % (self.attrs(el, extra_cls=extra_cls), self.children(el))

        # the top bar sticks to the top of the viewport
        if name == 'topo':
            out_tag = 'header'
            if self.view == 'd' or self.page != 'home':
                extra_cls.append('topbar')
            if self.view == 'm':
                head = '<header%s>%s</header>' % (self.attrs(el, extra_cls=extra_cls), self.children(el))
                return head + (self.mobile_bar(el) if self.page == 'home' else self.mobile_nav())

        # sections get ids so the menu can link to them
        if self.parent.get(el) is self.root and bname in self.section_ids:
            attrs += ' id="%s%s"' % ('' if self.view == 'd' else 'm-', self.section_ids[bname])
            if out_tag == 'div':
                out_tag = 'section'

        # images
        if name in IMAGES_EXACT:
            bname = name
            IMAGES[bname] = IMAGES_EXACT[name]
        if bname in IMAGES and len(el) and el[0].tag == 'img':
            alt = self.alt_for(el)
            zoom = ' data-zoom' if self.page != 'home' else ''
            badge = ZOOM_BADGE if zoom else ''
            return '<div%s%s><img src="%s" alt="%s" loading="lazy" decoding="async" class="fill"%s>%s</div>' % (
                self.attrs(el), attrs, self.url(IMAGES[bname]), html.escape(alt), zoom, badge)
        if bname in VIDEOS and len(el) == 0:
            v = VIDEOS[bname]
            if not os.path.exists(os.path.join(OUT, v + '.mp4')):
                # no video uploaded yet: show the still frame from Figma
                return '<div%s%s><img src="%s.jpg" alt="" loading="lazy" decoding="async" class="fill"></div>' % (
                    self.attrs(el), attrs, self.url(v))
            return ('<div%s%s><video class="fill" muted loop playsinline autoplay preload="none" '
                    'data-src="%s.mp4" poster="%s.jpg" aria-hidden="true"></video></div>') % (
                self.attrs(el), attrs, self.url(v), self.url(v))

        # the mobile frames still have grey placeholders where desktop has the ThumbDrop videos
        if self.view == 'm' and name.startswith(('[vídeo] A', '[vídeo] B')) and el.find('.//p') is not None:
            v = 'video/thumbdrop/video-v1' if name.startswith('[vídeo] A') else 'video/thumbdrop/video-v2'
            cls = el.get('class').replace('bg-[#d0cdca]', 'bg-[#675d54]')
            el.set('class', cls)
            return ('<div%s%s><video class="fill" muted loop playsinline autoplay preload="none" '
                    'data-src="%s.mp4" poster="%s.jpg" aria-hidden="true"></video></div>') % (
                self.attrs(el, extra_decl=[('aspect-ratio', '568 / 320'), ('height', 'auto')]), attrs, self.url(v), self.url(v))

        # links and buttons
        link = self.link_for(el)
        if link:
            kind, target = link
            if kind == 'copy':
                return '<button type="button" data-copy="%s"%s%s>%s</button>' % (
                    LINKS['email'], self.attrs(el, extra_cls=['btn']), attrs, self.children(el))
            ext = target.startswith('http')
            return '<a href="%s"%s%s%s>%s</a>' % (
                html.escape(target), ' target="_blank" rel="noopener"' if ext else '',
                self.attrs(el, extra_cls=['menu-link' if kind == 'anchor' else 'lnk']), attrs, self.children(el))

        if tag == 'a':
            return '<a href="%s" target="_blank" rel="noopener"%s>%s</a>' % (
                html.escape(el.get('href')), self.attrs(el), self.children(el))

        return '<%s%s%s>%s</%s>' % (out_tag, self.attrs(el, extra_decl, extra_cls), attrs,
                                    self.children(el), out_tag)

    # -- mobile additions
    def mobile_nav(self):
        # the Figma mobile frames keep the case menu as a hidden layer; on phones it becomes a
        # sticky, horizontally scrollable row under the top bar
        links = []
        for label in self.menu_labels:
            key = MENU_ALIAS.get(label, label)
            if key in self.nav_targets:
                links.append('<a href="#m-%s" class="mnav-link">%s</a>' % (self.nav_targets[key], self.text(label)))
        return ('<nav class="mnav" aria-label="%s"><div class="mnav-row">%s</div>'
                '<span class="mnav-progress" aria-hidden="true"></span></nav>') % (self.t('Seções'), ''.join(links))

    def mobile_bar(self, topo):
        # Home: the tall header scrolls away and a compact bar slides in
        lang = next((c for c in topo.iter() if c.tag == 'langsel'), None)
        return ('<div class="mbar" aria-hidden="true"><a href="#" class="mbar-name" tabindex="-1">%s</a>%s</div>') % (
            self.text('Erick · product & design engineer'), self.langsel(lang).replace('<a ', '<a tabindex="-1" ') if lang is not None else '')

    # -- pieces
    def alt_for(self, el):
        for a in [el] + list(self.ancestors(el)):
            n = a.get('data-name') or ''
            m = re.match(r'\[(?:mockup|mockup anotado|imagem)\] (.+)', n)
            if m:
                return self.t(m.group(1))
        return ''

    def icon(self, el, name):
        key = name
        if name == 'Ellipse':
            return '<div%s><span class="dot"></span></div>' % self.attrs(el)
        if name == 'Copy':
            bg = next((re.search(r'bg-\[(#\w+)\]', a.get('class') or '').group(1) for a in self.ancestors(el)
                       if re.search(r'bg-\[#\w+\]', a.get('class') or '')), None)
            dark = bg == '#fbf7f4'
            key = 'Copy:dark' if dark else 'Copy:light'
        extra = ICON_BOX.get(name, [])
        Renderer.uid += 1
        svg = re.sub(r'(id="|url\(#)(def_[\w]+)', lambda m: '%s%s_%s%d' % (m.group(1), m.group(2), self.view, Renderer.uid), self.icons[key])
        return '<div%s>%s</div>' % (self.attrs(el, extra_decl=extra, extra_cls=['ico']), svg)

    def langsel(self, el):
        en = self.page_url(self.page, 'en')
        pt = self.page_url(self.page, 'pt')
        on = 'lang-on'
        return ('<nav%s aria-label="Language"><a href="%s" hreflang="en" lang="en" class="lang %s"%s>EN</a>'
                '<a href="%s" hreflang="pt-BR" lang="pt-BR" class="lang %s"%s>PT</a></nav>') % (
            self.attrs(el, extra_cls=['langsel']),
            en, on if self.lang == 'en' else '', ' aria-current="true"' if self.lang == 'en' else '',
            pt, on if self.lang == 'pt' else '', ' aria-current="true"' if self.lang == 'pt' else '')

    def link_for(self, el):
        name = el.get('data-name') or ''
        txt = text_of(el)
        if name in ('projeto 01',):
            title = text_of(el.find('.//p'))
            return ('page', self.page_url(CASE_BY_TITLE[title]))
        m = re.fullmatch(r'projeto · (.+)', name)
        if m:
            return ('page', self.page_url(CASE_BY_TITLE[m.group(1)]))
        if name == 'ver o case':
            return ('url', LINKS['figma'][self.page])
        if name in ('e-mail', 'botão'):
            if 'Currículo' in txt or 'currículo' in txt:
                return ('url', LINKS['cv'])
            if txt == 'LinkedIn':
                return ('url', LINKS['linkedin'])
            if 'e-mail' in txt or '@' in txt:
                return ('copy', None)
        # brand at the top left goes home; case menu items go to their section
        par = self.parent.get(el)
        if par is not None and par.get('data-name') == 'topo' and el.tag == 'p' and 'Erick' in txt:
            return ('page', self.page_url('home'))
        if par is not None and par.get('data-name') == 'menu' and el.tag == 'p':
            key = MENU_ALIAS.get(txt, txt)
            if key in self.nav_targets:
                return ('anchor', '#' + self.nav_targets[key])
            raise KeyError('menu target not found: %s in %s' % (key, self.nav_targets))
        return None


def slug(s):
    s = s.lower()
    for a, b in (('á', 'a'), ('à', 'a'), ('ã', 'a'), ('â', 'a'), ('é', 'e'), ('ê', 'e'), ('í', 'i'),
                 ('ó', 'o'), ('ô', 'o'), ('õ', 'o'), ('ú', 'u'), ('ç', 'c')):
        s = s.replace(a, b)
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


# ------------------------------------------------------------ page shell

BASE_CSS = r"""
@font-face{font-family:'Sofia Sans';font-style:normal;font-weight:300 900;font-display:swap;
  src:url(%(p)sfonts/sofia-sans-latin-ext.woff2) format('woff2');
  unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Sofia Sans';font-style:normal;font-weight:300 900;font-display:swap;
  src:url(%(p)sfonts/sofia-sans-latin.woff2) format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
*,::before,::after{box-sizing:border-box;margin:0;padding:0;border:0 solid}
html{-webkit-text-size-adjust:100%%;text-size-adjust:100%%;scroll-behavior:smooth;background:#fbf7f4}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{background:#fbf7f4;color:#232323;font-family:'Sofia Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:clip}
img,video,svg{display:block}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;cursor:pointer;text-align:inherit}
.frame{max-width:1400px;margin:0 auto;min-height:100vh}
.fill{position:absolute;inset:0;width:100%%;height:100%%;object-fit:cover;max-width:none}
.ico{flex-shrink:0}
.dot{position:absolute;inset:0;border-radius:50%%;background:#14ff7e}
header.topbar{position:sticky;top:0;z-index:40;background:#fbf7f4;box-shadow:0 0 0 100vmax #fbf7f4;clip-path:inset(0 -100vmax)}
section[id],div[id]{scroll-margin-top:var(--bar,80px)}
.lang{display:flex;align-items:center;justify-content:center;padding:2px 9px;border-radius:999px;font-size:12px;line-height:1.5;letter-spacing:.72px;color:#a39383;transition:color .2s}
.lang:hover{color:#39332e}
.lang.lang-on{background:#232323;color:#fbf7f4}
.lnk,.btn{transition:opacity .2s,transform .2s}
.lnk:hover,.btn:hover{opacity:.85}
.menu-link{transition:color .2s}
.menu-link:hover,.menu-link[aria-current="true"]{color:#232323}
a:focus-visible,button:focus-visible{outline:2px solid #232323;outline-offset:3px}
.view-m{display:none}
@media (max-width:1023.98px){.view-d{display:none}.view-m{display:block}}
@media (min-width:1024px) and (max-width:1399.98px){.view-d{zoom:var(--z,.72)}}
%(zoom_steps)s
.totop{position:fixed;right:24px;bottom:24px;z-index:50;width:48px;height:48px;border-radius:999px;background:#39332e;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .25s,transform .25s,visibility .25s,background .2s;box-shadow:0 6px 20px rgba(35,35,35,.18)}
.totop.on{opacity:1;visibility:visible;transform:none}
.totop:hover{background:#232323}
.totop .ico{position:relative;width:24px;height:24px;transform:rotate(-90deg)}
.totop svg path{fill:#fbf7f4}
@media (max-width:1023.98px){.totop{right:16px;bottom:16px;width:44px;height:44px}}
img[data-zoom]{cursor:zoom-in}
img[data-zoom]:focus-visible{outline:2px solid #232323;outline-offset:-4px}
.lb{position:fixed;inset:0;z-index:70;display:flex;align-items:center;justify-content:center;padding:56px 24px;background:rgba(35,35,35,.92);opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s;cursor:zoom-out}
.lb.on{opacity:1;visibility:visible}
.lb img{max-width:100%%;max-height:100%%;width:auto;height:auto;object-fit:contain;border-radius:12px;cursor:default;transform:scale(.97);transition:transform .25s}
.lb.on img{transform:none}
.lb-x{position:absolute;top:16px;right:16px;width:44px;height:44px;border-radius:999px;background:#fbf7f4;display:flex;align-items:center;justify-content:center}
.lb-x:hover{background:#eeeae2}
.lb-x svg{width:18px;height:18px}
@media (max-width:1023.98px){.lb{padding:64px 12px}}
body.lb-open{overflow:hidden}
.zbadge{display:none}
.mnav,.mbar{display:none}
@media (max-width:1023.98px){
.zbadge{display:flex;position:absolute;right:8px;bottom:8px;width:28px;height:28px;border-radius:999px;background:rgba(35,35,35,.72);align-items:center;justify-content:center;pointer-events:none}
.zbadge svg{width:16px;height:16px}
.mnav{display:block;position:sticky;top:42px;z-index:39;align-self:stretch;margin:0 -12px;background:#fbf7f4;border-bottom:1px solid #e4e1de}
.mnav-row{display:flex;gap:20px;overflow-x:auto;padding:6px 12px 0;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.mnav-row::-webkit-scrollbar{display:none}
.mnav-link{flex:0 0 auto;font-size:14px;line-height:1.5;letter-spacing:.28px;color:#675d54;padding:4px 0 8px;border-bottom:2px solid transparent;transition:color .2s,border-color .2s}
.mnav-link[aria-current="true"]{color:#232323;border-bottom-color:#232323}
.mnav-progress{position:absolute;left:0;right:0;bottom:-1px;height:2px;background:#99928c;transform-origin:0 50%%;transform:scaleX(var(--p,0))}
.view-m [id]{scroll-margin-top:96px}
.mbar{display:flex;position:fixed;top:0;left:0;right:0;z-index:45;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;background:#fbf7f4;border-bottom:1px solid #e4e1de;transform:translateY(-100%%);visibility:hidden;transition:transform .25s,visibility .25s}
.mbar.on{transform:none;visibility:visible}
.mbar-name{font-weight:700;font-size:16px;line-height:1.5;letter-spacing:.32px;color:#232323;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mbar .langsel{flex-shrink:0;border:1px solid #d0cdca;border-radius:999px;padding:2px;display:flex}
.lb{display:block;overflow:auto;padding:0;white-space:nowrap;text-align:center;-webkit-overflow-scrolling:touch}
.lb img{display:inline-block;height:62vh;width:auto;max-width:none;max-height:none;margin:19vh 12px 0;vertical-align:top}
.lb-hint{display:block;position:fixed;left:0;right:0;bottom:24px;text-align:center;color:#d0cdca;font-size:12px;line-height:1.5;letter-spacing:.24px;pointer-events:none}
}
.lb-hint{display:none}
.toast{position:fixed;left:50%%;bottom:24px;transform:translate(-50%%,8px);z-index:60;background:#232323;color:#fbf7f4;font-size:14px;line-height:1.5;letter-spacing:.28px;padding:10px 18px;border-radius:999px;opacity:0;visibility:hidden;transition:opacity .25s,transform .25s,visibility .25s}
.toast.on{opacity:1;visibility:visible;transform:translate(-50%%,0)}
"""


def zoom_steps():
    # CSS-only fallback for the 1024-1399px range; the script sets the exact value.
    out = []
    w = 1024
    while w < 1400:
        z = w / 1400
        out.append('@media (min-width:%dpx) and (max-width:%.2fpx){.view-d{--z:%.4f}}' % (w, w + 15.98, z))
        w += 16
    return '\n'.join(out)


SITE_JS = r"""
(function(){
  var root=document.documentElement;
  function fit(){var w=window.innerWidth;root.style.setProperty('--z',w>=1024&&w<1400?(w/1400).toFixed(4):1)}
  fit();window.addEventListener('resize',fit);

  // back to top
  var top=document.querySelector('.totop');
  function onScroll(){top&&top.classList.toggle('on',window.scrollY>600)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  top&&top.addEventListener('click',function(){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});

  // copy e-mail
  var toast=document.querySelector('.toast'),tid;
  function say(){if(!toast)return;toast.classList.add('on');clearTimeout(tid);tid=setTimeout(function(){toast.classList.remove('on')},2200)}
  document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){
    var v=b.getAttribute('data-copy');
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(v).then(say,function(){location.href='mailto:'+v})}
    else{var t=document.createElement('textarea');t.value=v;t.setAttribute('readonly','');t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();
      try{document.execCommand('copy');say()}catch(e){location.href='mailto:'+v}document.body.removeChild(t)}
  })});

  // videos: load when near the viewport, pause when away
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vids=[].slice.call(document.querySelectorAll('video[data-src]'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;
      if(e.isIntersecting){if(!v.src){v.src=v.getAttribute('data-src');v.preload='auto'}if(!still){var p=v.play();p&&p.catch&&p.catch(function(){})}}
      else if(v.src){v.pause()}})},{rootMargin:'300px 0px'});
    vids.forEach(function(v){io.observe(v)});
  }else{vids.forEach(function(v){v.src=v.getAttribute('data-src');if(still)v.removeAttribute('autoplay')})}

  // image lightbox (case pages)
  var lb=document.querySelector('.lb');
  var zooms=[].slice.call(document.querySelectorAll('img[data-zoom]'));
  if(lb&&zooms.length){
    var big=lb.querySelector('img'),x=lb.querySelector('.lb-x'),last=null;
    function open(img){last=img;big.src=img.currentSrc||img.src;big.alt=img.alt;lb.hidden=false;
      requestAnimationFrame(function(){lb.classList.add('on')});document.body.classList.add('lb-open');x.focus();
      function center(){lb.scrollLeft=Math.max(0,(lb.scrollWidth-lb.clientWidth)/2)}big.complete?center():big.onload=center}
    function close(){lb.classList.remove('on');document.body.classList.remove('lb-open');
      setTimeout(function(){lb.hidden=true;big.removeAttribute('src')},250);last&&last.focus()}
    zooms.forEach(function(img){img.setAttribute('tabindex','0');img.setAttribute('role','button');
      img.addEventListener('click',function(){open(img)});
      img.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(img)}})});
    lb.addEventListener('click',function(e){if(e.target!==big)close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('on'))close()});
  }

  // current section in the menus (desktop row and mobile strip)
  var links=[].slice.call(document.querySelectorAll('.menu-link,.mnav-link'));
  if(links.length&&'IntersectionObserver' in window){
    var byId={};links.forEach(function(a){var id=a.getAttribute('href').slice(1);(byId[id]=byId[id]||[]).push(a)});
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
      var mob=e.target.id.indexOf('m-')===0;
      links.forEach(function(a){if((a.classList.contains('mnav-link'))===mob)a.removeAttribute('aria-current')});
      (byId[e.target.id]||[]).forEach(function(a){a.setAttribute('aria-current','true');
        if(mob){var row=a.parentNode;row.scrollTo({left:a.offsetLeft-row.clientWidth/2+a.clientWidth/2,behavior:'smooth'})}})})},{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(byId).forEach(function(id){var s=document.getElementById(id);s&&so.observe(s)});
  }

  // reading progress (mobile case strip) and compact bar (mobile Home)
  var prog=document.querySelector('.mnav-progress'),mbar=document.querySelector('.mbar'),mhead=document.querySelector('.view-m header');
  function onScroll2(){
    if(prog){var h=document.documentElement.scrollHeight-innerHeight;prog.style.setProperty('--p',h>0?Math.min(1,scrollY/h):0)}
    if(mbar&&mhead){mbar.classList.toggle('on',scrollY>mhead.offsetTop+mhead.offsetHeight)}
  }
  window.addEventListener('scroll',onScroll2,{passive:true});onScroll2();
})();
"""


def page_html(key, lang, desk, mob, reg, icons, prefix, tr):
    other = 'pt' if lang == 'en' else 'en'

    def purl(k, lg):
        f = PAGES[k]['file']
        base = (SITE_URL or prefix) + ('pt/' if lg == 'pt' else '')
        return (base + ('' if f == 'index.html' else f)) or './'

    title = tr(PAGES[key]['title'])
    desc = tr(DESCRIPTIONS[key])
    caret = icons['CaretRight']
    return """<!doctype html>
<html lang="%(htmllang)s">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%(title)s</title>
<meta name="description" content="%(desc)s">
<meta name="theme-color" content="#fbf7f4">
<link rel="canonical" href="%(canon)s">
<link rel="alternate" hreflang="en" href="%(en)s">
<link rel="alternate" hreflang="pt-BR" href="%(pt)s">
<link rel="alternate" hreflang="x-default" href="%(en)s">
<meta property="og:type" content="website">
<meta property="og:title" content="%(title)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:image" content="%(og)s">
<meta property="og:locale" content="%(oglocale)s">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="%(p)sfavicon.svg" type="image/svg+xml">
<link rel="preload" href="%(p)sfonts/sofia-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="%(p)sassets/site.css">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TM34J12CLE"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-TM34J12CLE');</script>
</head>
<body>
<div class="view view-d">%(desk)s</div>
<div class="view view-m">%(mob)s</div>
<button type="button" class="totop" aria-label="%(totop)s"><span class="ico">%(caret)s</span></button>
<div class="toast" role="status" aria-live="polite">%(copied)s</div>
<div class="lb" role="dialog" aria-modal="true" aria-label="%(zoomlabel)s" hidden><button type="button" class="lb-x" aria-label="%(close)s"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="#232323" stroke-width="2" stroke-linecap="round"/></svg></button><img alt=""><span class="lb-hint">%(hint)s</span></div>
<script src="%(p)sassets/site.js" defer></script>
</body>
</html>
""" % dict(htmllang='en' if lang == 'en' else 'pt-BR', title=html.escape(title), desc=html.escape(desc),
           canon=purl(key, lang), en=purl(key, 'en'), pt=purl(key, 'pt'), og=(SITE_URL or prefix) + 'og-image.jpg',
           oglocale='en_US' if lang == 'en' else 'pt_BR', p=prefix, desk=desk, mob=mob,
           totop=tr('Voltar ao topo'), copied=tr('E-mail copiado'), caret=caret,
           zoomlabel=tr('Imagem ampliada'), close=tr('Fechar'), hint=tr('Arraste para ver a imagem inteira'))


DEBUG = os.environ.get('DEBUG') == '1'
SITE_URL = os.environ.get('SITE_URL', 'https://erickteixeira.art/')  # e.g. https://yourdomain.com/ — absolute URLs for canonical/hreflang/og

DESCRIPTIONS = {
    'home': 'Treze anos de design. Marca, campanha, produto, design system e front-end na mesma entrega, com IA no meio do processo.',
    'nega': 'O catálogo de uma trancista virou agendamento sem sair do WhatsApp. Pesquisa, design system e front-end.',
    'thumb': 'Ferramenta interna que tirou a thumbnail da fila do time de design, com IA dentro do editor.',
    'ct': 'Uma ativação de Copa que não cabia no template do portal. Superfície dedicada, brandbook, motion e código.',
    'links': 'A página de links deixou de ser alugada e passou a medir a si mesma. Design system, acessibilidade e telemetria.',
}


# ------------------------------------------------------------------ i18n

class Translator:
    def __init__(self, lang):
        self.lang = lang
        self.missing = []
        self.en = {}
        for part in ('home', 'nega', 'thumb', 'ct', 'links'):
            ns = {}
            exec(open(os.path.join(SRC, 'i18n', 'en_%s.py' % part), encoding='utf-8').read(), ns)
            self.en.update(ns['T'])

    def __call__(self, s):
        if self.lang == 'pt' or not s:
            return s
        if s in self.en:
            return self.en[s]
        if not re.search(r'[A-Za-zÀ-ÿ]', s):
            return s
        core = s.strip()
        if core in self.en:
            lead = s[:len(s) - len(s.lstrip())]
            trail = s[len(s.rstrip()):]
            return lead + self.en[core] + trail
        self.missing.append(s)
        return s


# ------------------------------------------------------------------ main

def build():
    icons = load_icons()
    reg = CSSRegistry()
    if os.path.exists(OUT):
        for n in os.listdir(OUT):
            p = os.path.join(OUT, n)
            if n in ('img', 'video', 'fonts', 'favicon.svg', 'og-image.jpg', '.htaccess'):
                continue
            shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    os.makedirs(os.path.join(OUT, 'assets'), exist_ok=True)
    trees = {}
    for key in PAGES:
        for view in ('d', 'm'):
            trees[key, view] = open(os.path.join(SRC, 'fig', '%s_%s.jsx' % (view, key)), encoding='utf-8').read()
    menus = {}
    for key in PAGES:
        menu = [e for e in jsx_to_tree(trees[key, 'd']).iter() if e.get('data-name') == 'menu']
        menus[key] = [text_of(p) for p in menu[0]] if menu else []
    missing = []
    for lang in ('en', 'pt'):
        tr = Translator(lang)
        prefix = '' if lang == 'en' else '../'
        for key, meta in PAGES.items():
            parts = []
            for view in ('d', 'm'):
                r = Renderer(key, view, lang, reg, icons, tr, prefix)
                r.menu_labels = menus[key]
                parts.append(r.render(jsx_to_tree(trees[key, view])))
            doc = page_html(key, lang, parts[0], parts[1], reg, icons, prefix, tr)
            d = OUT if lang == 'en' else os.path.join(OUT, 'pt')
            os.makedirs(d, exist_ok=True)
            open(os.path.join(d, meta['file']), 'w', encoding='utf-8').write(doc)
        missing += tr.missing
    css = BASE_CSS % {'p': '../', 'zoom_steps': zoom_steps()} + '\n' + reg.css() + '\n'
    open(os.path.join(OUT, 'assets', 'site.css'), 'w', encoding='utf-8').write(css)
    open(os.path.join(OUT, 'assets', 'site.js'), 'w', encoding='utf-8').write(SITE_JS.strip() + '\n')
    uniq = list(dict.fromkeys(missing))
    json.dump(uniq, open(os.path.join(ROOT, 'build', 'missing-en.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    print('pages ok; css rules:', len(reg.rules), '; untranslated strings:', len(uniq))


if __name__ == '__main__':
    build()
