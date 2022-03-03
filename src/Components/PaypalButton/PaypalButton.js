import React from 'react'
import { useEffect } from "react";
import {CarritoContext} from '../../context/CarritoContext'

import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const PayPalButton = ({currency, amount, style={"layout":"horizontal"} }) => {
    const [{ options }, dispatch] = usePayPalScriptReducer(); // [{options}, funcion]
    const {vaciarCarrito} = React.useContext(CarritoContext);


    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

    return(
        <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: currency,
                                value: amount,
                            },
                        },
                    ],
                })
                .then((orderId) => {
                    console.log(orderId)
                    return orderId;
                });
        }}
        onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
                
                // Your code here after capture the order
                console.log(data)
                vaciarCarrito()
                alert('Compra exitosa')

            });
        }}
    />

    )
}

export {PayPalButton}

