import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.css'
import axios from 'axios'
const Landing = ({method}) => {
  const navigate = useNavigate()
  const [carlist,setCarList] = useState([])
  axios.get('http://localhost:1001/user/cars').then((res)=>{
      setCarList(res.data)
  })
  const [searchValue,setSearchValue] = useState('')
  const [list,filteredList] = useState([])
  const [search,setSearch] = useState(true)
  useEffect(()=>{
      let tli = []
      carlist.map((e) => {
        if(e.name.toLowerCase().includes(searchValue.toLowerCase()))
          tli.push(e)
      })
      filteredList(tli)
  },[searchValue,carlist])
  const searchF = () =>{
    setSearch( search?false:true)
  }
  const Booking = (e) => {
    // e.preventDefault()
    method(e)
    console.log(e)
    navigate('/userDashboard/car-booking')
  }

  return (
    <div className='userlanding'>
        <div className="search">
          <div style={{cursor:'pointer'}}  className={search?'searchCar':'searchca'}>
          <i  className='fa fa-search ionIcon-search' onClick={searchF}  name="search-outline"></i>
          <input type="text" onChange={(e)=>setSearchValue(e.target.value)}  style={{display:search ? 'none':'block',width:search ? '0%':'100%' }}  placeholder='Search Car Here ... ' />  
          </div>
        </div>
        <div className="searchResults">
            {
              searchValue.length === 0? <></>:
              <>
                {list.length === 0 ? <h3> No results found for '{searchValue}'  </h3> : <div>
                  <h4>Results found for '{searchValue}' </h4>
                {
                  list.map((e)=>{
                    return(<>
                      <div className="carImages">
                      <div className="carDiv">
                        <div className="carImg">
                          <img src={e.image} alt={e.name} />
                        </div>
                        <div className="carDetail">
                          <table>
                            <tr>
                              <th style={{
                                color:'#e6e5dc'
                              }}>Car Name</th>
                              <td style={{
                                textTransform:'capitalize',
                                color:'#faf6d4'
                              }}> &nbsp; {e.name}</td>
                            </tr>
                            <tr>
                              <th style={{
                                color:'#e6e5dc'
                              }}>Licence no</th>
                              <td style={{
                                color:'#faf6d4',
                                textTransform:'uppercase'
                              }}>&nbsp; {(e.liId)}</td>
                            </tr>
                            <tr>
                              <th style={{
                                color:'#e6e5dc'
                              }}>Status</th>
                              <td style={{
                                color:'#faf6d4'
                              }}>&nbsp; Available</td>
                            </tr>
                            <tr>
                              <th style={{
                                color:'#e6e5dc'
                              }}>Ratings</th>
                              <td style={{
                                color:'#faf6d4'
                              }}>&nbsp; <i className='fa fa-star' style={{
                                color:'#ffc107',
                              }} name="star-outline"></i> 3.5 / 5</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>
                                <button className='btn btn-success' onClick={()=>Booking(e)}> Book Now </button>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>  
                      </div>
                      </>
                    )
                  })
                }
                </div> }
              </>
            }
          </div>
        <div className="carImages">
            { carlist.length === 0 ? <h3>Please Wait loading ...... </h3>:
              carlist.map((e)=>{
                return(
                  <div className="carDiv">
                    <div className="carImg">
                      <img src={e.image} alt={e.name} />
                    </div>
                    <div className="carDetail">
                      <table>
                        <tr>
                          <th style={{
                            color:'#e6e5dc'
                          }}>Car Name</th>
                          <td style={{
                            textTransform:'capitalize',
                            color:'#faf6d4'
                          }}> &nbsp; {e.name}</td>
                        </tr>
                        <tr>
                          <th style={{
                            color:'#e6e5dc'
                          }}>Licence no</th>
                          <td style={{
                            color:'#faf6d4',
                            textTransform:'uppercase'
                          }}>&nbsp; {(e.liId)}</td>
                        </tr>
                        <tr>
                          <th style={{
                            color:'#e6e5dc'
                          }}>Status</th>
                          <td style={{
                            color:'#faf6d4'
                          }}>&nbsp; Available</td>
                        </tr>
                        <tr>
                          <th style={{
                            color:'#e6e5dc'
                          }}>Ratings</th>
                          <td style={{
                            color:'#faf6d4'
                          }}>&nbsp; <i className='fa fa-star' style={{
                            color:'#ffc107',
                          }} name="star-outline"></i> 3.5 / 5</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <button className='btn btn-success' onClick={()=>Booking(e)}> Book Now </button>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  
                )
              })
            } 
        </div>
    </div>
  )
}

export default Landing