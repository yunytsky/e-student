import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//To come back later
const API_BASE_URL = "http://localhost:7150";

export const signup = createAsyncThunk(
    "auth/signup",
    async({studentNumber, password}, {rejectWithValue}) => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          await axios.post(
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

// export const login = createAsyncThunk({

// })

const initialStateValue = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {},
    extraReducers: {}
})

export default authSlice.reducer;