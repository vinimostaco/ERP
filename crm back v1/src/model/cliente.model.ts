import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    celular: { type: String },
    criar_conta: { type: String },
    plano_id: { type: String },
  },
  { versionKey: false }
);

const client = mongoose.model("Dados", clientSchema);

export { client, clientSchema };
