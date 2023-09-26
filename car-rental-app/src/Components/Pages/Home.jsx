import React from 'react';
import { Container, Row, Col } from "reactstrap";
import HeroSlider from '../Main/HeroSlider'
import carData from '../../data/carData';
import FindCarForm  from '../CarForm/FindCarForm';
 import CarItem from '../CarItem/CarItem';

const Home = () => {
    return (
        <div>
           <HeroSlider/>
           <FindCarForm/>
           {/* <carItem/> */}
          <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
              
              <h1 >Why You Choose Us</h1>
              <br></br>
              <Row >
                <ul className='point-title'>
                <h4 ><i class="ri-thumb-up-fill"></i>QUALITY SERVICES</h4 >
                <h4><i class="ri-magic-line"></i>NAME FOR QUALITY VEHICLE</h4 >
                <h4  ><i class="ri-gps-fill"></i>GPS ON EVERY VEHICLE</h4 >
                <h4  ><i class="ri-24-hours-fill"></i>24 HOURS SUPPORT</h4 >
                
                </ul>
               
                <ul className='point-title1'>
                 <h4 className='point-title3'><i class="ri-car-washing-fill"></i>WELL CLEAN CAR</h4> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                 &nbsp;&nbsp;&nbsp;&nbsp; <h4><i class="ri-service-line"></i>ON TIME SERVICES</h4>
                </ul>
               
                </Row>
            </Col>

          </Row>
      </section>
     
        </div>
       
    );
}

export default Home;