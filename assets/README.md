# Assets do portfólio

Pasta de imagens, vídeos e arquivos do portfólio (Home + 4 cases).
Os nomes abaixo substituem os placeholders (`placehold.co`) dos HTMLs exportados do Figma, na ordem em que aparecem em cada página.

**Tamanhos:** a coluna "Tamanho no layout" é o tamanho do card no desktop de 1400 px. Exporte em **2×** (ex.: 1161×523 → 2322×1046) para ficar nítido em telas retina.
**Formatos:** foto → `.jpg` ou `.webp` · interface/print com texto → `.png` ou `.webp` · logo/ícone → `.svg` (ou `.png` transparente) · vídeo → `.mp4` (H.264) ou `.webm`.
**Nomes:** minúsculas, sem acento, palavras separadas por hífen.

```
assets/
├── home/
│   ├── hero/          foto do topo
│   ├── logos/         marcas da faixa de clientes
│   ├── cases/         capas dos 4 cards de case da Home
│   ├── playground/    6 trabalhos do "Laboratório & Experimentos"
│   └── sobre/         fotos da seção "Sobre"
├── cases/
│   ├── nega-nago/
│   ├── thumbdrop/
│   ├── ct-em-campo/
│   └── canaltech-link-hub/
├── videos/            vídeos pesados (demos, short films, animações)
└── shared/            favicon, imagem de compartilhamento (og-image), currículo em PDF
```

---

## Home

### `home/hero/` e `home/sobre/` (já no repositório)
| Arquivo | Onde |
|---|---|
| `hero/foto-perfil.jpg` | Foto do topo |
| `sobre/foto-premio.png` | Seção "Sobre" — foto 1 |
| `sobre/foto-grupo.png` | Seção "Sobre" — foto 2 |
| `sobre/foto-time.png` | Seção "Sobre" — foto 3 |

### `home/logos/` (já no repositório)
`logo-canaltech.png` · `logo-kabum.png` · `logo-netshoes.png` · `logo-motorola.png` · `logo-magalu.png`

### `home/cases/`: capas dos cards
| Arquivo | Card |
|---|---|
| `nega-nago.jpg` | Nega Nagô |
| `thumbdrop.jpg` | ThumbDrop |
| `ct-em-campo.jpg` | CT em Campo · Canaltech × Netshoes |
| `canaltech-link-hub.jpg` | Canaltech · Hub de links |

### `home/playground/`
| Arquivo | Trabalho |
|---|---|
| `01-ilustracao-camiseta-formatura.jpg` | Ilustração 2D · Apparel & Print |
| `02-short-film-ia.mp4` | Short Film · IA Generativa (Nano Banana 2 + Kling 3.0) |
| `03-animacao-3d-tyler.mp4` | Animação 3D · Character Design (Unreal Engine 5) |
| `04-animacao-3d-gold-life.mp4` | Animação 3D · Brand Experience (Gold Life Black Flag) |
| `05-animacao-ia-marca.mp4` | Animação em IA · Conteúdo de Marca |
| `06-quadro-papel-will-smith.jpg` | Craft Físico · Arte em Camadas |

Para cada vídeo, suba também uma imagem de capa com o mesmo nome em `.jpg` (ex.: `02-short-film-ia.jpg`). Se um vídeo passar de ~20 MB, coloque ele em `assets/videos/`.

---

## Cases

### `cases/nega-nago/`
| # | Arquivo | Tamanho no layout | Seção |
|---|---|---|---|
| 01 | `01-hero.jpg` | 1161×523 | Topo |
| 02 | `02-antes.jpg` | 566×380 | 02 · Antes e depois |
| 03 | `03-depois.jpg` | 566×380 | 02 · Antes e depois |
| 04 | `04-whatsapp.jpg` | 1162×440 | 02 · Mensagem no WhatsApp |
| 05 | `05-restricoes.jpg` | 1160×520 | 03 · Restrições |
| 06 | `06-wireframe.jpg` | 569×360 | 04 · Pesquisa |
| 07 | `07-prototype.jpg` | 569×360 | 04 · Pesquisa |
| 08 | `08-design-system.jpg` | 1160×520 | 05 · Sistema e engenharia |
| 09 | `09-fluxo-imagens-ia.jpg` | 1159×348 | 06 · Catálogo de imagens |

### `cases/thumbdrop/`
| # | Arquivo | Tamanho no layout | Seção |
|---|---|---|---|
| 01 | `01-hero.jpg` | 1161×523 | Topo |
| 02 | `02-quatro-estados.jpg` | 1159×560 | 03 · Decisões |
| 03 | `03-comportamentos.jpg` | 1160×520 | 04 · Craft |
| 04 | `04-biblioteca.jpg` | 1159×460 | 05 · Sistema |
| 05 | `05-thumbs.jpg` | 1160×400 | 06 · Hoje |

Vídeos da seção 02 (V1 e V2): `v1-producao.mp4` e `v2-producao.mp4`.

### `cases/ct-em-campo/`
| # | Arquivo | Tamanho no layout | Seção |
|---|---|---|---|
| 01 | `01-hero.jpg` | 1161×523 | Topo |
| 02 | `02-antes.jpg` | 566×380 | 02 · Antes e depois |
| 03 | `03-depois.jpg` | 566×380 | 02 · Antes e depois |
| 04 | `04-key-visual.jpg` | 1162×480 | 03 · Restrições |
| 05 | `05-cta-correcao.jpg` | 1159×360 | 04 · Sistema |
| 06 | `06-componentes-e-estado.jpg` | 1160×500 | 04 · Sistema |
| 07 | `07-social-media.jpg` | 1162×653 | 05 · Alcance |
| 08 | `08-ponto-de-entrada.jpg` | 1159×360 | 05 · Alcance |

### `cases/canaltech-link-hub/`
| # | Arquivo | Tamanho no layout | Seção |
|---|---|---|---|
| 01 | `01-hero-mockup.jpg` | 1161×523 | Topo |
| 02 | `02-antes.jpg` | 568×454 | 02 · Antes e depois |
| 03 | `03-depois.jpg` | 568×454 | 02 · Antes e depois |
| 04 | `04-quatro-decisoes.jpg` | 1162×653 | 04 · Decisões de produto |
| 05 | `05-foundations.jpg` | 570×320 | 05 · Sistema |
| 06 | `06-components.jpg` | 570×320 | 05 · Sistema |
| 07 | `07-duas-densidades.jpg` | 1159×620 | 06 · Medição |

---

## `shared/`
| Arquivo | Uso |
|---|---|
| `favicon.svg` / `favicon.png` (512×512) | Ícone da aba |
| `og-image.jpg` (1200×630) | Prévia ao compartilhar o link (LinkedIn, WhatsApp) |
| `curriculo-erick-teixeira.pdf` | Botão "Ver currículo" |

As extensões acima são sugestões: pode subir `.png` ou `.webp` com o mesmo nome base.
