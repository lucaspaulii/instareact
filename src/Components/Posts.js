import Post from "./Post";
export default function Posts() {
  const postContent = [
    {userImg: "./Assets/img/meowed.svg", userText: "meowed", conteudoImg: "./Assets/img/gato-telefone.svg", curtidasImg: "./Assets/img/respondeai.svg", curtidasTexto: "respondeai", curtidasQuantidade: 101523},
    {userImg: "./Assets/img/barked.svg", userText: "barked", conteudoImg: "./Assets/img/dog.svg", curtidasImg: "./Assets/img/adorable_animals.svg", curtidasTexto: "adorable_animals", curtidasQuantidade: 99159},
  ]

  return (
    <div class="posts">
      {postContent.map(a => <Post userImg={a.userImg} userText={a.userText} conteudoImg={a.conteudoImg} curtidasImg={a.curtidasImg} curtidasTexto={a.curtidasTexto} curtidasQuantidade={a.curtidasQuantidade}/>)}
    </div>
  );
}
