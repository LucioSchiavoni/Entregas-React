import * as React from 'react';

import { useState } from 'react';



const ItemCount = ({ stock, cuentaInicial = 1, onAdd }) => {
    const [contador, setContador] = useState(cuentaInicial);
    return (
        <div>
            <p>Cantidad</p>
            <button onClick={() => { contador > cuentaInicial ? setContador(contador - 1) : setContador(cuentaInicial) }}>-</button>

            {contador}
            <button onClick={() => { contador < stock ? setContador(contador + 1) : setContador(stock) }}>+</button>

            <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;