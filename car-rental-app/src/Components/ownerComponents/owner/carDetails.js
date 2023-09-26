import React, { useState } from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom'
import './carDetails.css'
import Showcar from './showcar'
import CarList from './carList'
import AddCar from './addCar'
import axios from 'axios'
const CarDetails = ({list}) => {
  const [cd,setCd] = useState({})
  const navigate = useNavigate();
  const addCar = () => {
    navigate('/ownerDashboard/car-details/add-car');
  }
  const viewCars = () => {
    navigate('/ownerDashboard/car-details/');
  }
  return (
    <div className='cardetails'>

      <div className="carDivi">
                <div className="carHead">
                  <div className="text">
                    <h2> Your Cars</h2>
                  </div>
                  <div className="addRem">
                    <button onClick={viewCars}>View Cars</button>
                    <button onClick={addCar}>ADD CAR</button>
                  </div>
                </div>
              <div className="carlist">
                <div className="all-cars">
                  <Routes>
                    <Route path='/' element={<CarList Cars={list} setCd = {setCd} />} />
                    <Route path='/show-car' element={<Showcar value={cd} />}/>
                    <Route path='/add-car' element={<AddCar/>} />
                  </Routes>
                </div>
              </div>
      </div>

    </div>
  )
}

export default CarDetails