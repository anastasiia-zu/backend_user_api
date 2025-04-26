import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js'
import { connect_DB } from './database/mongodb.js';

const port = PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser()); // для авторизации 

// request response 
app.get('/', (req, res) => {
   res.send('hello, server!');
});

app.listen(port, async () => {
   console.log(`server startet on http://localhost:${port}`);
   await connect_DB();
});