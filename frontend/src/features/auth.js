import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//To come back later
const API_BASE_URL = "";

const signup = createAsyncThunk(
    "auth/signup",
    async({studentCardNumber, unit, password}, {rejectWithValue}) => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          await axios.post(
            `${API_BASE_URL}/signup`,
            { studentCardNumber, unit, password },
            config
          );
        } catch (err) {
            if(err.response && err.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)

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