import { client } from "../model/cliente.model";

export async function registerClient(params: any) {
  try {
    const newClient = await client.create(params);
    return newClient;
  } catch (err) {
    throw new Error(`Error at creating client`);
  }
}

export async function searchFullBase() {
  try {
    const data: any = await client.find({});
    return data;
  } catch (err) {
    throw new Error(`Error retrieving clients: ${err}`);
  }
}

export async function updateClient(params: any) {
  try {
    const update: any = await client.findOneAndUpdate(params);
    return update;
  } catch (err) {
    throw new Error(`Error retrieving clients: ${err}`);
  }
}
