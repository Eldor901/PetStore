import express from "express";
import { petsRouter } from "./routes/petStore.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/pets", petsRouter);

app.listen(PORT, () => {
  console.log(`REST Server running on port ${PORT}`);
});
