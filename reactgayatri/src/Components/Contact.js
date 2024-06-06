import React, { useState } from 'react'
import { addContactData ,setEmail,setMessage,setName,setPhone} from '../Slice/slice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import * as Yup from 'yup';
function Contact() {
    const { name, email, phone,message } = useSelector((state) => state.rootReducer);
    const dispatch = useDispatch();
    const [validationErrors, setValidationErrors] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
  });
  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(/^[a-zA-Z ]+$/, 'Name must contain only alphabets and spaces'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string()
      .required('Message is required'),
  });
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      try {
        await schema.validate({
            name,
            email,
            phone,
            message,
        }, { abortEarly: false });

        // Validation passed, dispatch action
        const data = {
            name,
            email,
            phone,
            message,
        };
        dispatch(addContactData(data));
    } catch (error) {
        // Validation failed, set validation errors
        error.inner.forEach(err => {
            setValidationErrors(errors => ({
                ...errors,
                [err.path]: err.message,
            }));
        });
    }
    };
  return (
    <div>
      <Navbar/>
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>Contact Us</h2>
          <ol className="justify-content-center pt-2">
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
      <section id="contact" className="contact mt-5">
        <div className="container" data-aos="fade-up">

         

            <div className="row">

                <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>9/4, Shri Markendaya Yantramag Dharak Society, Near New WIT College, Next to Upahar
                                Bakery
                                lane, Solapur -
                                413006.</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@vertextechnosys.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+91 9823140574</p>
                        </div>

                        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.631782308714!2d75.92209907367624!3d17.66759039467556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da64017f2cad%3A0x9696761cef43dc11!2sVertex%20Technosys!5e0!3m2!1sen!2sin!4v1707668161478!5m2!1sen!2sin"
  width="100%"
  height="290px"
  style={{ border: "0" }}
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
></iframe>



                    </div>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label >Your Name</label>
                                <input type="text" onChange={(e) => dispatch(setName(e.target.value))} name="name" className="form-control" id="name" placeholder="Your Name"
                                    required/>  {validationErrors.name && <p style={{color:"red"}}  className="error-msg">{validationErrors.name}</p>}
                            </div>
                            <div className="form-group col-md-6 mt-3 mt-md-0">
                                <label >Your Email</label>
                                <input type="email"onChange={(e) => dispatch(setEmail(e.target.value))} className="form-control" name="email" id="email"
                                    placeholder="Your Email" required/>
                                      {validationErrors.email && <p style={{color:"red"}}  className="error-msg">{validationErrors.email}</p>}
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label >Phone</label>
                            <input type="text" onChange={(e) => dispatch(setPhone(e.target.value))}className="form-control" name="subject" id="subject" placeholder="Subject"
                                required/>
                                  {validationErrors.phone && <p style={{color:"red"}}  className="error-msg">{validationErrors.phone}</p>}
                        </div>
                        <div className="form-group mt-3">
                            <label >Message</label>
                            <textarea onChange={(e) => dispatch(setMessage(e.target.value))} className="form-control" name="message" rows="10" required></textarea>
                            {validationErrors.message && <p style={{color:"red"}}  className="error-msg">{validationErrors.message}</p>}
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

            </div>

        </div>
    </section>
<Footer/>
    </div>

  )
}

export default Contact