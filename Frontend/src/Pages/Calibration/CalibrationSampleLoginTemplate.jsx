
//   const StatusModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//         <CModalHeader>
//           <CModalTitle>Add Sample Login Template</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//         <CFormInput
//           label='Sample Login Template'
//           className="mb-3"
//           type="text"
//           placeholder=""
//           />  
//            <label className="" htmlFor="">Test Plan / Revision No.</label>
//            <Autocomplete
//                         disablePortal
//                         className="mb-3"
//                         id="combo-box-demo"
//                         options={top100Films}
//                         renderInput={(params) => <TextField {...params} label="" />}
//                     />

//           <CFormInput
//           label='Product / Material'
//           className="mb-3"
//           type="text"
//           placeholder=""
//           /> 
//            <CFormInput
//           label='Product / Material Code'
//           className="mb-3"
//           type="text"
//           placeholder=""
//           /> 
//            <CFormInput
//           label='Generic Name'
//           className="mb-3"
//           type="text"
//           placeholder=""
//           />  
//           <CFormInput
//           label='Specification ID'
//           className="mb-3"
//           type="text"
//           placeholder=""
//           /> 
//          <div className="d-flex gap-3 mt-4">
//         <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
//         <CButton color="primary w-50">Add</CButton>
//       </div>
//         </CModalBody>
//       </CModal>
//     )
//   }
   
//   const DeleteModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//             <CModalHeader>
//                 <CModalTitle>Delete User</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
//                 <p>Are you sure you want to delete this sample login template?</p>
//             </CModalBody>
//             <CModalFooter>
//                 <CButton
//                     color="secondary"
//                     onClick={_props.closeModal}
//                     style={{
//                         marginRight: "0.5rem",
//                         fontWeight: "500",
//                     }}
//                 >
//                     Cancel
//                 </CButton>
//                 <CButton
//                     color="danger"
//                     onClick={_props.confirmDelete}
//                     style={{
//                         fontWeight: "500",
//                         color: "white",
//                     }}
//                 >
//                     Delete
//                 </CButton>
//             </CModalFooter>
//         </CModal>
//     );
// };


import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
    {
      checkbox: false,
      sno: 1,
      SampleLogintemplate: "Product 1",
      TestPlan: "Seq 1",
      QuantitativeParameters: "Info 1",
      AutoSampleAllotmentRequired: "Start 1",
      status: "DROPPED",
    },
    {
      checkbox: false,
      sno: 2,
      SampleLogintemplate: "Product 2",
      TestPlan: "Seq 2",
      QuantitativeParameters: "Info 2",
      AutoSampleAllotmentRequired: "Start 2",
      status: "INITIATED",
    },
    {
      checkbox: false,
      sno: 3,
      SampleLogintemplate: "Product 3",
      TestPlan: "Seq 3",
      QuantitativeParameters: "Info 3",
      AutoSampleAllotmentRequired: "Start 3",
      status: "REINITIATED",
    },
    {
      checkbox: false,
      sno: 4,
      SampleLogintemplate: "Product 4",
      TestPlan: "Seq 4",
      QuantitativeParameters: "Info 4",
      AutoSampleAllotmentRequired: "Start 4",
      status: "APPROVED",
    },
    {
      checkbox: false,
      sno: 5,
      SampleLogintemplate: "Product 5",
      TestPlan: "Seq 5",
      QuantitativeParameters: "Info 5",
      AutoSampleAllotmentRequired: "Start 5",
      status: "REJECTED",
    },
    {
      checkbox: false,
      sno: 6,
      SampleLogintemplate: "Product 6",
      TestPlan: "Seq 6",
      QuantitativeParameters: "Info 6",
      AutoSampleAllotmentRequired: "Start 6",
      status: "DROPPED",
    },
    {
      checkbox: false,
      sno: 7,
      SampleLogintemplate: "Product 7",
      TestPlan: "Seq 7",
      QuantitativeParameters: "Info 7",
      AutoSampleAllotmentRequired: "Start 7",
      status: "INITIATED",
    },
  ];
  


const CalibrationSampleLoginTemplate = () => {
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
      row.SampleLogintemplate.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sample Login template", accessor: "SampleLogintemplate" },
    { header: "Test Plan", accessor: "TestPlan" },
    { header: "Auto Sample Allotment Required", accessor: "AutoSampleAllotmentRequired" },
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
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:initialData.length+ index + 1,
      SampleLogintemplate: item["Sample Login template"] || "",
      TestPlan: item["Test Plan"] || "",
      AutoSampleAllotmentRequired: item["Auto Sample Allotment Required"] || "",
      status: item["Status"] || "",
    }));
    const concatenateData = [...data, ...updatedData]; 
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Login Template</h1>
     
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
          <ATMButton text="Add Login Template" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
       {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};

export default CalibrationSampleLoginTemplate;
