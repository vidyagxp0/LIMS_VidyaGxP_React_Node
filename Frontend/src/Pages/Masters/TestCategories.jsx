import React, { useEffect, useState } from "react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CButton,
  CCol,
  CForm,
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
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { toast } from "react-toastify";

const staticData = [
  {
    sno: 1,
    categoryName: "new cat",
    uniqueCode: "AT-002",
    description: "vhnds jjsw ",
    addedOn: "2024-10-08",
    effectFrom: "2024-10-15",
    reviewDate: "2024-10-20",
    status: "INITIATED",
  },
  {
    sno: 2,
    categoryName: "new cat",
    uniqueCode: "AT-002",
    description: "vhnds jjsw ",
    addedOn: "2024-10-08",
    effectFrom: "2024-10-15",
    reviewDate: "2024-10-20",
    status: "INITIATED",
  },
];

const initialData = JSON.parse(localStorage.getItem("testcategories")) || "";

const fields = [
  { label: "Category Name", key: "categoryName" },
  { label: "	Unique Code", key: "uniqueCode" },
  { label: "Description", key: "description" },
  { label: "Added On", key: "addedOn" },
  { label: "Effect From", key: "effectFrom" },
  { label: "Review Date", key: "reviewDate" },
  { label: "Status", key: "status" },
];

function Testcategories() {
  //const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);

  // Combine static data with dynamic data from local storage
  const [data, setData] = useState(() => {
    return [...staticData, ...initialData]; // Merge static data with local storage data
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/get-all-lims/mTestCategories`
        );
        const fetchData = response?.data[0]?.mTestCategories || [];
        const updatedData = fetchData?.map((item, index) => ({
          ...item,
          sno: item?.sno || index + 1,
        }));
        setData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addNewItem = (newItem) => {
    const newItemWithSno = {
      ...newItem,
      sno: data.length + 1, // Assign sno based on current data length
    };
    setData([...data, newItemWithSno]); // Add new item with sno
  };

  const addRow = (newRow) => {
    setData([...data, newRow]);
  };
  
  useEffect(() => {
    // Store dynamic data back to local storage
    localStorage.setItem(
      "testcategories",
      JSON.stringify(data.filter((row) => !staticData.includes(row)))
    );
  }, [data]);

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
        const productName = row.productName || ""; // Fallback to an empty string if productName is undefined
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

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
    { header: "Category Name", accessor: "categoryName" },
    { header: "	Unique Code", accessor: "uniqueCode" },
    { header: "Description", accessor: "description" },
    { header: "Added On", accessor: "addedOn" },
    { header: "Effect From", accessor: "effectFrom" },
    { header: "Review Date", accessor: "reviewDate" },
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
      sno: index + 1,
      categoryName: item["Category Name"] || "",
      uniqueCode: item["Unique Code"] || "",
      description: item["Description"] || "",
      addedOn: item["Added On"] || "",
      effectFrom: item["Effect From"] || "",
      reviewDate: item["Review Date"] || "",
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
    setViewModalData(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/mTestCategories/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        console.log("Product deleted successfully:", response.data);
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
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

  const StatusModal = ({ visible, closeModal, addRow,addNewItem }) => {
    const [testCategoryData, setTestCategory] = useState({
      addedOn:new Date().toISOString().split("T")[0],
      categoryName: "",
      uniqueCode: "",
      description: "",
      effectFrom:"",
      reviewDate: "",
      status: "Active",
    });

    const tempdata=testCategoryData;
    const handleAddTestCategory = (e) => {

      e.preventDefault();
  
      axios
        .post(`http://localhost:9000/manage-lims/add/mTestCategories`,testCategoryData)
        .then((response) => {
          toast.success(response.data.message || "Test Category added successfully!")
          addRow(testCategoryData);
          addNewItem(testCategoryData);
          closeModal()
        })
        .catch((err) => {
          console.error(err);
          toast.error("Test Category Already Registered");
        });
    };

    const handleInputChange = (field, value) => {
      const updatedData = { ...testCategoryData, [field]: value };
      setTestCategory(updatedData);
    };
    

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Test Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information of Test Category</p>
          <CForm onSubmit={handleAddTestCategory} >
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Category Name"
            name="categoryName"
            value={testCategoryData.categoryName}
            onChange={(e) => handleInputChange("categoryName",e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code "
            name="uniqueCode"
            value={testCategoryData.uniqueCode}
            onChange={(e) => handleInputChange("uniqueCode",e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            name="description"
            value={testCategoryData.description}
            onChange={(e) => handleInputChange("description",e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Effect From"
            placeholder="Effect From"
            name="effectFrom"
            value={testCategoryData.effectFrom}
            onChange={(e) => handleInputChange("effectFrom",e.target.value)
            }
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Review Date"
            placeholder="Review Date"
            name="Review Date"
            value={testCategoryData.reviewDate}
            onChange={(e) => handleInputChange("reviewDate",e.target.value)
            }
          />
          <CButton color="primary" type="submit">
            Submit
          </CButton>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          
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
  const handleEditSave = async (updatedData) => {
    try {
      if (!updatedData.uniqueId) {
        const fetchedData = await axios.get(
          `http://localhost:9000/manage-lims/update/mTestCategories/${updatedData.uniqueId}`
        );
        updatedData.uniqueId = fetchedData.data.uniqueId;
      }
  
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/mTestCategories/${updatedData.uniqueId}`,
        updatedData
      );
  
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.sno === updatedData.sno ? updatedData : item
        );
        setData(newData);
        setEditModalData(null);
        console.log("Test Categories updated successfully:", response.data);
      } else {
        console.error("Failed to update Test Categories:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating Test Categories:", error);
    }
  };
  

  const EditModal = ({ visible, closeModal, data, onSave }) => {
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

    const currentDate = new Date().toISOString().split("T")[0];

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Test Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information of Test Category</p>

          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Category Name"
            name="categoryName"
            value={formData?.categoryName || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code "
            name="uniqueCode"
            value={formData?.uniqueCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            name="description"
            value={formData?.description || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Submit
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
          <h4 className="fw-bold">Test Categories</h4>
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
              fileName="test_categories.pdf"
              title="Test Categories Data"
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
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          addRow={addRow}
          addNewItem={ addNewItem }
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
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

export default Testcategories;
