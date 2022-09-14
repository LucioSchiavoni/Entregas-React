import React from 'react';
import ItemCount from './ItemCount';

import './style.css';


const Item = ({ info }) => {
    return (

        < div className="item-grid" >
            <img src={info.img} className="item" />
            <hr />
            <h5 className="item-content">{info.name}</h5>
            <p className="item-content">Medidas: {info.medidas}</p>
            <p className="item-content">Precio: {info.precio} $UYU</p>
            <hr />
            <ItemCount stock="5" initial="1" />
        </div>

    );



};


export default Item;