import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        deleteFilter: (state) => { state.value += 1;
            console.log(state.value)
        }

    },
});
export const { deleteFilter } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


