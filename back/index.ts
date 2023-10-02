//npx ts-node index.ts
//npx nodemon --exec ts-node index.ts

import express from "express";
import { getData, getLimitData } from "./get-data";

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Server radi!");
});

app.get("/data", async (req, res) => {
  try {
    const data = await getData(req, res);
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/small-data", async (req, res) => {
  try {
    const smallData = await getLimitData(req, res);
    res.status(201).send(smallData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`local server start on ${port}`);
});
