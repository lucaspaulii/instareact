export default function Stories() {
  return (
    <div>
      <Story /> {/*FEITO MAS FALTAM PROPS*/}
      <Setinha /> {/*FEITO*/}
    </div>
  );
}

function Story(prop) {
  return (
    <div>
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
