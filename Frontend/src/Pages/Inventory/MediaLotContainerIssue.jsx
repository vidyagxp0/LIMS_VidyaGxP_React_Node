// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//         size="xl"
//       >
//         <CModalHeader>
//           <CModalTitle size="xl">Add Media Lot</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <table
//             className="table table-bordered"
//             style={{ width: "100%", height: "700px" }}
//           >
//             <thead className="thead-light">
//               <tr>
//                 <th style={{ background: "#0F93C3", color: "white" }}>SNo.</th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                 Media Container No.
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Container Qty
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Container Validity Period Day(s)
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Container Valid Upto
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Lot Valid Upto
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Select
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>WSI-1020223-000000061</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>WSI-1020223-000000062</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>WSI-1020223-000000063</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>WSI-1020223-000000064</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>WSI-1020223-000000065</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>6</td>
//                 <td>WSI-1020223-000000066</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>7</td>
//                 <td>WSI-1020223-000000067</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>8</td>
//                 <td>WSI-1020223-000000068</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>9</td>
//                 <td>WSI-1020223-000000069</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>10</td>
//                 <td>WSI-1020223-000000610</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
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
    MediaContainerNo: "Agar Plate 001",
    ContainerQty: "100",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "01-07-2024",
    AddedOn: "01-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MediaContainerNo: "Agar Plate 002",
    ContainerQty: "150",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "02-07-2024",
    AddedOn: "02-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    MediaContainerNo: "Agar Plate 003",
    ContainerQty: "120",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "03-07-2024",
    AddedOn: "03-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    MediaContainerNo: "Agar Plate 004",
    ContainerQty: "80",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "04-07-2024",
    AddedOn: "04-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    MediaContainerNo: "Agar Plate 005",
    ContainerQty: "90",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "05-07-2024",
    AddedOn: "05-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MediaContainerNo: "Agar Plate 006",
    ContainerQty: "70",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "06-07-2024",
    AddedOn: "06-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    MediaContainerNo: "Agar Plate 007",
    ContainerQty: "110",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "07-07-2024",
    AddedOn: "07-07-2024",
    status: "Active",
  },
];

const MediaLotContainersIssue = () => {
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
      row.MediaContainerNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Media Container No.", accessor: "MediaContainerNo" },
    { header: "Container Qty", accessor: "ContainerQty" },
    {
      header: "Container Validity Period Day(s)",
      accessor: "ContainerValidityPeriodDays",
    },
    { header: "Container Valid Upto", accessor: "ContainerValidUpto" },
    { header: "Lot Valid Upto", accessor: "LotValidUpto" },
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
      <h1 className="text-2xl font-bold mb-4">Media Lot Containers Issue</h1>

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
            text="Media Lot Containers Issue"
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

export default MediaLotContainersIssue;
