import React, { useEffect } from 'react';
import DashBoardIndex from './DashBoardIndex';
import { fetchDashboardData } from '../Slice/slice';
import { useDispatch, useSelector } from 'react-redux';
function DashboardHeader() {
  const std_email = localStorage.getItem("email");
  const image = localStorage.getItem("photo");
  const std_id = localStorage.getItem("stud_id");
  const { ApplyCourseCount,paidFees,ActiveCourseCount,SumFees } = useSelector(state => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboardData({ id: std_id }));
  }, [dispatch, std_id]);
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
                  <a href={`/studentprofile/${std_id}`} className="d-flex align-items-center gap-2 dropdown-item" style={{ fontSize: '20px', padding: '10px 20px' }}>
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
          <div className="row">
              <div className="col">

                <div className="card overflow-hidden border border-warning shadow">
                  <div className="card-body p-3">
                    <h5 className="card-title mb-9 fw-semibold">Applied Courses</h5>
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h4 className="fw-semibold mb-3">{ApplyCourseCount}</h4>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="col">

                <div className="card overflow-hidden border border-warning shadow">
                  <div className="card-body p-3">
                    <h5 className="card-title mb-9 fw-semibold">Active Courses</h5>
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h4 className="fw-semibold mb-3">{ActiveCourseCount}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card overflow-hidden border border-warning shadow">
                  <div className="card-body p-3">
                    <h5 className="card-title mb-9 fw-semibold">Total Fees</h5>
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h4 className="fw-semibold mb-3">{SumFees}₹</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card overflow-hidden border border-warning shadow">
                  <div className="card-body p-3">
                    <h5 className="card-title mb-9 fw-semibold">Paid Fees</h5>
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h4 className="fw-semibold mb-3">{paidFees} ₹</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">

                <div className="card overflow-hidden border border-warning shadow">
                  <div className="card-body p-3">
                    <h5 className="card-title mb-9 fw-semibold">Remaining Fees</h5>
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h4 className="fw-semibold mb-3">{SumFees-paidFees} ₹</h4>
                      </div>
                    </div>
                  </div>
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

export default DashboardHeader;
