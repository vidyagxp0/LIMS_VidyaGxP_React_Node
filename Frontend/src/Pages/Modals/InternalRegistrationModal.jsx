import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const InternalRegistrationModal = (_props) => {
  const [lotType, setLotType] = useState("");

  const handleLotTypeChange = (event) => {
    setLotType(event.target.value);
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add Information and add new Internal</p>
          <CFormSelect
            label="Lot Type"
            value={lotType}
            onChange={handleLotTypeChange}
            className="mb-3"
            options={[
              { value: "Select...", label: "Select..." },
              { value: "Internal", label: "Internal" },
              { value: "External", label: "External" },
            ]}
          />
          {lotType === "Internal" && (
            <>
              <CFormSelect
                label="Sample Login"
                className="mb-3"
                options={[
                  { value: "Option 1", label: "Option 1" },
                  { value: "Option 2", label: "Option 2" },
                  { value: "Option 3", label: "Option 3" },
                  { value: "Option 4", label: "Option 4" },
                  { value: "Option 5", label: "Option 5" },
                ]}
              />
              <CFormInput
                type="text"
                label="Product/Material"
                placeholder="Product/Material"
                className="custom-placeholder mb-3"
                disabled
              />
            </>
          )}
          {lotType === "External" && (
            <>
              <CFormInput
                type="text"
                label="W.S.A.R No."
                className="custom-placeholder mb-3"
                placeholder="AR No."
              />
            </>
          )}
          <CFormInput
            type="text"
            label="Sample Refrence No."
            placeholder="Sample Refrence No."
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Container Type</CFormLabel>
            <div className="flex gap-5">
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Bottle"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Vial"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="W.s Batch Quantity"
            placeholder="W.s Batch Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="W.s Validate On"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Lot Valid Upto"
            className="custom-placeholder mb-3"
          />
          <CFormLabel>Usage Type</CFormLabel>
          <div className="flex gap-5">
            <CFormCheck
              type="radio"
              name="usageRadio"
              id="singleRadio"
              label="Single"
              value="single"
            />
            <CFormCheck
              type="radio"
              name="usageRadio"
              id="multipleRadio"
              label="Multiple"
              value="multiple"
            />
          </div>
          <CFormInput
            type="text"
            label="Direction of Usage"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="No. Of Purities"
              placeholder="1"
              className="custom-placeholder mb-3"
            />
            <span className="mt-2 w-10">
              <IoIosAddCircleOutline />
            </span>
          </div>
          <CFormSelect
            type="number"
            label="UOM"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Purity
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Value-UOM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <select className="form-control">
                      <option>Acids</option>
                      <option>Bases</option>
                      <option>Salts</option>
                      <option>Solvents</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <CFormInput
            type="number"
            label="Additional Purities Information"
            placeholder="Additional Information"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Standard Type"
            placeholder="Standard Type"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Source"
            placeholder="Source"
            className="mb-3"
          />
          <CFormInput
            type="number"
            label="Comments"
            placeholder="Comments"
            className="mb-3"
          />
          <div className="flex gap-2 mt-4">
            <CFormInput
              type="number"
              label="Container Validaty Period"
              placeholder="Container Validaty"
              className="mb-3"
            />
            <span className="mt-2">Days</span>
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
          <div className="flex gap-2">
            <CFormInput
              type="number"
              label="No. of Containers Prepared"
              className="mb-3"
            />
            <span className="mt-2 w-10">
              <IoIosAddCircleOutline />
            </span>
          </div>
          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Container No.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Quantity in Containers
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <select className="form-control">
                      <option>Acids</option>
                      <option>Bases</option>
                      <option>Salts</option>
                      <option>Solvents</option>
                    </select>
                  </td>
                  <td className="flex gap-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                    <span className="mt-2">kg</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-2 mt-4">
            <CFormInput
              type="number"
              label="Total Quantity in containers"
              placeholder="Total Quantity in containers"
              className="mb-3"
            />
            <span className="mt-2">Kg</span>
          </div>
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
