import React,{useEffect} from 'react'
import './showcar.css'
import { useNavigate } from 'react-router-dom'
const Showcar = (props) => {
    const navigate = useNavigate();
    const {value} = props;
    useEffect(()=>{
        if(Object.keys(value).length === 0){
            console.log(value)
            navigate('/car-details/')
        }
    },[value])
  return (
    <div className='showcar' >
        <img src={value.image} alt={value.name} /> 
        <table className='table table-hover'>
            <tr>
                <th>Name</th>
                <td>{value.name}</td>
            </tr>
            <tr>
                <th>model</th>
                <td>{value.model}</td>
            </tr>
            <tr>
                <th>price</th>
                <td>{value.price}</td>
            </tr>
            <tr>
                <th>Fuel Capacity</th>
                <td>{value.capacity}</td>
            </tr>
            <tr>
                <th>Car Id</th>
                <td>{value.carId}</td>
            </tr>
            <tr>
                <th>Car licenceId</th>
                <td>{value.licenceId}</td>
            </tr>
        </table>   
    </div>
  )
}
/*
capacity
: 
"70"
carId
: 
"aasdasd100"
image
: 
"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCg
licenceId
: 
"eef6sd76d6d7d"
model
: 
"model"
name
: 
"bogata"
price
: 
"100"

*/
export default Showcar