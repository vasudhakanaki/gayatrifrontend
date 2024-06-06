import React, { useEffect } from 'react'
import { fetchAboutData } from '../Slice/slice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  const { aboutdata} = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAboutData());
  
  }, [dispatch]);
  return (
    <div>
        <Navbar/>
       <br/>
    <br/>
   <div className="breadcrumbs d-flex align-items-center"  style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2>About Us</h2>
        <ol className="justify-content-center pt-2">
          <li><a href="/">Home</a></li>
          <li>About</li>
        </ol>
      </div>
    </div>
  
    <div id="about" className="d-flex align-items-center">
      <div className="container" data-aos="fade-up">
      {aboutdata &&
  aboutdata.map((row) => (
        <div className="row" key={row.id}>
          <div className="col-lg-6 about-img">
            <img src={`https://admin.gayatriinfotech.in/img/${row.image}`} alt=""/>
          </div>
          <div className="col-lg-6 content">
          <div dangerouslySetInnerHTML={{ __html: row.content }} />
           
          </div>
        </div>
      ))
    }   
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About