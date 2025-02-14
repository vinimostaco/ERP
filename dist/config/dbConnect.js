import mongoose from "mongoose";
import "dotenv/config";
class MongooseConnect {
    async databaseConnect() {
        mongoose.connect(process.env.DATABASE_URL);
        return mongoose.connection;
    }
}
export default MongooseConnect;
