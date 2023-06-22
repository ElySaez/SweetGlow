import React from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import TituloPrincipal from './components/TituloPrincipal/TextoPrincipal';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <div>
      <NavBar />      
      <TituloPrincipal titulo={"Sweet Glow"} subtitulo = {"Cosmetic and skincare"} />
      <ItemListContainer greeting={"Este sitio aún está en construcción, para mayor información puedes contactarnos a contacto@sweetglow.cl"}/>
    </div >
      
  )
}

export default App