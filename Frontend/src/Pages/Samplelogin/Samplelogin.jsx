import React, { useState, useEffect } from "react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import SampleLogin2Modal from "../Modals/SampleLogin2Modal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleType: "USR001",
    storageCondition: "Product 1",
    createdAt: "2024-01-01",
    genericName: "Generic 1",
    specificationCode: "Spec 001",
    attachment: "attachment",
    status: "INITIATED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit1"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete1"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 2,
    sampleType: "USR002",
    storageCondition: "Product 2",
    createdAt: "2024-01-02",
    genericName: "Generic 2",
    specificationCode: "Spec 002",
    attachment: "attachment",
    status: "APPROVED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit2"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete2"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 3,
    sampleType: "USR003",
    storageCondition: "Product 3",
    createdAt: "2024-01-03",
    genericName: "Generic 3",
    specificationCode: "Spec 003",
    attachment: "attachment",
    status: "REJECTED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit3"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete3"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 4,
    sampleType: "USR004",
    storageCondition: "Product 4",
    createdAt: "2024-01-04",
    genericName: "Generic 4",
    specificationCode: "Spec 004",
    attachment: "attachment",
    status: "REINITIATED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit4"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete4"
        className="cursor-pointer"
      />,
    ],
  },
  {
    checkbox: false,
    sno: 5,
    sampleType: "USR005",
    storageCondition: "Product 5",
    createdAt: "2024-01-05",
    genericName: "Generic 5",
    specificationCode: "Spec 005",
    attachment: "attachment",
    status: "DROPPED",
    action: [
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit5"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete5"
        className="cursor-pointer"
      />,
    ],
  },
];

const Nominations = () => {
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
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      sno: index + 1,
      sampleType: item["Sample Type"] || "",
      storageCondition: item["Storage Condition"] || "",
      createdAt: item["Created At"] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      attachment: item["Attachment"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product / Material", accessor: "storageCondition" },
    { header: "A.R. No.", accessor: "createdAt" },
    { header: "Generic Name", accessor: "createdAt" },
    { header: "Specification Code", accessor: "createdAt" },
    { header: "attachment", accessor: "attachment" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={openModal2}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => onDeleteItem(row)}
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
      <h1 className="text-2xl font-bold mb-4">Sample Login</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <Dropdown
            options={[
              { value: "ARPC0000099", label: "ARPC0000099" },
              { value: "ARPC0000098", label: "ARPC0000098" },
              { value: "ARPC0000097", label: "ARPC0000097" },
              { value: "ARPC0000096", label: "ARPC0000096" },
              { value: "ARFFT0000094", label: "ARFFT0000094" },
              { value: "ARRW0000093", label: "ARRW0000093" },
              { value: "ARFFT0000091", label: "ARFFT0000091" },
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
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Sample Login" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <SampleLogin2Modal visible={isModalOpen} closeModal={closeModal} />
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

export default Nominations;
