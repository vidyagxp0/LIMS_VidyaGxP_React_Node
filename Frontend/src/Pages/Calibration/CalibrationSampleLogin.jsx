//   const StatusModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//         <CModalHeader>
//           <CModalTitle>Add Sample Login</CModalTitle>
//         </CModalHeader>

//         <CModalBody>
//         <CFormInput
//           label='Sample Login Template/ Revision No.'
//           className="mb-3"
//           type="text"
//           placeholder=""
//           />
//           <CFormInput
//           label='Test Plan / Revision No.'
//           className="mb-3"
//           type="text"
//           placeholder=" Prefix"
//           />
//            <CFormInput
//           label='Product / Material'
//           className="mb-3"
//           type="text"
//           placeholder=" Prefix"
//           />
//            <CFormInput
//           label='Product / Material Code'
//           className="mb-3"
//           type="text"
//           placeholder=" "
//           />
//           <CFormInput
//           label='Generic Name'
//           className="mb-3"
//           type="text"
//           placeholder=" "
//           />
//           <CFormInput
//           label='Specification ID'
//           className="mb-3"
//           type="text"
//           placeholder=" "
//           />
//           <CFormInput
//           label='Sample Type'
//           className="mb-3"
//           type="text"
//           placeholder=" "
//           />
//          <FormLabel style={{ margin: '15px 20px' }} id="demo-row-radio-buttons-group-label">Auto Sample Allotted</FormLabel>
//             <RadioGroup style={{ margin: '15px 20px' }}
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="row-radio-buttons-group"
//             >
//               <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
//               <FormControlLabel value="No" control={<Radio />} label="No" />
//             </RadioGroup>

//          <div className="d-flex gap-3 mt-4">
//         <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
//         <CButton color="primary w-50">Submit</CButton>
//       </div>

//         </CModalBody>
//       </CModal>
//     )
//   }

//   const DeleteModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//             <CModalHeader>
//                 <CModalTitle>Delete User</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
//                 <p>Are you sure you want to delete this sample type?</p>
//             </CModalBody>
//             <CModalFooter>
//                 <CButton
//                     color="secondary"
//                     onClick={_props.closeModal}
//                     style={{
//                         marginRight: "0.5rem",
//                         fontWeight: "500",
//                     }}
//                 >
//                     Cancel
//                 </CButton>
//                 <CButton
//                     color="danger"
//                     onClick={_props.confirmDelete}
//                     style={{
//                         fontWeight: "500",
//                         color: "white",
//                     }}
//                 >
//                     Delete
//                 </CButton>
//             </CModalFooter>
//         </CModal>
//     );
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
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    SampleType: "Product 1",
    ProductMaterial: "Seq 1",
    GenericName: "Info 1",
    SpecificationCode: "Start 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    SampleType: "Product 2",
    ProductMaterial: "Seq 2",
    GenericName: "Info 2",
    SpecificationCode: "Start 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    SampleType: "Product 3",
    ProductMaterial: "Seq 3",
    GenericName: "Info 3",
    SpecificationCode: "Start 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    SampleType: "Product 4",
    ProductMaterial: "Seq 4",
    GenericName: "Info 4",
    SpecificationCode: "Start 4",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    SampleType: "Product 5",
    ProductMaterial: "Seq 5",
    GenericName: "Info 5",
    SpecificationCode: "Start 5",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    SampleType: "Product 6",
    ProductMaterial: "Seq 6",
    GenericName: "Info 6",
    SpecificationCode: "Start 6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    SampleType: "Product 7",
    ProductMaterial: "Seq 7",
    GenericName: "Info 7",
    SpecificationCode: "Start 7",
    status: "INITIATED",
  },
];


const CalibrationSampleLogin = () => {
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
    { header: "Product / Material", accessor: "ProductMaterial" },
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
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: initialData.length + index + 1,
      SampleType: item["Sample Type"] || "",
      ProductMaterial: item["Product / Material"] || "",
      GenericName: item["Generic Name"] || "",
      SpecificationCode: item["Specification Code"] || "",
      status: item["Status"] || "INITIATED",
    }));
  
    const concatenatedData = [...data, ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  
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
      <h1 className="text-2xl font-bold mb-4">Calibartion Sample Login</h1>
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
              { value: "DROPPED", label: "DROPPED" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
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
       {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};

export default CalibrationSampleLogin;
