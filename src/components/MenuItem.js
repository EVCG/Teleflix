export default function MenuItem(props){ 
    console.log(props) 
    return(
      <li>
          <img src={props.imagem} />
          <a href={props.link}>{props.texto}</a>
      </li>
    )
  }

  