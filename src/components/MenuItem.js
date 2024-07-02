export default function MenuItem(props) {
    return (
        <li data-test="item">
            <img src={props.imagem} />
            <a href={props.link}>{props.texto}</a>
        </li>
    )
}