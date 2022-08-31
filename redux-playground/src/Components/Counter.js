import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
    const [cartData, setCartData] = useState(0);
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const decrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }

    return (
        <div>
            <h1>Votre panier : {cart}</h1>
           {/*  <button onClick={incrFunc}>-1</button>
                <button onClick={decrFunc}>+1</button> */}

            <input 
            value={cartData}
            onInput={e=> setCartData(e.target.value)}
            type="number"/>

            <br />

            <button onClick={addToCartFunc}>Ajouter au panier</button>
            </div>
    )
}
