/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import "./TestPlan.css";
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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";


const fields = [
  { label: "S.No", key: "sno" },
  { label: "Specification ID", key: "specificationId" },
  { label: "Product Name", key: "productName" },
  { label: "Tests", key: "tests" },
  { label: "Initiated At", key: "initiatedAt" },
  { label: "Status", key: "status" },
];

function TestPlan() {
  //const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/mTestPlan`
      );
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.mTestPlan?.map((condition) => ({
              checkbox: false,
              sno: condition.uniqueId,
              specificationId: condition.specificationId || "-",
              productName: condition.productName || "-",
              tests: condition.tests || "-",
              initiatedAt: condition.initiatedAt || "-",
              status: condition.status || "-",
            })) || []
        );
        setData(formattedData);
      }
    } catch (error) {
      toast.error(
        "Error fetching data: " + (error.response?.data || error.message)
      );
    }
  };

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

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        console.log("Row:", row);
        const productName = row.productName || "";
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];
  const onAdd = (newRow) => {
    const updatedData = [...data, { ...newRow, sno: data.length + 1 }];
    setData(updatedData);
  };

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
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const [leftArray, setLeftArray] = useState([
    "Viscosity @40C",
    "TAN Total acid number",
    "Water Content PPM",
    "Average Weight",
    "Description",
    "Assay test for SPP",
    "Specific Gravity  PA",
    "Color Test",
    "Specific Gravity",
    "Melting Range",
    "Color",
    "Ph test",
    "test",
    "Hydroxyl Value",
    "Acid Value",
    "Viscosity (mPa.s)",
    "Infrared spectrum",
    "Appearance (Form)",
    "ph test new",
    "Micro Media",
    "FG Assay Test",
    "VDC-PH TEST",
    "Water Ph test",
    "Assay",
    "Description",
    "Water content KF1",
    "Resolution",
    "% RSD of Standard with racketing std.",
    "Theoretical Plates.",
    "Tailing Factor of standard",
    "Assay (on anhydrous basis)",
    "Water content",
    "SP_T_001",
    "New Product Test",
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

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Specification Id", accessor: "specificationId" },
    { header: "	Product Name", accessor: "productName" },
    { header: "Tests", accessor: "tests" },
    { header: "Initiated At", accessor: "initiatedAt" },
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
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];

  const fields = [
    { label: "Specification ID", key: "specificationId" },
    { label: "Product Name", key: "productName" },
    { label: "Tests", key: "tests" },
    { label: "Initiated At", key: "initiatedAt" },
    { label: "Status", key: "status" },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      specificationId: item["Specification Id"] || "",
      productName: item["Product Name"] || "",
      tests: item["Tests"] || "",
      initiatedAt: item["Initiated At"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(null);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/mTestPlan/${item.sno}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((d) => d.sno !== item.sno));
        toast.success("Test Plan deleted successfully.");
      } else {
        toast.error("Failed to delete Test Plan.");
      }
    } catch (error) {
      toast.error(
        "Error deleting Test Plan: " + (error.response?.data || error.message)
      );
    }
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

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };
  const handleAdd = async (newProduct) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/mTestPlan`,
        {
          ...newProduct,
          addDate: new Date().toISOString().split("T")[0],
          status: newProduct.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Test Plan added successfully.");
        fetchProductData(); 
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add Test Plan.");
      }
    } catch (error) {
      toast.error(
        "Error adding Test Plan: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [specificationId, setspecificationId] = useState("");
    const [productName, setProductName] = useState("");
    const [testPlanComments, setTestPlanComments] = useState("");
    const [samplingQuantityUOM, setSamplingQuantityUOM] = useState("");
    const [coaTemplate, setCoaTemplate] = useState("");
    const [remarks, setRemarks] = useState("");
    const [availableTests, setAvailableTests] = useState([
      "Description",
      "Weight of 20 Tablets",
      "Average Weight ( mg )",
      "Thickness",
      "Disintegration Time",
      "Hardness",
      "Diameter",
      "Friability",
    ]);
    const [selectedTests, setSelectedTests] = useState([]);
    console.log(selectedTests,"<><><><><><>?")
    
    const handleProduct = () => {
      const currentDate = new Date().toISOString().split("T")[0];
      const newCondition = {
        specificationId,
        productName,
        testPlanComments,
        samplingQuantityUOM,
        coaTemplate,
        remarks,
        selectedTests,
        status: "active",
      };
      onAdd(newCondition);
    };
  
    const handleTestSelect = (test) => {
      setSelectedTests((prevSelectedTests) => {
        if (prevSelectedTests.includes(test)) {
          return prevSelectedTests.filter((t) => t !== test);
        } else {
          return [...prevSelectedTests, test];
        }
      });
  
      setAvailableTests((prevAvailableTests) => {
        if (prevAvailableTests.includes(test)) {
          return prevAvailableTests.filter((t) => t !== test);
        } else {
          return [...prevAvailableTests, test];
        }
      });
    };
  
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Add Test Plan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            label="Specification ID"
            className="mb-3"
            name="specificationId"
            value={specificationId}
            onChange={(e) => setspecificationId(e.target.value)}
            options={[
              { label: "ACC-00-QC-01", value: "ACC-00-QC-01" },
              { label: "SPC001", value: "SPC001" },
              { label: "WBL/STPF/FG/0493/02", value: "WBL/STPF/FG/0493/02" },
              { label: "QC-002", value: "QC-002" },
              { label: "LAB-03-A01", value: "LAB-03-A01" },
              { label: "MFG-PLT-009", value: "MFG-PLT-009" },
              { label: "FG-TEST-123", value: "FG-TEST-123" },
              { label: "BATCH-789", value: "BATCH-789" },
            ]}
          />
  
          <CFormInput
            label="Product/Material Name"
            className="mb-3"
            type="text"
            placeholder="Product/Material Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
  
          <CFormInput
            label="Test Plan Comments"
            className="mb-3"
            type="text"
            placeholder="Test Plan Comments"
            value={testPlanComments}
            onChange={(e) => setTestPlanComments(e.target.value)}
          />
  
          <CFormSelect
            className="mb-3"
            label="Sampling Quantity UOM"
            value={samplingQuantityUOM}
            onChange={(e) => setSamplingQuantityUOM(e.target.value)}
            options={[
              { label: "Select UOM", value: "" },
              { label: "gm", value: "gm" },
              { label: "ml", value: "ml" },
            ]}
          />
  
          <div className="drag-drop">
            <div className="sub-container">
              <h5>Available Tests</h5>
              <div className="list-container">
                <ul>
                  {availableTests.map((data) => (
                    <li key={data}>
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-left"
                        onChange={() => handleTestSelect(data)}
                        checked={selectedTests.includes(data)}
                      />
                      <label className="labels" htmlFor={data}>
                        {data}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <div className="sub-container">
              <h5>Selected</h5>
              <div className="list-container">
                <ul>
                  {selectedTests.map((data) => (
                    <li key={data}>
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-right"
                        onChange={() => handleTestSelect(data)}
                        checked={selectedTests.includes(data)}
                      />
                      <label className="labels" htmlFor={data}>
                        {data}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          <CFormSelect
            className="mb-3"
            label="Coa Template"
            value={coaTemplate}
            onChange={(e) => setCoaTemplate(e.target.value)}
            options={[
              { label: "Select Coa Template", value: "" },
              { label: "Test Coa", value: "test-coa" },
              { label: "Windlas Template", value: "windlas-template" },
            ]}
          />
  
          <label className="my-2" htmlFor="">
            Remarks
          </label>
          <br />
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="line4 w-100 mx-1"
            rows="4"
            cols="50"
          ></textarea>
  
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleProduct}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };
  

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/mTestPlan/${updatedData.sno}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("Test Plan updated successfully.");
        setEditModalData(null);
      } else {
        toast.error("Failed to update Test Plan.");
      }
    } catch (error) {
      toast.error(
        "Error updating Test Plan: " + (error.response?.data || error.message)
      );
    }
  };
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [specificationId, setspecificationId] = useState("");
    const [availableTests, setAvailableTests] = useState([
      "Description",
      "Weight of 20 Tablets",
      "Average Weight ( mg )",
      "Thickness",
      "Disintigration  Time",
      "Hardness",
      "Diameter",
      "Friability",
    ]);
    const [selectedTests, setSelectedTests] = useState([]);
    const [refreshedTests, setRefreshedTests] = useState([]);

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

    const specTestsMap = {
      "MED-001": ["Blood Test", "X-Ray", "MRI Scan", "CT Scan"],
      "MED-002": ["Liver Function Test", "Blood Pressure Test", "Urine Test"],
      "MED-003": ["COVID-19 Test", "Flu Test", "Allergy Test"],
      "MED-004": ["Thyroid Test", "Cholesterol Test", "Blood Sugar Test"],
      "MED-005": ["ECG", "Echocardiogram", "Cardiac Stress Test"],
      "MED-006": [
        "Kidney Function Test",
        "Bone Density Test",
        "Vitamin D Test",
      ],
      "MED-007": ["Complete Blood Count", "Hemoglobin Test", "Platelet Count"],
      "MED-008": ["Antibody Test", "Blood Clot Test", "Lung Function Test"],
    };

    const handleSpecIdChange = (e) => {
      const specId = e.target.value;
      setspecificationId(specId);
      setAvailableTests(specTestsMap[specId] || []);
      setSelectedTests([]);
      setRefreshedTests([]);
    };

    const handleTestSelect = (test) => {
      setSelectedTests((prevSelectedTests) => {
        if (prevSelectedTests.includes(test)) {
          return prevSelectedTests.filter((t) => t !== test);
        } else {
          return [...prevSelectedTests, test];
        }
      });

      setAvailableTests((prevAvailableTests) => {
        if (prevAvailableTests.includes(test)) {
          return prevAvailableTests.filter((t) => t !== test);
        } else {
          return [...prevAvailableTests, test];
        }
      });
    };

    const handleRefresh = () => {
      setRefreshedTests(selectedTests);
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Test Plan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            label="Specification ID"
            className="mb-3"
            name="specificationId"
            type="text"
            placeholder=""
            options={[
              { label: "ACC-00-QC-01", value: "ACC-00-QC-01" },
              { label: "SPC001", value: "SPC001" },
              { label: "WBL/STPF/FG/0493/02", value: "WBL/STPF/FG/0493/02" },
              { label: "QC-002", value: "QC-002" },
              { label: "LAB-03-A01", value: "LAB-03-A01" },
              { label: "MFG-PLT-009", value: "MFG-PLT-009" },
              { label: "FG-TEST-123", value: "FG-TEST-123" },
              { label: "BATCH-789", value: "BATCH-789" },
            ]}
            value={formData?.specificationId | ""}
            onChange={handleChange}
          />
          <CFormInput
            label="Product/Material Name"
            className="mb-3"
            type="text"
            placeholder="Product/Material Name"
            name="productName"
            value={formData?.productName || ""}
            onChange={handleChange}
          />
          <CFormInput
            label="Test Plan Comments"
            className="mb-3"
            type="text"
            placeholder="Test Plan Comments"
            name="testPlanComments"
            value={formData?.testPlanComments}
            onChange={handleChange}
          />
          <CFormSelect
            className="mb-3"
            label="Sampling Quantity UOM"
            options={[
              "Select UOM",
              { label: "gm", value: "gm" },
              { label: "ml", value: "ml" },
            ]}
            name="samplingQuantityUOM"
            value={formData?.samplingQuantityUOM}
            onChange={handleChange}
          />
          <div className="drag-drop">
            <div className="sub-container">
              <h5>Available Tests</h5>
              <div className="list-container">
                <ul>
                  {availableTests.map((data) => {
                    return (
                      <li key={data}>
                        <input
                          type="checkbox"
                          value={data}
                          id={data}
                          className="check-left"
                          onChange={() => handleTestSelect(data)}
                          checked={selectedTests.includes(data)}
                        />
                        <label className="labels" htmlFor={data}>
                          {data}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="mid-container">
              <button className="arrow-button" onClick={() => {}}>
                <TiArrowRightThick />
              </button>
              <button className="arrow-button" onClick={() => {}}>
                <TiArrowLeftThick />
              </button>
            </div>
            <div className="sub-container">
              <h5>Selected</h5>
              <div className="list-container">
                <ul>
                  {selectedTests.map((data) => (
                    <li key={data}>
                      <input
                        type="checkbox"
                        value={data}
                        id={data}
                        className="check-right"
                        onChange={() => handleTestSelect(data)}
                        checked={selectedTests.includes(data)}
                      />
                      <label className="labels" htmlFor={data}>
                        {data}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <input type="checkbox" /> <span>Test Grouping Required</span>
              <button
                style={{
                  borderRadius: "5px",
                  margin: "17px 20px",
                  padding: "2px 6px",
                  backgroundColor: "#0f93c3",
                  border: "1px solid #0f93c3",
                  color: "white",
                }}
                onClick={handleRefresh}
              >
                Refresh
              </button>
            </div>
          </div>
          {refreshedTests.length > 0 && (
            <>
              <table className="border-1 border-black min-w-full divide-y divide-gray-200">
                <thead className="border-1 border-black">
                  <tr>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      S No.
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Tests
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Pass Limit Description
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Revision No.
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Worksheet
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Display in COA
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Re-Testing
                    </th>
                    <th className="px-6 py-3 bg-blue-200 text-xs font-medium text-gray-900 uppercase tracking-wider text-center">
                      Reduced Testing
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {refreshedTests.map((test, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-1 border-black">
                        <td
                          colSpan="9"
                          className=" px-6 py-4 whitespace-nowrap"
                        >
                          <CFormSelect
                            options={[
                              "Select Group",
                              { label: "Group 1", value: "group-1" },
                              { label: "Group 2", value: "group-2" },
                              { label: "Group 3", value: "group-3" },
                            ]}
                            className="w-full"
                          />
                        </td>
                      </tr>
                      <tr className="border-1 border-black">
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{test}</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <CFormSelect
                            options={[
                              "Select Worksheet",
                              { label: "pH Test", value: "ph-test" },
                              { label: "Assay1", value: "assay1" },
                              { label: "E.coli", value: "e-coli" },
                              { label: "Option 4", value: "option-4" },
                              { label: "Option 5", value: "option-5" },
                              { label: "Option 6", value: "option-6" },
                            ]}
                            className="w-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <CFormSelect
            className="mb-3"
            label="Coa Template"
            options={[
              "Select Coa Template",
              { label: "Test Coa", value: "test-coa" },
              { label: "Windlas Template", value: "windlas-template" },
            ]}
            name="coaTemplate"
            value={formData?.coaTemplate}
            onChange={handleChange}
          />
          <label className="my-2" htmlFor="">
            Remarks
          </label>
          <br />
          <textarea
            value={formData?.remarks}
            onChange={handleChange}
            className="line4 w-100 mx-1"
            rows="4"
            cols="50"
          ></textarea>
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleSave}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };
  return (
    <>
      <LaunchQMS />

      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Test plan</h4>
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
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Test_plan.pdf"
              title="Test Plan Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Test Categories"
              color="blue"
              onClick={openModal}
            />
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
          onAdd={handleAdd}
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
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          onAdd={onAdd}
          fields={fields}
          title="Test Plan Details"
          updateStatus={handleStatusUpdate}
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
    </>
  );
}

export default TestPlan;
