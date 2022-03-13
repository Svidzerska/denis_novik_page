import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/languageSlice';
import navigationReducer from '../features/navigationSlice';

export const store = configureStore({
  reducer: {
      language: languageReducer,
      navigation: navigationReducer
   } 
})