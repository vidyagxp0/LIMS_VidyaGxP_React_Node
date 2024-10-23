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

import ImportModal from "../Modals/importModal";
import {
  CButton,
  CCol,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import ReactQuill from "react-quill";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import ReusableModal from "../Modals/ResusableModal.jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config.json";

const Registration = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    calibrated: 0,
    nonCalibrated: 0,
  });
  const [lastStatus, setLastStatus] = useState("INITIATED");

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/iMRegistration`
      );
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.iMRegistration?.map((condition) => ({
              checkbox: false,
              sno: condition.uniqueId,
              Category: condition.Category || "-",
              InstrumentId: condition.InstrumentId || "",
              Instrument: condition.Instrument || "",
              Made: condition.Made || "-",
              Model: condition.Model || "-",
              MenuNo: condition.MenuNo || "-",
              InstalledAt: condition.InstalledAt || "-",
              calibrationDate: condition.calibrationDate || "-",
              calibrationDueOn: condition.calibrationDueOn || "-",
              calibrationStatus: condition.calibrationStatus || "calibrated",
              ExpiryOn: condition.ExpiryOn || "-",
              status: condition.status || "Active",
            })) || []
        );
        setData(formattedData);
      }
    } catch (error) {
      toast.error(
        "Error fetching data: " + (error.response?.data || error.message)
      );
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    // setEditModalOpen(true);
  };

  const closeEditModal = () => {
    // setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/iMRegistration/${updatedData.sno}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("Product updated successfully.");
        fetchProductData();
        setEditModalData(null);
        closeModal();
      } else {
        toast.error("Failed to update Product.");
      }
    } catch (error) {
      toast.error(
        "Error updating Product: " + (error.response?.data || error.message)
      );
    }
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
            className="mb-3"
            type="text"
            label="Calibration Date"
            placeholder="Calibration Date"
            name="calibrationDate"
            value={formData?.calibrationDate || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Calibration Due On"
            placeholder="Calibration Due On"
            name="calibrationDueOn"
            value={formData?.calibrationDueOn || ""}
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
      calibrated: 0,
      nonCalibrated: 0,
    };

    data.forEach((item) => {
      if (item.calibrationStatus === "calibrated") counts.calibrated++;
      else if (item.calibrationStatus === "nonCalibrated")
        counts.nonCalibrated++;
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
  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        console.log("Row:", row);
        const Category = row.Category || "";
        return (
          Category.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
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
    { header: "Menu No.", accessor: "MenuNo" },
    { header: "Installed At", accessor: "InstalledAt" },
    { header: "Expiry On", accessor: "ExpiryOn" },
    { header: "Status", accessor: "status" },
    { header: "Calibration Date", accessor: "calibrationDate" },
    { header: "Calibration Due On", accessor: "calibrationDueOn" },
    {
      header: "Calibration Status",
      accessor: "calibrationStatus",
      Cell: ({ value }) => (
        <span
          style={{
            backgroundColor: value === "calibrated" ? "green" : "orange",
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

  const fields = [
    { label: "Category", key: "Category" },
    { label: "InstrumentId", key: "InstrumentId" },
    { label: "Instrument", key: "Instrument" },
    { label: "Made", key: "Made" },
    { label: "Model", key: "Model" },
    { label: "MenuNo", key: "MenuNo" },
    { label: "InstalledAt", key: "InstalledAt" },
    { label: "calibrationDueOn", key: "calibrationDueOn" },
    { label: "calibrationStatus", key: "calibrationStatus" },
    { label: "calibrationDate", key: "calibrationDate" },
    { label: "ExpiryOn", key: "ExpiryOn" },
    { label: "status", key: "status" },
  ];

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      Category: item["Category"] || "",
      InstrumentId: item["Instrument Id"] || "",
      Instrument: item["Instrument"] || "",
      Made: item["Made"] || "",
      Model: item["Model"] || "",
      MenuNo: item["Manu No."] || "",
      InstalledAt: item["Installed At"] || "",
      calibrationStatus: item["Calibration Status"] || "",
      calibrationDueOn: item["Calibration Due Date"] || "",
      calibrationDate: item["Calibration Date"] || "",
      ExpiryOn: item["Expiry On"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };
  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newInstrument) => {
    // Update data state
    const updatedData = [
      ...data,
      {
        checkbox: false,
        sno: data.length + 1,
        Category: newInstrument.Category,
        InstrumentId: newInstrument.InstrumentId,
        Instrument: newInstrument.Instrument,
        Made: newInstrument.Made,
        Model: newInstrument.Model,
        MenuNo: newInstrument.manufacturerSerialNo,
        InstalledAt: newInstrument.InstalledAt,
        calibrationStatus: newInstrument.calibrationStatus,
        calibrationDueOn: newInstrument.calibrationDueOn,
        calibrationDate: newInstrument.calibrationDate,
        ExpiryOn: newInstrument.ExpiryOn,
        status: "INITIATED",
      },
    ];

    setData(updatedData);
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

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/iMRegistration/${item.sno}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((d) => d.sno !== item.sno));
        toast.success("Registration deleted successfully.");
        fetchProductData();
      } else {
        toast.error("Failed to delete Registration.");
      }
    } catch (error) {
      toast.error(
        "Error deleting Registration: " +
          (error.response?.data || error.message)
      );
    }
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
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Instrument Registration</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
            {/* <Dropdown
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
            /> */}
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Calibrated", label: "Calibrated" },
                { value: "Non Calibrated", label: "Non Calibrated" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              className={`${
                statusFilter === "calibrated"
                  ? "bg-green-500"
                  : statusFilter === "nonCalibrated"
                  ? "bg-orange-500"
                  : "bg-white"
              } text-white p-2 rounded`}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Instrument_Master.pdf"
              title="Instrument Master Data"
            />
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
          fetchProductData={fetchProductData}
        />

        {isModalsOpen && (
          <ImportModal
            initialData={initialData}
            isOpen={isModalsOpen}
            onClose={handleCloseModals}
            columns={columns}
            onDataUpload={handleExcelDataUpload}
            
          />
        )}
        {viewModalData && (
          <ReusableModal
            visible={isViewModalOpen}
            closeModal={closeViewModal}
            data={viewModalData}
            fields={fields}
            title="InstrumentMasterReg."
            updateStatus={handleStatusUpdate}
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
    </>
  );
};

export default Registration;
