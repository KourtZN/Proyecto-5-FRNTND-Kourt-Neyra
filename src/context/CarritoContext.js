import React from 'react';

//crear el contexto
const CarritoContext = React.createContext();
const {Provider,Consumer} = CarritoContext;

const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    const addCarrito = (prod) => {
        let prod2 = JSON.parse(JSON.stringify(prod));
        prod2.idcarrito = prod2._id + Date.now()
        setCarrito([...carrito, prod2])
        setTotal(total + parseFloat(prod2.price))
    }

    const quitardeCarrito = (prod) => {
        const prodidc = prod.idcarrito
        setCarrito(carrito.filter(item => item.idcarrito !== prodidc));
        setTotal(total - parseFloat(prod.price))
    }


    
    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    return (
        <Provider value = {{carrito,addCarrito,vaciarCarrito,quitardeCarrito,total}}>
            {children}
        </Provider>
    )
};

export{ CarritoProvider, Consumer as CarritoConsumer, CarritoContext}