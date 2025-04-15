import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AddedFilter: ['Animals', 'Birds', 'Cats', 'Dogs']
};

export const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        deleteFilter: (state, action) => {
            state.AddedFilter = state.AddedFilter.filter(item => item !== action.payload);
            console.log(state.AddedFilter)
        }
    },
});
export const { deleteFilter } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


