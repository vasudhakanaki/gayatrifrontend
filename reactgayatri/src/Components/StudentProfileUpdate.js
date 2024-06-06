import React, { useEffect } from 'react'
import DashBoardIndex from './DashBoardIndex';
import { useDispatch, useSelector } from 'react-redux';
import { updateData,setAddress,setCollegeName,setCollegeType,setDOB,setDegree,setEmail,setEndTime,setGender,setImage,setName,setParentsName,setParentsOccupation,setParentsPhone,setPassoutYear,setPassword,setPhone,setStartTime,setUniversityName, getData  } from '../Slice/RegisterSlice';
import { useParams } from 'react-router-dom';

function StudentProfileUpdate() {
  const { name, email,photo,phone,DOB,gender,parents_name,parents_occupation,parents_phone,college_name,college_type,degree,passout_year,password,university_name,start_time,end_time,address} = useSelector((state) => state.Registeration);
  const dispatch = useDispatch();

  const std_email = localStorage.getItem("email");
  const image = localStorage.getItem("photo");
 
  const param = useParams();
  var id = param.id;
  console.log(id);
  useEffect(() => {
    
    dispatch(getData(id));
  }, [dispatch, id]);
  const data = {
    id: id,
    name:name,
    email:email,
    photo:photo,
    phone:phone,
    DOB:DOB,
    gender:gender,
    parents_name:parents_name,
    parents_phone:parents_phone, 
    parents_occupation:parents_occupation,
    college_type:college_type,
    college_name:college_name,
    degree:degree,
    passout_year:passout_year,
    university_name:university_name,
    start_time:start_time,
    end_time:end_time,
    password:password,
    address:address,
  };
  console.log(data);
const handleUpdate=(e) => {
  e.preventDefault();
  dispatch(updateData(data));
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
          
          <div className="container-fluid">
  <div className="container-fluid">
    <div className="card w-100">
      <div className="card-body p-4">
        <form method='post' onSubmit={handleUpdate}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control"   onChange={(e) => dispatch(setName(e.target.value))} value={name}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control"   onChange={(e) => dispatch(setEmail(e.target.value))} value={email}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Photo:</label>
                <input type="file" className="form-control"onChange={(e) => dispatch(setImage(e.target.files[0]))}   />
               
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Phone:</label>
                <input type="text" className="form-control"  onChange={(e) => dispatch(setPhone(e.target.value))}   value={phone}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">DOB:</label>
                <input type="text" className="form-control" value={DOB} onChange={(e) => dispatch(setDOB(e.target.value))}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Gender:</label>
                <input type="text" className="form-control" value={gender} onChange={(e) => dispatch(setGender(e.target.value))}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Parents Name:</label>
                <input type="text" className="form-control" value={parents_name}onChange={(e) => dispatch(setParentsName(e.target.value))}   />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Parents Phone:</label>
                <input type="text" className="form-control" value={parents_phone}onChange={(e) => dispatch(setParentsPhone(e.target.value))}   />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Parents Occupation:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setParentsOccupation(e.target.value))}  value={parents_occupation}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">College Type:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setCollegeType(e.target.value))}  value={college_type}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">College Name:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setCollegeName(e.target.value))}  value={college_name}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Degree:</label>
                <input type="text" className="form-control" onChange={(e) => dispatch(setDegree(e.target.value))} value={degree}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Passout Year:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setPassoutYear(e.target.value))}  value={passout_year}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">University Name:</label>
                <input type="text" className="form-control" onChange={(e) => dispatch(setUniversityName(e.target.value))} value={university_name}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Start Time:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setStartTime(e.target.value))}  value={start_time}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">End Time:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setEndTime(e.target.value))}  value={end_time}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="text" className="form-control" onChange={(e) => dispatch(setPassword(e.target.value))} value={password}  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Address:</label>
                <input type="text" className="form-control"onChange={(e) => dispatch(setAddress(e.target.value))}  value={address}  />
              </div>
            </div>

          </div>
          <button className="btn mt-3 btn-warning" type="submit" >Update Profile</button>
        </form>
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

export default StudentProfileUpdate