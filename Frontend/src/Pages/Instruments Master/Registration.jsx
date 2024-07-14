/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import InstrumentMasterModal from "../Modals/InstrumentMasterModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CCol,
  CContainer,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import ReactQuill from "react-quill";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Category: "Product 1",
    InstrumentId: "Seq 1",
    Instrument: "Info 1",
    Made: "Start 1",
    Model: "Model 1",
    ManuNo: "Manu 1",
    InstalledAt: "Location 1",
    ExpiryOn: "2024-12-31",
    status: "DROPPED",
    CalibrationStatus: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    Category: "Product 2",
    InstrumentId: "Seq 2",
    Instrument: "Info 2",
    Made: "Start 2",
    Model: "Model 2",
    ManuNo: "Manu 2",
    InstalledAt: "Location 2",
    ExpiryOn: "2025-01-15",
    status: "INITIATED",
    CalibrationStatus: "Inactive",
  },
];

const Registration = () => {
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
    Active: 0,
    Inactive: 0,
  });
  const [lastStatus, setLastStatus] = useState("INITIATED");
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
    const [fields, setFields] = useState([]);
    const addFields = () => {
      setFields([...fields, { id: Date.now(), value1: "", value2: "" }]);
    };

    const handleFieldChange = (id, value1, value2) => {
      setFields(
        fields.map((field) =>
          field.id === id ? { ...field, value1, value2 } : field
        )
      );
    };
    const removeField = (id) => {
      setFields(fields.filter((field) => field.id !== id));
    };

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
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Edit Instrument Details</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-3"
            label="Instrument Category"
            value={formData?.Category || ""}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="chromatography">chromatography</option>
            <option value="weighing balance">weighing balance</option>
          </CFormSelect>
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Category Description"
            placeholder="chroma"
            name="instrumentCategoryDescription"
            value={formData?.instrumentCategoryDescription || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument"
            placeholder="Instrument"
            name="Instrument"
            value={formData?.Instrument || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument ID"
            placeholder="Instrument ID"
            name="InstrumentId"
            value={formData?.InstrumentId || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make"
            placeholder="Make"
            name="Made"
            value={formData?.Made || ""}
            onChange={handleChange}
          />
          <CRow className="d-flex align-items-center justify-content-center">
            <CCol sm={8}>
              <CFormInput
                className="mb-3"
                type="text"
                label="Model"
                placeholder="Model"
                name="Model"
                value={formData?.Model || ""}
                onChange={handleChange}
              />
            </CCol>
            <CCol sm={4}>
              <CButton
                className="bg-info text-white mt-4 mb-3"
                onClick={addFields}
              >
                Add Fields
              </CButton>
            </CCol>
          </CRow>
          {fields.map((field) => (
            <CRow key={field.id} className="align-items-center mb-3">
              <CCol>
                <CFormInput
                  type="text"
                  label="Field"
                  placeholder="Field Name"
                  value={field.value1}
                  onChange={(e) =>
                    handleFieldChange(field.id, e.target.value, field.value2)
                  }
                />
              </CCol>
              <CCol>
                <CFormInput
                  type="text"
                  label="Value"
                  placeholder="Field"
                  value={field.value2}
                  onChange={(e) =>
                    handleFieldChange(field.id, field.value1, e.target.value)
                  }
                />
              </CCol>
              <CCol xs="auto">
                <CButton color="danger" onClick={() => removeField(field.id)}>
                  <FaTrash />
                </CButton>
              </CCol>
            </CRow>
          ))}
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer's Serial No."
            placeholder="Manufacturer's Serial No."
            name="manufacturerSerialNo"
            value={formData?.manufacturerSerialNo || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Capacity Size"
            placeholder="Capacity Size"
            name="capacitySize"
            value={formData?.capacitySize || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Equip No."
            placeholder="Equip No."
            name="equipNo"
            value={formData?.equipNo || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Installed At"
            placeholder="Installed At"
            name="InstalledAt"
            value={formData?.InstalledAt || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            label="Installed On"
            placeholder=" "
            name="installedOn"
            value={formData?.installedOn || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            placeholder=" "
            name="warrantyExpiresOn"
            value={formData?.warrantyExpiresOn || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            placeholder="Supplied By"
            name="suppliedBy"
            value={formData?.suppliedBy || ""}
            onChange={handleChange}
          />
          <label className="mb-3">Contains module?</label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="ContainsModuleYes"
            name="containsModule"
            label="Yes"
            value="Yes"
            checked={formData?.containsModule === "Yes"}
            onChange={handleChange}
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="ContainsModuleNo"
            name="containsModule"
            label="No"
            value="No"
            checked={formData?.containsModule === "No"}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            placeholder="SOP Number"
            name="sopNo"
            value={formData?.sopNo || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Software"
            placeholder="Software"
            name="software"
            value={formData?.software || ""}
            onChange={handleChange}
          />
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              value={formData?.description || ""}
              onChange={(content) => handleChange("description", content)}
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton className="bg-info text-white" onClick={handleSave}>
            Save Changes
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
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.CalibrationStatus === "Active") counts.Active++;
      else if (item.CalibrationStatus === "Inactive") counts.Inactive++;
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
      row.Category.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Category", accessor: "Category" },
    { header: "Instrument Id", accessor: "InstrumentId" },
    { header: "Instrument", accessor: "Instrument" },
    { header: "Made", accessor: "Made" },
    { header: "Model", accessor: "Model" },
    { header: "Manu No.", accessor: "ManuNo" },
    { header: "Installed At", accessor: "InstalledAt" },
    { header: "Expiry On", accessor: "ExpiryOn" },
    { header: "Status", accessor: "status" },
    {
      header: "Calibration Status",
      accessor: "CalibrationStatus",
      Cell: ({ value }) => (
        <span
          style={{
            backgroundColor: value === "Active" ? "green" : "red",
            color: "white",
            padding: "0.25em 0.5em",
            borderRadius: "4px",
          }}
        >
          {value}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          {/* View icon */}
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          {/* Edit icon */}
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row.original)}
          />
          {/* Delete icon */}
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            // eslint-disable-next-line no-undef
            onClick={() => onDelete(row)}
          />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      Category: item["Category"] || "",
      InstrumentId: item["Instrument Id"] || "",
      Instrument: item["Instrument"] || "",
      Made: item["Made"] || "",
      Model: item["Model"] || "",
      ManuNo: item["Manu No."] || "",
      InstalledAt: item["Installed At"] || "",
      ExpiryOn: item["Expiry On"] || "",
      status: item["Status"] || "",
      CalibrationStatus: item["Calibration Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };
  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newInstrument) => {
    setData((prevData) => [
      ...prevData,
      {
        checkbox: false,
        sno: prevData.length + 1,
        Category: newInstrument.Category,
        InstrumentId: newInstrument.InstrumentId,
        Instrument: newInstrument.Instrument,
        Made: newInstrument.Made,
        Model: newInstrument.Model,
        ManuNo: newInstrument.manufacturerSerialNo,
        InstalledAt: newInstrument.InstalledAt,
        ExpiryOn: newInstrument.warrantyExpiresOn,
        status: "INITIATED",
        CalibrationStatus: "Active",
      },
    ]);
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Instrument Registration</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
          <ATMButton
            text="Instrument Registration"
            color="blue"
            onClick={openModal}
          />
        </div>
      </div>
      <Table
        columns={columns}
        data={data}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <InstrumentMasterModal
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
        <ImportModal
          initialData={initialData}
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

export default Registration;
