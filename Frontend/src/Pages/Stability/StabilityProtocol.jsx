import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
    CButton,
    CContainer,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CRow,
    CCol,
    CFormSelect,
    CFormCheck,
  } from "@coreui/react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    productMaterial: "Product 1",
    specificationID: "Spec-001",
    genericName: "Generic Name 1",
    sampleType: "Type A",
    protocolType: "Type X",
    protocolID: "PID-001",
    addedOn: "2024-01-01",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    productMaterial: "Product 2",
    specificationID: "Spec-002",
    genericName: "Generic Name 2",
    sampleType: "Type B",
    protocolType: "Type Y",
    protocolID: "PID-002",
    addedOn: "2024-01-02",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    productMaterial: "Product 3",
    specificationID: "Spec-003",
    genericName: "Generic Name 3",
    sampleType: "Type C",
    protocolType: "Type Z",
    protocolID: "PID-003",
    addedOn: "2024-01-03",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    productMaterial: "Product 4",
    specificationID: "Spec-004",
    genericName: "Generic Name 4",
    sampleType: "Type A",
    protocolType: "Type X",
    protocolID: "PID-004",
    addedOn: "2024-01-04",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    productMaterial: "Product 5",
    specificationID: "Spec-005",
    genericName: "Generic Name 5",
    sampleType: "Type B",
    protocolType: "Type Y",
    protocolID: "PID-005",
    addedOn: "2024-01-05",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    productMaterial: "Product 6",
    specificationID: "Spec-006",
    genericName: "Generic Name 6",
    sampleType: "Type C",
    protocolType: "Type Z",
    protocolID: "PID-006",
    addedOn: "2024-01-06",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    productMaterial: "Product 7",
    specificationID: "Spec-007",
    genericName: "Generic Name 7",
    sampleType: "Type A",
    protocolType: "Type X",
    protocolID: "PID-007",
    addedOn: "2024-01-07",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    productMaterial: "Product 8",
    specificationID: "Spec-008",
    genericName: "Generic Name 8",
    sampleType: "Type B",
    protocolType: "Type Y",
    protocolID: "PID-008",
    addedOn: "2024-01-08",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    productMaterial: "Product 9",
    specificationID: "Spec-009",
    genericName: "Generic Name 9",
    sampleType: "Type C",
    protocolType: "Type Z",
    protocolID: "PID-009",
    addedOn: "2024-01-09",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    productMaterial: "Product 10",
    specificationID: "Spec-010",
    genericName: "Generic Name 10",
    sampleType: "Type A",
    protocolType: "Type X",
    protocolID: "PID-010",
    addedOn: "2024-01-10",
    status: "REJECTED",
  },
];


function StabilityProtocol() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };


  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.protocolID.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData); // Set the data for ViewModal
    setIsViewModalOpen(true); // Open the ViewModal
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Product/Material", accessor: "productMaterial" },
    { header: "Specification ID", accessor: "specificationID" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Protocol Type", accessor: "protocolType" },
    { header: "Protocol ID", accessor: "protocolID" },
    { header: "Added on", accessor: "addedOn" },
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

   
  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      productMaterial: item["Product/Material"] || "",
      specificationID: item["Specification ID"] || "",
      genericName: item["Generic Name"] || "",
      sampleType: item["Sample Type"] || "",
      protocolType: item["Protocol Type"] || "",
      protocolID: item["Protocol ID"] || "",
      addedOn: item["Added on"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...data, ...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  
  return (
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Stability Protocol</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery}/>
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
          <ATMButton text="Add Storage Chamber" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onDelete={handleDelete}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
      />
    
      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
        
        />
      )}
      {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
    </>
  );
}


const StatusModal = (_props) => {
  const [conditions, setConditions] = useState([]);

  const handleAddConditions = () => {
    const numberOfConditions = parseInt(document.getElementById('numberOfConditions').value);
    if (!isNaN(numberOfConditions) && numberOfConditions > 0) {
      const newConditions = Array.from({ length: numberOfConditions }, (_, index) => ({
        id: index + 1,
      }));
      setConditions(newConditions);
    }
  };

  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Stability Protocol</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-3"
            type="select"
            label="Specification ID"
            placeholder="Select..."
            options={[
              "",
              { label: "HCL10132%" },
              { label: "HOS234" },
              { label: "CHPOIL001" },
              { label: "rest0001" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product"
            placeholder="testamine"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Generic Name"
            placeholder="Testamine"
            disabled
          />
          <CFormSelect
            className="mb-3"
            type="select"

            label="Sample Type"
            placeholder="Select Sample Type"
            options={[
              "Select Sample Type",
              { label: "HCL" },
              { label: "Hydrochloric Acid" },
              { label: "Petrochemical" },
              { label: "Initiated Product" },
            ]}
          />
          <label className="mb-3">Protocol Type</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="protocolTypeNew"
            name="protocolType"
            label="New"
          />
          <CFormCheck
            type="radio"
            id="protocolTypeExisting"
            name="protocolType"
            label="Existing"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Protocol Id"
            placeholder="Protocol Id"
          />
          <CFormInput
            className="mb-3"
            type="select"
            label="Sample Login Template"
            placeholder="Select..."
            options={[
              "Select Sample Type",
              { label: "ARZ Temp" },
              { label: "AAT" },
            ]}
          />
          <CFormInput className="mb-3" type="date" label="Manufacturing Date" placeholder=" " />

          <label>DateFormat</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="DateFormatShort"
            name="DateFormat"
            label="Short Date"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="DateFormatLong"
            name="DateFormat"
            label="Long Date"
          />

          <CFormInput className="mb-3" type="text" label="Sample By" placeholder="Sample By" />
          <CFormInput
            className="mb-3"
            type="text"
            label="Storage Condition UOM"
            placeholder="Storage Condition UOM"
          />
          <label className="mb-3">Define Charging Start Date</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="DateFormatNow"
            name="ChangingDate"
            label="Now"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="DateFormatLater"
            name="ChangingDate"
            label="Later"
          />

          <CFormInput className="mb-3" type="date" label="Starting Date" placeholder="" />

          <label className="mb-3">Initial Testing Required</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="TestingRequiredYes"
            name="TestingRequired"
            label="Yes"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="TestingRequiredNo"
            name="TestingRequired"
            label="No"
          />

          <CFormInput className="mb-3" type="file" label="Certificates If Any" placeholder=" " />

          <CRow>
            <CCol sm={10}>
              <CFormInput
                className="mb-3"
                type="text"
                id="numberOfConditions"
                label="Number Of Storage Conditions"
                placeholder="Number Of Storage Conditions"
              />
            </CCol>

            <CCol sm={2}>
              <CButton className="bg-info text-white mb-3 mt-4" onClick={handleAddConditions}>Add</CButton>
            </CCol>

          </CRow>
          <CFormSelect
            className="mb-3"
            type="select"
            label="Test Plan / Revision No."
            placeholder="Select..."
            options={[
              "Select Sample Type",
              { label: "Hydraulic Oil" },
              { label: "CHP Oil" },
              { label: "Sacubitril" },
              { label: "Bio Burden Test For PM" },
            ]}
          />

          {conditions.map((condition, index) => (
            <div className="each-condition-data mt-4" key={condition.id}>
              <h6>Stability Storage Condition-{condition.id}</h6>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.storage_condition`}>Storage Condition</label>
                <div className="form-control-wrap">
                  <select className="form-control form-select" id={`conditions_data.${index}.storage_condition`} name={`conditions_data.${index}.storage_condition`} placeholder="Storage condition Uom">
                    <option value="">Select</option>
                    <option value="6651c0dfa9d2755d7705ce05">10 to 25</option>
                    <option value="664f1373a9d2755d770568b4">-20 ± 5°c</option>
                    <option value="664f06cea9d2755d77055787">25 ± 2°c 60 ± 5% rh</option>
                    <option value="664f06aaa9d2755d77055748">30 ± 2°c  65 ± 5% rh</option>
                    <option value="664f02f0a9d2755d77055627">40 ± 2°c and 75 ± 5% rh</option>
                    <option value="664f02c3a9d2755d7705561b">40 ± 2°c</option>
                    <option value="664c24cdc105e11a716a938a">15℃</option>
                    <option value="65cb1132de5392629a1b59b6">℉</option>
                    <option value="6527cb451d0d0c3cb2ddceac">30℃</option>
                    <option value="65262853842e2542b312a465">42℉</option>
                    <option value="652580fc842e2542b3129c77">32℃</option>
                    <option value="651fd1c204e9976b7c625a57">24℉</option>
                    <option value="64eb669f4b131677f6614266">25℃ ± 2</option>
                    <option value="64e9fbba4b131677f66140d1">25℃</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.no_of_pulls`}>No of Pulls</label>
                <div className="form-control-wrap">
                  <div className="d-flex">
                    <input type="number" className="form-control" id={`conditions_data.${index}.no_of_pulls`} name={`conditions_data.${index}.no_of_pulls`} placeholder="No" value="1" />
                    <button className="btn btn-primary" style={{ height: "36px", marginLeft: "8px" }}>Add</button>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row d-flex flex-nowrap">
                  <div style={{ width: "400px" }}>
                    <label className="form-label mt-3" htmlFor={`conditions_data.${index}.station`}>Station</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.additional_quantity`}>Additional Quantity</label>
                <div className="form-control-wrap">
                  <input type="number" className="form-control" id={`conditions_data.${index}.additional_quantity`} name={`conditions_data.${index}.additional_quantity`} placeholder="Additional Quantity" value="0" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.comments`}>Comments</label>
                <div className="form-control-wrap">
                  <input type="text" className="form-control" id={`conditions_data.${index}.comments`} name={`conditions_data.${index}.comments`} placeholder="comments" value="" />
                </div>
              </div>
            </div>
          ))}
          <CFormInput
            className="mb-3"
            type="text"
            label="Instructions"
            placeholder="Instructions"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Package Configuration"
            placeholder="Package Configuration"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add Protocol</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default StabilityProtocol;
