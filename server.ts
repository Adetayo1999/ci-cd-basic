import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5050 || process.env.PORT;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (_, response) => {
  response.send({ message: "Test CI/CD App" });
});

app.use((_, response, next) => {
  response.send({ message: "Test CI/CD App" });
  next();
});

app.listen(PORT, () => {
  console.log(`Server Logs ✨`);
});
