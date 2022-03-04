import './header.css'
import React from 'react'
import { Link } from 'react-router-dom' 
import {CarritoContext} from '../../context/CarritoContext'

function Header(){
  const {carrito} = React.useContext(CarritoContext);

    return <header className="header">
    <div className="logoyname">

    <Link to='/'><h1 className="titulo">Cartas Espiral</h1></Link>
    </div>
    
    <nav className="navegador">
    <Link to='/'>Inicio</Link>
    <Link to='/productos'>Productos</Link>
    <Link to='/carrito'>Carrito ( {carrito.length} )</Link>
    </nav>
  </header>
    
}

export { Header }