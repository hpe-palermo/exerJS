import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import Descricao from './components/Descricao.jsx'
import Cards from './components/Cards.jsx'
import Contato from './components/Contato.jsx'
import Rodape from './components/Rodape.jsx'
import './App.css'
import './assets/js/home.js'

function App() {
  return (
    <>
        <NavBar></NavBar>
        <Header></Header>
        <Descricao></Descricao>
        <Cards></Cards>
        <Contato></Contato>
        <Rodape></Rodape>
    </>
  )
}

export default App
