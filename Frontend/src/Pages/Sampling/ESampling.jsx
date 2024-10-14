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
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

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
  const [lastStatus, setLastStatus] = useState("Inactive");
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

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
    {
      header: "Sample BarCode",
      accessor: "sampleBarcode",
      Cell: ({ row }) => (
        <img
          src={row.original.sampleBarcode} 
          alt={`Barcode for ${row.original.productMaterialName}`} 
          style={{ height: "40px", width: "40px", objectFit: "contain" }} 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/40";
          }}
        />
      ),
    },
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

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      { ...newCondition, sno: prevData.length + 1, checkbox: false, status: nextStatus },
    ])
    setLastStatus(nextStatus)
    setIsModalOpen(false);
  }

  const StatusModal = ({ visible, closeModal, onAdd }) => {

    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [eSampling, setESampling] = useState({


      samplingConfiguration: [],
      productMaterialName: "",
      noOfContainers: "",
      containersSampled: "",
      samplingConclusion: "",
    });

    const handleRadioChange = (e) => {
      setESampling({ ...eSampling, samplingConclusion: e.target.value });
    };

    const [samplingConfigurationValue, setSamplingConfigurationValue] = useState("");

    const handleValueChange = (event) => {
      setSamplingConfigurationValue(event.target.value);
    }

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
      const today = new Date().toISOString().split("T")[0];
      setCurrentDate(today);
    }, []);

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const addRows = () => {
      setNumRows(inputValue);
    };

    const renderRows = () => {
      const rows = [];
      for (let i = 0; i < numRows; i++) {
        rows.push(
          <CTableRow key={i}>
            <CTableHeaderCell className="mb-3 m-2 flex justify-between itmes center gap-4" scope="row">
              {i + 1}
              <CFormInput className="border-1 border-black" placeholder="Lower"></CFormInput>
              <CFormInput className="border-1 border-black" placeholder="Upper"></CFormInput>
              <CFormInput className="border-1 border-black" placeholder="No. of Containers"></CFormInput>
            </CTableHeaderCell>
            {/* <CTableDataCell className="mb-3 m-2">
            Rack {i + 1}: <input type="text" />{" "}
          </CTableDataCell> */}
          </CTableRow>
        );
      }
      return rows;
    };


    const handleAdd = () => {
      const newCondition = {
        samplingConfiguration: eSampling.samplingConfiguration,
        productMaterialName: eSampling.productMaterialName,
        containersSampled: eSampling.containersSampled,
        noOfContainers: eSampling.noOfContainers,
        samplingConclusion: eSampling.samplingConclusion,
        addedOn: currentDate,
        action: [],
      }
      onAdd(newCondition)
    }

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
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


          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Name"
            placeholder="Product/Material Name"
            // disabled
            value={eSampling.productMaterialName}
            onChange={(e) => setESampling({ ...eSampling, productMaterialName: e.target.value })}
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
            type="number"
            label="Total No. of containers"
            placeholder="Total No. of containers"
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="No. of containers to be sampled"
            placeholder="No. of containers to be sampled"
            value={eSampling.noOfContainers}
            onChange={(e) => setESampling({ ...eSampling, noOfContainers: e.target.value })}
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
            value={eSampling.containersSampled}
            onChange={(e) => setESampling({ ...eSampling, containersSampled: e.target.value })}
          />

          <label className="mb-3">Sampling Conclusion</label>
          <div className="flex gap-3">
            <CFormCheck
              type="radio"
              id="SamplingConclusionPass"
              name="SamplingConclusion"
              label="Pass"
              value="Pass"
              onChange={handleRadioChange}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="SamplingConclusionFail"
              name="SamplingConclusion"
              label="Fail"
              value="Fail"
              onChange={handleRadioChange}
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
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );

  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };

  const EditModal = ({ visible, data, closeModal, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
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
          <CModalTitle>Add E-Sample</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Name"
            placeholder="Product/Material Name"
            value={formData?.productMaterialName || ""}
              onChange={handleChange}
              name="productMaterialName"
          />
          <CFormInput
            className="mb-3"
            type="number"
            label="No. of containers to be sampled"
            placeholder="No. of containers to be sampled"
            value={formData?.noOfContainers || ""}
            onChange={handleChange}
            name="noOfContainers"
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
            value={formData?.containersSampled || ""}
              onChange={handleChange}
              name="containersSampled"
          />

          <label className="mb-3">Sampling Conclusion</label>
          <div className="flex gap-3">
            <CFormCheck
              type="radio"
              id="SamplingConclusionPass"
              name="SamplingConclusion"
              label="Pass"
              value={formData?.samplingConclusion || ""}
              onChange={handleChange}
              // name="samplingConclusion"
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="SamplingConclusionFail"
              name="SamplingConclusion"
              label="Fail"
              value={formData?.samplingConclusion || ""}
              onChange={handleChange}
              // name="samplingConclusion"
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );

  };

  return (
    <>
    <LaunchQMS/>
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
          openEditModal={openEditModal}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition} />
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
      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </>
  );

};

export default ESampling;
