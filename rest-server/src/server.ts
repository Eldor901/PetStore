import express from "express";
import swaggerUi from "swagger-ui-express";
import { petsRouter } from "./routes/petStore.routes";
import swaggerDocument from "./swagger.json";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/pets", petsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`REST Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
