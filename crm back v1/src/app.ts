import express from "express";
import adminRoute from "./routes/routes";
import cors from "cors";
import MongooseConnect from "./config/dbConnect";

(async () => {
  const mongooseConnect = new MongooseConnect();

  const connect = await mongooseConnect.databaseConnect();

  connect.on("error", () => {
    console.log("Error in connecting to database ❌");
  });

  connect.on("open", () => {
    console.log("Connected with database ✅");
  });
})();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin", adminRoute);

export default app;
