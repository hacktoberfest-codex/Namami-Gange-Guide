import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import mongoDbConfig from './config/mongoDbConfig';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, async () => {
  await mongoDbConfig();
  return console.log(`Express is listening at http://localhost:${port}`);
});
