
export default function Post(props) {
  return (
    <div class="post">
      <TopoPost userImg={props.userImg} userText={props.userText} />
      <ConteudoPost conteudoImg={props.conteudoImg} />
      <FundoPost
        curtidasImg={props.curtidasImg}
        curtidasTexto={props.curtidasTexto}
        curtidasQuantidade={props.curtidasQuantidade}
      />
    </div>
  );
}

function TopoPost(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.userImg} />
        {props.userText}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function ConteudoPost(props) {
  return (
    <div class="conteudo">
      <img src={props.conteudoImg} />
    </div>
  );
}

function FundoPost(props) {
  return (
    <div class="fundo">
      <Acoes />
      <Curtidas
        curtidasImg={props.curtidasImg}
        curtidasTexto={props.curtidasTexto}
        curtidasQuantidade={props.curtidasQuantidade}
      />
    </div>
  );
}

function Acoes() {
  return (
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}

function Curtidas(props) {
  return (
    <div class="curtidas">
      <img src={props.curtidasImg} />
      <div class="texto">
        Curtido por <strong>{props.curtidasTexto}</strong> e{" "}
        <strong>outras {props.curtidasQuantidade} pessoas</strong>
      </div>
    </div>
  );
}
