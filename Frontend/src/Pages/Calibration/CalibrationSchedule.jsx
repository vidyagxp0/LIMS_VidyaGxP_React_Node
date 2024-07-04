// const StatusModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//     >
//       <CModalHeader>
//         <CModalTitle> Add Calibration Schedule</CModalTitle>
//       </CModalHeader>

//       <CModalBody>
//         <CFormSelect
//           className="mb-3"
//           label="Instrument Category"
//           options={[
//             "Select Intrument Category",
//             { label: "chromathograpy", value: "chromathograpy" },
//             { label: "weighing balance", value: "weighing-balance" },
//           ]}
//         />
//         <CFormSelect
//           className="mb-3"
//           label="Calibration Type"
//           options={[
//             "Select Calibration Type",
//             { label: "yearly", value: "yearly" },
//             { label: "monthly", value: "monthly" },
//             { label: "daily", value: "daily" },
//           ]}
//         />
//         <CFormSelect
//           className="mb-3"
//           label="Calibration Type"
//           options={[
//             "Select Calibration Type",
//             { label: "yearly", value: "yearly" },
//             { label: "monthly", value: "monthly" },
//             { label: "daily", value: "daily" },
//           ]}
//         />
//         <CFormSelect
//           className="mb-3"
//           label="Instrument (Instrument ID)"
//           options={["Select Instrument ID"]}
//         />
//         <CFormSelect
//           className="mb-3"
//           label="Module (Module ID)"
//           options={["Select Module ID"]}
//         />

//         <FormControl style={{ margin: "20px" }}>
//           <FormLabel id="demo-row-radio-buttons-group-label">
//             Calibration Work Flow
//           </FormLabel>
//           <RadioGroup
//             row
//             aria-labelledby="demo-row-radio-buttons-group-label"
//             name="row-radio-buttons-group"
//           >
//             <FormControlLabel
//               value="Calibration Data Sheet"
//               control={<Radio />}
//               label="Calibration Data Sheet"
//             />
//             <FormControlLabel
//               value="Sample Login Template"
//               control={<Radio />}
//               label="Sample Login Template"
//             />
//           </RadioGroup>
//         </FormControl>

//         <CFormSelect
//           className="mb-3"
//           label="Calibration Datasheet"
//           options={[
//             "Select",
//             { label: "CAl data sheet", value: "cal-data-sheet" },
//             { label: "Data sheet1", value: "data-sheet1" },
//           ]}
//         />

//         <CFormInput
//           label="Schedule Description"
//           className="mb-3"
//           type="text"
//           placeholder="Schedule Description"
//         />

//         <CFormInput
//           label="Start Date"
//           className="mb-3"
//           type="date"
//           placeholder=""
//         />

//         <CFormSelect
//           className="mb-3"
//           label="Frequency"
//           options={[
//             "Period",
//             { label: "Daily", value: "daily" },
//             { label: "Weekly", value: "weekly" },
//             { label: "Monthly", value: "monthly" },
//             { label: "Yearly", value: "yearly" },
//           ]}
//         />

//         <CFormInput
//           label="Tolerance Period"
//           className="mb-3"
//           type="text"
//           placeholder="Tolerance Period"
//         />

//         <span>Day(s)</span>

//         <div className="d-flex gap-3 mt-4">
//           <CButton color="light w-50" onClick={_props.closeModal}>
//             &lt; Back
//           </CButton>
//           <CButton color="primary w-50">Submit</CButton>
//         </div>
//       </CModalBody>
//     </CModal>
//   );
// };

// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle>Delete User</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <p>Are you sure you want to delete this Calibration schedule?</p>
//       </CModalBody>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.confirmDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };
//           <CCol sm={1}>
//             <div
//               style={{
//                 border: "1px solid #f98d6b",
//                 padding: "7px",
//                 width: "38px",
//                 display: "flex",
//                 justifyContent: "center",
//                 backgroundColor: "#f98d6b",
//                 borderRadius: "5px",
//               }}
//             >
//               <PiDownloadBold />
//             </div>
//           </CCol>

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
import { CCol } from "@coreui/react";
import { PiDownloadBold } from "react-icons/pi";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    UniqueCode: "Product 1",
    CalibrationWorkflow: "Seq 1",
    ScheduleDescription: "Info 1",
    StartDate: "2024-06-01",
    Frequency: "Monthly",
    NextCalibrationDue: "2024-07-01",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    UniqueCode: "Product 2",
    CalibrationWorkflow: "Seq 2",
    ScheduleDescription: "Info 2",
    StartDate: "2024-06-02",
    Frequency: "Quarterly",
    NextCalibrationDue: "2024-09-01",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    UniqueCode: "Product 3",
    CalibrationWorkflow: "Seq 3",
    ScheduleDescription: "Info 3",
    StartDate: "2024-06-03",
    Frequency: "Yearly",
    NextCalibrationDue: "2025-06-01",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    UniqueCode: "Product 4",
    CalibrationWorkflow: "Seq 4",
    ScheduleDescription: "Info 4",
    StartDate: "2024-06-04",
    Frequency: "Monthly",
    NextCalibrationDue: "2024-07-01",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    UniqueCode: "Product 5",
    CalibrationWorkflow: "Seq 5",
    ScheduleDescription: "Info 5",
    StartDate: "2024-06-05",
    Frequency: "Quarterly",
    NextCalibrationDue: "2024-09-01",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    UniqueCode: "Product 6",
    CalibrationWorkflow: "Seq 6",
    ScheduleDescription: "Info 6",
    StartDate: "2024-06-06",
    Frequency: "Yearly",
    NextCalibrationDue: "2025-06-01",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    UniqueCode: "Product 7",
    CalibrationWorkflow: "Seq 7",
    ScheduleDescription: "Info 7",
    StartDate: "2024-06-07",
    Frequency: "Monthly",
    NextCalibrationDue: "2024-07-01",
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
      row.UniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "CalibrationWorkflow", accessor: "CalibrationWorkflow" },
    { header: "Schedule Description", accessor: "ScheduleDescription" },
    { header: "Start Date	", accessor: "StartDate" },
    { header: "Frequency", accessor: "Frequency" },
    { header: "Next Calibration Due", accessor: "NextCalibrationDue" },
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
      sno: initialData.length + index + 1,
      UniqueCode: item["Unique Code"] || "",
      CalibrationWorkflow: item["CalibrationWorkflow"] || "",
      ScheduleDescription: item["Schedule Description"] || "",
      StartDate: item["Start Date"] || "",
      Frequency: item["Frequency"] || "",
      NextCalibrationDue: item["Next Calibration Due"] || "",
      status: item["Status"] || "INITIATED",
    }));
  
    const concatenatedData = [...data, ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
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
        <CCol sm={1}>
       
      </CCol>
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
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
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

export default CalibrationSchedule;
