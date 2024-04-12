'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
for (let i = 0; i < 5; i++) {
  console.log(i);
}
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
  res.send('Hello World!');
});
dotenv_1.default.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server started on port 3000');
});
