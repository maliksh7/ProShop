import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [apiSlice.reducerPath]: apiSlice.reducer,
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