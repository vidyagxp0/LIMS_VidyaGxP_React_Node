import { useEffect, useState } from "react";
import {
  CButton,
  CForm,
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
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
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
import Specifications from "./TestCategories.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const staticData = [
  {
    sno: 1,
    specificationType: "Product ",
    addedOn: "2024-01-01",
    status: "Active",
  },
  {
    sno: 2,
    specificationType: "Product ",
    addedOn: "2024-01-01",
    status: "Active",
  },
  // Add more static entries as needed
];

const initialData = JSON.parse(localStorage.getItem("data")) || "";

const fields = [
  { label: "Specification Type", key: "specificationType" },
  { label: "Added On", key: "addedOn" },

  { label: "Status", key: "status" },
];

function specficationtype() {
  // const [data, setData] = useState(initialData);
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
          `http://localhost:9000/get-all-lims/mSpecificationType`
        );
        const fetchData = response?.data[0]?.mSpecificationType || [];
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
      "mytest",
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

  console.log("Data:", data);
  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        console.log("Row:", row); // Log each row to see its structure
        const productName = row.productName || "";
        return (
          productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];
  // Fallback to an empty array if data is not an array

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
    { header: "Specification Type", accessor: "specificationType" },
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
      sno: index + 1,
      specificationType: item[" Specification Type"] || "",
      addedOn: item["Added On"] || "",

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
        `http://localhost:9000/delete-lims/mSpecificationType/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        console.log("Specification Type deleted successfully:", response.data);
      } else {
        console.error(
          "Failed to delete Specification Type:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error deleting Specification Type:", error);
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
    setData(newData);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };
  const StatusModal = ({ visible, closeModal, addRow, addNewItem }) => {
    const [specificationTypeData, setspecificationTypeData] = useState({
      specificationType: "",
      addedOn: new Date().toISOString().split("T")[0],
      status: "Active",
    });

    const handleSpecificationTypeSubmit = (e) => {
      e.preventDefault();

      axios
        .post(
          `http://localhost:9000/manage-lims/add/mSpecificationType`,
          specificationTypeData
        )
        .then((response) => {
          toast.success(
            response.data.message || "Specification Type added successfully!"
          );
          addRow(specificationTypeData);
          addNewItem(specificationTypeData);
          closeModal();
        })
        .catch((err) => {
          console.error(err);
          toast.error("Specification Type Already Registered");
        });
    };

    const handleInputChange = (field, value) => {
      const updatedData = { ...specificationTypeData, [field]: value };
      setspecificationTypeData(updatedData);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Specification Type</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSpecificationTypeSubmit}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification Type"
              placeholder=" Specification Type"
              name="specificationType"
              value={specificationTypeData.specificationType}
              onChange={(e) =>
                handleInputChange("specificationType", e.target.value)
              }
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Add On"
              placeholder="Add On "
              name="addedOn"
              value={specificationTypeData.addedOn}
              onChange={(e) => handleInputChange("addedOn", e.target.value)}
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
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/mSpecificationType/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.sno === updatedData.sno ? updatedData : item
        );
        setData(newData);
        setEditModalData(null);
        console.log("Specification Type updated successfully:", response.data);
      } else {
        console.error(
          "Failed to update Specification Type:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error updating Specification Type:", error);
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

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Specification Type</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Type"
            placeholder=" Specification Type"
            name="specificationType"
            value={formData?.specificationType || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Add On"
            placeholder="Add On "
            name="addedOn"
            value={formData.addedOn || ""}
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
          <h4 className="fw-bold">Specification Type</h4>
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
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Master_Product.pdf"
              title="Master Product Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Test Registrion"
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
          addRow={addRow}
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

export default specficationtype;
