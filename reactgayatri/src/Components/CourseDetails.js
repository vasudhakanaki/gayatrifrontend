import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CourseAdd } from '../Slice/slice';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
function CourseDetails() {
  const { name,image,price,description,courseID} = useSelector((state) => state.rootReducer);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const std_id = localStorage.getItem("stud_id");
  const dispatch = useDispatch();

  const formData = new FormData();
  formData.append("std_id", std_id);
  formData.append("id", courseID);

  const AddCourse =()=>{
    if(token === null)
    {
      alert('Login to add the course');
      navigate("/login");
    }
    else{
      dispatch(CourseAdd(formData));
    }
 
  }
 
  const truncateDescription = (description, wordCount) => {
    if (!description) {
      return ''; 
    }
    const words = description.split(' ');
    if (words.length <= wordCount) {
      return description;
    }
    return words.slice(0, wordCount).join(' ') + '...';
  };
 
  return (
    <div>
      <Navbar/>
       <br/>
    <br/>
    <div className="breadcrumbs d-flex align-items-center" tyle={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Courses-Details</h2>
            <ol className="justify-content-center pt-2">
                <li><a href="/">Home</a></li>
                <li>Course Details</li>
            </ol>
        </div>
    </div>
    <section id="service-details" className="service-details mt-5">
        <div className="container">
            <div className="row gy-5">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <img
                          src={`https://admin.gayatriinfotech.in/img/${image}`}
                          alt="#"   style={{
                            width: "90%"
                          }}/>
                          <br/>
                         
                               <p className=""><b style={{fontSize:"32px"}}>&#8377;{price}</b></p>
                               <button className="reg-but"  onClick={AddCourse}>Add Course</button>
                </div>

                <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
                  
                    <h3>{name}
                    </h3>
                    <p>
                         <div dangerouslySetInnerHTML={{ __html: truncateDescription(description) }} />
                    </p>
                    
                </div>

            </div>

        </div>

    </section>
    <Footer/>
    </div>
  )
}

export default CourseDetails