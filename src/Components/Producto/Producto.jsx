import './producto.css'
import React from 'react'
import {useParams, useNavigate } from "react-router-dom"
import {listaProductos} from '../Catalogo/Catalogo'
import {CarritoContext} from '../../context/CarritoContext'



function Producto(){
  const {id} = useParams()
  const esteProducto = listaProductos.find(prod => prod._id === id)
  let navigate = useNavigate();
  const {carrito, addCarrito, vaciarCarrito} = React.useContext(CarritoContext);
    


    function addCart(e) {
      e.preventDefault();
      addCarrito(esteProducto)
      console.log('agregaste al carrito a ', esteProducto);
      
      
    }
    
    function addCartCheck(e) {
      e.preventDefault();
      addCarrito(esteProducto)
      console.log('agregaste al carrito checkout a ', esteProducto);
      navigate('/');

    }    
    function vaccarr(e) {
      e.preventDefault();
      vaciarCarrito()
      console.log('vaciaste carrito');
 
    } 
    
    React.useEffect(() => {
      console.log('carrito actual ', carrito)
  },[carrito])

    return <div className = "productContainer">

        <div className ="productCard">
        <p>Nombre: {esteProducto.name}</p>
        <p>Precio: {esteProducto.price}</p>
        <p>Descripción: {esteProducto.desc}</p>
        </div> 
        <div className="buttons">
        <button className="addtocart" onClick={addCart}>Añadir al Carrito</button>
        <button className="viewcart" onClick={addCartCheck}>Añadir y ver carrito</button>
        <button className="viewcart" onClick={vaccarr}>Vaciar carrito</button>
        </div>
    </div>
}

export { Producto }