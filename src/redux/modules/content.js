import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    content:[],
    error:null,
    isLoading:false,
};

export const getContentsThunk = createAsyncThunk(
    "getContents",
    async (payload, thunk) => {
        try{
            const { data } = await axios.get('http://localhost:4000/comments')
            return thunk.fulfillWithValue(data)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const addList = createAsyncThunk(
    "addList",
    async (newList) => {
        return await axios.post('http://localhost:4000/comments',newList)
    }
);

export const deleteList = createAsyncThunk(
    "deleteList",
    async (listid) => {
        return await axios.delete(`http://localhost:4000/comments/${listid}`)
    }
);

export const updateList = createAsyncThunk(
    "updateList",
    async(listid, action) => {
        return await axios.patch(`http://localhost:4000/comments/${listid}`,action)
    }
)

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers:{
        addComment : (state,action) => {
            state.content = [...state.content, action.payload]
        }
    },
    extraReducers:{
        [getContentsThunk.pending] : (state,action) => {
            state.isLoading = true;
        },
        [getContentsThunk.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.error = false;
            state.content = action.payload
        },
        [getContentsThunk.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {addComment} = contentSlice.actions;
export default contentSlice.reducer;