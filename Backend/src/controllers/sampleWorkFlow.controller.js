import { SampleWorkFlow } from "../models/sampleWorkFlow.model.js";

import { FormAuditTrail } from "../models/formAuditTrail.model.js";

import { getFileUrl } from "../middleware/authentication.js";

import { sequelize } from "../config/db.js";

import { User } from "../models/user.model.js";

import bcrypt from "bcrypt";

import moment from "moment";

export const createSample = async (req, res) => {
  const t = await sequelize.transaction();
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

    const createSample = await SampleWorkFlow.create(sampleData);

    // Create audit trail
    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: null,
        new_value: createSample || "new",
        previous_status: "Not Applicable",
        new_status: "Under Initiation",
        field_name: "Not Applicable",
        comments: req.body.comments || "Not Applicable",
        action: `${sampleData.types} Created`,
      },
      { transaction: t }
    );

    await t.commit();
    return res.status(200).json({ error: false, data: createSample });
  } catch (e) {
    console.error(e);
    await t.rollback();
    return res

      .status(500)

      .json({ error: true, message: "Error creating sample", data: e.message });
  }
};

export const getSample = async (req, res) => {
  try {
    const { type } = req.params;

    const sampleData = await SampleWorkFlow.findAll({ where: { types: type } });

    res.status(200).json({ error: false, data: sampleData });
  } catch (error) {
    res

      .status(500)

      .json({ message: "Error fetching sample", error: error.message });
  }
};

export const getSampleById = async (req, res) => {
  try {
    const { id, type } = req.params;

    const sampleData = await SampleWorkFlow.findOne({
      where: { id: id, types: type },
    });

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
  const t = await sequelize.transaction();
  try {
    const { id, type } = req.params;

    const updatedData = req.body;

    const sampleData = await SampleWorkFlow.findOne({
      where: { id: id, types: type },
    });

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

    // await sampleData.update(updatedData);

    // for (const field in updatedData) {
    //   const oldValue = sampleData[field];
    //   const newValue = updatedData[field];

    //   if (newValue !== oldValue) {
    //     await FormAuditTrail.create(
    //       {
    //         changed_by: req.body.userId || 1,
    //         previous_value: JSON.stringify(oldValue),
    //         new_value: JSON.stringify(newValue),
    //         previous_status: "Not Applicable",
    //         new_status: "Under Initiation",
    //         field_name: `${field}`,
    //         comments: req.body.comments || "Not Applicable",
    //         action: "Updated",
    //       },
    //       { transaction: t }
    //     );
    //   }
    // }
    // Track changes for audit trail
    const auditPromises = [];
    Object.keys(updatedData).forEach((field) => {
      const oldValue = sampleData[field];
      const newValue = updatedData[field];

      if (newValue !== oldValue) {
        auditPromises.push(
          FormAuditTrail.create(
            {
              changed_by: req.body.userId || 1,
              previous_value: oldValue,
              new_value: newValue,
              previous_status: "Not Applicable",
              new_status: "Under Initiation",
              field_name: field,
              comments: req.body.comments || "Not Applicable",
              action: "Updated",
            },
            { transaction: t }
          )
        );
      }
    });

    // Apply updates and commit changes
    await sampleData.update(updatedData, { transaction: t });
    await Promise.all(auditPromises);
    await t.commit();

    // await t.commit();
    res.status(200).json({ error: false, data: sampleData });
  } catch (error) {
    await t.rollback();
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

    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: "Not Applicable",
        new_value: "Not Applicable",
        previous_status: "Under Initiation",
        new_status: "Under Analysis Review",
        field_name: "Not Applicable",
        comments: req.body.comments || "Not Applicable",
        action: "Submit To Analysis",
      },
      { transaction: transaction }
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

    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: "Not Applicable",
        new_value: "Not Applicable",
        previous_status: "Under Analysis Review",
        new_status: "Under Supervisor Review",
        field_name: "Not Applicable",
        comments: req.body.comments || "Not Applicable",
        action: "Submit To Supervisor",
      },
      { transaction: transaction }
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

    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: "Not Applicable",
        new_value: "Not Applicable",
        previous_status: "Under Supervisor Review",
        new_status: "Under QA Review",
        field_name: "Not Applicable",
        comments: req.body.comments || "Not Applicable",
        action: "Submit To QA",
      },
      { transaction: transaction }
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

    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: "Not Applicable",
        new_value: "Not Applicable",
        previous_status: "Under QA Review",
        new_status: "QA Approved",
        field_name: "Not Applicable",
        comments: req.body.comments || "Not Applicable",
        action: "QA Approved",
      },
      { transaction: transaction }
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

    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: null,
        new_value: "Not Applicable",
        previous_status: "Approved",
        new_status: "Closed",
        field_name: "Not Applicable",
        comments: req.body.comments || "Not Applicable",
        action: "Closed",
      },
      { transaction: transaction }
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
    const { sampleId, comments } = req.body;

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

    // // Initialize comments as an array, ensuring no undefined or nested issues
    // const commentsArray = Array.isArray(sampleData.comments)
    //   ? [...sampleData.comments]
    //   : [];

    // // Add the new comment to the commentsArray
    // commentsArray.push({
    //   userId: newComment.userId,
    //   comment: newComment.comment,
    //   userType: newComment.userType,
    // });

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
        // comments: commentsArray,
        stage: newStage,
      },

      { transaction }
    );

    await FormAuditTrail.create(
      {
        changed_by: req.body.userId || "1",
        previous_value: currentStage,
        new_value: newStage,
        previous_status: currentStatus,
        new_status: newStatus,
        field_name: "Not Applicable",
        comments: comments || "Not Applicable",
        action: `Stage transition from ${currentStatus} to ${newStatus}`,
      },
      { transaction: transaction }
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

export const  getSampleAuditTrail = async (req, res) => {
  try {
    const auditTrail = await FormAuditTrail.findAll({
      include: {
        model: User,
        attributes: ["user_id", "name"],
      },
      order: [["auditTrail_id", "DESC"]],
    });

    if (!auditTrail || auditTrail.length === 0) {
      return res.status(404).json({
        error: true,
        message: "No audit trail found.",
      });
    }

    return res.status(200).json({ error: false, auditTrail });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Error retrieving audit trail: ${error.message}`,
    });
  }
};
