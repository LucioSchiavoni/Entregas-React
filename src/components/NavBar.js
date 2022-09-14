import React from 'react';
import Logo from './Logo';
import './style.css';



export const NavBar = () => {
    return (
        <header >
            <div class="logo-item"><Logo /></div>
            <ul className='list'>

                <li className='list-item'>Inicio</li>
                <li className='list-item'>Nosotros</li>
                <li className='list-item'>Contacto</li>
                <input type="text" id='inputId' className='input-nav' placeholder='Buscar productos..' />

            </ul>


        </header>
    );


};



export default NavBar;