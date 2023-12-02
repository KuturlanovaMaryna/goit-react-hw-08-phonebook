import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { isAnyOf } from "@reduxjs/toolkit";

// axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const loginThunk = createAsyncThunk(
  'auth/Login',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post(`https://connections-api.herokuapp.com/users/login`, formData)
      setToken(data.token);
      return data
    } catch (err) {
     
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const registerThunk = createAsyncThunk(
  'auth/Register',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post(`https://connections-api.herokuapp.com/users/signup`, formData)
      setToken(data.token);
      return data
    } catch (err) {
     
      return thunkApi.rejectWithValue(err.message)
    }
  }
)


const initialState = {
    isAuth:false,
    isLoading: false,
    error: null,
    token:null,
    userData: null,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    
    },
     extraReducers: builder =>
         builder
        .addCase(loginThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isAuth = true;
            state.token = payload.token;
            state.userData = payload.user;
        })
        .addCase(registerThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isAuth = true;
            state.token = payload.token;
            state.userData = payload.user;
      })
       
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          
        ),
        state => {
           state.isLoading = true;
           state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected
        ),
          (state, { payload }) => {
              state.isLoading = false;
              state.error = payload;
          }
      ),
})
// Редюсер слайсуtasksSlice
export const authReducer = authSlice.reducer;



