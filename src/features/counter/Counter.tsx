import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import useCounter from '../../shared/hooks/useCounter';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const {
        serverCount,
        incrementCounter,
        decrementCounter,
        incrementByAmountCounter,
    } = useCounter();

    return (
        <div>
            <h1>Client Counter: {count}</h1>
            <h1>
                Server Counter:{' '}
                {serverCount !== null ? serverCount : 'Loading...'}
            </h1>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={() => incrementByAmountCounter(5)}>
                Increment by 5
            </button>
        </div>
    );
};

export default Counter;
