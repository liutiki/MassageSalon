import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice.js';

export const store = configureStore({
    reducer: {
            cart
    }
  })