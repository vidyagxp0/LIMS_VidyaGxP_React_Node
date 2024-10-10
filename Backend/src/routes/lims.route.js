import express from "express";
import {
  getLIMSById,
  getAllLIMSData,
  getDivision,
  manageLIMS,
  deleteStorageConditionById,
} from "../controllers/lims.controller.js";
const limsRouter = express.Router();
import { upload } from "../utils/multer.js";

limsRouter.get("/get-all-lims/:fieldName", getAllLIMSData);
limsRouter.get("/get-lims/:id", getLIMSById);
limsRouter.post("/manage-lims/:add/:fieldName", upload.any(), manageLIMS);
limsRouter.put(
  "/manage-lims/:update/:fieldName/:sno",
  upload.any(),
  manageLIMS
);
limsRouter.delete("/delete-lims/:fieldName/:sno", deleteStorageConditionById);
limsRouter.get("/get-division", getDivision);

export default limsRouter;
