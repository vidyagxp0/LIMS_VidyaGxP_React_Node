import React, { useState, useEffect } from "react";
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
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";

const fields = [
  { label: "SrNo.", key: "uniqueId" },
  { label: "Unique Code", key: "uniqueCode" },
  { label: "Description", key: "description" },
  { label: "Number of Ranges", key: "numberofRanges" },
  { label: "Updated At", key: "updatedAt" },
  { label: "Status", key: "status" }
];

function SamplingRule() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const convertToIST = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sSamplingRule`
      );
      console.log("Raw API Response:", response.data);
      if (Array.isArray(response.data) && response.data.length > 0) {
        const samplingRuleData = response.data[0].sSamplingRule;
        if (Array.isArray(samplingRuleData)) {
          const updatedData = samplingRuleData.map((item) => ({
            ...item,
            updatedAt: convertToIST(item.updatedAt),
          }));
          setData(updatedData);
        } else {
          console.error("sSamplingRule is not an array:", samplingRuleData);
        }
      } else {
        console.error(
          "API response is not an array or is empty:",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      // Make the API call to delete the item
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sSamplingRule/${item.sno}`
      );

      if (response.status === 200) {
        // If deletion is successful, filter out the deleted item from state
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        console.log("Deleted item:", item);
      } else {
        console.error("Failed to delete sampling rule:", response.data);
      }
    } catch (error) {
      console.error("Error deleting sampling rule:", error);
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "uniqueId" }, // Use uniqueId for SrNo
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
              onViewDetails(row.original);
              navigate("/testResultsDetails");
            }}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row.original)} // Corrected: Pass row data
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row.original)}
          />
        </>
      ),
    },
  ];
  // Filter data based on search query and status filter
  const filteredData = data.filter((row) => {
    const uniqueCode = row.uniqueCode || ""; // Assuming 'uniqueCode' exists
    const description = row.description || "";

    // Filter by searchQuery and status
    return (
      (uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      conditionCode: item["Condition Code"] || "",
      storageCondition: item["Stability Sampling rule"] || "",
      createdAt: item["Created At"] || "",
      attachment: item["Attachment"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  const addNewStorageCondition = async (newCondition) => {
    try {
      // Prepare the new condition object (not an array)
      const conditionData = {
        uniqueCode: newCondition.uniqueCode,
        description: newCondition.description,
        numberofRanges: newCondition.numberofRanges,
        updatedAt: new Date().toISOString(), // Current date as createdAt
        status: newCondition.status || "Active",
      };

      // Send the POST request with a single object (not an array)
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sSamplingRule`,
        conditionData
      );

      closeModal();
      console.log("Response received:", response.data);
    } catch (error) {
      console.error("Error creating  sampling rule", error);
    }
  };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.SamplingRule === SamplingRule ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [uniqueCode, setuniqueCode] = useState("");
    const [description, setdescription] = useState("");
    const [numberofRanges, setnumberofRanges] = useState("");
    const handleAdd = () => {
      const newCondition = {
        uniqueCode,
        description,
        numberofRanges,
        updatedAt: new Date().toISOString().split("T")[0],
        status: "active",
      };
      onAdd(newCondition);
    };
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Sampling rule</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="Unique Code"
            value={uniqueCode}
            onChange={(e) => setuniqueCode(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <CFormInput
            type="text"
            label="Number of Ranges"
            placeholder="Number of Ranges"
            value={numberofRanges}
            onChange={(e) => setnumberofRanges(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };
  const openEditModal = (rowData) => {
    console.log("Opening edit modal with data:", rowData); // Add this to check if function is called
    setEditModalData(rowData); // Set the data to state
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sSamplingRule/${updatedData.sno}`,
        {
          uniqueCode: updatedData.uniqueCode,
          description: updatedData.description,
          numberofRanges: updatedData.numberofRanges,
        }
      );

      if (response.status === 200) {
        // If the update is successful, update the state with the modified data
        const newData = data.map((item) =>
          item.sno === updatedData.sno ? updatedData : item
        );
        setData(newData);
        setEditModalData(null); // Close the modal after save
      } else {
        console.error("Failed to update sampling rule:", response.data);
      }
    } catch (error) {
      console.error("Error updating sampling rule", error);
    }
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    console.log(visible);
    const [formData, setFormData] = useState({
      uniqueCode: "",
      description: "",
      numberofRanges: "",
    });

    useEffect(() => {
      if (data) {
        setFormData({
          uniqueCode: data.uniqueCode || "",
          description: data.description || "",
          numberofRanges: data.numberofRanges || "",
        });
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave({ ...data, ...formData }); // Pass the updated data
    };
    const EditModal = ({ visible, closeModal, data, onSave }) => {
      const [formData, setFormData] = useState({
        uniqueCode: "",
        description: "",
        numberofRanges: "",
      });

      useEffect(() => {
        if (data) {
          setFormData({
            uniqueCode: data.uniqueCode || "",
            description: data.description || "",
            numberofRanges: data.numberofRanges || "",
          });
        }
      }, [data]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSave = () => {
        onSave({ ...data, ...formData }); // Pass the updated data
      };

      return (
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Edit Sampling Rule</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="text"
              label="Unique Code"
              placeholder="Unique Code"
              value={data.uniqueCode || ""}
              onChange={(e) =>
                setFormData({ ...formData, uniqueCode: e.target.value })
              }
            />
            <CFormInput
              type="text"
              label="Description"
              placeholder="Description"
              value={data.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <CFormInput
              type="text"
              label="Number of Ranges"
              placeholder="Number of Ranges"
              value={data.numberofRanges || ""}
              onChange={(e) =>
                setFormData({ ...formData, numberofRanges: e.target.value })
              }
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={handleSave}>
              Save
            </CButton>
          </CModalFooter>
        </CModal>
      );
    };
  };

  return (
    <>
      <LaunchQMS />
      <div className="m-5 mt-3">
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
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Storage_Condition.pdf"
              title="Sampling Rule"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sampling Rule"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        {data && data.length > 0 ? (
          <Table
            columns={columns}
            data={data} // Use raw data directly
            onCheckboxChange={handleCheckboxChange}
            onViewDetails={onViewDetails}
            onDelete={handleDelete}
            openEditModal={openEditModal}
          />
        ) : (
          <p>No Sampling Rule available.</p>
        )}
      </div>

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStorageCondition}
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
        <>
          {console.log("Rendering EditModal")}
          <EditModal
            visible={Boolean(editModalData)}
            closeModal={closeEditModal}
            data={editModalData}
            onSave={handleEditSave}
          />
        </>
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

export default SamplingRule;
