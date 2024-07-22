// src/store/types.ts
import { AuthState } from '../../entities/user/slice/authSlice';
import { CounterState } from '../../features/counter/counterSlice';

export interface RootState {
    auth: AuthState;
    counter: CounterState;
}
