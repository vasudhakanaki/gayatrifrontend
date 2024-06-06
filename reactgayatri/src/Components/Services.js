import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceData } from '../Slice/slice';
import Navbar from './Navbar';
import Footer from './Footer';

function Services() {
  const {servicedata } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServiceData());
  }, [dispatch]);
  return (
    <div>
        <Navbar/>
      <br/>
    <br/>
  
    <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
         <div className="container position-relative d-flex flex-column align-items-center">
           <h2>Services</h2>
            <ol className="justify-content-center pt-2">
            <li><a href="/">Home</a></li>
            <li>Services</li>
            </ol>
           </div>
          </div>
          <section id="services5" className="services5 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box5" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon5"><i className="bx bxl-dribbble"></i></div>
                        <h4 className="title5"><a href="Services-Page.html">Lorem Ipsum</a></h4>
                        <p className="description5">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box5" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon5"><i className="bx bx-file"></i></div>
                        <h4 className="title5"><a href="Services-Page.html">Sed ut perspiciatis</a></h4>
                        <p className="description5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box5" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon5"><i className="bx bx-tachometer"></i></div>
                        <h4 className="title5"><a href="Services-Page.html">Magni Dolores</a></h4>
                        <p className="description5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box5" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon5"><i className="bx bx-world"></i></div>
                        <h4 className="title5"><a href="Services-Page.html">Nemo Enim</a></h4>
                        <p className="description5">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <section id="more-services" class="more-services mt-5">
        <div class="container">

            <div class="row" >
            {servicedata &&
  servicedata.map((row) => (
                <div class="col-md-6 d-flex align-items-stretch" key={row.id} style={{ gap: "20px",marginTop:"10px" }}>
                    <div class="card" style={{ backgroundImage: `url("https://admin.gayatriinfotech.in/img/${row.image}")` }} data-aos="fade-up"
                        data-aos-delay="100">
                        <div class="card-body">
                            <h5 class="card-title">{row.name}</h5>
                         
                            <div class="card-text" dangerouslySetInnerHTML={{ __html: row.description }} />
                      
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

export default Services