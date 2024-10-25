import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState, useEffect } from "react";

const ProblemReportingModal = ({ visible, closeModal, handleSubmit }) => {
  const [problemData, setProblemData] = useState({
    instrumentId: "",
    InstrumentCategory: "",
    suppliedBy: "",
    problemId: "",
    problemIn: "",
    problemInBrief: "",
    referenceDocument: "",
    occurredOn: "",
    reportedOn: "",
    problemInDetails: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...problemData, [field]: value };
    setProblemData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...problemData });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setProblemData({
      instrumentId: "",
      InstrumentCategory: "",
      suppliedBy: "",
      problemId: "",
      problemIn: "",
      problemInBrief: "",
      referenceDocument: "",
      occurredOn: "",
      reportedOn: "",
      problemInDetails: "",
    
    });
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Problem Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Problem Reporting</p>
          <CFormSelect
            type="text"
            label="Instrument (Instrument ID)"
            name="InstrumentId"
            options={[
              "Select...",
              { label: "eqi/eng/163" },
              { label: "arzph001" },
              { label: "arz003" },
              { label: "qc/bal/0011" },
              { label: "hplc" },
              { label: "qc/bal/02" },
            ]}
            placeholder="Select... "
            value={problemData.instrumentId}
            onChange={(e) => handleInputChange("instrumentId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            placeholder="weighing balance "
            name="InstrumentCategory"
            value={problemData.InstrumentCategory}
            onChange={(e) =>
              handleInputChange("InstrumentCategory", e.target.value)
            }
          />
          <CFormInput
            type="text"
            className="mb-3"
            placeholder="Supplied By "
            name="SuppliedBy"
            value={problemData.suppliedBy}
            onChange={(e) => handleInputChange("suppliedBy", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            placeholder="Problem ID"
            name="ProblemID"
            value={problemData.problemId}
            onChange={(e) => handleInputChange("problemId", e.target.value)}
          />
          <label>Problem In</label>
          <CFormCheck
            type="radio"
            id="ProblemInInstrument"
            name="ProblemIn"
            label="Instrument"
            value={problemData.problemIn}
            onChange={(e) => handleInputChange("problemIn", e.target.value)}
          />
          <CFormCheck
            type="radio"
            className="mb-3"
            id="ProblemInModule"
            name="ProblemIn"
            label="Module"
            value={problemData.problemInBrief}
            onChange={(e) =>
              handleInputChange("problemInBrief", e.target.value)
            }
          />
          <CFormInput
            type="text"
            className="mb-3"
            placeholder=" Problem In Brief"
            name="ProblemInBrief"
            value={problemData.problemInBrief}
            onChange={(e) =>
              handleInputChange("problemInBrief", e.target.value)
            }
          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Reference Document"
            placeholder="choose file"
            name="ReferenceDocument"
            value={problemData.referenceDocument}
            onChange={(e) =>
              handleInputChange("referenceDocument", e.target.value)
            }
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Occurred On"
            placeholder=" "
            name="OccurredOn"
            value={problemData.occurredOn}
            onChange={(e) => handleInputChange("occurredOn", e.target.value)}
          />

          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            className="mb-3"
            label="Reported On"
            placeholder=" "
            name="ReportedOn"
            value={problemData.reportedOn}
            onChange={(e) => handleInputChange("reportedOn", e.target.value)}
          />
          <CFormInput
            type="text"
            placeholder=" Problem In Details"
            className="mb-3"
            label="Problem In Details"
            name="ProblemInDetails"
            value={problemData.problemInDetails}
            onChange={(e) =>
              handleInputChange("problemInDetails", e.target.value)
            }
          />
       <CFormSelect
            className="mb-3"
            label="Status"
            name="status"
            value={problemData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            options={[
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" }
            ]}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ProblemReportingModal;
