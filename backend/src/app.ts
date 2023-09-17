import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import express from 'express';

import mongoDbConfig from './config/mongoDbConfig';
import router from './router/Routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(port, async () => {
  await mongoDbConfig();
  return console.log(`Express is listening at http://localhost:${port}`);
});
