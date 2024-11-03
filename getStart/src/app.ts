import * as express from "express";
import catsRouter from "./cats/app.route";

class Server {
  public app: express.Application;
  private port: number = 8000;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[0]);
      console.log("this is logging middleware");
      next();
    });

    //* json meddleWear
    this.app.use(express.json());

    this.setRoute();

    //* 404middleware
    this.app.use((req, res, next) => {
      console.log("404 not found middleware");
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}
