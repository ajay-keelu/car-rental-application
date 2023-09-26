import React from "react";
import { Routes, Route  } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Contact from "../Components/Pages/Contact";
import Signup from "../Components/Login/signup";
import Register from "../Components/Login/register";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/login" element={<Signup />}/> 
      <Route path="/signup" element={<Register/>} /> 
    </Routes>
  );
};

export default Routers;












// import React from 'react';
// import {  Route, Routes } from 'react-router-dom'
// import Home from '../Components/Pages/Home'
//  import Contact from '../Components/Pages/Contact'
// // import CarDetails from '../CarDetails/'';
// const  Router = () => {
   
//      <Routes>
      
//         <Route path='/' element={<Navigate to='/Home'/>} /> 
//         <Route path='/home' element={<Home/>} />
//         <Route path='/contact' element={<Contact/>}/> 
//         {/* <Route path="/cars/:slug" element={<CarDetails />} /> */}
        
//     </Routes>
    
 
// }
// function App1 (){
// <Routes>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//         </Routes>
// }
// export default App1;
