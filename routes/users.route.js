import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controlers/users.controler.js';

const userRoutes = express.Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);


export default userRoutes;
