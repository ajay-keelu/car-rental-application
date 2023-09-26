// import React, { Fragment } from "react";
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
// import Main from '../Main/HeroSlider'
// // import FormSideBar from "../FormSbar/FormSideBar";
// import CarForm from '../CarForm/FindCarForm'
// import Home from '../Pages/Home'

// import Routers from "../../routers/Router";


// const Layout = () =>{
//     return  <Fragment>
//         <Header/>
//         <div>
// <Routers/>            
//             <Main/>
//              {/* <FormSideBar/> */}
//             <CarForm/>
//             <Home/>
            
//         </div>
       

//     <Footer/> 
//     </Fragment>
// }

// export default Layout

import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Router";
// import Main from '../Main/HeroSlider'

const Layout = () => {
  return (
    <Fragment>
      <Header />
      {/* <Main/> */}
      <div>
      <Routers/> 
      </div>
    
      <Footer />
    </Fragment>
  );
};

export default Layout;