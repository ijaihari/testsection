import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AddedFilter: ['Animals', 'Birds', 'Cats', 'Dogs'],
    dropStatus: false,
};

export const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        toogleDropDown: (state) => {
         state.dropStatus = !state.dropStatus
        },
        deleteFilter: (state, action) => {
            state.AddedFilter = state.AddedFilter.filter(item => item !== action.payload);
            console.log(state.AddedFilter)
        }
    },
});
export const { deleteFilter,toogleDropDown } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


