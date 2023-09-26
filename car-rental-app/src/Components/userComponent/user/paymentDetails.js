import React,{useState,useEffect} from 'react'
import axios from 'axios'
const PaymentDetails = () => {
  const [payments,setPayments] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:1001/user/payments').then((res)=>{
      setPayments(res.data)
    })
  })
  return (<>
  
  <div className='payment-table table-striped'>
        {
          payments[0] === 'no'?<code>no payments yet</code>:<table class="table table-bordered">
          <tr>
            <th>Sno </th>
            <th> car name</th>
            <th> Card Number</th>
            <th> card holder name</th>
            <th> Car Owner Email</th>
            <th> Car License id</th>
            <th> status</th>
          </tr>
          {
            payments.map((data,i)=>{
              return (
                <tr>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.cardNumber}</td>
                  <td>{data.cardHname}</td>
                  <td>{data.email}</td>
                  <td>{data.liId}</td>
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

export default PaymentDetails