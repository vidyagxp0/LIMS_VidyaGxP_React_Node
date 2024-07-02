
  // const StatusModal = (_props) => {
  //   return (
  //     <CModal
  //       alignment="center"
  //       visible={_props.visible}
  //       onClose={_props.closeModal}
  //     >
  //       <CModalHeader>
  //         <CModalTitle>Add Approved Vendor</CModalTitle>
  //       </CModalHeader>
  //       <CModalBody>
  //         <p className="mb-3 fw-bold">
  //           Add information and add new approved vendor
  //         </p>
  //         <CFormSelect
  //           className="mb-3"
  //           label="Product/Material Name"
  //           placeholder="Select product"
  //           options={[
  //             { value: "Tadalafil", label: "Tadalafil" },
  //             { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
  //             {
  //               value: "Diclofenac Sodium (BromineFree)",
  //               label: "Diclofenac Sodium (BromineFree)",
  //             },
  //           ]}
  //         />
  //         <CFormInput
  //           type="text"
  //           className="mb-3"
  //           label="Unique Code"
  //           placeholder="Product Code"
  //         />
  //         <CFormSelect
  //           className="mb-3"
  //           label="Vendor Name"
  //           placeholder="Select vender"
  //           options={[
  //             {
  //               value: "Aavis Pharmaceuticals",
  //               label: "Aavis Pharmaceuticals",
  //             },
  //             { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
  //             {
  //               value: "Diclofenac Sodium (BromineFree)",
  //               label: "Diclofenac Sodium (BromineFree)",
  //             },
  //           ]}
  //         />
  //         <CFormInput
  //           type="text"
  //           className="mb-3"
  //           label="Qualification Criteria"
  //           placeholder="Qualification Criteria"
  //         />
  //         <CFormInput
  //           type="text"
  //           className="mb-3"
  //           label="Comments If Any"
  //           placeholder="Comments If Any"
  //         />
  //       </CModalBody>
  //       <CModalFooter>
  //         <CButton color="light" onClick={_props.closeModal}>
  //           Back
  //         </CButton>
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
  //         <CModalTitle>Delete Approved Vendor</CModalTitle>
  //       </CModalHeader>
  //       <CModalBody>
  //         <p className="fs-5">Do you want to delete this Approved Vendor?</p>
  //       </CModalBody>
  //       <CModalFooter>
  //         <CButton
  //           color="secondary"
  //           onClick={_props.closeModal}
  //           style={{ marginRight: "0.5rem", fontWeight: "500" }}
  //         >
  //           Cancel
  //         </CButton>
  //         <CButton
  //           color="danger"
  //           onClick={_props.confirmDelete}
  //           style={{ fontWeight: "500", color: "white" }}
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
    ProductName: "Product 1",
    UniqueCode: "UC-001",
    VendorName: "Vendor A",
    QualificationCriteria: "Criteria 1",
    Comments: "Comment 1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    ProductName: "Product 2",
    UniqueCode: "UC-002",
    VendorName: "Vendor B",
    QualificationCriteria: "Criteria 2",
    Comments: "Comment 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    ProductName: "Product 3",
    UniqueCode: "UC-003",
    VendorName: "Vendor C",
    QualificationCriteria: "Criteria 3",
    Comments: "Comment 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    ProductName: "Product 4",
    UniqueCode: "UC-004",
    VendorName: "Vendor D",
    QualificationCriteria: "Criteria 4",
    Comments: "Comment 4",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 5,
    ProductName: "Product 5",
    UniqueCode: "UC-005",
    VendorName: "Vendor E",
    QualificationCriteria: "Criteria 5",
    Comments: "Comment 5",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 6,
    ProductName: "Product 6",
    UniqueCode: "UC-006",
    VendorName: "Vendor F",
    QualificationCriteria: "Criteria 6",
    Comments: "Comment 6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    ProductName: "Product 7",
    UniqueCode: "UC-007",
    VendorName: "Vendor G",
    QualificationCriteria: "Criteria 7",
    Comments: "Comment 7",
    status: "INITIATED",
  },
];


const Vendors = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    APPROVED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    REJECTED: 0,
    DROPPED: 0,
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
      row.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Product Name", accessor: "ProductName" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "Vendor Name", accessor: "VendorName" },
    { header: "Qualification Criteria", accessor: "QualificationCriteria" },
    { header: "Comments", accessor: "Comments" },
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
      <h1 className="text-2xl font-bold mb-4">Approved Vendors</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "REJECTED", label: "REJECTED" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "APPROVED", label: "APPROVED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right">
          <ATMButton text="Add Approved Vendors" color="blue" onClick={openModal} />
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
export default Vendors;
