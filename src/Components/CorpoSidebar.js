import SugestoesCorpoSidebar from "./SugestoesCorpoSidebar";

export default function CorpoSidebar() {
  const usuarioData = {
    nome: "Catana",
    img: "./Assets/img/catanacomics.svg",
    user: "catanacomics",
  };
  return (
    <div class="sidebar">
      <Usuario
        nome={usuarioData.nome}
        img={usuarioData.img}
        user={usuarioData.user}
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
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
