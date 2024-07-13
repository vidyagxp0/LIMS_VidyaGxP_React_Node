/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
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
            onClick={() => openEditModal(row.original)}
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
      sno: index + 1,
      chamberID: item["Chamber ID"] || "",
      description: item["Description"] || "",
      makeModel: item["Make/ Model"] || "",
      serialNo: item["Serial No."] || "",
      location: item["Location"] || "",
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
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [chamberId, setChamberId] = useState("");
    const [description, setDescription] = useState("");
    const [makeModel, setMakeModel] = useState("");
    const [serialNo, setSerialNo] = useState("");
    const [location, setLocation] = useState("");
    const [comments, setComments] = useState("");
    const [stabilityStorageCondition, setStabilityStorageCondition] =
      useState("");
    const [numberOfShelfs, setNumberOfShelfs] = useState("");
    const [maximunNumberOfShelfs, setMaximunNumberOfShelfs] = useState("");
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
            <CTableHeaderCell className="mb-3" scope="row">
              {i + 1}
            </CTableHeaderCell>
            <CTableDataCell className="mb-3">
              Rack {i + 1}: <input type="text" />{" "}
            </CTableDataCell>
          </CTableRow>
        );
      }
      return rows;
    };

    const handleAdd = () => {
      const newCondition = {
        chamberID: chamberId,
        description: description,
        makeModel: makeModel,
        serialNo: serialNo,
        location: location,
        action: [],
      };
      onAdd(newCondition);
    };

    return (
      <>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
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
              value={chamberId}
              onChange={(e) => setChamberId(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              placeholder="Enter Description "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Make / Model"
              placeholder="Make / Model "
              value={makeModel}
              onChange={(e) => setMakeModel(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              placeholder="Serial Number "
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
            />
            <CFormInput
              type="text"
              label="Location"
              placeholder="Location "
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <CFormTextarea
              type="text"
              label="Comments"
              placeholder=""
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="select"
              label="Stability Storage Condition"
              placeholder="Select... "
              value={stabilityStorageCondition}
              onChange={(e) => setStabilityStorageCondition(e.target.value)}
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
              value={numberOfShelfs}
              onChange={(e) => setNumberOfShelfs(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Maximum No. Of Positions For Shelf"
              placeholder="0"
              value={maximunNumberOfShelfs}
              onChange={(e) => setMaximunNumberOfShelfs(e.target.value)}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleAdd}>
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </>
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
    const [numRows, setNumRows] = useState(0);
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

    const addRows = () => {
      setNumRows(inputValue);
    };

    const renderRows = () => {
      const rows = [];
      for (let i = 0; i < numRows; i++) {
        rows.push(
          <CTableRow key={i}>
            <CTableHeaderCell className="mb-3" scope="row">
              {i + 1}
            </CTableHeaderCell>
            <CTableDataCell className="mb-3">
              Rack {i + 1}: <input type="text" />{" "}
            </CTableDataCell>
          </CTableRow>
        );
      }
      return rows;
    };
    return (
      <>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
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
              name="chamberID"
              value={formData?.chamberID || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              placeholder="Enter Description "
              name="description"
              value={formData?.description || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Make / Model"
              placeholder="Make / Model "
              name="makeModel"
              value={formData?.makeModel || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              placeholder="Serial Number "
              name="serialNo"
              value={formData?.serialNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Location"
              placeholder="Location "
              name="location"
              value={formData?.location || ""}
              onChange={handleChange}
            />
            <CFormTextarea
              type="text"
              label="Comments"
              placeholder=""
              name="comments"
              value={formData?.comments || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="select"
              label="Stability Storage Condition"
              placeholder="Select... "
              name="stabilityStorageCondition"
              value={formData?.stabilityStorageCondition || ""}
              onChange={handleChange}
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
              name="numberOfShelfs"
              value={formData?.numberOfShelfs || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Maximum No. Of Positions For Shelf"
              placeholder="0"
              name="maximunNumberOfShelfs"
              value={formData?.maximunNumberOfShelfs || ""}
              onChange={handleChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>
              Update
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Storage Chamber"
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
      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
        />
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
      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};
export default StorageChamber;
