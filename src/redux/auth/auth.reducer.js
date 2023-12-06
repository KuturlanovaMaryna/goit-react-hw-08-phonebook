import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { isAnyOf } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {

  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData)
      setToken(data.token);
      return data
    } catch (err) {
     
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData)
      setToken(data.token);
      return data
    } catch (err) {
     
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkApi.rejectWithValue('Unable to fetch user'); 
    }
    try {
      const { data } = await instance.get('/users/current');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  // {
  //   condition: (_, thunkApi) => {
  //     const state = thunkApi.getState();
  //     const token = state.auth.token;
  //     if (!token) return false;
  //     return true;
  //   },
  // }
);
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/users/logout')
    
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
    isRefreshing: false,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
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
            
            state.userData = payload;
        })
         .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
           state.userData = payload;
            state.isRefreshing = false;
         })
        .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
        })
        .addCase(  refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
         .addCase(logoutThunk.fulfilled, () => {
        return initialState
      })
       
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          logoutThunk.pending,
          
        ),
        state => {
           state.isLoading = true;
           state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
        
          logoutThunk.rejected,
        ),
          (state, { payload }) => {
              state.isLoading = false;
              state.error = payload;
          }
      ),
})

export const authReducer = authSlice.reducer;



