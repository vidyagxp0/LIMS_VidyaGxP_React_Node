import { sequelize } from "../config/db.js";
import { FormAuditTrail } from "../models/formAuditTrail.js";

export const createAuditTrail = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const data = await FormAuditTrail.create({
      limsId: newLIMS.limsId,
      changed_by: userId,
      previous_value: null,
      new_value: newLIMS.limsId,
      previous_status: "Not Applicable",
      new_status: "Under Initiation",
      declaration: declaration,
      comments: comments,
      action: "LIMS Created",
    });
    await transaction.commit();
    return res.status(200).json({ error: false, data });
  } catch (auditError) {
    console.error("Failed to log audit trail:", auditError.message);
    await transaction.rollback();
    return res.status(500).json({
      error: true,
      message: `Error logging audit trail: ${auditError.message}`,
    });
  }
};
