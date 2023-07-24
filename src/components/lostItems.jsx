import React from "react";
import CardsRow from "./CardsRow.jsx";
function LostItems(){
    const style={
        fontSize:"40px",
        lineHeight:"60.51px",
        fontFamily:"Inter",
        textAlign:"center",
        fontWeight:"600"
    }
    return (
        <div>
            <h1 style={style}>LOST ITEMS</h1>
            <CardsRow />
            <CardsRow />
            <CardsRow />
            <CardsRow /> 
            </div>
    )
}
export default LostItems;