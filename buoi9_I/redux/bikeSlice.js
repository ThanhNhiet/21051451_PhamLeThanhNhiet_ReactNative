import { createSlice } from '@reduxjs/toolkit';

const bikeSlice = createSlice({
    name: 'bike',
    initialState: {
        selectedBike: null,
    },
    reducers: {
        selectBike: (state, action) => {
            state.selectedBike = action.payload;
        },
    },
});

export const { selectBike } = bikeSlice.actions;
export default bikeSlice.reducer;
