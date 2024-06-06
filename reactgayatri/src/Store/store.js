import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from  "../Slice/slice";
import { Registeration } from "../Slice/RegisterSlice";


export const store = configureStore({
  reducer: {
    rootReducer: rootReducer.reducer, 
    Registeration:Registeration.reducer,
  },
});
