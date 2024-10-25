import * as express from "express";
import { Cat, CatType } from "./app.model";
const app: express.Express = express();
const port: number = 8000;

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cat/blue", (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[0] });
});
app.get("/cat/some", (req: express.Request, res: express.Response) => {
  res.send({ blue: Cat[1] });
});

app.use((req, res, next) => {
  console.log("404 not found middleware");
  res.send({ error: "404 not found" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
