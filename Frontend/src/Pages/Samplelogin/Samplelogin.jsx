/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faPenToSquare,faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import SampleLogin2Modal from "../Modals/SampleLogin2Modal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import ReusableModal from "../Modals/ResusableModal.jsx";

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
    analyst:"Mayank",
    analysisDate:"27-09-2024",
    status: "INITIATED",
  
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
    analyst:"Pankaj",
    analysisDate:"30-09-2024",
    status: "APPROVED",
  
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
    analyst:"Gaurav",
    analysisDate:"21-09-2024",
    status: "REJECTED",
  
  },
];

const SampleLogin = () => {
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
const [isEditModal , setIsEditModal] = useState(false)
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null); // State to hold the selected row data
  const [editModalData, setEditModalData] = useState(null);
  const openEditModal = (rowData) => {
    setSelectedRowData(rowData); // Set the selected row data
    setIsModalOpen(true); // Open the modal
    setEditModalData(rowData);
  };
  const closeEditModal = () => {
    setEditModalData(null);
  };


  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
// const EditModal = ({ visible, closeModal, data, onSave }) => {
//   const [selectedSpecId, setSelectedSpecId] = useState("");
//   const [availableTests, setAvailableTests] = useState([
//     "Description", "Weight of 20 Tablets", "Average Weight ( mg )", "Thickness",
//     "Disintigration  Time", "Hardness", "Diameter", "Friability",
//   ]);
//   const [selectedTests, setSelectedTests] = useState([]);
//   const [refreshedTests, setRefreshedTests] = useState([]);
//   const [formData, setFormData] = useState(data);

//   useEffect(() => {
//     if (data) {
//       setFormData(data);
//       setSelectedTests(data.selectedTests || []);
//       setRefreshedTests(data.refreshedTests || []);
//     }
//   }, [data]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     onSave({ ...formData, selectedTests, refreshedTests });
//   };

//   const specTestsMap = {
//     "MED-001": ["Blood Test", "X-Ray", "MRI Scan", "CT Scan"],
//     "MED-002": ["Liver Function Test", "Blood Pressure Test", "Urine Test"],
//     // ... other spec tests ...
//   };

//   const handleSpecIdChange = (e) => {
//     const specId = e.target.value;
//     setSelectedSpecId(specId);
//     setAvailableTests(specTestsMap[specId] || []);
//     setSelectedTests([]);
//     setRefreshedTests([]);
//   };

//   const handleTestSelect = (test) => {
//     setSelectedTests(prevTests => 
//       prevTests.includes(test) ? prevTests.filter(t => t !== test) : [...prevTests, test]
//     );
//     setAvailableTests(prevTests => 
//       prevTests.includes(test) ? prevTests.filter(t => t !== test) : [...prevTests, test]
//     );
//   };

//   const handleRefresh = () => {
//     setRefreshedTests(selectedTests);
//   };

//   return (
//     <CModal alignment="center" visible={visible} onClose={closeModal} size="xl">
//       <CModalHeader>
//         <CModalTitle>Edit Sample Login</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <CFormSelect
//           label="Specification ID"
//           className="mb-3"
//           name="specificationId"
//           options={[
//             { label: "ACC-00-QC-01", value: "ACC-00-QC-01" },
//             { label: "SPC001", value: "SPC001" },
//             // ... other options ...
//           ]}
//           value={formData?.specificationId || ""}
//           onChange={(e) => {
//             handleChange(e);
//             handleSpecIdChange(e);
//           }}
//         />
//         <CFormInput
//           label="Product/Material Name"
//           className="mb-3"
//           type="text"
//           name="productName"
//           value={formData?.productName || ""}
//           onChange={handleChange}
//         />
//         {/* ... other form inputs ... */}
        
//         <div className="drag-drop">
//           {/* Available Tests */}
//           <div className="sub-container">
//             <h5>Available Tests</h5>
//             <div className="list-container">
//               <ul>
//                 {availableTests.map((test) => (
//                   <li key={test}>
//                     <input
//                       type="checkbox"
//                       value={test}
//                       id={`available-${test}`}
//                       className="check-left"
//                       onChange={() => handleTestSelect(test)}
//                       checked={selectedTests.includes(test)}
//                     />
//                     <label className="labels" htmlFor={`available-${test}`}>{test}</label>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
          
//           {/* Arrows */}
//           <div className="mid-container">
//             <button className="arrow-button" onClick={() => {}}>
//               <TiArrowRightThick />
//             </button>
//             <button className="arrow-button" onClick={() => {}}>
//               <TiArrowLeftThick />
//             </button>
//           </div>
          
//           {/* Selected Tests */}
//           <div className="sub-container">
//             <h5>Selected</h5>
//             <div className="list-container">
//               <ul>
//                 {selectedTests.map((test) => (
//                   <li key={test}>
//                     <input
//                       type="checkbox"
//                       value={test}
//                       id={`selected-${test}`}
//                       className="check-right"
//                       onChange={() => handleTestSelect(test)}
//                       checked={selectedTests.includes(test)}
//                     />
//                     <label className="labels" htmlFor={`selected-${test}`}>{test}</label>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <input type="checkbox" id="testGrouping" /> 
//               <label htmlFor="testGrouping">Test Grouping Required</label>
//             </div>
//             <button
//               style={{
//                 borderRadius: "5px",
//                 margin: "17px 20px",
//                 padding: "2px 6px",
//                 backgroundColor: "#0f93c3",
//                 border: "1px solid #0f93c3",
//                 color: "white",
//               }}
//               onClick={handleRefresh}
//             >
//               Refresh
//             </button>
//           </div>
//         </div>
        
//         {/* Refreshed Tests Table */}
//         {refreshedTests.length > 0 && (
//           <table className="border-1 border-black min-w-full divide-y divide-gray-200">
//             {/* ... table header ... */}
//             <tbody className="bg-white divide-y divide-gray-200">
//               {refreshedTests.map((test, index) => (
//                 <React.Fragment key={index}>
//                   {/* ... table rows ... */}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         )}
        
//         <CFormSelect
//           className="mb-3"
//           label="Coa Template"
//           options={[
//             "Select Coa Template",
//             { label: "Test Coa", value: "test-coa" },
//             { label: "Windlas Template", value: "windlas-template" },
//           ]}
//           name="coaTemplate"
//           value={formData?.coaTemplate}
//           onChange={handleChange}
//         />
        
//         <label className="my-2" htmlFor="remarks">Remarks</label>
//         <textarea
//           id="remarks"
//           name="remarks"
//           value={formData?.remarks}
//           onChange={handleChange}
//           className="line4 w-100 mx-1"
//           rows="4"
//           cols="50"
//         ></textarea>
        
//         <div className="d-flex gap-3 mt-4">
//           <CButton color="light w-50" onClick={closeModal}>
//             &lt; Back
//           </CButton>
//           <CButton color="primary w-50" onClick={handleSave}>
//             Submit
//           </CButton>
//         </div>
//       </CModalBody>
//     </CModal>
//   );
// };


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
      if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
      else if (item.status === "DROPPED") counts.DROPPED++;
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
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const handleStatusUpdate = (sampleType, newStatus) => {
    const updatedData = data.map((item) =>{
      console.log(item, "iiiiiiiiii")
      return(
        item.sampleType === sampleType ? { ...item, status: newStatus } : item
      )
    }
    
    );
    setData(updatedData);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      sampleType: item["Sample Type"] || "",
      storageCondition: item["Storage Condition"] || "",
      createdAt: item["Created At"] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      attachment: item["Attachment"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
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
    { header: "Status", accessor: "status" },
    { header: "Analyst", accessor: "analyst" },
    { header: "Analysis Date", accessor: "analysisDate" },
    { header: "attachment", accessor: "attachment" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={openModal2}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => onDeleteItem(row)}
          />
        </>
      ),
    },
  ];

  const fields=[
    {label:"Sample Type",key:"sampleType"},
    {label:"Product / Material",key:"storageCondition"},
    {label:"A.R. No.",key:"createdAt"},
    {label:"Generic Name",key:"genericName"},
    {label:"Specification Code",key:"specificationCode"},
    {label:"Status",key:"status"},
    {label:"Analyst",key:"analyst"},
    {label:"Analysis Date",key:"analysisDate"},
    {label:"attachment",key:"attachment"},
  ]

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsViewModalOpen(false);
  };

  const closeViewModal = () => {
    setViewModalData(null);
    setIsViewModalOpen(false);
  };

  const onRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsEditModal(true); // Open the modal when row is clicked
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Login</h1>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <Dropdown
            options={[
              { value: "Ar No.", label: "Ar No." },
              { value: "ARAMPHO000126", label: "ARAMPHO000126" },
              { value: "ARRW0000125", label: "ARRW0000125" },
              { value: "ARRW0000124", label: "ARRW0000124" },
              { value: "ARFP0000123", label: "ARFP0000123" },
              { value: "ARABEP0000122", label: "ARABEP0000122" },
              { value: "ARAMPHO0000121", label: "ARAMPHO0000121" },
              { value: "ARAMPHO0000120", label: "ARAMPHO0000120" },
              { value: "ARAMPHO0000119", label: "ARAMPHO0000119" },
              { value: "ARPC0000118", label: "ARPC0000118" },
              { value: "ARFFT0000117", label: "ARFFT0000117" },
              { value: "ARFP0000116", label: "ARFP0000116" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "REJECTED", label: "REJECTED" },
              { value: "DROPPED", label: "DROPPED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
        <PDFDownload columns={columns} data={filteredData} fileName="sampleLogin.pdf" title="Sample LogIn Data" />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Sample Login" color="blue" onClick={openModal} />
        </div>
      </div>
      
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <SampleLogin2Modal visible={isModalOpen} 
        closeModal={closeModal} 
        rowData={selectedRowData} />
      {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen !==null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          updateStatus={handleStatusUpdate} 
        />
      )}
      {isModalsOpen && (
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default SampleLogin;
