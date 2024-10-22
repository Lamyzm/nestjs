import * as express from "express";
import { Cat, CatType } from "./app.model";
const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.get("/cat/blue", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});
app.get("/cat/some", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[1] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
