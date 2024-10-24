import { ControlSample } from "../models/controlSample.model.js";

import { sequelize } from "../config/db.js";

import moment from "moment";

export const createControlSample = async (req, res) => {
  try {
    const controlSampleData = req.body;
    const createControlSample = await ControlSample.create(controlSampleData);

    return res.status(200).json({ error: false, data: createControlSample });
  } catch (e) {
    console.error(e);

    return res

      .status(500)

      .json({
        error: true,
        message: "Error creating control sample",
        data: e.message,
      });
  }
};

export const getControlSample = async (req, res) => {
  try {
    const controlSampleData = await ControlSample.findAll();

    res.status(200).json({ error: false, data: controlSampleData });
  } catch (error) {
    res

      .status(500)

      .json({ message: "Error fetching control sample", error: error.message });
  }
};

export const getControlSampleById = async (req, res) => {
  try {
    const { id } = req.params;

    const controlsampleData = await ControlSample.findOne({
      where: { id: id },
    });

    if (!controlsampleData) {
      return res.status(404).json({ message: "controlSample Data not found" });
    }

    res.status(200).json({ error: false, data: controlsampleData });
  } catch (error) {
    res

      .status(500)

      .json({ message: "Error fetching control sample", error: error.message });
  }
};

export const updateControlSample = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = req.body;

    const controlSampleData = await ControlSample.findOne({
      where: { id: id },
    });

    if (!controlSampleData) {
      return res.status(404).json({ message: "Control Sample Data not found" });
    }

    await controlSampleData.update(updatedData);

    res.status(200).json({ error: false, data: controlSampleData });
  } catch (error) {
    res

      .status(500)

      .json({ message: "Error updating control sample", error: error.message });
  }
};

export const deleteControlSample = async (req, res) => {
  try {
    const { id } = req.params;

    const controlSampleData = await ControlSample.findByPk(id);

    if (!controlSampleData) {
      return res.status(404).json({ message: "Control sample data not found" });
    }

    await controlSampleData.destroy();

    res.status(200).json({ message: "Control Sample deleted successfully" });
  } catch (error) {
    res

      .status(500)

      .json({ message: "Error deleting control sample", error: error.message });
  }
};

export const submitToControlSample = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, controlSampleId, comment } = req.body;

    if (!controlSampleId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a controlSample ID." });
    }

    const controlSampleData = await ControlSample.findOne({
      where: { id: controlSampleId },

      transaction,
    });

    if (!controlSampleData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "control sample data not found." });
    }

    if (controlSampleData.stage !== "1") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message:
          "Process is not in a valid stage to be submit for control sample.",
      });
    }

    await controlSampleData.update(
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

      message: "Successfully submit to control sample review",
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

export const submitToReviewer = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, controlSampleId, comment } = req.body;

    if (!controlSampleId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a control sample ID." });
    }

    const controlSampleData = await ControlSample.findOne({
      where: { id: controlSampleId },

      transaction,
    });

    if (!controlSampleData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "control sample data not found." });
    }

    if (controlSampleData.stage !== "2") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message: "Process is not in a valid stage for approved.",
      });
    }

    await controlSampleData.update(
      {
        ReviewerName: name,

        ReviewerComment: comment,

        status: "Reviewer Approved",

        stage: 3,

        ReviewDate: moment().format("DD/MM/YYYY h:mm:ss a"),
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
    const { controlSampleId } = req.body;

    if (!controlSampleId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a control sample ID." });
    }

    const controlSampleData = await ControlSample.findOne({
      where: { id: controlSampleId },

      transaction,
    });

    if (!controlSampleData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "control sample data not found." });
    }

    if (controlSampleData.stage !== "3") {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message:
          "Process is not in a valid stage to be sent for closed review.",
      });
    }

    await controlSampleData.update(
      {
        status: "Closed",

        stage: 4,
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
    const { controlSampleId } = req.body;

    if (!controlSampleId) {
      return res

        .status(400)

        .json({ error: true, message: "Please provide a control sample ID." });
    }

    const controlSampleData = await ControlSample.findOne({
      where: { id: controlSampleId },

      transaction,
    });

    if (!controlSampleData) {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "control sample data not found." });
    }

    if (controlSampleData.stage == "4") {
      await transaction.rollback();

      return res

        .status(404)

        .json({ error: true, message: "control sample already closed." });
    }

    // Define stage and status mappings

    const stageMapping = {
      2: { newStatus: "Under Initiation", newStage: 1 },

      3: { newStatus: "Pending Analysis", newStage: 2 },

      4: { newStatus: "Reviewer Approved", newStage: 3 },
    };

    const currentStage = controlSampleData.stage;

    const currentStatus = controlSampleData.status;

    console.log(currentStage, currentStatus);

    if (!stageMapping[currentStage]) {
      await transaction.rollback();

      return res.status(400).json({
        error: true,

        message: "Process is not in a valid stage to be sent for review.",
      });
    }

    // Update control sampleQualification stage and status

    const { newStatus, newStage } = stageMapping[currentStage];

    console.log(newStage, newStatus);

    const updatedControlSample = await controlSampleData.update(
      {
        status: newStatus,

        stage: newStage,
      },

      { transaction }
    );

    await transaction.commit();

    res.status(200).json({
      error: false,

      message: `control sample stage transition successfully opened from ${currentStatus} to ${newStatus}`,

      data: updatedControlSample,
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
