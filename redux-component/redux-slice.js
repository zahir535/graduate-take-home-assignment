
import { createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
    name: 'userLogin',
    initialState: {
        user: {
        },
    },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
})


export const {

    updateUser,

} = reduxSlice.actions

export const selectUser = (state) => state.userLogin.user


export default reduxSlice.reducer