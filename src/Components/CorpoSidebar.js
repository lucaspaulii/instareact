export default function CorpoSidebar() {
  return (
    <div>
      <Usuario /> {/* Falta fazer */}
      <SugestoesCorpoSidebar /> {/* Falta fazer */}
      <Links /> {/* FEITO*/}
      <Copyright /> {/* FEITO */}
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

function Usuario() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          Catana
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}


