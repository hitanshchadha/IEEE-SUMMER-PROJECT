import React from "react";

function Details(){
  
    return (
        <div className="form">
            <div>
            <button className="btn" > LOST </button>
            <button className="btn" > FOUND </button>
        </div>
        
        <input  className="textbox" name="title" type="text" placeholder="Enter Title"  />
        <input className="textbox" name="location" type="text" placeholder="Enter Location"  />
        <input className="textbox" name ="time" type="text" placeholder="Enter Date and Time"  />
        <input  className="textbox" name ="contact" type="text" placeholder="Enter Phone Number"  />
        <input style={{height:"105px"}} className="textbox" name="description" type="text" placeholder="Description"  />
        
        </div>
        
    )
}

export default Details;