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
  sampleDatas.sampleBarCode = sampleData?.sampleBarCode ?? "";
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
  const sampleId = req.params.id;
  const type = req.params.type;
  let sampleData;
  try {
    const sample = await fetch(
      `http://localhost:9000/get-Sample/${sampleId}/${type}`,
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
