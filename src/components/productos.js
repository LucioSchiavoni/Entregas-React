import React, { useState } from 'react';
import Item from './Item';
import img1 from '../assets/img/king3.jpeg';
import img2 from '../assets/img/coker.jpeg';
import img3 from '../assets/img/toy.jpeg';
import img4 from '../assets/img/cucheta.jpeg';


const Productos = () => {
    const [productos, setProductos] = useState([
        {

            id: 3,
            name: "Toy",
            precio: 2200,
            medidas: "50x33",
            img: img3

        },
        {
            id: 2,
            name: "Cocker",
            precio: 3000,
            medidas: "61x43",
            img: img2

        },
        {
            id: 1,
            name: "King",
            precio: 3500,
            medidas: "1x0.6",
            img: img1
        },
        {
            id: 3,
            name: "Cuchetas",
            precio: 1000,
            medidas: "50x33",
            img: img4

        },
    ]);
    return (
        <div class="body-container">
            <div className='item-grid'>
                {productos.map((item) => {
                    return (
                        <Item key={item.id} img={item.img} name={item.name} medidas={item.medidas} precio={item.precio} />);
                })};
            </div>
        </div>
    );
};

export default Productos;

