import { sequelize } from "../config/db.js";
import { DataTypes, TEXT } from "sequelize";

export const AnalystQualification = sequelize.define("AnalystQualification", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  analystId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fullName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateOfBirth: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  emailAddress: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  department: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  jobTitle: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  supervisorManagerName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualificationId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateOfQualification: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualifiedBy: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualificationType: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  expirationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualificationStatus: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  trainingProgramName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  trainingStartDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  trainingCompletionDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  trainingCompletionStatus: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  certificationNameNumber: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  certificationBody: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  certificationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  nextReCertificationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  competencyTestName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testResults: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  testScore: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  evaluatorName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  evaluatorComments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  techniqueSkillName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualificationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  skillLevel: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reQualificationRequired: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reQualificationDueDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  instrumentNameId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  methodNameId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  qualificationLevel: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sopNameId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sopVersion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  yearsOfExperience: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  previousJobRoles: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  previousLabsWorkedIn: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  specializations: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  approvalDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  approverName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  approverSignature: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  commentsNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  modificationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  modifiedBy: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  changeDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stage: {
    type: TEXT,
    defaultValue: "1",
    allowNull: false,
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: "Under Initiation",
  },
  comments: {
    type: DataTypes.JSON, // Use JSON for storing multiple comments
    allowNull: true,
    defaultValue: [], // Initialize as an empty array
  },
  initiatorName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  initiatorComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  initiatorReviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ReviewerName: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ReviewerComment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ReviewDate: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
