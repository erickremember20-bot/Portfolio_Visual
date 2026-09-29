const imgCardHeroNegaNago1 = "https://www.figma.com/api/mcp/asset/3463a1e9-8224-473e-ab8f-4bd564e68607.png";
const imgCardAntesNegaNago1 = "https://www.figma.com/api/mcp/asset/dd86adff-536d-4568-827f-e912d2da27d3.png";
const imgCardDepoisNegaNago1 = "https://www.figma.com/api/mcp/asset/e53d6d95-ce0c-48db-aeb4-77f1e8bbe36f.png";
const imgCardWhatsappNeganago1 = "https://www.figma.com/api/mcp/asset/51bca779-6a78-4054-8a5d-ad84ceaeab44.png";
const imgCardRestricoes2 = "https://www.figma.com/api/mcp/asset/873253d6-9c41-469d-9d98-56d4cedb9fec.png";
const imgCardWireframe1 = "https://www.figma.com/api/mcp/asset/3a45fccf-d2c7-4f86-b776-50414274f40e.png";
const imgCardPrototype1 = "https://www.figma.com/api/mcp/asset/0212eedc-3184-4ddf-93f7-6925c70a0731.png";
const imgCardDesignSystem1 = "https://www.figma.com/api/mcp/asset/3b613955-be84-417a-a9a0-38dd91391cca.png";
const imgNeganagofluxoimagensia16X961 = "https://www.figma.com/api/mcp/asset/7f55a652-68c8-43f4-bdfd-0584b9838592.png";
const imgFigmaIcon1 = "https://www.figma.com/api/mcp/asset/baa6d9b4-d3c6-429b-ba3b-eaec2133e9db.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/f79af98c-d52f-4428-81ce-da85dfd3eb4f.svg";
const imgCopy = "https://www.figma.com/api/mcp/asset/0375e01b-0947-4fed-b74d-4f85999d1fd6.svg";
const imgReadCvLogo = "https://www.figma.com/api/mcp/asset/739b46c0-c4ad-4b04-83da-d06747de9946.svg";
const imgLinkedInIcon1 = "https://www.figma.com/api/mcp/asset/7d55583c-201f-4bef-94e2-23b3609c107c.svg";

type SeletorDeIdiomaProps = {
  className?: string;
  ativo?: "EN";
};

function SeletorDeIdioma({ className, ativo = "EN" }: SeletorDeIdiomaProps) {
  return (
    <div className={className || "border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px]"} data-node-id="2264:1585">
      <div className="bg-[#232323] content-stretch flex items-center justify-center overflow-clip px-[9px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="2264:1586" data-name="EN">
        <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.72px] whitespace-nowrap" data-node-id="2264:1587">
          EN
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[2px] relative rounded-[999px] shrink-0" data-node-id="2264:1588" data-name="PT">
        <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#a39383] text-[12px] tracking-[0.72px] whitespace-nowrap" data-node-id="2264:1589">
          PT
        </p>
      </div>
    </div>
  );
}

export default function CaseNegaNagoV3Mobile360() {
  return (
    <div className="bg-[#fbf7f4] content-stretch flex flex-col items-start pb-[32px] px-[12px] relative size-full" data-node-id="2247:1857" data-name="Case · Nega Nagô v3 · mobile 360">
      <div className="content-stretch flex h-[42px] items-center justify-between overflow-clip pb-[12px] pt-[18px] relative shrink-0 w-full" data-node-id="2247:1858" data-name="topo">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold h-full leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[240px]" data-node-id="2247:1859">{`Erick · product & design engineer`}</p>
        <SeletorDeIdioma className="border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1869" data-name="Hero">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1870">
          PROJETO REAL · PRODUTO, DESIGN E CÓDIGO · EM OPERAÇÃO
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:1871">
          O catálogo dela era um print. Virou um agendamento que não espera resposta.
        </p>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1872" data-name="[mockup] a Home no celular e no desktop">
          <div className="aspect-[336/151] relative shrink-0 w-full" data-node-id="2247:1873" data-name="card - hero - nega nago 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardHeroNegaNago1} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1874" data-name="chamada + aviso">
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1875">
            A Nega Nagô trança há treze anos em São Paulo. Treze categorias e mais de quarenta combinações de preço viviam dentro de uma imagem mandada no direct — e toda dúvida virava uma conversa de ida e volta. Fiz a pesquisa, o desenho, o design system e o código. Os agendamentos passaram de 16 para 40 por mês. Depois do lançamento, a disponibilidade passou a sair da agenda do Google que ela já usa, e o site foi para o ar em neganago.com.
          </p>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1876" data-name="aviso · sobre os números">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:1877">
              Sobre os números.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#232323] w-full" data-node-id="2247:1878">
              Produto entregue e em operação. Os resultados vieram da agenda da Mayara depois do lançamento — são medição, não projeção. A seção 07 mostra como cada um foi apurado, com intervalo de confiança e valor-p.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#f3f0eb] border border-[#d0cdca] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1879" data-name="disciplinas">
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1880" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1881">
              CLIENTE
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1882">
              <p className="leading-[1.5] mb-0">Nega Nagô</p>
              <p className="leading-[1.5]">trancista · São Paulo</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1883" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1884">
              PAPEL
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1885">
              <p className="leading-[1.5] mb-0">Product design</p>
              <p className="leading-[1.5]">e design engineer</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1886" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1887">
              ENTREGAS
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1888">
              <p className="leading-[1.5] mb-0">Pesquisa · UI · design system</p>
              <p className="leading-[1.5]">front-end · publicação</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1889" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1890">
              FEITO COM
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1891">
              <p className="leading-[1.5] mb-0">Claude ⇄ Figma via MCP</p>
              <p className="leading-[1.5] mb-0">HTML, CSS e JS · Playwright</p>
              <p className="leading-[1.5]">Google Agenda (freeBusy) · PHP</p>
            </div>
          </div>
          <div className="border-0 border-[rgba(103,93,84,0.25)] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1892" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1893">
              PERÍODO
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1894">
              <p className="leading-[1.5] mb-0">2026 · no ar</p>
              <p className="leading-[1.5]">neganago.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1895" data-name="01 · Problema">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1896" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1897">
            01 · O PROBLEMA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1898">
            A tabela cabia numa foto. A decisão, não.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1899">
            A cliente abria o print, não achava o preço do tamanho que queria e perguntava. A tabela não estava errada — ela exigia outra pessoa para ser lida.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[12px] h-[289px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1900" data-name="números">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1901" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1902">
              13
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1903">
              categorias de trança
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1904" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1905">
              40+
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1906">
              combinações de tamanho e preço
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1907" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1908">
              16
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1909">
              agendamentos por mês, na média
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1910" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1911">
              1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1912">
              canal, respondido entre um cliente e outro
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1913" data-name="02 · Fluxo">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1914" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1915">
            02 · ANTES E DEPOIS
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1916">
            Seis passos com espera viraram três sem espera.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1917">
            O mesmo objetivo — agendar uma trança — pelos dois caminhos. O que sai não é tela: é o tempo morto entre a dúvida e a resposta.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1918" data-name="antes e depois">
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1919" data-name="antes">
            <div className="bg-[#d0cdca] content-stretch flex flex-col h-[225px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1920" data-name="[mockup] antes · o print da tabela no direct">
              <div className="aspect-[336/225] relative shrink-0 w-full" data-node-id="2247:1921" data-name="card---antes---nega-nago 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardAntesNegaNago1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] min-h-[239px] overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1922" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1923">
                COMO ERA · SEIS PASSOS
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1924">
                Pede a tabela no direct · recebe um print com 40+ preços · não acha o tamanho que quer · pergunta · espera a resposta entre um atendimento e outro · fecha, ou desiste no meio.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1925">
                Os passos 3, 4 e 5 dependem da agenda da Mayara. É onde o interesse esfria.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1926" data-name="depois">
            <div className="bg-[#d0cdca] content-stretch flex flex-col h-[225px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1927" data-name="[mockup] depois · a tela de tamanho e preço">
              <div className="aspect-[336/225] relative shrink-0 w-full" data-node-id="2247:1928" data-name="card---depois---nega-nago 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardDepoisNegaNago1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] min-h-[239px] overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1929" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1930">
                COMO FICOU · TRÊS PASSOS
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1931">
                Escolhe o estilo e o tamanho, com preço e sinal na tela · preenche dia, período e — se for a domicílio — o endereço, com o CEP buscado na hora · envia a mensagem já escrita no WhatsApp.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1932">
                Nenhum passo espera resposta, e só aparecem os dias que estão livres na agenda dela. A Mayara entra na conversa com tudo já decidido.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1933" data-name="[mockup anotado] a mensagem que sai do site">
          <div className="bg-[#675d54] content-stretch flex flex-col h-[127px] items-center justify-center overflow-clip px-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1934" data-name="[mockup] a mensagem que sai do site">
            <div className="aspect-[296/112] relative shrink-0 w-full" data-node-id="2247:1935" data-name="card - whatsapp - neganago 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardWhatsappNeganago1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1936" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1937" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1938">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1939">
                Por que texto, e não formulário. A Mayara vive no WhatsApp e não vai abrir um painel entre um atendimento e outro.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1940" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1941">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1942">{`O vocabulário é o dela. A tela chama o penteado de coroa, não de 'serviço' nem de 'item'.`}</p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1943" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1944">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1945">
                Uma ida e volta a menos. A última linha já oferece a foto do cabelo solto, que a trancista precisa ver para estimar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1946" data-name="03 · Restrições">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1947" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1948">
            03 · RESTRIÇÕES
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1949">
            Quase toda decisão de tela veio de uma restrição do negócio.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1950">
            Nenhuma dessas escolhas saiu de intuição de UX. Saíram de como ela cobra, de onde a cliente já está e do que o piloto podia bancar.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1951" data-name="[mockup anotado] cinco restrições do negócio, na tela de agendamento">
          <div className="bg-[#675d54] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip px-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1952" data-name="[mockup] cinco restrições do negócio, na tela de agendamento">
            <div className="aspect-[296/133] relative shrink-0 w-full" data-node-id="2247:1953" data-name="card - restricoes 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardRestricoes2} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1954" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1955" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1956">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1957">
                Ela compra o material antes. Por isso o sinal de 30% aparece calculado em toda tela de preço — nunca no fim, como surpresa.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1958" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1959">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1960">
                A cliente já está no WhatsApp. O fluxo termina lá dentro: o site escreve a mensagem inteira, ela só aperta enviar.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1961" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1962">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1963">
                O adicional custa diferente por família de trança. Um campo por estilo; quem não tem a opção não vê o campo.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1964" data-name="anot 4">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1965">
                04
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1966">{`Ela atende no estúdio e a domicílio. O bloco de endereço só existe na tela quando 'a domicílio' está marcado.`}</p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1967" data-name="anot 5">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1968">
                05
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1969">
                Sem gateway no piloto. O site calcula e informa; a cobrança acontece na conversa, com a divisão exata na mensagem.
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1970" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1971">
            O fluxo não é o desenho ideal.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1972">
            É o desenho que cabe no jeito que ela já trabalha — e cada linha acima é uma decisão que eu não tomaria olhando só para a tela. A restrição mais recente veio depois do lançamento: quem manda na disponibilidade é a agenda do Google que ela já usava no celular. Ela abre e fecha os dias por lá, do jeito dela, e o site segue — sem painel novo e sem ferramenta nova para aprender.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1973" data-name="04 · Pesquisa">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1974" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1975">
            04 · PESQUISA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1976">
            Quatro pessoas, duas rodadas. A primeira sem cor nenhuma.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1977">
            Testei em dois momentos: primeiro um rascunho em cinza, só o caminho; depois o protótipo inteiro. Em cinza, o elogio não tem para onde fugir.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1978" data-name="as duas rodadas">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1979" data-name="rodada 1">
            <div className="bg-[#675d54] content-stretch flex flex-col h-[213px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1980" data-name="[mockup] rodada 1 · o rascunho em cinza">
              <div className="aspect-[336/213] relative shrink-0 w-full" data-node-id="2247:1981" data-name="card---wireframe 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardWireframe1} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1982">
              Dá para chegar ao fim? A informação aparece na hora que a pessoa precisa dela? Sem identidade visual, o que sobra na tela é a estrutura — e é ela que está sendo testada.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1983" data-name="rodada 2">
            <div className="bg-[#675d54] content-stretch flex flex-col h-[213px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1984" data-name="[mockup] rodada 2 · o protótipo completo">
              <div className="aspect-[336/213] relative shrink-0 w-full" data-node-id="2247:1985" data-name="card---prototype 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardPrototype1} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1986">
              O encantamento veio aqui, como era de esperar. A diferença é que ele estava sentado em cima de um fluxo que já tinha andado sozinho, sem cor para carregar.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1987" data-name="quem testou">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1988" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1989">
              01
            </p>
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1990">
              Cliente recorrente
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1991">
              Já agenda e sabe os preços de cor. Serve para ver se o fluxo atrapalha quem já tem o caminho na cabeça.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1992" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1993">
              02
            </p>
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1994">
              Consultou e não fechou
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1995">
              Pediu preço e não voltou. É exatamente o perfil que o projeto existe para recuperar.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1996" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1997">
              03
            </p>
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1998">
              Contratou uma vez
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1999">
              Conhece o serviço mas não virou hábito. Mostra o que falta para a segunda vez acontecer sozinha.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2000" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2001">
              04
            </p>
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2002">
              Nunca contratou
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2003">
              Chega sem referência nenhuma — nem de preço, nem de vocabulário. Revela o que a tela precisa explicar sozinha.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2004" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2005">
            O ELOGIO QUE MAIS SE REPETIU
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2006">
            Não foi sobre beleza. Foi sobre saber quanto ia custar.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2007">
            A conta recalcula a cada toque: muda o tamanho, muda o adicional, muda o local — o total e o sinal mudam junto, na mesma tela. A cliente sai sabendo quanto adianta agora e quanto sobra para o dia. Quando chega para fechar, nada daquilo é novidade — e o que não é novidade não vira objeção. É a primeira restrição da seção anterior fechando o ciclo: a trava do negócio virou o argumento de venda.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-wrap gap-[12px] h-[394px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2008" data-name="resultados da pesquisa">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2009" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2010">
              4/4
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2011">
              chegaram ao fim do agendamento sem que eu explicasse como funciona
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2012" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2013">
              4/4
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2014">
              escolheram exatamente o que queriam, sem hesitar no meio
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2015" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2016">
              4/4
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2017">
              apontaram como a melhor experiência de compra entre as que já usaram
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2018" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2019">
              2
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2020">
              rodadas: rascunho em cinza e protótipo completo
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2021" data-name="05 · Sistema">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2022" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2023">
            05 · SISTEMA E ENGENHARIA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2024">
            Um sistema pequeno, documentado inteiro — e conferido por medição.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2025">
            Nove conjuntos de componentes, 36 variantes, 29 ícones e dois breakpoints. Nome de variável no Figma é nome de custom property no CSS.
          </p>
        </div>
        <div className="[word-break:break-word] content-start flex flex-wrap gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2026" data-name="contadores">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2027" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2028">
              9
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2029">
              conjuntos de componentes · 36 variantes
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2030" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2031">
              29
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2032">
              ícones desenhados, de catálogo e de interface
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2033" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2034">
              617 KB
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2035">
              a Home inteira, com as treze fotos carregadas
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2036" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2037">
              17 → 1,9 MB
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2038">
              as 46 imagens, depois da conversão para WebP
            </p>
          </div>
        </div>
        <div className="bg-[#d0cdca] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2039" data-name="[mockup] o design system · componentes e variantes">
          <div className="aspect-[336/151] relative shrink-0 w-full" data-node-id="2247:2040" data-name="card - design system 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardDesignSystem1} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2041" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2042">
            Comparei o código contra o Figma por medição, não a olho.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2043">
            Uma suíte em Playwright abre o protótipo nos dois breakpoints e lê o valor computado de cada gap, largura e altura. Quatro erros que pareciam certos na tela apareceram assim. Dois deles: no grid do catálogo, o nome mais longo esticava a própria coluna e espremia as vizinhas — na tela passava por diferença de foto, era o track dimensionado pelo conteúdo; e o bloco de endereço recebia o atributo hidden corretamente, mas a classe ganhava do padrão do navegador e ele continuava visível — uma linha consertou outros três lugares que estavam quebrados em silêncio.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2044" data-name="06 · Imagens">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2045" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2046">
            06 · CATÁLOGO DE IMAGENS
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2047">
            Nenhuma foto existia. Dirigi e gerei as treze.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2048">
            Não havia sessão nem banco de imagem. Fechei um contrato visual escrito — manequim, ângulo, fundo, luz, matiz — e variei uma linha por prompt.
          </p>
        </div>
        <div className="bg-[#675d54] border border-[#b9b4b0] border-solid content-stretch flex flex-col h-[101px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2049" data-name="[mockup] as treze fotos do catálogo">
          <div className="aspect-[334/100] relative shrink-0 w-full" data-node-id="2247:2050" data-name="neganagofluxoimagensia16x9-6 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeganagofluxoimagensia16X961} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2051" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2052">
            A coerência dá para medir.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2053">
            Amostrei os quatro cantos de cada foto e converti para matiz. Os treze fundos caem entre 12,4° e 19,2° — amplitude de 6,8° em treze gerações independentes. Não foi sorte: o matiz alvo estava escrito no prompt. A prova pelo contrário está no mesmo dado — a luminosidade, que eu não pedi como número, abriu de 35% a 56%. Quando a Mayara fotografar de verdade, cada foto entra no lugar de uma, com os mesmos nomes de arquivo. Nada no código muda.
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2054" data-name="07 · Resultado">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2055" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2056">
            07 · RESULTADO
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2057">
            Dezesseis agendamentos por mês viraram quarenta.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2058">
            Os do produto qualquer pessoa reproduz rodando a suíte. Os da operação vieram da agenda da Mayara, comparando antes e depois do lançamento.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[12px] h-[310px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2059" data-name="operação">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2060" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2061">
              16
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2062">
              agendamentos por mês antes do lançamento
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2063" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2064">
              40
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2065">
              agendamentos por mês depois
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2066" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2067">
              2,50×
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2068">
              razão de taxas · IC 95% 1,37–4,78 · p = 0,0018
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2069" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2070">
              3
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2071">
              telas para sair do catálogo com a mensagem pronta
            </p>
          </div>
        </div>
        <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2072">
          O intervalo de confiança e o valor-p foram calculados sobre os agendamentos observados antes e depois do lançamento, por binomial condicional exata. Não é modelo, é a agenda dela.
        </p>
        <div className="bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2073" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2074">
            O que eu não resolvi.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2075">
            As imagens de IA ainda não estão identificadas na tela: são renders de referência, não portfólio da Mayara, e está escrito aqui mas precisa estar escrito no produto. Quatro pessoas acham o problema grande, não o de cauda — com o fluxo em operação, dá para observar uso real em vez de sessão marcada, e é esse o próximo passo da pesquisa.
          </p>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-y-[12px] items-start py-[32px] relative shrink-0 w-full" data-node-id="2247:2076" data-name="cta">
        <div className="bg-[#232323] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2077" data-name="ver o case">
          <div className="h-[24px] overflow-clip relative shrink-0 w-[16px]" data-node-id="2247:2078" data-name="figma-icon 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFigmaIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[95px]" data-node-id="2247:2085">
            Ver protótipo
          </p>
        </div>
      </div>
      <div className="border-[#d0cdca] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2247:2086" data-name="Ver mais">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2087" data-name="cabeçalho">
          <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2088">
            08 · MAIS
          </p>
          <p className="leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2089">
            Outros projetos
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2090" data-name="projetos">
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2091" data-name="projeto · ThumbDrop">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2092" data-name="[imagem] capa · ThumbDrop">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:2093" data-name="capa · ThumbDrop" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:2094" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2095">
                ThumbDrop
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2096">
                Ferramenta interna que tirou a thumbnail da fila do time de design. Duas versões testadas com seis pessoas cada, IA dentro do editor, e o custo por thumb visível antes de cada clique.
              </p>
            </div>
          </div>
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2097" data-name="projeto · Canaltech · Hub de links">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2098" data-name="[imagem] capa · Canaltech · Hub de links">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:2099" data-name="capa_ct_links 1" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:2100" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2101">
                Canaltech · Hub de links
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2102">
                A página de links deixou de ser alugada e passou a medir a si mesma. Design system, acessibilidade, consentimento e telemetria dentro de um HTML único.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="2247:2103" data-name="Contato">
        <div className="content-stretch flex gap-[9px] items-center overflow-clip pb-[6px] relative shrink-0 w-full" data-node-id="2247:2104" data-name="disponível">
          <div className="relative shrink-0 size-[8px]" data-node-id="2247:2105" data-name="Ellipse">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#99928c] text-[14px] tracking-[0.28px] uppercase w-[193px]" data-node-id="2247:2106">
            Disponível para trabalhar
          </p>
        </div>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:2107">
          Desenho, escrevo o código e digo o que não deu certo.
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#d0cdca] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2108">
          Treze anos de design, cinco deles no Canaltech entre design system, marketing e comercial. Se você tem uma superfície que precisa sair pronta e medida, e não especificada, me chama.
        </p>
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip pt-[22px] relative shrink-0 w-full" data-node-id="2247:2109" data-name="ações">
          <div className="bg-[#fbf7f4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2110" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:2111" data-name="Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[98px]" data-node-id="2247:2113">
              Copiar e-mail
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2114" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:2115" data-name="ReadCvLogo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[106px]" data-node-id="2247:2117">
              Ver o currículo
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2118" data-name="botão">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="2247:2119" data-name="LinkedIn_icon 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedInIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[62px]" data-node-id="2247:2123">
              LinkedIn
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#39332e] border-solid border-t content-stretch flex flex-col font-['Sofia_Sans:Regular'] font-normal gap-[6px] items-start leading-[1.5] overflow-clip pt-[36px] relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2247:2124" data-name="base">
          <p className="relative shrink-0 whitespace-nowrap" data-node-id="2247:2125">
            © 2026 Erick Teixeira
          </p>
          <p className="relative shrink-0 whitespace-pre" data-node-id="2247:2126">{`oerickteixeira@gmail.com  ·  São Paulo`}</p>
        </div>
      </div>
    </div>
  );
}