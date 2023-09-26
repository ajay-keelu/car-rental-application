import React,{useState,useEffect} from 'react'
import axios from 'axios'
const BookingDetails = () => {
  const [history,setHistory] = useState(['no'])
  useEffect(()=>{
    axios.get('http://localhost:1001/user/bookings').then((res)=>{
      setHistory(res.data)
    })
  })
  return (
    <>
      <div className='booking-table'>
        {
          history[0] === 'no' ? <code>no bookings found</code> :
          <table class="table table-bordered">
          <tr>
            <th>Sno </th>
            <th> car name</th>
            <th> from date/time</th>
            <th> to date/time</th>
            <th> Car Owner Email</th>
            <th> status</th>
          </tr>
          {
            history.map((data,i)=>{
              return (
                <tr>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td>{data.email}</td>
                  <td style={{cursor:'pointer'}}>{data.status ==='true'?<span className='bg-info' style={{padding:'05px 12px',borderRadius:'10px'}}>booked</span>:<span className='btn btn-danger'>canceled</span>}</td>
                </tr>
              )
            })
          }
        </table>
        }
      </div>
    </>
  )
}

export default BookingDetails