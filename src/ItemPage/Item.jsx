import React, {useState} from "react"
import bZip from '../images/bzip.png'
import ImgSlider from "./Slider"
import list from "../data"

const ItemMarkup = ({ handleClick, item }) => {

    return (
        <>
            <div className="backgroundItem">
                <div className="itemContent">
                    <span className="LeftTexture">
                        <img className="fullImage" src={list.zipBlack.img} alt="" />
                        <ImgSlider />
                    </span>
                    <span className="RightTexture">
                        <h1 style={{ fontSize: 23, fontWeight: 300, }}>{list.zipBlack.name}</h1>
                        <p style={{ marginTop: 15, fontSize: 16 }}>{list.zipBlack.price}</p>
                        <select
                            name=""
                            id=""
                            className="SelectSize" >
                            <option value="M">M</option>
                        </select><br />
                        <button
                            // onClick={handleClick(item)}
                            style={{
                                appearance: 'none',
                                fontSize: 20,
                                marginTop: 25,
                                width: 220,
                                height: 40,
                                border: 3,
                                backgroundColor: '#a1cefd',
                                borderRadius: 16
                            }} className="AddToCart">
                            Add To cart
                        </button>
                        <p style={{ marginTop: 25, fontSize: 13 }} >Made in Ukraine</p>
                        <p style={{ marginTop: 15, fontSize: 12 }}>Unisex</p>
                        <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.5, }}>This {list.zipBlack.name} in black <br />
                            Made from 100% cotton with fleece <br />
                            and knitten lining inside
                        </p>
                    </span>
                </div>
            </div>

        </>
    )
}

export default ItemMarkup