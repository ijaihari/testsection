import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Components: ['Ad Network', 'Ad Group', 'Campaign', 'OS'],
    Tags: ["app",
        "banner",
        "battle",
        "blackfriday",
        "countdown",
        "crypto",
        "deal",
        "delivery",
        "discount",
        "education",
        "event",
        "finance",
        "fitness",
        "flash",
        "food",
        "gaming",
        "health",
        "learning",
        "monsoon",
        "music",
        "newyear",
        "promo",
        "reel",
        "sale",
        "summer",
        "trailer",
        "video",
        "wallet"],
    Metrics: ['Cost per Install (CPI)', 'Installs per Thousand Impressions (IPM)', 'Click Through Rate (CTR)', 'Cost Per Thousand Impressions (CPM)', 'Cost Per Click (CPC)'],
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
        clearAllFilters: (state) => {
            state.AddedFilter = [];
        },
    },
});

export const { deleteFilter, toogleDropDown, addFilter } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


