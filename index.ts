const a = 5;

for (let i = 0; i < a; i++) {
  console.log(i);
}
import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
