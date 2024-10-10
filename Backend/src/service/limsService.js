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
  transaction
) => {
  const fieldArray = limsRecord[fieldName];
  if (!Array.isArray(fieldArray)) {
    throw new Error(`${fieldName} is not an array or does not exist`);
  }
  const fieldIndex = fieldArray.findIndex((item) => item["s.no"] == sno);

  // if (fieldIndex === -1) {
  //   throw new Error(`${fieldName} with s.no ${sno} not found`);
  // }

  fieldArray[fieldIndex] = {
    ...fieldArray[fieldIndex],
    ...updateData,
  };

  limsRecord[fieldName] = fieldArray;
  limsRecord.changed(fieldName, true);

  return await limsRecord.save({ transaction });
};

export const addLIMSField = async (
  limsRecord,
  fieldName,
  newData,
  transaction
) => {
  let fieldArray = limsRecord[fieldName];

  // If the field does not exist or is not an array, initialize it
  if (!Array.isArray(fieldArray)) {
    fieldArray = [];
  }

  fieldArray.push(newData);

  limsRecord[fieldName] = fieldArray;
  limsRecord.changed(fieldName, true);

  return await limsRecord.save({ transaction });
};
