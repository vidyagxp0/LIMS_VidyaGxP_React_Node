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
import React, { useState } from "react";
import "./Samplelogin.css";
import { GrLinkNext } from "react-icons/gr";

import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleType: "USR001",
    storageCondition: "Product 1",
    createdAt: "2024-01-01",
    genericName: "Generic 1",
    specificationCode: "Spec 001",
    attachment: "attachment",
    status: "INITIATED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit1"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete1"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 2,
    sampleType: "USR002",
    storageCondition: "Product 2",
    createdAt: "2024-01-02",
    genericName: "Generic 2",
    specificationCode: "Spec 002",
    attachment: "attachment",
    status: "APPROVED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit2"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete2"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 3,
    sampleType: "USR003",
    storageCondition: "Product 3",
    createdAt: "2024-01-03",
    genericName: "Generic 3",
    specificationCode: "Spec 003",
    attachment: "attachment",
    status: "REJECTED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit3"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete3"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 4,
    sampleType: "USR004",
    storageCondition: "Product 4",
    createdAt: "2024-01-04",
    genericName: "Generic 4",
    specificationCode: "Spec 004",
    attachment: "attachment",
    status: "REINITIATED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit4"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete4"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 5,
    sampleType: "USR005",
    storageCondition: "Product 5",
    createdAt: "2024-01-05",
    genericName: "Generic 5",
    specificationCode: "Spec 005",
    attachment: "attachment",
    status: "DROPPED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit5"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete5"
        className="cursor-pointer"
      />,
    ],
  },
];

export default function Samplelogin() {
  const [data, setData] = useState(initialData);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [deleteModal, setDeleteModal] = useState(false);
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
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product / Material", accessor: "storageCondition" },
    { header: "A.R. No.", accessor: "createdAt" },
    { header: "Generic Name", accessor: "createdAt" },
    { header: "Specification Code", accessor: "createdAt" },
    { header: "attachment", accessor: "attachment" },
    { header: "Status", accessor: "status" },
    {
      header: 'Actions',
      accessor: 'action',
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={openModal2} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" onClick={() => onDeleteItem(row)} />
        </>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: initialData.length + index + 1,
      sampleType: item["Sample Type"] || "",
      storageCondition: item["Storage Condition"] || "",
      createdAt: item["Created At"] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...data, ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data

  };

  const StatusModal2 = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal2}
      >
        <CModalHeader>
          <CModalTitle>Update Sample login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Client"
            placeholder="Select..."
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Test Plan / Revision No."
            placeholder="Select..."
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material Code"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Generic Name"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Specification ID"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Copy Sample from"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Certificates (If any)"
            placeholder=""
          />

          <div className="bg-white rounded border-dark-subtle border-2 ">
            <CTable align="middle" responsive className="   ">
              <thead>
                <tr>
                  <th className="bg-info text-light">Sno.</th>
                  <th className="bg-info text-light">Test Name</th>
                  <th className="bg-info text-light">Group Name</th>
                  <th className="bg-info text-light">Selection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Viscosity @40C</td>
                  <td></td>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Total Acid Number (TAN)</td>
                  <td></td>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Water Content PPM</td>
                  <td></td>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </CTable>
          </div>

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal2}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Update Sample</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };
  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Login</h4>
        </div>


        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "REJECTED", label: "REJECTED" },
                { value: "APPROVED", label: "APPROVED" },
                { value: "DROPPED", label: "DROPPED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Sample Log In" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} data={filteredData} onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
      </div>
      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {isModalOpen2 && (
        <StatusModal2
          visible={isModalOpen2}
          closeModal2={closeModal2}
        />
      )}
      {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}


    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal
      className="w-5"
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>New Sample login</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          type="text"
          className="mb-3"
          label="Client"
          placeholder="Select..."
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Test Plan / Revision No."
          placeholder="Select..."
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Product / Material"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Product / Material Code"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Generic Name"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Specification ID"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Copy Sample from"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Sample Type"
          placeholder=""
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Certificates (If any)"
          placeholder=""
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary">Add Sample</CButton>
      </CModalFooter>
    </CModal>
  );
};
