import app from "./app";
import "dotenv/config";

app.listen(process.env.PORT, () => {
  console.log(`server rodando na ${process.env.PORT}`);
});
