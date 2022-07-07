import React, { useState } from "react"
import "./UseItems.css"

const UseItems = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (stock > count) { setCount(count + 1) }
    }

    const restar = () => {
        if (count < 1) { setCount(count - 1) }
    }

    const agregarCantidad = () => {
        onAdd(count)
    }

    return (
            <div className="divButton">
                <button className="buttonRestaSuma" onClick={restar}> - </button>
                <span>{count}</span>
                <button className="buttonRestaSuma" onClick={sumar}> + </button>
                <button onClick={agregarCantidad}>Agregar al carrito</button>
            </div>
    )
}

export default UseItems