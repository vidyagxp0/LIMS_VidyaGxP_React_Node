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
import { useState , useEffect } from "react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import ViewModal from "../Modals/ViewModal";
import PDFDownload from '../PDFComponent/PDFDownload '

const initialData = [
  {
    checkbox: false, sno: 1, storageCode: "SC001", storageName: "Storage 1", attachment: "attachment", status: "Active", 
  },
  {
    checkbox: false, sno: 2, storageCode: "SC002", storageName: "Storage 2", attachment: "attachment", status: "Inactive", 
  },
  
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
  const [lastStatus, setLastStatus] = useState("Inactive");
  const [editModalData, setEditModalData] = useState(null)

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
      sno: index + 1,
      storageCode: item["Storage Code"] || "",
      storageName: item["Storage Name"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);; // Update data state with parsed Excel data

  };
  const addNewStorageCondition = (newCondition) => {
    setData((prevData) => [
      ...prevData,
      { ...newCondition, sno: prevData.length + 1, checkbox: false, storageCode: "CC" + 1 },
    ]);
    setIsModalOpen(false); // Close the modal after adding new condition
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [name, setName] = useState("");

    const handleAdd = () => {
      const newCondition = {
        storageCode:"",
        storageName: name,
        createdAt: new Date().toISOString().split("T")[0], // Current date
        attachment: "attachment",
        status: "Active",
      };

      onAdd(newCondition);
    }
    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Storage Location</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="Name" placeholder="Location Name" value={name}
            onChange={(e) => setName(e.target.value)} />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleAdd}>Add</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };
  
  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };

  const EditModal = ({ visible, closeModal,data, onSave}) => {
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [formData, setFormData] = useState(data);

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const addRows = () => {
      setNumRows(inputValue);
    };

    useEffect(() => {
      if (data) {
        setFormData(data);
      }

    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };
    return (
      
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Storage Location</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="Location Name"
            value={formData?.storageName || ""}
            onChange={handleChange}
            name="storageName" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>Add</CButton>
        </CModalFooter>
      </CModal>
    );
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
            <PDFDownload columns={columns} data={filteredData} title="Storage Location" fileName="Storage_Location.pdf"/>
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Storage Location" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} data={filteredData} onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} openEditModal={openEditModal} />

      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition} />
      )}
      {isViewModalOpen && <ViewModal visible={isViewModalOpen} closeModal={closeViewModal} />}
      {isModalsOpen && (
        <ImportModal initialData={initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
      <EditModal
        visible={Boolean(editModalData)}
        closeModal={closeEditModal}
        data={editModalData}
        onSave={handleEditSave}
      />
       
    </>
  );
}



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
