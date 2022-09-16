import Post from "./Post";
export default function Posts() {
  const postContent = [
    {userImg: "public/Assets/img/meowed.svg", userText: "meowed", conteudoImg: "public/Assets/img/gato-telefone.svg", curtidasImg: "public/Assets/img/respondeai.svg", curtidasTexto: "respondeai", curtidasQuantidade: 101523},
    {userImg: "public/Assets/img/barked.svg", userText: "barked", conteudoImg: "public/Assets/img/dog.svg", curtidasImg: "public/Assets/img/adorable_animals.svg", curtidasTexto: "adorable_animals", curtidasQuantidade: 99159},
  ]

  return (
    <div class="posts">
      {postContent.map(a => <Post userImg={a.userImg} userText={a.userText} conteudoImg={a.conteudoImg} curtidasImg={a.curtidasImg} curtidasTexto={a.curtidasTexto} curtidasQuantidade={a.curtidasQuantidade}/>)}
    </div>
  );
}
