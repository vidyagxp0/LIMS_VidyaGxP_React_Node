import React, { useState } from "react";
import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/ATM components/Table/Table";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";


const initialData = [
     {
       checkbox: false,
       sno: 1,
       name: "Test Name 1",
       standardProtocolId: "T001",
       standardProtocolDescription: "Type A",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 2,
       name: "Test Name 2",
       standardProtocolId: "T002",
       standardProtocolDescription: "Type B",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 3,
       name: "Test Name 3",
       standardProtocolId: "T003",
       standardProtocolDescription: "Type A",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 4,
       name: "Test Name 4",
       standardProtocolId: "T004",
       standardProtocolDescription: "Type C",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 5,
       name: "Test Name 5",
       standardProtocolId: "T005",
       standardProtocolDescription: "Type A",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 6,
       name: "Test Name 6",
       standardProtocolId: "T006",
       standardProtocolDescription: "Type B",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 7,
       name: "Test Name 7",
       standardProtocolId: "T007",
       standardProtocolDescription: "Type C",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 8,
       name: "Test Name 8",
       standardProtocolId: "T008",
       standardProtocolDescription: "Type A",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 9,
       name: "Test Name 9",
       standardProtocolId: "T009",
       standardProtocolDescription: "Type B",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 10,
       name: "Test Name 10",
       standardProtocolId: "T010",
       standardProtocolDescription: "Type C",
       status: "Inactive",
     },
   ];
   

function StandardProtocol() {
     const [data, setData] = useState(initialData);
     const [searchQuery, setSearchQuery] = useState("");
     const [statusFilter, setStatusFilter] = useState("All");
     const [viewModalData, setViewModalData] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);

     const handleSelectAll = (e) => {
       const checked = e.target.checked;
       const newData = data.map((row) => ({ ...row, checkbox: checked }));
       setData(newData);
     };
   
     const filteredData = data.filter((row) => {
       return (
         row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
       { header: "Standard Protocol Name", accessor: "name" },
       { header: "Standard Protocol Id", accessor: "standardProtocolId" },
       { header: "Standard Protocol Description", accessor: "standardProtocolDescription" },
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
          <h4 className="fw-bold">Storage Conditions</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right">
            <ATMButton
              text="Add Standard Protocol"
              color="blue"
              onClick={openModal}
            />
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
             
          </>
     );
}

const StatusModal = (_props) => {
     return (
          <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
               <CModalHeader>
                    <CModalTitle>Standard Protocol</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Standard Protocol Name"
                         placeholder=""
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Standard Protocol Id"
                         placeholder=""
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Description"
                         placeholder=""
                    />
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                    <CButton className="bg-info text-white">Add</CButton>
               </CModalFooter>
          </CModal>
     );
}


export default StandardProtocol;
