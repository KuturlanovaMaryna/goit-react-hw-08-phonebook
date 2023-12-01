import { createSlice} from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchAllContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, thunkApi) => {
//     try {
//       const { data } = await axios.get(`https://655e44c19f1e1093c59ad4be.mockapi.io/contacts`)
//       console.log('data:',data)
//       return data
//     } catch (err) {
     
//       return thunkApi.rejectWithValue(err.message)
//     }
//   }
// )

// export const fetchAddContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkApi) => {
//     try {
//       const { data } = await axios.post(`https://655e44c19f1e1093c59ad4be.mockapi.io/contacts/`, contact);
//       return data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkApi) => {
//     try {
//       const { data } = await axios.delete(`https://655e44c19f1e1093c59ad4be.mockapi.io/contacts/${contactId}`);
//       return data;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.message);
//     }
//   }
// )

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

})
// Редюсер слайсуtasksSlice
export const authReducer = authSlice.reducer;



