import React from 'react'
import {useParams} from "react-router-dom"

function Producto(){
    const {id} = useParams()

    return <div >

        <div >
        <p>Producto Nombre: {id}</p>
        </div> 
    </div>
}

export { Producto }