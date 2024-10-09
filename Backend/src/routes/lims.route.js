import express from "express";
import {
  getLIMSById,
  getAllLIMSData,
  getDivision,
  createLIMS,
  deleteStorageConditionById,
  updateFieldBySno,
} from "../controllers/lims.controller.js";
const limsRouter = express.Router();
import { upload } from "../utils/multer.js";

limsRouter.post("/create-lims", upload.any(), createLIMS);
limsRouter.get("/get-all-lims", getAllLIMSData);
limsRouter.get("/get-lims/:id", getLIMSById);
limsRouter.put("/update-lims/:id/:fieldName/:sno", updateFieldBySno);
limsRouter.delete("/delete-lims/:id/:sno", deleteStorageConditionById);
limsRouter.get("/get-division", getDivision);

export default limsRouter;
