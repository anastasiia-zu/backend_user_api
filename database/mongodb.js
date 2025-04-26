import mongoose from 'mongoose';
import { MONGODB_URI, NODE_ENV } from '../config/env.js';

if (!MONGODB_URI) {
   throw new error('please defind MONGODB variable');
};

export const connect_DB = async () => {
   try {
   const conn = await mongoose.connect(MONGODB_URI);
   console.log(`mongoDB connected to ${conn.connection.host}`);
   console.log(`connected to database in ${NODE_ENV} mode`);
   
   } catch (error) {
   console.error('error connection to database: ', error);
   process.exit(1);
   }
};