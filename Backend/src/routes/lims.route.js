import express from "express";
import {
  getLIMSById,
  getAllLIMSData,
  getDivision,
  manageLIMS,
  deleteStorageConditionById,
  getLIMSDataByTypeAndId,
} from "../controllers/lims.controller.js";
const limsRouter = express.Router();
import { upload } from "../utils/multer.js";

limsRouter.get("/get-all-lims/:fieldName", getAllLIMSData);
limsRouter.get("/get-lims/:id", getLIMSById);
limsRouter.post("/manage-lims/:add/:fieldName", upload.any(), manageLIMS);
limsRouter.put("/manage-lims/:update/:fieldName/:uniqueId",upload.any(),manageLIMS); 
limsRouter.delete("/delete-lims/:fieldName/:uniqueId",deleteStorageConditionById);
limsRouter.get("/get-division", getDivision);
limsRouter.get("/get-lims/:type/:id", getLIMSDataByTypeAndId);

export default limsRouter;
