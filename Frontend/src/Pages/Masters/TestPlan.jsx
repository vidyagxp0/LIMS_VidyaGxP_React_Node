/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import "./TestPlan.css";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    specificationId: "SP001",
    productName: "Product 1",
    tests: "Test A, Test B",
    initiatedAt: "2024-01-01",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    specificationId: "SP002",
    productName: "Product 2",
    tests: "Test C, Test D",
    initiatedAt: "2024-01-02",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 3,
    specificationId: "SP003",
    productName: "Product 3",
    tests: "Test E, Test F",
    initiatedAt: "2024-01-03",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 4,
    specificationId: "SP004",
    productName: "Product 4",
    tests: "Test G, Test H",
    initiatedAt: "2024-01-04",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 5,
    specificationId: "SP005",
    productName: "Product 5",
    tests: "Test I, Test J",
    initiatedAt: "2024-01-05",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 6,
    specificationId: "SP006",
    productName: "Product 6",
    tests: "Test K, Test L",
    initiatedAt: "2024-01-06",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 7,
    specificationId: "SP007",
    productName: "Product 7",
    tests: "Test M, Test N",
    initiatedAt: "2024-01-07",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 8,
    specificationId: "SP008",
    productName: "Product 8",
    tests: "Test O, Test P",
    initiatedAt: "2024-01-08",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 9,
    specificationId: "SP009",
    productName: "Product 9",
    tests: "Test Q, Test R",
    initiatedAt: "2024-01-09",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 10,
    specificationId: "SP010",
    productName: "Product 10",
    tests: "Test S, Test T",
    initiatedAt: "2024-01-10",
    status: "REINITIATED",
  },
];

function TestPlan() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.specificationId.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Test Plan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Specification ID"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Product/Material Name"
            className="mb-3"
            type="text"
            placeholder="Product/Material Name"
          />
          <CFormInput
            label="Test Plan Comments"
            className="mb-3"
            type="text"
            placeholder="Test Plan Comments"
          />
          <CFormSelect
            className="mb-3"
            label="Sampling Quantity UOM"
            options={[
              "Select UOM",
              { label: "gm", value: "gm" },
              { label: "ml", value: "ml" },
            ]}
          />
          <div className="drag-drop">
            <div className="sub-container">
              <h5>Available Tests</h5>
              <div className="list-container">
                <ul>
                  {leftArray.map((data) => (
                    <li key={data}>
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-left"
                      />
                      <label
                        className="labels"
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
            <div className="mid-container">
              <button className="arrow-button" onClick={moveRight}>
                <TiArrowRightThick />
              </button>
              <button className="arrow-button" onClick={moveLeft}>
                <TiArrowLeftThick />
              </button>
            </div>
            <div className="sub-container">
              <h5>Selected</h5>
              <div className="list-container">
                <ul>
                  {rightArray.map((data) => (
                    <li key={data}>
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-right"
                      />
                      <label
                        className="labels"
                        htmlFor={data}
                        onClick={clicked}
                      >
                        {data}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <input type="checkbox" /> <span>Test Grouping Required</span>
              <button
                style={{
                  borderRadius: "5px",
                  margin: "17px 20px",
                  padding: "2px 6px",
                  backgroundColor: "#0f93c3",
                  border: "1px solid #0f93c3",
                  color: "white",
                }}
              >
                Refresh
              </button>
            </div>
          </div>
          <CFormSelect
            className="mb-3"
            label="Coa Template"
            options={[
              "Select Coa Template",
              { label: "Test Coa", value: "test-coa" },
              { label: "Windlas Template", value: "windlas-template" },
            ]}
          />
          <label className="my-2" htmlFor="">
            Remarks
          </label>{" "}
          <br />
          <textarea className="line4 w-100 mx-1" rows="4" cols="50"></textarea>
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };

  const [leftArray, setLeftArray] = useState([
    "Viscosity @40C",
    "TAN Total acid number",
    "Water Content PPM",
    "Average Weight",
    "Description",
    "Assay test for SPP",
    "Specific Gravity  PA",
    "Color Test",
    "Specific Gravity",
    "Melting Range",
    "Color",
    "Ph test",
    "test",
    "Hydroxyl Value",
    "Acid Value",
    "Viscosity (mPa.s)",
    "Infrared spectrum",
    "Appearance (Form)",
    "ph test new",
    "Micro Media",
    "FG Assay Test",
    "VDC-PH TEST",
    "Water Ph test",
    "Assay",
    "Description",
    "Water content KF1",
    "Resolution",
    "% RSD of Standard with racketing std.",
    "Theoretical Plates.",
    "Tailing Factor of standard",
    "Assay (on anhydrous basis)",
    "Water content",
    "SP_T_001",
    "New Product Test",
  ]);

  const [rightArray, setRightArray] = useState([
    "Inspections",
    "Audit",
    "Refference",
    "CCTT",
  ]);

  const moveRight = () => {
    let leftElement = document.getElementsByClassName("check-left");
    for (let index = 0; index < leftElement.length; index++) {
      if (leftElement[index].checked) {
        let data = leftElement[index].value;
        let left = leftArray.filter((value) => value !== data);
        setLeftArray(left);
        rightArray.push(data);
        setRightArray(rightArray);
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
        setLeftArray(leftArray);
        break; // Important
      }
    }
  };

  const clicked = () => {
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

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Specification Id", accessor: "specificationId" },
    { header: "	Product Name", accessor: "productName" },
    { header: "Tests", accessor: "tests" },
    { header: "Initiated At", accessor: "initiatedAt" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      specificationId: item["Specification Id"] || "",
      productName: item["Product Name"] || "",
      tests: item["Tests"] || "",
      initiatedAt: item["Initiated At"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setViewModalData(false);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };
  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Test plan</h4>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "DROPPED", label: "DROPPED" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "APPROVED", label: "APPROVED" },
                { value: "REJECTED", label: "REJECTED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
           <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
              <ATMButton
              text="Add Test Categories"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          onDelete={handleDelete}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {viewModalData && (
        <ViewModal visible={viewModalData} closeModal={closeViewModal} />
      )}
      {isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </>
  );
}

export default TestPlan;
