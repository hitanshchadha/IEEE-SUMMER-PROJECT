import React from "react";
import LandingPage from "./LandingPage.jsx";
import AddItems from "./addItems.jsx";
import Navbar from "./components/navbar.jsx";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   
} from "react-router-dom";





function App(){
   return (
      <>
   <Router>
   <div>
    <Navbar />
   
    <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/myListings">

         </Route>
         <Route path="/lostItems" >

         </Route>
         <Route path="/FoundItems">

         </Route>
         <Route path="/addItems" element={<AddItems />}>

         </Route>
    </Routes>
   </div>
   </Router>
   </>
   )
}
export default App;