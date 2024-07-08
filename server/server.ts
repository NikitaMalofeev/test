import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let serverCounter = 0; // Инициализация числового значения счетчика

app.get('/', (req: Request, res: Response) => {
    res.send('Сервер работает! Попробуйте POST запрос на /data');
});

app.get('/data', (req: Request, res: Response) => {
    res.json({ amount: serverCounter });
});

app.post('/data', (req: Request, res: Response) => {
    const { action, amount } = req.body;

    switch (action) {
        case 'increment':
            serverCounter++;
            console.log('Increment action received');
            break;
        case 'decrement':
            serverCounter--;
            console.log('Decrement action received');
            break;
        case 'incrementByAmount':
            serverCounter += amount;
            console.log(`Increment by ${amount} action received`);
            break;
        default:
            console.log('Unknown action received');
    }

    res.json({ message: 'Данные успешно получены', amount: serverCounter });
});

app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});
