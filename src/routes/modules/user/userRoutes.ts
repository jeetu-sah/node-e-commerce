import express, { Express, Request, Response, Router } from "express";
import { newUserFacade } from "../../../facades/BaseFacade";

const routes = Router();
const userRoutes: Express = express();

userRoutes.post("/", async (req: Request, res: Response, next) => {
    const users = await newUserFacade.get();
    res.json({
        status: 200,
        data: null,
        datas: users,
        msg: "Users getting successfully!!!",
    });
});

userRoutes.post("/:id", async (req: Request, res: Response, next) => {
  try {
    let user_id = parseInt(req.params.id);
    const user = await newUserFacade.first(user_id);

    res.json({
        status: 200,
        data: user,
        msg: "Users record return successfully!!!",
    });
  }
  catch(error){
      throw new Error('This is an error')
  }
});

export default userRoutes;
