import React from 'react';

//crear el contexto
const CarritoContext = React.createContext();
const {Provider,Consumer} = CarritoContext;

const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = React.useState([]);

    const addCarrito = (prod) => {
        setCarrito([...carrito, prod])
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <Provider value = {{carrito,addCarrito,vaciarCarrito}}>
            {children}
        </Provider>
    )
};

export{ CarritoProvider, Consumer as CarritoConsumer, CarritoContext}