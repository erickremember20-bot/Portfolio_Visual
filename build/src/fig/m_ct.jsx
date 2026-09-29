const imgCardHeroCtEmCampo1 = "https://www.figma.com/api/mcp/asset/c426200b-60c0-40c0-b7be-1adb491fdea4.png";
const imgCardAntes1 = "https://www.figma.com/api/mcp/asset/012c67e0-b080-48c2-aef0-e99598873424.png";
const imgCardDepois1 = "https://www.figma.com/api/mcp/asset/592397a5-d131-400e-8cd1-90a5c355a05f.png";
const imgCardKeyVisual2 = "https://www.figma.com/api/mcp/asset/217ce9e9-13a5-47f5-9806-76aa597e9d09.png";
const imgCardCtaCorrecao1 = "https://www.figma.com/api/mcp/asset/53a0aba2-0cc0-45c9-92ae-0aec01f8dba4.png";
const imgCardComponentesEEstado1 = "https://www.figma.com/api/mcp/asset/9ebc169a-e257-496e-8a2a-4ad3ebbbf817.png";
const imgSocialMedia1 = "https://www.figma.com/api/mcp/asset/c0cf03db-d813-4987-a343-924ed1e3df16.png";
const imgCardPontoDeEntrada3 = "https://www.figma.com/api/mcp/asset/f9a211df-d863-46f4-be92-9bbe0a17c788.png";
const imgFigmaIcon1 = "https://www.figma.com/api/mcp/asset/7dacca3d-b186-4fbe-8978-6682b3afa1c6.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/af7df4ac-5eeb-4dfb-85b0-4e70f2c1550c.svg";
const imgCopy = "https://www.figma.com/api/mcp/asset/8e945c5e-56cb-497f-acd9-4840d6c561c5.svg";
const imgReadCvLogo = "https://www.figma.com/api/mcp/asset/bca19b88-a76f-4c35-a051-a5e21fbf50d6.svg";
const imgLinkedInIcon1 = "https://www.figma.com/api/mcp/asset/328ccd99-5686-485e-9d4a-4b384d2f09fc.svg";

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

export default function CaseCtEmCampoV3Mobile360() {
  return (
    <div className="bg-[#fbf7f4] content-stretch flex flex-col items-start pb-[32px] px-[12px] relative size-full" data-node-id="2247:2351" data-name="Case · CT em Campo v3 · mobile 360">
      <div className="content-stretch flex h-[42px] items-center justify-between overflow-clip pb-[12px] pt-[18px] relative shrink-0 w-full" data-node-id="2247:2352" data-name="topo">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold h-full leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[240px]" data-node-id="2247:2353">{`Erick · product & design engineer`}</p>
        <SeletorDeIdioma className="border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2362" data-name="Hero">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2363">
          PROJETO REAL · DESIGN SYSTEM, MOTION E CÓDIGO · 15 DIAS, SOLO
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:2364">
          Um patrocinador compra atenção. O portal compartilhado entrega ela de graça.
        </p>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2365" data-name="[mockup] a página da campanha · desktop e celular">
          <div className="aspect-[336/151] relative shrink-0 w-full" data-node-id="2247:2366" data-name="card - hero - ct em campo 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardHeroCtEmCampo1} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:2367" data-name="chamada + aviso">
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2368">
            O Canaltech vendeu uma ativação de Copa para a Netshoes, e o formato disponível era o template do portal — com anúncios, recomendações e marcas concorrentes dividindo a tela. Troquei por uma superfície dedicada. Fiz a marca da campanha, o key visual, as peças, o design system, o motion e o front-end. Virou o formato padrão da casa.
          </p>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2369" data-name="aviso · sobre os números">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2370">
              Sobre os números.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#232323] w-full" data-node-id="2247:2371">
              Campanha entregue e publicada. O que está medido aqui é o produto — contraste, tokens, escopo, prazo. Não tenho dado de conversão da Netshoes, e a seção 06 diz isso explicitamente em vez de estimar.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#f3f0eb] border border-[#d0cdca] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2372" data-name="disciplinas">
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2373" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2374">
              CLIENTE
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2375">
              <p className="leading-[1.5] mb-0">Canaltech × Netshoes</p>
              <p className="leading-[1.5]">ativação patrocinada</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2376" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2377">
              PAPEL
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2378">
              <p className="leading-[1.5] mb-0">Design system</p>
              <p className="leading-[1.5]">e design engineer</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2379" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2380">
              ENTREGAS
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2381">
              <p className="leading-[1.5] mb-0">Brandbook · UI · design system</p>
              <p className="leading-[1.5]">motion · front-end</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2382" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2383">
              FEITO COM
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2384">
              <p className="leading-[1.5] mb-0">Claude Code ⇄ Figma via MCP</p>
              <p className="leading-[1.5]">After Effects · Higgsfield</p>
            </div>
          </div>
          <div className="border-0 border-[rgba(103,93,84,0.25)] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2385" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2386">
              PERÍODO
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2387">
              <p className="leading-[1.5] mb-0">2026 · 15 dias</p>
              <p className="leading-[1.5]">solo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2388" data-name="01 · Problema">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2389" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2390">
            01 · O PROBLEMA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2391">
            A página existia. A exclusividade, não.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2392">
            O CT Ofertas roda num template de portal: anúncio de rede, recomendação, concorrente ao lado. Bom para descoberta, ruim para vender exclusividade.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[12px] h-[310px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2393" data-name="números">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2394" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2395">
              18
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2396">
              touchpoints entre social, vídeo e web
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2397" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2398">
              15
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2399">
              dias entre o briefing e o handoff
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2400" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2401">
              1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2402">
              designer, sem time de front-end do outro lado
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2403" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2404">
              R$ 0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2405">
              de mídia paga para levar tráfego até lá
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2406" data-name="02 · Superfície">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2407" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2408">
            02 · ANTES E DEPOIS
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2409">
            A reformulação não foi estética. Foi estrutural.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2410">
            O mesmo objetivo — comprar o produto patrocinado — pelos dois caminhos. O que sai não é decoração: são os desvios para o leitor sair da página.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2411" data-name="antes e depois">
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2412" data-name="antes">
            <div className="bg-[#675d54] content-stretch flex flex-col h-[225px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2413" data-name="[mockup] antes · o template do portal">
              <div className="aspect-[336/225] relative shrink-0 w-full" data-node-id="2247:2414" data-name="card - antes 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardAntes1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2415" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2416">
                COMO ERA · SEIS PASSOS
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2417">
                Chega pelo link da oferta · encontra o produto numa lista com outros · passa por anúncio de rede e marca concorrente · procura o cupom, que está em outro lugar · sai para o e-commerce e aplica o cupom lá · compra, ou desiste em algum dos desvios.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2418">
                Os passos 3, 4 e 5 são fuga. Cada um é uma porta para fora da campanha que o patrocinador financiou.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2419" data-name="depois">
            <div className="bg-[#675d54] content-stretch flex flex-col h-[225px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2420" data-name="[mockup] depois · a superfície dedicada">
              <div className="aspect-[336/225] relative shrink-0 w-full" data-node-id="2247:2421" data-name="card - depois 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardDepois1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2422" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2423">
                COMO FICOU · TRÊS PASSOS
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2424">
                Chega numa superfície só do patrocinador · vê preço, prazo e cupom já aplicado na mesma tela · compra pelo CTA fixo, sem procurar nada.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2425">
                Nenhum passo oferece uma saída. O cupom vem pré-aplicado, a navegação é fixa no mobile e a contagem regressiva mantém o prazo à vista.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2426" data-name="03 · Restrições">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2427" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2428">
            03 · RESTRIÇÕES
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2429">
            As decisões de tela vieram do contrato, não do gosto.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2430">
            Três restrições comerciais definiram a superfície antes de existir qualquer pixel. Elas explicam por que a página tem a forma que tem.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2431" data-name="restrições">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2432" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2433">
              Exclusividade é o produto
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2434">
              Se o patrocinador comprou a tela, nada de terceiro entra nela — nem anúncio de rede, nem recomendação, nem marca concorrente. Isso elimina módulos inteiros do template padrão, e é o motivo de a página ser uma coluna só.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2435" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2436">
              O formato precisa servir ao próximo patrocinador
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2437">
              Uma peça sob medida para a Netshoes seria descartável. Tudo que é de marca virou variável, com dois modos, e a estrutura ficou independente de quem ocupa o espaço.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2438" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:2439">
              Não há time de front-end na outra ponta
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:2440">
              A entrega tinha que sair pronta, não especificada — o que empurrou a decisão de tokenizar o sistema para espelhar o CSS desde o começo.
            </p>
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[139px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2441" data-name="[mockup] o key visual da campanha">
          <div className="aspect-[336/139] relative shrink-0 w-full" data-node-id="2247:2442" data-name="card - key visual 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardKeyVisual2} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2443" data-name="04 · Sistema">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2444" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2445">
            04 · SISTEMA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2446">
            Achei um erro de contraste no CTA e corrigi no token, não no botão.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2447">
            Tipografia e cor definidas como escala, não peça a peça — é o que mantém dezoito touchpoints parecendo a mesma campanha sem eu revisar um por um.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2448" data-name="[mockup anotado] o CTA antes e depois da correção no token">
          <div className="bg-[#675d54] content-stretch flex flex-col h-[104px] items-center justify-center overflow-clip px-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2449" data-name="[mockup] o CTA antes e depois da correção no token">
            <div className="aspect-[296/92] relative shrink-0 w-full" data-node-id="2247:2450" data-name="card - CTA correção 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardCtaCorrecao1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:2451" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2452" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2453">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2454">
                O erro. O CTA primário falhava WCAG AA em 3,84:1 — verde sobre branco só passa nesse valor para texto grande.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2455" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2456">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2457">
                A correção. Subi o token de marca um degrau na rampa, para 4,55:1, e desloquei o hover junto para preservar a relação entre estados.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2458" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2459">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2460">
                O alcance. Aplicado nos dois modos de marca: o próximo patrocinador herda a correção em vez do bug.
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-wrap gap-[12px] h-[289px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2461" data-name="contadores">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2462" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2463">
              3,84:1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2464">
              contraste do CTA como estava
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2465" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2466">
              4,55:1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2467">
              depois da correção no token
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2468" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2469">
              56px
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2470">
              alvo de toque primário, acima da diretriz de 48
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2471" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2472">
              2
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2473">
              modos de marca herdando a correção
            </p>
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[145px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2474" data-name="[mockup] componentes e estados · mobile e desktop">
          <div className="aspect-[336/145] relative shrink-0 w-full" data-node-id="2247:2475" data-name="card - componentes e estado 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardComponentesEEstado1} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2476" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2477">
            Cinco etapas. As duas primeiras não se delegam.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2478">
            Contrato de mídia e direção de arte são julgamento e ficam comigo — definem a superfície e as restrições que todas as etapas seguintes herdam. Sistema, geração e handoff são vazão, e são a razão de uma ativação inteira sair em quinze dias em vez de seis semanas. O MCP liga o Claude Code e o Figma nas duas direções, então o design system é a única fonte de verdade dos dois lados: nenhum valor é redigitado, e o que chega na outra ponta é uma página funcionando — com contagem regressiva, carrossel, cupom e barra fixa vivos — não um documento a interpretar.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2479" data-name="05 · Alcance">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2480" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2481">
            05 · ALCANCE
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2482">
            A página é o destino. Chegar nela era a outra metade do trabalho.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2483">
            Sem verba de mídia, o que leva alguém até o produto é o reconhecimento. Todo formato saiu dos mesmos tokens e da mesma linguagem de movimento.
          </p>
        </div>
        <div className="bg-[#eeeae2] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2484" data-name="Motion">
          <div className="aspect-[1920/1080] relative shrink-0 w-full" data-node-id="2247:2485" data-name="motion_ct_em_campo 1" />
        </div>
        <div className="bg-[#eeeae2] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2486" data-name="Social Media">
          <div className="aspect-[1920/1080] relative shrink-0 w-full" data-node-id="2247:2487" data-name="social_media 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSocialMedia1} />
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[104px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2488" data-name="[mockup] o ponto de entrada real · a comunidade no WhatsApp">
          <div className="aspect-[336/104] relative shrink-0 w-full" data-node-id="2247:2489" data-name="card - ponto de entrada 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardPontoDeEntrada3} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2490" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2491">
            A consistência aqui não é capricho de portfólio. É a função.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2492">
            Quem encontra a campanha nos Reels precisa reconhecê-la instantaneamente na página de oferta, porque não há mídia paga reforçando o caminho. Um cartão amarelo virando wipe de transição é vocabulário de futebol fazendo trabalho de edição — e é o mesmo amarelo do token que está no CSS da página.
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:2493" data-name="06 · Números">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2494" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2495">
            06 · NÚMEROS
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2496">
            O que dá para medir, e o que eu não tenho.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2497">
            Os do produto qualquer pessoa confere abrindo o arquivo ou o inspetor. Os de negócio eu não tenho, e prefiro dizer isso a estimar.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[12px] h-[289px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2498" data-name="medido no produto">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2499" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2500">
              1:1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2501">
              tokens mapeados para CSS, sem valor redigitado
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2502" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2503">
              18
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2504">
              peças entregues em 6 posicionamentos
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2505" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2506">
              15
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2507">
              dias do briefing ao handoff, sozinho
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:2508" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2509">
              0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2510">
              módulos de terceiro na página
            </p>
          </div>
        </div>
        <div className="bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2511" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2512">
            ALCANCE, NÃO RESULTADO
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2513">
            570 mil+ seguidores · 400 mil+ membros · R$ 0 em mídia paga.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2514">
            São audiências, não conversões — o tamanho dos canais onde a campanha circulou, não quantas pessoas compraram. Não tenho acesso ao lado do e-commerce da Netshoes, então não há taxa de conversão nesta página. O resultado que eu consigo afirmar é interno: depois desta campanha, o formato foi adotado pelo Canaltech como modelo de referência para ativações patrocinadas com qualquer marca parceira. Deixou de ser peça pontual e virou produto.
          </p>
        </div>
        <div className="bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2515" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2516">
            O que eu não resolvi.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:2517">
            O formato foi aprovado como padrão e está preparado para dois modos de marca, mas rodou com um patrocinador só — a prova de que é reaproveitável só existe quando a segunda marca entrar sem eu mexer no sistema. Entreguei a página sem instrumentar conversão do meu lado, que é exatamente a pergunta que um patrocinador faz. A contagem regressiva é da campanha, não do estoque do parceiro. E a geração das imagens é assistida por IA, isso está escrito aqui e não no produto — quem chega pela campanha não tem como saber. É uma correção de uma linha e devia estar lá.
          </p>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-y-[12px] items-start py-[32px] relative shrink-0 w-full" data-node-id="2247:2518" data-name="cta">
        <div className="bg-[#232323] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2519" data-name="ver o case">
          <div className="h-[24px] overflow-clip relative shrink-0 w-[16px]" data-node-id="2247:2520" data-name="figma-icon 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFigmaIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[95px]" data-node-id="2247:2527">
            Ver protótipo
          </p>
        </div>
      </div>
      <div className="border-[#d0cdca] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2247:2528" data-name="Ver mais">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2529" data-name="cabeçalho">
          <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:2530">
            07 · MAIS
          </p>
          <p className="leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:2531">
            Outros projetos
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:2532" data-name="projetos">
          <div className="border border-[#d0cdca] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2533" data-name="projeto · ThumbDrop">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2534" data-name="[imagem] capa · ThumbDrop">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:2535" data-name="capa · ThumbDrop" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:2536" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2537">
                ThumbDrop
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2538">
                Ferramenta interna que tirou a thumbnail da fila do time de design. Duas versões testadas com seis pessoas cada, IA dentro do editor, e o custo por thumb visível antes de cada clique.
              </p>
            </div>
          </div>
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:2539" data-name="projeto · Nega Nagô">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:2540" data-name="[imagem] capa · Nega Nagô">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:2541" data-name="capa_nega_nago 4" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:2542" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2543">
                Nega Nagô
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:2544">
                O catálogo de uma trancista virou agendamento sem sair do WhatsApp. Pesquisa, design system e front-end — no ar em neganago.com, com a disponibilidade saindo da agenda dela.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="2247:2545" data-name="Contato">
        <div className="content-stretch flex gap-[9px] items-center overflow-clip pb-[6px] relative shrink-0 w-full" data-node-id="2247:2546" data-name="disponível">
          <div className="relative shrink-0 size-[8px]" data-node-id="2247:2547" data-name="Ellipse">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#99928c] text-[14px] tracking-[0.28px] uppercase w-[193px]" data-node-id="2247:2548">
            Disponível para trabalhar
          </p>
        </div>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:2549">
          Desenho, escrevo o código e digo o que não deu certo.
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#d0cdca] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:2550">
          Treze anos de design, cinco deles no Canaltech entre design system, marketing e comercial. Se você tem uma superfície que precisa sair pronta e medida, e não especificada, me chama.
        </p>
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip pt-[22px] relative shrink-0 w-full" data-node-id="2247:2551" data-name="ações">
          <div className="bg-[#fbf7f4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2552" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:2553" data-name="Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[98px]" data-node-id="2247:2555">
              Copiar e-mail
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2556" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:2557" data-name="ReadCvLogo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[106px]" data-node-id="2247:2559">
              Ver o currículo
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:2560" data-name="botão">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="2247:2561" data-name="LinkedIn_icon 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedInIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[62px]" data-node-id="2247:2565">
              LinkedIn
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#39332e] border-solid border-t content-stretch flex flex-col font-['Sofia_Sans:Regular'] font-normal gap-[6px] items-start leading-[1.5] overflow-clip pt-[36px] relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2247:2566" data-name="base">
          <p className="relative shrink-0 whitespace-nowrap" data-node-id="2247:2567">
            © 2026 Erick Teixeira
          </p>
          <p className="relative shrink-0 whitespace-pre" data-node-id="2247:2568">{`oerickteixeira@gmail.com  ·  São Paulo`}</p>
        </div>
      </div>
    </div>
  );
}