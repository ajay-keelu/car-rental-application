import React from 'react'
import './dashboard.css'
import Landing from './owner/landing'
import BookingDetails from './owner/bookingDetails'
import CarDetails from './owner/carDetails'
import PaymentDetails from './owner/paymentDetails'
import {NavLink,Route,Routes,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
const OwnerDashboard = () => {
  const navigate = useNavigate()
  const [Cars,setCars] = useState([])
  useEffect(()=>{
    if(!localStorage.getItem('email'))
      navigate('/')
  })
  const name = localStorage.getItem('name');
  const logout = () =>{
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    navigate('/')
  }
  
  return (
    <>
    <div className="ownerDashboard">
      <div className="sideNav">
        <div className="header">
          <span>
            <span style={{cursor:'pointer'}}>CarRent </span>App
          </span>
        </div> 
        <div>
          <div className="logoOw">
          <i class="fa fa-user-secret logo"></i> &nbsp;
            <span style={{textTransform:'uppercase',fontWeight:'bold',cursor:'pointer'}}>{name}</span>
          </div>
        </div>
        <NavLink  to='/ownerDashboard/' className='linkSide' >Dashboard</NavLink>
        <NavLink  to='/ownerDashboard/car-details' className='linkSide'>Car Details</NavLink>
        <NavLink  to='/ownerDashboard/booking-history' className='linkSide'>Booking History</NavLink>
        <NavLink  to='/ownerDashboard/payment' className='linkSide'>Payment Details</NavLink>
        <span className='log' onClick={logout}> 
            <i class="fa-solid fa-right-from-bracket log"></i> Logout
        </span>
      </div>
      <div className="sideNavContent">
        <div className="navLink">
            <Routes>
              <Route path='/' element={<Landing method= {setCars}/>} />
              <Route path='/booking-history' element={<BookingDetails/>} />
              <Route path='/car-details/*' element={<CarDetails list={Cars} />} />
              <Route path='/payment' element={<PaymentDetails/>} />
            </Routes>
          </div>
      </div>
    </div>
    </>
  )
}

export default OwnerDashboard