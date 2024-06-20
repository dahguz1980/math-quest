import { createSlice } from "@reduxjs/toolkit";

export const PreferenceSlice = createSlice({
    name: 'preference', 
    initialState: {
        themeBg: 'light',
        difficulty: 'EASY'
    },
    reducers: {
        changeTheme: (state, {payload}) => {
            state.themeBg = payload
        },
        difficulty: (state, {payload}) => {
            state.difficulty = payload
        }
    }
})

export const {changeTheme, difficulty } =  PreferenceSlice.actions
export default PreferenceSlice.reducer