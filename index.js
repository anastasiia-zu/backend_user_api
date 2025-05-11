import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { PORT } from './config/env.js'
import { connect_DB } from './database/mongodb.js';
import userRoutes from './routes/users.route.js';

const port = PORT || 8080;
const app = express();


app.use(
   cors({
      origin: ["http://localhost:5173", "https://user-manager-anastasiia.netlify.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
   })
);

app.use(express.json());
app.use(cookieParser()); // для авторизации 

// request response 
app.get('/', (req, res) => {
   res.send('hello, server!');
});

app.use('/api/v1/users', userRoutes);

app.listen(port, async () => {
   console.log(`server startet on http://localhost:${port}`);
   await connect_DB();
});