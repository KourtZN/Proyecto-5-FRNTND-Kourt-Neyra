import './header.css'
import React from 'react'
import { Link } from 'react-router-dom' 

function Header(){
    return <header className="header">
    <div className="logoyname">
    {//<Link to='/'><img src={require(`../../images/logo.png`).default} alt="logo" /></Link>
    }
    <h1 className="titulo">Cartas Espiral</h1>
    </div>
    
    <nav className="navegador">
    <Link to='/'>Inicio</Link>
    <Link to='/productos'>Productos</Link>
    </nav>
  </header>
    
}

export { Header }