import express from "express";
import adminRoute from "./routes/routes"


const app = express();

app.use(express.json());
app.use("/admin", adminRoute)

export default app;
