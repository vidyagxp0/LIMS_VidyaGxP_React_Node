

// const StatusModal = (_props) => {
//     return (
//         <>
//             <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//                 <CModalHeader>
//                     <CModalTitle>Add Coa Template</CModalTitle>
//                 </CModalHeader>
//                 <CModalBody>
//                     <p>Add information and Add Coa Template</p>

//                     <CFormInput
//                         type="text"
//                         className="mb-3"
//                         label="Sample Type"
//                         placeholder="Select... "
//                         options={[
//                             "Select...",
//                             { label: "Hydroulic Oil" },
//                             { label: "hcl" },
//                             { label: "petrochemical" },
//                             { label: "Initiated product" }
//                         ]}
//                     />

//                     <CFormInput
//                         type="text"
//                         className="mb-3"
//                         label="Coa Type"
//                         placeholder="Select Coa Type "
//                         options={[
//                             "Select Coa Type",
//                             { label: "With Specification" },
//                             { label: "WithOut Specification" },
//                             { label: "ERP" }
//                         ]}
//                     />
//                     <CFormInput
//                         type="text"
//                         className="mb-3"
//                         label="Report Title"
//                         placeholder=" Report Title"
//                     />
//                     <CFormInput
//                         type="text"
//                         className="mb-3"
//                         label="Product/Material Caption"
//                         placeholder="Report Title "
//                     />
//                     <CFormInput
//                         type="text"
//                         className="mb-3"
//                         label="Serial No."
//                         placeholder="Serial Number "
//                     />
//                     <CFormInput
//                         type="text"
//                         className="mb-3"
//                         label="Format No."
//                         placeholder="Format No. "
//                     />

//                     <CModalTitle className="bg-light mb-3">Header</CModalTitle>

//                     <div className="d-flex pb-2">
//                         <div className="mb-3">
//                             <CFormInput
//                                 type="text"
//                                 label="Rows"
//                                 placeholder="Rows "
//                             />
//                         </div>
//                         <div className="ps-3 w-50">
//                             <CFormSelect
//                                 type="text"
//                                 label="Columns"
//                                 placeholder="Columns "
//                                 options={[
//                                     { label: "2" },
//                                     { label: "4" },
//                                     { label: "6" }
//                                 ]}
//                             />
//                         </div>
//                     </div>

//                     <CModalTitle className="bg-light mb-3">Footer</CModalTitle>

//                     <div className="d-flex pb-2">
//                         <div className="mb-2">
//                             <CFormInput
//                                 type="text"
//                                 label="Rows"
//                                 placeholder="Rows "
//                             />
//                         </div>
//                         <div className="ps-3 w-50">
//                             <CFormSelect
//                                 type="text"
//                                 label="Columns"
//                                 placeholder="Columns "
//                                 options={[
//                                     { label: "2" },
//                                     { label: "4" },
//                                     { label: "6" }
//                                 ]}
//                             />
//                         </div>
//                     </div>

//                     <div className="d-flex">
//                         <div className="pe-3">
//                             <CFormInput
//                                 type="text"
//                                 className="mb-3"
//                                 label=""
//                                 placeholder="Approved By "
//                             />
//                         </div>
//                         <div className="ps-3 w-50">
//                             <CFormSelect
//                                 type="text"
//                                 label=""
//                                 className="mb-3"
//                                 placeholder="approved_by "
//                                 options={[
//                                     "approved_by",
//                                 ]}
//                             />
//                         </div>
//                     </div>

//                     <div className="d-flex">
//                         <div className="pe-3">
//                             <CFormInput
//                                 type="text"
//                                 className="mb-3"
//                                 label=""
//                                 placeholder="Reviewed By"
//                             />
//                         </div>
//                         <div className="ps-3 w-50">
//                             <CFormSelect
//                                 type="text"
//                                 className="mb-3"
//                                 label=""
//                                 placeholder="reviewed_by "
//                                 options={[
//                                     "reviewed_by",
//                                     {}
//                                 ]}
//                             />
//                         </div>
//                     </div>

//                     <div className="d-flex">
//                         <div className="pe-3">
//                             <CFormInput
//                                 type="text"
//                                 className="mb-3"
//                                 label=""
//                                 placeholder="Checked By "
//                             />
//                         </div>
//                         <div className="ps-3 w-50">
//                             <CFormSelect
//                                 type="text"
//                                 className="mb-3"
//                                 label=""
//                                 placeholder="checked_by "
//                                 options={[
//                                     "checked_by",
//                                     {}
//                                 ]}
//                             />
//                         </div>
//                     </div>
//                 </CModalBody>
//                 <CModalFooter>
//                     <CButton color="light" onClick={_props.closeModal}>Back</CButton>
//                     <CButton color="primary">Submit</CButton>
//                 </CModalFooter>
//             </CModal>
//         </>
//     )
// }

// const DeleteModal = (_props) => {
//     return (
//         <>
//             <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//                 <CModalHeader>
//                     <CModalTitle>Delete Coa Template</CModalTitle>
//                 </CModalHeader>
//                 <CModalBody>
//                     <p>Do you want to delete this Coa  Template <code>{_props.templateId}</code>?</p>
//                 </CModalBody>
//                 <CModalFooter>
//                     <CButton color="light" onClick={_props.closeModal}>Back</CButton>
//                     <CButton color="danger" onClick={_props.confirmDelete}>Delete</CButton>
//                 </CModalFooter>
//             </CModal>
//         </>
//     )
// }



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
      CoaId: "COA-001",
      CoaType: "Type 1",
      UpdatedAt: "2024-06-01",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      SampleType: "ST-002",
      CoaId: "COA-002",
      CoaType: "Type 2",
      UpdatedAt: "2024-06-02",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      SampleType: "ST-003",
      CoaId: "COA-003",
      CoaType: "Type 3",
      UpdatedAt: "2024-06-03",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      SampleType: "ST-004",
      CoaId: "COA-004",
      CoaType: "Type 4",
      UpdatedAt: "2024-06-04",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      SampleType: "ST-005",
      CoaId: "COA-005",
      CoaType: "Type 5",
      UpdatedAt: "2024-06-05",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      SampleType: "ST-006",
      CoaId: "COA-006",
      CoaType: "Type 6",
      UpdatedAt: "2024-06-06",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      SampleType: "ST-007",
      CoaId: "COA-007",
      CoaType: "Type 7",
      UpdatedAt: "2024-06-07",
      status: "Active",
    },
  ];
  

const Coa_Template = () => {
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
    { header: "Cao ID", accessor: "CoaId" },
    { header: "Coa Type", accessor: "CoaType" },
    { header: "Updated At", accessor: "UpdatedAt" },
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
      <h1 className="text-2xl font-bold mb-4">Certificate of Analysis</h1>

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
          <ATMButton text="Add COA Template" color="blue" onClick={openModal} />
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
export default Coa_Template
