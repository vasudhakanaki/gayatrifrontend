import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser,setAddress,setCollegeName,setCollegeType,setDOB,setDegree,setEmail,setEndTime,setGender,setImage,setName,setParentsName,setParentsOccupation,setParentsPhone,setPassoutYear,setPassword,setPhone,setStartTime,setUniversityName } from '../Slice/RegisterSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import * as Yup from 'yup';

function Register() {
  const { name, email,photo,phone,DOB,gender,parents_name,parents_occupation,parents_phone,college_name,college_type,degree,passout_year,password,university_name,start_time,end_time,address} = useSelector((state) => state.Registeration);
  const dispatch = useDispatch();
  const [showTimeFields, setShowTimeFields] = useState(false);
  const handleCollegeTypeChange = (e) => {
    const selectedCollegeType = e.target.value;
    // Dispatch action to update college type in Redux store
    dispatch(setCollegeType(selectedCollegeType));
    // Disable time fields if college type is "Pass Out"
    setShowTimeFields(selectedCollegeType === 'In College');
    
  };
  const [validationErrors, setValidationErrors] = useState({
    name:"",
    email:"",
    photo:"",
    phone:"",
    DOB:"",
    gender:"",
    parents_name:"",
    parents_phone:"", 
    parents_occupation:"",
    college_type:"",
    college_name:"",
    degree:"",
    passout_year:"",
    university_name:"",
    start_time:"",
    end_time:"",
    password:"",
    address:"",
  });
  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(/^[a-zA-Z ]+$/, 'Name must contain only alphabets and spaces'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .matches(/^[a-z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address format'),
    photo: Yup.mixed()
      .required('Photo is required')
      .test('fileType', 'Unsupported file format', (value) => {
        return value && ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type);
      }),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[6-9]\d{9}$/, 'Invalid phone number'),
    DOB: Yup.string().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    parents_name: Yup.string()
      .required("Parent's Name is required")
      .matches(/^[a-zA-Z ]+$/, "Parent's Name must contain only alphabets and spaces"),
    parents_phone: Yup.string()
      .required("Parent's Phone is required")
      .matches(/^[6-9]\d{9}$/, "Invalid parent's phone number"),
    parents_occupation: Yup.string()
      .required("Parent's Occupation is required")
      .matches(/^[a-zA-Z ]+$/, "Parent's Occupation must contain only alphabets and spaces"),
    college_type: Yup.string().required('College Type is required'),
    college_name: Yup.string()
      .required('College Name is required')
      .matches(/^[a-zA-Z ]+$/, 'College Name must contain only alphabets and spaces'),
    degree: Yup.string().required('Degree is required'),
    passout_year: Yup.string().required('Passout Year is required'),
    university_name: Yup.string()
      .required('University Name is required')
      .matches(/^[a-zA-Z ]+$/, 'University Name must contain only alphabets and spaces'),
    password: Yup.string().required('Password is required').min(5, 'Password must be at least 5 characters'),
    address: Yup.string().required('Address is required'),
  });
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name, email, photo, phone, DOB, gender, parents_name, parents_phone, parents_occupation, college_type, college_name, degree, passout_year, university_name, start_time, end_time, password, address,
    };

    try {
      await schema.validate(data, { abortEarly: false });
      dispatch(RegisterUser(data));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach(err => {
          newErrors[err.path] = err.message;
        });
        setValidationErrors(newErrors);
      } else {
        console.error('Validation error:', error);
      }
    }
  };
    const handleGenderChange = (e) => {
    dispatch(setGender(e.target.value));
  };

  return (
    <div>
      <Navbar/>
      <br/>
  <br/>
  <div className="breadcrumbs d-flex align-items-center"
 style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
    <div className="container position-relative d-flex flex-column align-items-center">
      <h2>Registration  </h2>
      <ol className="justify-content-center pt-2">
        <li><a href="/">Home</a></li>
        <li>Register</li>
      </ol>
    </div>
  </div>
  <div className="container" style={{marginTop: "5%",marginBottom:"5%"}}>
    <div className="row justify-content-center w-100">
      <div className="col-md-12">
        <div className="card mb-0" style={{width:"90%",margin:"auto", padding: "20px"}}>
          <div className="card-body">
         
            <form onSubmit={handleSubmit} >
              <input type="hidden" name="_token" value="2vlgmTsTfGHPmMRSKjmgE6xePaAYBM3Zm0Src8ya" />
              <div className="col-md-12">

                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-2 ">
                    <label className="ml-3 sm-3" style={{color: "black"}}>Name</label>
                    <input type="text"onChange={(e) => dispatch(setName(e.target.value))} className="form-control" id="std_name" placeholder="Name" />
                 {validationErrors.name && <p style={{color:"red"}}  className="error-msg">{validationErrors.name}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2 ">
                    <label className="ml-3" style={{color: "black"}}>Email</label>
                    <input type="email"onChange={(e) => dispatch(setEmail(e.target.value))} className="form-control" id="std_email"  placeholder="Email"
                      />
                 {validationErrors.email && <p style={{color:"red"}}  className="error-msg">{validationErrors.email}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color:"black"}}>Upload Your Profile Photo</label>
                    <input type="file"  onChange={(e) => dispatch(setImage(e.target.files[0]))} className="form-control" id="std_profile" />
                 {validationErrors.photo && <p style={{color:"red"}}  className="error-msg">{validationErrors.photo}</p>}
                  </div>

                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>Phone No</label>
                    <input type="tel" onChange={(e) => dispatch(setPhone(e.target.value))}className="form-control"  id="std_phoneno" 
                      placeholder="Phone Number" />
                 {validationErrors.phone && <p style={{color:"red"}}  className="error-msg">{validationErrors.phone}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>Date of Birth</label>
                    <input type="date"onChange={(e) => dispatch(setDOB(e.target.value))} className="form-control std_dobdate" id="std_dobdate" 
                      placeholder="Date Of Birth" />
                 {validationErrors.DOB && <p style={{color:"red"}}  className="error-msg">{validationErrors.DOB}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2 mt-1  form-group">
    <label className="ml-3" style={{color: "black"}}>Gender</label>
    <div className="mt-1" onChange={handleGenderChange}>
        &emsp;<input type="radio" name="gender" value="Male" />Male
        &emsp;<input type="radio" name="gender" value="Female" />Female
    </div>
 {validationErrors.gender && <p style={{color:"red"}}  className="error-msg">{validationErrors.gender}</p>}
</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>ParentsName</label>
                    <input type="text" onChange={(e) => dispatch(setParentsName(e.target.value))}className="form-control" id="std_parentsname" 
                      placeholder="Enter Parent's Name" />
                 {validationErrors.parents_name && <p style={{color:"red"}}  className="error-msg">{validationErrors.parents_name}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color:"black"}}>Parents Phone </label>
                    <input type="tel" onChange={(e) => dispatch(setParentsPhone(e.target.value))} className="form-control" id="std_parentsno" 
                      placeholder="Enter Parent's Number" />
                 {validationErrors.parents_phone && <p style={{color:"red"}}  className="error-msg">{validationErrors.parents_phone}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>Parents occupation</label>
                    <input type="text"  onChange={(e) => dispatch(setParentsOccupation(e.target.value))}className="form-control" id="std_parentsoccupation" 
                      placeholder="Enter Parrent Occupation" />
                 {validationErrors.parents_occupation && <p style={{color:"red"}}  className="error-msg">{validationErrors.parents_occupation}</p>}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>College Type</label>
                    <select className="form-control collegetype" id="std_clgname" 
                      placeholder="College Name" onChange={handleCollegeTypeChange}>
                      <option >Select College Type</option>
                      <option >Pass Out</option>
                      <option >In College</option>
                    </select>
                 {validationErrors.college_type && <p style={{color:"red"}}  className="error-msg">{validationErrors.college_type}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>College Name</label>
                    <input type="text"  onChange={(e) => dispatch(setCollegeName(e.target.value))}className="form-control" 
                      placeholder="College Name" />
                 {validationErrors.college_name && <p style={{color:"red"}}  className="error-msg">{validationErrors.college_name}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>Select Your Degree</label>
                    <select onChange={(e) => dispatch(setDegree(e.target.value))} id="std_degree" className="form-control" >
                      <option >---------Please Select Degree---------</option>
                      <option value="BE">BE</option>
                      <option value="B.tech">B.tech</option>
                      <option value="MCA">MCA</option>
                      <option value="BCA">BCA</option>
                      <option value="ME">ME</option>
                      <option value="M.tech">M.tech</option>
                      <option value="Bsc">Bsc</option>
                      <option value="Bsc">Bcs</option>
                      <option value="Msc">Msc</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Others">Others</option>
                    </select>
                 {validationErrors.degree && <p style={{color:"red"}}  className="error-msg">{validationErrors.degree}</p>}
                  </div>

                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-2 std_passoutyear">
                    <label className="ml-3" style={{color: "black"}}>Degree Passout Year </label>
                    <input type="number" onChange={(e) => dispatch(setPassoutYear(e.target.value))} className="form-control " id="std_passoutyear"
                      placeholder="YYYY" />
                 {validationErrors.passout_year && <p style={{color:"red"}}  className="error-msg">{validationErrors.passout_year}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>University Name</label>
                    <input type="text"onChange={(e) => dispatch(setUniversityName(e.target.value))} className="form-control" 
                      placeholder="Enter University" />
                 {validationErrors.university_name && <p style={{color:"red"}}  className="error-msg">{validationErrors.university_name}</p>}
                  </div>
                  {showTimeFields && (
        <>
                  <div className="col-md-4 col-sm-12 mb-2 starttime">
                    <label className="ml-3" style={{color: "black"}}>College Start time</label>
                    <input type="time" onChange={(e) => dispatch(setStartTime(e.target.value))}className="form-control " id="std_clgtimefrom"
                      placeholder="select College Start time" />

                  </div>
                  </>
      )}

                </div>
              </div>
              <div className="col-md-12">
                <div className="row">


                </div>
              </div>
           
              <div className="col-md-12">
                <div className="row">
                {showTimeFields && (
        <>
                  <div className="col-md-4 col-sm-12 mb-2 endtime">
                    <label className="ml-3" style={{color: "black"}}>College end time</label>
                    <input type="time"onChange={(e) => dispatch(setEndTime(e.target.value))} className="form-control " id="std_clgtimeto" 
                      placeholder="enter College end time" />

                  </div>
                  </>
      )}
                  <div className="col-md-4 col-sm-12 mb-2 ">
                    <label className="ml-3" style={{color: "black"}}>Password (Minimum five characters or more)</label>
                    <input type="password"onChange={(e) => dispatch(setPassword(e.target.value))} className="form-control" id="std_password" 
                      placeholder="Enter Password" />
                 {validationErrors.password && <p style={{color:"red"}}  className="error-msg">{validationErrors.password}</p>}
                  </div>
                  <div className="col-md-4 col-sm-12 mb-2">
                    <label className="ml-3" style={{color: "black"}}>Address</label>
                    <textarea type="text" onChange={(e) => dispatch(setAddress(e.target.value))} className="form-control" id="std_address" 
                      placeholder="Address"></textarea>
                     {validationErrors.address && <p style={{color:"red"}}  className="error-msg">{validationErrors.address}</p>}
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 mb-2">
                <button type="submit" id="btnstore"
                  className="btn-sign btn-sm  text-center w-100 py-8 fs-4 mb-4 rounded-2">SIGN UP</button>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                  <a className="text-warning fw-bold ms-2" href="login">Sign In</a>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
    
  )
}

export default Register