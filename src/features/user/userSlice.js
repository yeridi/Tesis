import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    photo: '',
    type: '',
    googleId: '',
    phoneNumber: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.type = action.payload.type;
            state.googleId = action.payload.googleId;
            state.phoneNumber = action.payload.phoneNumber;

        },
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
            state.type = null;
            state.googleId = null;
            state.phoneNumber = null;
        }
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo
export const selectUserType = state => state.user.type
export const selectGoogleId = state => state.user.googleId
export const selectPhoneNumber = state => state.user.phoneNumber


export default userSlice.reducer;
