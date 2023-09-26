import React from 'react'
import { useState,useEffect } from 'react'
import CountUp from 'react-countup'
import axios from 'axios'
import './landing.css'
import ImgUser from './carImages/user.png'
const Landing = ({method}) => {
  const [Cars,setCars] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:1001/ownerCars/all').then((data)=>{
          if(data.data !== 'no' ){
          setCars([...data.data])
          method([...data.data])
          console.log(...data.data)
          }
      })
    },[])
  return (
    <div className='landing'>
      <div className="head">
        <div className='division'>
        <div className="firstFlex">
        <div className="details oneDiv">
          <div className='oDiv'> <i class="fa fa-van-shuttle fa-big"></i> </div>
          <div className='secDiv'> <CountUp start={0} end={135} duration={1.5} /> <sup> <i class="fa-solid fa-dollar-sign"></i> </sup> </div>
          <div className='thirdDiv'> Monthly Income </div>
        </div>
        <div className="details oneDiv">
        <div className='oDiv'> <i class="fa-solid fa-sack-dollar fa-big"></i> </div>
          <div className='secDiv'> <CountUp start={0} end={2135} duration={1.5} /> <sup> <i class="fa-solid fa-dollar-sign"></i> </sup> </div>
          <div className='thirdDiv'> Annual Income </div>
        </div>
        <div className="details oneDiv">
          <div className="car">
          <i class="fa fa-car fa-big"></i>
          </div>
          <div className="count">
              <div className="actual clrBlue">
              <CountUp start={0} end={Cars.length} duration={1.5} />
              <sup> <i class="fa fa-plus"></i> </sup>
                </div> 
          </div>
          <div className="thirdDiv">
            Total cars
          </div>
        </div>
      </div>
        <div className="carDivi">
          <h2 style={{fontWeight:'bold'}}> Car's</h2>
        <div className="carlist">
          <div className="all-cars">
              {
               Cars.length !== 0 ? Cars.map((e)=>{
                  return (
                    <div className="carDiv">
                      <div className="carImg">
                        <img src={e.image} alt={e.name}/>
                      </div>
                      <div className="carname">
                        <span> {e.name} </span>
                      </div>
                </div>
                  )
                }) : <h2> No Cars! Add Some Cars </h2>
              }
          </div>
        </div>
        </div>
        </div>
      <div className="secFlex">
        <div className="details">
          <img src={ImgUser} alt='owner image' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Landing