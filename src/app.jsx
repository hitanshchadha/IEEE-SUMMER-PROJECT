import React from "react";
import LandingPage from "./LandingPage.jsx";
import AddItems from "./components/addItems.jsx";
import LostItems from "./components/lostItems.jsx";
import FoundItems from "./components/foundItems.jsx";
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
         <Route path="/lostItems" element={<LostItems />}>

         </Route>
         <Route path="/FoundItems" element={<FoundItems/>}>

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