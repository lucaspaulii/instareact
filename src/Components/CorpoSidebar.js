import SugestoesCorpoSidebar from "./SugestoesCorpoSidebar";
import React from "react";

export default function CorpoSidebar() {
  const [nome, setNome] = React.useState('Catana') 
  const [imagem, setImagem] = React.useState('./Assets/img/catanacomics.svg') 
  const usuarioData = {
    user: "catanacomics",
  };
  function isValidUrl(urlInput) {
    try {
      return Boolean(new URL(urlInput));
    } catch (e) {
      return false;
    }
  };
  function changeName() {
    let newName = prompt('Insira seu novo nome!');
    while(!newName) {
      alert('Voce nao inseriu corretamente!');
      newName = prompt('Insira seu novo nome!');
    }
    setNome(newName)
  }
  function changeImg() {
    let newImg = prompt('Insira o link de sua nova foto de perfil!')
    while(!isValidUrl(newImg)) {
      alert('Sua imagem precisa ser uma URL valida!');
      newImg = prompt('Insira o link de sua nova foto de perfil!');
    }
    setImagem(newImg)
  }
  return (
    <div class="sidebar">
      <Usuario
        nome={nome}
        img={imagem}
        user={usuarioData.user}
        handleClickName={() => changeName()}
        handleClickImg = {() => changeImg()}
      />
      <SugestoesCorpoSidebar />
      <Links />
      <Copyright />
    </div>
  );
}

function Copyright() {
  return <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
}

function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} onClick={props.handleClickImg}/>
      <div class="texto">
        <strong>{props.user}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil" onClick={props.handleClickName}></ion-icon>
        </span>
      </div>
    </div>
  );
}
