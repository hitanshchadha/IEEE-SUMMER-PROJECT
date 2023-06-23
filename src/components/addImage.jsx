import React from "react";

function AddImage(){
    const imgStyle={
        height:"355px",
        width:"355px",
    }
    return (
        
            <div style={{marginRight:"30px"}} className="addImgDiv">
        <img style={imgStyle} src={require("../images/camera.png")} alt="" />
        <div className="card-text">
        <div  className="card-line">
            <h5 style={{fontSize:"20px"}}>Keys</h5>
            <h5 style={{fontWeight:"100"}} ></h5>
        </div>
        <div className="card-line">
            <h5 style={{fontWeight:"100"}}>Rotunda</h5>
            <h5 style={{fontWeight:"100"}}>10/06/23</h5>
        </div>
        </div>
        <div className="btnDiv">
        <button className="submitBtn" >Submit</button>
        </div>
        
    </div>
       
    )
}
export default AddImage;