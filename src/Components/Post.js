import React from "react";
export default function Post(props) {
  const [likeCount, setLikeCount] = React.useState(props.curtidasQuantidade)
  const [isLiked, setIsLiked] = React.useState(false)

  function like() {
    if (isLiked === false) {
      setLikeCount(likeCount + 1);
      setIsLiked(true)
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false)
    }
  }
  return (
    <div class="post">
      <TopoPost userImg={props.userImg} userText={props.userText} />
      <ConteudoPost conteudoImg={props.conteudoImg} handleLike={() => like()} />
      <FundoPost
        curtidasImg={props.curtidasImg}
        curtidasTexto={props.curtidasTexto}
        curtidasQuantidade={likeCount}
        handleLike={() => like()}
        isLiked={isLiked}
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
      <img src={props.conteudoImg} onClick={props.handleLike}/>
    </div>
  );
}

function FundoPost(props) {

  return (
    <div class="fundo">
      <Acoes handleLike={props.handleLike} isLiked={props.isLiked} />
      <Curtidas
        curtidasImg={props.curtidasImg}
        curtidasTexto={props.curtidasTexto}
        curtidasQuantidade={props.curtidasQuantidade}
      />
    </div>
  );
}

function Acoes(props) {
  const [isClicked, setIsClicked] = React.useState(false)
  function handleSave() {
    let newClick = (isClicked ? false : true)
    setIsClicked(newClick)
  }
  return (
    <div class="acoes">
      <div>
        <ion-icon name={props.isLiked ? "heart" : "heart-outline"} class={(props.isLiked) && ('red')} onClick={props.handleLike}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name={isClicked ? "bookmark" : "bookmark-outline"} onClick={handleSave}></ion-icon>
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
        <strong>outras {props.curtidasQuantidade.toLocaleString('de')} pessoas</strong>
      </div>
    </div>
  );
}
