import React, { useEffect, useState } from 'react'
import './carBooking .css'
import { useNavigate } from 'react-router-dom'
const CarBooking = ({book,payM}) => {
  const navigate = useNavigate();
  const [bookingDet,setBook] = useState(book)
  const bDetails = (e) =>{
      setBook({...bookingDet,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    if(JSON.stringify(book) === '{}')
        navigate('/userDashboard')
    console.log(book)
  })

  const handleClick = () => {
    payM(bookingDet)
    navigate('/userDashboard/transaction')
  }
  
  return (
    <>
        <div className='carbooking'>
            <div className="car-detail">
              <div className="car-image">
                <img src={book.image} alt={book.name} />
              </div>
              <div className="car-table">
                <table className='table table-striped' >
                  <tr>
                    <th>Name </th><td className='data'> {book.name} </td>
                  </tr>
                  <tr>
                    <th>car id </th><td className='data' style={{
                      textTransform:'uppercase'
                    }}> {book.liId} </td>
                  </tr>
                  <tr>
                    <th>Owner Email </th><td className='data email'> {book.owEmail} </td>
                  </tr>
                  <tr>
                    <th>Price </th><td className='data email'> {book.price}<sup>$</sup>/day </td>
                  </tr>
                  <tr>
                    <th> Maximun car rent is 1 year </th>
                    <th>Minimun car rent is 1 day </th>
                  </tr>
                  <tr>
                      <td>
                          <table>
                            <tr>
                              <th>From (date/time)</th>
                            </tr>
                            <tr>
                              <td className='data'> <input type='datetime-local' name='from' onChange={bDetails} /></td>
                            </tr>
                          </table>
                      </td>
                      <td>
                      <table>
                            <tr>
                              <th>To (date/time) </th>
                            </tr>
                            <tr>
                              <td className='data'> <input type='datetime-local' name='to' onChange={bDetails} /></td>
                            </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><button style={{
                      color:'red'
                    }} className='btn btn-primary' onClick={handleClick}>Confirm Booking</button></td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
    </>
  )
}

export default CarBooking