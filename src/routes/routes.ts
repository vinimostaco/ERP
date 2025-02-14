import { AdminController } from "../controllers/admin.controller";
import { Router } from "express";
import { uploadMiddleware } from "../middleware/multer";

const route = Router();

route.post("/createClients", uploadMiddleware, AdminController.createClients);
route.post("/processClients", uploadMiddleware, AdminController.manipulateFile);

route.delete("/deleteClients", uploadMiddleware, AdminController.deleteClients);
route.delete("/deleteClient", AdminController.deleteClient);

route.put("/updateClient", AdminController.findClient);

route.get("/fullClients", AdminController.returnFullBase);

export default route;
