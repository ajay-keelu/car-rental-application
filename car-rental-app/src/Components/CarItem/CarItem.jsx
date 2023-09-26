import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";


const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <>
    <Col lg="4" md="4" sm="6" className="mb-5" id="cars">
      <div className="car-item">
        <div className="car-img">
          <Link to="/dashboard"><img src={imgUrl} alt="" className="w-100" /></Link>
        </div>

        <div className="car_-item-content mt-4">
          <h4 className="section-title text-center">{carName}</h4>
          <h6 className="rent-price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car-item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <center>
            <button style={{color:'white'}} 
              onClick={()=>alert("please login")} 
              className=" w-50 car-item-btn car-btn-rent"
              >
              Rent
            </button>
          </center>
        </div>
      </div>
    </Col>
    </>
  );
};

export default CarItem;