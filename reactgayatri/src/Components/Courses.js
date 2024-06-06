import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseData, getCourseData } from '../Slice/slice';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Courses() {
  const { coursedata} = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseData());
  
  }, [dispatch]);
 
   

  return (
    <div>
      <Navbar/>
        <br/>
    <br/>
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
         <div className="container position-relative d-flex flex-column align-items-center">
           <h2>Courses</h2>
            <ol className="justify-content-center pt-2">
            <li><a href="/">Home</a></li>
            <li>Courses</li>
            </ol>
           </div>
          </div>
     <div id="courses2" className="courses2 mt-5">
  <div className="container" data-aos="fade-up">

    <div className="row" data-aos="zoom-in" data-aos-delay="100">
    {coursedata &&
  coursedata.map((row) => (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" key={row.id} style={{ marginBottom: "20px" }}>
      <div className="course-item2">
        <img src={`https://admin.gayatriinfotech.in/img/${row.image}`} className="img-fluid course-image" style={{
          width: "100%",
          height: "290px",
          marginBottom: "10px", // Adjust as needed
        }} alt="..."/>
        <div className="course-content2">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{row.course_name}</h4>
            <p className="price">&#8377;{row.price}</p>
          </div>
          <h3><Link to={`/coursedetails/${row.id}`} onClick={() => dispatch(getCourseData(row.id))}>Course Details</Link></h3>
        </div>
      </div>
    </div>
  ))
}


     
    </div>

  </div>
</div>
<Footer/>
    </div>
  )
}

export default Courses