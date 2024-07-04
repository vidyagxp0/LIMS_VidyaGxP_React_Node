import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
    CButton,
    CCol,
    CContainer,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from "@coreui/react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { Button } from "react-bootstrap";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    chamberID: "CH001",
    description: "Description 1",
    makeModel: "Model A",
    serialNo: "S001",
    location: "Location A",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    chamberID: "CH002",
    description: "Description 2",
    makeModel: "Model B",
    serialNo: "S002",
    location: "Location B",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    chamberID: "CH003",
    description: "Description 3",
    makeModel: "Model C",
    serialNo: "S003",
    location: "Location C",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    chamberID: "CH004",
    description: "Description 4",
    makeModel: "Model D",
    serialNo: "S004",
    location: "Location D",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    chamberID: "CH005",
    description: "Description 5",
    makeModel: "Model E",
    serialNo: "S005",
    location: "Location E",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    chamberID: "CH006",
    description: "Description 6",
    makeModel: "Model F",
    serialNo: "S006",
    location: "Location F",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    chamberID: "CH007",
    description: "Description 7",
    makeModel: "Model G",
    serialNo: "S007",
    location: "Location G",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    chamberID: "CH008",
    description: "Description 8",
    makeModel: "Model H",
    serialNo: "S008",
    location: "Location H",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    chamberID: "CH009",
    description: "Description 9",
    makeModel: "Model I",
    serialNo: "S009",
    location: "Location I",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    chamberID: "CH010",
    description: "Description 10",
    makeModel: "Model J",
    serialNo: "S010",
    location: "Location J",
    status: "REJECTED",
  },
];


const StorageChamber = () => {
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
      row.chamberID.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Chamber ID", accessor: "chamberID" },
    { header: "Description", accessor: "description" },
    { header: "Make/ Model", accessor: "makeModel" },
    { header: "Serial No.", accessor: "serialNo" },
    { header: "Location", accessor: "location" },
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
      chamberID: item["Chamber ID"] || "",
      description: item["Description"] || "",
      makeModel: item["Make/ Model"] || "",
      serialNo: item["Serial No."] || "",
      location: item["Location"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...data, ...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsImportModalOpen(false); // Close the import modal after data upload
  };
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Storage Chamber</h1>
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
          <SearchBar value={searchQuery} onChange={setSearchQuery}/>
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
          <ATMButton text="Add Storage Chamber" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onDelete={handleDelete}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
      />
    
      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
        
        />
      )}
       {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};

const StatusModal = (_props) => {
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
  
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
            <CTableHeaderCell className="mb-3" scope="row">{i + 1}</CTableHeaderCell>
            <CTableDataCell className="mb-3">Rack {i + 1}: <input type="text" /> </CTableDataCell>
          </CTableRow>
        );
      }
      return rows;
    };
  
    return (
      <>
        <CModal
          alignment="center"
          visible={_props.visible}
          onClose={_props.closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Storage Chamber</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber ID"
              placeholder="Chamber Id "
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              placeholder="Enter Description "
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Make / Model"
              placeholder="Make / Model "
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              placeholder="Serial Number "
            />
            <CFormInput type="text" label="Location" placeholder="Location " />
            <CFormTextarea type="text" label="Comments" placeholder="" />
            <CFormInput
              className="mb-3"
              type="select"
              label="Stability Storage Condition"
              placeholder="Select... "
            />
  
            <CContainer>
              <CFormLabel htmlFor="numRowsInput">Number of Racks</CFormLabel>
              <CFormInput
                className="mb-3"
                type="number"
                id="numRowsInput"
                value={inputValue}
                onChange={handleInputChange}
                min="0"
                placeholder="Number of Racks"
              />
              <div className="py-4 mb-3">
                <Button className="bg-primary" onClick={addRows}>
                  Add Rows
                </Button>
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Sno.</CTableHeaderCell>
                      <CTableHeaderCell>
                        Number of Shelfs Per Rack
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody className="mb-3">{renderRows()}</CTableBody>
                </CTable>
              </div>
            </CContainer>
  
            <CFormInput
              className="mb-3"
              type="text"
              label="Number Of Shelfs"
              placeholder="Number Of Shelfs "
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Maximum No. Of Positions For Shelf"
              placeholder="0"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={_props.closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white">Submit</CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

export default StorageChamber;


