import express from "express";
import { PetStoreController } from "../controller/petStore.controller";

const router = express.Router();

router.get("/", PetStoreController.getAllPetStores);
router.post("/", PetStoreController.createPetStore);

export const petsRouter = router;
