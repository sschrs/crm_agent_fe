import { createSlice } from "@reduxjs/toolkit";

export const pendingSlice = createSlice({
    name: "pending",
    initialState: {
        pending: false
    },
    reducers: {
        setPending: (state, action) => {
            state.pending = action.payload;
        }
    }
})

export const { setPending } = pendingSlice.actions;