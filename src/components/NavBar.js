import React from 'react';
import Logo from './Logo';
import './style.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <header >
            <div className="logo-item"><Logo /></div>
            <ul className='list'>

                <li className='list-item'>Inicio</li>
                <li className='list-item'>Nosotros</li>
                <li className='list-item'>Contacto</li>
                <input type="text" id='inputId' className='input-nav' placeholder='Buscar productos..' />
                <CartWidget />
            </ul>


        </header>
    );



};



export default NavBar;