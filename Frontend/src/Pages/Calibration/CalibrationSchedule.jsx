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
import CalibrationScheduleModal from "../Modals/CalibrationScheduleModal.jsx";
import ViewModal from "../Modals/ViewModal";
import { CCol } from "@coreui/react";
import { PiDownloadBold } from "react-icons/pi";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FormControl, FormLabel } from "react-bootstrap";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    uniqueCode: "Product 1",
    calibrationWorkflow: "Seq 1",
    scheduleDescription: "Info 1",
    startDate: "2024-06-01",
    frequency: "Monthly",
    nextCalibrationDue: "2024-07-01",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    uniqueCode: "Product 2",
    calibrationWorkflow: "Seq 2",
    scheduleDescription: "Info 2",
    startDate: "2024-06-02",
    frequency: "Quarterly",
    nextCalibrationDue: "2024-09-01",
    status: "INITIATED",
  },
 
];

const CalibrationSchedule = () => {
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
  const [editModalData, setEditModalData] = useState(null); 
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

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "CalibrationWorkflow", accessor: "calibrationWorkflow" },
    { header: "Schedule Description", accessor: "scheduleDescription" },
    { header: "Start Date	", accessor: "startDate" },
    { header: "Frequency", accessor: "frequency" },
    { header: "Next Calibration Due", accessor: "nextCalibrationDue" },
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
      uniqueCode: item["Unique Code"] || "",
      calibrationWorkflow: item["CalibrationWorkflow"] || "",
      scheduleDescription: item["Schedule Description"] || "",
      startDate: item["Start Date"] || "",
      frequency: item["Frequency"] || "",
      nextCalibrationDue: item["Next Calibration Due"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data// Close the import modal after data upload
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
          uniqueCode: "000",
          calibrationWorkflow: newInstrument.calibrationWorkFlow,
          scheduleDescription:newInstrument.scheduleDescription,
          startDate: newInstrument.startDate,
          frequency: newInstrument.frequency,
          nextCalibrationDue: "next",
          status: "Active",
        },
      ]);
    }
    closeModal();
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

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleSave = () => {
      onSave(formData);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle className="font-bold">
            Add Calibration Schedule
          </CModalTitle>
        </CModalHeader>
  
        <CModalBody>
          <CFormSelect
            className="mb-3"
            label="Instrument Category"
            options={[
              { label: "Select Instrument Category", value: "" },
              { label: "chromatography", value: "chromatography" },
              { label: "weighing balance", value: "weighing-balance" },
            ]}
            value={formData?.instrumentCategory||""}
            onChange={ handleChange}
            name="instrumentCategory"
          />
          <CFormSelect
            className="mb-3"
            label="Calibration Type"
            options={[
              { label: "Select Calibration Type", value: "" },
              { label: "yearly", value: "yearly" },
              { label: "monthly", value: "monthly" },
              { label: "daily", value: "daily" },
            ]}
            value={formData?.calibrationType||""}
            onChange={ handleChange}
            name="calibrationType"
          />
          <CFormSelect
            className="mb-3"
            label="Instrument (Instrument ID)"
            options={["Select Instrument ID"]}
            value={formData?.instrumentId||""}
            onChange={ handleChange}
            name="instrumentId"
          />
          <CFormSelect
            className="mb-3"
            label="Module (Module ID)"
            options={["Select Module ID"]}
            value={formData?.moduleId||""}
            onChange={ handleChange}
            name="moduleId"
          />
  
          <FormLabel className="mt-3">
            Calibration Work Flow
          </FormLabel>
          <div className="d-flex gap-4 mb-3">
            <div>
            <input
              type="radio"
              id="calibrationDataSheet"
              name="calibrationWorkFlow"
              value="calibrationDataSheet"
              checked={formData?.calibrationWorkFlow === "calibrationDataSheet"||""}
              onChange={ handleChange}
             
            />
              <label htmlFor="calibrationDataSheet" className="ms-2">
                Calibration Data Sheet
              </label>
            </div>
            <div>
            <input
              type="radio"
              id="sampleLoginTemplate"
              name="calibrationWorkFlow"
              value="sampleLoginTemplate"
              checked={formData?.calibrationWorkFlow === "sampleLoginTemplate"||""}
              onChange={ handleChange}
            />
              <label htmlFor="sampleLoginTemplate" className="ms-2">
                Sample Login Template
              </label>
            </div>
          </div>
  
          <CFormSelect
            className="mb-3"
            label="Calibration Datasheet"
            options={[
              { label: "Select Calibration Datasheet", value: "" },
              { label: "Cal data sheet", value: "cal-data-sheet" },
              { label: "Data sheet1", value: "data-sheet1" },
            ]}
            value={formData?.calibrationDataSheet||""}
            onChange={ handleChange}
            name="calibrationDataSheet"
          />
  
          <div className="mb-3">
            <label htmlFor="scheduleDescription" className="form-label">
              Schedule Description
            </label>
            <CFormInput
              id="scheduleDescription"
              type="text"
              placeholder="Schedule Description"
              value={formData?.scheduleDescription||""}
              onChange={ handleChange}
              name="scheduleDescription"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <CFormInput id="startDate" type="date" placeholder="" 
            value={formData?.startDate||""}
            onChange={ handleChange}
            name="startDate"
            />
          </div>
  
          <CFormSelect
            className="mb-3"
            label="Frequency"
            options={[
              { label: "Select Frequency", value: "" },
              { label: "Daily", value: "daily" },
              { label: "Weekly", value: "weekly" },
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly" },
            ]}
            value={formData?.frequency||""}
            onChange={ handleChange}
            name="frequency"
          />
  
          <div className="mb-3">
            <label htmlFor="tolerancePeriod" className="form-label">
              Tolerance Period
            </label>
            <CFormInput
              id="tolerancePeriod"
              type="text"
              placeholder="Tolerance Period"
              value={formData?.tolerancePeriod||""}
              onChange={ handleChange}
              name="tolerancePeriod"
            />
            <span className="ms-2">Day(s)</span>
          </div>
  
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleSave}>Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calibration Schedule</h1>

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
        <CCol sm={1}></CCol>
        <div className="float-right flex gap-4">
          <div
            style={{
              border: "1px solid #f98d6b",
              padding: "7px",
              width: "38px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f98d6b",
              borderRadius: "5px",
            }}
          >
            <PiDownloadBold />
          </div>
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Calibration Schedule"
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
      />
      <CalibrationScheduleModal 
      visible={isModalOpen}
       closeModal={closeModal}
        handleSubmit={handleModalSubmit} />


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
       {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default CalibrationSchedule;
