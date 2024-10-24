import express from "express";

import {
  createAnalyst,
  getAnalyst,
  deleteAnalyst,
  getAnalystById,
  updateAnalyst,
  submitToClosed,
  ReviewToOpen,
  submitToReviewer,
  submitToAnalyst,
} from "../controllers/analystQualification.controller.js";

import { checkJwtToken } from "../middleware/authentication.js";

import { generatePdfAnalyst, generatePdfbyId } from "../controllers/report.controller.js";
import { upload } from "../utils/multer.js";

const analystRouter = express.Router();

analystRouter.post(
  "/create-analyst",
  upload.single("supprotive"),
  createAnalyst
);

analystRouter.put(
  "/edit-analyst/:id",
  upload.single("supprotive"),
  updateAnalyst
);

analystRouter.delete("/delete-analyst/:id", deleteAnalyst);

analystRouter.get("/get-analyst", getAnalyst);

analystRouter.get("/get-analyst/:id", getAnalystById);

analystRouter.post("/send-review", checkJwtToken, submitToAnalyst);

analystRouter.post("/send-to-reviewer", checkJwtToken, submitToReviewer);

analystRouter.post("/send-to-closed", checkJwtToken, submitToClosed);

analystRouter.post("/send-to-open", checkJwtToken, ReviewToOpen);

analystRouter.get("/generate-report/:id", generatePdfAnalyst);

export default analystRouter;
