import React from 'react';
import '../../styles/header.css';
import { Container, Row,Col,  } from 'reactstrap';
import { Link } from 'react-router-dom';
// import SearchForm from '../SearchForm/SearchForm'
const Header = () => {
    return <header className='header'>
        
        <div className='header_top'>

        <Container>
            <Row>
                <Col lg='6' md='6' sm='6'>
                  <div className='header_top_left'>
                     <span>
                        Need Help?
                     </span>
                     <span className='header_top_help'>
                             <i className='ri-phone-fill'></i> +91-999999999
                     </span>

                  </div>
                </Col>

             <Col lg='6' md='6' sm='6'>

                     <div className='header_top_right'> 
                          <Link to="/login">
                            <i class="ri-login-circle-line"></i> Login 
                            </Link>  
                          <Link to="/signup"> 
                            <i class="ri-user-line"></i>Register
                            </Link>
                      </div>
               </Col> 
            </Row>
        </Container>
        </div>
          <div className='header_middle'>
             <Container>
                 <Row>
                    <Col lg='4' md='3' sm='4'>
                    <div className='logo'>           
                       <h1><Link to='/' className='d-flex align-items-center gap-3'>
                        <i class="ri-car-line"></i>
                        <span>Rent Car <br/> Service</span>
                        </Link></h1>
                    </div>
                    </Col>

                    <Col lg='3' md='3' sm='4'>
                    <div className="header_location">
                    <span ><i class="ri-earth-line">&nbsp;&nbsp;</i></span>
                     <div className='header_location-content'> 
                     <h4>Surampalem</h4>
                     <h6> Kakinada,Surampalem</h6>
                     </div>
                     </div>
                    </Col> 
                    <Col lg='3' md='3' sm='4'>
                    <div className="header_location">
                      <span><i class="ri-time-line">&nbsp;&nbsp;</i></span> 
                     <div className='header_location-content'> 
                     <h4>Sunday to Friday</h4>
                     <h6>10am - 7pm </h6>
                     </div>
                     </div>
                    </Col>
                      <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
                      <button  className='header_btn btn  text-end '>

                        <Link to="/contact">
                        
                          <i class="ri-phone-line"></i> Request a call
                        </Link>

                      </button>
                      </Col>

                 </Row>

             </Container>


          </div>
        {/* main navigation    */}
<div className='main_navbar'>
  <Container>
    <div className='navigation_wrapper d-flex align-iems-center justify-content-between'>
      <span className='mobile_menu'>
       <i class='ri-menu-line'></i> 
       </span>
       <div className='navigation'>
      <div className='menu'>
       {
        <nav>
          <ul>
            <li>
              <Link className='nav_item' to="/">Home</Link> &emsp;
              <Link className='nav_item' to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
       }
       </div>
       </div>
    </div>
  </Container>
</div>
    </header> 
}

export default Header;