import express from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs';

dotenv.config();


const app = express();
const PORT = process.env.PORT;
const tickets = [];

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    fs.appendFileSync('requests.log', `${new Date().toISOString()} - ${req.method} ${req.url}\n`);
    next();
});

async function stackTraceMiddleware(err, req, res, next) {
        console.error('Error occurred: ', err);
        res.status(500).json({
            error: 'Internal Server Error',
            mensage: 'An unexpected error occurred'
        });
    }



app.get('/', (req, res) => {
    console.log('Simulating an error for testing stack trace middleware');
    try{
        throw new Error('Test error');
        res.send('Hello, World!');
    } catch (err) {
        next(err);
    }
});

app.use(stackTraceMiddleware);

app.get('/tickets', (req, res) => {
    res.json(tickets);
});

app.post('/tickets', (req, res) => {
    console.log('Received a ticket: ', req.body);
    if(!req.body || req.headers['content-type'] !== 'application/json') {
        return res.status(400).json({
            error: 'Invalid Request',
            message: 'Type of content must be application/json'
        });
    };

    const {name, email, menssage} = req.body;
    if(!name || !email || !menssage) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Missing required fields'
        });
    };

    if(!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Invalid email format'
        });
    };

    tickets.push({name, email, menssage});
    res.status(201).json({
        error: null,
        message: 'Ticket created successfully'
    });
});

app.patch('/tickets/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if(!req.body || req.headers['content-type'] !== 'application/json') {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Invalid request body'
        });
    };
    if(isNaN(index) || index < 0 || index >= tickets.length) {
        return res.status(404).json({
            error: 'Not Found',
            message: 'Ticket not found'
        });
    }

    const {name, email, menssage} = req.body;
    if(!name || !email || !menssage) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Missing required fields'
        });
    }

    if(!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Invalid email format'
        });
    }

    tickets[index] = {name, email, menssage};
    res.json({
        error: null,
        message: 'Ticket updated successfully'
    });
});

app.delete('/tickets/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if(!req.body || req.headers['content-type'] !== 'application/json') {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Invalid request body'
        });
    };
    if(isNaN(index) || index < 0 || index >= tickets.length) {
        return res.status(404).json({
            error: 'Not Found',
            message: 'Ticket not found'
        });
    }
    tickets.splice(index, 1);
    res.json({
        error: null,
        message: 'Ticket deleted successfully'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});