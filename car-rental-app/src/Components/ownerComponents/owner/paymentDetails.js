import React,{useState,useEffect} from 'react'
import axios from 'axios'

const PaymentDetails = () => {
  const [payments,setPayments] = useState([])
   useEffect(()=>{
    axios.get('http://localhost:1001/owner/payments').then((res)=>{
      setPayments(res.data)
    })
  })
  return (
    <>
      <div className='payment-table'>
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
                <>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.cardNumber}</td>
                  <td>{data.cardHname}</td>
                  <td>{data.email}</td>
                  <td>{data.liId}</td>
                  <td>{data.status ==='true'?<span className='bg-info' style={{padding:'05px 12px',borderRadius:'10px'}}>booked</span>:<span className='btn btn-danger'>canceled</span>}</td>
                </>
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