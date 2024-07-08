import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import {
    increment,
    decrement,
    incrementByAmount,
} from '../../features/counter/counterSlice';

const useCounter = () => {
    const dispatch = useDispatch();
    const [serverCount, setServerCount] = useState<number | null>(null);

    const updateServer = async (action: string, amount: number = 0) => {
        try {
            const response = await fetch('http://localhost:3001/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action, amount }),
            });

            const data = await response.json();
            setServerCount(data.amount);
            console.log('Server response:', data);
        } catch (error) {
            console.error('Error updating server:', error);
        }
    };

    const fetchServerCount = async () => {
        try {
            const response = await fetch('http://localhost:3001/data');
            const data = await response.json();
            setServerCount(data.amount);
        } catch (error) {
            console.error('Error fetching server count:', error);
        }
    };

    useEffect(() => {
        fetchServerCount();
    }, []);

    const incrementCounter = useCallback(() => {
        dispatch(increment());
        updateServer('increment');
    }, [dispatch]);

    const decrementCounter = useCallback(() => {
        dispatch(decrement());
        updateServer('decrement');
    }, [dispatch]);

    const incrementByAmountCounter = useCallback(
        (amount: number) => {
            dispatch(incrementByAmount(amount));
            updateServer('incrementByAmount', amount);
        },
        [dispatch]
    );

    return {
        serverCount,
        incrementCounter,
        decrementCounter,
        incrementByAmountCounter,
    };
};

export default useCounter;
