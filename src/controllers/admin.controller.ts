import { Request, Response } from "express";
import { registerClient } from "../services/admin.service";
import { excelToJson } from "../utils/excelToJson";
export async function adminController(req: Request, res: Response) {
  try {
    const clients = await excelToJson(req.body.sheetName);
    clients?.forEach((client: any) => {
      const clientData = {
        nome: client.NOME_CLIENTE,
        cpf: client.CPF,
        celular: client.CELULAR,
        criar_conta: client.CRIAR_CONTA,
        plano_id: client.PLANO_ID,
      };
      registerClient(clientData);
    });
    res.status(200).json({
      status: 200,
      message: `Clientes criados com sucesso no banco`,
    });
  } catch (err) {
    console.error(`Erro no admin controller: ${err}`);
  }
}
