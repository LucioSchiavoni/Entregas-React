import React from 'react';
import ItemCount from './ItemCount';

import './style.css';


const Item = (props) => {
    return (



        < div className="card-item" >
            <img src={props.img} className="item" />
            <hr />
            <h5 className="item-content">{props.name}</h5>
            <p className="item-content">Medidas: {props.medidas}</p>
            <p className="item-content">Precio: {props.precio} $UYU</p>
            <hr />
            <ItemCount stock="5" initial="1" />
        </div>

    );



};


export default Item;