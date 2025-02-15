import { Request, Response } from "express";
import { ClientService } from "../services/admin.service";
import { FileUtils } from "../utils/excelToJson";
import fs from "fs";
export class AdminController {
  static async createClients(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        res.status(400).json({ message: "Nenhum arquivo enviado" });
        return;
      }

      const filePath = req.file.path;

      try {
        const clients: any = await FileUtils.excelToJson(filePath);

        if (!Array.isArray(clients) || clients.length === 0) {
          res
            .status(400)
            .json({ message: "Planilha vazia. Sem clientes para cadastrar" });
          return;
        }

        for (const client of clients) {
          const clientData = {
            nome: client.NOME_CLIENTE,
            cpf: client.CPF,
            celular: client.CELULAR,
            criar_conta: client.CRIAR_CONTA,
            plano_id: client.PLANO_ID,
          };
          await ClientService.registerClient(clientData);
        }

        res.status(200).json({
          status: 200,
          message: "Clientes criados com sucesso no banco",
        });
      } finally {
        fs.rmdir(filePath, () => {
          console.log(`Arquivo: ${filePath} deletado`);
        });
      }
    } catch (err) {
      console.error(`Erro no AdminController: ${err}`);
      res.status(500).json({ message: "Erro ao criar clientes" });
    }
  }

  static async deleteClients(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        res.status(400).json({ message: "Nenhum arquivo enviado" });
        return;
      }

      const filePath = req.file.path;

      try {
        const clients: any = await FileUtils.excelToJson(filePath);

        if (!Array.isArray(clients) || clients.length === 0) {
          res
            .status(400)
            .json({ message: "Planilha vazia. Sem clientes para deletar" });
          return;
        }

        for (const client of clients) {
          const clientData = {
            cpf: client.CPF,
          };
          const teste = await ClientService.deleteClient(clientData);
          if (!teste) {
            console.log("deu ruim aq");
          }
        }

        res.status(200).json({
          status: 200,
          message: "Clientes deletados com sucesso",
        });
      } finally {
        fs.rmdir(filePath, () => {
          console.log(`Arquivo: ${filePath} deletado`);
        });
      }
    } catch (err) {
      console.error(`Erro no AdminController: ${err}`);
      res.status(500).json({ message: "Erro ao deletar clientes" });
    }
  }

  static async manipulateFile(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        res.status(400).json({ message: "Nenhum arquivo enviado" });
        return;
      }

      const filePath = req.file.path;

      try {
        const clients: any = await FileUtils.excelToJson(filePath);

        if (!Array.isArray(clients) || clients.length === 0) {
          res
            .status(400)
            .json({ message: "Planilha vazia. Sem clientes para deletar" });
          return;
        }
        for (const client of clients) {
          const codigo = client.CODIGO;
          const clientData = {
            cpf: client.CPF,
            nome: client.NOME_CLIENTE,
            celular: client.CELULAR,
            criar_conta: client.CRIAR_CONTA,
            plano: client.PLANO_ID,
          };
          switch (codigo) {
            case 0:
              console.log("tamo no 0 --> apagar");

              const deleteOne = await ClientService.deleteClient(clientData);
              if (!deleteOne) {
                console.log("fudeu");
              }
              break;
            case 1:
              console.log("tamo no 1 --> criar");

              const create = await ClientService.registerClient(clientData);
              if (!create) {
                console.log("fudeu");
              }
              break;
            case 2:
              console.log("tamo no 2 --> atualizar");

              const update = await ClientService.updateClient(clientData);
              if (!update) {
                console.log("fudeu");
              }
              break;
            default:
              console.log("id not expected");
              break;
          }
        }

        res.status(200).json({
          status: 200,
          message: "Planilha processada com sucesso",
        });
      } finally {
        fs.rmdir(filePath, () => {
          console.log(`Arquivo: ${filePath} deletado`);
        });
      }
    } catch (err) {
      console.error(`Erro no AdminController: ${err}`);
      res.status(500).json({ message: "Erro ao processar planilha" });
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
      res
        .status(404)
        .json({ status: 404, message: "Cliente não existe na base de dados" });
      console.error(`Erro ao atualizar cliente: ${err}`);
    }
  }

  static async deleteClient(req: Request, res: Response) {
    try {
      const deleteOne = await ClientService.deleteClient(req.body);
      res.send("Cliente deletado com sucesso");
    } catch (err) {
      res
        .status(404)
        .json({ status: 404, message: "Cliente não existe na base de dados" });
      console.error(`Erro ao deletar cliente: ${err}`);
    }
  }
}
