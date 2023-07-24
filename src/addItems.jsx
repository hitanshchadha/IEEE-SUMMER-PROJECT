import React from "react";
import {useState} from "react"
import Item from "./index.js"



function AddItems(){
    const [dataArr,setDataArr]=useState([""]);
    const [imgSource,setImgSource]=useState(require("./images/camera.png"));
    const [isactive1,setisActive1]=useState(false);
    const [isactive2,setisActive2]=useState(false);
    const [Title,setTitle]=useState("");
    const [Location,setLocation]=useState("");
    const [Date,setDate]=useState("");
    const [Contact,setContact]=useState("");


   function handleClick(){
  var newItem= new Item(Title,Location,Date,Contact);
     setDataArr(prevValue => [newItem,...prevValue]);
     console.log(dataArr)
   }



    function handleClick1(event){
        setisActive1(!isactive1)
        setisActive2(false)
        console.log(isactive1)
    }
    function handleClick2(event){
        setisActive2(!isactive2)
        setisActive1(false)
    }
   
    
function handleChange(event){
      switch (event.target.name) {
        case "title":
            setTitle(event.target.value)
            break;
        case 'location':
            setLocation(event.target.value)
            break;
        case "date":
            setDate(event.target.value)
            break;
        case "contact":
            setContact(event.target.value)
            break;
        default:
            return 0
      }
}



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
            <div style={{marginRight:"30px"}} className="addImgDiv">
        <input  type="file" accept="image/*" name="image" id="file" onChange={handleUpload}/>
        <label htmlFor="file"> <img style={imgStyle} src={imgSource} alt="" id="uploadImage"/></label>
        <div className="card-text">
        <div  className="card-line">
            <h5 style={{fontSize:"20px"}}>Keys</h5>
            <h5 style={{fontWeight:"100"}} >Phone</h5>
        </div>
        <div className="card-line">
            <h5 style={{fontWeight:"100"}}>Rotunda</h5>
            <h5 style={{fontWeight:"100"}}>10/06/23</h5>
        </div>
        </div>
        <div className="btnDiv">
        <button className="submitBtn" onClick={handleClick}>Submit</button>
        </div>
        
    </div>
       
            <div className="form">
            <div>
            <button className={isactive1 ? "btn1-active" : "btn" } onClick={handleClick1}> LOST </button>
            <button   name="found" className={isactive2 ? "btn2-active" : "btn"} onClick={handleClick2} > FOUND </button>
        </div>
        
        <input  className="textbox" name="title" type="text" placeholder="Enter Title" value={Title} onChange={handleChange}/>
        <input className="textbox" name="location" type="text" placeholder="Enter Location" value={Location} onChange={handleChange} />
        <input className="textbox" name ="date" type="date" placeholder="Enter Date "  value={Date} onChange={handleChange}/>
        <input  className="textbox" name ="contact" type="tel" placeholder="Enter Phone Number" value={Contact} onChange={handleChange}/>
        <input style={{height:"105px"}} className="textbox" name="description" type="text" placeholder="Description"  />
        
        </div>
            </div>
            
        </div>
    )
}
export default AddItems;