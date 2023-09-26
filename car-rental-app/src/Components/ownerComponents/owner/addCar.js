import React from 'react'
import './addcar.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddCar = () => {
    const navigate = useNavigate()
    const [carDetails,setCarDetails] = useState({})
    const addCarDetails = () =>{
        for(let key in carDetails){
            if(!carDetails.hasOwnProperty(key))
                return alert('Please Fill Up All Fields')
        }
        axios.post('http://localhost:1001/ownerCarDetails/addCar',carDetails).then(res =>{
            alert("Successfully added")
            navigate('/ownerDashboard')
        }).catch(err=>{
            alert('please reload and try again',err)
        })
    }
    const inputChange = (e) =>{
        setCarDetails(
            {...carDetails,[e.target.name]:e.target.value}
        )
    }
    const imageChange = (e) =>{
       let reader = new FileReader();
       reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
            setCarDetails({...carDetails,'image':reader.result})
        }
        reader.onerror = err => alert('please upload image again')
    }
  return (
    <div>
        <div className="addcar">
            <h2 style={{color:'rgb(38, 38, 114)'}}>Enter Your Car Details</h2>
            <div className='input'>
                <input type="text" name="name" className='addInput' placeholder='Car Name' onChange={inputChange} required />
            </div>
            <div className='input'>
                <input type="text" name="model" className='addInput' placeholder='Car Model' onChange={inputChange} required />
            </div>
            <div className='input'>
                <input type="text" name="carId" className='addInput' placeholder='Car Number Plate Id' onChange={inputChange} required />
            </div>
            <div className='input'>
                <input type="text" name="capacity" className='addInput' placeholder='Fuel Capacity' onChange={inputChange}  required />
            </div>
            <div className='input'>
                <input type="text" name="price" className='addInput' placeholder='Price range per day' onChange={inputChange} required />
            </div>
            <div className='input'>
                <input type="text" name="licenceId" className='addInput' placeholder='Driving License Id' onChange={inputChange} required />
            </div>
            <div className='input'>
                <label style={{fontWeight:'bold'}}>Car Image &emsp; </label>
                <input type="file" onChange={imageChange}  style={{width:'250px'}} accept="image/png,image/avif,image/webp,image/jpg, image/gif, image/jpeg"  placeholder='Driving License Id' required />
            </div>
            <button className='addInput' onClick={addCarDetails}>Submit</button>
        </div>
        {/* <img src={image} alt="" /> */}
    </div>
  )
}

export default AddCar