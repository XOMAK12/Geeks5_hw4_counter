import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../page/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});