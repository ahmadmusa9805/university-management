import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get("/", (req: any, res: any) => {
  let = 10;
  res.send("Hello World!");
});

export default app;
