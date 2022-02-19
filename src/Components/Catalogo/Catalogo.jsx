import React from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'


function Catalogo(){
    let [prods, setProds] = React.useState([])

    const getProducts = async () => {
        const resp = await axios.get(process.env.REACT_APP_API)
        console.log('respuesta ', resp.data.detail)

        if(resp.data.detail){
            setProds(resp.data.detail)
        }
        else return null
    }

    React.useEffect(() => {
        getProducts()
    },[])
    
    console.log('este es el state',prods)



    return <div >

        <div >
            {prods.map( (produc) => {
                return <div key={produc.name}>
                    <Link to={`/productdetail/${produc.name}`}>{produc.name}</Link>
                    <p>Nombre: {produc.name}</p>
                    <p>Descripcion: {produc.desc}</p>
                    </div>

            })}
    {/*<Link to="/productdetail/carta">carta</Link>
    <Link to="/productdetail/baston">baston</Link>
        <Link to="/productdetail/sombrero">sombrero</Link>*/}
        </div> 
    </div>
}

export { Catalogo }