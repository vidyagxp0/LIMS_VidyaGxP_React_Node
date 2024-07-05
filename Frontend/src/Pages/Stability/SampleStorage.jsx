
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
import ImportModal from "../Modals/importModal";


const initialData = [
     {
       checkbox: false,
       sno: 1,
       productName: "Product 1",
       chamberID: "CH001",
       actualQuantity: 100,
       availableQuantity: 80,
       protocolType: "Type X",
       status: "DROPPED",
     },
     {
       checkbox: false,
       sno: 2,
       productName: "Product 2",
       chamberID: "CH002",
       actualQuantity: 150,
       availableQuantity: 150,
       protocolType: "Type Y",
       status: "INITIATED",
     },
     {
       checkbox: false,
       sno: 3,
       productName: "Product 3",
       chamberID: "CH003",
       actualQuantity: 200,
       availableQuantity: 190,
       protocolType: "Type Z",
       status: "REINITIATED",
     },
     {
       checkbox: false,
       sno: 4,
       productName: "Product 4",
       chamberID: "CH004",
       actualQuantity: 250,
       availableQuantity: 240,
       protocolType: "Type X",
       status: "APPROVED",
     },
     {
       checkbox: false,
       sno: 5,
       productName: "Product 5",
       chamberID: "CH005",
       actualQuantity: 300,
       availableQuantity: 290,
       protocolType: "Type Y",
       status: "REJECTED",
     },
     {
       checkbox: false,
       sno: 6,
       productName: "Product 6",
       chamberID: "CH006",
       actualQuantity: 350,
       availableQuantity: 340,
       protocolType: "Type Z",
       status: "DROPPED",
     },
     {
       checkbox: false,
       sno: 7,
       productName: "Product 7",
       chamberID: "CH007",
       actualQuantity: 400,
       availableQuantity: 400,
       protocolType: "Type X",
       status: "INITIATED",
     },
     {
       checkbox: false,
       sno: 8,
       productName: "Product 8",
       chamberID: "CH008",
       actualQuantity: 450,
       availableQuantity: 445,
       protocolType: "Type Y",
       status: "REINITIATED",
     },
     {
       checkbox: false,
       sno: 9,
       productName: "Product 9",
       chamberID: "CH009",
       actualQuantity: 500,
       availableQuantity: 480,
       protocolType: "Type Z",
       status: "APPROVED",
     },
     {
       checkbox: false,
       sno: 10,
       productName: "Product 10",
       chamberID: "CH010",
       actualQuantity: 550,
       availableQuantity: 530,
       protocolType: "Type X",
       status: "REJECTED",
     },
   ];
   


function SampleStorage() {
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
      row.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Product Name", accessor: "productName" },
    { header: "Chamber ID", accessor: "chamberID" },
    { header: "Actual Quantity", accessor: "actualQuantity" },
    { header: "Available Quantity", accessor: "availableQuantity" },
    { header: "Protocol Type", accessor: "protocolType" },
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
      sno:  index + 1,
      productName: item["Product Name"] || "",
      chamberID: item["Chamber ID"] || "",
      actualQuantity: item["Actual Quantity"] || "",
      availableQuantity: item["Available Quantity"] || "",
      protocolType: item["Protocol Type"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  
  return (
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Storage</h1>
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
          <ATMButton text="Add Sample Storage" color="blue" onClick={openModal} />
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
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}

    </div>
    </>
  );
}


const StatusModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                    <CModalHeader>
                         <CModalTitle>Add Sample Storage</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormSelect
                              className="mb-3"
                              type="select"
                              label="Specification ID"
                              placeholder="Select... "
                              options={[
                                   "",
                                   { label: "HCL10132%" },
                                   { label: "HOS 234" },
                                   { label: "CHPOIL001" },
                                   { label: "MB-PM-001/01" },
                                   { label: "RPS-TSLV-00" },
                                   { label: "rest0001" },
                              ]}
                         />
                         <CFormInput
                              type="text"
                              label="Product/Material Name"
                              placeholder="Testamine "
                              disabled
                         />
                         <CFormSelect
                              type="text"
                              label="Protocol ID"
                              placeholder="select... "
                              options={[
                                   "select...",
                                   { label: "asdf3453" },
                                   { label: "001" },
                                   { label: "STP132432" },
                                   { label: "MB-PM-001/01" },
                                   { label: "RPS-TSLV-00" },
                                   { label: "rest0001" },
                              ]}
                         />
                         <CFormSelect
                              className="mb-3"
                              type="select"
                              label="Storage Conditions"
                              placeholder="select... "
                              options={[
                                   "select...",
                                   { label: "asdf3453" },
                                   { label: "001" },
                                   { label: "STP132432" },
                                   { label: "MB-PM-001/01" },
                                   { label: "RPS-TSLV-00" },
                                   { label: "rest0001" },
                              ]}
                         />
                         <CFormSelect
                              className="mb-3"
                              type="select"
                              label="Chamber ID"
                              placeholder="select... "
                         />
                         <CFormInput
                              className="mb-3"
                              type="text"
                              label=" Actual Storage Quantity"
                              placeholder="Actual Storage Quantity "
                         />

                         <CFormInput
                              className="mb-3"
                              type="text"
                              label="Available Storage Quantity"
                              placeholder="Available Storage Quantity "
                         />

                         <CFormInput
                              className="mb-3"
                              type="text"
                              label="Number Of Storage Positions"
                              placeholder="Number Of Positions"
                         />
                         <CFormInput
                              className="mb-3"
                              type="text"
                              label="Chamber Description"
                              placeholder=" Chamber Description"
                         />
                         <CFormInput
                              className="mb-3"
                              type="text"
                              label="Chamber Location"
                              placeholder=" Chamber Location"
                         />

                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                         <CButton className="bg-info text-white">Submit</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}
export default SampleStorage;
