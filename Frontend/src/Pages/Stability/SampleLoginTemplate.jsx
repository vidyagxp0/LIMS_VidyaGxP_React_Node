
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CContainer,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CRow,
  CCol,
  CFormSelect,
  CFormCheck,
  CHeader,
  CFooter,
} from "@coreui/react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    templateTitle: "Template 1",
    addedOn: "2024-01-01",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    templateTitle: "Template 2",
    addedOn: "2024-01-02",
    status: "INITIATED",
  },
];

const SampleLoginTemplate = () => {
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
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null)
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
      row.templateTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData); // Set the data for ViewModal
    setIsViewModalOpen(true); // Open the ViewModal
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Template Title", accessor: "templateTitle" },
    { header: "Added On", accessor: "addedOn" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
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


  const handleCardClick = (status) => {
    setStatusFilter(status);
  };


  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,

      sno: initialData.length + index + 1,
      templateTitle: item["Template Title"] || "",
      addedOn: item["Added On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
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
    const [inputValue, setInputValue] = useState(0);
    const [templateTitle, setTemplateTitle] = useState("");

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleAdd = ()=>{
      const newCondition = {
        templateTitle:templateTitle,
        addedOn:"2024-01-02",
        action:[],
      }
      onAdd(newCondition)
    }


    return (
      <CModal alignment="center" visible={visible} onClose={closeModal} size="xl">
        <CModalHeader>
          <CModalTitle>Add Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput className="mb-3" type="text" label="Template Title" placeholder="template title " value={templateTitle} onChange={(e) => setTemplateTitle(e.target.value)} />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox1" label="Reference Protocol No." />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox2" label="Customer" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox3" label="Study Location" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox4" label="Proposed Market" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox5" label="Batch Type" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox6" label="Batch No." />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox7" label="Manufacturing Date" />  
          <CFormCheck className="mb-3" type="checkbox" id="checkbox8" label="Manufactured At" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox9" label="Expiry / Retest Date" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox10" label="Packed At" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox11" label="No. Of API's" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox12" label="Source of API" />
          <label className="mb-3">Auto Detection Required</label>
          <CFormCheck className="mb-3" type="radio" id="AutoDetectionYes" name="AutoDetection" label="Yes" />
          <CFormCheck className="mb-3" type="radio" id="AutoDetectionNo" name="AutoDetection" label="No" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
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

  const EditModal = ({ visible , closeModal,data, onSave }) => {
    const [inputValue, setInputValue] = useState(0);
    const [formData, setFormData] = useState(data);

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

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };


    return (
      <CModal alignment="center" visible={visible} onClose={closeModal} size="xl">
        <CModalHeader>
          <CModalTitle>Add Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput className="mb-3" type="text" label="Template Title" placeholder="template title " name="templateTitle" value={formData?.templateTitle||""} onChange={handleChange} />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox1" label="Reference Protocol No." />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox2" label="Customer" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox3" label="Study Location" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox4" label="Proposed Market" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox5" label="Batch Type" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox6" label="Batch No." />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox7" label="Manufacturing Date" />  
          <CFormCheck className="mb-3" type="checkbox" id="checkbox8" label="Manufactured At" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox9" label="Expiry / Retest Date" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox10" label="Packed At" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox11" label="No. Of API's" />
          <CFormCheck className="mb-3" type="checkbox" id="checkbox12" label="Source of API" />
          <label className="mb-3">Auto Detection Required</label>
          <CFormCheck className="mb-3" type="radio" id="AutoDetectionYes" name="AutoDetection" label="Yes" />
          <CFormCheck className="mb-3" type="radio" id="AutoDetectionNo" name="AutoDetection" label="No" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );

  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sample Login Template</h1>
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
            <ATMButton text="Add Sample LogIn" color="blue" onClick={openModal} />
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

        {isModalOpen && (
          <StatusModal
            visible={isModalOpen}
            closeModal={closeModal}

onAdd={addNewStorageCondition}          />
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
      </div>
    </>
  );

}
export default SampleLoginTemplate;







