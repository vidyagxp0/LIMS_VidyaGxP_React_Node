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
  import React from "react";
  
  const BatchAssignmentModal = (_props) => {
    return (
      <div>
        <CModal
          alignment="center"
          visible={_props.visible}
          onClose={_props.closeModal}
          size="xl"
        >
          <CModalHeader>
            <CModalTitle>Add Batch Assignmment</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p style={{ fontWeight: "bolder" }}>
              Add information and Add batch assignment..
            </p>
            <CFormSelect
              type="text"
              label="Column No."
              placeholder="Column No."
            />
            <CFormInput
              type="text"
              label=" Column Name"
              placeholder=" Column Name "
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Column Application"
              placeholder=" Column Application "
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Brand Name / Manufacturer Name"
              placeholder=" Brand Name / Manufacturer Name "
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Film Thikness / Particle Size"
              placeholder=" Film Thikness / Particle Size "
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" UMO"
              placeholder="UMO "
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label="Mfg. Serial No."
              placeholder="Mfg. Serial No."
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Length"
              placeholder="Length"
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" UMO"
              placeholder="UMO"
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Packing Material"
              placeholder="Packing Material"
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Inner Diameter"
              placeholder=""
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" UMO"
              placeholder="UMO"
              className="custom-placeholder"
            />
  
            <CFormInput
              type="text"
              label=" Outer Diameter"
              placeholder=""
              className="custom-placeholder"
            />
  
            <CFormInput
              type="date"
              label=" Recieved On"
              placeholder=""
              className="custom-placeholder"
            />
  
            <h5>Registration Initiation</h5>
            <table className="table table-bordered">
              <thead style={{ background: "teal", color: "white" }}>
                <th>Sr. No.</th>
                <th>Column No.</th>
                <th>Assignment No.</th>
                <th>Qualification No.</th>
                <th>Product/Material </th>
                <th>Specification ID </th>
                <th>Test Name</th>
              </thead>
              <tr>
                <td>1</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
                <td>6</td>
              </tr>
            </table>
  
            <h4>Comments</h4>
            <textarea style={{ width: "250px" }} name="" id=""></textarea>
  
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            ></div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={_props.closeModal}>
              Cancel
            </CButton>
            <CButton style={{ background: "#0F93C3", color: "white" }}>
              Add Batch Assignment
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };
  
  export default BatchAssignmentModal;
  