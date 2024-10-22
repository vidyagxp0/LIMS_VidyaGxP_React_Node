import { useState, useEffect } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";
import { toast } from "react-toastify";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import ChartContainer from "../../components/ChartContainer/ChartContainer";

const lineChartData = [
  ["Year", "Sales"],
  ["2014", 1000],
  ["2015", 1170],
  ["2016", 660],
  ["2017", 1030],
];

const barChartData = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
];

const pieChartData = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const areaChartData = [
  ["Year", "", ""],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

// Options for different charts
const chartOptions = {
  title: "My Chart",
};

const columnChartData = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

const scatterChartData = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7],
];

const fields = [
  { label: "Document Name", key: "documentName" },
  { label: "Document Type", key: "documentType" },
  {
    label: "Department",
    key: "department",
  },

  {
    label: "Author ",
    key: "author",
  },
  {
    label: "Due Date",
    key: "dueDate",
  },
  { label: "Effective Date", key: "effectiveDate" },
  { label: "CC References", key: "ccReferences" },

  { label: "Status", key: "status" },
];

function SpecificationStp() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [division, setDivision] = useState("");
  const [period, setPeriod] = useState("");
  const [sortKey, setSortKey] = useState("documentName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(apiData, "loooooooooooooo");

  // 	Document Name,	Document Type,	Department,	Author,	Due Date,	Effective Date,	CC, References,	Status
  //  document_name, document_type_id, department_id, reviewers,due_dateDoc, effective_date, reference_record, status
  const [lineChartData, setLineChartData] = useState([["Department", "Count"]]);

  const [pieChartData, setPieChartData] = useState([["Status", "Count"]]);

  const [areaChartData, setAreaChartData] = useState([
    ["Year", "Documents Due"],
  ]);

  const processChartData = (filteredData) => {
    // Extract Department Data for LineChart
    const departmentCounts = filteredData.reduce((acc, item) => {
      acc[item.department_id] = (acc[item.department_id] || 0) + 1;
      return acc;
    }, {});

    const departmentChartData = [
      ["Department", "Count"],
      ...Object.entries(departmentCounts),
    ];

    // Extract Status Data for PieChart
    const statusCounts = filteredData.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {});

    const statusChartData = [
      ["Status", "Count"],
      ...Object.entries(statusCounts),
    ];

    // Extract Due Date Data for BarChart
    const dueDateCounts = filteredData.reduce((acc, item) => {
      const dueDate = new Date(item.due_dateDoc).getFullYear();
      acc[dueDate] = (acc[dueDate] || 0) + 1;
      return acc;
    }, {});

    const dueDateChartData = [
      ["Year", "Documents Due"],
      ...Object.entries(dueDateCounts),
    ];

    // Update the chart data states
    setLineChartData(departmentChartData);
    setPieChartData(statusChartData);
    setAreaChartData(dueDateChartData);
  };

  useEffect(() => {
    openModal();
  }, []);

  const openModal = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.get(
        "https://dms.mydemosoftware.com/api/document"
      );
      const documents = response.data.body.document;
      console.log(documents, "<>?<>?<>?<>??><?><?><?><");

      if (Array.isArray(documents)) {
        const indicesToRemove = [23, 21, 17, 13, 12, 10, 4];

        indicesToRemove.forEach((index) => {
          if (index < documents.length) {
            documents.splice(index, 1); // Removes 1 item at 'index'
          }
        });

        const filteredData = documents?.map((document, index) => ({
          sno: index + 1,
          document_name: document.document_name,
          document_type_id: document.document_type_id,
          department_id: document.department_id,
          reviewers: document.reviewers,
          due_dateDoc: document.due_dateDoc,
          effective_date: document.effective_date,
          reference_record: document.reference_record,
          status: document.status,
        }));

        // Process data for charts
        processChartData(filteredData);
        setApiData(filteredData);
      } else {
        console.warn("Expected an array, but got:", documents);
        setError("Unexpected data format.");
      }
    } catch (error) {
      console.error("Error fetching the data:", error);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  // const fetchSpecificationStp = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${BASE_URL}/get-all-lims/specificationStp`
  //     );
  //     console.log(response);
  //     const formattedData = response.data[0]?.specificationStp || [];

  //     const updatedData = formattedData.map((item, index) => ({
  //       ...item,
  //       sno: index + 1,
  //     }));

  //     setApiData(updatedData);
  //   } catch (error) {
  //     console.error("Error fetching ", error);
  //     toast.error("Failed to fetch ");
  //   }
  // };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleClick = () => {
    window.location.href = "https://dms.mydemosoftware.com";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = async () => {
    window.location.href = "https://dms.mydemosoftware.com";

    // try {
    //   const response = await axios.delete(
    //     `${BASE_URL}/delete-lims/specificationStp/${item.uniqueId}`
    //   );

    //   if (response.status === 200) { 
    //     const newData = apiData.filter((d) => d.uniqueId !== item.uniqueId);
    //     setApiData(newData);
    //     toast.success(" deleted successfully");

    //     console.log("Deleted item:", item);
    //   }
    //   fetchSpecificationStp();
    // } catch (error) {
    //   console.error("Error deleting :", error);
    // }
  };

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = apiData.map((row) => ({ ...row, checkbox: checked }));
    setApiData(newData);
  };
  const columns = [
    {
      header: "SrNo.",
      accessor: "sno",
    },

    { header: "Document Name", accessor: "document_name" },
    { header: "Document Type", accessor: "document_type_id" },
    {
      header: "Department",
      accessor: "department_id",
    },

    {
      header: "Author ",
      accessor: "reviewers",
    },
    {
      header: "Due Date",
      accessor: "due_dateDoc",
    },
    { header: "Effective Date", accessor: "reviewers" },
    { header: "CC References", accessor: "reference_record" },
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
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete}
          />
        </>
      ),
    },
  ];

  // Filtering logic
  const filteredData = Array.isArray(apiData)
    ? apiData.filter((row) => {
        
        const documentName = row.document_name || ""; 
        const matchesSearchQuery = documentName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const matchesStatusFilter =
          statusFilter === "All" || row.status === statusFilter;

        const matchesDateFrom =
          !dateFrom || new Date(row.effective_date) >= new Date(dateFrom);
        const matchesDateTo =
          !dateTo || new Date(row.effective_date) <= new Date(dateTo);

        return (
          matchesSearchQuery &&
          matchesStatusFilter &&
          matchesDateFrom &&
          matchesDateTo
        );
      })
    : [];

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0; 
  });

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
  };

  const handleCheckboxChange = (index) => {
    const newData = [...apiData];
    newData[index].checkbox = !newData[index].checkbox;
    setApiData(newData);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      conditionCode: item["Condition Code"] || "",
      storageCondition: item["Stability Storage Condition"] || "",
      createdAt: item["Created At"] || "",
      attachment: item["Attachment"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setApiData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  // Function to add a new storage condition
  const addNewStorageCondition = async (newCondition) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/specificationStp`,
        {
          documentName: newCondition.documentName,
          documentType: newCondition.documentType,
          department: newCondition.department,
          author: newCondition.author,
          dueDate: newCondition.dueDate,
          effectiveDate: newCondition.effectiveDate,
          ccReferences: newCondition.ccReferences,
          status: newCondition.status || "APPROVED",
        }
      );

      if (response.status === 200) {
        const addedSpecificationStp = response.data.addLIMS; 

        setApiData((prevData) => [
          ...prevData,
          {
            ...addedSpecificationStp,
            sno: addedSpecificationStp.uniqueId, 
            checkbox: false,
          },
        ]);
        closeModal();

        toast.success("Specification STP added successfully");
       
      }
    } catch (error) {
      console.error("Error adding Specification STP", error);
      toast.error("Error adding Specification STP");
    }

    setIsModalOpen(false);
  };
  // useEffect(() => {
  //   fetchSpecificationStp();
  // }, []);
  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      console.error("New status is undefined");
      toast.error("Invalid Status update");
      return;
    }
    if (!viewModalData) {
      console.error("No data selected for update");
      toast.error("No data selected for update");
      return;
    }
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);

      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/specificationStp/${viewModalData.uniqueId}`,
        {
          ...dataToSend,
          status: newStatus,
        }
      );
      if (response.status === 200) {
        setApiData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        toast.success("Approval status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Approval status");
      }
    } catch (error) {
      console.error("Error updating Approval status:", error);
      toast.error("Error updating Approval status");
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [documentName, setdocumentName] = useState("");
    const [documentType, setdocumentType] = useState("");
    const [department, setdepartment] = useState("");
    const [author, setauthor] = useState("");
    const [dueDate, setdueDate] = useState("");
    const [effectiveDate, seteffectiveDate] = useState("");
    const [ccReferences, setccReferences] = useState("");
    const handleAdd = () => {
      // Navigate("/https://ipc.mydemosoftware.com");
      // const newCondition = {
      //   documentName,
      //   documentType,
      //   department,
      //   author,
      //   dueDate,
      //   effectiveDate,
      //   ccReferences,
      //   status: "APPROVED",
      // };
      // onAdd(newCondition);
    };
    // return (
    //   <CModal alignment="center" visible={visible} onClose={closeModal}>
    //     <CModalHeader>
    //       <CModalTitle>Add New Specification STP</CModalTitle>
    //     </CModalHeader>
    //     <CModalBody>
    //       <CFormInput
    //         type="text"
    //         label="Document Name"
    //         placeholder="Document Name"
    //         value={documentName}
    //         onChange={(e) => setdocumentName(e.target.value)}
    //       />

    //       <CFormInput
    //         type="text"
    //         label="Document Type"
    //         placeholder="Document Type"
    //         value={documentType}
    //         onChange={(e) => setdocumentType(e.target.value)}
    //       />

    //       <CFormInput
    //         type="text"
    //         label="Department"
    //         placeholder="Department"
    //         value={department}
    //         onChange={(e) => setdepartment(e.target.value)}
    //       />
    //       <CFormInput
    //         type="text"
    //         label="Author"
    //         placeholder="Author"
    //         value={author}
    //         onChange={(e) => setauthor(e.target.value)}
    //       />
    //       <CFormInput
    //         type="date"
    //         label="Due Date"
    //         placeholder="Due Date"
    //         value={dueDate}
    //         onChange={(e) => setdueDate(e.target.value)}
    //       />
    //       <CFormInput
    //         type="date"
    //         label="Effective Date"
    //         placeholder="Effective Date"
    //         value={effectiveDate}
    //         onChange={(e) => seteffectiveDate(e.target.value)}
    //       />
    //       <CFormInput
    //         type="text"
    //         label="CC References"
    //         placeholder="CC References"
    //         value={ccReferences}
    //         onChange={(e) => setccReferences(e.target.value)}
    //       />
    //     </CModalBody>
    //     <CModalFooter>
    //       <CButton color="light" onClick={closeModal}>
    //         Cancel
    //       </CButton>
    //       <CButton color="primary" onClick={handleAdd}>
    //         Add
    //       </CButton>
    //     </CModalFooter>
    //   </CModal>
    // );
  };

  const openEditModal = () => {
    // setEditModalData(rowData);

    window.location.href = "https://dms.mydemosoftware.com";
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/specificationStp/${updatedData.uniqueId}`,
        updatedData // Sending the updated data
      );

      if (response.status === 200) {
        const newData = apiData.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...updatedData }
            : item
        );

        setApiData(newData);
        toast.success(" updated successfully");
      }
    } catch (error) {
      console.error("Error updating ", error);
      toast.error("Failed to update");
    } finally {
      setEditModalData(null);
    }
  };
  const EditModal = ({ visible, closeModal, apiData, onSave }) => {
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [formData, setFormData] = useState(apiData);

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
      if (apiData) {
        setFormData(apiData);
      }
    }, [apiData]);

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
          <CModalTitle>Edit Specification STP</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Document Name"
            placeholder="Document Name"
            value={formdocumentName || ""}
            onChange={handleChange}
            name="documentName"
          />

          <CFormInput
            type="text"
            label="Document Type"
            placeholder="Document Type"
            value={formData?.documentType || ""}
            onChange={handleChange}
            name="documentType"
          />

          <CFormInput
            type="text"
            label="Department"
            placeholder="Department"
            value={formData?.department || ""}
            onChange={handleChange}
            name="department"
          />
          <CFormInput
            type="text"
            label="Author"
            placeholder="Author"
            value={formData?.author || ""}
            onChange={handleChange}
            name="author"
          />
          <CFormInput
            type="date"
            label="Due Date"
            placeholder="Due Date"
            value={formData?.dueDate || ""}
            onChange={handleChange}
            name="dueDate"
          />
          <CFormInput
            type="date"
            label="Effective Date"
            placeholder="Effective Date"
            value={formData?.effectiveDate || ""}
            onChange={handleChange}
            name="author
"
          />
          <CFormInput
            type="text"
            label="CC References"
            placeholder="CC References"
            value={formData?.ccReferences || ""}
            onChange={handleChange}
            name="ccReferences"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <LaunchQMS />

      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Specification STP</h4>
        </div>

        <div className="flex justify-between items-center mb-6">
          {/* Left Section: All input fields */}
          <div className="flex items-center space-x-6">
            {/* Division Dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Status</label>
              <Dropdown
                options={[
                  { value: "All", label: "All" },
                  { value: "UnderTraining", label: "Under-Training" },
                  { value: "InReview", label: "In Review" },
                  { value: "APPROVED", label: "Approved" },
                  { value: "Draft", label: "Draft" },
                  { value: "Effective", label: "Effective" },
                  { value: "InAppoval", label: "In-Approval" },
                ]}
                value={statusFilter}
                onChange={setStatusFilter}
              />
            </div>

            {/* Date From Input */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Date From</label>
              <div className="relative">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={handleDateFromChange}
                  className="border border-black rounded-md pl-3 pr-3 py-2 text-sm bg-gray-100"
                />
              </div>
            </div>

            {/* Date To Input */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold">Date To</label>
              <div className="relative">
                <input
                  type="date"
                  value={dateTo}
                  onChange={handleDateToChange}
                  className="border border-black rounded-md pl-3 pr-3 py-2 text-sm bg-gray-100"
                />
              </div>
            </div>

            {/* Select Period Dropdown */}
          </div>

          {/* Button on the right side */}
          <ATMButton
            text="Add Specification STP"
            color="blue"
            onClick={handleClick}
            className="ml-auto"
          />
        </div>
        <div className="w-full px-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full">
              <h2 className="text-center text-lg font-semibold mb-2">
                Department
              </h2>
              <ChartContainer
                chartType="LineChart"
                data={lineChartData}
                options={chartOptions}
              />
            </div>

            <div className="w-full">
              <h2 className="text-center text-lg font-semibold mb-2">
                Due Date
              </h2>
              <ChartContainer
                chartType="ScatterChart"
                data={areaChartData}
                options={chartOptions}
              />
            </div>

            <div className="w-full">
              <h2 className="text-center text-lg font-semibold mb-2">
                Current Status
              </h2>
              <ChartContainer
                chartType="PieChart"
                data={pieChartData}
                options={chartOptions}
              />
            </div>

            {/* <div className="w-full">
            <h2 className="text-center text-lg font-semibold mb-2">
              Area Chart
            </h2>
            <ChartContainer
              chartType="AreaChart"
              data={areaChartData}
              options={chartOptions}
            />
          </div>

          <div className="w-full">
            <h2 className="text-center text-lg font-semibold mb-2">
              Column Chart
            </h2>
            <ChartContainer
              chartType="ColumnChart"
              data={columnChartData}
              options={chartOptions}
            />
          </div>

          <div className="w-full">
            <h2 className="text-center text-lg font-semibold mb-2">
              Scatter Chart
            </h2>
            <ChartContainer
              chartType="ScatterChart"
              data={scatterChartData}
              options={chartOptions}
            />
          </div> */}
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
      </div>

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
        />
      )}

      <ReusableModal
        visible={isViewModalOpen}
        closeModal={closeViewModal}
        data={viewModalData}
        fields={fields}
        title="Test Plan Details"
        updateStatus={handleStatusUpdate}
      />

      {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </>
  );
}

export default SpecificationStp;
