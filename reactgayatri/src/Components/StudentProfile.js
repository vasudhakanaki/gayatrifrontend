import React, { useEffect } from 'react'

import { fetchStudentData} from '../Slice/RegisterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Slice/RegisterSlice';
function StudentProfile() {
  const { name, email,photo,phone,DOB,gender,parents_name,parents_occupation,parents_phone,college_name,college_type,degree,passout_year,password,university_name,start_time,end_time,address} = useSelector((state) => state.Registeration);
  const dispatch = useDispatch();
  const id = localStorage.getItem("stud_id");
  const std_email = localStorage.getItem("email");
  const image = localStorage.getItem("photo");
  useEffect(() => {
    dispatch(fetchStudentData({ id: id }));
  
  }, [dispatch, id]);


  return (
    <div>
    
        <aside className="left-sidebar">
          <div> 
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <div className="mb-2">
                <a href="../" className="text-nowrap text-warning logo-img " style={{ fontSize: '21px', fontWeight: 'bolder' }}>
                  &nbsp; <img src="/img/GayatriLogo.png" className="mt-3 " width="130%" height="90px" alt="" />
                </a>
               </div>
               <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                <i className="ti ti-x fs-8"></i>
                </div>
              </div>
              <nav className="sidebar-nav scroll-sidebar" data-simplebar="init">
                <div className="simplebar-wrapper selected" style={{ margin: '0px -24px' }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                   </div>
                   <div className="simplebar-mask selected">
                     <div className="simplebar-offset selected" style={{ right: '0px', bottom: '0px' }}>
                       <div className="simplebar-content-wrapper selected" tabIndex="0" role="region"   aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden' }}>
                        <div className="simplebar-content selected" style={{ padding: '0px 24px' }}>
                          <ul id="sidebarnav" className="in">
                            <li className="sidebar-item ">
                              <a className="sidebar-link " href="/userdashboard" aria-expanded="false">
                                <span>
                                  <i className="ti ti-layout-dashboard"></i>
                                  </span>
                                  <span className="hide-menu">Dashboard</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                               <a className="sidebar-link" href="/appliedcourses" aria-expanded="false">
                                  <span>
                                    <i className="ti ti-list-numbers"></i>
                                  </span>
                                  <span className="hide-menu">Applied Courses</span>
                                </a>
                             </li>
                              <li className="sidebar-item">
                                  <a className="sidebar-link" href="/fees" aria-expanded="false">
                                      <span>
                                        <i className="">₹</i>
                                      </span>
                                      <span className="hide-menu">Fees Structure</span>
                                   </a>
                               </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
             </nav>
          </div>
       </aside>
       <div className="page-wrapper mini-sidebar" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="mini-sidebar" data-sidebar-position="fixed" data-header-position="fixed">
        <div className="body-wrapper">
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href>
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-icon-hover" href>
                <i className="ti ti-bell-ringing"></i>
                <div className="notification bg-primary rounded-circle"></div>
              </a>
            </li>
          </ul>
              <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <p target="_blank" className="btn mt-3 btn-warning">{std_email}</p>
                  <li className="nav-item dropdown">
                <a className="nav-link nav-icon-hover" href id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={`https://admin.gayatriinfotech.in/img/${image}`} alt="" width="50" height="45" className="rounded-circle" />
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div className="message-body">
                  <a href="/studentprofile" className="d-flex align-items-center gap-2 dropdown-item" style={{ fontSize: '20px', padding: '10px 20px' }}>
                       <i className="ti ti-user fs-6" style={{ marginRight: '10px' }}></i>
                       <p className="mb-0 fs-3" style={{ margin: '0' }}>My Profile</p>
                    </a>
                     <a href="/" className="btn btn-outline-warning mx-3 mt-2 d-block" style={{ fontSize: '16px', padding: '10px 20px' }}>Index</a>
                  </div>
                </div>
              </li>
              
                </ul>
              </div>
            </nav>
          </header>
          
        
         <br/><br/><br/>
    <div className="card w-100">
      <div className="card-body p-4">
            
        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="table-responsive">
          <a
                          className="btn mt-3 btn-warning"
                          href={`/updatestudent/${id}`}
                          onClick={() => dispatch(getData(id))}
                        >
                          Update Profile
                        </a>
          <br/><br/>
          <table className="table table-bordered text-nowrap mb-0 align-middle">
      
  <tbody >
    <tr>
      <th className="border-bottom-0">Name</th>
      <td className="border-bottom-0">{name}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Email</th>
      <td className="border-bottom-0">{email}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Photo</th>
      <td className="border-bottom-0"> <img
                          src={`https://admin.gayatriinfotech.in/img/${photo}`}
                          alt="#"   style={{
                            width: "30%"  
                          }}/></td>
    </tr>
    <tr>
      <th className="border-bottom-0">Phone</th>
      <td className="border-bottom-0">{phone}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">DOB</th>
      <td className="border-bottom-0">{DOB}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Gender</th>
      <td className="border-bottom-0">{gender}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Parents Name</th>
      <td className="border-bottom-0">{parents_name} </td>
    </tr>
    <tr>
      <th className="border-bottom-0">Parents Phone</th>
      <td className="border-bottom-0">{parents_phone}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Parents Occupation</th>
      <td className="border-bottom-0">{parents_occupation}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">College Type</th>
      <td className="border-bottom-0">{college_type}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">College Name</th>
      <td className="border-bottom-0">{college_name} </td>
    </tr>
    <tr>
      <th className="border-bottom-0">Degree</th>
      <td className="border-bottom-0">{degree}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Passout Year</th>
      <td className="border-bottom-0">{passout_year}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">University Name</th>
      <td className="border-bottom-0"> {university_name}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Start Time</th>
      <td className="border-bottom-0"> {start_time}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">End Time</th>
      <td className="border-bottom-0"> {end_time}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Password</th>
      <td className="border-bottom-0">{password}</td>
    </tr>
    <tr>
      <th className="border-bottom-0">Address</th>
      <td className="border-bottom-0">{address}</td>
    </tr>
  </tbody>

</table>

          </div>
        </div>
      </div>
  

         </div>
          <div className="py-6 px-6 text-center">
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default StudentProfile