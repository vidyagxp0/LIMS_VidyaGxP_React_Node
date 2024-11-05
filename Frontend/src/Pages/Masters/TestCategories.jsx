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
import { BASE_URL } from "../../config.json";

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
  const [data, setData] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/mTestCategories`
      );
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.mTestCategories?.map((condition) => ({
              checkbox: false,
              sno: condition.uniqueId,
              categoryName: condition.categoryName || "No Name",
              uniqueCode: condition.uniqueCode || "No Unique Code",
              description: condition.description || "No Generic Name",
              uniqueCode: condition.uniqueCode || "No Generic Name",
              addedOn: condition.addedOn || "No Generic Name",
              reviewDate: condition.reviewDate || "No Generic Name",

              status: condition.status || "Active",
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
        `https://limsapi.vidyagxp.com/delete-lims/mTestCategories/${item.sno}`
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
  const handleAdd = async (newProduct) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/mTestCategories`,
        {
          ...newProduct,
          addDate: new Date().toISOString().split("T")[0],
          status: newProduct.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Product added successfully.");
        fetchProductData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add Product.");
      }
    } catch (error) {
      toast.error(
        "Error adding product: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [reviewDate, setReviewDate] = useState("");
    const [effectFrom, setEffectFrom] = useState("");
    const [addedOn, setAddedOn] = useState("");
    const [description, setDescription] = useState("");
    const [uniqueCode, setUniqueCode] = useState("");
    const [categoryName, setCategoryName] = useState("");

    const handleProduct = () => {
      const newCondition = {
        reviewDate,
        effectFrom,
        addedOn,
        description,
        uniqueCode,
        categoryName,
        status: "active",
      };
      onAdd(newCondition);
    };

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
            label="Category Name"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Effect From"
            placeholder="Effect From"
            value={effectFrom}
            onChange={(e) => setEffectFrom(e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Review Date"
            placeholder="Review Date"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
          />

          <CButton color="primary" type="submit" onClick={handleProduct}>
            Submit
          </CButton>
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
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/mTestCategories/${updatedData.sno}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("Product updated successfully.");
        setEditModalData(null);
      } else {
        toast.error("Failed to update Product.");
      }
    } catch (error) {
      toast.error(
        "Error updating Product: " + (error.response?.data || error.message)
      );
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

    const handleEditTestCategory = (e) => {
      e.preventDefault();

      axios
        .put(
          `https://limsapi.vidyagxp.com/manage-lims/update/mTestCategories/${formData.uniqueId}`,
          formData
        )
        .then((response) => {
          toast.success(
            response.data.message || "Control Sample updated successfully!"
          );

          // Update the local state with the updated formData
          setData((prevData) =>
            prevData.map((item) =>
              item.sno === formData.sno ? formData : item
            )
          );

          closeModal();
        })
        .catch((err) => {
          console.error(err);
          toast.error("Error while updating Control Sample");
        });
    };

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
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Effect From"
            placeholder="Effect From"
            name="effectfrom"
            value={formData?.effectFrom || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Review date"
            placeholder="Review date"
            name="reviewDate"
            value={formData?.reviewDate || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleEditTestCategory}>
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
          onAdd={handleAdd}
          addNewItem={addNewItem}
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
