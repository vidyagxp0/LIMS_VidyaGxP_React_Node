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
import ServiceProviderModal from "../Modals/ServiceProviderModal.jsx";
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
    serviceProviderName: "SPH-001",
    uniqueCode: "Product A",
    city: "Purity Test",
    state: "PT-001",
    country: "M-001",
    zip: "123456",
    validUpto: "2024-12-31",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 2,
    serviceProviderName: "SPH-002",
    uniqueCode: "Product B",
    city: "Strength Test",
    state: "ST-002",
    country: "M-002",
    zip: "654321",
    validUpto: "2025-06-30",
    status: "INITIATED",
  },
];

const ServiceProvider = () => {
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
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Service Provider</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px", marginTop: "5px" }}>
          Add information and add new service provider
        </p>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder=" "
            name="serviceProviderName"
            value={formData?.serviceProviderName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Unique Code

            "
            name="uniqueCode"
            placeholder=" "
            className="custom-placeholder"
            value={formData?.uniqueCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Refrence Documents
            "
            placeholder="Product/Material"
            className="custom-placeholder"
            name="referenceDocuments"
            value={formData?.referenceDocuments || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            label="Valid Upto            "
            placeholder=" "
            className="custom-placeholder"
            name="validUpto"
            value={formData?.validUpto || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Service Type
            "
            placeholder=" "
            name="serviceType"
            className="custom-placeholder"
            value={formData?.serviceType || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Contact Person

            "
            placeholder=""
            name="contactPerson"
            className="custom-placeholder"
            value={formData?.contactPerson || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Address : Line 1

            "
            placeholder=""
            className="custom-placeholder"
            name="addressLine1"
            value={formData?.addressLine1 || ""}
            onChange={handleChange}
          />{" "}
          <CFormInput
            type="text"
            label="Address : Line 2

            "
            placeholder=""
            className="custom-placeholder"
            name="addressLine2"
            value={formData?.addressLine2 || ""}
            onChange={handleChange}
          />{" "}
          <CFormInput
            type="text"
            label="Address : Line 3

            "
            placeholder=""
            className="custom-placeholder"
            name="addressLine3"
            value={formData?.addressLine3 || ""}
            onChange={handleChange}
          />{" "}
          <CFormInput
            type="text"
            label="City
            "
            placeholder=""
            className="custom-placeholder"
            name="city"
            value={formData?.city || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="State
            "
            placeholder=" "
            className="custom-placeholder"
            name="state"
            value={formData?.state || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text  "
            label="Country
            "
            placeholder=""
            className="custom-placeholder"
            name="country"
            value={formData?.country || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text  "
            label="ZIP / PIN

            "
            placeholder=""
            className="custom-placeholder"
            name="zip"
            value={formData?.zip || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text  "
            label="Phone
            "
            placeholder=""
            className="custom-placeholder"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text  "
            label="Fax
            "
            placeholder=""
            className="custom-placeholder"
            name="fax"
            value={formData?.fax || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text  "
            label="Email
            "
            placeholder=""
            className="custom-placeholder"
            name="email"
            value={formData?.email || ""}
            onChange={handleChange}
          />
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            style={{ background: "#0F93C3", color: "white" }}
            onClick={handleSave}
          >
            Submit
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
      row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      serviceProviderName: item["Service Provider Name"] || "",
      uniqueCode: item["Unique Code"] || "",
      city: item["city"] || "",
      state: item["state"] || "",
      country: item["country"] || "",
      zip: item["Pin Code"] || "",
      validUpto: item["Valid Upto"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Service Provider Name", accessor: "serviceProviderName" },
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "city", accessor: "city" },
    { header: "state", accessor: "state" },
    { header: "country", accessor: "country" },
    { header: "Pin Code", accessor: "zip" },
    { header: "Valid Upto", accessor: "validUpto" },
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

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newTechnique) => {
    const currentDate = new Date().toISOString().split("T")[0];

    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === newTechnique.sno ? newTechnique : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          serviceProviderName: newTechnique.serviceProviderName,
          uniqueCode: newTechnique.uniqueCode,
          referenceDocuments: newTechnique.referenceDocuments,
          validUpto: currentDate,
          serviceType: newTechnique.serviceType,
          contactPerson: newTechnique.contactPerson,
          addressLine1: newTechnique.addressLine1,
          addressLine2: newTechnique.addressLine2,
          addressLine3: newTechnique.addressLine3,
          city: newTechnique.city,
          state: newTechnique.state,
          country: newTechnique.country,
          zip: newTechnique.zip,
          phone: newTechnique.phone,
          fax: newTechnique.fax,
          email: newTechnique.email,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  //************************************************************************************************ */

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
      <h1 className="text-2xl font-bold mb-4">Service Provider</h1>
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
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "    DROPPED" },
              { value: "INITIATED", label: "  INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "   APPROVED" },
              { value: "REJECTED", label: "   REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton
            text="Add Service Provider"
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
        openEditModal={openEditModal}
        closeModal={closeModal}
      />
      <ServiceProviderModal
        visible={isModalOpen}
        handleSubmit={handleModalSubmit}
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
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={() => setIsViewModalOpen(false)}
          data={viewModalData}
        />
      )}
      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default ServiceProvider;
