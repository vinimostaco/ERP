import { AdminController } from "../controllers/admin.controller";
import { Router } from "express";

const route = Router()

route.post("/createUsers", AdminController.create)

export default route