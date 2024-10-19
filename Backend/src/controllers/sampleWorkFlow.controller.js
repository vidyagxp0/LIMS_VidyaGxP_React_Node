import { SampleWorkFlow } from "../models/sampleWorkFlow.model.js";
import { getFileUrl } from "../middleware/authentication.js";
import { sequelize } from "../config/db.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import moment from "moment";

export const createSample = async (req, res) => {
  try {
    const sampleData = req.body;
   
    if (req.files && req.files["specificationAttachment"]) {
      sampleData.specificationAttachment = getFileUrl(
        req.files["specificationAttachment"][0].filename
      );
    }
    if (req.files && req.files["stpAttachment"]) {
      sampleData.stpAttachment = getFileUrl(
        req.files["stpAttachment"][0].filename
      );
    }
    if (req.files && req.files["attachment"]) {
      sampleData.attachment = getFileUrl(req.files["attachment"][0].filename);
    }
    if (req.files && req.files["srSupportiveAttachment"]) {
      sampleData.srSupportiveAttachment = getFileUrl(req.files["srSupportiveAttachment"][0].filename);
    }
    if (req.files && req.files["qaSupportiveAttachment"]) {
      sampleData.qaSupportiveAttachment = getFileUrl(req.files["qaSupportiveAttachment"][0].filename);
    }
    if (req.files && req.files["suSupportiveAttachment"]) {
      sampleData.suSupportiveAttachment = getFileUrl(req.files["suSupportiveAttachment"][0].filename);
    }
    if (req.files && req.files["saSupportiveAttachment"]) {
      sampleData.saSupportiveAttachment = getFileUrl(req.files["saSupportiveAttachment"][0].filename);
    }
    if (req.files && req.files["siSupportiveAttachment"]) {
      sampleData.siSupportiveAttachment = getFileUrl(req.files["siSupportiveAttachment"][0].filename);
    }
    if (req.files && req.files["stabilityStudyProtocol"]) {
      sampleData.stabilityStudyProtocol = getFileUrl(req.files["stabilityStudyProtocol"][0].filename);
    }

    const createSample = await SampleWorkFlow.create(sampleData);
    return res.status(200).json({ error: false, data: createSample });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: true, message: "Error creating sample", data: e.message });
  }
};

export const getSample = async (req, res) => {
  try {
    const sampleData = await SampleWorkFlow.findAll();
    res.status(200).json({ error: false, data: sampleData });
  } catch (error) {
    res 
      .status(500)
      .json({ message: "Error fetching sample", error: error.message });
  }
};

export const getSampleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sampleData = await SampleWorkFlow.findByPk(id);
    if (!sampleData) {
      return res.status(404).json({ message: "SampleData not found" });
    }
    res.status(200).json({ error: false, data: sampleData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching sample", error: error.message });
  }
};

export const updateSample = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const sampleData = await SampleWorkFlow.findByPk(id);

    if (!sampleData) {
      return res.status(404).json({ message: "SampleData not found" });
    }

    if (req.files && req.files["specificationAttachment"]) {
      sampleData.specificationAttachment = getFileUrl(
        req.files["specificationAttachment"][0].filename
      );
    }
    if (req.files && req.files["stpAttachment"]) {
      sampleData.stpAttachment = getFileUrl(
        req.files["stpAttachment"][0].filename
      );
    }
    if (req.files && req.files["attachment"]) {
      sampleData.attachment = getFileUrl(req.files["attachment"][0].filename);
    }
     if (req.files && req.files["srSupportiveAttachment"]) {
       sampleData.srSupportiveAttachment = getFileUrl(
         req.files["srSupportiveAttachment"][0].filename
       );
     }
     if (req.files && req.files["qaSupportiveAttachment"]) {
       sampleData.qaSupportiveAttachment = getFileUrl(
         req.files["qaSupportiveAttachment"][0].filename
       );
     }
     if (req.files && req.files["suSupportiveAttachment"]) {
       sampleData.suSupportiveAttachment = getFileUrl(
         req.files["suSupportiveAttachment"][0].filename
       );
     }
     if (req.files && req.files["saSupportiveAttachment"]) {
       sampleData.saSupportiveAttachment = getFileUrl(
         req.files["saSupportiveAttachment"][0].filename
       );
     }
     if (req.files && req.files["siSupportiveAttachment"]) {
       sampleData.siSupportiveAttachment = getFileUrl(
         req.files["siSupportiveAttachment"][0].filename
       );
     }
     if (req.files && req.files["stabilityStudyProtocol"]) {
       sampleData.stabilityStudyProtocol = getFileUrl(
         req.files["stabilityStudyProtocol"][0].filename
       );
     }

    await sampleData.update(updatedData);
    res.status(200).json({ error: false, data: sampleData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating sample", error: error.message });
  }
};

export const deleteSample = async (req, res) => {
  try {
    const { id } = req.params;
    const sampleData = await SampleWorkFlow.findByPk(id);

    if (!sampleData) {
      return res.status(404).json({ message: "SampleData not found" });
    }

    await sampleData.destroy();
    res.status(200).json({ message: "Sample data deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting sample", error: error.message });
  }
};

export const eSignature = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { user_id: req.user.userId, isActive: true },
      transaction,
    });

    if (!user) {
      await transaction.rollback();
      return res.status(401).json({ error: true, message: "user not found" });
    }

    if (user.email !== email) {
      await transaction.rollback();
      return res
        .status(401)
        .json({ error: true, message: "unauthorized email" });
    }

    const verifyEmail = await User.findOne({
      where: { email: email, isActive: true },
      transaction,
    });

    if (!verifyEmail) {
      await transaction.rollback();
      return res.status(401).json({ error: true, message: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      await transaction.rollback();
      return res
        .status(401)
        .json({ error: true, message: "Invalid password." });
    }
    await transaction.commit();
    return res
      .status(200)
      .json({ error: false, message: "E-signature verified" });
  } catch (error) {
    await transaction.rollback();
    console.error("Error e-signature verification:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const submitToReview = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, sampleId, comment } = req.body;

    if (!sampleId) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide a sample ID." });
    }
    const sampleData = await SampleWorkFlow.findOne({
      where: { id: sampleId },
      transaction,
    });

    if (!sampleData) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found." });
    }

    if (sampleData.stage !== "1") {
      await transaction.rollback();
      return res.status(400).json({
        error: true,
        message: "Process is not in a valid stage to be submit for review.",
      });
    }

    await sampleData.update(
      {
        initiatorName: name,
        initiatorComment: comment,
        status: "Pending Analysis",
        stage: 2,
        initiatorReviewDate: moment().format("DD/MM/YYYY h:mm:ss a"),
      },
      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "Successfully submit to analysis review",
    });
  } catch (error) {
    if (!transaction.finished) {
      await transaction.rollback();
    }
    return res.status(500).json({
      error: true,
      message: `Error during sending process to analysis review: ${error.message}`,
    });
  }
};

export const submitToSupervisor = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, sampleId, comment } = req.body;

    if (!sampleId) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide a Sample ID." });
    }
    const sampleData = await SampleWorkFlow.findOne({
      where: { id: sampleId },
      transaction,
    });

    if (!sampleData) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found." });
    }

    if (sampleData.stage !== "2") {
      await transaction.rollback();
      return res.status(400).json({
        error: true,
        message: "Process is not in a valid stage to be submit to supervisor.",
      });
    }

    await sampleData.update(
      {
        labTechnicianName: name,
        labTechnicianComment: comment,
        status: "pending Supervisor",
        stage: 3,
        labTechnicianReviewDate: moment().format("DD/MM/YYYY h:mm:ss a"),
      },
      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "Successfully submit to supervisor",
    });
  } catch (error) {
    if (!transaction.finished) {
      await transaction.rollback();
    }
    return res.status(500).json({
      error: true,
      message: `Error during sending process to supervisor: ${error.message}`,
    });
  }
};

export const submitToQA = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, sampleId, comment } = req.body;

    if (!sampleId) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide a Sample ID." });
    }
    const sampleData = await SampleWorkFlow.findOne({
      where: { id: sampleId },
      transaction,
    });

    if (!sampleData) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found." });
    }

    if (sampleData.stage !== "3") {
      await transaction.rollback();
      return res.status(400).json({
        error: true,
        message: "Process is not in a valid stage to be submit to QA.",
      });
    }

    await sampleData.update(
      {
        reviewerApprover: name,
        reviewerComment: comment,
        status: "pending QA",
        stage: 4,
        reviewDate: moment().format("DD/MM/YYYY h:mm:ss a"),
      },
      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "Successfully submit to QA",
    });
  } catch (error) {
    if (!transaction.finished) {
      await transaction.rollback();
    }
    return res.status(500).json({
      error: true,
      message: `Error during sending process to QA: ${error.message}`,
    });
  }
};

export const submitToQAReview = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, sampleId, comment } = req.body;

    if (!sampleId) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide a Sample ID." });
    }
    const sampleData = await SampleWorkFlow.findOne({
      where: { id: sampleId },
      transaction,
    });

    if (!sampleData) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found." });
    }

    if (sampleData.stage !== "4") {
      await transaction.rollback();
      return res.status(400).json({
        error: true,
        message: "Process is not in a valid stage for approved.",
      });
    }

    await sampleData.update(
      {
        QaReviewerApprover: name,
        QaReviewerComment: comment,
        status: "QA Approved",
        stage: 5,
        QaReviewDate: moment().format("DD/MM/YYYY h:mm:ss a"),
      },
      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "Successfully approved",
    });
  } catch (error) {
    if (!transaction.finished) {
      await transaction.rollback();
    }
    return res.status(500).json({
      error: true,
      message: `Error during sending process for approved: ${error.message}`,
    });
  }
};

export const submitToClosed = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { sampleId } = req.body;

    if (!sampleId) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide a Sample ID." });
    }
    const sampleData = await SampleWorkFlow.findOne({
      where: { id: sampleId },
      transaction,
    });

    if (!sampleData) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found." });
    }

    if (sampleData.stage !== "5") {
      await transaction.rollback();
      return res.status(400).json({
        error: true,
        message:
          "Process is not in a valid stage to be sent for closed review.",
      });
    }

    await sampleData.update(
      {
        status: "Closed",
        stage: 6,
      },
      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,
      message: "Successfully closed",
    });
  } catch (error) {
    if (!transaction.finished) {
      await transaction.rollback();
    }
    return res.status(500).json({
      error: true,
      message: `Error during sending process for closed: ${error.message}`,
    });
  }
};

export const ReviewToOpen = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { sampleId } = req.body;

    if (!sampleId) {
      return res
        .status(400)
        .json({ error: true, message: "Please provide a Sample ID." });
    }
    const sampleData = await SampleWorkFlow.findOne({
      where: { id: sampleId },
      transaction,
    });

    if (!sampleData) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample data not found." });
    }
    if (sampleData.stage == "6") {
      await transaction.rollback();
      return res
        .status(404)
        .json({ error: true, message: "Sample already closed." });
    }

    // Define stage and status mappings
    const stageMapping = {
      2: { newStatus: "Under Initiation", newStage: 1 },
      3: { newStatus: "Pending Analysis", newStage: 2 },
      4: { newStatus: "Pending Supervisor", newStage: 3 },
      5: { newStatus: "Pending QA", newStage: 4 },
      6: { newStatus: "QA Approved", newStage: 5 },
      // 7: { newStatus: "Pending Supervisor", newStage: 6 },
    };

    const currentStage = sampleData.stage;
    const currentStatus = sampleData.status;
    console.log(currentStage, currentStatus);
    if (!stageMapping[currentStage]) {
      await transaction.rollback();
      return res.status(400).json({
        error: true,
        message: "Process is not in a valid stage to be sent for review.",
      });
    }

    // Update SampleWorkFlow stage and status
    const { newStatus, newStage } = stageMapping[currentStage];
    console.log(newStage, newStatus);
    const updatedSampleWorkFlow = await sampleData.update(
      {
        status: newStatus,
        stage: newStage,
      },
      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,
      message: `Sample stage transition successfully opened from ${currentStatus} to ${newStatus}`,
      data: updatedSampleWorkFlow,
    });
  } catch (error) {
    if (!transaction.finished) {
      await transaction.rollback();
    }
    return res.status(500).json({
      error: true,
      message: `Error during sending review to initiation: ${error.message}`,
    });
  }
};
