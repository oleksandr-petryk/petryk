import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started http://localhost:${PORT}/`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
