import '../stylo_css/stylo.css'
//import Pai from '../componentes/Pai';
//import Flex from '../componentes/Flex';
import Cadastro from '../pagina/cadastro';
import Filtros from '../pagina/filtros';

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