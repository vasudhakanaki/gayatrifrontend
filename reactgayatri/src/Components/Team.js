import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchTeamData } from '../Slice/slice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
function Team() {
  const { teamdata} = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);
  return (
    <div>
      <Navbar/>
       <br/>
    <br/>
    <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>Team</h2>
          <ol className="justify-content-center pt-2">
            <li><a href="/">Home</a></li>
            <li>Team</li>
          </ol>
        </div>
      </div>
      <section id="team1" className="team1 section-bg mt-5">
        <div className="container" data-aos="fade-up">

       

            <div className="row">
            {teamdata &&
  teamdata.map((row) => (
                <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                    <div className="member1 d-flex align-items-start">
                        <div className="pic1"><img src={`https://admin.gayatriinfotech.in/img/${row.image}`} className="img-fluid" alt=""/></div>
                        <div className="member-info1">
                            <h4>{row.name}</h4>
                            <span>{row.designation}</span>
                            <div className="social1">
                                <Link to=""><i className="bi bi-twitter"></i></Link>
                                <Link to=""><i className="bi bi-facebook"></i></Link>
                                <Link to=""><i className="bi bi-instagram"></i></Link>
                                <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

))
}     
               

               

            </div>

        </div>
    </section>
<Footer/>
    </div>
    
  )
}

export default Team