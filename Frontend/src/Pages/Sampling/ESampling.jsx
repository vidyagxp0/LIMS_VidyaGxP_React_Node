import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    productMaterialName: "Material 1",
    containersSampled: 5,
    addedOn: "2024-07-01",
    noOfContainers: 10,
    samplingConclusion: "Conclusion 1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    productMaterialName: "Material 2",
    containersSampled: 3,
    addedOn: "2024-06-30",
    noOfContainers: 8,
    samplingConclusion: "Conclusion 2",
    status: "APPROVED",
  },
];

const ESampling = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.productMaterialName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Product/Material Name", accessor: "productMaterialName" },
    { header: "Containers Sampled", accessor: "containersSampled" },
    { header: "Added On", accessor: "addedOn" },
    { header: "No of Containers", accessor: "noOfContainers" },
    { header: "Sampling Conclusion", accessor: "samplingConclusion" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => {
              onViewDetails(row), navigate("/testResultsDetails");
            }}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      productMaterialName: item["Product/Material Name"] || "",
      containersSampled: item["Containers Sampled"] || "",
      addedOn: item["Added On"] || "",
      noOfContainers: item["No of Containers"] || "",
      samplingConclusion: item["Sampling Conclusion"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">E-Sampling</h4>
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
          <PDFDownload columns={columns} data={filteredData} fileName="E_Sampling.pdf" title="E Sampling Data" />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add E-Sampling" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </>
  );
};

const StatusModal = (_props) => {
  const [samplingConfigurationValue, setSamplingConfigurationValue] = useState("");

  const handleValueChange = (event) => {
    setSamplingConfigurationValue(event.target.value);
  }

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="xl"
    >
      <CModalHeader>
        <CModalTitle>Add E-Sample</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormSelect
          className="mb-3"
          type="select"
          label="Sampling Configuration"
          value={samplingConfigurationValue}
          onChange={handleValueChange}
          options={[

            { label: "SC-072023-0000001", value: "SC-072023-0000001" },
            { label: "SC-072023-0000002", value: "SC-072023-0000002" },
            { label: "SC-072023-0000003", value: "SC-072023-0000003" },
            { label: "SC-072023-0000004", value: "SC-072023-0000004" },
            { label: "SC-072023-0000005", value: "SC-072023-0000005" },
            { label: "SC-072023-0000006", value: "SC-072023-0000006" },
            { label: "SC-072023-0000007", value: "SC-072023-0000007" },
            { label: "SC-072023-0000008", value: "SC-072023-0000008" },

          ]}
        />
        {
          samplingConfigurationValue === "SC-072023-0000001" && (

            <>
              <CFormInput
                className="mb-3"
                type="text"
                label="Batch No."
                placeholder="Batch No."
              />

              <CFormInput
                className="mb-3"
                type="text"
                label="Container Name"
                placeholder="Container Name"
              />
            </>
          )
        }

        {
          samplingConfigurationValue === "SC-072023-0000003" && (

            <>
              <CFormInput
                className="mb-3"
                type="date"
                label="Manufacturing Date"
                placeholder="Manufacturing Date"
              />

              <label className="mb-3">Cracks Observed</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="NA"
                />
              </div>

            </>
          )
        }

        {
          samplingConfigurationValue === "SC-072023-0000004" && (

            <>
              <CFormInput
                className="mb-3"
                type="date"
                label="Manufacturing Date"
                placeholder="Manufacturing Date"
              />

              <label className="mb-3">Cracks Observed</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="NA"
                />

              </div>
              <CFormInput
                className="mb-3"
                type="text"
                label="Batch No."
                placeholder="Batch No."
              />

            </>
          )
        }

        {
          samplingConfigurationValue === "SC-072023-0000005" && (

            <>
              <CFormInput
                className="mb-3"
                type="text"
                label="Room is Clean"
                placeholder="Room is Clean"
              />
              <CFormInput
                className="mb-3"
                type="date"
                label="Manufacturing Date"
                placeholder="Manufacturing Date"
              />

              <label className="mb-3">Cracks Observed</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="NA"
                />

              </div>


            </>
          )
        }

        {
          samplingConfigurationValue === "SC-072023-0000006" && (

            <>
              <CFormInput
                className="mb-3"
                type="text"
                label="Room is Clean"
                placeholder="Room is Clean"
              />
              <CFormInput
                className="mb-3"
                type="date"
                label="Manufacturing Date"
                placeholder="Manufacturing Date"
              />

              <label className="mb-3">Cracks Observed</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="cracksObserved"
                  name="cracksObserved"
                  label="NA"
                />

              </div>


            </>
          )
        }

{
          samplingConfigurationValue === "SC-072023-0000007" && (

            <>
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity"
                placeholder="Sample quantity"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Approx Quantity taken from each container"
                placeholder="Approx Quantity taken from each container"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for identification"
                placeholder="Sample quantity for identification"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for chemical analysis"
                placeholder="Sample quantity for chemical analysis"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for micro analysis"
                placeholder="Sample quantity for micro analysis"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for control sample"
                placeholder="Sample quantity for control sample"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Appearance"
                placeholder="Appearance"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Color"
                placeholder="Color"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Foreign Particle"
                placeholder="Foreign Particle"
              />
              

              


            </>
          )
        }

{
          samplingConfigurationValue === "SC-072023-0000008" && (

            <>
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity"
                placeholder="Sample quantity"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Approx Quantity taken from each container"
                placeholder="Approx Quantity taken from each container"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for identification"
                placeholder="Sample quantity for identification"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for chemical analysis"
                placeholder="Sample quantity for chemical analysis"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for micro analysis"
                placeholder="Sample quantity for micro analysis"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Sample quantity for control sample"
                placeholder="Sample quantity for control sample"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Appearance"
                placeholder="Appearance"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Color"
                placeholder="Color"
              />
              
              <CFormInput
                className="mb-3"
                type="text"
                label="Foreign Particle"
                placeholder="Foreign Particle"
              />
              <CFormInput
                className="mb-3"
                type="text"
                label="Pharmacopoeial Status"
                placeholder="Pharmacopoeial Status"
              />
              
              <label className="mb-3">Storage Condition</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="storageCondition"
                  name="storageCondition"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="storageCondition"
                  name="storageCondition"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="storageCondition"
                  name="storageCondition"
                  label="NA"
                />
              </div>

              <label className="mb-3">Packing Condition</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="packingCondition"
                  name="packingCondition"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="packingCondition"
                  name="packingCondition"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="packingCondition"
                  name="packingCondition"
                  label="NA"
                />
              </div>

              <CFormInput
                className="mb-3"
                type="text"
                label="Differential Pressure of romm"
                placeholder="Differential Pressure of romm"
              />
              <CFormInput
                className="mb-3"
                type="text"
                label="Temperature ( Not more than 25deg)"
                placeholder="Temperature ( Not more than 25deg)"
              />
              <CFormInput
                className="mb-3"
                type="text"
                label="Relative Humidity (Not more than 60%)"
                placeholder="Relative Humidity (Not more than 60%)"
              />
               <label className="mb-3">Physical condition of container</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="physicalConditionOfContainer"
                  name="physicalConditionOfContainer"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="physicalConditionOfContainer"
                  name="physicalConditionOfContainer"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="physicalConditionOfContainer"
                  name="physicalConditionOfContainer"
                  label="NA"
                />
              </div>
               <label className="mb-3">Balance Verification/calibration status</label>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  id="balanceVerificationCalibrationStatus"
                  name="balanceVerificationCalibrationStatus"
                  label="Yes"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="balanceVerificationCalibrationStatus"
                  name="balanceVerificationCalibrationStatus"
                  label="No"
                />
                <CFormCheck
                  className="mb-3"
                  type="radio"
                  id="balanceVerificationCalibrationStatus"
                  name="balanceVerificationCalibrationStatus"
                  label="NA"
                />
              </div>
            </>
          )
        }

        <CFormInput
          className="mb-3"
          type="text"
          label="Product/Material Name"
          placeholder="Product/Material Name"
          disabled
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Test Plan"
          placeholder="Test Plan"
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="A.R. No"
          options={[
            "Select",
            { label: "ARPC010110", value: "ARPC010110" },
            { label: "ARPC010111", value: "ARPC010111" },
            { label: "ARPC010112", value: "ARPC010112" },
            { label: "ARPC010113", value: "ARPC010113" },
          ]}
        />

        <CFormInput
          className="mb-3"
          type="number"
          label="Total No. of containers"
          placeholder="Total No. of containers"
        />
        <CFormInput
          className="mb-3"
          type="number"
          label="No. of containers to be sampled"
          placeholder="No. of containers to be sampled"
        />
        <CFormSelect
          className="mb-3"
          type="select"
          label="Containers sampled"
          options={[
            "Select",
            {
              label: "No. Of Sampled Containers",
              value: "No. Of Sampled Containers",
            },
          ]}
        />

        <label className="mb-3">Sampling Conclusion</label>
        <div className="flex gap-3">
          <CFormCheck
            type="radio"
            id="SamplingConclusionPass"
            name="SamplingConclusion"
            label="Pass"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="SamplingConclusionFail"
            name="SamplingConclusion"
            label="Fail"
          />
        </div>

        <label className="mb-3">Check point passed</label>
        <div className="flex gap-3">
          <CFormCheck
            type="radio"
            id="CheckPointPassedYes"
            name="CheckPointPassed"
            label="Yes"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="CheckPointPassedNo"
            name="CheckPointPassed"
            label="No"
          />
        </div>


        <CFormInput
          className="mb-3"
          type="file"
          label="Document If Any"
          placeholder="Choose File"
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Comments"
          placeholder="Comment here..."
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Initiated By"
          placeholder="Admin"
          disabled
        />
        <CFormInput
          className="mb-3"
          type="date"
          label="Initiated On"
          value={currentDate}
          readOnly
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ESampling;
