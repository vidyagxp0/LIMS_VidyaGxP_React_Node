import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
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
    uniqueCode: "UC001",
    description: "Description for UC001",
    numberofRanges: 5,
    updatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    uniqueCode: "UC002",
    description: "Description for UC002",
    numberofRanges: 10,
    updatedAt: "2024-06-30",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 2,
    uniqueCode: "UC002",
    description: "Description for UC002",
    numberofRanges: 10,
    updatedAt: "2024-06-30",
    status: "Inactive",
  },
];

const SamplingRule = () => {
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
      row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "Description", accessor: "description" },
    { header: "Number of Ranges", accessor: "numberofRanges" },
    { header: "Updated At", accessor: "updatedAt" },
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
      uniqueCode: item["Unique Code"] || "",
      description: item["Description"] || "",
      numberofRanges: item["Number of Ranges"] || "",
      updatedAt: item["Updated At"] || "",
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
  const [samplingRuleName, setSamplingRuleName] = useState({
    samplingName: "",
    uniqueCode: "",
    numberofRanges: ""
  });

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

  const handleAdd = ()=>{
    const newCondition = {
      description:"jhjj",
      uniqueCode:samplingRuleName.uniqueCode,
      numberofRanges:samplingRuleName.numberofRanges,
      updatedAt:"2020-2-20",
      action:[],
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
        <CModalTitle>Add Rule</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className="mb-3"
          type="text"
          label="Sampling Rule Name"
          placeholder="Sampling Rule Name"
          value={samplingRuleName.samplingName}
          onChange={(e)=>setSamplingRuleName({...samplingRuleName , samplingName:e.target.value})}
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Unique Code"
          placeholder="Unique Code"
          value={samplingRuleName.uniqueCode}
          onChange={(e)=>setSamplingRuleName({...samplingRuleName , uniqueCode:e.target.value})}
        />

        <CFormInput
          className="mb-3"
          type="number"
          label="Number of Ranges"
          placeholder="Number of Ranges"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
        />
        <CButton color="primary" onClick={addRows}>
          Add Range
        </CButton>
      </CModalBody>
      <CTableBody className="mb-3">{renderRows()}</CTableBody>
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

  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={closeModal}
      size="xl"
    >
      <CModalHeader>
        <CModalTitle>Add Rule</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CFormInput
        className="mb-3"
        type="text"
        label="Sampling Rule Name"
        placeholder="Sampling Rule Name"
      />

        <CFormInput
          className="mb-3"
          type="text"
          label="Unique Code"
          placeholder="Unique Code"
          value={formData?.uniqueCode||""}
          onChange={handleChange}
          name="uniqueCode"
        />

        <CFormInput
          className="mb-3"
          type="number"
          label="Number of Ranges"
          placeholder="Number of Ranges"
          value={inputValue}
          onChange={handleInputChange}
         min="0"
        />
        <CButton color="primary" onClick={addRows}>
          Add Range
        </CButton>
      </CModalBody>
      <CTableBody className="mb-3">{renderRows()}</CTableBody>
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
    <div className="m-5 mt-3 ">
      <div className="main-head">
        <h4 className="fw-bold">Sampling Rule</h4>
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
        <PDFDownload columns={columns} data={filteredData} fileName="Sampling_Rule.pdf" title="Sampling Rule Data" />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Sampling Rule"
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
      <ImportModal
        initialData={initialData}
        isOpen={isModalsOpen}
        onClose={handleCloseModals}
        columns={columns}
        onDataUpload={handleExcelDataUpload}
      />
    )}{editModalData && (
      <EditModal
        visible={Boolean(editModalData)}
        closeModal={closeEditModal}
        data={editModalData}
        onSave={handleEditSave}
      />
    )}
  </>
)
}

export default SamplingRule;
