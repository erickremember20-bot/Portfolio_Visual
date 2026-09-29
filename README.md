# Portfólio · Erick Teixeira

Site estático gerado a partir do Figma **Portfolio Visual — Handoff (CODE)**, página "V3 · colors": Home e 4 cases, desktop 1400 e mobile 360.

- **Inglês** é o idioma padrão, na raiz (`/`). **Português** fica em `/pt/`. O seletor EN/PT no topo alterna entre os dois.
- **Desktop (1024 px ou mais):** o layout de 1400 do Figma, escalado proporcionalmente entre 1024 e 1399 px.
- **Mobile (abaixo de 1024 px):** o layout de 360 do Figma, fluido. Funciona de 320 px até tablet, com estes ajustes para leitura no celular:
  - **Cases:** faixa de seções fixa, rolável na horizontal, com a seção atual destacada e barra de progresso de leitura.
  - **Home:** o cabeçalho alto sai de cena ao rolar e entra uma barra compacta com o nome e o EN/PT.
  - **Imagens dos cases:** mostram um selo de zoom. Ao tocar, abrem em tamanho legível e dá para arrastar para os lados.
- **Menu:** o topo fica fixo. Nos cases, o menu leva a cada seção e destaca a seção atual. O nome no canto leva para a Home.
- **Navegação:** botão de voltar ao topo. Nos cases, clicar numa imagem abre ela ampliada; clicar fora, no × ou apertar Esc fecha.

## Publicar na Hostinger

1. Abra o Gerenciador de Arquivos da Hostinger e entre em `public_html`.
2. Envie o **conteúdo** da pasta `site/`, não a pasta em si. Se estiver usando o zip, extraia ele dentro de `public_html`.
3. O arquivo `.htaccess` já vem junto e cuida de HTTPS, cache e compressão.

Para que as tags de compartilhamento (og:image, canonical e hreflang) usem o seu domínio, gere o site de novo informando o endereço:

```
SITE_URL=https://seudominio.com/ python3 build/build.py
```

## Como gerar o site de novo

```
pip install pillow imageio-ffmpeg
python3 build/assets.py   # otimiza imagens e vídeos de assets/ para site/
python3 build/build.py    # gera as páginas EN e PT
```

- `build/src/fig/*.jsx`: código de cada frame, exportado do Figma (d_ = desktop, m_ = mobile).
- `build/src/i18n/en_*.py`: traduções PT → EN. Se um texto mudar no Figma, atualize aqui. O build lista o que faltar em `build/missing-en.json`.
- `build/build.py`: links (currículo, LinkedIn, Figma de cada case) e o mapeamento de imagens e vídeos.
- `assets/`: arquivos originais. `site/`: versão otimizada, pronta para subir.
