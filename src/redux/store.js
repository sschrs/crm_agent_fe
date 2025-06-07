import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./slicers/sessionSlice";
import { pendingSlice } from "./slicers/pendingSlice";

export const store = configureStore({
    reducer: {
        "session": sessionSlice.reducer,
        "pending": pendingSlice.reducer
    }
})