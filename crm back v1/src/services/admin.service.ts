import { client } from "../model/cliente.model";

export class ClientService {
  static async registerClient(params: any) {
    try {
      const newClient = await client.create(params);
      return newClient;
    } catch (err) {
      console.error(err);
      throw new Error(`Error at creating client`);
    }
  }

  static async searchFullBase() {
    try {
      const data: any = await client.find({});
      return data;
    } catch (err) {
      throw new Error(`Error retrieving clients: ${err}`);
    }
  }

  static async updateClient(params: any) {
    try {
      const { cpf } = params;
      const update: any = await client.findOneAndUpdate({ cpf });
      if (!update) {
        console.error("Client does not exist on Database");
        throw new Error(`Client does not exist on Database`);
      }
      return update;
    } catch (err) {
      throw new Error(`Error updating clients: ${err}`);
    }
  }

  static async deleteClient(params: any) {
    try {
      const { cpf } = params;
      console.log(cpf);

      const deletedClient: any = await client.findOneAndDelete({ cpf });
      console.log(deletedClient);

      if (!deletedClient) {
        // throw new Error(`Client does not exist on Database`);
        return false;
      }
      return deletedClient;
    } catch (err) {
      throw new Error(`Error deleting clients: ${err}`);
    }
  }
}
//1111
