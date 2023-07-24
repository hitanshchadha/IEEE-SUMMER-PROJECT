import React, { useState } from "react";

function Details(){
    const [isactive1,setisActive1]=useState(false);
    const [isactive2,setisActive2]=useState(false);
    const [Title,setTitle]=useState("Keys");
    function handleClick1(event){
        setisActive1(!isactive1)
        setisActive2(false)
        console.log(isactive1)
    }
    function handleClick2(event){
        setisActive2(!isactive2)
        setisActive1(false)
    }
    

    return (
        <div className="form">
            <div>
            <button className={isactive1 ? "btn1-active" : "btn" } onClick={handleClick1}> LOST </button>
            <button   name="found" className={isactive2 ? "btn2-active" : "btn"} onClick={handleClick2} > FOUND </button>
        </div>
        
        <input  className="textbox" name="title" type="text" placeholder="Enter Title" />
        <input className="textbox" name="location" type="text" placeholder="Enter Location"  />
        <input className="textbox" name ="time" type="text" placeholder="Enter Date and Time"  />
        <input  className="textbox" name ="contact" type="text" placeholder="Enter Phone Number"  />
        <input style={{height:"105px"}} className="textbox" name="description" type="text" placeholder="Description"  />
        
        </div>
        
    )
}

export default Details;