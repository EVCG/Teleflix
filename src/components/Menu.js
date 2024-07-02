import MenuItem from "./MenuItem"

export default function Menu() {

    const menu = [
        { texto: "Home", link: "./home.html", imagem: "https://www.seekpng.com/png/full/375-3752606_homepage-icon-house-logo-png-white.png" },
        { texto: "Favoritos", link: "./favoritos.html", imagem: "https://icon-library.com/images/white-heart-icon-png/white-heart-icon-png-11.jpg" },
        { texto: "Contatos", link: "./contatos.html", imagem: "https://i.im.ge/2022/09/15/1X4f74.envelope.png" }
    ]

    return (
        <ul class="menu">
            {menu.map((m) => <MenuItem texto={m.texto} link={m.link} imagem={m.imagem} />)}
        </ul>
    )
}
