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
    WorkingContainerNo: "code1",
    ContainerQty: "material 1",
    ContainerValidityPeriodDay: "dummy desc",
    ContainerValidUpto: "30/06/2024 00:00",
    LotValidUpto: "2024-06-30",
    AddedOn: "29/06/2024 10:34",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    WorkingContainerNo: "code2",
    ContainerQty: "material 2",
    ContainerValidityPeriodDay: "description 2",
    ContainerValidUpto: "01/07/2024 00:00",
    LotValidUpto: "2024-07-01",
    AddedOn: "28/06/2024 11:45",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    WorkingContainerNo: "code3",
    ContainerQty: "material 3",
    ContainerValidityPeriodDay: "description 3",
    ContainerValidUpto: "02/07/2024 00:00",
    LotValidUpto: "2024-07-02",
    AddedOn: "27/06/2024 12:56",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    WorkingContainerNo: "code4",
    ContainerQty: "material 4",
    ContainerValidityPeriodDay: "description 4",
    ContainerValidUpto: "03/07/2024 00:00",
    LotValidUpto: "2024-07-03",
    AddedOn: "26/06/2024 13:12",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    WorkingContainerNo: "code5",
    ContainerQty: "material 5",
    ContainerValidityPeriodDay: "description 5",
    ContainerValidUpto: "04/07/2024 00:00",
    LotValidUpto: "2024-07-04",
    AddedOn: "25/06/2024 14:23",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    WorkingContainerNo: "code6",
    ContainerQty: "material 6",
    ContainerValidityPeriodDay: "description 6",
    ContainerValidUpto: "05/07/2024 00:00",
    LotValidUpto: "2024-07-05",
    AddedOn: "24/06/2024 15:34",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    WorkingContainerNo: "code7",
    ContainerQty: "material 7",
    ContainerValidityPeriodDay: "description 7",
    ContainerValidUpto: "06/07/2024 00:00",
    LotValidUpto: "2024-07-06",
    AddedOn: "23/06/2024 16:45",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 8,
    WorkingContainerNo: "code8",
    ContainerQty: "material 8",
    ContainerValidityPeriodDay: "description 8",
    ContainerValidUpto: "07/07/2024 00:00",
    LotValidUpto: "2024-07-07",
    AddedOn: "22/06/2024 17:56",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 9,
    WorkingContainerNo: "code9",
    ContainerQty: "material 9",
    ContainerValidityPeriodDay: "description 9",
    ContainerValidUpto: "08/07/2024 00:00",
    LotValidUpto: "2024-07-08",
    AddedOn: "21/06/2024 18:12",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 10,
    WorkingContainerNo: "code10",
    ContainerQty: "material 10",
    ContainerValidityPeriodDay: "description 10",
    ContainerValidUpto: "09/07/2024 00:00",
    LotValidUpto: "2024-07-09",
    AddedOn: "20/06/2024 19:23",
    status: "Inactive",
  },
];

const WorkingStandardIssue = () => {
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
      if (item.status === "Active") counts.DROPPED++;
      else if (item.status === "Inactive") counts.INITIATED++;
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
      row.WorkingContainerNo.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) &&
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
    { header: "Working Container No.	", accessor: "WorkingContainerNo" },
    { header: "Container Qty	", accessor: "ContainerQty" },
    {
      header: "Container Validity Period Day(s)	",
      accessor: "ContainerValidityPeriodDay",
    },
    { header: "Container Valid Upto	", accessor: "ContainerValidUpto" },
    { header: "Lot Valid Upto	", accessor: "LotValidUpto" },
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
              { value: "Active", label: "ACTIVE" },
              { value: "Inactive", label: "INACTIVE" },
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

export default WorkingStandardIssue;
