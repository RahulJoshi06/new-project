import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

let users = []; // ✅ Sample in-memory database

// ✅ Create User (Router route)
app.post('/Router', (req, res) => {
  const newUser = { ...req.body, _id: Date.now().toString() };
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
