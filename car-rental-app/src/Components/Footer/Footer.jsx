import React from 'react';
import {Container,Row,Col, ListGroupItem} from "reactstrap"
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = () => {
    return <footer className='Main-Footer'>
        <Container>
          <br></br>
          
            <Row>
            
          <Col lg='4' md='4' sm ="12">
            <div className='footer-logo'>
               <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">    </Link>             
       <i class=" ri-car-line"></i>
      
       <span >
        Rent Car <br/> Service
       </span>
       </h1>
              </div>
          <p className='footer_logo-content'>
          A car rental mobile app simplifies renting a car,<br></br> enabling users 
          to search for available vehicles <br></br> select pick-up locations 
          and times, choose a car <br></br> type, and manage their booking.
          </p>
         <center> <p className='icon-color'>
          <Link className='quick-link' to ='https://www.instagram.com/'><i class="ri-instagram-fill"></i></Link>&nbsp;&nbsp;&nbsp;
          <Link className='quick-link'  to ='https://www.twitter.com/'><i class="ri-twitter-fill"></i></Link>&nbsp;&nbsp;&nbsp;
          <Link  className='quick-link' to ='https://www.facebook.com/'><i class="ri-facebook-circle-fill"></i></Link>&nbsp;
</p></center> 
          </Col>
          
          <Col lg="4" and md="4" sm='6'>
           <div className='mb-4'>
            <h5 className='footer_link-title'>Quick Links </h5>
            <ListGroupItem >
            <Link className='quick-link' to="/">Home</Link><br></br>
            <Link  className='quick-link' to="/details">Details</Link><br></br>
            <Link className='quick-link' to="/login">Login</Link><br></br>
            <Link  className='quick-link' to="/signUp">Register</Link><br></br>
            </ListGroupItem>
            </div> 
          </Col>

          
           

           <Col lg="3" and md="4" sm='6'>
          <div className='mb-4'>
          <h5 className='footer_link-title'>Contact </h5>
            <p className="office_info">123 Surampalem, Kakinada</p>
            <p className="office_info">Phone :  +91-99999999</p>
            <p className="office_info">Email : v2ADS@gmail.com</p>
            <p className="office_info">Office Time :10am - 7pm</p>
          </div>
         
             </Col>
              <br></br> <br></br>
             <div className=' footer-bottom text-center col-lg-12 ' >
         2023 Copyright issue to &copy; V2ADS@TEAM:
        <Link className='text-reset fw-bold' to='/'>
          CarRental.com
        </Link>
      </div>
        </Row>
        </Container>
        </footer>
   
};

export default Footer;
