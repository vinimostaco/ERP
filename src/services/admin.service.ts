import { client } from "../model/cliente.model";

export async function registerClient(params: any) {
  try {
    const novoAutor = await client.create(params);
    return novoAutor;
  } catch (erro) {
    throw new Error(`Erro ao criar autor`);
  }
}
