import User from "../models/user.model.js";

export const getAllUsers = async (req,res) => {
   try {
      const users = await User.find();
      res.status(200).json(users);
   } catch (err) {
      res.status(500).json({
         message: 'Cant find users',
         error: err.message,
      })
   }
};

export const createUser = async (req, res) => {
   try {
      const userData = req.body;
      const newUser = User.create(userData);
      res.status(201).json(newUser);
   } catch (err) {
      res.status(500).json({
         message: 'Error with creating user',
         error: err.message,
      })
   }
};

export const getUser = async (req, res) => {
   try {
      const {id} = req.params;
      const user = await User.findById(id);
      if (!user) {
         return res.status(404).json({
            message:'User not found'
         });
      }
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json({
         message: 'User doesnt exist',
         error: err.message,
      })
   }
};

export const updateUser = async (req, res) => {
   try {
      const {id} = req.params;
      const updateData = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, updateData, {new: true, runValidators: true});
      res.status(200).json(updatedUser)
   } catch (err) {
      res.status(500).json({
         message: 'Error with user update',
         error: err.message,
      })
   }
};

export const deleteUser = async (req, res) => {
   try {
      const {id} = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
         return res.status(404).json({
            message:'User not found'
         });
      }
      res.status(200).json({
         message:'User deleted'
      });
   } catch (err) {
      res.status(500).json({
         message: 'Error with deleting user',
         error: err.message,
      });
   }
};