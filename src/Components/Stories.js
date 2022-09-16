export default function Stories() {
  const storiesContent = [
    { img: "./Assets/img/meowed.svg", usuario: "meowed" },
    { img: "./Assets/img/barked.svg", usuario: "barked" },
    {
      img: "./Assets/img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { img: "./Assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "./Assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "./Assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "./Assets/img/memeriagourmet.svg", usuario: "memeriagourmet" },
    { img: "./Assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "./Assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "./Assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "./Assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
  ];
  return (
    <div class="stories">
      {storiesContent.map((s) => (
        <Story imagem={s.img} usuario={s.usuario} />
      ))}
      <Setinha />
    </div>
  );
}

function Story(prop) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={prop.imagem} />
      </div>

      <div class="usuario">{prop.usuario}</div>
    </div>
  );
}

function Setinha() {
  return (
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}
