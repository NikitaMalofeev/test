import axios from 'axios';

interface Test {
    id: number;
    question: string;
    options: string[];
}

export const fetchTests = async (): Promise<Test[]> => {
    const response = await axios.get<Test[]>('http://localhost:3001/tests');
    return response.data;
};
