import { getFileUrl } from "../middleware/authentication.js";
import { LIMS } from "../models/lims.model.js";

export const createNewLIMS = async (data, transaction) => {
  return await LIMS.create(data, { transaction });
};

export const findLIMSById = async (id) => {
  return await LIMS.findOne({ where: { limsId: id } });
};

export const updateLIMSField = async (
  limsRecord,
  fieldName,
  sno,
  updateData,
  filename,
  transaction
) => {
  const fieldArray = limsRecord[fieldName];
  console.log(fieldArray);
  if (!Array.isArray(fieldArray)) {
    throw new Error(`${fieldName} is not an array or does not exist`);
  }
  const fieldIndex = fieldArray.findIndex(
    (item) => item && item["sno"] == sno
  );

  if (fieldIndex === -1) {
    throw new Error(`${fieldName} with sno ${sno} not found`);
  }

  const existingItem = fieldArray[fieldIndex];
  if (typeof existingItem !== "object" || existingItem === null) {
    throw new Error(
      `Invalid item found at index ${fieldIndex} in ${fieldName}`
    );
  }

  fieldArray[fieldIndex] = {
    ...fieldArray[fieldIndex],
    ...updateData,
    filename: getFileUrl(filename),
  };

  limsRecord[fieldName] = fieldArray;
  limsRecord.changed(fieldName, true);

  return await limsRecord.save({ transaction });
};

export const addLIMSField = async (
  limsRecord,
  fieldName,
  newData,
  filename,
  transaction
) => {
  let fieldArray = limsRecord[fieldName];
  console.log(fieldArray);
  // If the field does not exist or is not an array, initialize it
  if (!Array.isArray(fieldArray)) {
    fieldArray = [];
  }

  fieldArray.push({ ...newData, filename: getFileUrl(filename) });
  limsRecord[fieldName] = fieldArray;
  limsRecord.changed(fieldName, true);

  return await limsRecord.save({ transaction });
};
