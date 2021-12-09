import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import companySlice from "../features/company/companySlice";

export default configureStore({
    reducer: {
        user: userReducer,
        company: companySlice
    },
    middelware: getDefaultMiddleware({
        serializableCheck: false,
    })
})