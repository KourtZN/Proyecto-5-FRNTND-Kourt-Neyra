import './carritocomponent.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import {CarritoContext} from '../../context/CarritoContext'

function CarritoComponent(){
    const {carrito, vaciarCarrito, quitardeCarrito, total} = React.useContext(CarritoContext);
    let navigate = useNavigate();


    function eliminardelCart(e) {
        e.preventDefault();
        const name = e.target.getAttribute("name")
        const esteProducto = carrito.find(prod => prod.idcarrito === name)
        quitardeCarrito(esteProducto)
        console.log('agregaste al carrito a ', esteProducto);         
      }

      function vaccarr(e) {
        e.preventDefault();
        vaciarCarrito()
        console.log('vaciaste carrito');  
      } 
      function iraCheckout(e) {
        e.preventDefault();
        navigate('/checkout');
        console.log('vas acheckout');
      } 
React.useEffect(() => {
    console.log('carrito actual ', carrito)
},[carrito])
    

    return <div >

        <div >
            {carrito.map( (produc) => {
                return <div className="productsCard" key={produc.idcarrito}>
                    
                    <p>Nombre: {produc.name}</p>
                    <p>Desc: {produc.desc}</p>
                    <button onClick={eliminardelCart} name={produc.idcarrito}> Eliminar del carrito </button>
                    </div>
                

            })}

        </div> 
        <div>
            <p>Total : {total}</p>
            <button onClick={vaccarr}>Vaciar carrito</button>
            <button onClick={iraCheckout}>Pagar $ {total}</button>
            

        </div>
    </div>
}

export { CarritoComponent}