import { client } from "../model/cliente.model";
export class ClientService {
    static async registerClient(params) {
        try {
            const newClient = await client.create(params);
            return newClient;
        }
        catch (err) {
            console.error(err);
            throw new Error(`Error at creating client`);
        }
    }
    static async searchFullBase() {
        try {
            const data = await client.find({});
            return data;
        }
        catch (err) {
            throw new Error(`Error retrieving clients: ${err}`);
        }
    }
    static async updateClient(params) {
        try {
            const update = await client.findOneAndUpdate(params);
            return update;
        }
        catch (err) {
            throw new Error(`Error retrieving clients: ${err}`);
        }
    }
}
// export async function registerClient(params: any) {
//   try {
//     const newClient = await client.create(params);
//     return newClient;
//   } catch (err) {
//     throw new Error(`Error at creating client`);
//   }
// }
// export async function searchFullBase() {
//   try {
//     const data: any = await client.find({});
//     return data;
//   } catch (err) {
//     throw new Error(`Error retrieving clients: ${err}`);
//   }
// }
// export async function updateClient(params: any) {
//   try {
//     const update: any = await client.findOneAndUpdate(params);
//     return update;
//   } catch (err) {
//     throw new Error(`Error retrieving clients: ${err}`);
//   }
// }
