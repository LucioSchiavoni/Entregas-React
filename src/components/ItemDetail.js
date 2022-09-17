import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


export const ItemDetail = ({ data }) => {

    const [carrito, setCarrito] = useState(false)
    const onAdd = (quantity) => {
        setCarrito(true);
    }


    return (
        <div className='card-item'>
            <img src={data.img} className="item" alt="Imagen kit" />
            <h5 className="item-content">{data.name}</h5>
            <p className="item-content">marca: {data.marca}</p>
            <p className="item-content"> precio: {data.precio}</p>
            <button className='btn btn-light btn-detalles' >Comprar</button>
            {
                carrito ? <Link to='/CartContext'>Carrito</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
        </div>

    )
}

export default ItemDetail;
