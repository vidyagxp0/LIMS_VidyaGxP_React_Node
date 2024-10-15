import { useState, useEffect } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";
import { toast } from "react-toastify";

const fields = [
  { label: "Calibration Id", key: "CalibrationId" },
  { label: "Instrument Id", key: "InstrumentId" },
  {
    label: "Module Id",
    key: "ModuleModuleId",
  },
  {
    label: "Calibration Type",
    key: "CalibrationType",
  },
  {
    label: "Schedule Date",
    key: "ScheduleDate",
  },
  {
    label: "Next Due Date",
    key: "NextDueDate",
  },
  {
    label: "Tolerance Days",
    key: "ToleranceDays",
  },
  { label: "Status", key: "status" },
];

function CalibrationRecord() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fetchCalibrationrecord = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/cCalibrationRecord`
      );
      console.log(response);
      const formattedData = response.data[0]?.cCalibrationRecord || []; // Adjust this based on your API response structure

      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching calibration record:", error);
      toast.error("Failed to fetch calibration record");
    }
  };

  useEffect(() => {
    fetchCalibrationrecord();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
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

  const handleDelete = async (item) => {
    try {
      // Make the API call to delete the item
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/cCalibrationRecord/${item.uniqueId}`
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId); // Filter out the deleted item
        setData(newData);
        toast.success("Calibration Record deleted successfully");
        console.log("Deleted item:", item);
      }
      fetchCalibrationrecord();
    } catch (error) {
      console.error("Error deleting calibration Record:", error);
      toast.error("Failed to delete calibration Record");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
    },
    {
      header: "SrNo.",
      accessor: "sno",
    },

    { header: "Calibration Id", accessor: "CalibrationId" },
    { header: "Instrument Id", accessor: "InstrumentId" },
    {
      header: "Module Id",
      accessor: "ModuleModuleId",
    },
    {
      header: "Calibration Type",
      accessor: "CalibrationType",
    },
    {
      header: "Schedule Date",
      accessor: "ScheduleDate",
    },
    {
      header: "Next Due Date",
      accessor: "NextDueDate",
    },
    {
      header: "Tolerance Days",
      accessor: "ToleranceDays",
    },
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
            onClick={() => openEditModal(row.original)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row.original)}
          />
        </>
      ),
    },
  ];

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        console.log("Row:", row); // Log each row to see its structure
        const productName = row.productName || "";
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      // If the modal is already open for the same item, close it
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      // Otherwise, open it with the new data
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      CalibrationId: item["Calibration Id"] || "",
      InstrumentId: item["Instrument Id"] || "",
      ModuleModuleId: item["Module Id"] || "",
      CalibrationType: item["Calibration Type"] || "",
      ScheduleDate: item["Schedule Date"] || "",
      NextDueDate: item["Next Due Date"] || "",
      ToleranceDays: item["Tolerence Days"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  const addNewRecord = async (newCondition) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/cCalibrationRecord`,
        {
          CalibrationId: newCondition.CalibrationId,
          InstrumentId: newCondition.InstrumentId,
          ModuleModuleId: newCondition.ModuleModuleId,
          CalibrationType: newCondition.CalibrationType,
          ScheduleDate: newCondition.ScheduleDate,
          NextDueDate: newCondition.NextDueDate,
          ToleranceDays: newCondition.ToleranceDays,
          status: newCondition.status || "Active",
        }
      );

      if (response.status === 200) {
        const addedCalibrationRecord = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...CalibrationRecord,
            sno: addedCalibrationRecord.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);
        closeModal();

        toast.success("Calibration Record successfully");
      }
    } catch (error) {
      console.error("Error adding calibration record:", error);
      toast.error("Failed to add calibration record");
    }

    useEffect(() => {
      fetchCalibrationrecord();
    }, []);

    setIsModalOpen(false);
  };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.CalibrationRecord === CalibrationRecord
        ? { ...item, status: newStatus }
        : item
    );
    setData(updatedData);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [CalibrationId, setCalibrationId] = useState("");
    const [InstrumentId, setInstrumentId] = useState("");
    const [ModuleModuleId, setModuleModuleId] = useState("");
    const [CalibrationType, setCalibrationType] = useState("");
    const [ScheduleDate, setScheduleDate] = useState("");
    const [NextDueDate, setNextDueDate] = useState("");
    const [ToleranceDays, setToleranceDays] = useState("");

    const handleAdd = () => {
      const newCondition = {
        CalibrationId,
        InstrumentId,
        ModuleModuleId,
        CalibrationType,
        ScheduleDate,
        NextDueDate,
        ToleranceDays,
        status: "active",
      };
      onAdd(newCondition);
    };
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Calibration Record</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Calibration Id"
            className="mb-3"
            type="text"
            name="CalibrationId"
            placeholder="Calibration Id"
            value={CalibrationId}
            onChange={(e) => setCalibrationId(e.target.value)}
          />
          <CFormInput
            label="Instrument Id"
            className="mb-3"
            type="text"
            name="InstrumentId"
            placeholder="Instrument Id"
            value={InstrumentId}
            onChange={(e) => setInstrumentId(e.target.value)}
          />
          <CFormInput
            label="Module Id"
            className="mb-3"
            type="text"
            name="ModuleModuleId"
            placeholder="Module Id"
            value={ModuleModuleId}
            onChange={(e) => setModuleModuleId(e.target.value)}
          />
          <CFormInput
            label="Calibration Type"
            className="mb-3"
            type="text"
            name="CalibrationType"
            placeholder="Calibration Type"
            value={CalibrationType}
            onChange={(e) => setCalibrationType(e.target.value)}
          />
          <CFormInput
            label="Schedule Date"
            className="mb-3"
            type="date"
            name="ScheduleDate"
            placeholder="Schedule Date"
            value={ScheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
          <CFormInput
            label="NextDue Date"
            className="mb-3"
            type="date"
            name="NextDueDate"
            placeholder="NextDue Date"
            value={NextDueDate}
            onChange={(e) => setNextDueDate(e.target.value)}
          />
          <CFormInput
            label="Tolerance Days"
            className="mb-3"
            type="text"
            name="ToleranceDays"
            placeholder="Tolerance Days"
            value={ToleranceDays}
            onChange={(e) => setToleranceDays(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add
          </CButton>
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
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/cCalibrationRecord/${updatedData.uniqueId}`, // Targeting the sno in the URL

        {
          CalibrationId: updatedData.CalibrationId,
          InstrumentId: updatedData.InstrumentId,
          ModuleModuleId: updatedData.ModuleModuleId,
          CalibrationType: updatedData.CalibrationType,
          ScheduleDate: updatedData.ScheduleDate,
          NextDueDate: updatedData.NextDueDate,
          ToleranceDays: updatedData.ToleranceDays,
        }
      );
      console.log(response);
      console.log("Update Response:", response.data);

      if (response.status === 200) {
        // If update is successful, update the state locally
        const newData = data.map(
          (item) => (item.sno === updatedData.sno ? updatedData : item) // Match by sno
        );
        setData(newData);
        setEditModalData(null); // Close the edit modal
      } else {
        console.error("Failed to update Calibration Record :", response.data);
      }
    } catch (error) {
      console.error("Error updating Calibration Record:", error);
    }
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
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
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Calibration Record</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Calibration Id"
            className="mb-3"
            type="text"
            name="CalibrationId"
            placeholder="Calibration Id"
            value={formData?.CalibrationId}
            onChange={handleChange}
          />
          <CFormInput
            label="Instrument Id"
            className="mb-3"
            type="text"
            name="InstrumentId"
            placeholder="Instrument Id"
            value={formData?.InstrumentId}
            onChange={handleChange}
          />
          <CFormInput
            label="Module Id"
            className="mb-3"
            type="text"
            name="ModuleModuleId"
            placeholder="Module Id"
            value={formData?.ModuleModuleId}
            onChange={handleChange}
          />
          <CFormInput
            label="Calibration Type"
            className="mb-3"
            type="text"
            name="CalibrationType"
            placeholder="Calibration Type"
            value={formData?.CalibrationType}
            onChange={handleChange}
          />
          <CFormInput
            label="Schedule Date"
            className="mb-3"
            type="date"
            name="ScheduleDate"
            placeholder="Schedule Date"
            value={formData?.ScheduleDate}
            onChange={handleChange}
          />
          <CFormInput
            label="NextDue Date"
            className="mb-3"
            type="date"
            name="NextDueDate"
            placeholder="NextDue Date"
            value={formData?.NextDueDate}
            onChange={handleChange}
          />
          <CFormInput
            label="Tolerance Days"
            className="mb-3"
            type="text"
            name="ToleranceDays"
            placeholder="Tolerance Days"
            value={formData?.ToleranceDays}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Calibration Record</h4>
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
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Calibration_record.pdf"
              title="Calibration Record Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Calibration Record"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        {filteredData && filteredData.length > 0 ? (
          <Table
            columns={columns}
            data={filteredData}
            onCheckboxChange={handleCheckboxChange}
            onViewDetails={onViewDetails}
            onDelete={handleDelete}
            openEditModal={openEditModal}
          />
        ) : (
          <p>No Calibration Record available.</p>
        )}
      </div>

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewRecord}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Test Plan Details"
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
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </>
  );
}

export default CalibrationRecord;
