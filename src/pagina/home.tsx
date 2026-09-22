import '../stylo_css/stylo.css'
//import Pai from '../componentes/Pai';
//import Flex from '../componentes/Flex';
import Cadastro from '../pagina/Cadastro';
import Filtros from '../pagina/Filtros';
import Login from '../pagina/Login'
import Parceiros from '../pagina/Parceiros'

function Home() {
    return(
        <div>
            <h1>Bem vindo a Home!</h1>
            <Filtros />
            <Cadastro />
        </div>
    )
}
export default Home;
