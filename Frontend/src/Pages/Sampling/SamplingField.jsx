import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
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
      fieldName: "Field 1",
      fieldType: "Type A",
      registeredBy: "User 1",
      registeredOn: "2024-07-01",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      fieldName: "Field 2",
      fieldType: "Type B",
      registeredBy: "User 2",
      registeredOn: "2024-06-30",
      status: "Inactive",
    },

  ];
  

const SamplingField = () => {
    const [data, setData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [viewModalData, setViewModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalsOpen, setIsModalsOpen] = useState(false);
    const [lastStatus, setLastStatus] = useState("Inactive");
    const [editModalData, setEditModalData] = useState(null)
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
        row.fieldName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      { header: "Field Name", accessor: "fieldName" },
      { header: "Field Type", accessor: "fieldType" },
      { header: "Registered By", accessor: "registeredBy" },
      { header: "Registered On", accessor: "registeredOn" },
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
        sno:  index + 1,
        fieldName: item["Field Name"] || "",
        fieldType: item["Field Type"] || "",
        registeredBy: item["Registered By"] || "",
        registeredOn: item["Registered On"] || "",
        status: item["Status"] || "",
      }));
    
      const concatenatedData = [ ...updatedData];
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
      const nextStatus = lastStatus === "Inactive" ? "Active" : "Inactive";
      setData((prevData)=>[
        ...prevData,
        {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
      ])
      setLastStatus(nextStatus)
      setIsModalOpen(false);
    }

    const StatusModal = ({visible , closeModal,onAdd}) => {
      const [numRows, setNumRows] = useState(0);
      const [inputValue, setInputValue] = useState(0);
      const [samplingField, setSamplingField] = useState({
        fieldName: "",
        fieldType: [],
      });
      const handleAdd = ()=>{
        const newCondition = {
          fieldName:samplingField.fieldName,
          fieldType:samplingField.fieldType,
          registeredBy:"USER0!",
          registeredOn:"2020-20-20",
          action:[],
        }
        onAdd(newCondition)
      }
      return (
        <CModal alignment="center" visible={visible} onClose={closeModal}>
            <CModalHeader>
                <CModalTitle>Add Fields</CModalTitle>
            </CModalHeader>
            <CModalBody>

                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Field Name"
                    placeholder="Sample Type Name"
                    value={samplingField.fieldName}
                    onChange={(e)=>setSamplingField({...samplingField , fieldName:e.target.value})}
                />
                <CFormSelect
                    className="mb-3"
                    type="select"
                    label="Field Type"
                    options={[
                        "Select",
                        { label: "Radio Button", value: "Radio Button" },
                        { label: "Label", value: "Label" },
                        { label: "Entry Field", value: "Entry Field" },
                        { label: "Date Field", value: "Date Field" }
                    ]}
                    value={samplingField.fieldType}
                    onChange={(e)=>setSamplingField({...samplingField , fieldType:e.target.value})}
                />

            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={closeModal}>Back</CButton>
                <CButton color="primary" onClick={handleAdd}>Submit</CButton>
            </CModalFooter>
        </CModal>
    );
  
}
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

  const EditModal = ({visible , closeModal,data, onSave}) => {
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [formData, setFormData] = useState(data);
  
    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };
  
    const addRows = () => {
      setNumRows(inputValue);
    };
    
    useEffect(() => {
      if(data){
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
    <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
            <CModalTitle>Add Fields</CModalTitle>
        </CModalHeader>
        <CModalBody>

            <CFormInput
                className="mb-3"
                type="text"
                label="Field Name"
                placeholder="Sample Type Name"
                value={formData?.fieldName||""}
                onChange={handleChange}
                name="fieldName"
            />
            <CFormSelect
                className="mb-3"
                type="select"
                label="Field Type"
                options={[
                    "Select",
                    { label: "Radio Button", value: "Radio Button" },
                    { label: "Label", value: "Label" },
                    { label: "Entry Field", value: "Entry Field" },
                    { label: "Date Field", value: "Date Field" }
                ]}
                value={formData?.fieldType}
                onChange={handleChange}
                name="fieldType"
            />

        </CModalBody>
        <CModalFooter>
            <CButton color="light" onClick={closeModal}>Back</CButton>
            <CButton color="primary" onClick={handleSave}>Submit</CButton>
        </CModalFooter>
    </CModal>
);

}
    return (
        <>
        <LaunchQMS/>
            <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">Sampling Field</h4>
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
          <PDFDownload columns={columns} data={filteredData} fileName="Sampling_Fields.pdf" title="Sampling Fields Data" />
            <ATMButton 
            text="Import"
            color="pink"
            onClick={handleOpenModals}
             />
            <ATMButton
              text="Add Sample Field"
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
        <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition}/>
      )}

{isModalsOpen && (
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
       <EditModal
        visible={Boolean(editModalData)}
        closeModal={closeEditModal}
        data={editModalData}
        onSave={handleEditSave}
      />
        </>
    );
};


export default SamplingField;
