import React from 'react'
import Detail from './Detail'

export const ItemDetail = ({ data = [] }) => {
    return (

        data.map(productos => <Detail key={productos.id} info={productos} />)
    )
}

export default ItemDetail;