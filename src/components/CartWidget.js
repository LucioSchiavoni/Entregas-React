import React from 'react';

import Carrito from '../assets/img/carrito.png'


export const CartWidget = () => {

    return (
        <div className='carro-container'>
            <img className='carro' src={Carrito} />

            <div className='carro-count'><p className='number-count'>0</p></div>

        </div >
    );
};

export default CartWidget;