import express from "express";
import {
  createSample,
  getSample,
  deleteSample,
  getSampleById,
  updateSample,
  eSignature,
  submitToReview,
  submitToSupervisor,
  submitToQA,
  submitToQAReview,
  submitToClosed,
  ReviewToOpen,
} from "../controllers/sampleWorkFlow.controller.js";
import { upload } from "../utils/multer.js";
import { checkJwtToken } from "../middleware/authentication.js";
import { generatePdfbyId } from "../controllers/report.controller.js";

const sampleRouter = express.Router();

sampleRouter.post(
  "/create-sample",
  upload.fields([
    { name: "sampleBarCode", maxCount: 1 },
    { name: "specificationAttachment", maxCount: 1 },
    { name: "stpAttachment", maxCount: 1 },
    { name: "attachment", maxCount: 1 },
  ]),
  createSample
);

sampleRouter.put(
  "/edit-sample/:id",
  upload.fields([
    { name: "sampleBarCode", maxCount: 1 },
    { name: "specificationAttachment", maxCount: 1 },
    { name: "stpAttachment", maxCount: 1 },
    { name: "attachment", maxCount: 1 },
  ]),
  updateSample
);

sampleRouter.delete("/delete-Sample/:id", deleteSample);

sampleRouter.get("/get-Sample", getSample);

sampleRouter.get("/get-Sample/:id", getSampleById);

sampleRouter.post("/e-signature", checkJwtToken, eSignature);

sampleRouter.post("/send-review", checkJwtToken, submitToReview);

sampleRouter.post("/send-supervisor", checkJwtToken, submitToSupervisor);

sampleRouter.post("/send-qa", checkJwtToken, submitToQA);

sampleRouter.post("/send-qa-review", checkJwtToken, submitToQAReview);

sampleRouter.post("/send-to-closed", checkJwtToken, submitToClosed);

sampleRouter.post("/send-to-open", checkJwtToken, ReviewToOpen);

sampleRouter.get("/generate-report/:id", generatePdfbyId);


export default sampleRouter;