import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import "./SamplingTemplate.css";
import React, { useEffect, useState } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
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
    templateName: "Template 1",
    uniqueCode: "UC001",
    sampleType: "Type A",
    addedOn: "2024-07-01",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    templateName: "Template 2",
    uniqueCode: "UC002",
    sampleType: "Type B",
    addedOn: "2024-06-30",
    status: "APPROVED",
  },
];

const SamplingTemplate = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
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
      row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Template Name", accessor: "templateName" },
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "Sample Type", accessor: "sampleType" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,

      sno: initialData.length + index + 1,
      templateName: item["Template Name"] || "",
      uniqueCode: item["Unique Code"] || "",
      sampleType: item["Sample Type"] || "",
      addedOn: item["Added On"] || "",
      status: item["Status"] || "",
      action: null, // Assuming action data is not provided in the Excel data
    }));

    // Assuming 'data' and 'setData' are state variables holding your table data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

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


  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "INITIATED" ? "APPROVED" : "INITIATED";
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

    const currentDate = new Date().toISOString().split("T")[0]

    const [SamplingTemplate, setSamplingTemplate] = useState({
      templateName: "",
      uniqueCode: "",
      sampleType: [],
    })
    const [headerRows, setHeaderRows] = useState(0);
    const [footerRows, setFooterRows] = useState(0);
    const [headerColumns, setHeaderColumns] = useState(1);
    const [footerColumns, setFooterColumns] = useState(1);

    const handleAdd = () => {
      const newCondition = {
        addedOn: currentDate,
        templateName: SamplingTemplate.templateName,
        uniqueCode: SamplingTemplate.uniqueCode,
        sampleType: SamplingTemplate.sampleType,
        action: [],
      }
      onAdd(newCondition);
    }
    const handleHeaderRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setHeaderRows(value);
    };

    const handleHeaderColumnsChange = (e) => {
      setHeaderColumns(parseInt(e.target.value, 10));
    };

    const handleFooterRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setFooterRows(value);
    };

    const handleFooterColumnsChange = (e) => {
      setFooterColumns(parseInt(e.target.value, 10));
    };

    const renderTable = (rows, columns) => {
      const tableRows = [];
      for (let i = 0; i < rows; i++) {
        const tableColumns = [];
        for (let j = 0; j < columns; j++) {
          tableColumns.push(
            <td key={j} className="flex gap-4">
              <CFormInput type="text" placeholder={`Lower Count `} />

              <CFormSelect
                className="mb-2"
                options={[
                  {
                    label: "Select Field",
                    value: "1",
                  },
                ]}
              />
            </td>
          );
        }
        tableRows.push(<tr key={i}>{tableColumns}</tr>);
      }
      return tableRows;
    };

    const [leftArray, setLeftArray] = useState([
      "Change Control",
      "CAPA",
      "Internal Audit",
      "External Audit",
      "Initiator",
      "SQM",
      "CTMS",
      "Calendar",
      "EHS",
      "Environment",
      "Documents",
      "Deviation",
    ]);

    const [rightArray, setRightArray] = useState([
      "Inspections",
      "Audit",
      "Refference",
      "CCTT",
    ]);

    const moveRight = () => {
      let leftElement = document.getElementsByClassName("check-left");
      for (let index = 0; index < leftElement.length; index++) {
        if (leftElement[index].checked) {
          let data = leftElement[index].value;
          let left = leftArray.filter((value) => value !== data);
          setLeftArray(left);
          rightArray.push(data);
          setRightArray(rightArray);
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
          setLeftArray(leftArray);
          break; // Important
        }
      }
    };

    const clicked = () => {
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
          <CModalTitle>Add Sampling template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="text-muted">Add information of Sampling template</p>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Template Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Template Name"
              value={SamplingTemplate?.templateName}
              onChange={(e) => setSamplingTemplate({ ...SamplingTemplate, templateName: e.target.value })}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Unique Code
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Unique Code"
              value={SamplingTemplate?.uniqueCode}
              onChange={(e) => setSamplingTemplate({ ...SamplingTemplate, uniqueCode: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Sample Type
            </label>
            <select className="form-select" aria-label="Default select example"
              value={SamplingTemplate?.sampleType}
              onChange={(e) => setSamplingTemplate({ ...SamplingTemplate, sampleType: e.target.value })}
            >
              <option selected>Select...</option>
              <option value="Raw Material">Raw Material</option>
              <option value="Hydrochloric Acid">Hydrochloric Acid</option>
              <option value="Hcl">Hcl</option>
              <option value="Petrochemical">Petrochemical</option>
            </select>
          </div>
          <div className="header bg-secondary-subtle text-light fw-bolder mb-3">
            Header
          </div>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={headerRows}
                onChange={handleHeaderRowsChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={headerColumns}
                onChange={handleHeaderColumnsChange}
              />
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable(headerRows, headerColumns)}</tbody>
          </table>
          <div className="header bg-secondary-subtle text-light fw-bolder mb-3">
            Body
          </div>
          <div className="d-flex">
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
                      className="bg-secondary-subtle my-1 px-3 py-1 text-dark rounded"
                    >
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-left d-none"
                      />
                      <label
                        className="labels cursor-pointer bg-dark-subtle"
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
                      className="bg-secondary-subtle my-1 px-3 py-1 text-dark rounded"
                    >
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-right d-none"
                      />
                      <label
                        className="labels cursor-pointer bg-dark-subtle"
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

          <div className="header bg-secondary-subtle text-light fw-bolder mb-3">
            Footer
          </div>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={footerRows}
                onChange={handleFooterRowsChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={footerColumns}
                onChange={handleFooterColumnsChange}
              />
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable(footerRows, footerColumns)}</tbody>
          </table>
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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Sampling template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="text-muted">Add information of Sampling template</p>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Template Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Template Name"
              name="templateName"
              value={formData?.templateName||""}
              onChange={handleChange}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Unique Code
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Unique Code"
              name="uniqueCode"
              value={formData?.uniqueCode ||""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Sample Type
            </label>
            <select className="form-select" aria-label="Default select example"
              name="sampleType"
              value={formData?.sampleType||""}
              onChange={handleChange}

            >
              <option selected>Select...</option>
              <option value="Raw Material">Raw Material</option>
              <option value="Hydrochloric Acid">Hydrochloric Acid</option>
              <option value="Hcl">Hcl</option>
              <option value="Petrochemical">Petrochemical</option>
            </select>
          </div>
          <div className="header bg-secondary-subtle text-light fw-bolder mb-3">
            Header
          </div>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={formData?. Rows||""}
                onChange={handleChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={formData?. Columns||""}
                onChange={handleChange}
              />   
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable( renderTable, headerColumns)}</tbody>
          </table>
          <div className="header bg-secondary-subtle text-light fw-bolder mb-3">
            Body
          </div>
          <div className="d-flex">
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
                      className="bg-secondary-subtle my-1 px-3 py-1 text-dark rounded"
                    >
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-left d-none"
                      />
                      <label
                        className="labels cursor-pointer bg-dark-subtle"
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
                      className="bg-secondary-subtle my-1 px-3 py-1 text-dark rounded"
                    >
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-right d-none"
                      />
                      <label
                        className="labels cursor-pointer bg-dark-subtle"
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

          <div className="header bg-secondary-subtle text-light fw-bolder mb-3">
            Footer
          </div>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                // value={footerRows}
                // onChange={handleFooterRowsChange}
                onChange={handleChange}
                

              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={footerColumns}
                onChange={handleFooterColumnsChange}
              />
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable(footerRows, footerColumns)}</tbody>
          </table>
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



  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Template</h4>
        </div>
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
              text="Add Sample Template"
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
          <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition} />
        )}

        {isModalsOpen && (
          <ImportModal
            initialData={initialData}
            isOpen={isModalsOpen}
            onClose={handleCloseModals}
            columns={columns}
            onDataUpload={handleExcelDataUpload}
          />)}
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
};


export default SamplingTemplate;

