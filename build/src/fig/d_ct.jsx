const imgCardHeroCtEmCampo1 = "https://www.figma.com/api/mcp/asset/1136c418-7d30-41d9-8707-ca2910a52343.png";
const imgCardAntes1 = "https://www.figma.com/api/mcp/asset/e0908e2f-e24a-48f6-89bf-264044d5e7f4.png";
const imgCardDepois1 = "https://www.figma.com/api/mcp/asset/7511867d-3522-49d8-bae9-55059b59a7bc.png";
const imgCardKeyVisual2 = "https://www.figma.com/api/mcp/asset/a79409a1-58be-4974-8b79-75ffcff695b0.png";
const imgCardCtaCorrecao1 = "https://www.figma.com/api/mcp/asset/6f91f8a8-f911-486d-a9d2-46a0f0fc1f5a.png";
const imgCardComponentesEEstado1 = "https://www.figma.com/api/mcp/asset/754e80a4-91e2-4487-a321-0435e2950e2d.png";
const imgSocialMedia1 = "https://www.figma.com/api/mcp/asset/1108402b-99ff-4f84-b9e4-7a4a91885ae3.png";
const imgCardPontoDeEntrada3 = "https://www.figma.com/api/mcp/asset/37474aae-b6c2-4295-bea9-0373d07004d8.png";
const imgFigmaIcon1 = "https://www.figma.com/api/mcp/asset/dc574cdb-709a-4c48-9fb4-a85eb1309aff.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/be7409c6-2b95-40a7-8440-bcb4970a0e7f.svg";
const imgCopy = "https://www.figma.com/api/mcp/asset/2bf0562b-f284-4c96-8950-1d26bcd51146.svg";
const imgReadCvLogo = "https://www.figma.com/api/mcp/asset/02a1cd69-673b-4800-8b28-68b3675d45fc.svg";
const imgLinkedInIcon1 = "https://www.figma.com/api/mcp/asset/b48800ee-115f-4448-9496-c7f275bec41b.svg";

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

export default function CaseCtEmCampoV3Desktop1400() {
  return (
    <div className="bg-[#fbf7f4] content-stretch flex flex-col items-start pb-[120px] px-[120px] relative size-full" data-node-id="2230:7392" data-name="Case · CT em Campo v3 · desktop 1400">
      <div className="border-[#e4e1de] border-b border-solid content-stretch flex items-center justify-between overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="2230:7393" data-name="topo">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[271px]" data-node-id="2230:7394">{`Erick · product & design engineer`}</p>
        <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-node-id="2264:1614" data-name="navegação">
          <div className="[word-break:break-word] content-stretch flex font-['Sofia_Sans:Regular'] font-normal gap-[24px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px]" data-node-id="2230:7395" data-name="menu">
            <p className="relative shrink-0 w-[68px]" data-node-id="2230:7396">
              Problema
            </p>
            <p className="relative shrink-0 w-[74px]" data-node-id="2230:7397">
              Superfície
            </p>
            <p className="relative shrink-0 w-[76px]" data-node-id="2230:7398">
              Restrições
            </p>
            <p className="relative shrink-0 w-[58px]" data-node-id="2230:7399">
              Sistema
            </p>
            <p className="relative shrink-0 w-[58px]" data-node-id="2230:7400">
              Alcance
            </p>
            <p className="relative shrink-0 w-[66px]" data-node-id="2230:7401">
              Números
            </p>
            <p className="relative shrink-0 w-[59px]" data-node-id="2230:7402">
              Contato
            </p>
          </div>
          <SeletorDeIdioma className="border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7403" data-name="Hero">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7404">
          PROJETO REAL · DESIGN SYSTEM, MOTION E CÓDIGO · 15 DIAS, SOLO
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:ExtraBold'] font-extrabold leading-[1.1] relative shrink-0 text-[#232323] text-[48px] tracking-[0.96px] w-[1160px]" data-node-id="2230:7405">
          Um patrocinador compra atenção. O portal compartilhado entrega ela de graça.
        </p>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[523px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7406" data-name="[mockup] a página da campanha · desktop e celular">
          <div className="h-[523px] relative shrink-0 w-[1160px]" data-node-id="2230:7407" data-name="card - hero - ct em campo 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardHeroCtEmCampo1} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[48px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2230:7408" data-name="chamada + aviso">
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[592px]" data-node-id="2230:7409">
            O Canaltech vendeu uma ativação de Copa para a Netshoes, e o formato disponível era o template do portal — com anúncios, recomendações e marcas concorrentes dividindo a tela. Troquei por uma superfície dedicada. Fiz a marca da campanha, o key visual, as peças, o design system, o motion e o front-end. Virou o formato padrão da casa.
          </p>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 text-[14px] tracking-[0.28px] w-[520px]" data-node-id="2230:7410" data-name="aviso · sobre os números">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2230:7411">
              Sobre os números.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#232323] w-full" data-node-id="2230:7412">
              Campanha entregue e publicada. O que está medido aqui é o produto — contraste, tokens, escopo, prazo. Não tenho dado de conversão da Netshoes, e a seção 06 diz isso explicitamente em vez de estimar.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#f3f0eb] border border-[#d0cdca] border-solid content-stretch flex items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7413" data-name="disciplinas">
          <div className="border-[rgba(103,93,84,0.25)] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-[232px]" data-node-id="2230:7414" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7415">
              CLIENTE
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7416">
              <p className="leading-[1.5] mb-0">Canaltech × Netshoes</p>
              <p className="leading-[1.5]">ativação patrocinada</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-[232px]" data-node-id="2230:7417" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7418">
              PAPEL
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7419">
              <p className="leading-[1.5] mb-0">Design system</p>
              <p className="leading-[1.5]">e design engineer</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-[232px]" data-node-id="2230:7420" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7421">
              ENTREGAS
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7422">
              <p className="leading-[1.5] mb-0">Brandbook · UI · design system</p>
              <p className="leading-[1.5]">motion · front-end</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-r border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-[232px]" data-node-id="2230:7423" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7424">
              FEITO COM
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7425">
              <p className="leading-[1.5] mb-0">Claude Code ⇄ Figma via MCP</p>
              <p className="leading-[1.5]">After Effects · Higgsfield</p>
            </div>
          </div>
          <div className="border-0 border-[rgba(103,93,84,0.25)] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-[232px]" data-node-id="2230:7426" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7427">
              PERÍODO
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7428">
              <p className="leading-[1.5] mb-0">2026 · 15 dias</p>
              <p className="leading-[1.5]">solo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7429" data-name="01 · Problema">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7430" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7431">
            01 · O PROBLEMA
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7432">
            A página existia. A exclusividade, não.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[820px]" data-node-id="2230:7433">
            O CT Ofertas roda num template de portal: anúncio de rede, recomendação, concorrente ao lado. Bom para descoberta, ruim para vender exclusividade.
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7434" data-name="números">
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7435" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7436">
              18
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7437">
              touchpoints entre social, vídeo e web
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7438" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7439">
              15
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7440">
              dias entre o briefing e o handoff
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7441" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7442">
              1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7443">
              designer, sem time de front-end do outro lado
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7444" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7445">
              R$ 0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7446">
              de mídia paga para levar tráfego até lá
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7447" data-name="02 · Superfície">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7448" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7449">
            02 · ANTES E DEPOIS
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7450">
            A reformulação não foi estética. Foi estrutural.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[820px]" data-node-id="2230:7451">
            O mesmo objetivo — comprar o produto patrocinado — pelos dois caminhos. O que sai não é decoração: são os desvios para o leitor sair da página.
          </p>
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7452" data-name="antes e depois">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="2230:7453" data-name="antes">
            <div className="bg-[#675d54] content-stretch flex flex-col h-[380px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7454" data-name="[mockup] antes · o template do portal">
              <div className="h-[380px] relative shrink-0 w-[568px]" data-node-id="2230:7455" data-name="card - antes 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardAntes1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] min-h-[263px] overflow-clip p-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7456" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2230:7457">
                COMO ERA · SEIS PASSOS
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7458">
                Chega pelo link da oferta · encontra o produto numa lista com outros · passa por anúncio de rede e marca concorrente · procura o cupom, que está em outro lugar · sai para o e-commerce e aplica o cupom lá · compra, ou desiste em algum dos desvios.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7459">
                Os passos 3, 4 e 5 são fuga. Cada um é uma porta para fora da campanha que o patrocinador financiou.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="2230:7460" data-name="depois">
            <div className="bg-[#675d54] content-stretch flex flex-col h-[380px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7461" data-name="[mockup] depois · a superfície dedicada">
              <div className="h-[380px] relative shrink-0 w-[568px]" data-node-id="2230:7462" data-name="card - depois 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardDepois1} />
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[24px] items-start leading-[1.5] min-h-[263px] overflow-clip p-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7463" data-name="card">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2230:7464">
                COMO FICOU · TRÊS PASSOS
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7465">
                Chega numa superfície só do patrocinador · vê preço, prazo e cupom já aplicado na mesma tela · compra pelo CTA fixo, sem procurar nada.
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7466">
                Nenhum passo oferece uma saída. O cupom vem pré-aplicado, a navegação é fixa no mobile e a contagem regressiva mantém o prazo à vista.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7467" data-name="03 · Restrições">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7468" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7469">
            03 · RESTRIÇÕES
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7470">
            As decisões de tela vieram do contrato, não do gosto.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[820px]" data-node-id="2230:7471">
            Três restrições comerciais definiram a superfície antes de existir qualquer pixel. Elas explicam por que a página tem a forma que tem.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[48px] items-start leading-[1.5] overflow-clip relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7472" data-name="restrições">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0 w-[354.667px]" data-node-id="2230:7473" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2230:7474">
              Exclusividade é o produto
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2230:7475">
              Se o patrocinador comprou a tela, nada de terceiro entra nela — nem anúncio de rede, nem recomendação, nem marca concorrente. Isso elimina módulos inteiros do template padrão, e é o motivo de a página ser uma coluna só.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0 w-[354.667px]" data-node-id="2230:7476" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2230:7477">
              O formato precisa servir ao próximo patrocinador
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2230:7478">
              Uma peça sob medida para a Netshoes seria descartável. Tudo que é de marca virou variável, com dois modos, e a estrutura ficou independente de quem ocupa o espaço.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] self-stretch shrink-0 w-[354.667px]" data-node-id="2230:7479" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2230:7480">
              Não há time de front-end na outra ponta
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2230:7481">
              A entrega tinha que sair pronta, não especificada — o que empurrou a decisão de tokenizar o sistema para espelhar o CSS desde o começo.
            </p>
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[480px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7482" data-name="[mockup] o key visual da campanha">
          <div className="h-[480px] relative shrink-0 w-[1160px]" data-node-id="2230:7483" data-name="card - key visual 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardKeyVisual2} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7484" data-name="04 · Sistema">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7485" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7486">
            04 · SISTEMA
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7487">
            Achei um erro de contraste no CTA e corrigi no token, não no botão.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[820px]" data-node-id="2230:7488">
            Tipografia e cor definidas como escala, não peça a peça — é o que mantém dezoito touchpoints parecendo a mesma campanha sem eu revisar um por um.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-[1160px]" data-node-id="2230:7489" data-name="[mockup anotado] o CTA antes e depois da correção no token">
          <div className="bg-[#675d54] content-stretch flex flex-col h-[360px] items-center justify-center overflow-clip px-[80px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7490" data-name="[mockup] o CTA antes e depois da correção no token">
            <div className="h-[360px] relative shrink-0 w-[1160px]" data-node-id="2230:7491" data-name="card - CTA correção 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardCtaCorrecao1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2230:7492" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-[370.667px]" data-node-id="2230:7493" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2230:7494">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7495">
                O erro. O CTA primário falhava WCAG AA em 3,84:1 — verde sobre branco só passa nesse valor para texto grande.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-[370.667px]" data-node-id="2230:7496" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2230:7497">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7498">
                A correção. Subi o token de marca um degrau na rampa, para 4,55:1, e desloquei o hover junto para preservar a relação entre estados.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-[370.667px]" data-node-id="2230:7499" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2230:7500">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7501">
                O alcance. Aplicado nos dois modos de marca: o próximo patrocinador herda a correção em vez do bug.
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7502" data-name="contadores">
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7503" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7504">
              3,84:1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7505">
              contraste do CTA como estava
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7506" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7507">
              4,55:1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7508">
              depois da correção no token
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7509" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7510">
              56px
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7511">
              alvo de toque primário, acima da diretriz de 48
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7512" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7513">
              2
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7514">
              modos de marca herdando a correção
            </p>
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[500px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7515" data-name="[mockup] componentes e estados · mobile e desktop">
          <div className="h-[500px] relative shrink-0 w-[1160px]" data-node-id="2230:7516" data-name="card - componentes e estado 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardComponentesEEstado1} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7517" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#a39383] text-[20px] tracking-[0.4px] w-full" data-node-id="2230:7518">
            Cinco etapas. As duas primeiras não se delegam.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7519">
            Contrato de mídia e direção de arte são julgamento e ficam comigo — definem a superfície e as restrições que todas as etapas seguintes herdam. Sistema, geração e handoff são vazão, e são a razão de uma ativação inteira sair em quinze dias em vez de seis semanas. O MCP liga o Claude Code e o Figma nas duas direções, então o design system é a única fonte de verdade dos dois lados: nenhum valor é redigitado, e o que chega na outra ponta é uma página funcionando — com contagem regressiva, carrossel, cupom e barra fixa vivos — não um documento a interpretar.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7520" data-name="05 · Alcance">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7521" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7522">
            05 · ALCANCE
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7523">
            A página é o destino. Chegar nela era a outra metade do trabalho.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[820px]" data-node-id="2230:7524">
            Sem verba de mídia, o que leva alguém até o produto é o reconhecimento. Todo formato saiu dos mesmos tokens e da mesma linguagem de movimento.
          </p>
        </div>
        <div className="bg-[#eeeae2] content-stretch flex h-[653px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7525" data-name="Motion">
          <div className="h-[653px] relative shrink-0 w-[1160px]" data-node-id="2230:7526" data-name="motion_ct_em_campo 1" />
        </div>
        <div className="bg-[#eeeae2] content-stretch flex h-[653px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7527" data-name="Social Media">
          <div className="h-[653px] relative shrink-0 w-[1160px]" data-node-id="2230:7528" data-name="social_media 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSocialMedia1} />
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[360px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7529" data-name="[mockup] o ponto de entrada real · a comunidade no WhatsApp">
          <div className="h-[360px] relative shrink-0 w-[1160px]" data-node-id="2230:7530" data-name="card - ponto de entrada 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardPontoDeEntrada3} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7531" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#a39383] text-[20px] tracking-[0.4px] w-full" data-node-id="2230:7532">
            A consistência aqui não é capricho de portfólio. É a função.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7533">
            Quem encontra a campanha nos Reels precisa reconhecê-la instantaneamente na página de oferta, porque não há mídia paga reforçando o caminho. Um cartão amarelo virando wipe de transição é vocabulário de futebol fazendo trabalho de edição — e é o mesmo amarelo do token que está no CSS da página.
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[48px] items-start overflow-clip pt-[48px] relative shrink-0 w-full" data-node-id="2230:7534" data-name="06 · Números">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7535" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-[min-content]" data-node-id="2230:7536">
            06 · NÚMEROS
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7537">
            O que dá para medir, e o que eu não tenho.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-[820px]" data-node-id="2230:7538">
            Os do produto qualquer pessoa confere abrindo o arquivo ou o inspetor. Os de negócio eu não tenho, e prefiro dizer isso a estimar.
          </p>
        </div>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7539" data-name="medido no produto">
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7540" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7541">
              1:1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7542">
              tokens mapeados para CSS, sem valor redigitado
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7543" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7544">
              18
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7545">
              peças entregues em 6 posicionamentos
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7546" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7547">
              15
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7548">
              dias do briefing ao handoff, sozinho
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[24px] relative rounded-[12px] self-stretch" data-node-id="2230:7549" data-name="nbox">
            <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-full" data-node-id="2230:7550">
              0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7551">
              módulos de terceiro na página
            </p>
          </div>
        </div>
        <div className="bg-[#232323] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7552" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7553">
            ALCANCE, NÃO RESULTADO
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#a39383] text-[20px] tracking-[0.4px] w-full" data-node-id="2230:7554">
            570 mil+ seguidores · 400 mil+ membros · R$ 0 em mídia paga.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7555">
            São audiências, não conversões — o tamanho dos canais onde a campanha circulou, não quantas pessoas compraram. Não tenho acesso ao lado do e-commerce da Netshoes, então não há taxa de conversão nesta página. O resultado que eu consigo afirmar é interno: depois desta campanha, o formato foi adotado pelo Canaltech como modelo de referência para ativações patrocinadas com qualquer marca parceira. Deixou de ser peça pontual e virou produto.
          </p>
        </div>
        <div className="bg-[#232323] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2230:7556" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#a39383] text-[20px] tracking-[0.4px] w-full" data-node-id="2230:7557">
            O que eu não resolvi.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2230:7558">
            O formato foi aprovado como padrão e está preparado para dois modos de marca, mas rodou com um patrocinador só — a prova de que é reaproveitável só existe quando a segunda marca entrar sem eu mexer no sistema. Entreguei a página sem instrumentar conversão do meu lado, que é exatamente a pergunta que um patrocinador faz. A contagem regressiva é da campanha, não do estoque do parceiro. E a geração das imagens é assistida por IA, isso está escrito aqui e não no produto — quem chega pela campanha não tem como saber. É uma correção de uma linha e devia estar lá.
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-start py-[48px] relative shrink-0 w-full" data-node-id="2230:7559" data-name="cta">
        <div className="bg-[#232323] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2230:7560" data-name="ver o case">
          <div className="h-[24px] overflow-clip relative shrink-0 w-[16px]" data-node-id="2230:7561" data-name="figma-icon 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFigmaIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] whitespace-nowrap" data-node-id="2230:7568">
            Ver protótipo
          </p>
        </div>
      </div>
      <div className="border-[#d0cdca] border-solid border-t content-stretch flex flex-col gap-[36px] items-start overflow-clip py-[48px] relative shrink-0 w-full" data-node-id="2230:7569" data-name="Ver mais">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7570" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap" data-node-id="2230:7571">
            07 · MAIS
          </p>
          <p className="font-['Sofia_Sans:Black'] font-black leading-[1.1] relative shrink-0 text-[#232323] text-[40px] tracking-[0.8px] w-[900px]" data-node-id="2230:7572">
            Outros projetos
          </p>
        </div>
        <div className="content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2230:7573" data-name="projetos">
          <div className="border border-[#d0cdca] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] self-stretch" data-node-id="2230:7574" data-name="projeto · ThumbDrop">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[321px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2230:7575" data-name="[imagem] capa · ThumbDrop">
              <div className="h-[321px] relative shrink-0 w-[571px]" data-node-id="2230:7576" data-name="capa · ThumbDrop" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2230:7577" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[20px] tracking-[0.4px] w-full" data-node-id="2230:7578">
                ThumbDrop
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7579">
                Ferramenta interna que tirou a thumbnail da fila do time de design. Duas versões testadas com seis pessoas cada, IA dentro do editor, e o custo por thumb visível antes de cada clique.
              </p>
            </div>
          </div>
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[12px] self-stretch" data-node-id="2230:7580" data-name="projeto · Nega Nagô">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[321px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2230:7581" data-name="[imagem] capa · Nega Nagô">
              <div className="h-[321px] relative shrink-0 w-[571px]" data-node-id="2230:7582" data-name="capa_nega_nago 4" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2230:7583" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[20px] tracking-[0.4px] w-full" data-node-id="2230:7584">
                Nega Nagô
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2230:7585">
                O catálogo de uma trancista virou agendamento sem sair do WhatsApp. Pesquisa, design system e front-end — no ar em neganago.com, com a disponibilidade saindo da agenda dela.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232323] content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[56px] py-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="2230:7586" data-name="Contato">
        <div className="content-stretch flex gap-[9px] items-center overflow-clip pb-[6px] relative shrink-0 w-full" data-node-id="2230:7587" data-name="disponível">
          <div className="relative shrink-0 size-[8px]" data-node-id="2230:7588" data-name="Ellipse">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#99928c] text-[14px] tracking-[0.28px] uppercase whitespace-nowrap" data-node-id="2230:7589">
            Disponível para trabalhar
          </p>
        </div>
        <p className="[word-break:break-word] font-['Sofia_Sans:ExtraBold'] font-extrabold leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[64px] tracking-[1.28px] w-[820px]" data-node-id="2230:7590">
          Desenho, escrevo o código e digo o que não deu certo.
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#d0cdca] text-[20px] tracking-[0.4px] w-[700px]" data-node-id="2230:7591">
          Treze anos de design, cinco deles no Canaltech entre design system, marketing e comercial. Se você tem uma superfície que precisa sair pronta e medida, e não especificada, me chama.
        </p>
        <div className="content-stretch flex gap-[12px] items-start overflow-clip pt-[22px] relative shrink-0 w-full" data-node-id="2230:7592" data-name="ações">
          <div className="bg-[#fbf7f4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2230:7593" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2230:7594" data-name="Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] whitespace-nowrap" data-node-id="2230:7596">
              Copiar e-mail
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2230:7597" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2230:7598" data-name="ReadCvLogo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] whitespace-nowrap" data-node-id="2230:7600">
              Ver o currículo
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2230:7601" data-name="botão">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="2230:7602" data-name="LinkedIn_icon 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedInIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] whitespace-nowrap" data-node-id="2230:7606">
              LinkedIn
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#39332e] border-solid border-t content-stretch flex font-['Sofia_Sans:Regular'] font-normal items-start justify-between leading-[1.5] overflow-clip pt-[36px] relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2230:7607" data-name="base">
          <p className="relative shrink-0 whitespace-nowrap" data-node-id="2230:7608">
            © 2026 Erick Teixeira
          </p>
          <p className="relative shrink-0 whitespace-pre" data-node-id="2230:7609">{`oerickteixeira@gmail.com  ·  São Paulo`}</p>
        </div>
      </div>
    </div>
  );
}