// const StatusModal = (props) => {
//   return (
//     <>
//       <CModal
//         size="lg"
//         alignment=""
//         visible={props.visible}
//         onClose={props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>New Application</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>New Application</p>

//           <CFormInput
//             type="text"
//             label="Name"
//             placeholder="Name"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Prefix"
//             placeholder="Prefix"
//             className="custom-placeholder"
//           />

//           <table className="table table-bordered" style={{ marginTop: "5px" }}>
//             <thead>
//               <tr>
//                 <th>
//                   Selected Standard Fields Displayed At Columns Qualification
//                   And Usage
//                 </th>
//                 <th>Qualification</th>
//                 <th>Usage</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Column Pressure</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Flow Rate (Mobile Phase/Carrier Gas)</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>PH of Mobile Phase</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Wave Length</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Injector</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Detector Type</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Injector Volume</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Mobile Phase / Carrier Gas</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Hydrogen Low Rate</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Air Flow Rate</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Column Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Injector Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>No. Of Injection</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Split Ratio</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Mode</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Concentration</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Pharmacopoeia</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Detector Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>A.R.No.</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Load</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Batch No.</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           >
//             <CButton color="primary" type="button">
//               Add Application
//             </CButton>
//           </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton color="primary" onClick={props.closeModal}>
//             Add Application
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
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
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
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
//           onClick={_props.handleDelete}
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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ColumnPressure: "code1",
    FlowRate: "code1",
    WaveLength: "material 1",
    Injector: "John Doe",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    ColumnPressure: "pressure2",
    FlowRate: "flow2",
    WaveLength: "wavelength2",
    Injector: "Jane Smith",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    ColumnPressure: "pressure3",
    FlowRate: "flow3",
    WaveLength: "wavelength3",
    Injector: "Alice Johnson",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    ColumnPressure: "pressure4",
    FlowRate: "flow4",
    WaveLength: "wavelength4",
    Injector: "Bob Brown",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    ColumnPressure: "pressure5",
    FlowRate: "flow5",
    WaveLength: "wavelength5",
    Injector: "Charlie Davis",
    status: "REJECTED",
  },
];

const ColumnApplication = () => {
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
      row.ColumnPressure.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Column Pressure	", accessor: "ColumnPressure" },
    { header: "Flow Rate	", accessor: "FlowRate" },
    { header: "Wave Length	", accessor: "WaveLength" },
    { header: "Injector", accessor: "Injector" },
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
      <h1 className="text-2xl font-bold mb-4">Chemical / Reagent Issue</h1>
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
        <div className="float-right">
          <ATMButton text="Add Application" color="blue" onClick={openModal} />
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
    </div>
  );
};

export default ColumnApplication;
