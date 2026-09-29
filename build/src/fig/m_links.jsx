const imgCardHeroMockup1 = "https://www.figma.com/api/mcp/asset/14512d52-ac44-40bb-bf71-914e095cb052.png";
const imgCardAntesAPaginaPropria1 = "https://www.figma.com/api/mcp/asset/e54d362c-e169-47ad-86a1-7f0ede3bda7e.png";
const imgCardDepoisAPaginaPropria2 = "https://www.figma.com/api/mcp/asset/9432c5f3-d269-47dc-a79e-885f9de6c34c.png";
const imgCardAsQuatroDecisoes1 = "https://www.figma.com/api/mcp/asset/837d3478-faba-4542-b593-87ccffe962f9.png";
const imgCardFoundations1 = "https://www.figma.com/api/mcp/asset/5b9ac60f-ea25-4b79-ae4d-332823ca968f.png";
const imgCardComponents1 = "https://www.figma.com/api/mcp/asset/7fa4d88c-f940-4ce5-b2ed-04583f0c115e.png";
const imgCardAPaginaNasDuasDensidades2 = "https://www.figma.com/api/mcp/asset/1afdb9bb-e75b-499f-aed9-e4a1005773e4.png";
const imgFigmaIcon1 = "https://www.figma.com/api/mcp/asset/c5a3b686-e493-4550-8712-9c3856b49cbd.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/24b17e3f-cab2-417d-a5f5-93d8a301f709.svg";
const imgCopy = "https://www.figma.com/api/mcp/asset/1b27732a-caa1-4ecf-a82f-9cac93084c80.svg";
const imgReadCvLogo = "https://www.figma.com/api/mcp/asset/8ca253dc-b06a-4546-a851-bd1d6ba179f0.svg";
const imgLinkedInIcon1 = "https://www.figma.com/api/mcp/asset/ee935df0-f3d8-4e3c-98cb-7598b7a2d4e2.svg";

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

export default function CaseCanaltechLinkHubV3Mobile360() {
  return (
    <div className="bg-[#fbf7f4] content-stretch flex flex-col items-start pb-[32px] px-[12px] relative size-full" data-node-id="2247:2127" data-name="Case · Canaltech Link Hub v3 · mobile 360">
      <div className="content-stretch flex h-[42px] items-center justify-between overflow-clip pb-[12px] pt-[18px] relative shrink-0 w-full" data-node-id="2247:2128" data-name="topo">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold h-full leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[240px]" data-node-id="2247:2129">{`Erick · product & design engineer`}</p>
        <SeletorDeIdioma className="border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2138" data-name="Hero">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2139">
          PROJETO REAL · DESIGN SYSTEM, ACESSIBILIDADE E CÓDIGO
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:2140">
          O link da bio era alugado. A audiência era nossa — e o dado, de ninguém.
        </p>
        <div className="bg-[#a4afba] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2141" data-name="[mockup] a página final · desktop e celular">
          <div className="aspect-[336/151] relative shrink-0 w-full" data-node-id="2247:2142" data-name="card---hero---mockup 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardHeroMockup1} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:2143" data-name="chamada + aviso">
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2144">
            O Canaltech distribuía oito destinos por um Linktree. Funcionava como índice e falhava como produto: sem marca, sem estado, sem consentimento e sem um único evento de clique que voltasse para casa. Refiz como página própria — design system, acessibilidade, telemetria e um HTML único que o time publica sem build.
          </p>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2145" data-name="aviso · sobre os números">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2146">
              Sobre os números.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#232323] w-full" data-node-id="2247:2147">
              A página está pronta e testada, não publicada. Tudo o que está medido aqui é de construção — tokens, componentes, estados, cobertura de teste e peso. Não há dado de tráfego nem de conversão, e a seção 06 diz isso em vez de estimar.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#f3f0eb] border border-[#d0cdca] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2148" data-name="disciplinas">
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2149" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2150">
              CLIENTE
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2151">
              <p className="leading-[1.5] mb-0">Canaltech</p>
              <p className="leading-[1.5]">hub de links próprio</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2152" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2153">
              PAPEL
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2154">
              <p className="leading-[1.5] mb-0">Design system</p>
              <p className="leading-[1.5]">e design engineer</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2155" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2156">
              ENTREGAS
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2157">
              <p className="leading-[1.5] mb-0">Design system · UI</p>
              <p className="leading-[1.5]">HTML único · acessibilidade</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2158" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2159">
              FEITO COM
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2160">
              <p className="leading-[1.5] mb-0">Claude Code ⇄ Figma via MCP</p>
              <p className="leading-[1.5]">HTML, CSS e JS · Playwright</p>
            </div>
          </div>
          <div className="border-0 border-[rgba(103,93,84,0.25)] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2161" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2162">
              PERÍODO
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2163">
              <p className="leading-[1.5] mb-0">2026 · solo</p>
              <p className="leading-[1.5]">3ª geração da página</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2164" data-name="01 · Problema">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2165" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2166">
            01 · O PROBLEMA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2167">
            A página existia. A propriedade dela, não.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2168">
            A bio manda a audiência para um Linktree: bom como índice, incapaz como produto. Oito destinos com o mesmo peso, e o clique ficava de fora.
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2169" data-name="números">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2170" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2171">
              3
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2172">
              gerações da mesma página; as duas primeiras alugadas
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2173" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2174">
              8
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2175">
              destinos concorrendo no mesmo peso visual
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2176" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2177">
              0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2178">
              eventos de clique no analytics da própria casa
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2179" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2180">
              0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2181">
              controle sobre consentimento, marca e estados
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2182" data-name="02 · Propriedade">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2183" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2184">
            02 · ANTES E DEPOIS
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2185">
            A mudança não foi de layout. Foi de propriedade.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2186">
            O mesmo objetivo — da bio até oito destinos — pelos dois caminhos. O que aparece no meio é tudo o que a página alugada não fazia de dentro.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2187" data-name="antes e depois">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2188" data-name="antes">
            <div className="bg-[#d0cdca] content-stretch flex flex-col h-[269px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2189" data-name="[mockup] antes · as duas gerações no Linktree">
              <div className="aspect-[336/269] relative shrink-0 w-full" data-node-id="2247:2190" data-name="card - antes · a página própria 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardAntesAPaginaPropria1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2191" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2192">
                COMO ERA
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2193">
                Lista hospedada por terceiro, oito destinos com o mesmo peso e a marca reduzida a um avatar redondo. Sem faixa de campanha, sem estado de foco, sem rota de teclado. Consentimento e dado de clique ficavam com a plataforma, e qualquer ajuste dependia do painel de outra empresa.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2194">
                Nenhum desses quatro últimos é resolvível de dentro da ferramenta. É o custo de alugar.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2195" data-name="depois">
            <div className="bg-[#d0cdca] content-stretch flex flex-col h-[269px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2196" data-name="[mockup] depois · a página própria">
              <div className="aspect-[336/269] relative shrink-0 w-full" data-node-id="2247:2197" data-name="card - depois · a página própria 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardDepoisAPaginaPropria2} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2198" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2199">
                COMO FICOU
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2200">
                Uma página do Canaltech, com campo de marca no topo e hierarquia real: faixa de campanha, CTA, seções e oito destinos com pesos diferentes. Clique, newsletter e consentimento viram evento no analytics da casa.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2201">
                É um arquivo. Sobe no domínio do Canaltech sem build, responde a hover, press, foco e teclado, e degrada sozinha se um asset faltar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2202" data-name="03 · Restrições">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2203" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2204">
            03 · RESTRIÇÕES
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2205">
            As regras que existiam antes do primeiro pixel.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2206">
            Não era um projeto de tela livre. O que dava para fazer já estava cercado por quem publica, por onde publica e por quanto custa manter depois que eu sair.
          </p>
        </div>
        <div className="content-stretch flex flex-col flex-wrap gap-[20px_48px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2207" data-name="restrições">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0" data-node-id="2247:2208" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2209">
              Publicação
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2210">
              O time de dev publica, não constrói. Sem build, sem bundler, sem dependência: chega como arquivo pronto.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0" data-node-id="2247:2211" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2212">
              Hospedagem
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2213">
              Sem servidor de aplicação. Tem que funcionar como estático em qualquer lugar que o Canaltech já use.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0" data-node-id="2247:2214" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2215">
              Desempenho
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2216">
              O tráfego vem da bio, no celular, muitas vezes em rede ruim. Nenhuma requisição a terceiro — fonte inclusiva.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0" data-node-id="2247:2217" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2218">
              Privacidade
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2219">
              Consentimento é requisito, não enfeite. A página mede clique, então pergunta antes e guarda a resposta.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0" data-node-id="2247:2220" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2221">
              Resiliência
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2222">
              Se um asset faltar no deploy, a linha não pode quebrar. Todo ícone e imagem têm plano B no próprio HTML.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0" data-node-id="2247:2223" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2224">
              Campanha
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2225">
              A faixa de evento entra e sai sem tocar no layout, porque a votação tem data para acabar.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2226" data-name="04 · Decisões">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2227" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2228">
            04 · DECISÕES DE PRODUTO
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2229">
            Quatro decisões que o frame estático não respondia.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2230">
            O Figma entrega a página parada. Produto acontece no que ele não desenha: o que o botão faz sem destino, o que a página faz se o arquivo some.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2231" data-name="[mockup anotado] as quatro decisões, na tela">
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip px-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2232" data-name="[mockup] as quatro decisões, na tela">
            <div className="aspect-[296/167] relative shrink-0 w-full" data-node-id="2247:2233" data-name="card - as quatro decisões 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardAsQuatroDecisoes1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:2234" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2235" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2236">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2237">
                Estados viraram regra. Onze regras derivadas dos próprios tokens — hover, press, foco, inválido, aceito e o toggle ligado.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2238" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2239">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2240">
                O painel de consentimento foi construído do zero. O Figma só previa o botão; montei o diálogo modal, o foco preso, o ESC e a trava de rolagem.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2241" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2242">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2243">
                Sem destino, o botão se declara desligado. Perde o href, vira aria-disabled e para de responder, em vez de virar âncora morta.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2244" data-name="anot 4">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2245">
                04
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2246">
                O grão do hero saiu como código. Reproduzido em CSS com feTurbulence — sem arquivo e sem requisição a terceiro.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2247" data-name="05 · Sistema">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2248" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2249">
            05 · SISTEMA E ENTREGA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2250">
            Dez componentes, 35 variantes, e nenhum hover para inventar.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2251">
            O sistema não é paleta bonita: é o contrato que faz a próxima pessoa acertar o estado sem perguntar. Variável no Figma é custom property no CSS.
          </p>
        </div>
        <div className="[word-break:break-word] content-start flex flex-wrap gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2252" data-name="contadores">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2253" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2254">
              16
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2255">
              tokens de cor, com o mesmo nome no Figma e no CSS
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2256" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2257">
              11
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2258">
              regras de estado especificadas, não improvisadas
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2259" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2260">
              10
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2261">
              conjuntos de componentes · 35 variantes
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-[162px]" data-node-id="2247:2262" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2263">
              176
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2264">
              asserções automatizadas em Playwright
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[#fbf7f4] w-full" data-node-id="2247:2265" data-name="entrega">
          <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2266" data-name="card">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2267">
              Um arquivo. Zero dependência. Zero build.
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2268">{`O time recebe um index.html de 55 KB e uma pasta de assets. Abre no navegador, sobe em qualquer estático, não tem nada para instalar — porque quem publica não é quem constrói. A fonte vem do próprio repositório: nenhuma requisição sai para terceiro. Todo <img> tem um onerror que troca pelo sprite inline e mantém a linha de pé.`}</p>
          </div>
          <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2269" data-name="card">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2270">
              O sistema volta para o Figma.
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2271">
              O frame foi lido por MCP — nós, variáveis, tipografia, grade e assets, nada descrito de memória. O que saiu do código voltou como dois boards 16:9 neste mesmo arquivo. Num fluxo de mão única o Figma morre no handoff e vira imagem que desatualiza no primeiro ajuste; fechando o ciclo, o sistema do arquivo e o do HTML são o mesmo.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2272" data-name="boards">
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2273" data-name="[mockup] Board 01 · Fundações">
            <div className="aspect-[2880/1620] relative shrink-0 w-full" data-node-id="2247:2274" data-name="card - Foundations 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardFoundations1} />
            </div>
          </div>
          <div className="bg-[#d0cdca] content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2275" data-name="[mockup] Board 02 · Componentes">
            <div className="aspect-[2880/1620] relative shrink-0 w-full" data-node-id="2247:2276" data-name="card - Components 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardComponents1} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2277" data-name="06 · Medição">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2278" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2279">
            06 · MEDIÇÃO E HONESTIDADE
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2280">
            A página passou a responder perguntas que antes ninguém conseguia fazer.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2281">
            Três eventos saem da página para o analytics do próprio Canaltech. Não é painel de vaidade: é saber qual destino paga a próxima pauta.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:2282" data-name="eventos">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2283" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2284">
              ct:link
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2285">
              id · href · label
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2286">
              Qual destino a audiência realmente usa, por posição na lista e por campanha no ar.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2287" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2288">
              ct:newsletter
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2289">
              email
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2290">
              Quanto da audiência que vem de social vira base própria, sem intermediário.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2291" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2292">
              ct:cookies-consentimento
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2293">
              escolha · audiencia · publicidade · data
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2294">
              Que fatia da base aceita medição — e o que pode ser atribuído com honestidade.
            </p>
          </div>
        </div>
        <div className="bg-[#d0cdca] content-stretch flex flex-col h-[180px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2295" data-name="[mockup] a página nas duas densidades">
          <div className="aspect-[336/180] relative shrink-0 w-full" data-node-id="2247:2296" data-name="card · a página nas duas densidades 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardAPaginaNasDuasDensidades2} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2297" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2298">
            O que não está aqui.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2299">
            Nenhum número de tráfego, clique ou conversão — a página está pronta e testada, não publicada. Quando subir, os três eventos acima passam a alimentar exatamente essas colunas, e aí o case ganha uma seção de resultado que hoje seria chute. Duas coisas ficaram conscientemente pendentes: sem dado de produção a hierarquia dos oito destinos é hipótese, a ser revista no primeiro mês; e não houve teste com leitor de tela real — só verificação de foco, rótulo, ordem de teclado e contraste.
          </p>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-y-[12px] items-start py-[32px] relative shrink-0 w-full" data-node-id="2247:2300" data-name="cta">
        <div className="bg-[#232323] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2301" data-name="ver o case">
          <div className="h-[24px] overflow-clip relative shrink-0 w-[16px]" data-node-id="2247:2302" data-name="figma-icon 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFigmaIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[95px]" data-node-id="2247:2309">
            Ver protótipo
          </p>
        </div>
      </div>
      <div className="border-[#d0cdca] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2247:2310" data-name="Ver mais">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2311" data-name="cabeçalho">
          <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2312">
            07 · MAIS
          </p>
          <p className="leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2313">
            Outros projetos
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2314" data-name="projetos">
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2315" data-name="projeto · ThumbDrop">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2316" data-name="[imagem] capa · ThumbDrop">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:2317" data-name="capa · ThumbDrop" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:2318" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2319">
                ThumbDrop
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2320">
                Ferramenta interna que tirou a thumbnail da fila do time de design. Duas versões testadas com seis pessoas cada, IA dentro do editor, e o custo por thumb visível antes de cada clique.
              </p>
            </div>
          </div>
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2321" data-name="projeto · Nega Nagô">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2322" data-name="[imagem] capa · Nega Nagô">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:2323" data-name="capa_nega_nago 4" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:2324" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2325">
                Nega Nagô
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2326">
                O catálogo de uma trancista virou agendamento sem sair do WhatsApp. Pesquisa, design system e front-end — no ar em neganago.com, com a disponibilidade saindo da agenda dela.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="2247:2327" data-name="Contato">
        <div className="content-stretch flex gap-[9px] items-center overflow-clip pb-[6px] relative shrink-0 w-full" data-node-id="2247:2328" data-name="disponível">
          <div className="relative shrink-0 size-[8px]" data-node-id="2247:2329" data-name="Ellipse">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#99928c] text-[14px] tracking-[0.28px] uppercase w-[193px]" data-node-id="2247:2330">
            Disponível para trabalhar
          </p>
        </div>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:2331">
          Desenho, escrevo o código e digo o que não deu certo.
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#d0cdca] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2332">
          Treze anos de design, cinco deles no Canaltech entre design system, marketing e comercial. Se você tem uma superfície que precisa sair pronta e medida, e não especificada, me chama.
        </p>
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip pt-[22px] relative shrink-0 w-full" data-node-id="2247:2333" data-name="ações">
          <div className="bg-[#fbf7f4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2334" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:2335" data-name="Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[98px]" data-node-id="2247:2337">
              Copiar e-mail
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2338" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:2339" data-name="ReadCvLogo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[106px]" data-node-id="2247:2341">
              Ver o currículo
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2342" data-name="botão">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="2247:2343" data-name="LinkedIn_icon 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedInIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[62px]" data-node-id="2247:2347">
              LinkedIn
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#39332e] border-solid border-t content-stretch flex flex-col font-['Sofia_Sans:Regular'] font-normal gap-[6px] items-start leading-[1.5] overflow-clip pt-[36px] relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2247:2348" data-name="base">
          <p className="relative shrink-0 whitespace-nowrap" data-node-id="2247:2349">
            © 2026 Erick Teixeira
          </p>
          <p className="relative shrink-0 whitespace-pre" data-node-id="2247:2350">{`oerickteixeira@gmail.com  ·  São Paulo`}</p>
        </div>
      </div>
    </div>
  );
}