import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import VideoList from '../../features/test/Video/Video';
import { fetchTests } from '../../entities/test/api/test';

interface Test {
    id: number;
    question: string;
    options: string[];
}

export const TestPage: React.FC = () => {
    const userStatus = useSelector((state: RootState) => state.auth.status);
    const [tests, setTests] = useState<Test[]>([]);

    useEffect(() => {
        const getTests = async () => {
            const data = await fetchTests();
            setTests(data);
        };

        if (userStatus === 'succeeded') {
            getTests();
        }
    }, [userStatus]);

    return (
        <div>
            {userStatus === 'succeeded' ? (
                <div>
                    <VideoList />
                    <div>
                        <h2>Tests</h2>
                        {tests.length > 0 ? (
                            tests.map((test) => (
                                <div key={test.id}>
                                    <h3>{test.question}</h3>
                                    <ul>
                                        {test.options.map((option, index) => (
                                            <li key={index}>{option}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>No tests available</p>
                        )}
                    </div>
                </div>
            ) : (
                <span>Please Login</span>
            )}
        </div>
    );
};

export default TestPage;
