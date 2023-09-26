import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './transaction.css'
import Card from './debitcard.png'
import { useNavigate } from 'react-router-dom'
const Transaction = ({pay}) => {
  const navigate = useNavigate()
  const[cnum,setCnum] = useState('')
  const[cname,setCname] = useState('')
  const[cmn,setCmn] = useState('')
  const[cy,setCy] = useState('')
  const[cvv,setCvv] = useState('')
  useEffect(()=>{
    if(JSON.stringify(pay) === '{}')
      navigate('/userDashboard')
  })
  const paynow = () =>{
    const det = {
      email:pay.owEmail,
      ...pay,
      status:'true',
      cardNumber:cnum,
      cardHname:cname,
      carMonth:cmn,
      carYear:cy,
      cardCvv:cvv
    }
    axios.post('http://localhost:1001/all/booking',det).then(res =>{
        alert('success')
    }).catch(err=>{
      alert('please check Internet / something went wrong')
    })
    axios.post('http://localhost:1001/all/payments',det).then(res => {
      alert('you can check your status booking / payments page')
      navigate('/userDashboard/payment')
    }).catch(err => {
      alert('please check Internet while posting')
    })
  }
  const cancel = () =>{
    const det = {
      email:pay.email,
      ...pay,
      status:'false',
      cardNumber:cnum,
      cardHname:cname,
      carMonth:cmn,
      carYear:cy,
      cardCvv:cvv
    }
    axios.post('http://localhost:1001/all/booking',det).then(res =>{
        alert('cenceled your booking')
    }).catch(err=>{
      alert('please check Internet / something went wrong')
    })
    axios.post('http://localhost:1001/all/payments',det).then(res => {
      alert('you can chech your status booking / payments page')
      navigate('/userDashbard')
    }).catch(err => {
      alert('please check Internet while posting')
    })
  }
  return (
    <div className='transaction'>
      <div className='transaction__header'>
        <h4>Do Not Refresh The Page</h4>
      </div>
        <div className="trans-details">
            <div className="divi">
              <img src={Card} alt="" />
            </div>
            <div className="divi">
              <div>
              <h4>Payment Details</h4>
              <div className="input">
                <input type="text" name='cardnumber' onChange={(e)=>setCnum(e.target.value)} placeholder='CARD NUMBER' />
              </div>
              <button className='btn btn-info' style={{color:'#fff'}} disabled="disabled">{pay.price}<sup>$</sup> /day</button>
              <div className="input holder">
                <input type="text" name='holdername'  onChange={(e)=>setCname(e.target.value)} placeholder='CARD HOLDER NAME' />
              </div>
              <div className="deb-inp">
                <input type="text" name='cardmonth'  onChange={(e)=>setCmn(e.target.value)} placeholder='MONTH' />
                <input type="text" name='cardyear'  onChange={(e)=>setCy(e.target.value)} placeholder='YEAR' />
                <input type="text" name='cardcvv'  onChange={(e)=>setCvv(e.target.value)} placeholder='CVV' />
              </div>
              <div className="buttons">
                <button style={{width:'150px'}} onClick={paynow} className='btn btn-primary'>PAY NOW</button>
                <button style={{width:'150px'}} onClick={cancel} className='btn btn-danger' >CANCEL</button>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Transaction