import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export const persistor = persistStore(store);
