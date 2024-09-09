import { configureStore } from "@reduxjs/toolkit";
import merchantReducer from "./merchantSlice";
import userReducer from "./userSlice";




export const store = configureStore({
    reducer: {
        items: merchantReducer,
        user: userReducer
    }
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;