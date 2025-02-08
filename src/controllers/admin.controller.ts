import { Request, Response } from "express";
import { createUser } from "../services/admin.service";
import { excelToJson } from "../utils/excelToJson";
export async function adminController(req: Request, res: Response) {
  const jsonData = await excelToJson(req.body.sheetName);


  
}
