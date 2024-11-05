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
    specId: "",
    title: "",
    version: "",
    attachment: "",
    effectiveDate: "",
    creationDate: "",
    approvedBy: "",
    productName: "",
    batchLotNumber: "",
    productCategory: "",
    manufacturer: "",
    description: "",
    materialGrade: "",
    molecularFormula: "",
    packagingRequirements: "",
    storageConditions: "",
    shelfLife: "",
    labelingRequirements: "",
    testParameter: "",
    testMethod: "",
    acceptanceCriteria: "",
    unitsOfMeasurement: "",
    testFrequency: "",
    controlSampleReference: "",
    samplingPlan: "",
    testMethodValidation: "",
    referenceStandards: "",
    resultInterpretation: "",
    stabilityCriteria: "",
    reTestingInterval: "",
    regulatoryRequirements: "",
    certification: "",
    deviationHandling: "",
    auditTrail: "",
    documentReference: "",
    revisionHistory: "",
    attachments: "",
    comments: "",
    reviewFrequency: "",
    expiryDate: "",
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
    setUsagedata((prevData) => ({
      ...prevData,
      [field]: value,
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
    // closeModal();
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
          <p className="font-bold ml-4">Add Specification</p>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="SpecId"
            placeholder="SpecId"
            value={usageData.specId}
            onChange={(e) => handleInputChange("specId", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Title"
            placeholder="Title"
            value={usageData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Version"
            placeholder="Version"
            value={usageData.version}
            onChange={(e) => handleInputChange("version", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="Attachment"
            placeholder="Attachment"
            value={usageData.attachment}
            onChange={(e) => handleInputChange("attachment", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Effective Date"
            placeholder="Effective Date"
            value={usageData.effectiveDate}
            onChange={(e) => handleInputChange("effectiveDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Creation Date"
            placeholder="Creation Date"
            value={usageData.creationDate}
            onChange={(e) => handleInputChange("creationDate", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approved By"
            placeholder="Approved By"
            value={usageData.approvedBy}
            onChange={(e) => handleInputChange("approvedBy", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            value={usageData.productName}
            onChange={(e) => handleInputChange("productName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Batch Lot Number"
            placeholder="Batch Lot Number"
            value={usageData.batchLotNumber}
            onChange={(e) =>
              handleInputChange("batchLotNumber", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Category"
            placeholder="Product Category"
            value={usageData.productCategory}
            onChange={(e) =>
              handleInputChange("productCategory", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer"
            placeholder="Manufacturer"
            value={usageData.manufacturer}
            onChange={(e) => handleInputChange("manufacturer", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            value={usageData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Material Grade"
            placeholder="Material Grade"
            value={usageData.materialGrade}
            onChange={(e) => handleInputChange("materialGrade", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Molecular Formula"
            placeholder="Molecular Formula"
            value={usageData.molecularFormula}
            onChange={(e) =>
              handleInputChange("molecularFormula", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Packaging Requirements"
            placeholder="Packaging Requirements"
            value={usageData.packagingRequirements}
            onChange={(e) =>
              handleInputChange("packagingRequirements", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Storage Conditions"
            placeholder="Storage Conditions"
            value={usageData.storageConditions}
            onChange={(e) =>
              handleInputChange("storageConditions", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Shelf Life"
            placeholder="Shelf Life"
            value={usageData.shelfLife}
            onChange={(e) => handleInputChange("shelfLife", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Labeling Requirements"
            placeholder="Labeling Requirements"
            value={usageData.labelingRequirements}
            onChange={(e) =>
              handleInputChange("labelingRequirements", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Parameter"
            placeholder="Test Parameter"
            value={usageData.testParameter}
            onChange={(e) => handleInputChange("testParameter", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Method"
            placeholder="Test Method"
            value={usageData.testMethod}
            onChange={(e) => handleInputChange("testMethod", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Acceptance Criteria"
            placeholder="Acceptance Criteria"
            value={usageData.acceptanceCriteria}
            onChange={(e) =>
              handleInputChange("acceptanceCriteria", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Units Of Measurement"
            placeholder="Units Of Measurement"
            value={usageData.unitsOfMeasurement}
            onChange={(e) =>
              handleInputChange("unitsOfMeasurement", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Test Frequency"
            placeholder="Test Frequency"
            value={usageData.testFrequency}
            onChange={(e) => handleInputChange("testFrequency", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Control Sample Reference"
            placeholder="Control Sample Reference"
            value={usageData.controlSampleReference}
            onChange={(e) =>
              handleInputChange("controlSampleReference", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sampling Plan"
            placeholder="Sampling Plan"
            value={usageData.samplingPlan}
            onChange={(e) => handleInputChange("samplingPlan", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Method Validation"
            placeholder="Test Method Validation"
            value={usageData.testMethodValidation}
            onChange={(e) =>
              handleInputChange("testMethodValidation", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Reference Standards"
            placeholder="Reference Standards"
            value={usageData.referenceStandards}
            onChange={(e) =>
              handleInputChange("referenceStandards", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Result Interpretation"
            placeholder="Result Interpretation"
            value={usageData.resultInterpretation}
            onChange={(e) =>
              handleInputChange("resultInterpretation", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Stability Criteria"
            placeholder="Stability Criteria"
            value={usageData.stabilityCriteria}
            onChange={(e) =>
              handleInputChange("stabilityCriteria", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Re Testing Interval"
            placeholder="Re Testing Interval"
            value={usageData.reTestingInterval}
            onChange={(e) =>
              handleInputChange("reTestingInterval", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Regulatory Requirements"
            placeholder="Regulatory Requirements"
            value={usageData.regulatoryRequirements}
            onChange={(e) =>
              handleInputChange("regulatoryRequirements", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Certification"
            placeholder="Certification"
            value={usageData.certification}
            onChange={(e) => handleInputChange("certification", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Deviation Handling"
            placeholder="Deviation Handling"
            value={usageData.deviationHandling}
            onChange={(e) =>
              handleInputChange("deviationHandling", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Audit Trail"
            placeholder="Audit Trail"
            value={usageData.auditTrail}
            onChange={(e) => handleInputChange("auditTrail", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Document Reference"
            placeholder="Document Reference"
            value={usageData.documentReference}
            onChange={(e) =>
              handleInputChange("documentReference", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Revision History"
            placeholder="Revision History"
            value={usageData.revisionHistory}
            onChange={(e) =>
              handleInputChange("revisionHistory", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Attachments"
            placeholder="Attachments"
            value={usageData.attachments}
            onChange={(e) => handleInputChange("attachments", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Comments"
            placeholder="Comments"
            value={usageData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Review Frequency"
            placeholder="Review Frequency"
            value={usageData.reviewFrequency}
            onChange={(e) =>
              handleInputChange("reviewFrequency", e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Expiry Date"
            placeholder="Expiry Date"
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
