import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from 'react';

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  { checkbox: false, sno: 1, storageCode: "SC001", storageName: "Storage 1", attachment: "attachment", status: "Active", action: [
    <FontAwesomeIcon icon={faEye} key="view1" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit1" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete1" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 2, storageCode: "SC002", storageName: "Storage 2", attachment: "attachment", status: "Inactive", action: [
    <FontAwesomeIcon icon={faEye} key="view2" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit2" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete2" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 3, storageCode: "SC003", storageName: "Storage 3", attachment: "attachment", status: "Active", action: [
    <FontAwesomeIcon icon={faEye} key="view3" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit3" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete3" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 4, storageCode: "SC004", storageName: "Storage 4", attachment: "attachment", status: "Inactive", action: [
    <FontAwesomeIcon icon={faEye} key="view4" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit4" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete4" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 5, storageCode: "SC005", storageName: "Storage 5", attachment: "attachment", status: "Active", action: [
    <FontAwesomeIcon icon={faEye} key="view5" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit5" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete5" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 6, storageCode: "SC006", storageName: "Storage 6", attachment: "attachment", status: "Inactive", action: [
    <FontAwesomeIcon icon={faEye} key="view6" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit6" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete6" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 7, storageCode: "SC007", storageName: "Storage 7", attachment: "attachment", status: "Active", action: [
    <FontAwesomeIcon icon={faEye} key="view7" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit7" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete7" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 8, storageCode: "SC008", storageName: "Storage 8", status: "Inactive", action: [
    <FontAwesomeIcon icon={faEye} key="view8" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit8" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete8" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 9, storageCode: "SC009", storageName: "Storage 9", attachment: "attachment", status: "Active", action: [
    <FontAwesomeIcon icon={faEye} key="view9" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit9" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete9" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 10, storageCode: "SC010", storageName: "Storage 10", attachment: "attachment", status: "Inactive", action: [
    <FontAwesomeIcon icon={faEye} key="view10" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faPenToSquare} key="edit10" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete10" className="cursor-pointer" />
  ]},
];

function StorageLocation() {
  const [data, setData] = useState(initialData);
  const [statusFilter, setStatusFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewModalData, setViewModalData] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [delModal, setDelModal] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false); 

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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
      row.storageName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === 'All' || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true); 
  };


  const columns = [
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: 'checkbox' },
    { header: 'SrNo.', accessor: 'sno' },
    { header: 'Storage Code', accessor: 'storageCode' },
    { header: 'Storage Name', accessor: 'storageName' },
    { header: "attachment", accessor: "attachment" },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Actions',
      accessor: 'action',
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() => onViewDetails(row)} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" onClick={() => onDeleteItem(row)}/>
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

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      storageCode: item["Storage Code"] || "",
      storageName: item["Storage Name"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));
  
    // Concatenate the updated data with existing data
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
  
  };

  return (
    <>
      <div className="m-5 mt-3">
          <div className="main-head">
            <h4 className="fw-bold ">Storage Location</h4>
          </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: 'All', label: 'All' },
              { value: 'Active', label: 'Active' },
              { value: 'Inactive', label: 'Inactive' },
             
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Storage Location" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table columns={columns} data={filteredData} onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
       
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
       {viewModalData && <ViewModal visible={viewModalData} closeModal={closeViewModal} />}
       {isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>New Storage Location</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput type="text" label="Name" placeholder="Location Name" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Cancel
        </CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
    </CModal>
  );
};

const RemoveModal = (props) => {
  return (
    <CModal alignment="center" visible={props.visible} onClose={props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Delete Storage Location</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Are you sure you want to delete this storage location?</p>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={props.closeModal}
          style={{
            marginRight: "0.5rem",
            fontWeight: "500",
          }}
        >
          Cancel
        </CButton>
        <CButton
          color="danger"
          onClick={props.confirmDelete}
          style={{
            fontWeight: "500",
            color: "white",
          }}
        >
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};


export default StorageLocation;
