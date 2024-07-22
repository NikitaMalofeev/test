// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer, { AuthState } from '../entities/user/slice/authSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
});

export type RootState = {
    counter: ReturnType<typeof counterReducer>;
    auth: AuthState;
};

export default rootReducer;
