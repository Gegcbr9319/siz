import { configureStore } from '@reduxjs/toolkit';
import inventorySlice from './inventorySlice';

export const store = configureStore({
    reducer: {
        inventoryState: inventorySlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
})
});