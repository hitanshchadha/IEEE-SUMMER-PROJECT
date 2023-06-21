import React from "react";

function Details(){
    const buttonStyle={
        padding:"5px",
        borderRadius:"10.5px",
        width:"700px"
    }
    return (
        <div className="form">
            <div>
            <button style={buttonStyle}> LOST </button>
            <button style={buttonStyle}> FOUND </button>
        </div>
        
        <input name="title" type="text" placeholder=""  />
        <input name="location" type="text" placeholder=""  />
        <input name ="time" type="text" placeholder=""  />
        <input  name ="contact" type="text" placeholder=""  />
        <input name="description" type="text" placeholder=""  />
        
        </div>
        
    )
}

export default Details;