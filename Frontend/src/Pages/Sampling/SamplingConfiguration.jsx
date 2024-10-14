import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, } from "@coreui/react";
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import Table from '../../components/ATM components/Table/Table';
import ImportModal from '../Modals/importModal';
import PDFDownload from '../PDFComponent/PDFDownload ';
import LaunchQMS from '../../components/ReusableButtons/LaunchQMS';

const initialData = [
  {
    checkbox: false,
    sno: 1,
    samplingID: "T001",
    specificationID: "T001",
    sampleType: "Type A",
    productName: "Test Name 1",
    testPlan: "Plan A",
    sampleTemplate: "Template A",
    sampleRule: "Rule A",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    samplingID: "T002",
    specificationID: "T002",
    sampleType: "Type B",
    productName: "Test Name 2",
    testPlan: "Plan B",
    sampleTemplate: "Template B",
    sampleRule: "Rule B",
    status: "Inactive",
  },
];

const SamplingConfiguration = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Active");
  const [editModalData, setEditModalData] = useState(null);

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
      row.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Sampling ID", accessor: "samplingID" },
    { header: "Specification ID", accessor: "specificationID" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product Name", accessor: "productName" },
    { header: "Test Plan", accessor: "testPlan" },
    { header: "Sample Template", accessor: "sampleTemplate" },
    { header: "Sample Rule", accessor: "sampleRule" },
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
      samplingID: item["Sampling ID"] || "",
      specificationID: item["Specification ID"] || "",
      sampleType: item["Sample Type"] || "",
      productName: item["Product Name"] || "",
      testPlan: item["Test Plan"] || "",
      sampleTemplate: item["Sample Template"] || "",
      sampleRule: item["Sample Rule"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);; // Update data state with parsed Excel data
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
    const nextStatus = lastStatus === "Avtive" ? "Inactive" : "Active";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);

  };


  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [samplingConfigurationData, setSamplingConfigurationData] = useState({
      testPlan: "",
      specificationID: "",
      productName: "",
      productMaterialCode: "",
      sampleType: "",
      sampleTemplate: "",
      sampleRule: "",
      samplingTest: "",
      Comment: ""

    })

    const handleAdd = () => {
      const newCondition = {
        samplingID: "00000",
        specificationID: samplingConfigurationData.specificationID,
        sampleType: samplingConfigurationData.sampleType,
        productName: samplingConfigurationData.productName,
        testPlan: samplingConfigurationData.testPlan,
        sampleTemplate: samplingConfigurationData.sampleTemplate,
        sampleRule: samplingConfigurationData.sampleRule,
        action: [],
      }
      onAdd(newCondition)
    }

    return (
      <CModal alignment="center"
        visible={visible}
        onClose={closeModal}
        size="x1">
        <CModalHeader>
          <CModalTitle>Add Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className='mb-3'
            type="select"
            label="Test Plan / Revision No."
            value={samplingConfigurationData.testPlan}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, testPlan: e.target.value })}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />
          <CFormSelect
            className='mb-3'
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            value={samplingConfigurationData.specificationID}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, specificationID: e.target.value })}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />

          <CFormSelect
            className='mb-3'
            type="text"
            label="Product/Material Name"
            placeholder="Product/Material Name"
            value={samplingConfigurationData.productName}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, productName: e.target.value })}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />
          <CFormSelect
            className='mb-3'
            type="text"
            label="Product/Material Code"
            placeholder="Product/Material Code"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
            value={samplingConfigurationData.productMaterialCode}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, productMaterialCode: e.target.value })}
          />
          <CFormSelect
            className='mb-3'
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
            value={samplingConfigurationData.sampleType}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, sampleType: e.target.value })}
          />
          <CFormSelect
            className='mb-3'
            type="select"
            label="Sampling Template"
            options={[
              "Select Test Category",
              { label: "Raw Sampling", value: "Raw Sampling" },
              { label: "Test Temp1", value: "Test Temp1" },
              { label: "Test Temp2", value: "Test Temp2" },
              { label: "Test Temp3", value: "Test Temp3" }
            ]}
            value={samplingConfigurationData.sampleTemplate}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, sampleTemplate: e.target.value })}
          />
          <CFormSelect
            className='mb-3'
            type="select"
            label="Sampling Rule"
            options={[
              "Select Sampling Rule",
              { label: "C2", value: "C2" },
              { label: "Raw sample", value: "Raw sample" },
              { label: "Sample C1", value: "Sample C1" },
              { label: "Sample C2", value: "Sample C2" }
            ]}
            value={samplingConfigurationData.sampleRule}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, sampleRule: e.target.value })}
          />
          <CFormSelect
            className='mb-3'
            type="select"
            label="Sampling Test"
            options={[
              "Select...",
              { label: "No Options", value: "No Options" },

            ]}
            value={samplingConfigurationData.samplingTest}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, samplingTest: e.target.value })}
          />
          <CFormInput
            className='mb-3'
            type="text"
            label="Comment"
            placeholder="Comment"
            value={samplingConfigurationData.Comment}
            onChange={(e) => setSamplingConfigurationData({ ...samplingConfigurationData, Comment: e.target.value })}
          />

        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>Back</CButton>
          <CButton color="primary" onClick={handleAdd}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );
  };


  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [inputValue, setInputValue] = useState(0);
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

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };
    return (
      <CModal alignment="center"
        visible={visible}
        onClose={closeModal}
        size="x1">
        <CModalHeader>
          <CModalTitle>Add Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className='mb-3'
            type="select"
            label="Test Plan / Revision No."
            name='testPlan'
            value={formData?.testPlan || ""}
            onChange={handleChange}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />
          <CFormSelect
            className='mb-3'
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            name='specificationID'
            value={formData?.specificationID || ""}
            onChange={handleChange}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />

          <CFormSelect
            className='mb-3'
            type="text"
            label="Product/Material Name"
            placeholder="Product/Material Name"
            name='productName'
            value={formData?.productName || ""}
            onChange={handleChange}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />
          <CFormSelect
            className='mb-3'
            type="text"
            label="Product/Material Code"
            placeholder="Product/Material Code"
            name='productMaterialCode'
            value={formData?.productMaterialCode || ""}
            onChange={handleChange}
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
          />
          <CFormSelect
            className='mb-3'
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            options={[
              "Select...",
              { label: "TP-010110", value: "TP-010110" },
              { label: "TP-010111", value: "TP-010111" },
              { label: "TP-010112", value: "TP-010112" },
              { label: "TP-010113", value: "TP-010113" }
            ]}
            name='sampleType'
            value={formData?.sampleType || ""}
            onChange={handleChange}
          />
          <CFormSelect
            className='mb-3'
            type="select"
            label="Sampling Template"
            options={[
              "Select Test Category",
              { label: "Raw Sampling", value: "Raw Sampling" },
              { label: "Test Temp1", value: "Test Temp1" },
              { label: "Test Temp2", value: "Test Temp2" },
              { label: "Test Temp3", value: "Test Temp3" }
            ]}
            name='samplingTemplate'
            value={formData?.sampleTemplate || ""}
            onChange={handleChange}
          />
          <CFormSelect
            className='mb-3'
            type="select"
            label="Sampling Rule"
            options={[
              "Select Sampling Rule",
              { label: "C2", value: "C2" },
              { label: "Raw sample", value: "Raw sample" },
              { label: "Sample C1", value: "Sample C1" },
              { label: "Sample C2", value: "Sample C2" }
            ]}
            name='sampleRule'
            value={formData?.sampleRule || ""}
            onChange={handleChange}
          />
          <CFormSelect
            className='mb-3'
            type="select"
            label="Sampling Test"
            options={[
              "Select...",
              { label: "No Options", value: "No Options" },

            ]}
            name='samplingTest'
            value={formData?.samplingTest || ""}
            onChange={handleChange}
          />
          <CFormInput
            className='mb-3'
            type="text"
            label="Comment"
            placeholder="Comment"
            name='Comment'
            value={formData?.Comment || ""}
            onChange={handleChange}
          />

        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>Back</CButton>
          <CButton color="primary" onChange={handleSave}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );
  }

  return (
    <>
    <LaunchQMS/>
      <div className="m-5 mt-3 ">
        <div className="main-head">
          <h4 className="fw-bold">Sampling Configuration</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
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
          <PDFDownload columns={columns} data={filteredData} fileName="Sampling_Configurtion.pdf" title="Sampling Configuration Data" />
            <ATMButton
              text="Import"
              color='pink'
              onClick={handleOpenModals}
            />
            <ATMButton
              text="Add Sampling Configuration"
              color="blue"
              onClick={openModal}
            />
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
        <ImportModal initialData={initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </>
  );
}




export default SamplingConfiguration;
