export default function Stories() {
    return (
        <div>
            <Story /> {/*Falta fazer*/}
            <Setinha /> {/*Falta fazer*/}
        </div>
    )
}

function Story(prop) {
    return (
        <div>
           <div class="imagem">
            <img src={prop.imagem} />
           </div> 

           <div class="usuario">
           </div>
        </div>
    )
}