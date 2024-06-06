
import About from './Components/About';
import Home from './Components/home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Courses from './Components/Courses';
import Services from './Components/Services';
import Team from './Components/Team';
import Blog from './Components/Blog';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import CourseDetails from './Components/CourseDetails';
import DashboardHeader from './Components/DashboardHeader';
import AppliedCourses from './Components/AppliedCourses';
import FeeStructure from './Components/FeeStructure';
import StudentProfile from './Components/StudentProfile';
import StudentProfileUpdate from './Components/StudentProfileUpdate';

function App() {
  return (
    <>
    <BrowserRouter>
  
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/courses" element={<Courses/>}/>
           <Route path="/services" element={<Services/>}/>
           <Route path="/review" element={<Review/>}/>
           <Route path="/team" element={<Team/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
           <Route path="/userdashboard" element={<DashboardHeader/>}/>
           <Route path="/appliedcourses" element={<AppliedCourses/>}/>
           <Route path="/fees" element={<FeeStructure/>}/>
           <Route path="/studentprofile/:id" element={<StudentProfile/>}/>
           <Route path="/updatestudent/:id" element={<StudentProfileUpdate/>}/>
        </Routes>
   
    </BrowserRouter>

    </>
  );
}

export default App;
