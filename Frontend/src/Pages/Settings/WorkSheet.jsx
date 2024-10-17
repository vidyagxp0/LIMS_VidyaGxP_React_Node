
import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faPenToSquare,faTrashCan,} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import WorkSheetModal from "../Modals/WorkSheetModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import ReactQuill from "react-quill";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import PDFDownload from "../PDFComponent/PDFDownload .jsx"


const initialData = [
  {
    checkbox: false,
    sno: 1,
    SequenceNumber: "Associate 1",
    WorksheetName: "BA-001",
    ProductName: "City A",
    GtpNumber: "State A",
    MethodValidationNo: "Country A",
    StandardPreparation: "12345",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    SequenceNumber: "Associate 2",
    WorksheetName: "BA-002",
    ProductName: "City B",
    GtpNumber: "State B",
    MethodValidationNo: "Country B",
    StandardPreparation: "23456",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    SequenceNumber: "Associate 3",
    WorksheetName: "BA-003",
    ProductName: "City C",
    GtpNumber: "State C",
    MethodValidationNo: "Country C",
    StandardPreparation: "34567",
    status: "REINITIATED",
  },

];



const WorkSheet = () => {
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
  const [lastStatus, setLastStatus] = useState("INACTIVE");
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

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

  const EditModal = ({ visible, closeModal, data, onSave }) => {
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

  // const [description, setDescription] = useState("");

    const [leftArray, setLeftArray] = useState(["Description"]);
    const [rightArray, setRightArray] = useState([]);
    const moveRight = () => {
      let leftElement = document.getElementsByClassName("check-left");
      for (let index = 0; index < leftElement.length; index++) {
        if (leftElement[index].checked) {
          let data = leftElement[index].value;
          let left = leftArray.filter((value) => value !== data);
          setLeftArray(left);
          rightArray.push(data);
          setRightArray([...rightArray]);
          break; // Important
        }
      }
    };
  
    const moveLeft = () => {
      let rightElement = document.getElementsByClassName("check-right");
      for (let index = 0; index < rightElement.length; index++) {
        if (rightElement[index].checked) {
          let data = rightElement[index].value;
          let right = rightArray.filter((value) => value !== data);
          setRightArray(right);
          leftArray.push(data);
          setLeftArray([...leftArray]);
          break; // Important
        }
      }
    };
  
    const clicked = (event) => {
      let checkboxes = document.querySelectorAll(".check-left, .check-right");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      let allLabels = document.querySelectorAll(".labels");
      allLabels.forEach((label) => {
        label.classList.remove("clicked");
      });
  
      let label = event.target;
      label.classList.add("clicked");
      label.checked = true;
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Worksheets</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information about Worksheet</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Type"
            placeholder="Worksheet"
            // readOnly
            value={formData?.worksheetType || ""}
            onChange={handleChange}
            name="worksheetType"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            value={formData?.WorksheetName || ""}
              onChange={handleChange}
              name="WorksheetName"
          />
           <CFormInput
          className="mb-3"
          type="text"
          label="Product Name"
          placeholder="Product Name"
          value={formData?.ProductName || ""}
          onChange={handleChange}
          name="ProductName"
        />
          <label htmlFor="drag-drop" className="">
            User Defined Worksheet fields
          </label>
          <div className="d-flex" id="drag-drop">
            <div className="w-100 m-3">
              <h5>Available</h5>
              <div
                className="shadow p-2 rounded border overflow-y-auto"
                style={{ height: "350px" }}
              >
                <ul className="list-group">
                  {leftArray.map((data) => (
                    <li
                      key={data}
                      className="bg-light rounded my-1 px-3 py-1 text-dark"
                    >
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-left d-none"
                      />
                      <label
                        className="labels cursor-pointer bg-light"
                        htmlFor={data}
                        onClick={clicked}
                      >
                        {data}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="m-auto justify-content-center">
              <button
                className="btn shadow py-1 px-3 mt-5 text-warning fs-4"
                onClick={moveRight}
              >
                <TiArrowRightThick />
              </button>
              <button
                className="btn shadow py-1 px-3 mt-2 text-warning fs-4"
                onClick={moveLeft}
              >
                <TiArrowLeftThick />
              </button>
            </div>
            <div className="w-100 m-3">
              <h5>Selected</h5>
              <div
                className="shadow p-2 rounded border overflow-y-auto"
                style={{ height: "350px" }}
              >
                <ul className="list-group">
                  {rightArray.map((data) => (
                    <li
                      key={data}
                      className="bg-light rounded my-1 px-3 py-1 text-dark"
                    >
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-right d-none"
                      />
                      <label
                        className="labels cursor-pointer bg-light"
                        htmlFor={data}
                        onClick={clicked}
                      >
                        {data}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <h5>Uniformity of Dosage Units:</h5>
          <CFormInput
            className="mb-3"
            type="text"
            label="GTP No:"
            placeholder="GTP No"
            value={formData?.GtpNumber || ""}
              onChange={handleChange}
              name="GtpNumber"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Method Validation No:"
            placeholder="Method Validation No"
            value={formData?.MethodValidationNo || ""}
              onChange={handleChange}
              name="MethodValidationNo"
          />
          <div className="mb-3">
            <label>Description</label>
            <ReactQuill
              theme="snow"
              // value={description}
              // onChange={setDescription}
              value={formData?.Description || ""}
              onChange={handleChange}
              name="Description"
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleSave}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );
  };

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
      row.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData); 
    setIsViewModalOpen(true); 
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      SequenceNumber: item["Sequence Number"] || "",
      WorksheetName: item["Worksheet Name"] || "",
      ProductName: item["Product Name"] || "",
      GtpNumber: item["Gtp Number"] || "",
      MethodValidationNo: item["Method Validaion No."] || "",
      StandardPreparation: item["Standard Preparation"] || "",
        status: item["Status"] || "",
      }));

      const concatenateData = [...updatedData];
      setData(concatenateData); // Update data state with parsed Excel data
      setIsModalsOpen(false); // Close the import modal after data upload
    };


  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sequence Number", accessor: "SequenceNumber" },
    { header: "Worksheet Name", accessor: "WorksheetName" },
    { header: "Product Name", accessor: "ProductName" },
    { header: "Gtp Number", accessor: "GtpNumber" },
    { header: "Method Validaion No.", accessor: "MethodValidationNo" },
    { header: "Standard Preparation", accessor: "StandardPreparation" },
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
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
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

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleModalSubmit = (worksheet) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === worksheet.sno ? worksheet : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          WorksheetName:worksheet.worksheetName,
          WorksheetType:worksheet.worksheetType,
          ProductName: worksheet.worksheetProduct,
          GtpNumber: worksheet.gtpNo,
          MethodValidationNo:worksheet.methodValidationNo,
          Description:worksheet.description,
          SequenceNumber: "Associate 1",
          StandardPreparation: "12345",
          // AddedOn: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Worksheets</h1>
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
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
        <PDFDownload columns={columns} data = {filteredData} title="Worksheet" fileName="Worksheet.pdf" />

        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Worksheet" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}

      />
      <WorkSheetModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}

      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
       {isModalsOpen && (
        <ImportModal
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
    </div>
  );
};

export default WorkSheet;
