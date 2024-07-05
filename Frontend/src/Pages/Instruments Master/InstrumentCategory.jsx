// const StatusModal = (_props) => {
//     return (
//         <>
//             <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//                 <CModalHeader>
//                     <CModalTitle>Add Instrument Category</CModalTitle>
//                 </CModalHeader>
//                 <CModalBody>
//                     <p>Add information and add new Instrument Category</p>
//                     <CFormInput className="mb-3" type="text" label="Category Name" placeholder="Category Name" />
//                     <CFormInput className="mb-3" type="text" label="Description" placeholder="Description" />
//                 </CModalBody>
//                 <CModalFooter>
//                     <CButton color="light" onClick={_props.closeModal}>
//                         Back
//                     </CButton>
//                     <CButton color="primary">Submit</CButton>
//                 </CModalFooter>
//             </CModal>
//         </>
//     );
// };

// const DeleteModal = (_props) => {
//     return (
//         <CModal
//             alignment="center"
//             visible={_props.visible}
//             onClose={_props.closeModal}
//             size="lg"
//         >
//             <CModalHeader>
//                 <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//                     Delete Instrument Category
//                 </CModalTitle>
//             </CModalHeader>
//             <div
//                 className="modal-body"
//                 style={{
//                     fontSize: "1.2rem",
//                     fontWeight: "500",
//                     lineHeight: "1.5",
//                     marginBottom: "1rem",
//                     columnGap: "0px",
//                     border: "0px !important",
//                 }}
//             >
//                 <p>Are you sure you want to delete Instrument Category { }?</p>
//             </div>
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

const initialData = [
    {
      checkbox: false,
      sno: 1,
      CategoryName: "Product 1",
      Description: "Description 1",
      AddedOn: "2024-06-01",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      CategoryName: "Product 2",
      Description: "Description 2",
      AddedOn: "2024-06-02",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 3,
      CategoryName: "Product 3",
      Description: "Description 3",
      AddedOn: "2024-06-03",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 4,
      CategoryName: "Product 4",
      Description: "Description 4",
      AddedOn: "2024-06-04",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      CategoryName: "Product 5",
      Description: "Description 5",
      AddedOn: "2024-06-05",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 6,
      CategoryName: "Product 6",
      Description: "Description 6",
      AddedOn: "2024-06-06",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 7,
      CategoryName: "Product 7",
      Description: "Description 7",
      AddedOn: "2024-06-07",
      status: "Inactive",
    },
  ];


const InstrumentCategory = () => {
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
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
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
      row.CategoryName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Category Name", accessor: "CategoryName" },
    { header: "Description", accessor: "Description" },
    { header: "Added On", accessor: "AddedOn" },
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
      sno: data.length + index + 1,
      CategoryName: item["Category Name"] || "",
      Description: item["Description"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
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
      <h1 className="text-2xl font-bold mb-4">Instrument Category</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
        <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
          <ATMButton
            text="Instrument Category"
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
export default InstrumentCategory;
