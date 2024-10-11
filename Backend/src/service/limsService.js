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
  uniqueId,
  updateData,
  filename,
  transaction
) => {

  const fieldArray = limsRecord[fieldName];
  if (!Array.isArray(fieldArray)) {
    throw new Error(`${fieldName} is not an array or does not exist`);
  }
  const fieldIndex = fieldArray.findIndex(
    (item) => item && item["uniqueId"] == uniqueId
  );

  if (fieldIndex === -1) {
    throw new Error(`${fieldName} with uniqueId ${uniqueId} not found`);
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

  if (!Array.isArray(fieldArray)) {
    fieldArray = [];
  }

  let newSno = 1;
  if (fieldArray.length > 0) {
    const maxSno = Math.max(...fieldArray.map((item) => item.uniqueId || 0));
    newSno = maxSno + 1;
  }

  const newEntry = {
    ...newData,
    uniqueId: newSno,
    filename: getFileUrl(filename),
  };
  fieldArray.push(newEntry);

  limsRecord[fieldName] = fieldArray;
  limsRecord.changed(fieldName, true);
  console.log(fieldArray,"fieldArray");
  

  await limsRecord.save({ transaction });
  return newEntry;
};
