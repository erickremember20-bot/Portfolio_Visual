# Assets (originais)

Os arquivos daqui são convertidos para `site/` por `build/assets.py`: imagens viram WebP/JPG e vídeos viram MP4 sem áudio, com imagem de capa. Para trocar um asset, substitua o arquivo **mantendo o mesmo nome** e gere o site de novo.

```
assets/
├── home/
│   ├── hero/foto-perfil.jpg
│   ├── logos/logo-{kabum,netshoes,canaltech,motorola,magalu}.png
│   ├── sobre/foto-{premio,grupo,time}.png
│   ├── playground/{illustration,avdc,tyler,rich-boy,gold-life,will}.mp4
│   └── capas/            capas dos 4 cases (vídeo 16:9)
├── cases/
│   ├── nega-nago/        01-hero … 09-imagens-catalogo
│   ├── thumbdrop/        01-hero … 05-thumbs, video-v1.mp4, video-v2.mp4
│   ├── ct-em-campo/      01-hero … 09-ponto-de-entrada, 07-motion.mp4
│   └── canaltech-link-hub/ 01-hero-mockup … 07-duas-densidades
└── shared/               favicon.svg, og-image.jpg
```

## Pendentes

| Arquivo | Onde entra | Situação hoje |
|---|---|---|

Os 4 vídeos de capa já estão no site.
