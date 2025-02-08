import { adminController } from "../controllers/admin.controller";
import { Router } from "express";

const route = Router()

route.post("/createUsers", adminController)

export default route

