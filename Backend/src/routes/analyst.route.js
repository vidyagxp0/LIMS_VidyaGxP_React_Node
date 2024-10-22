import express from "express";

import {
  createAnalyst,
  getAnalyst,
  deleteAnalyst,
  getAnalystById,
  updateAnalyst,
  eSignature,
  submitToSupervisor,
  submitToQAReview,
  submitToClosed,
  ReviewToOpen,
} from "../controllers/analystQualification.controller.js";

import { checkJwtToken } from "../middleware/authentication.js";

import { generatePdfbyId } from "../controllers/report.controller.js";
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

analystRouter.post("/e-signature", checkJwtToken, eSignature);

analystRouter.post("/send-supervisor", checkJwtToken, submitToSupervisor);

analystRouter.post("/send-qa-review", checkJwtToken, submitToQAReview);

analystRouter.post("/send-to-closed", checkJwtToken, submitToClosed);

analystRouter.post("/send-to-open", checkJwtToken, ReviewToOpen);

analystRouter.get("/generate-report/:id/analyst", generatePdfbyId);

export default analystRouter;
