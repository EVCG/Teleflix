export default function Topo(){
  let nomeDoUsuario = prompt("Qual o seu nome?")

  let frase 

  if (nomeDoUsuario === "" || nomeDoUsuario === undefined || nomeDoUsuario === null) {
    frase = "Úsuario não cadastrado :("
  }else{
    frase = `Seja bem vindo(a), ${nomeDoUsuario}`
  }

  let fotoDePerfil = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU"
  let novaFoto = prompt("Insira o link da sua nova foto")

  fotoDePerfil = !novaFoto ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU" : novaFoto 
    return(
      
      <div class="topo">
          <h1>DrivenFlix</h1>
          <div>
            <button>Inserir nome</button>
            <p>{frase}</p>
            <img src= {fotoDePerfil}  alt=''/>
          </div>
      </div>
    )
  }
