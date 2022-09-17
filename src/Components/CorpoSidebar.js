import SugestoesCorpoSidebar from "./SugestoesCorpoSidebar";
import React from "react";

export default function CorpoSidebar() {
  const [nome, setNome] = React.useState('Catana') 
  const usuarioData = {
    img: "./Assets/img/catanacomics.svg",
    user: "catanacomics",
  };
  function changeName() {
    const newName = prompt('Insira seu novo nome!')
    setNome(newName)
  }
  return (
    <div class="sidebar">
      <Usuario
        nome={nome}
        img={usuarioData.img}
        user={usuarioData.user}
        handleClick={() => changeName()}
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
      <img src={props.img} />
      <div class="texto">
        <strong>{props.user}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil" onClick={props.handleClick}></ion-icon>
        </span>
      </div>
    </div>
  );
}
