import Topo from "./Topo"
import Menu from "./Menu"
import Conteudo from "./Conteudo"

function App() {
    return (
        <div>
            <Topo />

            <div class="row">
                <Menu />
                <Conteudo />
            </div>
        </div>
    )
}

export default App