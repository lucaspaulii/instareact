export default function Stories() {
  const storiesContent = [
    {img: "./public/Assets/img/meowed.svg", usuario: "meowed"},
    {img: "./public/Assets/img/barked.svg", usuario: "barked"},
    {img: "./public/Assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {img: "./public/Assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {img: "./public/Assets/img/respondeai.svg", usuario: "respondeai"},
    {img: "./public/Assets/img/filomoderna.svg", usuario: "filomoderna"},
    {img: "./public/Assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
  ]
  return (
    <div class="stories">
      {storiesContent.map(s => <Story imagem={s.img} usuario={s.usuario}/>)}
      <Setinha /> {/*FEITO*/}
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


