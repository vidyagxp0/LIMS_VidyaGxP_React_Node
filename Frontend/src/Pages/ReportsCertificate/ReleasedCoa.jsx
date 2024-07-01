


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
      SampleType: "ST-001",
      ProductMaterial: "COA-001",
      ArNo: "Type 1",
      GenericName: "2024-06-01",
      SpecificationCode: "CH-001",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      SampleType: "ST-002",
      ProductMaterial: "COA-002",
      ArNo: "Type 2",
      GenericName: "2024-06-02",
      SpecificationCode: "CH-002",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      SampleType: "ST-003",
      ProductMaterial: "COA-003",
      ArNo: "Type 3",
      GenericName: "2024-06-03",
      SpecificationCode: "CH-003",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      SampleType: "ST-004",
      ProductMaterial: "COA-004",
      ArNo: "Type 4",
      GenericName: "2024-06-04",
      SpecificationCode: "CH-004",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      SampleType: "ST-005",
      ProductMaterial: "COA-005",
      ArNo: "Type 5",
      GenericName: "2024-06-05",
      SpecificationCode: "CH-005",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      SampleType: "ST-006",
      ProductMaterial: "COA-006",
      ArNo: "Type 6",
      GenericName: "2024-06-06",
      SpecificationCode: "CH-006",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      SampleType: "ST-007",
      ProductMaterial: "COA-007",
      ArNo: "Type 7",
      GenericName: "2024-06-07",
      SpecificationCode: "CH-007",
      status: "Active",
    },
  ];
  
  

const ReleasedCoa = () => {
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
      row.SampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Sample Type", accessor: "SampleType" },
    { header: "Product/Material", accessor: "ProductMaterial" },
    { header: "AR NO.", accessor: "ArNo" },
    { header: "Generic Name", accessor: "GenericName" },
    { header: "Specification Code", accessor: "SpecificationCode" },
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
      <h1 className="text-2xl font-bold mb-4">Released Coa</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "Ar No", label: "ArNo." },
              { value: "ARABEP0000122", label: "ARABEP0000122" },
              { value: "ARAMPHO0000121", label: "ARAMPHO0000121" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
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
          {/* <ATMButton text="Add COA Template" color="blue" onClick={openModal} /> */}
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
export default ReleasedCoa;

