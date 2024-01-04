import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReduce from './slices/cartSlice';

const store = configureStore({
    // Global store configuration object that includes the generated reducer [Global reducer]
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [apiSlice.reducerPath]: apiSlice.reducer, // Add the apiSlice reducer to the store
        cart: cartSliceReduce, // Add the cart slice to the store
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true,
    
});

export default store;


// this code sets up a Redux store with the configuration
//  provided by Redux Toolkit, integrates an API slice to
//   handle asynchronous actions related to API requests,
//   and exports the configured Redux store. The specific
//   details of the apiSlice would be defined in the apiSlice
//   module, which is not provided in the code snippet.
