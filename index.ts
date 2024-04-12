import express from 'express';
import dotenv from 'dotenv';

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server started on port 3000');
});
