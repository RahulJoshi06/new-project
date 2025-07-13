import express from 'express';
import cors from 'cors';
const app = express();
import mongoose from 'mongoose';

app.use(cors());
app.use(express.json());

// MongoDB से कनेक्शन

mongoose.connect('mongodb://localhost:27017/RohulDataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB से कनेक्ट हो गया'))
.catch(err => console.log('Error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model('users', userSchema);

let users = []; // ✅ Sample in-memory database

// ✅ Create User (Router route)
app.post('/Router', (req, res) => {  
  users.push(newUser);
  res.send({ message: 'Data received successfully!', user: newUser });
});

// ✅ Get All Users
app.get('/getuser', (req, res) => {
  res.send(users); // send all users
});

// ✅ Delete user
app.delete('/delete/:id', (req, res) => {
  users = users.filter(u => u._id !== req.params.id);
  res.send({ message: 'User deleted' });
});

// ✅ Get single user by id
app.get('/getid/:id', (req, res) => {
  const found = users.find(u => u._id === req.params.id);
  if (found) {
    res.send({ success: true, ...found });
  } else {
    res.send({ success: false, message: 'User not found' });
  }
});

// ✅ Start the backend server
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
