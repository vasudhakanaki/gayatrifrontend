  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import axios from "axios";

  export const fetchAboutData = createAsyncThunk("fetchAboutData", async () => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/aboutdisplay");
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });
  export const fetchCourseData = createAsyncThunk("fetchCourseData", async () => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/coursedisplay");
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });
  export const fetchServiceData = createAsyncThunk("fetchServiceData", async () => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/servicedisplay");
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });
  export const fetchBlogData = createAsyncThunk("fetchBlogData", async () => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/blogdisplay");
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });
  export const fetchTeamData = createAsyncThunk("fetchTeamData", async () => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/teamdisplay");
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });
  export const addReviewData = createAsyncThunk('addReviewData', async (data) => {
    const res = await axios.post('https://admin.gayatriinfotech.in/api/reviewinsert', {
        name: data.name,
        review:data.review,
        designation:data.designation,
      
    }
    );
    return res.data;
  
  });
  export const addContactData = createAsyncThunk('addContactData', async (data) => {
    const res = await axios.post('https://admin.gayatriinfotech.in/api/contactinsert', {
        name: data.name,
        email:data.email,
        phone:data.phone,
        message:data.message,
      
    }
    );
    return res.data;
  });
  export const fetchReviewData = createAsyncThunk("fetchReviewData", async () => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/reviewdisplay");
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });

  export const getCourseData = createAsyncThunk("getCourseData", async (id) => {
    const res = await axios.get("https://admin.gayatriinfotech.in/api/courseedit/" + id);
    console.log(res.data);
    return res.data;
   

  });
  export const CourseAdd = createAsyncThunk("CourseAdd", async (formData) => {
    try {
      const response = await axios.post(
        "https://admin.gayatriinfotech.in/api/studentcourseadds",
        formData
      );
      if ( response.data.message) {
        alert(response.data.message);
      } else {
        alert("Course Is Already Added");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while making the request");
      throw error; 
    }
  });
  export const fetchAppliedCoursesData = createAsyncThunk("fetchAppliedCoursesData", async (data) => {
    try {
      const response = await axios.post("https://admin.gayatriinfotech.in/api/applied_courses",data);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error;
    }
  });
  export const fetchFeesData = createAsyncThunk(
    'fetchFeesData',
    async (data) => {
      const response = await axios.get(`https://admin.gayatriinfotech.in/api/fees_structure?id=${data.id}`);
    
      return response.data;
    }
  );
  export const fetchDashboardData = createAsyncThunk(
    'fetchDashboardData',
    async (data) => {
      const response = await axios.get(`https://admin.gayatriinfotech.in/api/student_dashboard?id=${data.id}`);
    console.log(response.data)
      return response.data;
    }
  );
  const initialState = {
    aboutdata: "",
    coursedata:"",
    servicedata:"",
    blogdata:"",
    teamdata:"",
    reviewdata:"",
    name:"",
    email:"",
    phone:"",
    message:"",
    designation:"",
    review:"",
    image:"",
    description:"",
    price:"",
    courseID:"",
    loading: false,
    applied_courses:[], 
    courseData:[],
    paidFees:"",
    ApplyCourseCount:"",
    ActiveCourseCount:"",
    SumFees:"",


  };
  export const rootReducer = createSlice({
    name: "rootReducer",
    initialState,
    
    reducers: {
      setName: (state, payload) => {
        state.name = payload.payload;
    },
    setEmail: (state, payload) => {
      state.email = payload.payload;
  },
  setPhone: (state, payload) => {
    state.phone = payload.payload;
  },
  setMessage: (state, payload) => {
    state.message = payload.payload;
  },
    setDesignation: (state, payload) => {
      state.designation = payload.payload;
  },
  setReview: (state, payload) => {
    state.review = payload.payload;
  },

    },
      extraReducers: {
          
        [fetchAboutData.pending]: (state) => {
            state.loading = true;
        },
        [fetchAboutData.fulfilled]: (state, action) => {
            state.loading = false;
            state.aboutdata = action.payload;

        },
        [fetchCourseData.pending]: (state) => {
          state.loading = true;
      },
      [fetchCourseData.fulfilled]: (state, action) => {
          state.loading = false;
          state.coursedata = action.payload;

      },
    
      [fetchServiceData.pending]: (state) => {
        state.loading = true;
    },
    [fetchServiceData.fulfilled]: (state, action) => {
        state.loading = false;
        state.servicedata = action.payload;

    },
    [fetchBlogData.pending]: (state) => {
      state.loading = true;
  },
  [fetchBlogData.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogdata = action.payload;

  },
  [fetchTeamData.pending]: (state) => {
    state.loading = true;
  },
  [fetchTeamData.fulfilled]: (state, action) => {
    state.loading = false;
    state.teamdata = action.payload;

  },
  [fetchReviewData.pending]: (state) => {
    state.loading = true;
  },
  [fetchReviewData.fulfilled]: (state, action) => {
    state.loading = false;
    state.reviewdata = action.payload;

  },
  [fetchAppliedCoursesData.pending]: (state) => {
    state.loading = true;
  },
  [fetchAppliedCoursesData.fulfilled]: (state, action) => {
    state.loading = false;
    state.applied_courses = action.payload;

  },
  [fetchFeesData.pending]: (state) => {
    state.loading = true;
  },
  [fetchFeesData.fulfilled]: (state, action) => {
    state.loading = false;
    state.courseData = action.payload.courseData; 
        state.paidFees = action.payload.paidFees;
  },
  [fetchDashboardData.pending]: (state) => {
    state.loading = true;
  },
  [fetchDashboardData.fulfilled]: (state, action) => {
    state.loading = false;
    state.ApplyCourseCount = action.payload.ApplyCourseCount;
    state.paidFees = action.payload.paidFees.paid_fees;
    state.ActiveCourseCount = action.payload.ActiveCourseCount;
    state.SumFees = action.payload.SumFees;

  },
  [addReviewData.pending]: (state) => {
    state.loading = true;
  },
  [addReviewData.fulfilled]: (state) => {
    state.loading = false;
  alert('Review Posted');
  },
  [CourseAdd.pending]: (state) => {
    state.loading = true;
  },
  [CourseAdd.fulfilled]: (state) => {
    state.loading = false;
    
  },
  [addContactData.pending]: (state) => {
    state.loading = true;
  },
  [addContactData.fulfilled]: (state) => {
    state.loading = false;
    alert('Message Sent');
  },
  [getCourseData.pending]: (state) => {
    state.loading = true;
  },
  [getCourseData.fulfilled]: (state,action) => {
    state.loading = false;
    state.courseID = action.payload.id;
    state.name = action.payload.course_name;
    state.image = action.payload.image;
    state.price = action.payload.price;
    state.description = action.payload.description;

  },

      }
    })
    export const {  setName, setDesignation,setReview ,setEmail,setMessage,setPhone} = rootReducer.actions;
    
    export default rootReducer.reducer;