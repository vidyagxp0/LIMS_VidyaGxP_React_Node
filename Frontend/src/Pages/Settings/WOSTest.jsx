// const StatusModal = (_props) => {
//   return (
//     <>
    
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
import WosTestModal from "../Modals/WosTestModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    SpecificationId: "SPH-001",
    ProductName: "Product A",
    TestName: "Purity Test",
    TestCode: "PT-001",
    MethodNo: "M-001",
    TestCategory: "Chemical",
    TestTechnique: "Chromatography",
    TestType: "Quantitative",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 2,
    SpecificationId: "SPH-002",
    ProductName: "Product B",
    TestName: "Strength Test",
    TestCode: "ST-002",
    MethodNo: "M-002",
    TestCategory: "Physical",
    TestTechnique: "Tensile Testing",
    TestType: "Mechanical",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 3,
    SpecificationId: "SPH-003",
    ProductName: "Product C",
    TestName: "Microbial Test",
    TestCode: "MT-003",
    MethodNo: "M-003",
    TestCategory: "Biological",
    TestTechnique: "Culture Testing",
    TestType: "Qualitative",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 4,
    SpecificationId: "SPH-004",
    ProductName: "Product D",
    TestName: "Dissolution Test",
    TestCode: "DT-004",
    MethodNo: "M-004",
    TestCategory: "Chemical",
    TestTechnique: "UV Spectroscopy",
    TestType: "Quantitative",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 5,
    SpecificationId: "SPH-005",
    ProductName: "Product E",
    TestName: "Moisture Content",
    TestCode: "MC-005",
    MethodNo: "M-005",
    TestCategory: "Physical",
    TestTechnique: "Gravimetric",
    TestType: "Quantitative",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 6,
    SpecificationId: "SPH-006",
    ProductName: "Product F",
    TestName: "Hardness Test",
    TestCode: "HT-006",
    MethodNo: "M-006",
    TestCategory: "Mechanical",
    TestTechnique: "Rockwell Hardness",
    TestType: "Quantitative",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    SpecificationId: "SPH-007",
    ProductName: "Product G",
    TestName: "Viscosity Test",
    TestCode: "VT-007",
    MethodNo: "M-007",
    TestCategory: "Physical",
    TestTechnique: "Viscometer",
    TestType: "Quantitative",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 8,
    SpecificationId: "SPH-008",
    ProductName: "Product H",
    TestName: "PH Test",
    TestCode: "PH-008",
    MethodNo: "M-008",
    TestCategory: "Chemical",
    TestTechnique: "PH Meter",
    TestType: "Quantitative",
    status: "DROPPED",
  },
];

const WOSTest = () => {
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
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      SpecificationId: item["Specification ID"] || "",
      ProductName: item["Product Name"] || "",
      TestName: item["Test Name"] || "",
      TestCode: item["Test Code"] || "",
      MethodNo: item["Method No."] || "",
      TestCategory: item["TestCategory"] || "",
      TestTechnique: item["Workflow"] || "",
      TestType: item["TestType"] || "",
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
    { header: "Specification ID", accessor: "SpecificationId" },
    { header: "Product Name", accessor: "ProductName" },
    { header: "Test Name", accessor: "TestName" },
    { header: "Test Code", accessor: "TestCode" },
    { header: "Method No.", accessor: "MethodNo" },
    { header: "TestCategory", accessor: "TestCategory" },
    { header: "Test Technique", accessor: "TestTechnique" },
    { header: "TestType", accessor: "TestType" },
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
      <h1 className="text-2xl font-bold mb-4">WOS Tests</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
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
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "    DROPPED" },
              { value: "INITIATED", label: "  INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "   APPROVED" },
              { value: "REJECTED", label: "   REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add WOS Test" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <WosTestModal
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

export default WOSTest;
