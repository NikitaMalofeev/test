// src/entities/user/slice/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.status = 'succeeded';
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.status = 'failed';
        },
        logout: (state) => {
            state.token = null;
            state.status = 'idle';
            state.error = null;
        },
        resetStatus: (state) => {
            state.status = 'idle';
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout, resetStatus } =
    authSlice.actions;

export default authSlice.reducer;
