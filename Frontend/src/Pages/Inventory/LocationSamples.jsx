// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//         size="2xl"
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Sampling Schedule Registration</CModalTitle>
//         </CModalHeader>
//         <p>Add information and register new Sampling Schedule</p>

//         {/* <p>Add information and Add Coa Template</p> */}
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Schedule Code

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Description

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Frequency
//                "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Tolerance
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//               <CButton color="info">Add</CButton>
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Start Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="End Date
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Select User Group To Alert

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div>
//               <table
//                 className="table table-bordered"
//                 style={{ background: "white" }}
//               >
//                 <thead style={{ background: "lightblue" }}>
//                   <th>Sno.</th>
//                   <th>Plant</th>
//                   <th>Facility</th>
//                   <th>Location</th>
//                   <th>Location ID</th>
//                   <th>Location Description</th>
//                   <th>Grade/Class</th>
//                   <th>Monitoring Method</th>
//                 </thead>
//                 <tr>
//                   <td>88541</td>
//                   <td>88541</td>
//                   <td>88541</td>
//                   <td>88541</td>
//                   <td>88541</td>
//                   <td>88541</td>
//                   <td>88541</td>
//                   <td>88541</td>
//                 </tr>
//               </table>
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Date of Monitoring

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Monitored / Sampled By

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>

//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };const DeleteModal = (_props) => {
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
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table2 from "../../components/ATM components/Table/Table2";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    PlantName: "Plant Configuration",
    Facility: "PLA-001",
    Location: "2024-07-01",
    Prefix: "2024-07-01",
    LocationTypeId: "2024-07-01",
    AddedOn: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    PlantName: "Laboratory A",
    Facility: "LAB-002",
    Location: "2024-06-30",
    Prefix: "LAB",
    LocationTypeId: "2024-06-30",
    AddedOn: "2024-06-30",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    PlantName: "Research Center",
    Facility: "RC-003",
    Location: "2024-06-29",
    Prefix: "RC",
    LocationTypeId: "2024-06-29",
    AddedOn: "2024-06-29",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    PlantName: "Production Site",
    Facility: "PS-004",
    Location: "2024-06-28",
    Prefix: "PS",
    LocationTypeId: "2024-06-28",
    AddedOn: "2024-06-28",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    PlantName: "Warehouse",
    Facility: "WH-005",
    Location: "2024-06-27",
    Prefix: "WH",
    LocationTypeId: "2024-06-27",
    AddedOn: "2024-06-27",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    PlantName: "Testing Facility",
    Facility: "TF-006",
    Location: "2024-06-26",
    Prefix: "TF",
    LocationTypeId: "2024-06-26",
    AddedOn: "2024-06-26",
    status: "Active",
  },
];

const LocationSamples = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
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

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      PlantName: item["Plant Name"] || "",
      Facility: item["Facility"] || "",
      Location: item["Location"] || "",
      Prefix: item["Prefix"] || "",
      LocationTypeId: item["Location type Id"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...data, ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Plant Name", accessor: "PlantName" },
    { header: "Facility", accessor: "Facility" },
    { header: "Location", accessor: "Location" },
    { header: "Prefix", accessor: "Prefix" },
    { header: "Location type Id", accessor: "LocationTypeId" },
    { header: "Added On", accessor: "AddedOn" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
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
      <h1 className="text-2xl font-bold mb-4">Location Samples</h1>

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
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          {/* <ATMButton text="Add OOA Template" color="blue" onClick={openModal} /> */}
        </div>
      </div>
      <Table2
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
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

export default LocationSamples;
