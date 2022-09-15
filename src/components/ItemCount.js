import * as React from 'react';
import './style.css';
import { useState } from 'react';



const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(1);
    return (
        <div className='box-count'>

            <button className='btn btn-light' disabled={count >= stock} onClick={() => {
                setCount(count + 1);
            }}>+</button>
            <div className='number-box'>{count}</div>
            <button className='btn btn-light' disabled={count <= 1} onClick={() => {
                setCount(count - 1);
            }}>-</button><br /><br />
            <button className='btn btn-light'>Añadir al carrito</button>
        </div>
    );

};




export default ItemCount;