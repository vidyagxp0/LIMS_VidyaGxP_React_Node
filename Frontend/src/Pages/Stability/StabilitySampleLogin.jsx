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
    CHeader,
    CFooter,
  } from "@coreui/react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleType: "Type A",
    productMaterial: "Material 1",
    genericName: "Generic 1",
    specificationCode: "Spec001",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    sampleType: "Type B",
    productMaterial: "Material 2",
    genericName: "Generic 2",
    specificationCode: "Spec002",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    sampleType: "Type A",
    productMaterial: "Material 3",
    genericName: "Generic 3",
    specificationCode: "Spec003",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    sampleType: "Type C",
    productMaterial: "Material 4",
    genericName: "Generic 4",
    specificationCode: "Spec004",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    sampleType: "Type A",
    productMaterial: "Material 5",
    genericName: "Generic 5",
    specificationCode: "Spec005",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    sampleType: "Type B",
    productMaterial: "Material 6",
    genericName: "Generic 6",
    specificationCode: "Spec006",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    sampleType: "Type C",
    productMaterial: "Material 7",
    genericName: "Generic 7",
    specificationCode: "Spec007",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    sampleType: "Type A",
    productMaterial: "Material 8",
    genericName: "Generic 8",
    specificationCode: "Spec008",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    sampleType: "Type B",
    productMaterial: "Material 9",
    genericName: "Generic 9",
    specificationCode: "Spec009",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    sampleType: "Type C",
    productMaterial: "Material 10",
    genericName: "Generic 10",
    specificationCode: "Spec010",
    status: "REJECTED",
  },
];




function StabilitySampleLogin() {
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
         row.specificationCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
       { header: "Sample Type", accessor: "sampleType" },
       { header: "Product / Material", accessor: "productMaterial" },
       { header: "Generic Name", accessor: "genericName" },
       { header: "Specification Code", accessor: "specificationCode" },
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
     return (
       <>
       <div className="p-4">
         <h1 className="text-2xl font-bold mb-4">Sample Log In</h1>
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
           <div className="float-right">
             <ATMButton text="Add Sample LogIn" color="blue" onClick={openModal} />
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
       </div>
       </>
     );
   }  

   const StatusModal = (_props) => {
    return (
      <>
        <CModal
          alignment="center"
          visible={_props.visible}
          onClose={_props.closeModal}
        >
          <CModalHeader>
            <CModalTitle>Add Sample login</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
            className="mb-3"
              type="select"
              label="Test Plan / Revision No."
              placeholder="Select... "
              options={[
                "Select...",
                { label: "Hydroulic Oil" },
                { label: "CHP Oil" },
                { label: "Sacubitril" },
                { label: "Bio burden Test For PM" },
              ]}
            />
            <CFormInput
            className="mb-3"
              type="text"
              label="Product / Material"
              placeholder=" Product / Material"
              disabled
            />
            <CFormInput
            className="mb-3"
              type="text"
              label="Product / Material Code"
              placeholder=" Product / Material Code"
              disabled
            />
            <CFormInput
            className="mb-3"
              type="text"
              label="Generic Name"
              placeholder=" Generic Name"
              disabled
            />
            <CFormInput
            className="mb-3"
              type="text"
              label="Specification ID"
              placeholder="Specification ID"
              disabled
            />
            <CFormSelect
            className="mb-3"
              type="select"
              label="Copy Sample from"
              placeholder=" Select..."
              options={["Select...", { label: "No Options" }]}
            />
            <CFormInput
            className="mb-3"
              type="select"
              label="Sample Type"
              placeholder="Sample Type"
              disabled
            />
            <CFormSelect
            className="mb-3"
              type="select"
              label="Certificates (If any)"
              placeholder=" Select..."
              options={["Select...", { label: "No Options" }]}
            />
            <CFormSelect
            className="mb-3"
              type="select"
              label="Protocol ID"
              placeholder=" Select..."
              options={[
                "Select...",
                { label: "HCL10132%" },
                { label: "HOS 234" },
                { label: "CHPOIL001" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
            />
            <CFormSelect
            className="mb-3"
              type="select"
              label="Storage Conditions"
              placeholder=" Select..."
              options={[
                "Select...",
                { label: "°F" },
                { label: "30°C" },
                { label: "42°F" },
                { label: "25°C ± 2" },
                { label: "32°C" },
                { label: "24°F" },
                { label: "25°C" },
              ]}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={_props.closeModal}>
              Cancel
            </CButton>
            <CButton color="primary">Add Sample</CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };
  
  
export default StabilitySampleLogin;







