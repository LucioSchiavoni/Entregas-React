import React, { useState, useEffect } from 'react';
import img1 from '../assets/img/king3.jpeg';
import img2 from '../assets/img/coker.jpeg';
import img3 from '../assets/img/toy.jpeg';
import img4 from '../assets/img/cucheta.jpeg';
import './style.css';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList';
import CartWidget from './CartWidget';




const productos = [

    {
        id: 1,
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
        id: 3,
        name: "King",
        precio: 3500,
        medidas: "1x0.6",
        img: img1
    },
    {
        id: 4,
        name: "Cuchetas",
        precio: 1000,
        medidas: "50x33",
        img: img4

    },

];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])





    return (
        <>

            <ItemList data={data} />

        </>
    )
};

