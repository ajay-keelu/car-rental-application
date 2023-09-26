import React from "react";
import  '../../styles/find-car-form.css'

import { Form, FormGroup, Container } from "reactstrap";
 


const FindCarForm = () => {
  return (
<>       
  
  
 
  
     <Container className="Complete-form">
    <Form className="form">
    <center><span className="form-title" style={{cursor:'pointer'}}> Search a Car now! </span></center>
    <br></br>
    <br></br>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form_group">
          <input type="text" placeholder="From address" required />
        </FormGroup>
    


        <FormGroup className="form_group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input
            className="journey_time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select_group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form_group">
          <button onClick={()=>alert("please login")} className="btn find-car-btn">Find Car</button>
        </FormGroup>
      </div>
       
    </Form>
    </Container>
    </>
  );
};

export default FindCarForm;