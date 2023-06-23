import React from "react";
import Details from "./components/details";
import AddImage from "./components/addImage";
function addItems(){
    const style={
        fontSize:"40px",
        lineHeight:"60.51px",
        fontFamily:"Inter",
        textAlign:"center",
        fontWeight:"600"
    }
    return (
        <div>
            <h1 style={style}>ADD ITEMS</h1>
            <div className="itemAdd">
            <AddImage />
            <Details />
            </div>
            
        </div>
    )
}
export default addItems;