import React from "react";

function midSection(){
    return <div className="middle-sec">
         <div className="">
            <h1>Lost & Found</h1>
            <h1>Portal for</h1>
            <h1 style={{color:"#4300FF"}}>BITS Pilani</h1>
            <input type="text" placeholder="Seacrh for items.."/>
         </div>
         <img src={require("./pngwing 1.png")} alt="" />
    </div>
}

export default midSection;