import express, { Request, Response } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogInfo } from "../utils/logger";

const goodbyeRouter = express.Router();

goodbyeRouter.route('/')
    .get(async(req: Request, res: Response) => {

         let name: any = req?.query?.name;
         LogInfo(`Query Param: ${name}`);

         const controller: GoodbyeController = new GoodbyeController();
         const response = await controller.getMessage(name);

         return res.send(response);
    })

export default goodbyeRouter;