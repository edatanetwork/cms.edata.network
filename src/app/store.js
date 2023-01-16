import { configureStore } from '@reduxjs/toolkit'

import { api } from 'app/api'
import authReducer from 'features/authSlice'
import categoryReducer from 'features/categorySlice'
import domainReducer from 'features/domainSlice'
import searchReducer from 'features/searchSlice'
import filterReducer from 'features/filterSlice'
import currentReducer from 'features/currentSlice'
import formReducer from 'features/formSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    category: categoryReducer,
    domain: domainReducer,
    current: currentReducer,
    search: searchReducer,
    filter: filterReducer,
    form: formReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})
