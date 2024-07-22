import axios from 'axios';

interface User {
    id?: number;
    username: string;
    password: string;
    roles?: string[];
}

export const register = async (data: User): Promise<void> => {
    const response = await axios.get<User[]>('http://localhost:3001/users', {
        params: { username: data.username },
    });

    if (response.data.length > 0) {
        throw new Error('User already exists');
    }

    await axios.post('http://localhost:3001/users', data);
};

export const login = async (data: User): Promise<User> => {
    const response = await axios.get<User[]>('http://localhost:3001/users', {
        params: { username: data.username },
    });

    if (response.data.length === 0) {
        throw new Error('User not found');
    }

    const user = response.data[0];

    if (user.password !== data.password) {
        throw new Error('Invalid credentials');
    }

    return user;
};
