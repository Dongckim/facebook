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
            // const { data } = await axios.get(`${process.env.REACT_APP_COMMENTS}`)
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/comments`)
            return thunk.fulfillWithValue(data)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const addList = createAsyncThunk(
    "addList",
    async (newList, thunk) => {
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/comments`,newList)
            return thunk.fulfillWithValue(newList)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const deleteList = createAsyncThunk(
    "deleteList",
    async (listid, thunk) => {
        try{
            await axios.delete(`${process.env.REACT_APP_SERVER_KEY}/comments/${listid}`)
            return thunk.fulfillWithValue(listid)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const updateList = createAsyncThunk(
    "updateList",
    async(listid, thunk) => {
        try{
            await axios.patch(`${process.env.REACT_APP_SERVER_KEY}/comments/${listid.id}`, listid)
            return thunk.fulfillWithValue(listid)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers:{},
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
        },
        [addList.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.content = [...state.content, action.payload]
        },
        [deleteList.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.content = state.content.filter((item) => action.payload !== item.id)
        },
        [updateList.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.content = state.content.map((item) => {
                if(item.id == action.payload.id){
                    item.body = action.payload.body
                    return item
                }else{
                    return item
                }
            })
        }
    }
})

export default contentSlice.reducer;