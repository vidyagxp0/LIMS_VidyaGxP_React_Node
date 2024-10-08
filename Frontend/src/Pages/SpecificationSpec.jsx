import React, { useState } from "react";
import { randomSpecData } from "./SpecFunction";
import SearchBar from "../components/ATM components/SearchBar/SearchBar";
import { Dropdown } from "react-bootstrap";
import PDFDownload from "./PDFComponent/PDFDownload ";
import ATMButton from "../components/ATM components/Button/ATMButton";

// Sample random data for specifications
randomSpecData;

const SpecificationSpec = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const handleOpenModals = () => {
//     setIsModalsOpen(true);
//   };

//   const handleCloseModals = () => {
//     setIsModalsOpen(false);
//   };

    
  return (
    <>
      <div className="main-head">
        <h4 className="fw-bold">Specifications</h4>
      </div>

      {/* <div className="flex items-center justify-between mb-4">
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
          <PDFDownload
            // columns={columns}
            // data={filteredData}
            fileName="Storage_Condition.pdf"
            title="Storage Condition Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Storage Condition"
            color="blue"
            onClick={openModal}
          />
        </div>
      </div> */}
      <table className="min-w-full bg-white border border-gray-200 shadow-lg ">
        <thead>
          <tr className=" text-white text-left">
            <th colSpan="11" className="px-4 py-2 bg-cyan-500">
              General Information
            </th>
            <th colSpan="7" className="px-4 py-2  bg-green-500">
              Product Characteristics
            </th>
            <th colSpan="6" className="px-4 py-2  bg-red-500">
              Test Specifications
            </th>
            <th colSpan="6" className="px-4 py-2  bg-purple-500">
              Quality Control
            </th>
            <th colSpan="3" className="px-4 py-2  bg-orange-500">
              Compliance and Certification
            </th>
            <th colSpan="5" className="px-4 py-2  bg-yellow-500">
              Documentation and Tracking
            </th>
            <th colSpan="2" className="px-4 py-2  bg-blue-500">
              Miscellaneous
            </th>
          </tr>
          <tr className="">
            <td className="bg-black text-white  px-4 py-2">Specification ID</td>
            <td className="bg-black text-white  px-4 py-2">
              Specification Title/Name
            </td>
            <td className="bg-black text-white  px-4 py-2">Version Number</td>
            <td className="bg-black text-white  px-4 py-2">Attachment</td>
            <td className="bg-black text-white  px-4 py-2">Effective Date</td>
            <td className="bg-black text-white  px-4 py-2">Creation Date</td>
            <td className="bg-black text-white  px-4 py-2">Approved By</td>
            <td className="bg-black text-white  px-4 py-2">Product Name</td>
            <td className="bg-black text-white  px-4 py-2">Batch/Lot Number</td>
            <td className="bg-black text-white  px-4 py-2">Product Category</td>
            <td className="bg-black text-white  px-4 py-2">
              Manufacturer/Supplier
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Description
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Material Grade
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Molecular Formula
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Packaging Requirements
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Storage Conditions
            </td>
            <td className="bg-black text-white border px-4 py-2">Shelf Life</td>
            <td className="bg-black text-white border px-4 py-2">
              Labeling Requirements
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Test Parameter
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Test Method
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Acceptance Criteria
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Units of Measurement
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Test Frequency
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Control Sample Reference
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Sampling Plan
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Test Method Validation
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Reference Standards
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Result Interpretation
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Stability Criteria
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Re-Testing Interval
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Regulatory Requirements
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Certification
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Deviation Handling
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Audit Trail
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Document Reference
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Revision History
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Attachments
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Comments/Remarks
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Specification Review Frequency
            </td>
            <td className="bg-black text-white border px-4 py-2">
              Specification Expiry
            </td>
          </tr>
        </thead>
        <tbody>
          {randomSpecData.map((data, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{data.specId}</td>
              <td className="border px-4 py-2">{data.title}</td>
              <td className="border px-4 py-2">{data.version}</td>
              <td className="border px-4 py-2">{data.attachment}</td>
              <td className="border px-4 py-2">{data.effectiveDate}</td>
              <td className="border px-4 py-2">{data.creationDate}</td>
              <td className="border px-4 py-2">{data.approvedBy}</td>
              <td className="border px-4 py-2">{data.productName}</td>
              <td className="border px-4 py-2">{data.batchLotNumber}</td>
              <td className="border px-4 py-2">{data.productCategory}</td>
              <td className="border px-4 py-2">{data.manufacturer}</td>

              <td className="border px-4 py-2">{data.description}</td>
              <td className="border px-4 py-2">{data.materialGrade}</td>
              <td className="border px-4 py-2">{data.molecularFormula}</td>
              <td className="border px-4 py-2">{data.packagingRequirements}</td>
              <td className="border px-4 py-2">{data.storageConditions}</td>
              <td className="border px-4 py-2">{data.shelfLife}</td>
              <td className="border px-4 py-2">{data.labelingRequirements}</td>

              <td className="border px-4 py-2">{data.testParameter}</td>
              <td className="border px-4 py-2">{data.testMethod}</td>
              <td className="border px-4 py-2">{data.acceptanceCriteria}</td>
              <td className="border px-4 py-2">{data.unitsOfMeasurement}</td>
              <td className="border px-4 py-2">{data.testFrequency}</td>
              <td className="border px-4 py-2">
                {data.controlSampleReference}
              </td>

              <td className="border px-4 py-2">{data.samplingPlan}</td>
              <td className="border px-4 py-2">{data.testMethodValidation}</td>
              <td className="border px-4 py-2">{data.referenceStandards}</td>
              <td className="border px-4 py-2">{data.resultInterpretation}</td>
              <td className="border px-4 py-2">{data.stabilityCriteria}</td>
              <td className="border px-4 py-2">{data.reTestingInterval}</td>

              <td className="border px-4 py-2">
                {data.regulatoryRequirements}
              </td>
              <td className="border px-4 py-2">{data.certification}</td>
              <td className="border px-4 py-2">{data.deviationHandling}</td>

              <td className="border px-4 py-2">{data.auditTrail}</td>
              <td className="border px-4 py-2">{data.documentReference}</td>
              <td className="border px-4 py-2">{data.revisionHistory}</td>
              <td className="border px-4 py-2">{data.attachments}</td>
              <td className="border px-4 py-2">{data.comments}</td>

              <td className="border px-4 py-2">{data.reviewFrequency}</td>
              <td className="border px-4 py-2">{data.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SpecificationSpec;