import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
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
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    productMaterialName: "Material 1",
    containersSampled: 5,
    addedOn: "2024-07-01",
    noOfContainers: 10,
    samplingConclusion: "Conclusion 1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    productMaterialName: "Material 2",
    containersSampled: 3,
    addedOn: "2024-06-30",
    noOfContainers: 8,
    samplingConclusion: "Conclusion 2",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 3,
    productMaterialName: "Material 3",
    containersSampled: 7,
    addedOn: "2024-06-29",
    noOfContainers: 12,
    samplingConclusion: "Conclusion 3",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 4,
    productMaterialName: "Material 4",
    containersSampled: 4,
    addedOn: "2024-06-28",
    noOfContainers: 6,
    samplingConclusion: "Conclusion 4",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 5,
    productMaterialName: "Material 5",
    containersSampled: 2,
    addedOn: "2024-06-27",
    noOfContainers: 5,
    samplingConclusion: "Conclusion 5",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 6,
    productMaterialName: "Material 6",
    containersSampled: 6,
    addedOn: "2024-06-26",
    noOfContainers: 9,
    samplingConclusion: "Conclusion 6",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 7,
    productMaterialName: "Material 7",
    containersSampled: 3,
    addedOn: "2024-06-25",
    noOfContainers: 7,
    samplingConclusion: "Conclusion 7",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 8,
    productMaterialName: "Material 8",
    containersSampled: 5,
    addedOn: "2024-06-24",
    noOfContainers: 10,
    samplingConclusion: "Conclusion 8",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 9,
    productMaterialName: "Material 9",
    containersSampled: 8,
    addedOn: "2024-06-23",
    noOfContainers: 15,
    samplingConclusion: "Conclusion 9",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 10,
    productMaterialName: "Material 10",
    containersSampled: 2,
    addedOn: "2024-06-22",
    noOfContainers: 4,
    samplingConclusion: "Conclusion 10",
    status: "REINITIATED",
  },
];

const ESampling = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      row.productMaterialName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
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
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Product/Material Name", accessor: "productMaterialName" },
    { header: "Containers Sampled", accessor: "containersSampled" },
    { header: "Added On", accessor: "addedOn" },
    { header: "No of Containers", accessor: "noOfContainers" },
    { header: "Sampling Conclusion", accessor: "samplingConclusion" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => {
              onViewDetails(row), navigate("/testResultsDetails");
            }}
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
      productMaterialName: item["Product/Material Name"] || "",
      containersSampled: item["Containers Sampled"] || "",
      addedOn: item["Added On"] || "",
      noOfContainers: item["No of Containers"] || "",
      samplingConclusion: item["Sampling Conclusion"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">E-Sampling</h4>
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
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add E-Sampling" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </>
  );
};

const StatusModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="xl"
    >
      <CModalHeader>
        <CModalTitle>Add E-Sample</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormSelect
          className="mb-3"
          type="select"
          label="Sampling Configuration"
          options={[
            "Select",
            { label: "SC-072023-0000001", value: "SC-072023-0000001" },
            { label: "SC-072023-0000002", value: "SC-072023-0000002" },
            { label: "SC-072023-0000003", value: "SC-072023-0000003" },
            { label: "SC-072023-0000004", value: "SC-072023-0000004" },
          ]}
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Product/Material Name"
          placeholder="Product/Material Name"
          disabled
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Test Plan"
          placeholder="Test Plan"
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="A.R. No"
          options={[
            "Select",
            { label: "ARPC010110", value: "ARPC010110" },
            { label: "ARPC010111", value: "ARPC010111" },
            { label: "ARPC010112", value: "ARPC010112" },
            { label: "ARPC010113", value: "ARPC010113" },
          ]}
        />

        <CFormInput
          className="mb-3"
          type="number"
          label="Total No. of containers"
          placeholder="Total No. of containers"
        />
        <CFormInput
          className="mb-3"
          type="number"
          label="No. of containers to be sampled"
          placeholder="No. of containers to be sampled"
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="Containers sampled"
          options={[
            "Select",
            {
              label: "No. Of Sampled Containers",
              value: "No. Of Sampled Containers",
            },
          ]}
        />

        <label className="mb-3">Sampling Conclusion</label>
        <CFormCheck
          type="radio"
          id="SamplingConclusionPass"
          name="SamplingConclusion"
          label="Pass"
        />
        <CFormCheck
          className="mb-3"
          type="radio"
          id="SamplingConclusionFail"
          name="SamplingConclusion"
          label="Fail"
        />

        <label className="mb-3">Check point passed</label>
        <CFormCheck
          type="radio"
          id="CheckPointPassedYes"
          name="CheckPointPassed"
          label="Yes"
        />
        <CFormCheck
          className="mb-3"
          type="radio"
          id="CheckPointPassedNo"
          name="CheckPointPassed"
          label="No"
        />

        <CFormInput
          className="mb-3"
          type="file"
          label="Document If Any"
          placeholder="Choose File"
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Comments"
          placeholder="Comment here..."
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Initiated By"
          placeholder="Admin"
          disabled
        />
        <CFormInput
          className="mb-3"
          type="date"
          label="Initiated On"
          placeholder="05/24/2024"
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ESampling;
