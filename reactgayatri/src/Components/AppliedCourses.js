  import React, { useEffect } from 'react'
  import DashBoardIndex from './DashBoardIndex';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchAppliedCoursesData } from '../Slice/slice';

  function AppliedCourses() {
    const { applied_courses} = useSelector((state) => state.rootReducer);
    const dispatch = useDispatch();
    const std_email = localStorage.getItem("email");
    const image = localStorage.getItem("photo");
    const std_id = localStorage.getItem("stud_id");
 
    const data = {
      id:std_id,
    };
    console.log(data)
    useEffect(() => {
      dispatch(fetchAppliedCoursesData(data));
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    function calculateEndDate(startDate, courseDuration) {
      const countMonths = parseInt(courseDuration.match(/\d+/)[0]); // Extracting numeric value from duration string
      const start_date = new Date(startDate);
      const end_date = new Date(start_date.setMonth(start_date.getMonth() + countMonths));
      return end_date.toISOString().slice(0, 10);
    }
    return (
      <div>
        <div className="page-wrapper mini-sidebar" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="mini-sidebar" data-sidebar-position="fixed" data-header-position="fixed">

  <DashBoardIndex/>
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
                    <a href={`/studentprofile/${std_id}`}  className="d-flex align-items-center gap-2 dropdown-item" style={{ fontSize: '20px', padding: '10px 20px' }}>
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
            
          
            <div className="container-fluid">
      <div className="card w-100">
        <div className="card-body p-4">
                  <h5 className="card-title fw-semibold mb-4">Enrolled Course Table</h5>
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0 align-middle">
                <thead className="text-dark fs-4">
                  <tr className="text-center">
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Sr No</h6>
                    </th>
                  
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Course Name </h6>
                    </th>
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Duration</h6>
                    </th>
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Total Fee</h6>
                    </th>
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Status</h6>
                    </th>
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Batch Time</h6>
                    </th>
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">Start Date</h6>
                    </th>
                    <th className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">End Date</h6>
                    </th>
                  </tr>
                </thead>
              
                <tbody >
                {applied_courses &&
    applied_courses.map((row,index) => (
                                  <tr key={index}>
                                  <td className="border-bottom-0 text-center">{index + 1}</td>
                              <td className="border-bottom-0">{row.course_name}</td>
                              <td className="border-bottom-0">{row.duration}</td>
                              <td className="border-bottom-0">{row.price}</td>
                              <td className="border-bottom-0">{row.status}</td>
                              <td className="border-bottom-0">{row.batch_time !== null ? row.batch_time : "No Batch Time is Available"}</td>
                              <td className="border-bottom-0">{row.active_date ? row.active_date : <span className="blink btn btn-sm btn-warning" style={{ color: 'black', fontWeight: 'bolder', fontSize: '16px' }}>Inactive</span>}</td>
                              <td className="border-bottom-0">{row.active_date ? calculateEndDate(row.active_date, row.duration) : <span className="blink btn btn-sm btn-warning" style={{ color: 'black', fontWeight: 'bolder', fontSize: '16px' }}>Inactive</span>}</td>
                          
                  </tr>
                    ))
                  } 
                                </tbody>
                              
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
          
        
        </div>
      </div>
    )
  }

  export default AppliedCourses