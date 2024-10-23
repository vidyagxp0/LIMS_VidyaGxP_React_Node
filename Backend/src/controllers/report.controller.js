import puppeteer from "puppeteer";
import { getBase64Image } from "../../index.js";
import bwipjs from "bwip-js";
import { promisify } from "util";

const generateBarcodeBase64 = async (barcodeText) => {
  try {
    const toBuffer = promisify(bwipjs.toBuffer);
    const png = await toBuffer({
      bcid: "code128", // Barcode type
      text: barcodeText, // Text to encode
      scale: 3, // Scale factor
      includetext: false, // Show text below barcode
      textxalign: "center", // Center align the text
    });
    return `data:image/png;base64,${png.toString("base64")}`;
  } catch (error) {
    console.error("Error generating barcode:", error);
    throw error;
  }
};

const sampleDatas = {};

const setSampleData = (data) => {
  const sampleData = data.data;

  sampleDatas.id = sampleData?.id ?? "";
  sampleDatas.samplePlanId = sampleData?.samplePlanId ?? "";
  sampleDatas.sampleId = sampleData?.sampleId ?? "";
  sampleDatas.sampleName = sampleData?.sampleName ?? "";
  sampleDatas.sampleType = sampleData?.sampleType ?? "";
  sampleDatas.productMaterialName = sampleData?.productMaterialName ?? "";
  sampleDatas.batchLotNumber = sampleData?.batchLotNumber ?? "";
  sampleDatas.samplePriority = sampleData?.samplePriority ?? "";
  sampleDatas.sampleQuantity = sampleData?.sampleQuantity ?? "";
  sampleDatas.UOM = sampleData?.UOM ?? "";
  sampleDatas.market = sampleData?.market ?? "";
  sampleDatas.sampleBarCode = sampleData?.sampleBarCode ?? "1234567890";
  sampleDatas.specificationId = sampleData?.specificationId ?? "";
  sampleDatas.specificationAttachment =
    sampleData?.specificationAttachment ?? "";
  sampleDatas.stpId = sampleData?.stpId ?? "";
  sampleDatas.stpAttachment = sampleData?.stpAttachment ?? "";
  sampleDatas.testName = sampleData?.testName ?? "";
  sampleDatas.testMethod = sampleData?.testMethod ?? "";
  sampleDatas.testParameter = sampleData?.testParameter ?? "";
  sampleDatas.testingFrequency = sampleData?.testingFrequency ?? "";
  sampleDatas.testingLocation = sampleData?.testingLocation ?? "";
  sampleDatas.requiredInstrument = sampleData?.requiredInstrument ?? "";
  sampleDatas.testGrouping = sampleData?.testGrouping ?? "";
  sampleDatas.lsl = sampleData?.lsl ?? "";
  sampleDatas.usl = sampleData?.usl ?? "";
  sampleDatas.testingDeadline = sampleData?.testingDeadline ?? "";
  sampleDatas.plannerName = sampleData?.plannerName ?? "";
  sampleDatas.sampleDate = sampleData?.sampleDate ?? "";
  sampleDatas.sampleSource = sampleData?.sampleSource ?? "";
  sampleDatas.plannedDate = sampleData?.plannedDate ?? "";
  sampleDatas.labTechnician = sampleData?.labTechnician ?? "";
  sampleDatas.assignedDepartment = sampleData?.assignedDepartment ?? "";
  sampleDatas.sampleCollectionDate = sampleData?.sampleCollectionDate ?? "";
  sampleDatas.testingStartDate = sampleData?.testingStartDate ?? "";
  sampleDatas.testingEndDate = sampleData?.testingEndDate ?? "";
  sampleDatas.delayJustification = sampleData?.delayJustification ?? "";
  sampleDatas.testingOutCome = sampleData?.testingOutCome ?? "";
  sampleDatas.passFail = sampleData?.passFail ?? "";
  sampleDatas.testPlanId = sampleData?.testPlanId ?? "";
  sampleDatas.turnAroundTime = sampleData?.turnAroundTime ?? "";
  sampleDatas.sampleRetestingDate = sampleData?.sampleRetestingDate ?? "";
  sampleDatas.reviewDate = sampleData?.reviewDate ?? "";
  sampleDatas.sampleStorageLocation = sampleData?.sampleStorageLocation ?? "";
  sampleDatas.transportationMethod = sampleData?.transportationMethod ?? "";
  sampleDatas.samplePreparationMethod =
    sampleData?.samplePreparationMethod ?? "";
  sampleDatas.samplePackagingDetail = sampleData?.samplePackagingDetail ?? "";
  sampleDatas.sampleLabel = sampleData?.sampleLabel ?? "";
  sampleDatas.regulatoryRequirement = sampleData?.regulatoryRequirement ?? "";
  sampleDatas.qualityControlCheck = sampleData?.qualityControlCheck ?? "";
  sampleDatas.controlSampleReference = sampleData?.controlSampleReference ?? "";
  sampleDatas.sampleIntegrityStatus = sampleData?.sampleIntegrityStatus ?? "";
  sampleDatas.riskAssessment = sampleData?.riskAssessment ?? "";
  sampleDatas.supervisor = sampleData?.supervisor ?? "";
  sampleDatas.instrumentsReserved = sampleData?.instrumentsReserved ?? "";
  sampleDatas.labAvailability = sampleData?.labAvailability ?? "";
  sampleDatas.sampleCostEstimation = sampleData?.sampleCostEstimation ?? "";
  sampleDatas.resourceUtilization = sampleData?.resourceUtilization ?? "";
  sampleDatas.sampleMovementHistory = sampleData?.sampleMovementHistory ?? "";
  sampleDatas.testingProgress = sampleData?.testingProgress ?? "";
  sampleDatas.alertNotification = sampleData?.alertNotification ?? "";
  sampleDatas.deviationLog = sampleData?.deviationLog ?? "";
  sampleDatas.commentNotes = sampleData?.commentNotes ?? "";
  sampleDatas.attachment = sampleData?.attachment ?? "";
  sampleDatas.samplingFrequency = sampleData?.samplingFrequency ?? "";
  sampleDatas.sampleDisposition = sampleData?.sampleDisposition ?? "";
  sampleDatas.stabilityStudyType = sampleData?.stabilityStudyType ?? "";
  sampleDatas.stabilityStudyProtocol = sampleData?.stabilityStudyProtocol ?? "";
  sampleDatas.stabilityProtocolApprovalDate =
    sampleData?.stabilityProtocolApprovalDate ?? "";
  sampleDatas.countryOfRegulatorySubmissions =
    sampleData?.countryOfRegulatorySubmissions ?? "";
  sampleDatas.ichZone = sampleData?.ichZone ?? "";
  sampleDatas.photoStabilityTestingResult =
    sampleData?.photoStabilityTestingResult ?? "";
  sampleDatas.reConstitutionStability =
    sampleData?.reConstitutionStability ?? "";
  sampleDatas.testingInterval = sampleData?.testingInterval ?? "";
  sampleDatas.shelfLifeRecommendation =
    sampleData?.shelfLifeRecommendation ?? "";
  sampleDatas.analysisType = sampleData?.analysisType ?? "";
  sampleDatas.analysisDate = sampleData?.analysisDate ?? "";
  sampleDatas.analysisResult = sampleData?.analysisResult ?? "";
  sampleDatas.srSupportiveAttachment = sampleData?.srSupportiveAttachment ?? "";
  sampleDatas.qaSupportiveAttachment = sampleData?.qaSupportiveAttachment ?? "";
  sampleDatas.suSupportiveAttachment = sampleData?.suSupportiveAttachment ?? "";
  sampleDatas.saSupportiveAttachment = sampleData?.saSupportiveAttachment ?? "";
  sampleDatas.siSupportiveAttachment = sampleData?.siSupportiveAttachment ?? "";
  sampleDatas.stabilityStudyProtocol = sampleData?.stabilityStudyProtocol ?? "";
  sampleDatas.initiatorComment = sampleData?.initiatorComment ?? "";
  sampleDatas.labTechnicianComment = sampleData?.labTechnicianComment ?? "";
  sampleDatas.reviewerComment = sampleData?.reviewerComment ?? "";
  sampleDatas.reviewerApprover = sampleData?.reviewerApprover ?? "";
  sampleDatas.reviewDate = sampleData?.reviewDate ?? "";
  sampleDatas.QaReviewerApprover = sampleData?.QaReviewerApprover ?? "";
  sampleDatas.QaReviewerComment = sampleData?.QaReviewerComment ?? "";
  sampleDatas.QaReviewDate = sampleData?.QaReviewDate ?? "";
  sampleDatas.stage = sampleData?.stage ?? "";
  sampleDatas.status = sampleData?.status ?? "";
  sampleDatas.createdAt = sampleData?.createdAt ?? "";
};

export const generatePdfbyId = async (req, res) => {
  const id = req.params.id;
  const type = req.params.type;
  let sampleData;
  try {
    const sample = await fetch(
      `http://localhost:9000/get-Sample/${id}/sample`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    sampleData = await sample.json();

    setSampleData(sampleData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/gxplogo.png");

    if (!sampleData) {
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found" });
    }

    // Generate the barcode for the provided sample ID or any relevant string
    const barcodeBase64 = await generateBarcodeBase64(
      sampleDatas.sampleBarCode
    );
    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render(
        "report",
        { reportData: sampleDatas, barcodeBase64: barcodeBase64 },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render(
        "header",
        { reportData: sampleDatas, base64Logo },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { reportData: sampleDatas }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "150px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).send("Error generating PDF", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const stabilityDatas = {};

const setStablityData = (data) => {
  const sampleData = data.data;

  stabilityDatas.id = sampleData?.id ?? "";
  stabilityDatas.samplePlanId = sampleData?.samplePlanId ?? "";
  stabilityDatas.sampleId = sampleData?.sampleId ?? "";
  stabilityDatas.sampleName = sampleData?.sampleName ?? "";
  stabilityDatas.sampleType = sampleData?.sampleType ?? "";
  stabilityDatas.productMaterialName = sampleData?.productMaterialName ?? "";
  stabilityDatas.batchLotNumber = sampleData?.batchLotNumber ?? "";
  stabilityDatas.samplePriority = sampleData?.samplePriority ?? "";
  stabilityDatas.sampleQuantity = sampleData?.sampleQuantity ?? "";
  stabilityDatas.UOM = sampleData?.UOM ?? "";
  stabilityDatas.market = sampleData?.market ?? "";
  stabilityDatas.sampleBarCode = sampleData?.sampleBarCode ?? "";
  stabilityDatas.specificationId = sampleData?.specificationId ?? "";
  stabilityDatas.specificationAttachment =
    sampleData?.specificationAttachment ?? "";
  stabilityDatas.stpId = sampleData?.stpId ?? "";
  stabilityDatas.stpAttachment = sampleData?.stpAttachment ?? "";
  stabilityDatas.testName = sampleData?.testName ?? "";
  stabilityDatas.testMethod = sampleData?.testMethod ?? "";
  stabilityDatas.testParameter = sampleData?.testParameter ?? "";
  stabilityDatas.testingFrequency = sampleData?.testingFrequency ?? "";
  stabilityDatas.testingLocation = sampleData?.testingLocation ?? "";
  stabilityDatas.requiredInstrument = sampleData?.requiredInstrument ?? "";
  stabilityDatas.testGrouping = sampleData?.testGrouping ?? "";
  stabilityDatas.lsl = sampleData?.lsl ?? "";
  stabilityDatas.usl = sampleData?.usl ?? "";
  stabilityDatas.testingDeadline = sampleData?.testingDeadline ?? "";
  stabilityDatas.plannerName = sampleData?.plannerName ?? "";
  stabilityDatas.sampleDate = sampleData?.sampleDate ?? "";
  stabilityDatas.sampleSource = sampleData?.sampleSource ?? "";
  stabilityDatas.plannedDate = sampleData?.plannedDate ?? "";
  stabilityDatas.labTechnician = sampleData?.labTechnician ?? "";
  stabilityDatas.assignedDepartment = sampleData?.assignedDepartment ?? "";
  stabilityDatas.sampleCollectionDate = sampleData?.sampleCollectionDate ?? "";
  stabilityDatas.testingStartDate = sampleData?.testingStartDate ?? "";
  stabilityDatas.testingEndDate = sampleData?.testingEndDate ?? "";
  stabilityDatas.delayJustification = sampleData?.delayJustification ?? "";
  stabilityDatas.testingOutCome = sampleData?.testingOutCome ?? "";
  stabilityDatas.passFail = sampleData?.passFail ?? "";
  stabilityDatas.testPlanId = sampleData?.testPlanId ?? "";
  stabilityDatas.turnAroundTime = sampleData?.turnAroundTime ?? "";
  stabilityDatas.sampleRetestingDate = sampleData?.sampleRetestingDate ?? "";
  stabilityDatas.reviewDate = sampleData?.reviewDate ?? "";
  stabilityDatas.sampleStorageLocation =
    sampleData?.sampleStorageLocation ?? "";
  stabilityDatas.transportationMethod = sampleData?.transportationMethod ?? "";
  stabilityDatas.samplePreparationMethod =
    sampleData?.samplePreparationMethod ?? "";
  stabilityDatas.samplePackagingDetail =
    sampleData?.samplePackagingDetail ?? "";
  stabilityDatas.sampleLabel = sampleData?.sampleLabel ?? "";
  stabilityDatas.regulatoryRequirement =
    sampleData?.regulatoryRequirement ?? "";
  stabilityDatas.qualityControlCheck = sampleData?.qualityControlCheck ?? "";
  stabilityDatas.controlSampleReference =
    sampleData?.controlSampleReference ?? "";
  stabilityDatas.sampleIntegrityStatus =
    sampleData?.sampleIntegrityStatus ?? "";
  stabilityDatas.riskAssessment = sampleData?.riskAssessment ?? "";
  stabilityDatas.supervisor = sampleData?.supervisor ?? "";
  stabilityDatas.instrumentsReserved = sampleData?.instrumentsReserved ?? "";
  stabilityDatas.labAvailability = sampleData?.labAvailability ?? "";
  stabilityDatas.sampleCostEstimation = sampleData?.sampleCostEstimation ?? "";
  stabilityDatas.resourceUtilization = sampleData?.resourceUtilization ?? "";
  stabilityDatas.sampleMovementHistory =
    sampleData?.sampleMovementHistory ?? "";
  stabilityDatas.testingProgress = sampleData?.testingProgress ?? "";
  stabilityDatas.alertNotification = sampleData?.alertNotification ?? "";
  stabilityDatas.deviationLog = sampleData?.deviationLog ?? "";
  stabilityDatas.commentNotes = sampleData?.commentNotes ?? "";
  stabilityDatas.attachment = sampleData?.attachment ?? "";
  stabilityDatas.samplingFrequency = sampleData?.samplingFrequency ?? "";
  stabilityDatas.sampleDisposition = sampleData?.sampleDisposition ?? "";
  stabilityDatas.stabilityStudyType = sampleData?.stabilityStudyType ?? "";
  stabilityDatas.stabilityStudyProtocol =
    sampleData?.stabilityStudyProtocol ?? "";
  stabilityDatas.stabilityProtocolApprovalDate =
    sampleData?.stabilityProtocolApprovalDate ?? "";
  stabilityDatas.countryOfRegulatorySubmissions =
    sampleData?.countryOfRegulatorySubmissions ?? "";
  stabilityDatas.ichZone = sampleData?.ichZone ?? "";
  stabilityDatas.photoStabilityTestingResult =
    sampleData?.photoStabilityTestingResult ?? "";
  stabilityDatas.reConstitutionStability =
    sampleData?.reConstitutionStability ?? "";
  stabilityDatas.testingInterval = sampleData?.testingInterval ?? "";
  stabilityDatas.shelfLifeRecommendation =
    sampleData?.shelfLifeRecommendation ?? "";
  stabilityDatas.analysisType = sampleData?.analysisType ?? "";
  stabilityDatas.analysisDate = sampleData?.analysisDate ?? "";
  stabilityDatas.analysisResult = sampleData?.analysisResult ?? "";
  stabilityDatas.srSupportiveAttachment =
    sampleData?.srSupportiveAttachment ?? "";
  stabilityDatas.qaSupportiveAttachment =
    sampleData?.qaSupportiveAttachment ?? "";
  stabilityDatas.suSupportiveAttachment =
    sampleData?.suSupportiveAttachment ?? "";
  stabilityDatas.saSupportiveAttachment =
    sampleData?.saSupportiveAttachment ?? "";
  stabilityDatas.siSupportiveAttachment =
    sampleData?.siSupportiveAttachment ?? "";
  stabilityDatas.stabilityStudyProtocol =
    sampleData?.stabilityStudyProtocol ?? "";
  stabilityDatas.initiatorComment = sampleData?.initiatorComment ?? "";
  stabilityDatas.labTechnicianComment = sampleData?.labTechnicianComment ?? "";
  stabilityDatas.reviewerComment = sampleData?.reviewerComment ?? "";
  stabilityDatas.reviewerApprover = sampleData?.reviewerApprover ?? "";
  stabilityDatas.reviewDate = sampleData?.reviewDate ?? "";
  stabilityDatas.QaReviewerApprover = sampleData?.QaReviewerApprover ?? "";
  stabilityDatas.QaReviewerComment = sampleData?.QaReviewerComment ?? "";
  stabilityDatas.QaReviewDate = sampleData?.QaReviewDate ?? "";
  stabilityDatas.stage = sampleData?.stage ?? "";
  stabilityDatas.status = sampleData?.status ?? "";
  stabilityDatas.createdAt = sampleData?.createdAt ?? "";
};

export const generatePdfbyIdStability = async (req, res) => {
  const id = req.params.id;
  let sampleData;
  try {
    const sample = await fetch(
      `http://localhost:9000/get-Sample/${id}/stability`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    sampleData = await sample.json();

    setStablityData(sampleData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/gxplogo.png");

    if (!sampleData) {
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found" });
    }

    // Generate the barcode for the provided sample ID or any relevant string
    const barcodeBase64 = await generateBarcodeBase64(
      stabilityDatas.sampleBarCode
    );
    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render(
        "stabilityReport",
        { reportData: stabilityDatas, barcodeBase64: barcodeBase64 },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render(
        "stabilityHeader",
        { reportData: sampleDatas, base64Logo },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { reportData: sampleDatas }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "150px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).send("Error generating PDF", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const setSampleDataControlSamp = (data) => {
  const sampleData = data.data;

  sampleDatas.sampleId = sampleData?.sampleId ?? "";
  sampleDatas.productMaterialName = sampleData?.productMaterialName ?? "";
  sampleDatas.productMaterialCode = sampleData?.productMaterialCode ?? "";
  sampleDatas.sampleType = sampleData?.sampleType ?? "";
  sampleDatas.market = sampleData?.market ?? "";
  sampleDatas.arNo = sampleData?.arNo ?? "";
  sampleDatas.batchNo = sampleData?.batchNo ?? "";
  sampleDatas.mfgDate = sampleData?.mfgDate ?? "";
  sampleDatas.expiryDate = sampleData?.expiryDate ?? "";
  sampleDatas.quantity = sampleData?.quantity ?? "";
  sampleDatas.quantityWithdrawn = sampleData?.quantityWithdrawn ?? "";
  sampleDatas.currentQuantity = sampleData?.currentQuantity ?? "";
  sampleDatas.uom = sampleData?.uom ?? "";
  sampleDatas.storageLocation = sampleData?.storageLocation ?? "";
  sampleDatas.storageCondition = sampleData?.storageCondition ?? "";
  sampleDatas.visualInspectionSheduledOn =
    sampleData?.visualInspectionSheduledOn ?? "";
  sampleDatas.visualInspectionPerformedBy =
    sampleData?.visualInspectionPerformedBy ?? "";
  sampleDatas.anyAbnoramalObservation =
    sampleData?.anyAbnoramalObservation ?? "";
  sampleDatas.ObservationDate = sampleData?.ObservationDate ?? "";
  sampleDatas.destructionDueOn = sampleData?.destructionDueOn ?? "";
  sampleDatas.destroyedBy = sampleData?.destroyedBy ?? "";
  sampleDatas.neutralizingAgent = sampleData?.neutralizingAgent ?? "";
  sampleDatas.destructionDate = sampleData?.destructionDate ?? "";
  sampleDatas.remarks = sampleData?.remarks ?? "";
  sampleDatas.status = sampleData?.status ?? "";
  sampleDatas.initiatorName = sampleData?.initiatorName ?? "";
  sampleDatas.initiatorComment = sampleData?.initiatorComment ?? "";
  sampleDatas.initiatorReviewDate = sampleData?.initiatorReviewDate ?? "";
  sampleDatas.ReviewerName = sampleData?.ReviewerName ?? "";
  sampleDatas.ReviewerComment = sampleData?.ReviewerComment ?? "";
  sampleDatas.ReviewDate = sampleData?.ReviewDate ?? "";
};

export const generatePdfControlSample = async (req, res) => {
  const controlSampleId = req.params.id;
  let sampleData;
  try {
    const sample = await fetch(
      `http://localhost:9000/controlSample/get-control-sample/${controlSampleId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    sampleData = await sample.json();

    setSampleDataControlSamp(sampleData);
  } catch (error) {
    console.error("Error fetching APQR data:", error.message);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/gxplogo.png");

    if (!sampleData) {
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found" });
    }

    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render(
        "controlSampleReport",
        { reportData: sampleDatas },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render(
        "controlSampleHeader",
        { reportData: sampleDatas, base64Logo },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { reportData: sampleDatas }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "150px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).send("Error generating PDF", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const setSampleDataAnalyst = (data) => {
  const sampleData = data.data;

  sampleDatas.id = sampleData?.id ?? "";
  sampleDatas.analystId = sampleData?.analystId ?? "";
  sampleDatas.fullName = sampleData?.fullName ?? "";
  sampleDatas.dateOfBirth = sampleData?.dateOfBirth ?? "";
  sampleDatas.emailAddress = sampleData?.emailAddress ?? "";
  sampleDatas.phoneNumber = sampleData?.phoneNumber ?? "";
  sampleDatas.department = sampleData?.department ?? "";
  sampleDatas.jobTitle = sampleData?.jobTitle ?? "";
  sampleDatas.supervisorManagerName = sampleData?.supervisorManagerName ?? "";
  sampleDatas.qualificationId = sampleData?.qualificationId ?? "";
  sampleDatas.dateOfQualification = sampleData?.dateOfQualification ?? "";
  sampleDatas.qualifiedBy = sampleData?.qualifiedBy ?? "";
  sampleDatas.qualificationType = sampleData?.qualificationType ?? "";
  sampleDatas.expirationDate = sampleData?.expirationDate ?? "";
  sampleDatas.qualificationStatus = sampleData?.qualificationStatus ?? "";
  sampleDatas.trainingProgramName = sampleData?.trainingProgramName ?? "";
  sampleDatas.trainingStartDate = sampleData?.trainingStartDate ?? "";
  sampleDatas.trainingCompletionDate = sampleData?.trainingCompletionDate ?? "";
  sampleDatas.trainingCompletionStatus =
    sampleData?.trainingCompletionStatus ?? "";
  sampleDatas.certificationNameNumber =
    sampleData?.certificationNameNumber ?? "";
  sampleDatas.certificationBody = sampleData?.certificationBody ?? "";
  sampleDatas.certificationDate = sampleData?.certificationDate ?? "";
  sampleDatas.nextReCertificationDate =
    sampleData?.nextReCertificationDate ?? "";
  sampleDatas.competencyTestName = sampleData?.competencyTestName ?? "";
  sampleDatas.testDate = sampleData?.testDate ?? "";
  sampleDatas.testResults = sampleData?.testResults ?? "";
  sampleDatas.testScore = sampleData?.testScore ?? "";
  sampleDatas.evaluatorName = sampleData?.evaluatorName ?? "";
  sampleDatas.evaluatorComments = sampleData?.evaluatorComments ?? "";
  sampleDatas.techniqueSkillName = sampleData?.techniqueSkillName ?? "";
  sampleDatas.qualificationDate = sampleData?.qualificationDate ?? "";
  sampleDatas.skillLevel = sampleData?.skillLevel ?? "";
  sampleDatas.reQualificationRequired =
    sampleData?.reQualificationRequired ?? "";
  sampleDatas.reQualificationDueDate = sampleData?.reQualificationDueDate ?? "";
  sampleDatas.instrumentNameId = sampleData?.instrumentNameId ?? "";
  sampleDatas.methodNameId = sampleData?.methodNameId ?? "";
  sampleDatas.qualificationLevel = sampleData?.qualificationLevel ?? "";
  sampleDatas.sopNameId = sampleData?.sopNameId ?? "";
  sampleDatas.sopVersion = sampleData?.sopVersion ?? "";
  sampleDatas.yearsOfExperience = sampleData?.yearsOfExperience ?? "";
  sampleDatas.previousJobRoles = sampleData?.previousJobRoles ?? "";
  sampleDatas.previousLabsWorkedIn = sampleData?.previousLabsWorkedIn ?? "";
  sampleDatas.specializations = sampleData?.specializations ?? "";
  sampleDatas.approvalDate = sampleData?.approvalDate ?? "";
  sampleDatas.approverName = sampleData?.approverName ?? "";
  sampleDatas.approverSignature = sampleData?.approverSignature ?? "";
  sampleDatas.commentsNotes = sampleData?.commentsNotes ?? "";
  sampleDatas.modificationDate = sampleData?.modificationDate ?? "";
  sampleDatas.modifiedBy = sampleData?.modifiedBy ?? "";
  sampleDatas.changeDescription = sampleData?.changeDescription ?? "";
  sampleDatas.stage = sampleData?.stage ?? "1";
  sampleDatas.status = sampleData?.status ?? "Under Initiation";
  sampleDatas.initiatorName = sampleData?.initiatorName ?? "";
  sampleDatas.initiatorComment = sampleData?.initiatorComment ?? "";
  sampleDatas.initiatorReviewDate = sampleData?.initiatorReviewDate ?? "";
  sampleDatas.ReviewerName = sampleData?.ReviewerName ?? "";
  sampleDatas.ReviewerComment = sampleData?.ReviewerComment ?? "";
  sampleDatas.ReviewDate = sampleData?.ReviewDate ?? "";
};

export const generatePdfAnalyst = async (req, res) => {
  const analystId = req.params.id;

  let sampleData;
  try {
    const sample = await fetch(
      `http://localhost:9000/analyst/get-analyst/${analystId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    sampleData = await sample.json();

    setSampleDataAnalyst(sampleData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/gxplogo.png");

    if (!sampleData) {
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found" });
    }

    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render(
        "analystReport",
        { reportData: sampleDatas },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render(
        "analaystHeader",
        { reportData: sampleDatas, base64Logo },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { reportData: sampleDatas }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "150px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).send("Error generating PDF", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const typeData = {};

const setTypeData = (data) => {
  typeData.Made = data.Made ?? "";
  typeData.Model = data.Model ?? "";
  typeData.sopNo = data.sopNo ?? "";
  typeData.equipNo = data.equipNo ?? "";
  typeData.Category = data.Category ?? "";
  typeData.software = data.software ?? "";
  typeData.uniqueId = data.uniqueId ?? "";
  typeData.Instrument = data.Instrument ?? "";
  typeData.suppliedBy = data.suppliedBy ?? "";
  typeData.InstalledAt = data.InstalledAt ?? "";
  typeData.description = data.description ?? "";
  typeData.installedOn = data.installedOn ?? "";
  typeData.InstrumentId = data.InstrumentId ?? "";
  typeData.capacitySize = data.capacitySize ?? "";
  typeData.containsModule = data.containsModule ?? "";
  typeData.calibrationStatus = data.calibrationStatus ?? "";
  typeData.warrantyExpiresOn = data.warrantyExpiresOn ?? "";
  typeData.manufacturerSerialNo = data.manufacturerSerialNo ?? "";
  typeData.instrumentCategoryDescription =
    data.instrumentCategoryDescription ?? "";
};

export const generatePdfIMRegistration = async (req, res) => {
  try {
    const { type, id } = req.params;
    const typeData = await fetch(
      `http://localhost:9000/get-lims/${type}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const imData = await typeData.json();
    setTypeData(imData);
  } catch (error) {
    console.error("Error fetching:", error);
    return res.status(500).send("Error fetching data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/gxplogo.png");

    if (!typeData) {
      return res.status(404).json({ error: true, message: " Data not found" });
    }

    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render(
        "iMRegistrationReport",
        { reportData: typeData },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render(
        "typeDataHeader",
        { reportData: typeData, base64Logo: base64Logo },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { reportData: typeData }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "150px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).send("Error generating PDF", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
