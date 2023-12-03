import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//To come back later
const API_BASE_URL = "http://localhost:7150";

export const signUp = createAsyncThunk(
    "auth/sign-up",
    async({studentNumber, password}, {rejectWithValue}) => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          const res = await axios.post(
            `${API_BASE_URL}/sign-up`,
            { studentNumber: studentNumber, password: password },
            config
          );

        } catch (err) {
            if(err.response && err.response.data.message){
                return rejectWithValue(err.response.data.message)
            }else{
                return rejectWithValue(err.message)
            }
        }
    }
)

export const signIn = createAsyncThunk(
  "auth/sign-in",
  async({studentNumber, password}, {rejectWithValue}) => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const res = await axios.post(
          `${API_BASE_URL}/sign-in`,
          { studentNumber: studentNumber, password: password },
          config
        );

        const token = res.data;
         localStorage.setItem("token", token);
         return token;

      } catch (err) {
          if(err.response && err.response.data.message){
              return rejectWithValue(err.response.data.message)
          }else{
              return rejectWithValue(err.message)
          }
      }
  }
)

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialStateValue = {
    user: null,
    token: token,
    error: null,
    pending: false,
    fulfilled: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {
      logout: (state) => {
        localStorage.removeItem("token");
        state.user = null;
        state.token = null;
      },
      setUser: (state, {payload}) => {
        state.value.user = payload;
      },
    },
    extraReducers: {
      [signIn.pending]: (state) => {
      },
      [signIn.fulfilled] : (state, {payload}) => {
        state.value.token = payload;
        //state.value.user = ... 
      },
      [signIn.rejected] : (state, {payload}) => {

      }
    }
})

export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;