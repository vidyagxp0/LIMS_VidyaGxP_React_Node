// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Media Onboarding</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Add information and add new mediaOnboarding</p>
//           {/* <h3>Registration Initiation</h3> */}
//           <CFormSelect
//             type="text"
//             label="Media Name
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Media Prefix
//             "
//             placeholder=""
//           />

//           <CFormInput type="text" label="Storage Condition" placeholder="" />

//           <CFormInput type="text" label="UOM" placeholder="" />
//           <CForm>
//             <CFormLabel>Mode of Prepration</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="To be Prepared"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="Ready Mode"
//                 value="reject"
//               />
//             </div>
//           </CForm>
//           <CFormInput
//             type="text"
//             label="Refrence Document if Any"
//             placeholder="choose file"
//           />
//         </CModalBody>
//         <CModalFooter>
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
    MediaName: "code1",
    MediaPrefix: "application1",
    StorageCondition: "application1",
    UOM: "application1",
    ModeOfPreparation: "application1",
    AddedOn: "application1",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MediaName: "code2",
    MediaPrefix: "application2",
    StorageCondition: "application2",
    UOM: "application2",
    ModeOfPreparation: "application2",
    AddedOn: "application2",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    MediaName: "code3",
    MediaPrefix: "application3",
    StorageCondition: "application3",
    UOM: "application3",
    ModeOfPreparation: "application3",
    AddedOn: "application3",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    MediaName: "code4",
    MediaPrefix: "application4",
    StorageCondition: "application4",
    UOM: "application4",
    ModeOfPreparation: "application4",
    AddedOn: "application4",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    MediaName: "code5",
    MediaPrefix: "application5",
    StorageCondition: "application5",
    UOM: "application5",
    ModeOfPreparation: "application5",
    AddedOn: "application5",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MediaName: "code6",
    MediaPrefix: "application6",
    StorageCondition: "application6",
    UOM: "application6",
    ModeOfPreparation: "application6",
    AddedOn: "application6",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    MediaName: "code7",
    MediaPrefix: "application7",
    StorageCondition: "application7",
    UOM: "application7",
    ModeOfPreparation: "application7",
    AddedOn: "application7",
    status: "Active",
  },
];

const MediaOnboarding = () => {
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
    { header: "Media Prefix", accessor: "MediaPrefix" },
    { header: "UOM", accessor: "UOM" },
    { header: "MOde Of Preparation", accessor: "ModeOfPreparation" },
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
      <h1 className="text-2xl font-bold mb-4">Media Onboarding</h1>

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
          <ATMButton text="Media Onboarding" color="blue" onClick={openModal} />
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

export default MediaOnboarding;
