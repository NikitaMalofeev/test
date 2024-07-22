// src/components/Login.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loginSuccess,
    loginFailure,
    resetStatus,
} from '../../../entities/user/slice/authSlice';
import { login } from '../../../entities/user/api/Auth';
import { RootState } from '../../../store/rootReducer';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const userStatus = useSelector((state: RootState) => state.auth.status);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(resetStatus());
        try {
            const user = await login({ username, password });
            dispatch(loginSuccess(user.username));
        } catch (error) {
            dispatch(loginFailure('ошибка регистраци'));
        }
    };

    useEffect(() => {
        if (userStatus === 'succeeded') {
            navigate('/test');
        }
    }, [userStatus]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
