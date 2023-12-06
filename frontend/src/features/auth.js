import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//To come back later
const API_BASE_URL = "http://localhost:7150";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
const user = localStorage.getItem("user") ? localStorage.getItem(localStorage.getItem("user")) : null;
const user_resident = localStorage.getItem("user_resident") ?  JSON.parse(localStorage.getItem("user_resident") ): null;

const initialStateValue = {
    user: user,
    token: token,
    user_resident: user_resident
  
}

const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {
      doLogout: (state) => {
        state.value.user = null;
        state.value.token = null;
        state.value.user_resident = null;

      },
      doSignIn: (state, {payload}) => {
        state.value.token = payload;
      },
      setUser: (state, {payload}) => {
        state.value.user = payload;
      },
      setUserResident: (state, {payload}) => {
        state.value.user_resident = payload;
      }
    },
    extraReducers: {
    }
})

export const {setUser, doLogout, doSignIn, setUserResident} = authSlice.actions;
export default authSlice.reducer;