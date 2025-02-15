import mongoose from "mongoose";
import "dotenv/config";
class MongooseConnect {
  async databaseConnect(): Promise<mongoose.Connection> {
    mongoose.connect(
      process.env.DATABASE_URL as string
    );
    return mongoose.connection;
  }
}

export default MongooseConnect;