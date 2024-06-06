import React, { useState } from 'react'
import { addReviewData,setDesignation,setName,setReview } from '../Slice/slice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import * as Yup from 'yup';
function Review() {
  const { name, designation, review } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    designation: '',
    review: '',
});
const schema = Yup.object().shape({
  name: Yup.string()
      .matches(/^[a-zA-Z ]+$/, 'Name must contain only alphabets and spaces')
      .required('Name is required'),
  designation: Yup.string()
  .matches(/^[a-zA-Z ]+$/, 'Name must contain only alphabets and spaces')
     
      .required('Designation is required'),
  review: Yup.string()
      .required('Review is required'),
});
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await schema.validate({
          name,
          designation,
          review,
      }, { abortEarly: false });

      // Validation passed, dispatch action
      const data = {
          name,
          designation,
          review,
      };
      dispatch(addReviewData(data));
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
       <div className="breadcrumbs d-flex align-items-center"  style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>Add Review </h2>
          <ol className="justify-content-center pt-2">
            <li><a href="/">Home</a></li>
            <li>Review</li>
          </ol>
        </div>
      </div>
      <section id="contact" className="contact mt-5">
        <div className="container" >
            <div className="row">
               <div className="col-lg-9 d-flex align-items-stretch"data-aos="fade-up"  data-aos-delay="100" style={{marginLeft:"15%"}}>
                <form  onSubmit={handleSubmit} className="php-email-form">
                <div className="form-group mt-3">
                            <label >Name</label>
                            <input type="text" onChange={(e) => dispatch(setName(e.target.value))}className="form-control" name="name" id="subject" placeholder="Subject"
                                required/>
                                 {validationErrors.name && <p style={{color:"red"}}  className="error-msg">{validationErrors.name}</p>}
                        </div>
                        <div className="form-group mt-3">
                            <label >Designation</label>
                            <input type="text"onChange={(e) => dispatch(setDesignation(e.target.value))} className="form-control" name="designation" id="subject" placeholder="Subject"
                                required/>
                                 {validationErrors.designation && <p style={{color:"red"}}  className="error-msg">{validationErrors.designation}</p>}
                        </div>
                        <div className="form-group mt-3">
                            <label >Message</label>
                            <textarea onChange={(e) => dispatch(setReview(e.target.value))}className="form-control" name="review" rows="10" required></textarea>
                            {validationErrors.review && <p style={{color:"red"}}  className="error-msg">{validationErrors.review}</p>}
                        </div>
                     
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                        
                        <div className="text-center"><button type="submit">Post Review</button></div>
                  </form>
                </div>

                

            </div>

        </div>
    </section>
<Footer/>
    </div>
  )
}

export default Review