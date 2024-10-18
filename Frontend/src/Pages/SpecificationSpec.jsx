import React, { useState,useEffect } from "react";
import { randomSpecData } from "./SpecFunction";
import SearchBar from "../components/ATM components/SearchBar/SearchBar";
import { Dropdown } from "react-bootstrap";
import PDFDownload from "./PDFComponent/PDFDownload ";
import ATMButton from "../components/ATM components/Button/ATMButton";
import LaunchQMS from "../components/ReusableButtons/LaunchQMS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {BASE_URL} from "../config.json"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import SpecificationSpecModal from "./Modals/SpecificationSpecModal";
import SpecificationviewModel from "./SpecificationviewModel";
import { randomData } from "./STP/demoStp";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormInput,
} from "@coreui/react";
randomSpecData;

const SpecificationSpec = () => {
  const [data , setData] = useState(randomSpecData)
  const [editModalOpen, setEditModalOpen] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewdata ,setviewdata]=useState(null)
  const [error , setError] = useState(null);


  const openEditModal = (data) => {
    setEditModalData(data);
    setEditModalOpen(data);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const closeSpecificationModal = () => {
    setIsModalOpen(false);
  };

  const openSpecificationModal = () => {
    setIsModalOpen(true);
  };

  const closeAddModal=()=>{
    setIsModalOpen(false)
  }
  
  const handleChange = (e, setFormData, formData) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalSubmit = (newControlSample) => {
    console.log(newControlSample,"newControlSample")
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>{
        console.log(item , "ittteeemmm")
        return (
          item.productName === newControlSample.productName ? newControlSample : item
        )
      }
       
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          specId:newControlSample?.specId,
          title:newControlSample.title,
          version:newControlSample.version ,
          attachment:newControlSample.attachment,
          effectiveDate:newControlSample.effectiveDate,
          creationDate:newControlSample.creationDate,
          approvedBy:newControlSample.approvedBy,
          productName:newControlSample.productName,
          batchLotNumber:newControlSample.batchLotNumber,
          productCategory:newControlSample.productCategory,
          manufacturer:newControlSample.manufacturer,
          description:newControlSample.description,
          materialGrade:newControlSample.materialGrade,
          molecularFormula:newControlSample.molecularFormula,
          packagingRequirements:newControlSample.packagingRequirements,
          storageConditions:newControlSample.storageConditions,
          shelfLife:newControlSample.shelfLife,
          labelingRequirements:newControlSample.labelingRequirements,
          testParameter:newControlSample.testParameter,
          testMethod:newControlSample.testMethod,
          acceptanceCriteria:newControlSample.acceptanceCriteria,
          unitsOfMeasurement:newControlSample.unitsOfMeasurement,
          testFrequency:newControlSample.testFrequency,
          controlSampleReference:newControlSample.controlSampleReference,
          samplingPlan:newControlSample.samplingPlan,
          testMethodValidation:newControlSample.testMethodValidation,
          referenceStandards:newControlSample.referenceStandards,
          resultInterpretation:newControlSample.resultInterpretation,
          stabilityCriteria:newControlSample.stabilityCriteria,
          reTestingInterval:newControlSample.reTestingInterval,
          regulatoryRequirements:newControlSample.regulatoryRequirements,
          certification:newControlSample.certification,
          deviationHandling:newControlSample.deviationHandling,
          auditTrail:newControlSample.auditTrail,
          documentReference:newControlSample.documentReference,
          revisionHistory:newControlSample.revisionHistory,
          attachments:newControlSample.attachments,
          comments:newControlSample.comments,
          reviewFrequency:newControlSample.reviewFrequency,
          expiryDate:newControlSample.expiryDate,
        },
      ]);         
    }
    closeSpecificationModal();
  };

  const fields = [
    "specId",
    "title",
    "version",
    "attachment",
    "effectiveDate",
    "creationDate",
    "approvedBy",
    "productName",
    "batchLotNumber",
    "productCategory",
    "manufacturer",
    "description",
    "materialGrade",
    "molecularFormula",
    "packagingRequirements",
    "storageConditions",
    "shelfLife",
    "labelingRequirements",
    "testParameter",
    "testMethod",
    "acceptanceCriteria",
    "unitsOfMeasurement",
    "testFrequency",
    "controlSampleReference",
    "samplingPlan",
    "testMethodValidation",
    "referenceStandards",
    "resultInterpretation",
    "stabilityCriteria",
    "reTestingInterval",
    "regulatoryRequirements",
    "certification",
    "deviationHandling",
    "auditTrail",
    "documentReference",
    "revisionHistory",
    "attachments",
    "comments",
    "reviewFrequency",
    "expiryDate"
  ];

 
  

  const onDeleteItem = (specIdToDelete) => {
    const filteredData = data.filter((item) => item.specId !== specIdToDelete);
    setData(filteredData);
  };

  const onViewDetails=(data)=>{
         setviewdata(data)
  }

  const closeViewModal=()=>{
       setviewdata(null)
  }
  
  const handleStatusUpdate = (specId, newStatus) => {
    const updatedData = data.map((item) =>
      item.specId === specId ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };
  
  
  const handleAddSPC = async (newSTP) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/STP`, newSTP);
      const addedSPC = response.data.updatedLIMS?.spc[0];
      if (addedSPC) {
        setData(prevData => [...prevData, addedSPC]);
      }
      closeAddModal();
    } catch (err) {
      setError('Error adding STP');
    }
  };
  
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/manage-lims/:update/STP/${updatedData.stpId}`, updatedData);
      const updatedSPC = response.data.updatedLIMS?.spc[0];
      if (updatedSPC) {
        setData(prevData => prevData.map(item => item.specId === updatedSPC.specId ? updatedSPC : item));
      }
      setEditModalData(null);
    } catch (err) {
      setError('Error updating STP');
    }
  };

  const AddSPCModal = ({ visible, closeModal, onAdd }) => {
    const [formData, setFormData] = useState({
     specId:"",
    title:"",
    version:"",
    attachment:"",
    effectiveDate:"",
    creationDate:"",
    approvedBy:"",
    productName:"",
    batchLotNumber:"",
    productCategory:"",
    manufacturer:"",
    description:"",
    materialGrade:"",
    molecularFormula:"",
    packagingRequirements:"",
    storageConditions:"",
    shelfLife:"",
    labelingRequirements:"",
    testParameter:"",
    testMethod:"",
    acceptanceCriteria:"",
    unitsOfMeasurement:"",
    testFrequency:"",
    controlSampleReference:"",
    samplingPlan:"",
    testMethodValidation:"",
    referenceStandards:"",
    resultInterpretation:"",
    stabilityCriteria:"",
    reTestingInterval:"",
    regulatoryRequirements:"",
    certification:"",
    deviationHandling:"",
    auditTrail:"",
    documentReference:"",
    revisionHistory:"",
    attachments:"",
    comments:"",
    reviewFrequency:"",
    expiryDat:""
    });
    const handleAdd = () => {
     
      onAdd(formData);
      closeModal();
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification ID"
            name="specId"
            value={formData.specId}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Title/Name"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="Version Number"
            name="number"
            value={formData.number}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Attachment"
            name="attachment"
            value={formData.attachment}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Effective Date"
            name="effectiveDate"
            value={formData.effectiveDate}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Creation Date"
            name="creationDate"
            value={formData.creationDate}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Approved By"
            name="approved"
            value={formData.approved}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            name="product"
            value={formData.product}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Batch/Lot Number"
            name="batchLotNumber"
            value={formData.batchLotNumber}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Category"
            name="productCategory"
            value={formData.productCategory}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer/Supplier"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Material Grade"
            name="materialGrade"
            value={formData.materialGrade}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Molecular Formula"
            name="molecularFormula"
            value={formData.molecularFormula}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Packaging Requirements"
            name="packaging"
            value={formData.packaging}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Storage Conditions"
            name="storage"
            value={formData.storage}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Shelf Life"
            name="shelfLife"
            value={formData.shelfLife}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Labeling Requirements"
            name="labeling"
            value={formData.labeling}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Parameter"
            name="testParameter"
            value={formData.testParameter}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Method"
            name="testmethod"
            value={formData.testmethod}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Acceptance Criteria"
            name="acceptanceCriteria"
            value={formData.acceptanceCriteria}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Units of Measurement"
            name="unitsOfMeasurement"
            value={formData.unitsOfMeasurement}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Test Frequency"
            name="testFrequency"
            value={formData.testFrequency}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Control Sample Reference"
            name="controlSampleReference"
            value={formData.controlSampleReference}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Sampling Plan"
            name="samplingPlan"
            value={formData.samplingPlan}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
       
       <CFormInput
            className="mb-3"
            type="text"
            label="Test Method Validation"
            name="testmethodValidation"
            value={formData.testmethodValidation}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
       
          
          <CFormInput
            className="mb-3"
            type="text"
            label="Reference Standards"
            name="referenceStandards"
            value={formData.referenceStandards}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          
       
          <CFormInput
            className="mb-3"
            type="text"
            label="Result Interpretation"
            name="resultInterpretation"
            value={formData.resultInterpretation}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Stability Criteria"
            name="stabilityCriteria"
            value={formData.stabilityCriteria}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
       
       
       
          <CFormInput
            className="mb-3"
            type="file"
            label="Re Testing Interval"
            name="reTestingInterval"
            value={formData.reTestingInterval}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          
          <CFormInput
            className="mb-3"
            type="file"
            label="Regulatory Requirements"
            name="regulatoryrequirements"
            value={formData.regulatoryrequirements}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          
           
          <CFormInput
            className="mb-3"
            type="file"
            label="Certification"
            name="certification"
            value={formData.certification}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
             
             <CFormInput
            className="mb-3"
            type="file"
            label="Deviation Handling"
            name="deviationHandling"
            value={formData.deviationHandling}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          
             
          <CFormInput
            className="mb-3"
            type="file"
            label="Audit Trail"
            name="auditTrail"
            value={formData.auditTrail}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          
             
          <CFormInput
            className="mb-3"
            type="file"
            label="Document Reference"
            name="documentReference"
            value={formData.documentReference}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
             
             <CFormInput
            className="mb-3"
            type="file"
            label="Revision History"
            name="revisionHistory"
            value={formData.revisionHistory}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
       
          
       <CFormInput
            className="mb-3"
            type="file"
            label="Attachments"
            name="attachments"
            value={formData.attachments}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
             
             <CFormInput
            className="mb-3"
            type="file"
            label="Comments/Remarks"
            name="commentsremarks"
            value={formData.commentsremarks}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
              <CFormInput
            className="mb-3"
            type="file"
            label="Specificaion Review Frequency"
            name="specificationreviewfrequency"
            value={formData.specificationreviewfrequency}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
     
         <CFormInput
            className="mb-3"
            type="file"
            label="Specification Expiry"
            name="specificatioexpiry"
            value={formData.specificatioexpiry}
            onChange={(e) => handleChange(e, setFormData, formData)}
          />
          
       
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add Specification
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };
  useEffect(() => {
    localStorage.setItem(
      "spc",
      JSON.stringify(data.filter((row) => !randomData.includes(row)))
    );
  }, [data]);

  
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
   
      onSave(formData);
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Edit Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(formData).map(([key, value]) => {
              let inputType;
              if (key.includes("date")) {
                inputType = "date";
              } else if (key.includes("number")) {
                inputType = "number";
              } else if (key.includes("file")) {
                inputType = "file";
              } else {
                inputType = "text";
              }

              return (
                <div key={key}>
                  <CFormInput
                    className="mb-3"
                    type={inputType}
                    label={
                      key.charAt(0).toUpperCase() +
                      key
                        .slice(1)
                        .replace(/([A-Z])/g, " $1")
                        .trim()
                    }
                    name={key}
                    value={inputType !== "file" ? value : undefined}
                    onChange={
                      inputType === "file"
                        ? (e) => handleChange(e, setFormData, formData)
                        : handleChange
                    }
                  />
                </div>
              );
            })}
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  
 
  
  return (
    <>
      <LaunchQMS />
      <div>
       
        <div className="m-5 mt-3 ">
          <div className="main-head">
            <h4 className="fw-bold ">Specification</h4>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-4">
              <SearchBar value={""} onChange={""} />
              <Dropdown
                options={[
                  { value: "All", label: "All" },
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
                value={""}
                onChange={""}
              />
            </div>
            <div className="float-right flex gap-4">
              <PDFDownload              columns={"'columns'"}
                data={"filteredData"}
                title="Storage Location"
                fileName="Storage_Location.pdf"
              />
              <ATMButton
                text="Import"
                color="pink"
                onClick={"handleOpenModals"}
              />
              <ATMButton
                text="Add Specification"
                color="blue"
                onClick={openSpecificationModal}
              />
            </div>
          </div>
        </div>

        <table className="min-w-full bg-white border border-gray-200 shadow-lg mx-5">
          <thead>
            <tr className=" text-white text-left">
              <th colSpan="12" className="px-4 py-2 bg-cyan-500">
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
              <th colSpan="1" className="px-4 py-2  bg-green-500">
                Action
              </th>
            </tr>
            <tr className="">
            <td className="bg-gray-800 text-white border  px-4 py-2">
                   S No.
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Specification ID
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Specification Title/Name
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Version Number
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">Attachment</td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Effective Date
              </td>
              <td className="bg-gray-800 text-white  border px-4 py-2">
                Creation Date
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">Approved By</td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Product Name
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Batch/Lot Number
              </td>
              <td className="bg-gray-800 text-white  border px-4 py-2">
                Product Category
              </td>
              <td className="bg-gray-800 text-white border  px-4 py-2">
                Manufacturer/Supplier
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Description
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Material Grade
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Molecular Formula
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Packaging Requirements
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Storage Conditions
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Shelf Life
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Labeling Requirements
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Test Parameter
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Test Method
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Acceptance Criteria
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Units of Measurement
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Test Frequency
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Control Sample Reference
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Sampling Plan
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Test Method Validation
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Reference Standards
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Result Interpretation
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Stability Criteria
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Re-Testing Interval
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Regulatory Requirements
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Certification
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Deviation Handling
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Audit Trail
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Document Reference
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Revision History
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Attachments
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Comments/Remarks
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Specification Review Frequency
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Specification Expiry
              </td>
              <td className="bg-gray-800 text-white border px-4 py-2">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{index + 1}</td>
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
                <td className="border px-4 py-2">
                  {data.packagingRequirements}
                </td>
                <td className="border px-4 py-2">{data.storageConditions}</td>
                <td className="border px-4 py-2">{data.shelfLife}</td>
                <td className="border px-4 py-2">
                  {data.labelingRequirements}
                </td>

                <td className="border px-4 py-2">{data.testParameter}</td>
                <td className="border px-4 py-2">{data.testMethod}</td>
                <td className="border px-4 py-2">{data.acceptanceCriteria}</td>
                <td className="border px-4 py-2">{data.unitsOfMeasurement}</td>
                <td className="border px-4 py-2">{data.testFrequency}</td>
                <td className="border px-4 py-2">
                  {data.controlSampleReference}
                </td>

                <td className="border px-4 py-2">{data.samplingPlan}</td>
                <td className="border px-4 py-2">
                  {data.testMethodValidation}
                </td>
                <td className="border px-4 py-2">{data.referenceStandards}</td>
                <td className="border px-4 py-2">
                  {data.resultInterpretation}
                </td>
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
                <td className="border px-4 py-2">
                <>
          <FontAwesomeIcon
           icon={faEye}
            className="mr-2 cursor-pointer" 
            onClick={() => onViewDetails(data)} 
            />
          <FontAwesomeIcon
           icon={faPenToSquare} 
           className="mr-2 cursor-pointer" 
           onClick={() => openEditModal(data)}
            />
          <FontAwesomeIcon 
          icon={faTrashCan}
           className="cursor-pointer" 
           onClick={() => onDeleteItem(data.specId)} 
           />
                </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {
        viewdata &&(
          <SpecificationviewModel
           visible={viewdata !== null}
           closeModal={closeViewModal}
           data={viewdata}
           fields={fields}
           title="Specification Details"
           updateStatus={handleStatusUpdate}
          
          />
        )
      }
      
      {
        editModalOpen && (
          <EditModal
            visible={editModalOpen}
            closeModal={closeEditModal}
            data={editModalData}
            onSave={handleEditSave}
          />
        )
      }
      {
        isModalOpen && (
         <AddSPCModal
          visible={isModalOpen}
          closeModal={closeAddModal}
          onAdd ={handleAddSPC}
         />
        )
      }
   
      {/* <SpecificationSpecModal 
       visible={isModalOpen}
       closeModal={closeSpecificationModal}
       handleSubmit={handleModalSubmit}
        /> */}
    </>
  );
};

export default SpecificationSpec;
