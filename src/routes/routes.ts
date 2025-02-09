import { AdminController } from "../controllers/admin.controller";
import { Router } from "express";

const route = Router();

route.post("/createUsers", AdminController.createUser);
route.get("/searchFull", AdminController.returnFullBase);
route.put("/updateClient", AdminController.findClient);


export default route;
