import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogData } from '../Slice/slice';
import Navbar from './Navbar';
import Footer from './Footer';

function Blog() {
  const { blogdata} = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);
  return (
    <div>
      <Navbar/> <br/>
    <br/>
    <div class="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
      <div class="container position-relative d-flex flex-column align-items-center">
        <h2>Blog</h2>
        <ol class="justify-content-center pt-2">
          <li><a href="/">Home</a></li>
          <li>Blog</li>
        </ol>
      </div>
    </div>
    <section class="news-grid grid mt-5" data-aos="fade-up">
    <div class="container">
      <div class="row">
      {blogdata &&
  blogdata.map((row) => (
        <div class="col-md-4">
          <div  class="card-box-b card-shadow news-box">
            <div class="img-box-b">
              <img src={`https://admin.gayatriinfotech.in/img/${row.image}`} alt="" class="img-b img-fluid"/>
            </div>
            <div class="card-overlay">
              <div class="card-header-b">
                <div class="card-category-b">
                  <a href="blogdetails" class="category-b">Apply</a>
                </div>
                <div class="card-title-b">
                  <h2 class="title-2">
                    <a href="blogdetails">{row.name}
                    </a>
                  </h2>
                </div>
               
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

export default Blog