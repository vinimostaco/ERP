import { AdminController } from "../controllers/admin.controller";
import { Router } from "express";
import { uploadMiddleware } from "../middleware/multer";
const route = Router();
route.post("/createUsers", uploadMiddleware, AdminController.createUser);
route.get("/searchFull", AdminController.returnFullBase);
route.put("/updateClient", AdminController.findClient);
export default route;
