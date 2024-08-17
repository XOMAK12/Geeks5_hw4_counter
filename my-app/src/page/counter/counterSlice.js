import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        incrementBy10: (state) => {
            state.value += 10;
        },
        decrementBy10: (state) => {
            if (state.value >= 10) {
                state.value -= 10;
            } else {
                state.value = 0;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, incrementBy10, decrementBy10, reset } = counterSlice.actions;

export default counterSlice.reducer;