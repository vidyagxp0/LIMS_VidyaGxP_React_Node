

  // const StatusModal = (_props) => {
  //   return (
  //     
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
  //         Delete Calibration Type
  //         </CModalTitle>
  //       </CModalHeader>
  //       <CModalBody>

  //         <p className="fs-5">Do you want to delete this Client ?</p>
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
import ClientsModal from "../Modals/ClientsModal.jsx";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ClientName: "Client 1",
    EmailAddress: "client1@example.com",
    ContactNumber: "1234567890",
    Address: "Address 1",
    AddedOn: "2024-06-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    ClientName: "Client 2",
    EmailAddress: "client2@example.com",
    ContactNumber: "2345678901",
    Address: "Address 2",
    AddedOn: "2024-06-02",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    ClientName: "Client 3",
    EmailAddress: "client3@example.com",
    ContactNumber: "3456789012",
    Address: "Address 3",
    AddedOn: "2024-06-03",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    ClientName: "Client 4",
    EmailAddress: "client4@example.com",
    ContactNumber: "4567890123",
    Address: "Address 4",
    AddedOn: "2024-06-04",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    ClientName: "Client 5",
    EmailAddress: "client5@example.com",
    ContactNumber: "5678901234",
    Address: "Address 5",
    AddedOn: "2024-06-05",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 6,
    ClientName: "Client 6",
    EmailAddress: "client6@example.com",
    ContactNumber: "6789012345",
    Address: "Address 6",
    AddedOn: "2024-06-06",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    ClientName: "Client 7",
    EmailAddress: "client7@example.com",
    ContactNumber: "7890123456",
    Address: "Address 7",
    AddedOn: "2024-06-07",
    status: "Active",
  },
];



const Clients = () => {
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
      row.ClientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Client Name", accessor: "ClientName" },
    { header: "Email Address", accessor: "EmailAddress" },
    { header: "Contact Number", accessor: "ContactNumber" },
    { header: "Address", accessor: "Address" },
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
      <h1 className="text-2xl font-bold mb-4">Clients</h1>

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
          <ATMButton text="Add Clients" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <ClientsModal
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
export default Clients;
