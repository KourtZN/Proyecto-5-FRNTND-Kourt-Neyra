import React from 'react'
import App from '../App/App'
//Routes
import { Routes , Route} from 'react-router-dom'
//sections
import {Producto} from '../Components/Producto/Producto'
import {Catalogo} from '../Components/Catalogo/Catalogo'



function Navigation() {

    return (
    <App>
        <Routes>
        <Route path="/productdetail/:id" element={<Producto/>} exact/>
        <Route path="/productos" element={<Catalogo/>} exact/>

        </Routes>

    </App>
    );

}

export {Navigation}
