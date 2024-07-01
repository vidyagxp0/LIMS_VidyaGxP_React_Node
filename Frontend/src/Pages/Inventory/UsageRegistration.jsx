// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Reference Standard Lot Usage</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>
//             Add information and add new standard usage registration..
//           </p>
//           <CFormInput
//             type="text"
//             label="Ref. Std. Lot. No.
//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Reference Standard Name
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Reference Standard Code
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="date"
//             label="Delivery Receipt Date
// "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Delivery Receipt Number

//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="date"
//             label="Recieved On

//             "
//             placeholder=""
//           />

//           <CFormSelect
//             type="date"
//             label="Valid Upto
// "
//             placeholder=""
//           />

//           <h6>Collection Type</h6>
//           <div style={{ marginBottom: "10px" }}>
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionYes"
//               value="yes"
//               label="Manual"
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionNo"
//               value="no"
//               label="Auto Binding"
//             />
//           </div>

//           <CFormSelect
//             type="text"
//             label="Quantity Used Now
// "
//             placeholder=""
//           />

//           <CFormInput
//             type="date"
//             label="Used On
//             "
//             name="batchNumber"
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             name="receiptNumber"
//             label="Used By
//             "
//             placeholder=""
//           />

//           <h6>Usage For</h6>
//           <div style={{ marginBottom: "10px" }}>
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionYes"
//               value="yes"
//               label="Sample Analysis
//               "
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionNo"
//               value="no"
//               label="Instrument Calibration
//               "
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionMiscellaneous"
//               value="Miscellaneous"
//               label="Miscellaneous
//               "
//             />
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           ></div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Standard Lot Usage
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
    StandardLotNo: "code1",
    CollectionType: "application1",
    UsedFor: "brand1",
    Quantityusednow: "material1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    StandardLotNo: "code2",
    CollectionType: "application2",
    UsedFor: "brand2",
    Quantityusednow: "material2",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 3,
    StandardLotNo: "code3",
    CollectionType: "application3",
    UsedFor: "brand3",
    Quantityusednow: "material3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    StandardLotNo: "code4",
    CollectionType: "application4",
    UsedFor: "brand4",
    Quantityusednow: "material4",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 5,
    StandardLotNo: "code5",
    CollectionType: "application5",
    UsedFor: "brand5",
    Quantityusednow: "material5",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 6,
    StandardLotNo: "code6",
    CollectionType: "application6",
    UsedFor: "brand6",
    Quantityusednow: "material6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    StandardLotNo: "code7",
    CollectionType: "application7",
    UsedFor: "brand7",
    Quantityusednow: "material7",
    status: "REINITIATED",
  },
];

const UsageRegistration = () => {
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
      row.StandardLotNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Standard Lot No.", accessor: "StandardLotNo" },
    { header: "Collection Type", accessor: "CollectionType" },
    { header: "Used For", accessor: "UsedFor" },
    { header: "Quantity used now", accessor: "Quantityusednow" },
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
      <h1 className="text-2xl font-bold mb-4">
        Reference Standard Usage Registration
      </h1>
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
          <ATMButton
            text="Add Usage Registration"
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

export default UsageRegistration;
