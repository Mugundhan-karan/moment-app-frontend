import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react';
import { toast } from 'react-toastify';
import momentService from './momentService';



const initialState = {
    moment: null,
    moments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",


}

//Create new moment
export const createMoment = createAsyncThunk(
    "moments/create",
    async (formData, thunkAPI) => {
        try {
            return await momentService.createMoment
                (formData)
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message) || error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message)


        }
    }
)

//Get Moments
export const getMoments = createAsyncThunk(
    "moments/getAll",
    async (_, thunkAPI) => {
        try {
            return await momentService.getMoments();
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message) || error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message)


        }
    }
)

//Delete a Moment
export const deleteMoment = createAsyncThunk(
    "moments/delete",
    async (id, thunkAPI) => {
        try {
            return await momentService.deleteMoment(id);
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message) || error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message)


        }
    }
)

//Get single moment
export const getMoment = createAsyncThunk(
    "moments/getMoment",
    async (id, thunkAPI) => {
        try {
            return await momentService.getMoment(id);
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message) || error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message)


        }
    }
)

//Update moment
export const updateMoment = createAsyncThunk(
    "moments/updateMoment",
    async ({ id, formData }, thunkAPI) => {
        try {
            return await momentService.updateMoment(id, formData);
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message) || error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message)


        }
    }
)

const momentSlice = createSlice({
    name: "moment",
    initialState,
    reducers: {

    },


    extraReducers: (builder) => {
        builder
            .addCase(createMoment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createMoment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.moments.push(action.payload);
                toast.success("Moments added successfully")
            })
            .addCase(createMoment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })

            .addCase(getMoments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMoments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.moments = action.payload;

            })
            .addCase(getMoments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })

            .addCase(deleteMoment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteMoment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                toast.success("Moment Deleted successfully")



            })
            .addCase(deleteMoment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })

            .addCase(getMoment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMoment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.moment = action.payload

            })
            .addCase(getMoment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })

            .addCase(updateMoment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateMoment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                toast.success("Updated successfully")

            })
            .addCase(updateMoment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })


    }
});



export const selectMoment = (state) => state.moment.moment;


export default momentSlice.reducer