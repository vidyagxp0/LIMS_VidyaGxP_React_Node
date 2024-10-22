import { AnalystQualification } from "../models/analystQualification.model.js";

import { sequelize } from "../config/db.js";

import { User } from "../models/user.model.js";

import bcrypt from "bcrypt";

import moment from "moment";

export const createAnalyst = async (req, res) => {
  try {
    const analystData = req.body;
    const analyst = await AnalystQualification.create(analystData);

    return res.status(200).json({ error: false, data: analyst });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: true,
      message: "Error creating analyst",
      data: e.message,
    });
  }
};

export const getAnalyst = async (req, res) => {
  try {
    const analystData = await AnalystQualification.findAll();

    res.status(200).json({ error: false, data: analystData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching analyst", error: error.message });
  }
};

export const getAnalystById = async (req, res) => {
  try {
    const { id } = req.params;

    const analystData = await AnalystQualification.findOne({
      where: { id: id },
    });

    if (!analystData) {
      return res.status(404).json({ message: "analystData not found" });
    }

    res.status(200).json({ error: false, data: analystData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching analyst", error: error.message });
  }
};

export const updateAnalyst = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = req.body;

    const analystData = await AnalystQualification.findOne({
      where: { id: id },
    });

    if (!analystData) {
      return res.status(404).json({ message: "analystData not found" });
    }

    await analystData.update(updatedData);

    res.status(200).json({ error: false, data: analystData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating analyst", error: error.message });
  }
};

export const deleteAnalyst = async (req, res) => {
  try {
    const { id } = req.params;

    const analystData = await AnalystQualification.findByPk(id);

    if (!analystData) {
      return res.status(404).json({ message: "analystData not found" });
    }

    await analystData.destroy();

    res.status(200).json({ message: "Analyst data deleted successfully" });
  } catch (error) {
    res

      .status(500)

      .json({ message: "Error deleting analyst", error: error.message });
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

export const submitToAnalyst = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, analystId, comment } = req.body;

    if (!analystId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a analyst ID." });
    }

    const analystData = await AnalystQualification.findOne({
      where: { id: analystId },

      transaction,
    });

    if (!analystData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "analyst data not found." });
    }

    if (analystData.stage !== "1") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message: "Process is not in a valid stage to be submit for analyst.",
      });
    }

    await analystData.update(
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

      message: "Successfully submit to analyst review",
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
    const { name, analystId, comment } = req.body;

    if (!analystId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a analyst ID." });
    }

    const analystData = await AnalystQualification.findOne({
      where: { id: analystId },
      transaction,
    });

    if (!analystData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "analyst data not found." });
    }

    if (analystData.stage !== "2") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message: "Process is not in a valid stage to be submit to supervisor.",
      });
    }

    await analystData.update(
      {
        supervisorName: name,

        supervisorComment: comment,

        status: "Pending Supervisor",

        stage: 3,

        supervisorReviewDate: moment().format("DD/MM/YYYY h:mm:ss a"),
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

export const submitToQAReview = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, analystId, comment } = req.body;

    if (!analystId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a analyst ID." });
    }

    const analystData = await AnalystQualification.findOne({
      where: { id: analystId },

      transaction,
    });

    if (!analystData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "analyst data not found." });
    }

    if (analystData.stage !== "3") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message: "Process is not in a valid stage for approved.",
      });
    }

    await analystData.update(
      {
        QaReviewerName: name,

        QaReviewerComment: comment,

        status: "QA Approved",

        stage: 4,

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
    const { analystId } = req.body;

    if (!analystId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a analyst ID." });
    }

    const analystData = await AnalystQualification.findOne({
      where: { id: analystId },

      transaction,
    });

    if (!analystData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "analyst data not found." });
    }

    if (analystData.stage !== "4") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message:
          "Process is not in a valid stage to be sent for closed review.",
      });
    }

    await analystData.update(
      {
        status: "Closed",

        stage: 5,
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
    const { analystId } = req.body;

    if (!analystId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a analyst ID." });
    }

    const analystData = await AnalystQualification.findOne({
      where: { id: analystId },

      transaction,
    });

    if (!analystData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "analyst data not found." });
    }

    if (analystData.stage == "5") {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "analyst already closed." });
    }

    // Define stage and status mappings

    const stageMapping = {
      2: { newStatus: "Under Initiation", newStage: 1 },

      3: { newStatus: "Pending Analysis", newStage: 2 },

      4: { newStatus: "Pending Supervisor", newStage: 3 },

      5: { newStatus: "QA Approved", newStage: 4 },

    };

    const currentStage = analystData.stage;

    const currentStatus = analystData.status;

    console.log(currentStage, currentStatus);

    if (!stageMapping[currentStage]) {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message: "Process is not in a valid stage to be sent for review.",
      });
    }

    // Update AnalystQualification stage and status

    const { newStatus, newStage } = stageMapping[currentStage];

    console.log(newStage, newStatus);

    const updatedAnalystQualification = await analystData.update(
      {
        status: newStatus,

        stage: newStage,
      },

      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,

      message: `analyst stage transition successfully opened from ${currentStatus} to ${newStatus}`,

      data: updatedAnalystQualification,
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
