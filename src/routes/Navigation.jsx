import React from 'react'
import App from '../App/App'
//Routes
import { Routes , Route} from 'react-router-dom'
//sections
import {Producto} from '../Components/Producto/Producto'
import {Catalogo} from '../Components/Catalogo/Catalogo'
import {CarritoComponent} from '../Components/CarritoComponent/CarritoComponent'
import {Checkout} from '../Components/Checkout/Checkout'



function Navigation() {

    return (
    <App>
        <Routes>
        <Route path="/productdetail/:id" element={<Producto/>} exact/>
        <Route path="/productos" element={<Catalogo/>} exact/>
        <Route path="/carrito" element={<CarritoComponent/>} exact/>
        <Route path="/checkout" element={<Checkout/>} exact/>

        </Routes>

    </App>
    );

}

export {Navigation}
