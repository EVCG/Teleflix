import Topo from "./Topo"
import Conteudo from "./Conteudo"
import Menu from "./Menu"

export default function App(){
    return(
      <div>
        <Topo/>
        
        <div class="row">
              <Menu/>
              <Conteudo/>
          </div>
        </div>
      
    )
  }