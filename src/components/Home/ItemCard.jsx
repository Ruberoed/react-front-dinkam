import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import items from "../../dataX";

const ItemCard = ({ item, handleClick }) => {
    const { name, color, img, price } = item
    const [index, setIndex] = useState(0)
    const itemid = item.id

    function setItem(itemid){
        setIndex(itemid)
    }

    function renderItem(){
        switch(itemid) {
             case "1": 
             return "1"
             case "2": 
             return "2"
             default:
             return itemid
        }
    }

    return (
        <>
            <Link to='/item' onClick={() => {
                setIndex(item.id)
                console.log(item.id)
                console.log(index)
            }}
            >
                <div className="cartBox">
                    <img src={img} width={200} alt="" />
                    <p>{name}</p>
                    <p>{color}</p>
                    <p>{price} $</p>
                </div>
            </Link>
        </>
    )
}


export default ItemCard