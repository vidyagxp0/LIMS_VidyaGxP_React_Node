// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//         size="xl"
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>
//             Add information and register new Acknowledge Sample
//           </CModalTitle>
//         </CModalHeader>
//         <p style={{ marginLeft: "20px" }}>
//           Add information and register new Batch Sample
//         </p>

//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Batch Sample

//                 "
//                 placeholder="Select..."
//                 className="custom-placeholder"
//               />
//             </div>
//             <h5 style={{ fontWeight: "700" }} className="mb-4">
//               EM Monitoring Details(Sampling Schedule ,Batch Sample)
//             </h5>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Date of Monitoring

// +
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Monitored / Sampled By

//                "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Activity Type

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="time"
//                 label="Exposure Start Time

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Product Name

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Report No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div></div>

//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Membrane Holder Sterilized On

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Gelatine Membrane Lot> No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Use Before

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <h5 style={{ fontWeight: "bolder" }}>EM Monitoring Details</h5>
//             <div className="mb-3">
//               <CFormInput
//                 type="time"
//                 label="Exposure End Time

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Monitoring Comments

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Batch> No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Charge No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Membrane Holder ID
//                ."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Sterilized On
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Media Usage
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>

//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
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
    BatchSample: "Plant Configuration",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    BatchSample: "Plant Configuration",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    BatchSample: "Plant Configuration",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    BatchSample: "Plant Configuration",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    BatchSample: "Plant Configuration",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    BatchSample: "Plant Configuration",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    BatchSample: "Plant Configuration",
    status: "Active",
  },
];

const AcknowledgeSample = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
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
      row.BatchSample.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Batch Sample", accessor: "BatchSample" },
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
      <h1 className="text-2xl font-bold mb-4">Acknowledge Sample</h1>

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
        <div className="float-right">
          <ATMButton
            text="Acknowledge Sample"
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
    </div>
  );
};
export default AcknowledgeSample;
