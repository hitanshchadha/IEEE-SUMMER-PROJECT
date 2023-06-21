import React from "react"

function footer(){
    const styling={
        textAlign:"center",
        fontSize:"16px",
        marginTop:"400px",
        width:"100%"
    }
    return <div style={{backgroundColor:"#E6E6E6"}}>
        <h2 style={styling}>Made with <img src={require("../images/heartEmoticon.png")} alt="" /> By IEEE</h2>
    </div>
}
export default footer;