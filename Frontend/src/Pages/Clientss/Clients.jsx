import React, { useState, useEffect } from "react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import ClientsModal from "../Modals/ClientsModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ClientName: "Client 1",
    EmailAddress: "client1@example.com",
    phone: "1234567890",
    Address: "Address 1",
    AddedOn: "2024-06-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    ClientName: "Client 2",
    EmailAddress: "client2@example.com",
    phone: "2345678901",
    Address: "Address 2",
    AddedOn: "2024-06-02",
    status: "Active",
  },
];

const Clients = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
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
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Client</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">Add information and add new Client</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Client Name"
            name="ClientName"
            placeholder="Client Name"
            value={formData?.ClientName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Alternate Name"
            name="alternateName"
            placeholder="Alternate Name"
            value={formData?.alternateName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="email"
            className="mb-3"
            label="Email"
            name="EmailAddress"
            placeholder="EmailAddress"
            value={formData?.EmailAddress || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            name="phone"
            label="phone"
            placeholder="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Address"
            name="Address"
            placeholder="Address"
            value={formData?.Address || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="contactPerson"
            label="Contact Person"
            placeholder="Contact Person"
            value={formData?.contactPerson || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            name="contactPersonNumber"
            label="Contact Person Number"
            placeholder="Contact Person Number"
            value={formData?.contactPersonNumber || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Tax Number"
            name="taxNumber"
            placeholder="Tax Number"
            value={formData?.taxNumber || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Fax"
            name="fax"
            placeholder="fax"
            value={formData?.fax || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Website"
            placeholder="Website"
            name="website"
            value={formData?.website || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Name"
            name="name"
            placeholder="name"
            value={formData?.name || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="plantCode"
            label="Plant Code"
            placeholder="Plant Code"
            value={formData?.plantCode || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  // *********************Edit ****************************

  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      APPROVED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      REJECTED: 0,
      DROPPED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });
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
      row.ClientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Client Name", accessor: "ClientName" },
    { header: "Email Address", accessor: "EmailAddress" },
    { header: "Contact Number", accessor: "phone" },
    { header: "Address", accessor: "Address" },
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
      sno: index + 1,
      ClientName: item["Client Name"] || "",
      EmailAddress: item["Email Address"] || "",
      phone: item["Contact Number"] || "",
      Address: item["Address"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newInstrument) => {
    const currentDate = new Date().toISOString().split("T")[0];

    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === newInstrument.sno ? newInstrument : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          ClientName: newInstrument.ClientName,
          alternateName: newInstrument.alternateName,
          EmailAddress: newInstrument.EmailAddress,
          phone: newInstrument.phone,
          Address: newInstrument.Address,
          contactPerson: newInstrument.contactPerson,
          contactPersonNumber: newInstrument.contactPersonNumber,
          taxNumber: newInstrument.taxNumber,
          fax: newInstrument.fax,
          website: newInstrument.website,
          AddedOn: currentDate,
          name: newInstrument.name,
          plantCode: newInstrument.plantCode,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  //

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
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>

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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Clients" color="blue" onClick={openModal} />
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
      <ClientsModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
        {isModalsOpen && (
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
       {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />)}
    </div>
  );
};
export default Clients;
