import * as express from "express";
import { Cat, CatType } from "./app.model";
import { Router } from "express";

const router = Router();

router.get("/", (req: express.Request, res: express.Response) => {
  const cats = Cat;
  res.status(200).send({
    success: true,
    data: {
      cats,
    },
  });
});

router.get("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => cat.id === params.id);
    res.status(200).send({ success: true, cat: cat });
  } catch (error) {
    res.status(400).send({
      success: false,
    });
  }
});

router.post("/cats", (req: express.Request, res: express.Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
      cats: Cat,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    } else {
      console.log("모르는 에러에요");
    }
  }
});

router.put("/cats/:id", (req, res) => {
  const params = req.params;
  const body = req.body;
  let updated = false;

  Cat.forEach((cat, index) => {
    if (cat.id === params.id) {
      Cat[index] = body;
      updated = true;
    }
  });

  if (updated) {
    res.status(200).send({ success: true });
  } else {
    res.status(404).send({ success: false, message: "Cat not found" });
  }
});

router.patch("/cats/:id", (req, res) => {
  const params = req.params;
  const body = req.body;
  let updated = false;

  Cat.forEach((cat, index) => {
    if (cat.id === params.id) {
      Cat[index] = { ...cat, ...body };
      updated = true;
    }
  });

  if (updated) {
    res.status(200).send({ success: true });
  } else {
    res.status(404).send({ success: false, message: "Cat not found" });
  }
});

router.delete("/cats/:id", (req, res) => {
  const params = req.params;
  let updated = false;

  Cat.forEach((cat, index) => {
    if (cat.id === params.id) {
      Cat.splice(index, 1);
      updated = true;
    }
  });

  if (updated) {
    res.status(200).send({ success: true });
  } else {
    res.status(404).send({ success: false, message: "Cat not found" });
  }
});

export default router;
