import { CButton, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'

const ProblemReportingModal = ({visible, closeModal, handleSubmit}) => {
  const [problemData, setProblemData]=useState({
    InstrumentId:"",
    InstrumentCategory:"",
    SuppliedBy:"",
    ProblemID:"",
    ProblemIn:"",
    ProblemInBrief:"",
    ReferenceDocument:"",
    OccurredOn:"",
    ReportedOn:"",
    ProblemInDetails:"",

  })
  const handleInputChange = (field, value) => {
    const updatedData = { ...problemData, [field]: value };
    setProblemData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => { 
    handleSubmit({ ...problemData});
    closeModal();
  };


  return (
    <div>
        <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size='xl'
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
            value={problemData.InstrumentId}
            onChange={(e) => handleInputChange("InstrumentId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Instrument Category"
            placeholder="weighing balance "
            name='InstrumentCategory'
            value={problemData.InstrumentCategory}
            onChange={(e) => handleInputChange("InstrumentCategory", e.target.value)}


          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Supplied By"
            placeholder="Supplied By "
            name='SuppliedBy'
            value={problemData.SuppliedBy}
            onChange={(e) => handleInputChange("SuppliedBy", e.target.value)}



          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem ID"
            placeholder="Problem ID"
            name='ProblemID'
            value={problemData.ProblemID}
            onChange={(e) => handleInputChange("ProblemID", e.target.value)}

          />
          <label>Problem In</label>
          <CFormCheck
            type="radio"
            id="ProblemInInstrument"
            name="ProblemIn"
            label="Instrument"
            value={problemData.ProblemIn}
            onChange={(e) => handleInputChange("ProblemIn", e.target.value)}

          />
          <CFormCheck
            type="radio"
            className="mb-3"
            id="ProblemInModule"
            name="ProblemIn"
            label="Module"
            value={problemData.ProblemInBrief}
            onChange={(e) => handleInputChange("ProblemInBrief", e.target.value)}

          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Brief"
            placeholder=" Problem In Brief"
            name='ProblemInBrief'
            value={problemData.ProblemInBrief}
            onChange={(e) => handleInputChange("ProblemInBrief", e.target.value)}

          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Reference Document"
            placeholder="choose file"
            name='ReferenceDocument'
            value={problemData.ReferenceDocument}
            onChange={(e) => handleInputChange("ReferenceDocument", e.target.value)}

          />
          <CFormInput type="date"
           label="Occurred On"
            placeholder=" "
            name='OccurredOn'
            value={problemData.OccurredOn}
            onChange={(e) => handleInputChange("OccurredOn", e.target.value)}
             />


          <CFormInput
            type="date"
            className="mb-3"
            label="Reported On"
            placeholder=" "
            name='ReportedOn'
            value={problemData.ReportedOn}
            onChange={(e) => handleInputChange("ReportedOn", e.target.value)}

          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Details"
            placeholder=" Problem In Details"
            name='ProblemInDetails'
            value={problemData.ProblemInDetails}
            onChange={(e) => handleInputChange("ProblemInDetails", e.target.value)}

          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>Submit</CButton>
        </CModalFooter>
      </CModal>
      
    </div>
  )
}

export default ProblemReportingModal
