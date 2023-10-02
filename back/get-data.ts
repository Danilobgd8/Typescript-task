import axios from "axios";
import { Request, Response } from "express";

export const getData = async (req: Request, res: Response) => {
  const limit = "10";
  const apiUrl = `https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?limit=${limit}`;

  try {
    const fetchData = await axios.get(apiUrl);
    res.status(201).send(fetchData.data);
  } catch {
    console.log("Server serror");
    res.status(404).send("internal error");
  }
};

export const getLimitData = async (req: Request, res: Response) => {
  const limit = "4";
  const apiUrls = `https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?limit=${limit}`;

  try {
    const fetchData = await axios.get(apiUrls);
    res.status(201).send(fetchData.data);
  } catch {
    console.log("Server serror");
    res.status(404).send("internal error");
  }
};
