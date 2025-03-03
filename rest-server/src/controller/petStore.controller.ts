import { Request, Response } from "express";
import { PetStoreInput, PetStoreModel } from "../models/petStore.model";

export const PetStoreController = {
  getAllPetStores: (req: Request, res: Response) => {
    res.json(PetStoreModel.getAll());
  },

  createPetStore: (req: Request, res: Response) => {
    const input: PetStoreInput = req.body;
    const newPetStore = PetStoreModel.create(input);
    res.status(201).json(newPetStore);
  },
};
