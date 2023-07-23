import React,{ useState} from "react";

function AddImage(){
    const [imgSource,setImgSource]=useState(require("../images/camera.png"))
    function handleUpload(event){
        const file=event.target.files[0];
        const reader=new FileReader();

      reader.onload= ()=>{
        setImgSource(reader.result);
      };

      if(file){
        reader.readAsDataURL(file);
      }
}
    
    const imgStyle={
        height:"355px",
        width:"355px",
    }
    return (
        
        <div style={{marginRight:"30px"}} className="addImgDiv">
        <input  type="file" accept="image/*" name="image" id="file" onChange={handleUpload}/>
        <label htmlFor="file"> <img style={imgStyle} src={imgSource} alt="" id="uploadImage"/></label>
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
        <button className="submitBtn">Submit</button>
        </div>
        
    </div>
       
    )
}
export default AddImage;