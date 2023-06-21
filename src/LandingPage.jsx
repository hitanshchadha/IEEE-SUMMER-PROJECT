import React from "react";
import CardsRow from "./components/CardsRow.jsx";
import MidSection from "./components/midSection.jsx";



function landingPage(){
  return (
    <div>
       <img className="lens" src={require("./images/image-259.png")} alt="" />
    <MidSection />
  <h1 style={{textAlign:"center"}}>RECENTLY LOST</h1>
  <CardsRow />
  <h1 style={{textAlign:"center"}}>RECENTLY FOUND</h1>
    </div>
  )

}
export default landingPage;