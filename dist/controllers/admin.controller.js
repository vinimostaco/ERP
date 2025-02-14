import { ClientService } from "../services/admin.service";
import { FileUtils } from "../utils/excelToJson";
import fs from "fs";
export class AdminController {
    static async createUser(req, res) {
        try {
            if (!req.file) {
                res.status(400).json({ message: "Nenhum arquivo enviado" });
                return;
            }
            const filePath = req.file.path;
            try {
                const clients = await FileUtils.excelToJson(filePath);
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
            }
            finally {
                fs.rmdir(filePath, () => {
                    console.log(`Arquivo: ${filePath} deletado`);
                });
            }
        }
        catch (err) {
            console.error(`Erro no AdminController: ${err}`);
            res.status(500).json({ message: "Erro ao criar clientes" });
        }
    }
    static async returnFullBase(_, res) {
        try {
            const data = await ClientService.searchFullBase();
            res.send(data);
        }
        catch (err) {
            console.error(`Erro ao listar base: ${err}`);
        }
    }
    static async findClient(req, res) {
        try {
            const update = await ClientService.updateClient(req.body);
            res.send("tudo certo, atualizado");
        }
        catch (err) {
            console.error(`Erro ao atualizar cliente: ${err}`);
        }
    }
}
