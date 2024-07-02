
// const StatusModal = (_props) => {
//   return (
//     <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//       <CModalHeader>
//         <CModalTitle>Add Plant</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <CFormInput type="text" className="mb-3" label="Name" placeholder="Name" />
//         <CFormInput type="text" className="mb-3" label="Plant Code" placeholder="Plant Code" />
//         <CFormInput type="text" className="mb-3" label="Address" placeholder="Address" />
//       </CModalBody>
//       <CModalFooter>
//         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
//         <CButton color="primary">Add</CButton>
//       </CModalFooter>
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
//         <CModalTitle>
//           Delete Plant
//         </CModalTitle>
//       </CModalHeader>
//       <CModalBody>

//       <p className="fs-5">Do you want to delete this Plant</p>
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
    PlantCode: "Client 1",
    PlantName: "client1@example.com",
    Address: "Address 1",
    RegisterOn: "02-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    PlantCode: "Client 2",
    PlantName: "client2@example.com",
    Address: "Address 2",
    RegisterOn: "03-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    PlantCode: "Client 3",
    PlantName: "client3@example.com",
    Address: "Address 3",
    RegisterOn: "04-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    PlantCode: "Client 4",
    PlantName: "client4@example.com",
    Address: "Address 4",
    RegisterOn: "05-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    PlantCode: "Client 5",
    PlantName: "client5@example.com",
    Address: "Address 5",
    RegisterOn: "06-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    PlantCode: "Client 6",
    PlantName: "client6@example.com",
    Address: "Address 6",
    RegisterOn: "07-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    PlantCode: "Client 7",
    PlantName: "client7@example.com",
    Address: "Address 7",
    RegisterOn: "08-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 8,
    PlantCode: "Client 8",
    PlantName: "client8@example.com",
    Address: "Address 8",
    RegisterOn: "09-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 9,
    PlantCode: "Client 9",
    PlantName: "client9@example.com",
    Address: "Address 9",
    RegisterOn: "10-07-2024",
    status: "Active",
  },
];




const Plants = () => {
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
      APPROVED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      REJECTED: 0,
      DROPPED: 0,
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
      row.PlantName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Plant Code", accessor: "PlantCode" },
    { header: "Plant Name", accessor: "PlantName" },
    { header: "Address", accessor: "Address" },
    { header: "Register On", accessor: "RegisterOn" },
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
      <h1 className="text-2xl font-bold mb-4">Plant`s</h1>

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
          <ATMButton text="Add Plant" color="blue" onClick={openModal} />
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
export default Plants;

