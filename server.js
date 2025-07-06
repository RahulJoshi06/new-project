import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

app.post('/Router', (req, res) => {
  console.log(req.body); // receives user object
  res.send({ message: "Form received!", data: req.body });
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
