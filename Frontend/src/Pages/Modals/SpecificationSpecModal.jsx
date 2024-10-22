import React, { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const SpecificationSpecModal = ({ visible, closeModal, handleSubmit }) => {
  const [usageData, setUsagedata] = useState({
    specId:"",
    title:"",
    version:"",
    attachment:"",
    effectiveDate:"",
    creationDate:"",
    approvedBy:"",
    productName:"",
    batchLotNumber:"",
    productCategory:"",
    manufacturer:"",
    description:"",
    materialGrade:"",
    molecularFormula:"",
    packagingRequirements:"",
    storageConditions:"",
    shelfLife:"",
    labelingRequirements:"",
    testParameter:"",
    testMethod:"",
    acceptanceCriteria:"",
    unitsOfMeasurement:"",
    testFrequency:"",
    controlSampleReference:"",
    samplingPlan:"",
    testMethodValidation:"",
    referenceStandards:"",
    resultInterpretation:"",
    stabilityCriteria:"",
    reTestingInterval:"",
    regulatoryRequirements:"",
    certification:"",
    deviationHandling:"",
    auditTrail:"",
    documentReference:"",
    revisionHistory:'',
    attachments:"",
    comments:"",
    reviewFrequency:"",
    expiryDat:""
  });

  const resetForm = () => {
    setUsagedata({
      // ... reset all fields to empty strings
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    setUsagedata(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  // const handleFormSubmit = () => {
  //   handleSubmit(usageData);
  //   closeModal();
  // };
 
  const handleFormSubmit = () => {
    const formData = new FormData();
    Object.entries(usageData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    handleSubmit(formData); 
    closeModal();
  };
  
  
  
  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add Specification</p>

          <CFormInput
            className="mb-3"
            type="text"
            label="specId"
            placeholder="specId"
            value={usageData.specId}
            onChange={(e) => handleInputChange("specId", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="title"
            placeholder="title"
            value={usageData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="version"
            placeholder="version"
            value={usageData.version}
            onChange={(e) => handleInputChange("version", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="attachment"
            placeholder="attachment"
            value={usageData.attachment}
            onChange={(e) => handleInputChange("attachment", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="effectiveDate"
            placeholder="effectiveDate"
            value={usageData.effectiveDate}
            onChange={(e) => handleInputChange("effectiveDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="creationDate"
            placeholder="creationDate"
            value={usageData.creationDate}
            onChange={(e) => handleInputChange("creationDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="approvedBy"
            placeholder="approvedBy"
            value={usageData.approvedBy}
            onChange={(e) => handleInputChange("approvedBy", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="productName"
            placeholder="productName"
            value={usageData.productName}
            onChange={(e) => handleInputChange("productName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="batchLotNumber"
            placeholder="batchLotNumber"
            value={usageData.batchLotNumber}
            onChange={(e) =>
              handleInputChange("batchLotNumber", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="productCategory"
            placeholder="productCategory"
            value={usageData.productCategory}
            onChange={(e) =>
              handleInputChange("productCategory", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="manufacturer"
            placeholder="manufacturer"
            value={usageData.manufacturer}
            onChange={(e) => handleInputChange("manufacturer", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="description"
            placeholder="description"
            value={usageData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="materialGrade"
            placeholder="materialGrade"
            value={usageData.materialGrade}
            onChange={(e) => handleInputChange("materialGrade", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="molecularFormula"
            placeholder="molecularFormula"
            value={usageData.molecularFormula}
            onChange={(e) =>
              handleInputChange("molecularFormula", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="packagingRequirements"
            placeholder="packagingRequirements"
            value={usageData.packagingRequirements}
            onChange={(e) =>
              handleInputChange("packagingRequirements", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="storageConditions"
            placeholder="storageConditions"
            value={usageData.storageConditions}
            onChange={(e) =>
              handleInputChange("storageConditions", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="shelfLife"
            placeholder="shelfLife"
            value={usageData.shelfLife}
            onChange={(e) => handleInputChange("shelfLife", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="labelingRequirements"
            placeholder="labelingRequirements"
            value={usageData.labelingRequirements}
            onChange={(e) =>
              handleInputChange("labelingRequirements", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="testParameter"
            placeholder="testParameter"
            value={usageData.testParameter}
            onChange={(e) => handleInputChange("testParameter", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="testMethod"
            placeholder="testMethod"
            value={usageData.testMethod}
            onChange={(e) => handleInputChange("testMethod", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="acceptanceCriteria"
            placeholder="acceptanceCriteria"
            value={usageData.acceptanceCriteria}
            onChange={(e) =>
              handleInputChange("acceptanceCriteria", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="unitsOfMeasurement"
            placeholder="unitsOfMeasurement"
            value={usageData.unitsOfMeasurement}
            onChange={(e) =>
              handleInputChange("unitsOfMeasurement", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="testFrequency"
            placeholder="testFrequency"
            value={usageData.testFrequency}
            onChange={(e) => handleInputChange("testFrequency", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="controlSampleReference"
            placeholder="controlSampleReference"
            value={usageData.controlSampleReference}
            onChange={(e) =>
              handleInputChange("controlSampleReference", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="samplingPlan"
            placeholder="samplingPlan"
            value={usageData.samplingPlan}
            onChange={(e) => handleInputChange("samplingPlan", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="testMethodValidation"
            placeholder="testMethodValidation"
            value={usageData.testMethodValidation}
            onChange={(e) =>
              handleInputChange("testMethodValidation", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="referenceStandards"
            placeholder="referenceStandards"
            value={usageData.referenceStandards}
            onChange={(e) =>
              handleInputChange("referenceStandards", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="resultInterpretation"
            placeholder="resultInterpretation"
            value={usageData.resultInterpretation}
            onChange={(e) =>
              handleInputChange("resultInterpretation", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="stabilityCriteria"
            placeholder="stabilityCriteria"
            value={usageData.stabilityCriteria}
            onChange={(e) =>
              handleInputChange("stabilityCriteria", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="reTestingInterval"
            placeholder="reTestingInterval"
            value={usageData.reTestingInterval}
            onChange={(e) =>
              handleInputChange("reTestingInterval", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="regulatoryRequirements"
            placeholder="regulatoryRequirements"
            value={usageData.regulatoryRequirements}
            onChange={(e) =>
              handleInputChange("regulatoryRequirements", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="certification"
            placeholder="certification"
            value={usageData.certification}
            onChange={(e) => handleInputChange("certification", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="deviationHandling"
            placeholder="deviationHandling"
            value={usageData.deviationHandling}
            onChange={(e) =>
              handleInputChange("deviationHandling", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="auditTrail"
            placeholder="auditTrail"
            value={usageData.auditTrail}
            onChange={(e) => handleInputChange("auditTrail", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="documentReference"
            placeholder="documentReference"
            value={usageData.documentReference}
            onChange={(e) =>
              handleInputChange("documentReference", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="revisionHistory"
            placeholder="revisionHistory"
            value={usageData.revisionHistory}
            onChange={(e) =>
              handleInputChange("revisionHistory", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="attachments"
            placeholder="attachments"
            value={usageData.attachments}
            onChange={(e) => handleInputChange("attachments", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="comments"
            placeholder="comments"
            value={usageData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="reviewFrequency"
            placeholder="reviewFrequency"
            value={usageData.reviewFrequency}
            onChange={(e) =>
              handleInputChange("reviewFrequency", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="expiryDate"
            placeholder="expiryDate"
            value={usageData.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SpecificationSpecModal;
