import './checkout.css'
import {PayPalButton} from '../PaypalButton/PaypalButton'
import React from 'react'
import {CarritoContext} from '../../context/CarritoContext'

const Checkout = () => {
    const {carrito, vaciarCarrito, quitardeCarrito, total} = React.useContext(CarritoContext);


    return(
        <div className="checkout">
            <h1>Tu pago será de: $ {total}</h1>

            <PayPalButton currency="MXN" amount={total} />


        </div>
    )
}

export { Checkout}