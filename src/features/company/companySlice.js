import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: {},
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompanyDetails: (state, action) => {
            state.list = action.payload
        },
        setSignOutState: state => {
            state.list = null
        }
    }
})

export const { setCompanyDetails, setSignOutState } = companySlice.actions;


export default companySlice.reducer;
