import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, async () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
