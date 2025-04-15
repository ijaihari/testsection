import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FilterTags: ['Character', 'Background', 'Elements', 'CTA Positions', 'CTA Text'],
    AddedFilter: [],
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
        },
        addFilter: (state, action) => {
            state.AddedFilter.push(action.payload);
            state.dropStatus = !state.dropStatus
        },
    },
});
export const { deleteFilter, toogleDropDown, addFilter } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


