import { request, Request, Response } from "express";
import { ClientService } from "../services/admin.service";
import { FileUtils } from "../utils/excelToJson";

export class AdminController {
  static async createUser(req: Request, res: Response) {
    try {
      const clients = await FileUtils.excelToJson(req.body.sheetName);
      clients?.forEach(async (client: any) => {
        const clientData = {
          nome: client.NOME_CLIENTE,
          cpf: client.CPF,
          celular: client.CELULAR,
          criar_conta: client.CRIAR_CONTA,
          plano_id: client.PLANO_ID,
        };
        await ClientService.registerClient(clientData);
      });
      res.status(200).json({
        status: 200,
        message: `Clientes criados com sucesso no banco`,
      });
    } catch (err) {
      console.error(`Erro no admin controller: ${err}`);
    }
  }

  static async returnFullBase(_: any, res: Response) {
    try {
      const data = await ClientService.searchFullBase();
      res.send(data);
    } catch (err) {
      console.error(`Erro ao listar base: ${err}`);
    }
  }

  static async findClient(req: Request, res: Response) {
    try {
      const update = await ClientService.updateClient(req.body);
      res.send("tudo certo, atualizado");
    } catch (err) {
      console.error(`Erro ao atualizar cliente: ${err}`);
    }
  }
}
