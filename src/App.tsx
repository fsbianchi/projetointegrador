//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import NotFound from './pagina/notfound';
import Home from './pagina/home';
import Login from './pagina/login';
import Cadastro from './pagina/cadastro';

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default App;
