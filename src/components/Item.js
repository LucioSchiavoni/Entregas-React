import React from 'react'
import './style.css'
import productos from './productos'

const Item = () => {
    return (


        <div className="body-container">
            <ul className='item-grid'>   <li  ><img src={productos[0]} className='item' alt="" /></li>
                <li  ><img src={productos[3]} className='item' alt="" /></li>
                <li ><img src={productos[1]} className='item' alt="" /></li>
                <li ><img src={productos[2]} className='item' alt="" /></li>
            </ul>
        </div>




    )
}


export default Item;