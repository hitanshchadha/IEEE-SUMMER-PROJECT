import React from "react";
import "../index.css";

function Card(props){
    const cardStyle={
       border:"2px solid #E8E8E8",
       overflow:"hidden",
       width:"200px",
       boxShadow:"0px 4px 4px 0px #000",
       borderRadius:"15px"
    }
    return <div style={cardStyle} className="card">
        <div className="status1"><h5>{props.status1}</h5></div>
        <div className="status2"><h5>{props.status2}</h5></div>
        <img src={require("../images/Rectangle-4.png")} alt="" />
        <div className="card-text">
        <div  className="card-line">
            <h5>{props.itemName}</h5>
            <h5 style={{fontWeight:"100"}} >{props.time}</h5>
        </div>
        <div className="card-line">
            <h5 style={{fontWeight:"100"}}>{props.location}</h5>
            <h5 style={{fontWeight:"100"}}>{props.date}</h5>
        </div>
        </div>
        
    </div>
}
export default Card;