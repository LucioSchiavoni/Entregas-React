import React from 'react'
import './itemCart.css'
import { useCartContext } from './CartContext'
const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <img src={product.img1} alt={product.name} />
            <div>
                <p>Kit: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.precio}</p>
                <p>Subtotal:${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
