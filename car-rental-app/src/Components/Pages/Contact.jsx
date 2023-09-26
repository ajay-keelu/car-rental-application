// import {useRef} from 'react'
// import emailjs from '@emailjs/browser';
// import React from "react";
// import { Container, Row, Col,  Input, Form, FormGroup  } from "reactstrap";


// import "../../styles/contact.css";



// const Contact = () => {
//      const form = useRef();
//      const sendEmail = (e) => {
//           e.preventDefault();
      
//           emailjs.sendForm('service_1dv1vi9', 'template_rvyok7l', form.current, 'MeOSoTcloE2lLJmEy')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
           
//         };
//         e.target.reset()
//   return (

//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>
//               <form ref={form} >
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Your Name" name="User_name" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Email" name="User_email" type="email" />
//                 </FormGroup>
                
//                 <Form>
//                   <textarea
//                   name="message"
//                     rows="5"
//                   ></textarea>
//                   <br></br>
//                   <br></br>
//                     <input className=" contact__btn" type="submit" value="Send Message" onClick={sendEmail} />
//                 </Form>
               
//               </form>
//             </Col>

             
//               {/* <form ref={form} onSubmit={sendEmail}>
//                 <formGroup className="contact__form">
//                   <Input placeholder="Your Name" name="User_name" type="text" />
//                 </formGroup>
//                 <br></br>
//                 <br></br>
//                 <formGroup className="contact__form">
//                   <Input placeholder="Email" name="User_email" type="email" />
//                 </formGroup>
//                 <br></br>
//                 <br></br>
//                 <form>
//                   <textarea
//                   name="message"
//                     rows="5"
                   
                    
//                   ></textarea>
//                   <br></br>
//                   <br></br>
//                     <button className=" contact__btn" type="submit">
//                   Send Message
//                 </button> 
//                 </form>
               
//               </form>
//             </Col> */}

//              <Col lg="5" md="5"> 
//               <div className="contact__info">
                

                
//                </div>
//             </Col> 
//           </Row>
//         </Container>
//       </section>
// //     </Helmet>
//   );
// };

// export default Contact;
// import {useRef} from 'react'
// import emailjs from '@emailjs/browser';
// import React from "react";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";


// // import "../../styles/contact.css";



// const Contact = () => {
//      const form = useRef();
//      const sendEmail = (e) => {
//           e.preventDefault();
//           emailjs.sendForm('service_1dv1vi9', 'template_rvyok7l', form.current, 'MeOSoTcloE2lLJmEy')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
          
//         };
        
//   return (

//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <form ref={form} >
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Your Name" name="User_name" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Email" name="User_email" type="email" />
//                 </FormGroup>
                
//                 <Form>
//                   <textarea
//                   name="message"
//                     rows="5"
//                   ></textarea>
//                   <br></br>
//                   <br></br>
//                     <input className=" contact__btn" type="submit" value="Send Message" onClick={sendEmail} />
//                 </Form>
               
//               </form>
//             </Col>

//              <Col lg="5" md="5"> 
//               <div className="contact__info">
                

                
//                </div>
//             </Col> 
//           </Row>
//         </Container>
//       </section>
// //     </Helmet>
//   );
// };

// export default Contact;

import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import React from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";


import "../../styles/contact.css";



const Contact = () => {
    
    const dataF = useRef(); 
     const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_1dv1vi9', 'template_rvyok7l', dataF.current,'MeOSoTcloE2lLJmEy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
          e.target.reset();
        }
  return (

      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <form ref={dataF} onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" name="User_name" type="text"  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" name="User_email" type="email"  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                  name="message"
                    rows="5" cols={100}  ></textarea>
                </FormGroup>
                <button className=" contact__btn" type="submit" >Send Message </button>
              </form>
            </Col>

             <Col lg="5" md="5"> 
              <div className="contact__info">
                

                
               </div>
            </Col> 
          </Row>
        </Container>
      </section>
  );
};

export default Contact;