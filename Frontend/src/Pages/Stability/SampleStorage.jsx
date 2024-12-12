import React, { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormSelect,
  CFormCheck,
  CRow,
  CCol,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/ATM components/Table/Table";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ReusableModal from "../Modals/ResusableModal";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";

function SampleStorage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fields = [
    { label: "Sample ID", key: "sampleID" },
    { label: "Product Name", key: "productName" },
    { label: "Chamber ID", key: "chamberID" },
    { label: "Actual Quantity", key: "actualQuantity" },
    { label: "Available Quantity", key: "availableQuantity" },
    { label: "Protocol Type", key: "protocolType" },
    { label: "Status", key: "status" },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sMSampleStorage`
      );
      const fetchedData = response?.data[0]?.sMSampleStorage || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch sample storage data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);

      const response = await axios.put(
        `https://lims-api.mydemosoftware.com/manage-lims/update/sMSampleStorage/${viewModalData.uniqueId}`,
        {
          ...dataToSend,
          status: newStatus,
        }
      );
      if (response.status === 200) {
        setData((prevData) =>
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
      ``;
    }
  };

  const handleEditSave = async (updatedData) => {
    const { sno, checkbox, ...dataToSend } = updatedData;
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMSampleStorage/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...response.data }
            : item
        );
        setData(newData);
        closeEditModal();
        toast.success("Sample storage updated successfully");
        fetchData();
      } else {
        console.error("Failed to update sample storage:", response.statusText);
        toast.error("Failed to update sample storage");
      }
    } catch (error) {
      console.error("Error updating sample storage:", error);
      toast.error("Error updating sample storage");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const sampleId = row.sampleID || "";
        return (
          sampleId.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

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

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Product Name", accessor: "productName" },
    { header: "Chamber ID", accessor: "chamberID" },
    { header: "Actual Quantity", accessor: "actualQuantity" },
    { header: "Available Quantity", accessor: "availableQuantity" },
    { header: "Protocol Type", accessor: "protocolType" },
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
            onClick={() => openEditModal(row.original)}
            className="mr-2 cursor-pointer"
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sMSampleStorage/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Sample storage deleted successfully");
        fetchData();
      } else {
        console.error("Failed to delete sample storage:", response.statusText);
        toast.error("Failed to delete sample storage");
      }
    } catch (error) {
      console.error("Error deleting sample storage:", error);
      toast.error("Error deleting sample storage");
    }
  };

  const handleAdd = async (newSampleStorage) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sMSampleStorage`,
        {
          ...newSampleStorage,
          status: newSampleStorage.status || "INITIATED",
        }
      );
      if (response.status === 200) {
        toast.success("Sample storage added successfully");
        fetchData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add sample storage");
      }
    } catch (error) {
      toast.error(
        "Error adding sample storage: " +
          (error.response?.data || error.message)
      );
    }
  };

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/bulk-add/sMSampleStorage`,
        excelData
      );
      if (response.status === 200) {
        toast.success("Bulk upload successful");
        fetchData();
        handleCloseModals();
      } else {
        toast.error("Failed to upload data");
      }
    } catch (error) {
      toast.error(
        "Error uploading data: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [rows, setRows] = useState([]);
    const [specificationsID, setSpecificationsID] = useState("");
    const [protocolID, setProtocolID] = useState("");
    const [storageCondition, setStorageCondition] = useState("");
    const [chamberID, setChamberID] = useState("");
    const [actualStorageQuantity, setActualStorageQuantity] = useState("");
    const [availableStorageQuantity, setAvailableStorageQuantity] =
      useState("");
    const [numberOfStoragePosition, setNumberOfStoragePosition] = useState("");
    const [chamberDescription, setChamberDescription] = useState("");
    const [chamberLocation, setChamberLocation] = useState("");

    const handleAddRow = () => {
      const newRow = {
        id: rows.length + 1,
        rackNo: "",
        shelfNo: "",
        position: "",
        quantity: "",
        remarks: "",
      };
      setRows([...rows, newRow]);
    };

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };
    const handleAdd = () => {
      const newCondition = {
        productName: "Product",
        chamberID: chamberID,
        actualQuantity: actualStorageQuantity,
        availableQuantity: availableStorageQuantity,
        protocolType: "protocol-X",
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
            <CModalTitle>Add Sample Storage</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Specification ID"
              placeholder="Select... "
              options={[
                "",
                { label: "HCL10132%" },
                { label: "HOS 234" },
                { label: "CHPOIL001" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={specificationsID}
              onChange={(e) => setSpecificationsID(e.target.value)}
            />
            <CFormInput
              type="text"
              label="Product/Material Name"
              placeholder="Testamine "
              disabled
            />
            <CFormSelect
              type="text"
              label="Protocol ID"
              placeholder="select... "
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={protocolID}
              onChange={(e) => setProtocolID(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Storage Conditions"
              placeholder="select... "
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={storageCondition}
              onChange={(e) => setStorageCondition(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Chamber ID"
              placeholder="select... "
              value={chamberID}
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              onChange={(e) => setChamberID(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label=" Actual Storage Quantity"
              placeholder="Actual Storage Quantity "
              value={actualStorageQuantity}
              onChange={(e) => setActualStorageQuantity(e.target.value)}
            />

            <CFormInput
              className="mb-3"
              type="text"
              label="Available Storage Quantity"
              placeholder="Available Storage Quantity "
              value={availableStorageQuantity}
              onChange={(e) => setAvailableStorageQuantity(e.target.value)}
            />

            <div className="gap-4">
              <CFormInput
                className="mb-3"
                type="text"
                label="Number Of Storage Positions"
                placeholder="Number Of Positions"
                value={numberOfStoragePosition}
                onChange={(e) => setNumberOfStoragePosition(e.target.value)}
              />
              <CButton
                className="bg-primary text-white mb-4"
                onClick={handleAddRow}
              >
                Add Rows
              </CButton>
            </div>
            {rows.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Rack No.</th>
                    <th>Shelf No.</th>
                    <th>Position</th>
                    <th>Quantity (kg)</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 1}</td>
                      <td>
                        <select
                          value={row.rackNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].rackNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          {/* Populate options as needed */}
                          <option value="">Select..</option>
                          <option value="rack1">Rack 1</option>
                          <option value="rack2">Rack 2</option>
                          {/* Add more options */}
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.shelfNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].shelfNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          <option value="">Shelfs</option>
                          <option value="shelf1">Shelf 1</option>
                          <option value="shelf2">Shelf 2</option>
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.shelfNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].shelfNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          <option value="">Positions</option>
                          <option value="shelf1">Shelf 1</option>
                          <option value="shelf2">Shelf 2</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="border-1 border-gray-500"
                          value={row.quantity}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].quantity = e.target.value;
                            setRows(updatedRows);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].remarks = e.target.value;
                            setRows(updatedRows);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber Description"
              placeholder=" Chamber Description"
              value={chamberDescription}
              onChange={(e) => setChamberDescription(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber Location"
              placeholder=" Chamber Location"
              value={chamberLocation}
              onChange={(e) => setChamberLocation(e.target.value)}
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

    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Edit Sample Storage</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample ID"
              name="sampleID"
              value={formData?.sampleID || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product Name"
              name="productName"
              value={formData?.productName || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber ID"
              name="chamberID"
              value={formData?.chamberID || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Actual Quantity"
              name="actualQuantity"
              value={formData?.actualQuantity || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Available Quantity"
              name="availableQuantity"
              value={formData?.availableQuantity || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Protocol Type"
              name="protocolType"
              value={formData?.protocolType || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              label="Status"
              name="status"
              options={[
                "Select Status",
                { label: "INITIATED", value: "INITIATED" },
                { label: "APPROVED", value: "APPROVED" },
                { label: "REJECTED", value: "REJECTED" },
              ]}
              value={formData?.status || ""}
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
    <>
      <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Storage</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "INITIATED" },
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
              fileName="Sample_Storage.pdf"
              title="Sample Storage Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample Storage"
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
      </div>
      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={handleAdd}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          onClose={closeViewModal}
          title="Sample Storage Details"
          updateStatus={handleStatusUpdate}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={data}
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
    </>
  );
}

export default SampleStorage;
