import React from 'react'
import { userlogin,setEmail,setPassword } from '../Slice/RegisterSlice'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
function Login() {
  const {  email,password} = useSelector((state) => state.Registeration);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    dispatch(userlogin(formData));
  };
  return (
    <div>
      <Navbar/>
    <br/>
  <br/>
  <div className="breadcrumbs d-flex align-items-center"
 style={{ backgroundImage: "url('img/carousel-1.jpg')" }}>
    <div className="container position-relative d-flex flex-column align-items-center">
      <h2>Login  </h2>
      <ol className="justify-content-center pt-2">
        <li><a href="/">Home</a></li>
        <li>Login</li>
      </ol>
    </div>
  </div>
  <div className="d-flex align-items-center justify-content-center w-100" style={{marginTop: "5%",marginBottom: "5%"}}>
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-4 col-xxl-3">
                        <div className="card mb-0">
                            <div className="card-body">
                                <div className="text-center">
                                 
                                    <h2>Login</h2>
                                </div>
                           
                                <form  className="row" onSubmit={handleSubmit}>
                                     <div className="mb-2">
                                        <label for="">Email ID</label>
                                        <input type="text" className="form-control mb-3" id="loginName" name="std_email" placeholder="Email_ID" onChange={(e) => dispatch(setEmail(e.target.value))}/>
                                        <small className="" style={{color:"red"}}></small>
                                    </div>
                                    <div className="mb-2">
                                        <label for="">Password</label>
                                        <input type="password" className="form-control mb-3" id="loginPassword" name="std_password" placeholder="Password" onChange={(e) => dispatch(setPassword(e.target.value))}/>
                                        <small className="" style={{color:"red"}}></small>
                                    </div>
                                    <div className="" >
                                        <button type="submit"style={{backgroundColor:"#e4791d"}} className="btn btn-sm btn-warning text-center w-100 py-8 fs-4 mb-4 rounded-2">LOGIN</button>

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

export default Login