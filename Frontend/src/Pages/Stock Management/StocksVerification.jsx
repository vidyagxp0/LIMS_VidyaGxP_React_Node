// const StatusModal = (_props) => {
//   return (
//     <CModal  alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//       <CModalHeader>
//         <CModalTitle>View Stock Verification</CModalTitle>
//       </CModalHeader>
//       <CModalBody>

//       <div className="offcanvas-body">
//         <div className="d-flex gap-4 mb-3">
//           <div className="w-100">
//             <label htmlFor="MaterialName" className="form-label">
//               Material Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="MaterialName"
//               defaultValue={"Polycaprolactone New"}
//               placeholder="Material NameSodium Propyl Paraben IP"
//               disabled
//             />
//           </div>
//           <div className="w-100">
//             <label htmlFor="InvoiceDate" className="form-label">
//               Invoice Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               defaultValue={"2024-05-24"}
//               id="InvoiceDate"
//               disabled
//             />
//           </div>
//           <div className="w-100">
//             <label htmlFor="InvoiceNumber" className="form-label">
//               Invoice Number
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="InvoiceNumber"
//               defaultValue="INC3434"
//               placeholder="Invoice Number"
//               disabled
//             />
//           </div>
//         </div>
//         <div className="d-flex gap-4 mb-3">
//           <div className="w-100">
//             <label htmlFor="SupplierName" className="form-label">
//               Supplier Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="SupplierName"
//               defaultValue={"uc"}
//               placeholder="Supplier Name"
//               disabled
//             />
//           </div>
//           <div className="w-100">
//             <label htmlFor="VendorCode" className="form-label">
//               Vendor code of supplier
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="VendorCode"
//               defaultValue={"uc"}
//               placeholder="Vendor code of supplier"
//               disabled
//             />
//           </div>
//           <div className="w-100">
//             <label htmlFor="Quantity" className="form-label">
//               Quantity
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="Quantity"
//               defaultValue={2}
//               placeholder="Quantity"
//               disabled
//             />
//           </div>
//         </div>
//         <div className="d-flex gap-4 mb-3">
//           <div className="w-100">
//             <label htmlFor="TruckNumber" className="form-label">
//               Truck Number
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="TruckNumber"
//               defaultValue={"DF4353D"}
//               placeholder="Truck Number"
//               disabled
//             />
//           </div>
//           <div className="w-100">
//             <label htmlFor="ChNumber" className="form-label">
//               Ch No.
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="ChNumberv"
//               defaultValue={5354}
//               placeholder="Ch No."
//               disabled
//             />
//           </div>
//           <div className="w-100 d-flex justify-content-between align-items-center mt-4">
//             <label className="form-check-label" htmlFor="apporved">
//               Supplier apporved by QA department(Yes/No)
//             </label>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="apporved"
//               checked
//               disabled
//             />
//           </div>
//         </div>
//         <div className="d-flex gap-4 mb-3">
//           <div className="w-75">
//             <label htmlFor="StockRegistrationRemark" className="form-label">
//               Stock Registration Remark
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="StockRegistrationRemark"
//               defaultValue={"na"}
//               placeholder="Stock Registration Remark"
//               disabled
//             />
//           </div>
//           <div className="w-25 d-flex justify-content-between align-items-center mt-4">
//             <label className="form-check-label" htmlFor="coa">
//               COA of material received(Yes/No)
//             </label>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="coa"
//               checked
//               disabled
//             />
//           </div>
//         </div>

//         <div className="timelines mb-4">
//           <div className="horizontaltimline my-4">
//             <Box sx={{ width: "100%" }}>
//               <Stepper activeStep={1} alternativeLabel>
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Box>
//           </div>
//           <div className="vertical-timelines">
//             <VerticalTimeline>
//               <VerticalTimelineElement
//                 className="vertical-timeline-element--work"
//                 contentStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 contentArrowStyle={{
//                   borderRight: "7px solid  rgb(33, 150, 243)",
//                 }}
//                 iconStyle={{
//                   background: "rgb(233, 30, 99)",
//                   color: "#fff",
//                 }}
//                 icon={<VaccinesIcon />}
//               >
//                 <h6 className="vertical-timeline-element-title  text-dark mb-2">
//                   Material sample received by QC departement: YES
//                 </h6>
//                 <h6 className="vertical-timeline-element-subtitle">
//                   Updated On: 5th May 2024 21:28
//                 </h6>
//                 <p>Updated By: QC</p>
//                 <p>5th May 2024 21:28</p>
//               </VerticalTimelineElement>
//               <VerticalTimelineElement
//                 className="vertical-timeline-element--work"
//                 contentStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 contentArrowStyle={{
//                   borderRight: "7px solid  rgb(33, 150, 243)",
//                 }}
//                 iconStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 icon={<VaccinesIcon />}
//               >
//                 <h6 className="vertical-timeline-element-title  text-dark mb-2">
//                   Material sample received by QC departement: YES
//                 </h6>
//                 <h6 className="vertical-timeline-element-subtitle">
//                   Updated On: 5th May 2024 21:28
//                 </h6>
//                 <p>Updated By: QC</p>
//                 <p>5th May 2024 21:28</p>
//               </VerticalTimelineElement>
//               <VerticalTimelineElement
//                 className="vertical-timeline-element--work"
//                 contentStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 contentArrowStyle={{
//                   borderRight: "7px solid  rgb(33, 150, 243)",
//                 }}
//                 iconStyle={{
//                   background: "rgb(233, 30, 99)",
//                   color: "#fff",
//                 }}
//                 icon={<VaccinesIcon />}
//               >
//                 <h6 className="vertical-timeline-element-title  text-dark mb-2">
//                   Material sample received by QC departement: YES
//                 </h6>
//                 <h6 className="vertical-timeline-element-subtitle">
//                   Updated On: 5th May 2024 21:28
//                 </h6>
//                 <p>Updated By: QC</p>
//                 <p>5th May 2024 21:28</p>
//               </VerticalTimelineElement>
//               <VerticalTimelineElement
//                 className="vertical-timeline-element--work"
//                 contentStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 contentArrowStyle={{
//                   borderRight: "7px solid  rgb(33, 150, 243)",
//                 }}
//                 iconStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 icon={<VaccinesIcon />}
//               >
//                 <h6 className="vertical-timeline-element-title  text-dark mb-2">
//                   Material sample received by QC departement: YES
//                 </h6>
//                 <h6 className="vertical-timeline-element-subtitle">
//                   Updated On: 5th May 2024 21:28
//                 </h6>
//                 <p>Updated By: QC</p>
//                 <p>5th May 2024 21:28</p>
//               </VerticalTimelineElement>
//               <VerticalTimelineElement
//                 className="vertical-timeline-element--education"
//                 contentStyle={{
//                   background: "rgb(33, 150, 243)",
//                   color: "#fff",
//                 }}
//                 contentArrowStyle={{
//                   borderRight: "7px solid  rgb(33, 150, 243)",
//                 }}
//                 iconStyle={{
//                   background: "rgb(233, 30, 99)",
//                   color: "#fff",
//                 }}
//                 icon={<VaccinesIcon />}
//               >
//                 <h6 className="vertical-timeline-element-title  text-dark mb-2">
//                   Material sample received by QC departement: YES
//                 </h6>
//                 <h6 className="vertical-timeline-element-subtitle">
//                   Updated On: 5th May 2024 21:28
//                 </h6>
//                 <p>Updated By: QC</p>
//                 <p>5th May 2024 21:28</p>
//               </VerticalTimelineElement>
//             </VerticalTimeline>
//           </div>
//         </div>

//         <table className="table table-bordered border-dark table-responsive">
//           <tbody>
//             <tr>
//               <td className="text-light bg-info">A.R No.</td>
//               <td>ARFP0000011 </td>
//               <td className="text-light bg-info">Registered On</td>
//               <td>05/05/2024</td>
//             </tr>
//             <tr>
//               <td className="text-light bg-info">Specification ID </td>
//               <td>648c1904c30b4b0cb1a4534e</td>
//               <td className="text-light bg-info">Sample Type </td>
//               <td>Finished Product</td>
//             </tr>
//           </tbody>
//         </table>
//         <p className="fs-5 fw-bold mt-4 mb-0">Tests</p>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Sno.</th>
//               <th>Test Category</th>
//               <th>Test Name</th>
//               <th>Test Technique</th>
//               <th>Execution Values</th>
//               <th>Execution</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Physical</td>
//               <td>Color Test </td>
//               <td>Default</td>
//               <td>-</td>
//               <td>
//                 <div className="btn btn-primary">Execute</div>
//               </td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Physical</td>
//               <td>Infrared spectrum</td>
//               <td>Default</td>
//               <td>-</td>
//               <td>
//                 <div className="btn btn-primary">Execute</div>
//               </td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>Physical</td>
//               <td>Appearance (Form) </td>
//               <td>Default</td>
//               <td>-</td>
//               <td>
//                 <div className="btn btn-primary">Execute</div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="mb-3">
//           <label className="form-label">
//             Sample analyzed by QC department
//           </label>
//           <div className="d-flex flex-row gap-4">
//             <div>
//               <input
//                 type="radio"
//                 className="form-check-input mx-3"
//                 name="CheckPointPassed"
//                 id="yes"
//               />
//               <label htmlFor="yes">Yes</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 className="form-check-input mx-3"
//                 name="CheckPointPassed"
//                 id="no"
//               />
//               <label htmlFor="no">No</label>
//             </div>
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="StockVerificationRemark" className="form-label">
//             Stock Verification Remark
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="StockVerificationRemark"
//             placeholder="Stock Verification Remark"
//           />
//         </div>
//         <div className="d-flex my-4 gap-4">
//           <div
//             className="btn btn-secondary px-4"
//             data-bs-dismiss="offcanvas"
//             onClick={_props.closeModal}
//           >
//             Back
//           </div>
//           <div className="btn btn-primary px-4">Submit</div>
//         </div>
//       </div>
//       </CModalBody>
//     </CModal>
//   )
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
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    MaterialType: "Plant Configuration",
    InvoiceNumber: "PLA-001",
    SupplierName: "Supplier 1",
    SupplierApprovedByQa: "Yes",
    VerificationStatus: "Verified",
    StockType: "RM",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MaterialType: "Chemical",
    InvoiceNumber: "CHE-002",
    SupplierName: "Supplier 2",
    SupplierApprovedByQa: "No",
    VerificationStatus: "Pending",
    StockType: "RM",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    MaterialType: "Packaging",
    InvoiceNumber: "PKG-003",
    SupplierName: "Supplier 3",
    SupplierApprovedByQa: "Yes",
    VerificationStatus: "Verified",
    StockType: "PM",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    MaterialType: "Maintenance",
    InvoiceNumber: "MNT-004",
    SupplierName: "Supplier 4",
    SupplierApprovedByQa: "No",
    VerificationStatus: "Rejected",
    StockType: "RM",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    MaterialType: "Equipment",
    InvoiceNumber: "EQT-005",
    SupplierName: "Supplier 5",
    SupplierApprovedByQa: "Yes",
    VerificationStatus: "Verified",
    StockType: "EM",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MaterialType: "Consumables",
    InvoiceNumber: "CON-006",
    SupplierName: "Supplier 6",
    SupplierApprovedByQa: "No",
    VerificationStatus: "Pending",
    StockType: "CM",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    MaterialType: "Plant Configuration",
    InvoiceNumber: "PLA-007",
    SupplierName: "Supplier 7",
    SupplierApprovedByQa: "Yes",
    VerificationStatus: "Verified",
    StockType: "RM",
    status: "Active",
  },
];


const StocksVerification = () => {
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

  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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
      row.MaterialType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Material Type", accessor: "MaterialType" },
    { header: "Invoice Number", accessor: "InvoiceNumber" },
    { header: "Supplier Name", accessor: "SupplierName" },
    { header: "Supplier approved by QA", accessor: "SupplierApprovedByQa" },
    { header: "Verification Status", accessor: "VerificationStatus" },
    { header: "Stock Type", accessor: "StockType" },
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
      sno:  index + 1,
      MaterialType: item["Material Type"] || "",
      InvoiceNumber: item["Invoice Number"] || "",
      SupplierName: item["Supplier Name"] || "",
      SupplierApprovedByQa: item["Supplier approved by QA"] || "",
      VerificationStatus: item["Verification Status"] || "",
      StockType: item["Stock Type"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
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
      <h1 className="text-2xl font-bold mb-4">Stocks</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          {/* <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          /> */}
        </div>
        {/* <div className="float-right">
          <ATMButton text="Add Batch Sample" color="blue" onClick={openModal} />
        </div> */}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
        </div>
        <div className="float-right flex gap-4">
        <PDFDownload columns={columns} data={initialData} fileName="Stock_Verification.pdf" title="Stock Verification Data" />
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
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
       {isModalsOpen && (
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};
export default StocksVerification;
