import React, { useEffect, useRef } from 'react'
import { useDispatch , useSelector} from "react-redux";
import { fetchAboutData,fetchCourseData ,fetchServiceData,fetchTeamData,fetchBlogData,fetchReviewData, getCourseData} from '../Slice/slice';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Navbar from './Navbar';
import Footer from './Footer';


function Home() {
  const { aboutdata,coursedata,servicedata ,teamdata,blogdata,reviewdata} = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  useEffect(() => {
    dispatch(fetchAboutData());
    dispatch(fetchCourseData());
    dispatch(fetchServiceData());
    dispatch(fetchTeamData());
    dispatch(fetchBlogData());
    dispatch(fetchReviewData());
  }, [dispatch]);
  useEffect(() => {
    if (reviewdata.length > 0) {
      const swiper = new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
  
      // Update swiperRef.current after initialization
      swiperRef.current = swiper;
    }
  }, [reviewdata]);

  return (
    
    <div>
      <Navbar/>
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center " >
    <div id="heroCarousel"  className="container carousel carousel-fade" >

      <div className="carousel-item active">
        <div className="carousel-container">
          <br/>
          <br/>
          <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Gayatri Infotech</span></h2>
          <p className="animate__animated fanimate__adeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <div className="search-box ">
            <input className="search-input" type="text" placeholder="Search something.."/>
            <button className="search-btn"><i className="fa fa-search"></i></button>
          </div>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>  
    </div>

    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
      </defs>
      <g className="wave1">
        <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
      </g>
      <g className="wave2">
        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
      </g>
    </svg>

  </section>
  <section id="about" className="d-flex align-items-center mt-5 ">
  {aboutdata &&
  aboutdata.map((row) => (
    <div className="container" data-aos="fade-up" key={row.id}>
      <div className="row">
        <div className="col-lg-6 about-img">
          <img src={`https://admin.gayatriinfotech.in/img/${row.image}`} alt=""/>
        </div>
        <div className="col-lg-6 content">
        <div dangerouslySetInnerHTML={{ __html: row.content }} />
        </div>
      </div>
    </div>
  ))
}
  </section>
  <section id="features" class="features mb-5">
    <div class="container" data-aos="zoom-in" data-aos-delay="300"><br/>
      <div class="section-header mb-5">
        <h2 class="text-center"> Popular Courses</h2>
      </div>
    
      <div class="row">
      {coursedata &&
    coursedata.map((row) => (
      <div class="col-lg-3 col-md-4 mb-4" key={row.id}>
        <Link to={`/coursedetails/${row.id}`} onClick={() => dispatch(getCourseData(row.id))}>
        <div class="icon-box">
          <i class="fa fa-html5" style={{color: "#f06529"}}></i>
          <h3>{row.course_name}</h3>
        </div>
        </Link>
      </div>
    ))
  }
      </div>
   
    </div>
  </section>
  <section id="services" className="services p-5">
    <div className="container" data-aos="fade-up">

      <div className="section-header mb-5">
        <h2>Our Services</h2>
       
      </div>

      <div className="row gy-5">
      {servicedata &&
  servicedata.map((row) => (
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200"  key={row.id}>
          <div className="service-item">
            <div className="img">
              <img src={`https://admin.gayatriinfotech.in/img/${row.image}`} className="img-fluid" alt=""/>
            </div>
            <div className="details position-relative">
              <div className="icon">
                <i className="bi bi-camera-video-fill"></i>
              </div>
              
                <h3>{row.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: row.description }} />
           
            </div>
          </div>
        </div>
          ))
        }
      </div>

    </div>
  </section>
  <section id="team" className="team ">
    <div className="container" data-aos="fade-up">

      <div className="section-header mb-5">
        <h2>TEAM</h2>
        <p>CHECK OUR TEAM</p>
      </div>

      <div className="row">
      {teamdata &&
  teamdata.map((row) => (
        <div className="col-lg-3 col-md-6 col-6 d-flex align-items-stretch" key={row.id}>
          <div className="member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img  src={`https://admin.gayatriinfotech.in/img/${row.image}`} className="img-fluid" alt=""/>
              {/* <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div> */}
            </div>
            <div className="member-info">
              <h4> {row.name}</h4>
              <span>{row.designation}</span>
            </div>
          </div>
        </div>
   ))
  }


      </div>

    </div>
  </section>
  <section id="recent-blog-posts" class="recent-blog-posts">

<div class="container" data-aos="fade-up">

  <header class="section-header mb-5">
    <h2>Blog</h2>
  </header>

  <div class="row">
  {blogdata &&
  blogdata.slice(0, 3).map((row) => (
    <div class="col-lg-4" key={row.id}>
      <div class="post-box">
        <div class="post-img"><img src={`https://admin.gayatriinfotech.in/img/${row.image}`} class="img-fluid" alt=""/></div> 
        <h3 class="post-title">{row.name}</h3>
        <Link to="#" class="readmore stretched-link mt-auto"><span>Read More</span><i
            class="bi bi-arrow-right"></i></Link>
      </div>
    </div>

))
}


  </div>

</div>

</section>
<section id="testimonials mt-5" className="testimonials">
    <div className="container">

      <div className="section-header">
        <h2>Students Review</h2>
      
      </div>
    
      <div className="testimonials-slider swiper-container" >
  <div className="swiper-wrapper">
    {reviewdata && reviewdata.map((row) => (
      <div key={row.id} className="swiper-slide">
        <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {row.review}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <h3>{row.name}</h3>
          <h4>{row.designation}</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
              className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
    ))}
  </div>
        <div className="swiper-pagination"></div>
  
      </div>
        

    </div>
  </section>

 
<Footer/>
    </div>
  )
}

export default Home