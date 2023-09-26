import React from 'react'
import './carDetails.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const CarList = ({Cars,setCd}) => {
  // const Cars = props.Cars
  const navigate = useNavigate();
  const carDet = (e) =>{
        setCd(e);
        navigate('/ownerDashboard/car-details/show-car')
   }
  return (
    <div>
        <div className="all-cars">
          
          { Cars.length !== 0 ? Cars.map((e,i)=>{  
            return (
                <div className="carDiv" key={i}>
                <div className="carImg" >
                    <img src={e.image} alt={e.name} onClick={()=>carDet(e)}/>
                </div>
                </div>
            )
          }) : <h2>Empty</h2>   }
        </div>
    </div>
  )
}
export default CarList
/*
Cars.map((e,i)=>{
    return (
        <div className="carDiv" key={i}>
        <div className="carImg" >
            <img src={e.image} alt={e.name} onClick={()=>carDet(e)}/>
        </div>
        </div>
    )
})

*/