import React,{useState,useEffect} from 'react'
import './dashboard.css'
import Landing from './user/landing'
import BookingDetails from './user/bookingDetails'
import PaymentDetails from './user/paymentDetails'
import {NavLink,Route,Routes, useNavigate} from 'react-router-dom'
import Transaction from './user/TransactionPage.js'
import CarBooking from './user/carBooking'
const UserDashboard = () => {
  const navigate = useNavigate()
  const [carD,setCarD] = useState({})
  const [pay,setPay] = useState({})
  useEffect(()=>{
    if(!localStorage.getItem('email'))
      navigate('/')
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('name'))
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
          <span style={{
            fontSize:'20px',
            cursor:'pointer'
          }}>
            Car<span> Rent App </span>
          </span>
        </div> 
        <div>
          <div className="logoOw" style={{
            fontSize:'20px',
            cursor:'pointer'
          }}>
          <i class="fa fa-user logo"></i> &nbsp;
            <span style={{
              textTransform:'capitalize'
            }}>{name}</span>
          </div>
        </div>
        <NavLink  to='/userDashboard/' className='linkSide' ><i className="fa fa-tachometer"></i>&nbsp; Dashboard</NavLink>
        <NavLink  to='/userDashboard/booking-history' className='linkSide'> <i className='fa fa-list-alt' name="file-tray-full-outline"></i> &nbsp;  Booking History</NavLink>
        <NavLink  to='/userDashboard/payment' className='linkSide'> <i className='fa fa-th-list' name="document-text-outline"></i> &nbsp;  Payment History</NavLink>
        <span className='log' style={{
            fontSize:'20px',
            cursor:'pointer'
          }}  onClick={logout} > 
            <i class="fa-solid fa-right-from-bracket log"></i> Logout
        </span>
      </div>
      <div className="sideNavContent">
        <div className="navLink">
            <Routes>
              <Route path='/*' element={<Landing method = {setCarD}/>} />
              <Route path='/car-booking' element={<CarBooking book={carD} payM={setPay}/>} />
              <Route path='/booking-history' element={<BookingDetails/>} />
              <Route path='/payment' element={<PaymentDetails/>} />
              <Route path='/transaction' element={<Transaction pay={pay}/>} />
            </Routes>
          </div>
      </div>
    </div>
    </>
  )
}

export default UserDashboard