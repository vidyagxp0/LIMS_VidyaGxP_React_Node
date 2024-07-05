
  // const StatusModal = (_props) => {

  //   return (
      
  //   );
  // };

  // const DeleteModel = (_props) => {
  //   return (
  //     <CModal
  //       alignment="center"
  //       visible={_props.visible}
  //       onClose={_props.closeModal}
  //     >
  //       <CModalHeader>
  //         <CModalTitle>Delete Worksheet Resources</CModalTitle>
  //       </CModalHeader>
  //       <CModalBody>
  //         Do you want to delete this Worksheet Resources <code>Resource 5</code>?
  //       </CModalBody>
  //       <CModalFooter>
  //         <CButton color="light" onClick={_props.closeModal}>
  //           Back
  //         </CButton>
  //         <CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
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
import ResourcesModal from "../Modals/ResourcesModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    ResourceName: "BA-001",
    AddedOn: "BA-001",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    ResourceName: "BA-002",
    AddedOn: "BA-002",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    ResourceName: "BA-003",
    AddedOn: "BA-003",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    ResourceName: "BA-004",
    AddedOn: "BA-004",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    ResourceName: "BA-005",
    AddedOn: "BA-005",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 6,
    ResourceName: "BA-006",
    AddedOn: "BA-006",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    ResourceName: "BA-007",
    AddedOn: "BA-007",
    status: "Inactive",
  },
];


const Resources = () => {
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
      row.ResourceName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      ResourceName: item["Resource Name"] || "",
      AddedOn: item["Added On"] || "",
        status: item["Status"] || "",
      }));

      const concatenateData = [...updatedData];
      setData(concatenateData); // Update data state with parsed Excel data
      setIsModalsOpen(false); // Close the import modal after data upload
    };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Resource Name", accessor: "ResourceName" },
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
      <h1 className="text-2xl font-bold mb-4">Worksheet Resources</h1>
      {/* <div className="grid grid-cols-5 gap-4 mb-4">
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
      </div> */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
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
        <div className="float-right flex gap-4">
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Worksheet Resources" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <ResourcesModal
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
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};

export default Resources;
