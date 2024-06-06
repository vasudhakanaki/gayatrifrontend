import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const RegisterUser = createAsyncThunk('RegisterUser', async (data) => {
  try {
  const response = await axios.post('https://admin.gayatriinfotech.in/api/register', {
    name:data.name,
    email:data.email,
    photo:data.photo,
    phone:data.phone,
    DOB:data.DOB,
    gender:data.gender,
    parents_name:data.parents_name,
    parents_phone:data.parents_phone, 
    parents_occupation:data.parents_occupation,
    college_type:data.college_type,
    college_name:data.college_name,
    degree:data.degree,
    passout_year:data.passout_year,
    university_name:data.university_name,
    start_time:data.start_time,
    end_time:data.end_time,
    password:data.password,
    address:data.address,
  },
      { headers: { 'Content-Type': 'multipart/form-data' }, }
  );
  if ( response.data.message) {
    alert(response.data.message);

  } else {
    alert("An unexpected response was received");
  }
  
} catch (error) {
  // Handle error if needed
  console.error("Error importing data:", error);
  throw error; // Rethrow the error to be caught by the component
}
});
export const userlogin = createAsyncThunk("userlogin", async (formData) => {
  try {
    const response = await axios.post(
      "https://admin.gayatriinfotech.in/api/login",
      formData
    );
    if (response.data.email && response.data.message && response.data.id && response.data.photo && response.data.token) {
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("stud_id", response.data.id);
      localStorage.setItem("photo", response.data.photo);
      localStorage.setItem("token", response.data.token);
      alert(response.data.message);
    } else {
      alert("Check Your Email and Password");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert("You Dont have Account Please Register");
    throw error; 
  }
});
export const fetchStudentData = createAsyncThunk("fetchStudentData", async (data) => {
  try {
    console.log(data);

    const response = await axios.get(`https://admin.gayatriinfotech.in/api/profile/?id=${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw error;
  }
});
export const getData = createAsyncThunk("getData", async (id) => {
  const res = await axios.get("https://admin.gayatriinfotech.in/api/studentedit/" + id);
  console.log(res.data)
  return res.data;
});
export const updateData = createAsyncThunk("updateData", async (data) => {
  const res = await axios.post(
    "https://admin.gayatriinfotech.in/api/studentupdate/" + data.id,
    {
      _method: "PUT",
      name:data.name,
    email:data.email,
    photo:data.photo,
    phone:data.phone,
    DOB:data.DOB,
    gender:data.gender,
    parents_name:data.parents_name,
    parents_phone:data.parents_phone, 
    parents_occupation:data.parents_occupation,
    college_type:data.college_type,
    college_name:data.college_name,
    degree:data.degree,
    passout_year:data.passout_year,
    university_name:data.university_name,
    start_time:data.start_time,
    end_time:data.end_time,
    password:data.password,
    address:data.address,
    },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  if (res.data.msg ) {
    alert(res.data.msg);
  }
  return res;
});
const initialState = {
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
  loading: false, 
  
};
export const Registeration = createSlice({
  name: "Registeration",
  initialState,
  reducers: {
    setName: (state, payload) => {
      state.name = payload.payload;
  },
  setEmail: (state, payload) => {
    state.email = payload.payload;
},
setImage: (state, payload) => {
  state.photo = payload.payload;
},
setPhone: (state, payload) => {
  state.phone = payload.payload;
},
setDOB: (state, payload) => {
  state.DOB = payload.payload;
},
setGender: (state, payload) => {
  state.gender = payload.payload;
},
setParentsName: (state, payload) => {
  state.parents_name = payload.payload;
},
setParentsPhone: (state, payload) => {
  state.parents_phone = payload.payload;
},
setParentsOccupation: (state, payload) => {
  state.parents_occupation = payload.payload;
},
setCollegeType: (state, payload) => {
  state.college_type = payload.payload;
},
setCollegeName: (state, payload) => {
  state.college_name = payload.payload;
},
setDegree: (state, payload) => {
  state.degree = payload.payload;
},
setPassoutYear: (state, payload) => {
  state.passout_year = payload.payload;
},
setUniversityName: (state, payload) => {
  state.university_name = payload.payload;
},
setStartTime: (state, payload) => {
  state.start_time = payload.payload;
},
setEndTime: (state, payload) => {
  state.end_time = payload.payload;
},
setPassword: (state, payload) => {
  state.password = payload.payload;
},
setAddress: (state, payload) => {
  state.address = payload.payload;
},
logout(state) {
  state.isLoggedIn = false;
  alert("You have Logged Out");
  localStorage.removeItem("email");
  localStorage.removeItem("stud_id");
  localStorage.removeItem("photo");
  localStorage.removeItem("token");
  window.location.href = "/";
},
  },
    extraReducers: {
        
      [RegisterUser.pending]: (state) => {
        state.loading = true;
      },
      [RegisterUser.fulfilled]: (state) => {
        state.loading = false;
       window.location.href='/login';
      },
      [userlogin.pending]: (state) => {
        state.loading = true;
      },
      [userlogin.fulfilled]: (state) => {
        state.loading = false;
       window.location.href='/courses';
      },
      [fetchStudentData.pending]: (state) => {
        state.loading = true;
    },
    [fetchStudentData.fulfilled]: (state, action) => {
        state.loading = false;
       state.name=action.payload.name;
    state.email=action.payload.email;
    state.photo=action.payload.photo;
    state.phone=action.payload.phone;
    state.DOB=action.payload.DOB;
    state.gender=action.payload.gender;
    state.parents_name=action.payload.parents_name;
    state.parents_phone=action.payload.parents_phone; 
    state.parents_occupation=action.payload.parents_occupation;
    state.college_type=action.payload.college_type;
    state.college_name=action.payload.college_name;
    state.degree=action.payload.degree;
    state.passout_year=action.payload.passout_year;
    state.university_name=action.payload.university_name;
    state.start_time=action.payload.start_time;
    state.end_time=action.payload.end_time;
    state.password=action.payload.password;
    state.address=action.payload.address;
  
    },
    [getData.pending]: (state) => {
      state.loading = true;
  },
  [getData.fulfilled]: (state, action) => {
      state.loading = false;
     state.name=action.payload.name;
  state.email=action.payload.email;
  state.photo=action.payload.photo;
  state.phone=action.payload.phone;
  state.DOB=action.payload.DOB;
  state.gender=action.payload.gender;
  state.parents_name=action.payload.parents_name;
  state.parents_phone=action.payload.parents_phone; 
  state.parents_occupation=action.payload.parents_occupation;
  state.college_type=action.payload.college_type;
  state.college_name=action.payload.college_name;
  state.degree=action.payload.degree;
  state.passout_year=action.payload.passout_year;
  state.university_name=action.payload.university_name;
  state.start_time=action.payload.start_time;
  state.end_time=action.payload.end_time;
  state.password=action.payload.password;
  state.address=action.payload.address;

  },
  [updateData.pending]: (state) => {
    state.loading = true;
  },
  [updateData.fulfilled]: (state) => {
    state.loading = false;
window.location.href='/userdashboard';
  },
     
},

    
  })
  export const {setAddress,setCollegeName,setCollegeType,setDOB,setDegree,setEmail,setEndTime,setGender,setImage,setName,setParentsName,setParentsOccupation,setParentsPhone,setPassoutYear,setPassword,setPhone,setStartTime,setUniversityName ,logout } = Registeration.actions;
  
  export default Registeration.reducer;