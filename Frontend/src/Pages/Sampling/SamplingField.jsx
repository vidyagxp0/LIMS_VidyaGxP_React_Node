import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormSelect,
} from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";

function SamplingField() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    fetchSamplingFieldData();
  }, []);

  const fetchSamplingFieldData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sSamplingField`
      );
      const formattedData = response?.data[0]?.sSamplingField || [];
      const updatedData = formattedData.map((item) => ({
        ...item,
        sno: item.uniqueId,
        checkbox: false,
        registeredOn: new Date(item.registeredOn).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Sampling Field data:", error);
      toast.error("Failed to fetch Sampling Field data");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData((prevData) =>
      prevData.map((row) => ({ ...row, checkbox: checked }))
    );
  };

  const handleCheckboxChange = useCallback((index) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, checkbox: !item.checkbox } : item
      )
    );
  }, []);

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sSamplingField/${item.uniqueId}`
      );
      if (response?.status === 200) {
        setData((prevData) =>
          prevData.filter((d) => d.uniqueId !== item.uniqueId)
        );
        toast.success("Sampling Field data deleted successfully");
      } else {
        toast.error("Failed to delete Sampling Field data");
      }
    } catch (error) {
      console.error("Error deleting Sampling Field data:", error);
      toast.error("Error deleting Sampling Field data");
    }
  };

  const handleStatusUpdate = (samplingField, newStatus) => {
    const updatedData = data.map((item) =>
      item.uniqueId === samplingField.uniqueId
        ? { ...item, status: newStatus }
        : item
    );
    setData(updatedData);
  };

  const addNewSamplingField = async (newSamplingField) => {
    try {
      const currentDateTime = new Date().toISOString(); // Standard ISO format
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sSamplingField`,
        { ...newSamplingField, registeredOn: currentDateTime } // Include registeredOn here
      );
      if (response.status === 200) {
        const addedSamplingField = response.data;
        setData((prevData) => [
          {
            ...addedSamplingField,
            checkbox: false,
            registeredOn: new Date(addedSamplingField.registeredOn).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }), // Format it for display as well
          },
          ...prevData, // Add new data at the beginning of the table
        ]);
        toast.success("Sampling Field added successfully");
      }
    } catch (error) {
      console.error("Error adding Sampling Field:", error);
      toast.error("Failed to add Sampling Field");
    }
    setIsModalOpen(false); // Close the modal after adding
  };

  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sSamplingField/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        const updatedRegisteredOn = new Date(updatedData.registeredOn).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === updatedData.uniqueId ? { ...updatedData, registeredOn: updatedRegisteredOn } : item
          )
        );
        toast.success("Sampling Field updated successfully");
      } else {
        toast.error("Failed to update Sampling Field");
      }
    } catch (error) {
      console.error("Error updating Sampling Field:", error);
      toast.error("Error updating Sampling Field");
    }
    setEditModalData(null);
  };

  const handleExcelDataUpload = useCallback(
    (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false,
        sno: data.length + index + 1,
        fieldName: item["Field Name"] || "",
        fieldType: item["Field Type"] || "",
        registeredBy: item["Registered By"] || "",
        registeredOn: new Date(item["Registered On"]).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        status: item["Status"] || "",
      }));
      setData((prevData) => [...prevData, ...updatedData]);
      setIsModalsOpen(false);
    },
    [data]
  );

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
    },
    { header: "Sr No.", accessor: "uniqueId" },
    { header: "Field Name", accessor: "fieldName" },
    { header: "Field Type", accessor: "fieldType" },
    { header: "Registered By", accessor: "registeredBy" },
    {
      header: "Registered On",
      accessor: "registeredOn",
    },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row.original)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
            onClick={() => openEditModal(row.original)}
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

  const filteredData = data.filter((row) => {
    const fieldNameMatch = row.fieldName
      ? row.fieldName.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
  
    return fieldNameMatch && (statusFilter === "All" || row.status === statusFilter);
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [samplingField, setSamplingField] = useState({
      fieldName: "",
      fieldType: "",
      registeredBy: "USER01", // You might want to get this from the logged-in user
      status: "Active",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSamplingField((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({
        ...samplingField,
        registeredOn: new Date().toISOString(),
      });
    };
  
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Sampling Field</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Field Name"
              name="fieldName"
              value={samplingField.fieldName}
              onChange={handleInputChange}
              required
            />
            <CFormSelect
              className="mb-3"
              label="Field Type"
              name="fieldType"
              value={samplingField.fieldType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Field Type</option>
              <option value="Radio Button">Radio Button</option>
              <option value="Label">Label</option>
              <option value="Entry Field">Entry Field</option>
              <option value="Date Field">Date Field</option>
            </CFormSelect>
            <CFormInput
              className="mb-3"
              type="text"
              label="Registered By"
              name="registeredBy"
              value={samplingField.registeredBy}
              onChange={handleInputChange}
              required
            />
            <CFormSelect
              className="mb-3"
              label="Status"
              name="status"
              value={samplingField.status}
              onChange={handleInputChange}
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </CFormSelect>
            <CModalFooter>
              <CButton color="secondary" onClick={closeModal}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                Add Sampling Field
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    );
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

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Edit Sampling Field</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Field Name"
              name="fieldName"
              value={formData?.fieldName || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              label="Field Type"
              name="fieldType"
              options={[
                "Select",
                { label: "Radio Button", value: "Radio Button" },
                { label: "Label", value: "Label" },
                { label: "Entry Field", value: "Entry Field" },
                { label: "Date Field", value: "Date Field" },
              ]}
              value={formData?.fieldType || ""}
              onChange={handleChange}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
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
          <h4 className="fw-bold">Sampling Field</h4>
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
              fileName="Sampling_Fields.pdf"
              title="Sampling Fields Data"
            />
            <ATMButton
              text="Import"
              color="pink"
              onClick={() => setIsModalsOpen(true)}
            />
            <ATMButton
              text="Add Sampling Field"
              color="blue"
              onClick={() => setIsModalOpen(true)}
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

      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter(
              (field) => field.key !== "action" && field.key !== "checkbox"
            )}
          title="Sampling Field Details"
          updateStatus={handleStatusUpdate}
        />
      )}

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          onAdd={addNewSamplingField}
        />
      )}

      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={() => setIsModalsOpen(false)}
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

export default SamplingField;
