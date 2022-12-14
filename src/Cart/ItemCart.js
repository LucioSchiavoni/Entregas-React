import React from 'react'
import './itemCart.css'
import { useCartContext } from './CartContext'
const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <img src={product.img1} alt={product.name} />
            <div>
                <p className='item-cart'>Kit: {product.name}</p>
                <p className='item-cart'>Cantidad: {product.quantity}</p>
                <p className='item-cart'>Precio: {product.precio}</p>
                <p className='item-cart'>Subtotal:${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
