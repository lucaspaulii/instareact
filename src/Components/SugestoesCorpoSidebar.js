const sugestoes = [
  {
    imagem: "public/Assets/img/bad.vibes.memes.svg",
    nome: "bad.vibe.memes",
    razao: "Segue voce",
  },
  {
    imagem: "public/Assets/img/chibirdart.svg",
    nome: "chibidart",
    razao: "Segue voce",
  },
  {
    imagem: "public/Assets/img/razoesparaacreditar.svg",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram",
  },
  {
    imagem: "public/Assets/img/adorable_animals.svg",
    nome: "adorable_animals",
    razao: "Segue voce",
  },
  {
    imagem: "public/Assets/img/smallcutecats.svg",
    nome: "smallcutecats",
    razao: "Segue voce",
  },
];

export default function SugestoesCorpoSidebar() {
  return (
    <div class="sugestoes">
      <Titulo />
      {sugestoes.map((s) => (
        <Sugestao nome={s.nome} imagem={s.imagem} razao={s.razao} />
      ))}
    </div>
  );
}

function Titulo() {
  return (
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  );
}

function Sugestao(prop) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={prop.imagem} />
        <div class="texto">
          <div class="nome">{prop.nome}</div>
          <div class="razao">{prop.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
