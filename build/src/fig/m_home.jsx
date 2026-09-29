const img23305BceBac94B229EbbDd6Df0Bc2Acf1 = "https://www.figma.com/api/mcp/asset/8a4e3b72-aa38-4e19-a3b1-f55a5967c6fd.png";
const imgLogoKabum2 = "https://www.figma.com/api/mcp/asset/9853aa2f-9a7d-42f6-84c2-756f3dfb6e82.png";
const imgLogoNetshoes2 = "https://www.figma.com/api/mcp/asset/fa6acf5e-02c7-4b3f-a3bf-cbcad5fd1b91.png";
const imgLogoCabaltech1 = "https://www.figma.com/api/mcp/asset/ade2602e-f98e-4c25-bff4-3d3fc11b1e41.png";
const imgLogoMotorola4 = "https://www.figma.com/api/mcp/asset/62cc9ff0-4033-4589-a9b5-3e42d1bca219.png";
const imgLogoMagalu2 = "https://www.figma.com/api/mcp/asset/91f63279-0457-4ebe-a76e-4bc520d84154.png";
const imgFotoPremio1 = "https://www.figma.com/api/mcp/asset/734c165c-2ae9-4666-a716-055b61bdf9e9.png";
const imgFotoGrupo2 = "https://www.figma.com/api/mcp/asset/876da1f7-28f1-4472-ac9d-ebd8c951da9e.png";
const imgFotoTime2 = "https://www.figma.com/api/mcp/asset/c522ee51-5913-4077-944e-5ec185b0e7b6.png";
const imgReadCvLogo = "https://www.figma.com/api/mcp/asset/5789b26a-3886-40e2-95fa-f314ffc8673f.svg";
const imgCopy = "https://www.figma.com/api/mcp/asset/ebe182bf-a75f-4731-8db5-427b533f7552.svg";
const imgMapPinSimpleArea = "https://www.figma.com/api/mcp/asset/dc5147a3-fc92-43a4-a988-7ac38949a86e.svg";
const imgPersonSimpleRun = "https://www.figma.com/api/mcp/asset/67a66f6d-9044-46a3-9666-e1ff36791d3a.svg";
const imgCaretRight = "https://www.figma.com/api/mcp/asset/892c41be-0994-4ee1-9988-8ac37b10684e.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/ee9ee8a9-6ec2-4773-a9d2-ce7938a2ee8d.svg";
const imgCopy1 = "https://www.figma.com/api/mcp/asset/0f177e57-1f50-4441-b7aa-f3a805f7da3e.svg";
const imgReadCvLogo1 = "https://www.figma.com/api/mcp/asset/49b101ac-c215-46fd-9ea5-911c34dd1c43.svg";
const imgLinkedInIcon1 = "https://www.figma.com/api/mcp/asset/9dfd8a68-440b-4ff3-a55b-009b142fcbaa.svg";

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

export default function HomeMobile360() {
  return (
    <div className="bg-[#fbf7f4] content-stretch flex flex-col items-start px-[12px] relative size-full" data-node-id="2246:1853" data-name="Home · mobile 360">
      <div className="border-[rgba(208,205,202,0.55)] border-b border-solid content-stretch flex h-[107px] items-start justify-between overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="2246:1854" data-name="topo">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[6px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[14px] tracking-[0.28px]" data-node-id="2264:1626" data-name="identidade">
          <p className="relative shrink-0 text-[#39332e] uppercase whitespace-nowrap" data-node-id="2246:1855">{`Product & design engineer`}</p>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-node-id="2246:1856" data-name="período">
            <p className="relative shrink-0 text-[#675d54] w-full" data-node-id="2246:1857">
              2013 — 2026
            </p>
            <p className="relative shrink-0 text-[#39332e] uppercase w-full" data-node-id="2246:1858">
              Trabalhos selecionados
            </p>
          </div>
        </div>
        <SeletorDeIdioma className="border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0" />
      </div>
      <div className="border-[rgba(208,205,202,0.55)] border-b border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2246:1859" data-name="Hero">
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1860" data-name="nome + foto">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1861" data-name="nome">
            <div className="font-['Sofia_Sans:Black'] font-black leading-[0] relative shrink-0 text-[#39332e] text-[40px] tracking-[0.8px] w-full" data-node-id="2246:1862">
              <p className="leading-[1.1] mb-0">ERICK</p>
              <p className="leading-[1.1]">TEIXEIRA</p>
            </div>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1863">
              Desenho a campanha inteira e escrevo o código que a entrega — com IA dentro do fluxo, não ao lado dele.
            </p>
          </div>
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[252px] items-center justify-center overflow-clip py-[2px] relative rounded-[12px] shrink-0 w-full" data-node-id="2246:1864" data-name="[imagem] Retrato · 4:3">
            <div className="aspect-[336/252] relative shrink-0 w-full" data-node-id="2246:1865" data-name="23305bce-bac9-4b22-9ebb-dd6df0bc2acf 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img23305BceBac94B229EbbDd6Df0Bc2Acf1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1866" data-name="contato + bio">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-end overflow-clip relative shrink-0 w-full" data-node-id="2246:1867" data-name="contato">
            <div className="bg-[#675d54] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[99px] shrink-0 w-full" data-node-id="2246:1868" data-name="e-mail">
              <div className="relative shrink-0 size-[24px]" data-node-id="2246:1869" data-name="ReadCvLogo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo} />
              </div>
              <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[94px]" data-node-id="2246:1871">
                Ver Currículo
              </p>
            </div>
            <div className="bg-[#39332e] content-stretch flex gap-[8px] h-[48px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[99px] shrink-0 w-full" data-node-id="2246:1872" data-name="e-mail">
              <div className="relative shrink-0 size-[24px]" data-node-id="2246:1873" data-name="Copy">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
              </div>
              <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[188px]" data-node-id="2246:1875">
                oerickteixeira@gmail.com
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] h-[80px] items-center py-[12px] relative shrink-0 w-full" data-node-id="2246:1876">
              <div className="relative shrink-0 size-[24px]" data-node-id="2246:1877" data-name="MapPinSimpleArea">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMapPinSimpleArea} />
              </div>
              <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[157px]" data-node-id="2246:1879">
                São Paulo / SP - Brasil
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1880">
            Treze anos de design. Comecei em direção de arte, passei por marca, campanha, produto e design system — e hoje faço as cinco na mesma entrega, com IA no meio do processo e o código saindo junto. Os quatro cases abaixo estão documentados de ponta a ponta, inclusive onde a IA não decidiu nada.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[36px] relative shrink-0 w-full" data-node-id="2246:1881" data-name="Marcas">
        <div className="content-center flex flex-wrap gap-[12px] items-center relative shrink-0 w-full" data-node-id="2246:1882">
          <div className="h-[20px] relative shrink-0 w-[84px]" data-node-id="2246:1883" data-name="logo_kabum 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoKabum2} />
          </div>
          <div className="h-[13px] relative shrink-0 w-[84px]" data-node-id="2246:1884" data-name="logo_netshoes 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoNetshoes2} />
          </div>
          <div className="h-[17.864px] relative shrink-0 w-[84px]" data-node-id="2246:1885" data-name="logo_cabaltech 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoCabaltech1} />
          </div>
          <div className="h-[19px] relative shrink-0 w-[84px]" data-node-id="2246:1886" data-name="logo_motorola 4">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoMotorola4} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[84px]" data-node-id="2246:1887" data-name="logo_magalu 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoMagalu2} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] border border-[#99928c] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:1888" data-name="disciplinas">
        <div className="border-[#99928c] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:1889" data-name="item">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1890">
            Marca
          </p>
          <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full whitespace-pre-wrap" data-node-id="2246:1891">
            <p className="leading-[1.5] mb-0">{`Identidade, brandbook `}</p>
            <p className="leading-[1.5]">e sistema visual</p>
          </div>
        </div>
        <div className="border-[#99928c] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:1892" data-name="item">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1893">
            Campanha
          </p>
          <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full whitespace-pre-wrap" data-node-id="2246:1894">
            <p className="leading-[1.5] mb-0">{`Conceito, peças e `}</p>
            <p className="leading-[1.5]">desdobramento por canal</p>
          </div>
        </div>
        <div className="border-[#99928c] border-r border-solid content-stretch flex flex-col gap-[8px] items-start leading-[1.5] overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:1895" data-name="item">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1896">
            Produto
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2246:1897">
            UX, UI e fluxo até o handoff
          </p>
        </div>
        <div className="border-[#99928c] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:1898" data-name="item">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1899">
            Design system
          </p>
          <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full whitespace-pre-wrap" data-node-id="2246:1900">
            <p className="leading-[1.5] mb-0">{`Tokens, variantes e `}</p>
            <p className="leading-[1.5]">estados documentados</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:1901" data-name="item">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1902">
            Front-end
          </p>
          <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full whitespace-pre-wrap" data-node-id="2246:1903">
            <p className="leading-[1.5] mb-0">{`HTML, CSS e JS escritos `}</p>
            <p className="leading-[1.5]">com IA e testados</p>
          </div>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-node-id="2246:1904" data-name="respiro" />
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2246:1905" data-name="Projetos">
        <div className="border-[rgba(208,205,202,0.55)] border-b border-solid content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-node-id="2246:1906">
          <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1907" data-name="projeto 01">
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1908" data-name="título + métrica">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1909" data-name="texto">
                <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[18px] tracking-[0.36px] w-full" data-node-id="2246:1910">
                  ThumbDrop
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1911">
                  Ferramenta interna que tirou a thumbnail da fila do time de design. Duas versões testadas com seis pessoas cada, IA dentro do editor, e o custo por thumb visível antes de cada clique.
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-end justify-end overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1912" data-name="métrica">
                <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[24px] tracking-[0.48px] w-full" data-node-id="2246:1913">
                  3 min
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light leading-[1.5] relative shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2246:1914">
                  por thumb, contra 30 min no fluxo antigo
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1915" data-name="chips + ação">
                <div className="content-center flex flex-wrap gap-[12px_8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="2246:1916" data-name="chips">
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1917" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[48px]" data-node-id="2246:1918">
                      Pesquisa
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1919" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[12px]" data-node-id="2246:1920">
                      UI
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1921" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[79px]" data-node-id="2246:1922">
                      Design system
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1923" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[56px]" data-node-id="2246:1924">
                      Front-end
                    </p>
                  </div>
                  <div className="backdrop-blur-[12px] bg-[#99928c] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1925" data-name="pill · Bateria">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[62px]" data-node-id="2246:1926">
                      IA no editor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="2246:1927" data-name="img">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:1928" data-name="image">
                <div className="aspect-[1920/1080] relative shrink-0 w-full" data-node-id="2246:1929" data-name="capa_thumbdrop 1" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(208,205,202,0.55)] border-b border-solid content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-node-id="2246:1930">
          <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1931" data-name="projeto 01">
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1932" data-name="título + métrica">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1933" data-name="texto">
                <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[18px] tracking-[0.36px] w-full" data-node-id="2246:1934">
                  Nega Nagô
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1935">
                  O catálogo de uma trancista virou agendamento sem sair do WhatsApp. Pesquisa, design system e front-end — no ar em neganago.com, com a disponibilidade saindo da agenda dela.
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-end justify-end overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1936" data-name="métrica">
                <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[24px] tracking-[0.48px] w-full" data-node-id="2246:1937">
                  2,5×
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light leading-[0] relative shrink-0 text-[0px] tracking-[0.28px] w-full" data-node-id="2246:1938">
                  <span className="leading-[1.5] text-[14px]">agendamentos por mês:</span>
                  <span className="leading-[1.5] text-[14px]">{` `}</span>
                  <span className="leading-[1.5] text-[14px]">16 → 40</span>
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1939" data-name="chips + ação">
                <div className="content-center flex flex-wrap gap-[12px_8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="2246:1940" data-name="chips">
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1941" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[48px]" data-node-id="2246:1942">
                      Pesquisa
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1943" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[12px]" data-node-id="2246:1944">
                      UI
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1945" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[79px]" data-node-id="2246:1946">
                      Design system
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1947" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[56px]" data-node-id="2246:1948">
                      Front-end
                    </p>
                  </div>
                  <div className="backdrop-blur-[12px] bg-[#99928c] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1949" data-name="pill · Bateria">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[80px]" data-node-id="2246:1950">
                      Agenda Google
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="2246:1951" data-name="img">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:1952" data-name="image">
                <div className="aspect-[1920/1080] relative shrink-0 w-full" data-node-id="2246:1953" data-name="capa_nega_nago 4" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(208,205,202,0.55)] border-b border-solid content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-node-id="2246:1954">
          <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1955" data-name="projeto 01">
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1956" data-name="título + métrica">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1957" data-name="texto">
                <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[18px] tracking-[0.36px] w-full" data-node-id="2246:1958">
                  CT em Campo · Canaltech × Netshoes
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1959">
                  Uma ativação de Copa que não cabia no template do portal. Superfície dedicada, brandbook, motion e código — sem anúncio, recomendação ou concorrente dividindo a tela.
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-end justify-end overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1960" data-name="métrica">
                <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[24px] tracking-[0.48px] w-full" data-node-id="2246:1961">
                  18
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light leading-[1.5] relative shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2246:1962">
                  peças em 6 posicionamentos, em 15 dias
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1963" data-name="chips + ação">
                <div className="content-center flex flex-wrap gap-[12px_8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="2246:1964" data-name="chips">
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1965" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[58px]" data-node-id="2246:1966">
                      Brandbook
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1967" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[12px]" data-node-id="2246:1968">
                      UI
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1969" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[79px]" data-node-id="2246:1970">
                      Design system
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1971" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[38px]" data-node-id="2246:1972">
                      Motion
                    </p>
                  </div>
                  <div className="backdrop-blur-[12px] bg-[#99928c] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1973" data-name="pill · Bateria">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[56px]" data-node-id="2246:1974">
                      Front-end
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="2246:1975" data-name="img">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:1976" data-name="image">
                <div className="aspect-[1920/1080] relative shrink-0 w-full" data-node-id="2246:1977" data-name="capa_ct_em_campo 1" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-node-id="2246:1978">
          <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1979" data-name="projeto 01">
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1980" data-name="título + métrica">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1981" data-name="texto">
                <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[18px] tracking-[0.36px] w-full" data-node-id="2246:1982">
                  Canaltech · Hub de links
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2246:1983">
                  A página de links deixou de ser alugada e passou a medir a si mesma. Design system, acessibilidade, consentimento e telemetria dentro de um HTML único.
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-end justify-end overflow-clip relative shrink-0 text-[#232323] w-full" data-node-id="2246:1984" data-name="métrica">
                <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[24px] tracking-[0.48px] w-full" data-node-id="2246:1985">
                  176
                </p>
                <p className="font-['Sofia_Sans:Light'] font-light leading-[1.5] relative shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2246:1986">
                  asserções automatizadas · 0 dependências
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:1987" data-name="chips + ação">
                <div className="content-center flex flex-wrap gap-[12px_8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="2246:1988" data-name="chips">
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1989" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[79px]" data-node-id="2246:1990">
                      Design system
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1991" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[12px]" data-node-id="2246:1992">
                      UI
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1993" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[77px]" data-node-id="2246:1994">
                      Acessibilidade
                    </p>
                  </div>
                  <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1995" data-name="chip">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[57px]" data-node-id="2246:1996">
                      Telemetria
                    </p>
                  </div>
                  <div className="backdrop-blur-[12px] bg-[#99928c] content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2246:1997" data-name="pill · Bateria">
                    <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[12px] tracking-[0.24px] w-[56px]" data-node-id="2246:1998">
                      Front-end
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-node-id="2246:1999" data-name="img">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2000" data-name="image">
                <div className="aspect-[1920/1080] relative shrink-0 w-full" data-node-id="2246:2001" data-name="capa_ct_links 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#202020] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[20px] py-[32px] relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2002" data-name="Playground">
        <div className="relative shrink-0 w-full" data-node-id="2246:2003" data-name="cabeçalho">
          <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2004" data-name="t">
              <p className="leading-[1.5] relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] uppercase w-full" data-node-id="2246:2005">
                Playground
              </p>
              <p className="leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[32px] tracking-[0.64px] w-full" data-node-id="2246:2006">
                {`Laboratório &`}
                <br aria-hidden />
                Experimentos
              </p>
            </div>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2007">
              Testando limites entre o digital e o tátil. Do papel recortado à animação por inteligência artificial, o repertório que sustenta minha visão de design.
            </p>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-node-id="2246:2008" data-name="grade">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2009" data-name="linha">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2010" data-name="tile">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2011" style={{ backgroundImage: "linear-gradient(111.8539765948509deg, rgb(22, 22, 22) 51.019%, rgb(50, 50, 50) 100%)" }} data-name="projeto 2">
                  <div className="bg-[#d0cdca] content-stretch flex flex-col h-[237px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2012" data-name="[imagem] capa do projeto 2">
                    <div className="aspect-[296/237] relative shrink-0 w-full" data-node-id="2246:2013" data-name="illustration_home 1" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="2246:2014" data-name="texto">
                    <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2015">{`Ilustração 2D · Apparel & Print`}</p>
                    <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2016">{`Ilustração vetorial criada no Photoshop para a camiseta de formatura do 3º ano de uma escola local. Foco em estamparia e colorização. `}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2017" style={{ backgroundImage: "linear-gradient(111.8539765948509deg, rgb(22, 22, 22) 51.019%, rgb(50, 50, 50) 100%)" }} data-name="projeto 2">
                <div className="bg-[#232323] content-stretch flex flex-col h-[237px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:2018" data-name="[imagem] capa do projeto 2">
                  <div className="aspect-[256/205] relative shrink-0 w-full" data-node-id="2246:2019" data-name="avdc_home 1" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="2246:2020" data-name="texto">
                  <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2021">
                    Short Film · IA Generativa
                  </p>
                  <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2022">
                    Short film experimental testando o pipeline completo de produção em IA. Geração de conceito com Nano Banana 2 e animação via Kling 3.0.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2023" data-name="linha">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2024" data-name="tile">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2025" style={{ backgroundImage: "linear-gradient(110.68014841276702deg, rgb(22, 22, 22) 51.019%, rgb(50, 50, 50) 100%)" }} data-name="projeto 2">
                  <div className="bg-[#d0cdca] content-stretch flex flex-col h-[237px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2026" data-name="[imagem] capa do projeto 2">
                    <div className="aspect-[296/237] relative shrink-0 w-full" data-node-id="2246:2027" data-name="tyler_home 1" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="2246:2028" data-name="texto">
                    <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2029">
                      Animação 3D · Character Design
                    </p>
                    <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2030">
                      Estudo de estética e render 3D desenvolvido na Unreal Engine 5, inspirado na direção de arte do lançamento do álbum de Tyler, The Creator.
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2031" style={{ backgroundImage: "linear-gradient(110.68014841276702deg, rgb(22, 22, 22) 51.019%, rgb(50, 50, 50) 100%)" }} data-name="projeto 2">
                <div className="bg-[#232323] content-stretch flex flex-col h-[237px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:2032" data-name="[imagem] capa do projeto 2">
                  <div className="aspect-[256/205] relative shrink-0 w-full" data-node-id="2246:2033" data-name="rich_boy_home 1" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="2246:2034" data-name="texto">
                  <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2035">
                    Animação 3D · Brand Experience
                  </p>
                  <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2036">
                    Animação 3D na Unreal Engine 5 para o lançamento da coleção Black Flag da Gold Life, destacando o vestir e o caimento do vestuário.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2037" data-name="linha">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2038" data-name="tile">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2039" style={{ backgroundImage: "linear-gradient(111.71732766349766deg, rgb(22, 22, 22) 51.019%, rgb(50, 50, 50) 100%)" }} data-name="projeto 2">
                  <div className="bg-[#d0cdca] content-stretch flex flex-col h-[237px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2040" data-name="[imagem] capa do projeto 2">
                    <div className="aspect-[296/237] relative shrink-0 w-full" data-node-id="2246:2041" data-name="gold_life_home 1" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="2246:2042" data-name="texto">
                    <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2043">
                      Animação em IA · Conteúdo de Marca
                    </p>
                    <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2044">
                      Storytelling de marca e exploração do logo via IA. Combinação de Nano Banana 2 e Kling 3.0 para criar narrativas visuais dinâmicas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2246:2045" style={{ backgroundImage: "linear-gradient(111.71732766349766deg, rgb(22, 22, 22) 51.019%, rgb(50, 50, 50) 100%)" }} data-name="projeto 2">
                <div className="bg-[#232323] content-stretch flex flex-col h-[237px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2246:2046" data-name="[imagem] capa do projeto 2">
                  <div className="aspect-[256/205] relative shrink-0 w-full" data-node-id="2246:2047" data-name="will_home 1" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="2246:2048" data-name="texto">
                  <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2049">
                    Craft Físico · Arte em Camadas
                  </p>
                  <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2050">
                    Quadro artesanal feito à mão com recorte em camadas de papel e estilete. Retrato do Will Smith em um estudo de volume e arte física.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[rgba(208,205,202,0.55)] border-b border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2246:2051" data-name="Sobre">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2246:2052" data-name="cabeçalho">
          <div className="content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2053" data-name="t">
            <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2246:2054">
              Sobre
            </p>
            <p className="leading-[1.1] relative shrink-0 text-[#39332e] text-[32px] tracking-[0.64px] w-full" data-node-id="2246:2055">
              Foco em Escala e Colaboração
            </p>
          </div>
          <div className="content-stretch flex flex-col font-['Sofia_Sans:Regular'] font-normal gap-[16px] items-start overflow-clip relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2246:2056" data-name="p">
            <div className="leading-[0] relative shrink-0 w-full" data-node-id="2246:2057">
              <p className="leading-[1.5] mb-0">Comecei dominando a direção de arte e expandi para marca, campanhas, produtos digitais e design systems. Mas a grande virada da minha carreira foi aprender a alinhar a técnica ao impacto de negócio, trabalhando lado a lado com times multidisciplinares e lideranças estratégicas.</p>
              <p className="leading-[1.5]">​</p>
            </div>
            <p className="leading-[1.5] relative shrink-0 w-full" data-node-id="2246:2058">
              Hoje, entrego a visão completa: do conceito inicial ao código com IA, conectando estratégia, pessoas e eficiência operacional em cada projeto.
            </p>
          </div>
        </div>
        <div className="content-center flex flex-wrap gap-[12px] items-center overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2246:2059" data-name="trajetória">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="2246:2060">
            <div className="relative shrink-0 size-[35px]" data-node-id="2246:2061" data-name="PersonSimpleRun">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPersonSimpleRun} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#39332e] text-[18px] tracking-[0.36px] w-[98px]" data-node-id="2246:2063">
              TRAJETÓRIA
            </p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-node-id="2246:2064" data-name="CaretRight">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
          </div>
          <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2246:2066" data-name="passo">
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[14px] tracking-[0.28px] w-[96px]" data-node-id="2246:2067">
              Direção de arte
            </p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-node-id="2246:2068" data-name="CaretRight">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
          </div>
          <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2246:2070" data-name="passo">
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[14px] tracking-[0.28px] w-[38px]" data-node-id="2246:2071">
              Marca
            </p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-node-id="2246:2072" data-name="CaretRight">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
          </div>
          <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2246:2074" data-name="passo">
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[14px] tracking-[0.28px] w-[67px]" data-node-id="2246:2075">
              Campanha
            </p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-node-id="2246:2076" data-name="CaretRight">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
          </div>
          <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2246:2078" data-name="passo">
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[14px] tracking-[0.28px] w-[101px]" data-node-id="2246:2079">
              Produto e UX/UI
            </p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-node-id="2246:2080" data-name="CaretRight">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
          </div>
          <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2246:2082" data-name="passo">
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[14px] tracking-[0.28px] w-[92px]" data-node-id="2246:2083">
              Design system
            </p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-node-id="2246:2084" data-name="CaretRight">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretRight} />
          </div>
          <div className="bg-[#99928c] content-stretch flex items-start overflow-clip px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2246:2086" data-name="passo">
            <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[14px] tracking-[0.28px] w-[110px]" data-node-id="2246:2087">
              Front-end com IA
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2246:2088" data-name="fotos">
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[244px] items-center justify-center overflow-clip px-[22px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-node-id="2246:2089" data-name="[imagem] Foto 1 · trabalhando">
            <div className="aspect-[292/197] relative shrink-0 w-full" data-node-id="2246:2090" data-name="foto_premio 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoPremio1} />
            </div>
          </div>
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[244px] items-center justify-center overflow-clip px-[22px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-node-id="2246:2091" data-name="[imagem] Foto 1 · trabalhando">
            <div className="aspect-[292/197] relative shrink-0 w-full" data-node-id="2246:2092" data-name="foto_grupo 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoGrupo2} />
            </div>
          </div>
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[244px] items-center justify-center overflow-clip px-[22px] py-[24px] relative rounded-[8px] shrink-0 w-full" data-node-id="2246:2093" data-name="[imagem] Foto 1 · trabalhando">
            <div className="aspect-[292/197] relative shrink-0 w-full" data-node-id="2246:2094" data-name="foto_time 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoTime2} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[64px] relative shrink-0 w-full" data-node-id="2246:2095" data-name="respiro" />
      <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="2246:2096" data-name="Contato">
        <div className="content-stretch flex gap-[9px] items-center overflow-clip pb-[6px] relative shrink-0 w-full" data-node-id="2246:2097" data-name="disponível">
          <div className="relative shrink-0 size-[8px]" data-node-id="2246:2098" data-name="Ellipse">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-[193px]" data-node-id="2246:2099">
            Disponível para trabalhar
          </p>
        </div>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[32px] tracking-[0.64px] w-full" data-node-id="2246:2100">
          Desenho, escrevo o código e digo o que não deu certo.
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2246:2101">
          Treze anos de design, cinco deles no Canaltech entre design system, marketing e comercial. Se você tem uma superfície que precisa sair pronta e medida, e não especificada, me chama.
        </p>
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip pt-[22px] relative shrink-0 w-full" data-node-id="2246:2102" data-name="ações">
          <div className="bg-[#fbf7f4] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2246:2103" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2246:2104" data-name="Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[98px]" data-node-id="2246:2106">
              Copiar e-mail
            </p>
          </div>
          <div className="border border-[#fbf7f4] border-solid content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2246:2107" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2246:2108" data-name="ReadCvLogo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[106px]" data-node-id="2246:2110">
              Ver o currículo
            </p>
          </div>
          <div className="border border-[#fbf7f4] border-solid content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2246:2111" data-name="botão">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="2246:2112" data-name="LinkedIn_icon 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedInIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[62px]" data-node-id="2246:2116">
              LinkedIn
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#39332e] border-solid border-t content-stretch flex flex-col font-['Sofia_Sans:Regular'] font-normal gap-[6px] items-start leading-[1.5] overflow-clip pt-[36px] relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2246:2117" data-name="base">
          <p className="relative shrink-0 whitespace-nowrap" data-node-id="2246:2118">
            © 2026 Erick Teixeira
          </p>
          <p className="relative shrink-0 whitespace-pre" data-node-id="2246:2119">{`oerickteixeira@gmail.com  ·  São Paulo`}</p>
        </div>
      </div>
      <div className="h-[120px] relative shrink-0 w-full" data-node-id="2246:2120" data-name="respiro" />
    </div>
  );
}