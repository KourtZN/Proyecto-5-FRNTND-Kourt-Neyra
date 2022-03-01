import './producto.css'
import React from 'react'
import {useParams} from "react-router-dom"
import {listaProductos} from '../Catalogo/Catalogo'



function Producto(){

    function addCart(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
      function addCartCheck(e) {
        e.preventDefault();
        console.log('You clicked submit checkout.');
      }

    console.log('listaProductos es ',listaProductos)
    const {id} = useParams()
    const esteProducto = listaProductos.find(prod => prod._id === id)
    console.log(esteProducto)

    return <div className = "productContainer">

        <div className ="productCard">
        <p>Nombre: {esteProducto.name}</p>
        <p>Precio: {esteProducto.price}</p>
        <p>Descripción: {esteProducto.desc}</p>
        </div> 
        <div className="buttons">
        <button className="addtocart" onClick={addCart}>Añadir al Carrito</button>
        <button className="viewcart" onClick={addCartCheck}>Añadir y ver carrito</button>
        </div>
    </div>
}

export { Producto }