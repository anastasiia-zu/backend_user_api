import express from 'express';
import cookieParser from 'cookie-parser';

const port = 8080;
const app = express();

app.use(express.json());
app.use(cookieParser()); // для авторизации 

// request response 
app.get('/', (req, res) => {
   res.send('hello, server!');
});

app.listen(port, async () => {
   console.log(`server startet on http://localhost:${port}`);
});