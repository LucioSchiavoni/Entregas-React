import React from 'react'
import CartWidget from './CartWidget'
import './style.css'



export const NavBar = () => {
    return (
        <header className='header'>
            <CartWidget />
            <ul className='list'>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                <input type="text" className='input-nav' placeholder='Buscar productos..' />
            </ul>


        </header>
    )
}


export default NavBar