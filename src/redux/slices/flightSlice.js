import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions";




const initialState = {
    isLoading:true,
    error: null,
    flights:[]
}

const flightSlice = createSlice({
    name:"flight",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getFlights.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(getFlights.rejected, (state,actions)=>{
            state.isLoading = false
            state.error = actions.error.message;
        });
        builder.addCase(getFlights.fulfilled, (state,actions)=>{
            state.isLoading = false
            state.error = null;
            state.flights = actions.payload;
        });

    },

})

export default flightSlice.reducer