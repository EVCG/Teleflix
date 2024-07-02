import { useState } from "react"

export default function Topo() {
    const fotoInicial = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU"
    const [nomeDoUsuario, setNomeDoUsuario] = useState("")
    const [foto, setFoto] = useState(fotoInicial)
    const [cor, setCor] = useState("#FFFFFF")    

    let frase = !nomeDoUsuario ? "Olá! Não sabemos o seu nome :(" : `Seja bem vindo(a), ${nomeDoUsuario}`

    function apertarBotao() {
        const novoNome = prompt("Qual é o seu nome?")
        setNomeDoUsuario(novoNome)
    }

    function trocarFoto() {
        const novaFoto = prompt("Insira o link da sua nova foto")
        setFoto(novaFoto)
    }

    function trocarCor() {
        if (cor === "verde") {
            setCor("vermelho")
        } else {
            setCor("verde")
        }
    }

    // Se a função não tiver parâmetro => é só colocar o nome dela
    // Se a função tiver parâmetro => colocar arrow function antes
    // EX: () => somar(6, 4) 

    return (
        <div class="topo">
            <h1>TeleFlix</h1>
            <div>
                <button onClick={apertarBotao}>Inserir Nome</button>
                <p>{frase}</p>
                <img onClick={trocarFoto} src={foto} />
            </div>
        </div>
    )
}

