import { createSlice } from "@reduxjs/toolkit";

export const HeaderTitleSlice = createSlice({
    name: 'headerTitle', 
    initialState: {
        operationSelected: '',
        tableSelected: ''
    },
    reducers: {
        titleOperation: (state, {payload}) => {
            state.operationSelected = payload
        },
        titleTable: (state, {payload}) => {
            state.tableSelected = payload
        }
    }
})

export const {titleOperation, titleTable} =  HeaderTitleSlice.actions
export default HeaderTitleSlice.reducer