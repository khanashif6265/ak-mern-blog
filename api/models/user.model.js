import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,       // optional but recommended to keep emails consistent
  },
  bio: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,       // usually passwords should be required unless you have social login-only users
  },
}, {
  timestamps: true  // adds createdAt and updatedAt automatically
});

const User = mongoose.model('User', userSchema, 'user');
export default User;
