// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Media Lot Usage</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and add new Media Lot Usage</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Media Lot No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Media Name"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Batch No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Usage Type"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Container No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Mfg. Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Container Expiry Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Lot Expiry Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormLabel>Collection Type</CFormLabel>
//               <div>
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="acceptRadio"
//                   label="Manual"
//                   value="accept"
//                   className="me-3"
//                 />
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="rejectRadio"
//                   label="Auto Binding"
//                   value="reject"
//                 />
//               </div>
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Quantity Used"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Used On"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Used By"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Used For"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <h6>Comments if Any</h6>
//               <textarea className="form-control" rows="3"></textarea>
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
    MediaName: "Agar Plate 001",
    BatchNo: "100",
    UsageType: "General microbiological work",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "01-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MediaName: "Agar Plate 002",
    BatchNo: "101",
    UsageType: "Enteric bacteria isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "02-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    MediaName: "Agar Plate 003",
    BatchNo: "102",
    UsageType: "Fastidious organisms",
    ContainerNo: "Petri Dish",
    CollectionType: "Sterilized",
    AddedOn: "03-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    MediaName: "Agar Plate 004",
    BatchNo: "103",
    UsageType: "Fungal isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "04-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    MediaName: "Agar Plate 005",
    BatchNo: "104",
    UsageType: "Staphylococci isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "05-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MediaName: "Agar Plate 006",
    BatchNo: "105",
    UsageType: "Fastidious bacteria",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "06-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    MediaName: "Agar Plate 007",
    BatchNo: "106",
    UsageType: "Pseudomonas aeruginosa isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "07-07-2024",
    status: "Active",
  },
];

const MediaLotUsage = () => {
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
      row.MediaName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Media Name", accessor: "MediaName" },
    { header: "Batch No.", accessor: "BatchNo" },
    { header: "Usage Type", accessor: "UsageType" },
    { header: "Container No.", accessor: "ContainerNo" },
    { header: "Collection Type", accessor: "CollectionType" },
    { header: "Added On", accessor: "AddedOn" },
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
      <h1 className="text-2xl font-bold mb-4">Media Lot Usage</h1>

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
          <ATMButton text="Media Lot Usage" color="blue" onClick={openModal} />
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

export default MediaLotUsage;
