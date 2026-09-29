const imgCardHeroThumbdrop1 = "https://www.figma.com/api/mcp/asset/12a253e3-83a7-48f0-a539-7151b8225e85.png";
const imgCard4Estados1 = "https://www.figma.com/api/mcp/asset/fb94102a-56cc-4162-ac40-901332f53a3b.png";
const imgCardComportamentos1 = "https://www.figma.com/api/mcp/asset/15344e68-62e7-47c1-822b-364f9cd4f3d0.png";
const imgCardBiblioteca1 = "https://www.figma.com/api/mcp/asset/8f0f8208-b389-498e-aa76-7a5b93f7bdcc.png";
const imgCardThumbs1 = "https://www.figma.com/api/mcp/asset/845efd43-7d5f-4779-99c4-ca682ab30153.png";
const imgFigmaIcon1 = "https://www.figma.com/api/mcp/asset/5431a513-00f1-47e5-9dfe-06d1eee0db80.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/ee011990-78e2-4a0c-8399-82c2a3f081c2.svg";
const imgCopy = "https://www.figma.com/api/mcp/asset/c6fcc913-94ab-41cb-81f9-1f08a6d57f11.svg";
const imgReadCvLogo = "https://www.figma.com/api/mcp/asset/eef1e653-fb2e-4d0f-8d80-18e6e8dc8c9a.svg";
const imgLinkedInIcon1 = "https://www.figma.com/api/mcp/asset/ae49f41c-dbcb-45f5-aadc-373e1aa7fe94.svg";

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

export default function CaseThumbDropV3Mobile360() {
  return (
    <div className="bg-[#fbf7f4] content-stretch flex flex-col items-start pb-[32px] px-[12px] relative size-full" data-node-id="2247:1585" data-name="Case · ThumbDrop v3 · mobile 360">
      <div className="content-stretch flex h-[42px] items-center justify-between overflow-clip pb-[12px] pt-[18px] relative shrink-0 w-full" data-node-id="2247:1586" data-name="topo">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold h-full leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[240px]" data-node-id="2247:1587">{`Erick · product & design engineer`}</p>
        <SeletorDeIdioma className="border border-[#d0cdca] border-solid content-stretch flex items-center p-[2px] relative rounded-[999px] shrink-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1597" data-name="Hero">
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1598">
          PROJETO REAL · PRODUTO INTERNO EM USO NO CANALTECH
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:1599">
          Uma thumb com a cara da casa, feita por quem não é designer.
        </p>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1600" data-name="[mockup] abertura · o editor rodando">
          <div className="aspect-[336/151] relative shrink-0 w-full" data-node-id="2247:1601" data-name="card - hero - thumbdrop 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardHeroThumbdrop1} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1602" data-name="chamada + aviso">
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1603">
            O Canaltech publica vídeo todo dia, e toda thumbnail passava pelo time de design. O ThumbDrop é um editor interno que entrega a estética da casa para quem produz o conteúdo, sem depender de Photoshop. Duas versões: a primeira validou que o fluxo existia; a segunda virou a ferramenta que está em uso hoje.
          </p>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1604" data-name="aviso · sobre os números">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:1605">
              Sobre os números.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#232323] w-full" data-node-id="2247:1606">
              Em uma produção registrada, uma thumb publicada ficou pronta em três minutos. O fluxo antigo levava, em média, 30 minutos no Photoshop. Filtros e recorte foram testados com as APIs reais do Gemini e do PhotoRoom. O custo de API está na seção 06.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#f3f0eb] border border-[#d0cdca] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1607" data-name="disciplinas">
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1608" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1609">
              CLIENTE
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1610">
              <p className="leading-[1.5] mb-0">Canaltech</p>
              <p className="leading-[1.5]">ferramenta interna de thumbnails</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1611" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1612">
              PAPEL
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1613">
              <p className="leading-[1.5] mb-0">Product design, UX</p>
              <p className="leading-[1.5]">e design engineer</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1614" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1615">
              ENTREGAS
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1616">
              <p className="leading-[1.5] mb-0">Pesquisa · 2 versões</p>
              <p className="leading-[1.5]">design system · produto em uso</p>
            </div>
          </div>
          <div className="border-[rgba(103,93,84,0.25)] border-b border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1617" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1618">
              FEITO COM
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1619">
              <p className="leading-[1.5] mb-0">Claude Design · Claude Code ⇄ Figma via MCP</p>
              <p className="leading-[1.5]">APIs do Gemini e do PhotoRoom</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1620" data-name="item">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1621">
              PERÍODO
            </p>
            <div className="font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1622">
              <p className="leading-[1.5] mb-0">2026 · solo</p>
              <p className="leading-[1.5]">2 versões, 6 pessoas por rodada</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1623" data-name="01 · Problema">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1624" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1625">
            01 · O PROBLEMA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1626">
            A thumb não podia esperar o designer.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1627">
            Thumbnail decide o clique, e o canal publica todo dia. Quando só o design sabe fazer uma com a cara da casa, cada vídeo entra numa fila.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[12px] h-[394px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1628" data-name="números">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1629" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1630">
              30 min
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1631">
              média histórica de uma thumb no fluxo antigo, no Photoshop
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1632" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1633">
              1
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1634">
              time de design atendendo todas as thumbs do canal
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1635" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1636">
              3
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1637">
              ferramentas numa thumb na V1 sem API: editor, site do PhotoRoom e site do Gemini
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1638" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1639">
              0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1640">
              conhecimento de Photoshop exigido — o critério do projeto
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1641" data-name="02 · A/B">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="2247:1642" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1643">
            02 · DA PRIMEIRA VERSÃO À FERRAMENTA EM USO
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1644">
            Duas versões, duas perguntas diferentes.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1645">{`A primeira versão respondia "isso funciona?". A segunda, "quem não é designer consegue usar?". Os vídeos são duas produções diferentes, do início ao fim — não um teste controlado.`}</p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip py-[16px] relative shrink-0 w-full" data-node-id="2247:1646" data-name="dois métodos">
          <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1647" data-name="card">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1648">
              A · V1 · FEITA NO CLAUDE DESIGN
            </p>
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1649">
              Primeiro o fluxo. Depois a IA dentro dele.
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1650">
              A primeira versão nasceu no Claude Design, sem passar pelo Figma, e foi validada em duas etapas. Na primeira, sem API nenhuma: o recorte era feito no site do PhotoRoom e o filtro, no site do Gemini. Quando o fluxo provou que funcionava, as duas APIs entraram no editor, ainda no Claude Design — e ele funcionou de novo, agora sem sair da ferramenta.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1651">
              O que ela não resolvia era a experiência. A interface saída do Claude Design tinha cara de IA genérica e pedia alguém que já soubesse operar uma ferramenta de design. Testei com o time e ouvi o que travava, o que funcionava e o que faltava para quem não é designer — e foi isso que a versão final redesenhou.
            </p>
          </div>
          <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1652" data-name="card">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1653">
              B · VERSÃO FINAL · PAPEL → FIGMA ⇄ CÓDIGO VIA MCP
            </p>
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#fbf7f4] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1654">
              Ida e volta entre o design e o código.
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1655">
              Com essas respostas, voltei para o papel e desenhei à mão a experiência que eu queria. O Claude Code montou o wireframe a partir dessa referência, e pelo MCP ele foi para o Figma, onde fiz o trabalho de design: evoluí cada versão até o protótipo final, pensado para quem não é designer.
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1656">
              Do Figma, o protótipo voltou pelo MCP para o Claude Code, que programou a ferramenta para usar as APIs — sem nenhuma chave dentro do código. O handoff apoiou a conferência nos dois sentidos: não é sincronização automática, é um processo assistido de análise, adaptação e conferência.
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1657" data-name="os dois vídeos">
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1658" data-name="A · V1">
            <div className="bg-[#d0cdca] content-stretch flex flex-col gap-[6px] h-[189px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1659" data-name="[vídeo] A · V1 · thumb 'O fim da IA'">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1660">
                [ vídeo ] A · V1
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2247:1661">{`thumb "O fim da IA"`}</p>
            </div>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1662">
              A primeira versão, com o recorte e o filtro feitos fora da ferramenta.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1663" data-name="B · versão final">
            <div className="bg-[#d0cdca] content-stretch flex flex-col gap-[6px] h-[189px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1664" data-name="[vídeo] B · versão final · thumb BYD · Song Pro Flex DM-i">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1665">
                [ vídeo ] B · versão final
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2247:1666">
                thumb BYD · Song Pro Flex DM-i
              </p>
            </div>
            <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1667">
              A versão final, com recorte e filtro dentro do editor. Três minutos, thumb publicada no canal.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2247:1668">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2247:1669" data-name="O QUE A SEGUNDA VERSÃO RESOLVEU">
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1670">
              O QUE A SEGUNDA VERSÃO RESOLVEU
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1671" data-name="o que mudou">
            <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1672" data-name="dbox">
              <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] w-full" data-node-id="2247:1673">
                Fluxo guiado em 4 paradas
              </p>
              <div className="font-['Sofia_Sans:Light'] font-light leading-[0] relative shrink-0 text-[#232323] w-full whitespace-pre-wrap" data-node-id="2247:1674">
                <p className="leading-[1.5] mb-0">{`A V1 mostrava tudo de uma vez. `}</p>
                <p className="leading-[1.5]">A final só revela cada ferramenta depois que existe conteúdo para ela operar.</p>
              </div>
            </div>
            <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1675" data-name="dbox">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:1676">
                O custo aparece antes da chamada
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:1677">
                O filtro e o recorte pedem confirmação própria e mostram o custo antes de rodar: 1 ✦ no recorte, 1 na prévia e 2 na entrega. Exportar é gratuito.
              </p>
            </div>
            <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1678" data-name="dbox">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] w-full" data-node-id="2247:1679">
                Voltar não custa edição
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] w-full" data-node-id="2247:1680">
                Paradas já visitadas podem ser retomadas, e reenquadrar, mover ou refazer o texto é local e não gasta crédito. Uma prévia de IA não aprovada é descartada ao sair da etapa, e a composição fica só na memória da aba.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[40px] pt-[32px] relative shrink-0 w-full" data-node-id="2247:1681" data-name="03 · Decisões">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1682" data-name="cabeçalho">
          <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1683">
            03 · AS DECISÕES QUE SUSTENTAM O FLUXO
          </p>
          <p className="leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1684">
            Quatro paradas, e uma regra de cor consistente.
          </p>
          <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1685">
            O editor não é uma tela com todas as ferramentas. É um caminho: cada parada só mostra o que faz sentido naquele ponto.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1686" data-name="[mockup anotado] o editor nas quatro paradas">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1687" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1688" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1689">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1690">
                Imagem. Sem imagem não há thumb: nenhuma ferramenta aparece antes de existir conteúdo.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1691" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1692">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1693">
                Filtro de IA. Seis direções de arte, cada card com a própria foto já filtrada e o preço escrito. Seguir sem filtro custa zero.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1694" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1695">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1696">
                Texto. Título, destaque, peso e alinhamento, com manipulação direta no canvas.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1697" data-name="anot 4">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1698">
                04
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1699">
                Moldura e export. Quatro opções — Canaltech, CT Eletro, Minha cor e Sem moldura — e o PNG em 1920 × 1080. O recibo mostra o custo antes do download, que não cobra crédito.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1700" data-name="anot 5">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1701">
                05
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1702">
                A regra de cor. Um laranja por tela, na ação que avança; azul marca onde você está; verde confirma o que já aconteceu; vermelho só para falha.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[162px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1703" data-name="[mockup] 4 paradas">
          <div className="aspect-[336/162] relative shrink-0 w-full" data-node-id="2247:1704" data-name="card - 4 estados 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCard4Estados1} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1705" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1706">
            O crédito só é debitado quando a IA roda.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1707">
            Reenquadrar, mover, trocar a cor do texto e refazer a moldura são operações locais e não consomem crédito. Se a geração falhar, o saldo do editor volta e a composição fica intacta. Cancelar interrompe a espera, mas a prévia já foi cobrada — e a tela avisa isso antes.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1708" data-name="04 · Craft">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1709" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1710">
            04 · CRAFT
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1711">
            O que faz parecer um editor de verdade.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1712">
            Três coisas que ninguém elogia quando estão certas, e que entregam o produto quando estão erradas.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1713" data-name="[mockup anotado] os três comportamentos do canvas">
          <div className="bg-[#675d54] content-stretch flex flex-col h-[151px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1714" data-name="[mockup] os três comportamentos do canvas">
            <div className="aspect-[336/151] relative shrink-0 w-full" data-node-id="2247:1715" data-name="card - comportamentos 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardComportamentos1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1716" data-name="anotações">
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1717" data-name="anot 1">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1718">
                01
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1719">
                Zoom ancorado no cursor. O pixel sob o cursor continua sob o cursor — só se percebe quando falta.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1720" data-name="anot 2">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1721">
                02
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1722">
                Réguas magnéticas. Um motor de encaixe só, para imagem e texto. A guia aparece no gesto e some ao soltar.
              </p>
            </div>
            <div className="bg-[#e5dfd3] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1723" data-name="anot 3">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1724">
                03
              </p>
              <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1725">
                Camadas com trava progressiva. Cada nova imagem bloqueia as anteriores; a camada desejada pode ser selecionada pela lista para voltar a editá-la.
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1726" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1727">
            A decisão mais cara do projeto: compactar em vez de rolar.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1728">
            Deixar o painel rolar era a saída fácil — e num painel de 320px isso esconde metade das ferramentas. Os estados principais foram compactados para caber em 1440 × 900 e 390 × 844, sem overflow horizontal de 360 a 1440 px no Chromium. Com conteúdo adicional, o painel usa rolagem vertical.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1729" data-name="05 · Sistema">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1730" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1731">
            05 · O SISTEMA
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1732">
            Um sistema de 49 variáveis no Figma, orientando o código.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1733">
            O Figma orientou a implementação, e variáveis CSS organizaram a base. O CTA usa um laranja próprio, #B85829: branco sobre o laranja da marca dá 2,73:1 e reprova AA.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-wrap gap-[12px] h-[415px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1734" data-name="contadores">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1735" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1736">
              49
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1737">
              variáveis no Figma, em 5 coleções, todas com escopo definido
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1738" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1739">
              9
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1740">
              estilos de texto, com o tamanho ligado à variável
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1741" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1742">
              7
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1743">
              conjuntos de componentes com variantes, além de 13 componentes avulsos
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1744" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1745">
              2
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1746">
              modos, desktop e mobile, nas coleções de tipografia e layout
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1747" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1748">
            Desktop e mobile compartilham a mesma base.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1749">
            Desktop e mobile usam a mesma base visual e os mesmos componentes, com ajustes responsivos para cada largura. No Figma, as coleções de tipografia e de layout têm os modos Desktop e Mobile.
          </p>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[133px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1750" data-name="[mockup] a biblioteca no Figma · fundações e componentes">
          <div className="aspect-[336/133] relative shrink-0 w-full" data-node-id="2247:1751" data-name="card - biblioteca 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardBiblioteca1} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[24px] pt-[32px] relative shrink-0 w-full" data-node-id="2247:1752" data-name="06 · Hoje">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1753" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1754">
            06 · ONDE ESTÁ HOJE
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1755">
            Em uso, com o custo coberto por créditos.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1756">
            As seis thumbs publicadas foram feitas por mim. Marketing, comercial e vídeo estão validando a ferramenta em peças experimentais, para canais e projetos que ainda não foram ao ar. O Photoshop segue como ferramenta principal do design.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-wrap gap-[12px] h-[478px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1757" data-name="hoje">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1758" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1759">
              6
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1760">
              thumbs publicadas, todas feitas por mim — 3 no Canaltech e 3 no Canaltech Eletro
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1761" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1762">
              3 min
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1763">
              numa produção registrada, contra a média histórica de 30 min no Photoshop
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1764" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1765">
              R$ 0
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1766">
              de custo incremental nos filtros de IA hoje, coberto por créditos Google disponíveis — o custo econômico existe
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] self-stretch shrink-0 w-[162px]" data-node-id="2247:1767" data-name="nbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1768">
              2
            </p>
            <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1769">
              canais com thumbs publicadas: Canaltech e Canaltech Eletro
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1770" data-name="os canais">
          <div className="bg-[#fbf7f4] content-stretch flex flex-col gap-[12px] items-start overflow-clip pr-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1771" data-name="card">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1772">
              Canaltech
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1773">
              Canal de tecnologia do Canaltech no YouTube. Thumbs feitas no ThumbDrop estão entre os vídeos publicados.
            </p>
            <a className="block font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#232323] text-[14px] tracking-[0.28px] w-full" href="https://www.youtube.com/canaltech" data-node-id="2247:1774" target="_blank">
              <p className="cursor-pointer leading-[1.5] whitespace-pre-wrap">{`youtube.com/canaltech  ↗`}</p>
            </a>
          </div>
          <div className="bg-[#fbf7f4] content-stretch flex flex-col gap-[12px] items-start overflow-clip pr-[20px] py-[28px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1775" data-name="card">
            <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1776">
              Canaltech Eletro
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1777">
              Canal de eletrodomésticos e linha branca do Canaltech. As peças estão no feed, junto com as demais.
            </p>
            <a className="block font-['Sofia_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#232323] text-[14px] tracking-[0.28px] w-full" href="https://www.youtube.com/@CTEletro" data-node-id="2247:1778" target="_blank">
              <p className="cursor-pointer leading-[1.5] whitespace-pre-wrap">{`youtube.com/@CTEletro  ↗`}</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1779" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1780">
            UMA DELAS É PUBLI
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1781">
            A thumb da BYD saiu num vídeo patrocinado.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1782">
            A BYD | Song Pro Flex DM-i foi publicada como publieditorial no Canaltech — é a thumb do vídeo da seção 02. Em publieditorial o padrão de acabamento é o do anunciante, o que torna esta a peça mais exigente da lista.
          </p>
        </div>
        <div className="bg-[#675d54] content-stretch flex flex-col h-[116px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1783" data-name="[mockup] as seis thumbs publicadas">
          <div className="aspect-[336/116] relative shrink-0 w-full" data-node-id="2247:1784" data-name="card_thumbs 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardThumbs1} />
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#232323] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip px-[20px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1785" data-name="card">
          <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#a39383] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1786">
            Sobre o custo, com honestidade.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1787">
            Cada filtro de IA passa pela API do Google (Gemini); cada recorte, pela do PhotoRoom — as duas testadas em chamadas reais. As chaves não ficam no código: quem abre o ThumbDrop informa a do Gemini e a do PhotoRoom na primeira tela, e elas ficam só no navegador — por isso o projeto pode ser publicado sem expor credencial nenhuma. Hoje o custo incremental dos filtros está coberto pelos créditos que o Grupo Magalu disponibilizou para validação interna. O custo econômico existe e volta a aparecer se os créditos acabarem ou o volume aumentar. O saldo na barra é um teto de gasto local, que o próprio usuário ajusta — não o saldo da conta do provedor.
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start overflow-clip pt-[32px] relative shrink-0 w-full" data-node-id="2247:1788" data-name="07 · Em aberto">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1789" data-name="cabeçalho">
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1790">
            07 · EM ABERTO
          </p>
          <p className="font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1791">
            O que eu não resolvi.
          </p>
          <p className="font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#675d54] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1792">
            O produto estar em uso torna estas pendências mais visíveis, não menos. São as quatro que eu levantaria primeiro se alguém assumisse a ferramenta amanhã.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="2247:1793" data-name="pendências">
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1794" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1795">
              A continuidade dos créditos não é minha decisão
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1796">
              Os créditos Google vieram do Grupo Magalu para validação interna; a continuidade é comercial. Sem eles, uma thumb custa ≈ R$ 0,91 com uma tentativa de filtro e R$ 1,41 com três — pelos preços de referência do script.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1797" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1798">
              Não medi a taxa de descarte
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1799">
              Quantos filtros são aplicados e recusados antes do OK? É esse número que dá o custo real por thumb utilizável — e, com o crédito rodando, dá para coletar sem pagar para descobrir.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1800" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1801">
              Seis thumbs ainda não medem o impacto
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1802">
              As seis thumbs publicadas foram feitas por mim, e o uso pelos outros times ainda é experimental. Medir quanto a ferramenta substitui do fluxo antigo depende de volume feito por outras pessoas.
            </p>
          </div>
          <div className="bg-[#eeeae2] content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[24px] py-[36px] relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1803" data-name="dbox">
            <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#675d54] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1804">
              Sem dado de desempenho
            </p>
            <p className="font-['Sofia_Sans:Light'] font-light relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-full" data-node-id="2247:1805">
              Nenhum CTR ou view atribuído às thumbs feitas aqui. O resultado de um vídeo depende de pauta, título e algoritmo; isolar o efeito da thumb exige um teste que ainda não montei.
            </p>
          </div>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-y-[12px] items-start py-[32px] relative shrink-0 w-full" data-node-id="2247:1806" data-name="cta">
        <div className="bg-[#232323] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:1807" data-name="ver o case">
          <div className="h-[24px] overflow-clip relative shrink-0 w-[16px]" data-node-id="2247:1808" data-name="figma-icon 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFigmaIcon1} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[95px]" data-node-id="2247:1815">
            Ver protótipo
          </p>
        </div>
      </div>
      <div className="border-[#d0cdca] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[32px] relative shrink-0 w-full" data-node-id="2247:1816" data-name="Ver mais">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Sofia_Sans:Bold'] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1817" data-name="cabeçalho">
          <p className="leading-[1.5] relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] uppercase w-full" data-node-id="2247:1818">
            08 · MAIS
          </p>
          <p className="leading-[1.1] relative shrink-0 text-[#232323] text-[24px] tracking-[0.48px] w-full" data-node-id="2247:1819">
            Outros projetos
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2247:1820" data-name="projetos">
          <div className="border border-[#b2afad] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1821" data-name="projeto · Nega Nagô">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1822" data-name="[imagem] capa · Nega Nagô">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:1823" data-name="capa_nega_nago 4" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:1824" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1825">
                Nega Nagô
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1826">
                O catálogo de uma trancista virou agendamento sem sair do WhatsApp. Pesquisa, design system e front-end — no ar em neganago.com, com a disponibilidade saindo da agenda dela.
              </p>
            </div>
          </div>
          <div className="border border-[#bbb] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2247:1827" data-name="projeto · CT em Campo">
            <div className="bg-[#e9e9ea] border-[#d0cdca] border-b border-solid content-stretch flex flex-col h-[189px] items-center justify-center overflow-clip p-[20px] relative shrink-0 w-full" data-node-id="2247:1828" data-name="[imagem] capa · CT em Campo">
              <div className="aspect-[296/166] relative shrink-0 w-full" data-node-id="2247:1829" data-name="capa_ct_em_campo 1" />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip pb-[22px] pt-[20px] px-[22px] relative shrink-0 w-full" data-node-id="2247:1830" data-name="texto">
              <p className="font-['Sofia_Sans:Bold'] font-bold relative shrink-0 text-[#232323] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1831">
                CT em Campo · Canaltech × Netshoes
              </p>
              <p className="font-['Sofia_Sans:Regular'] font-normal relative shrink-0 text-[#675d54] text-[14px] tracking-[0.28px] w-full" data-node-id="2247:1832">
                Uma ativação de Copa que não cabia no template do portal. Superfície dedicada, brandbook, motion e código — sem anúncio, recomendação ou concorrente dividindo a tela.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232323] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[20px] py-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="2247:1833" data-name="Contato">
        <div className="content-stretch flex gap-[9px] items-center overflow-clip pb-[6px] relative shrink-0 w-full" data-node-id="2247:1834" data-name="disponível">
          <div className="relative shrink-0 size-[8px]" data-node-id="2247:1835" data-name="Ellipse">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#99928c] text-[14px] tracking-[0.28px] uppercase w-[193px]" data-node-id="2247:1836">
            Disponível para trabalhar
          </p>
        </div>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.1] relative shrink-0 text-[#fbf7f4] text-[32px] tracking-[0.64px] w-full" data-node-id="2247:1837">
          Desenho, escrevo o código e digo o que não deu certo.
        </p>
        <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#d0cdca] text-[18px] tracking-[0.36px] w-full" data-node-id="2247:1838">
          Treze anos de design, cinco deles no Canaltech entre design system, marketing e comercial. Se você tem uma superfície que precisa sair pronta e medida, e não especificada, me chama.
        </p>
        <div className="content-start flex flex-wrap gap-[12px] items-start overflow-clip pt-[22px] relative shrink-0 w-full" data-node-id="2247:1839" data-name="ações">
          <div className="bg-[#fbf7f4] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:1840" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:1841" data-name="Copy">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#232323] text-[16px] tracking-[0.32px] w-[98px]" data-node-id="2247:1843">
              Copiar e-mail
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:1844" data-name="botão">
            <div className="relative shrink-0 size-[24px]" data-node-id="2247:1845" data-name="ReadCvLogo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReadCvLogo} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[106px]" data-node-id="2247:1847">
              Ver o currículo
            </p>
          </div>
          <div className="border border-[#675d54] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-node-id="2247:1848" data-name="botão">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="2247:1849" data-name="LinkedIn_icon 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedInIcon1} />
            </div>
            <p className="[word-break:break-word] font-['Sofia_Sans:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#fbf7f4] text-[16px] tracking-[0.32px] w-[62px]" data-node-id="2247:1853">
              LinkedIn
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#39332e] border-solid border-t content-stretch flex flex-col font-['Sofia_Sans:Regular'] font-normal gap-[6px] items-start leading-[1.5] overflow-clip pt-[36px] relative shrink-0 text-[#675d54] text-[12px] tracking-[0.24px] w-full" data-node-id="2247:1854" data-name="base">
          <p className="relative shrink-0 whitespace-nowrap" data-node-id="2247:1855">
            © 2026 Erick Teixeira
          </p>
          <p className="relative shrink-0 whitespace-pre" data-node-id="2247:1856">{`oerickteixeira@gmail.com  ·  São Paulo`}</p>
        </div>
      </div>
    </div>
  );
}