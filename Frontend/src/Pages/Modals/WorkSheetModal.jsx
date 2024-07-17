import React, { useEffect, useState } from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CButton,
  CModalFooter,
  CFormTextarea,
} from "@coreui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WorkSheetModal = ({ visible, closeModal, handleSubmit }) => {

  const [worksheet, setWorksheet] = useState({
    worksheetType: "",
    worksheetName: "",
    worksheetProduct: "",
    gtpNo: "",
    methodValidationNo: "",
    description: ""
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...worksheet, [field]: value };
    setWorksheet(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...worksheet });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setWorksheet({
      worksheetType: "",
      worksheetName: "",
      worksheetProduct: "",
      gtpNo: "",
      methodValidationNo: "",
      description: ""
    });
  };

  useEffect(() => {
    resetForm();
  }, []);
  const [leftArray, setLeftArray] = useState(["Description"]);
  const [rightArray, setRightArray] = useState([]);

  const moveRight = () => {
    let leftElement = document.getElementsByClassName("check-left");
    for (let index = 0; index < leftElement.length; index++) {
      if (leftElement[index].checked) {
        let data = leftElement[index].value;
        let left = leftArray.filter((value) => value !== data);
        setLeftArray(left);
        rightArray.push(data);
        setRightArray([...rightArray]);
        break; // Important
      }
    }
  };

  const moveLeft = () => {
    let rightElement = document.getElementsByClassName("check-right");
    for (let index = 0; index < rightElement.length; index++) {
      if (rightElement[index].checked) {
        let data = rightElement[index].value;
        let right = rightArray.filter((value) => value !== data);
        setRightArray(right);
        leftArray.push(data);
        setLeftArray([...leftArray]);
        break; // Important
      }
    }
  };

  const clicked = (event) => {
    let checkboxes = document.querySelectorAll(".check-left, .check-right");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    let allLabels = document.querySelectorAll(".labels");
    allLabels.forEach((label) => {
      label.classList.remove("clicked");
    });

    let label = event.target;
    label.classList.add("clicked");
    label.checked = true;
  };

  const [description, setDescription] = useState("");

  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle>Add Worksheets</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Add information about Worksheet</p>
        <CFormInput
          className="mb-3"
          type="text"
          label="Type"
          placeholder="Worksheet"
          // readOnly
          value={worksheet.worksheetType}
          onChange={(e) => handleInputChange("worksheetType", e.target.value)}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Name"
          placeholder="Name"
          value={worksheet.worksheetName}
          onChange={(e) => handleInputChange("worksheetName", e.target.value)}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Product Name"
          placeholder="Product Name"
          value={worksheet.worksheetProduct}
          onChange={(e) => handleInputChange("worksheetProduct", e.target.value)}
        />
        <label htmlFor="drag-drop" className="">
          User Defined Worksheet fields
        </label>
        <div className="d-flex" id="drag-drop">
          <div className="w-100 m-3">
            <h5>Available</h5>
            <div
              className="shadow p-2 rounded border overflow-y-auto"
              style={{ height: "350px" }}
            >
              <ul className="list-group">
                {leftArray.map((data) => (
                  <li
                    key={data}
                    className="bg-light rounded my-1 px-3 py-1 text-dark"
                  >
                    <input
                      type="checkbox"
                      value={data}
                      id={data}
                      className="check-left d-none"
                    />
                    <label
                      className="labels cursor-pointer bg-light"
                      htmlFor={data}
                      onClick={clicked}
                    >
                      {data}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="m-auto justify-content-center">
            <button
              className="btn shadow py-1 px-3 mt-5 text-warning fs-4"
              onClick={moveRight}
            >
              <TiArrowRightThick />
            </button>
            <button
              className="btn shadow py-1 px-3 mt-2 text-warning fs-4"
              onClick={moveLeft}
            >
              <TiArrowLeftThick />
            </button>
          </div>
          <div className="w-100 m-3">
            <h5>Selected</h5>
            <div
              className="shadow p-2 rounded border overflow-y-auto"
              style={{ height: "350px" }}
            >
              <ul className="list-group">
                {rightArray.map((data) => (
                  <li
                    key={data}
                    className="bg-light rounded my-1 px-3 py-1 text-dark"
                  >
                    <input
                      type="checkbox"
                      value={data}
                      id={data}
                      className="check-right d-none"
                    />
                    <label
                      className="labels cursor-pointer bg-light"
                      htmlFor={data}
                      onClick={clicked}
                    >
                      {data}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <h5>Uniformity of Dosage Units:</h5>
        <CFormInput
          className="mb-3"
          type="text"
          label="GTP No:"
          placeholder="GTP No"
          value={worksheet.gtpNo}
          onChange={(e) => handleInputChange("gtpNo", e.target.value)}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Method Validation No:"
          placeholder="Method Validation No"
          value={worksheet.methodValidationNo}
          onChange={(e) => handleInputChange("methodValidationNo", e.target.value)}
        />
        <div className="mb-3">
          <label>Description</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            // value={worksheet.description}
            // onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={closeModal}>
          Back
        </CButton>
        <CButton className="bg-info text-white" onClick={handleFormSubmit}>Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default WorkSheetModal;
