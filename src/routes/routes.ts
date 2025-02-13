import { AdminController } from "../controllers/admin.controller";
import { Router } from "express";
import { uploadMiddleware } from "../middleware/multer";

const route = Router();

route.post("/createClient", uploadMiddleware, AdminController.createUser);
route.delete("/deleteClient", AdminController.deleteClient)
route.put("/updateClient", AdminController.findClient);
route.get("/fullClients", AdminController.returnFullBase);



export default route;
