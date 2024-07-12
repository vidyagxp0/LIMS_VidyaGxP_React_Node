import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const InternalRegistrationModal = (_props) => {
  const [boxes, setBoxes] = useState([{ id: Date.now(), value: "" }]);

  const addBox = () => {
    setBoxes([...boxes, { id: Date.now(), value: "" }]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  const handleBoxChange = (id, value) => {
    setBoxes(
      boxes.map((box) => (box.id === id ? { ...box, value: value } : box))
    );
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormSelect
              label="Lot Type"
              className="mb-3"
              options={[
                { value: "", label: "Select..." },
                { value: "Internal", label: "Internal" },
                { value: "External", label: "External" },
              ]}
            />
            <CFormInput
              type="text"
              label="Sample Reference No."
              placeholder="Sample Reference No."
              className="mb-3"
            />

            <CFormLabel>Container Type</CFormLabel>
            <div className="mb-3">
              <CFormCheck
                type="radio"
                name="containerType"
                id="bottleRadio"
                label="Bottle"
                value="Bottle"
              />
              <CFormCheck
                type="radio"
                name="containerType"
                id="vialRadio"
                label="Vial"
                value="Vial"
              />
            </div>

            <CFormInput
              type="text"
              label="Storage Condition"
              placeholder="Storage Condition"
              className="mb-3"
            />
            <CFormInput
              type="number"
              label="W.s Batch Quantity"
              placeholder="W.s Batch Quantity"
              className="mb-3"
            />
            <CFormTextarea
              label="Available Quantity for Distribution"
              placeholder="Available Quantity for Distribution"
              className="mb-3"
            />
            <CFormInput
              type="text"
              label="Lot Quantity for Distribution"
              placeholder="Lot Quantity"
              className="mb-3"
            />
            <CFormInput type="date" label="W.s Validate On" className="mb-3" />
            <CFormInput type="date" label="Lot Valid Upto" className="mb-3" />
            <CFormInput
              type="text"
              label="Usage Type"
              placeholder="Single / Multiple"
              className="mb-3"
            />
            <CFormInput
              type="text"
              label="Direction of Usage"
              placeholder="Direction of Usage"
              className="mb-3"
            />
            <CFormInput
              type="number"
              label="No. Of Purities"
              placeholder="1"
              className="mb-3"
            />
            <CFormSelect
              label="UOM"
              placeholder="Select..."
              className="mb-3"
              options={[
                { value: "", label: "Select..." },
                { value: "Kg", label: "Kg" },
                { value: "L", label: "L" },
              ]}
            />
            <div className="container mt-5 mb-3">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th style={{ background: "#0F93C3", color: "white" }}>
                      Sno.
                    </th>
                    <th style={{ background: "#0F93C3", color: "white" }}>
                      Purity
                    </th>
                    <th style={{ background: "#0F93C3", color: "white" }}>
                      Value-UOM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {boxes.map((box, index) => (
                    <tr key={box.id}>
                      <td>{index + 1}</td>
                      <td>
                        <CFormSelect
                          value={box.value}
                          onChange={(e) =>
                            handleBoxChange(box.id, e.target.value)
                          }
                        >
                          <option>Acids</option>
                          <option>Bases</option>
                          <option>Salts</option>
                          <option>Solvents</option>
                        </CFormSelect>
                      </td>
                      <td>
                        <CFormInput
                          type="text"
                          value={box.value}
                          onChange={(e) =>
                            handleBoxChange(box.id, e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <CButton color="primary" onClick={addBox}>
                Add Box
              </CButton>
            </div>
            <CFormInput
              type="text"
              label="Additional Purities Information"
              placeholder="Additional Information"
              className="mb-3"
            />
            <CFormInput
              type="text"
              label="Standard Type"
              placeholder="Standard Type"
              className="mb-3"
            />
            <CFormInput
              type="text"
              label="Source"
              placeholder="Source"
              className="mb-3"
            />
            <CFormInput
              type="text"
              label="Comments"
              placeholder="Comments"
              className="mb-3"
            />
            <div className="d-flex gap-2 mb-3">
              <CFormInput
                type="number"
                label="Container Validity Period"
                placeholder="Container Validity Period"
                className="mb-3"
              />
              <span className="mt-4">Days</span>
            </div>
            <CFormInput
              type="number"
              label="Container Starting No."
              placeholder="Container No."
              className="mb-3"
            />
            <CFormInput
              type="number"
              label="Minimum No. of Containers for Alert"
              placeholder="1"
              className="mb-3"
            />
            <CFormInput
              type="number"
              label="No. of Containers Prepared"
              className="mb-3"
            />
            <div className="d-flex gap-2 mb-3">
              <CFormInput
                type="number"
                label="Total Quantity in Containers"
                placeholder="Total Quantity in Containers"
                className="mb-3"
              />
              <span className="mt-4">Kg</span>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InternalRegistrationModal;
