import React, { useState } from 'react';
import ItemCard from "./ItemCard.jsx"
import '../../style.css'
import items from '../../dataX.js';

const ItemTable = () => {

    return (
        <>
            <section>
                
                {items.map((item) => (
                    <ItemCard key={item.id} index={item.id} item={item}/>
                ))}

            </section>
        </>
    )
}

export default ItemTable

