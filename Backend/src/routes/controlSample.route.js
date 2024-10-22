import express from "express";

import {
  createControlSample,
  submitToClosed,
  ReviewToOpen,
  updateControlSample,
  deleteControlSample,
  getControlSample,
  getControlSampleById,
  submitToControlSample,
} from "../controllers/controlSample.controller.js";

import { checkJwtToken } from "../middleware/authentication.js";

import { generatePdfbyId } from "../controllers/report.controller.js";
import { upload } from "../utils/multer.js";
import { submitToReviewer } from "../controllers/controlSample.controller.js";

const controlSampleRouter = express.Router();

controlSampleRouter.post(
  "/create-control-sample",
  upload.single("supprotive"),
  createControlSample
);

controlSampleRouter.put(
  "/edit-control-sample/:id",
  upload.single("supprotive"),
  updateControlSample
);

controlSampleRouter.delete("/delete-control-sample/:id", deleteControlSample);

controlSampleRouter.get("/get-control-sample", getControlSample);

controlSampleRouter.get("/get-control-sample/:id", getControlSampleById);

controlSampleRouter.post("/send-review", checkJwtToken, submitToControlSample);

controlSampleRouter.post("/send-to-reviewer", checkJwtToken, submitToReviewer);

controlSampleRouter.post("/send-to-closed", checkJwtToken, submitToClosed);

controlSampleRouter.post("/send-to-open", checkJwtToken, ReviewToOpen);

controlSampleRouter.get("/generate-report/:id", generatePdfbyId);

export default controlSampleRouter;
