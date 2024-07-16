
  // const StatusModal = (_props) => {
  //   return (
  //     <CModal
  //       alignment="center"
  //       visible={_props.visible}
  //       onClose={_props.closeModal}
  //     >
  //       <CModalHeader>
  //         <CModalTitle> Add Calibration Record</CModalTitle>
  //       </CModalHeader>
  //       <CModalBody>
  //         <CFormInput
  //           label="Calibration id"
  //           className="mb-3"
  //           type="text"
  //           placeholder=""
  //         />
  //         <CFormInput
  //           label="Instrument (Instrument ID)"
  //           className="mb-3"
  //           type="text"
  //           placeholder=""
  //         />
  //         <CFormInput
  //           label="Module (Module ID)"
  //           className="mb-3"
  //           type="text"
  //           placeholder=""
  //         />
  //         <CFormInput
  //           label="Calibration Record Template"
  //           className="mb-3"
  //           type="text"
  //           placeholder=""
  //         />

  //         <CFormInput className="mb-3" label="Certificates" type="file" />

  //         <CFormInput
  //           label="Calibration Type"
  //           className="mb-3"
  //           type="text"
  //           placeholder=""
  //         />
  //         <span>
  //           <input className="line4" type="checkbox" /> By Pass
  //         </span>

  //         <div className="d-flex gap-3 mt-4">
  //           <CButton color="light w-50" onClick={_props.closeModal}>
  //             &lt; Back
  //           </CButton>
  //           <CButton color="primary w-50">Evaluate</CButton>
  //         </div>
  //       </CModalBody>
  //     </CModal>
  //   );
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
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    CalibrationId: "Product 1",
    InstrumentId: "Seq 1",
    ModuleModuleId: "Info 1",
    CalibrationType: "Type 1",
    ScheduleDate: "2024-06-01",
    NextDueDate: "2024-07-01",
    ToleranceDays: "5",
    CalibrationStatus: "Active",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    CalibrationId: "Product 2",
    InstrumentId: "Seq 2",
    ModuleModuleId: "Info 2",
    CalibrationType: "Type 2",
    ScheduleDate: "2024-06-02",
    NextDueDate: "2024-07-02",
    ToleranceDays: "10",
    CalibrationStatus: "Inactive",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    CalibrationId: "Product 3",
    InstrumentId: "Seq 3",
    ModuleModuleId: "Info 3",
    CalibrationType: "Type 3",
    ScheduleDate: "2024-06-03",
    NextDueDate: "2024-07-03",
    ToleranceDays: "15",
    CalibrationStatus: "Active",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    CalibrationId: "Product 4",
    InstrumentId: "Seq 4",
    ModuleModuleId: "Info 4",
    CalibrationType: "Type 4",
    ScheduleDate: "2024-06-04",
    NextDueDate: "2024-07-04",
    ToleranceDays: "20",
    CalibrationStatus: "Inactive",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    CalibrationId: "Product 5",
    InstrumentId: "Seq 5",
    ModuleModuleId: "Info 5",
    CalibrationType: "Type 5",
    ScheduleDate: "2024-06-05",
    NextDueDate: "2024-07-05",
    ToleranceDays: "25",
    CalibrationStatus: "Active",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    CalibrationId: "Product 6",
    InstrumentId: "Seq 6",
    ModuleModuleId: "Info 6",
    CalibrationType: "Type 6",
    ScheduleDate: "2024-06-06",
    NextDueDate: "2024-07-06",
    ToleranceDays: "30",
    CalibrationStatus: "Inactive",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    CalibrationId: "Product 7",
    InstrumentId: "Seq 7",
    ModuleModuleId: "Info 7",
    CalibrationType: "Type 7",
    ScheduleDate: "2024-06-07",
    NextDueDate: "2024-07-07",
    ToleranceDays: "35",
    CalibrationStatus: "Active",
    status: "INITIATED",
  },
];



const CalibrationRecord = () => {
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
      row.InstrumentId.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Calibration Id", accessor: "CalibrationId" },
    { header: "Instrument Id", accessor: "InstrumentId" },
    { header: "(Module)Module Id", accessor: "ModuleModuleId" },
    { header: "CalibrationType", accessor: "CalibrationType" },
    { header: "Schedule Date", accessor: "ScheduleDate" },
    { header: "Next Due Date", accessor: "NextDueDate" },
    { header: "Tolerance (Day(s))", accessor: "ToleranceDay" },
    { header: "Calibration Status", accessor: "CalibrationStatus" },
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
      sno:  index + 1,
      CalibrationId: item["Calibration Id"] || "",
      InstrumentId: item["Instrument Id"] || "",
      ModuleModuleId: item["(Module)Module Id"] || "",
      CalibrationType: item["CalibrationType"] || "",
      ScheduleDate: item["Schedule Date"] || "",
      NextDueDate: item["Next Due Date"] || "",
      ToleranceDay: item["Tolerance (Day(s))"] || "",
      CalibrationStatus: item["Calibration Status"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data// Close the import modal after data upload
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
      <h1 className="text-2xl font-bold mb-4">Calibration Records</h1>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
        </div>
        <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
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
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};

export default CalibrationRecord;
