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
          console.log(res)
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
        console.log(err)
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
    token: token
}

const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {
      setUser: (state, {payload}) => {
        state.value.user = payload;
      }
    },
    extraReducers: {
      [signIn.fulfilled] : (state, {payload}) => {
        console.log(state.value.token, payload)
        state.value.token = payload;
      }
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;