import {PayPalButton} from '../PaypalButton/PaypalButton'
import React from 'react'
import {CarritoContext} from '../../context/CarritoContext'

const Checkout = () => {
    const {carrito, vaciarCarrito, quitardeCarrito, total} = React.useContext(CarritoContext);


    return(
        <div>
            {total}

            <PayPalButton currency="MXN" amount={total} />


        </div>
    )
}

export { Checkout}