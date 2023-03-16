import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users : [],
    error:null,
    isLoading:false,
}

export const addUser = createAsyncThunk(
    "addUser",
    async(newuser, thunk) => {
        try{
            await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users`,newuser)
            return thunk.fulfillWithValue(newuser)
        }catch(error){
            alert('아이디가 이미 존재합니다.')
            return thunk.rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers:{
        [addUser.fulfilled] : (state, action) => {
            state.users = [...state.users, action.payload]
            document.location.reload('/');
        }
    }
})

export default userSlice.reducer;