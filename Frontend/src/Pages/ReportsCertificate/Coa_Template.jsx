import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CForm, CFormInput, CFormSelect } from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";

const Coa_Template = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    fetchCoaTemplateData();
  }, []);

  const fetchCoaTemplateData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/rCCoaTemplate`);
      const formattedData = response?.data[0]?.rCCoaTemplate || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching COA Template data:", error);
      toast.error("Failed to fetch COA Template data");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData((prevData) => prevData.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = useCallback((index) => {
    setData((prevData) =>
      prevData.map((item, i) => (i === index ? { ...item, checkbox: !item.checkbox } : item))
    );
  }, []);

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/rCCoaTemplate/${item.uniqueId}`);
      if (response?.status === 200) {
        setData((prevData) => prevData.filter((d) => d.uniqueId !== item.uniqueId));
        toast.success("COA Template data deleted successfully");
        fetchCoaTemplateData();
      } else {
        toast.error("Failed to delete COA Template data");
      }
    } catch (error) {
      console.error("Error deleting COA Template data:", error);
      toast.error("Error deleting COA Template data");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus || !viewModalData) {
      toast.error("Invalid status update");
      return;
    }
    try {
      const { sno, ...dataToSend } = viewModalData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/rCCoaTemplate/${viewModalData.uniqueId}`, {
        ...dataToSend,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId ? { ...item, status: newStatus } : item
          )
        );
        toast.success("COA Template status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update COA Template status");
      }
    } catch (error) {
      console.error("Error updating COA Template status:", error);
      toast.error("Error updating COA Template status");
    }
  };

  const addNewCoaTemplate = async (newCoaTemplate) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/rCCoaTemplate`, newCoaTemplate);
      if (response.status === 200) {
        const addedCoaTemplate = response.data;
        setData((prevData) => [
          {
            ...addedCoaTemplate,
            checkbox: false,
          },
          ...prevData,
        ]);
        toast.success("COA Template added successfully");
        setIsModalOpen(false);
        fetchCoaTemplateData();
      } else {
        toast.error("Failed to add COA Template");
      }
    } catch (error) {
      console.error("Error adding COA Template:", error);
      toast.error("Failed to add COA Template");
    }
    setIsModalOpen(false);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const { sno, ...dataToSend } = updatedData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/rCCoaTemplate/${updatedData.uniqueId}`, dataToSend);
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => (item.uniqueId === updatedData.uniqueId ? { ...updatedData, sno: item.sno } : item))
        );
        toast.success("COA Template updated successfully");
      } else {
        toast.error("Failed to update COA Template");
      }
    } catch (error) {
      console.error("Error updating COA Template:", error);
      toast.error("Error updating COA Template");
    }
    setEditModalData(null);
  };

  const handleExcelDataUpload = useCallback(
    (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false,
        sno: data.length + index + 1,
        SampleType: item["Sample Type"] || "",
        CoaId: item["COA ID"] || "",
        CoaType: item["COA Type"] || "",
        UpdatedAt: item["Updated At"] || "",
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
    { header: "Sr No.", accessor: "sno" },
    { header: "Sample Type", accessor: "SampleType" },
    { header: "COA ID", accessor: "CoaId" },
    { header: "COA Type", accessor: "CoaType" },
    { header: "Updated At", accessor: "UpdatedAt" },
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
    const sampleTypeMatch = row.SampleType?.toLowerCase().includes(searchQuery.toLowerCase()) ?? true;
    const statusMatch = statusFilter === "All" || row.status === statusFilter;
    return sampleTypeMatch && statusMatch;
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

  const CoaTemplateModal = ({ visible, closeModal, onAdd }) => {
    const [coaTemplate, setCoaTemplate] = useState({
      SampleType: "",
      CoaType: "",
      ReportTitle: "",
      MaterialCaption: "",
      SerialNo: "",
      FormatNo: "",
      CoaId:"",
      UpdatedAt:"",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCoaTemplate((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({
        ...coaTemplate,
        status: "Active",
      });
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add COA Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormSelect
              className="mb-3"
              label="Sample Type"
              name="SampleType"
              value={coaTemplate.SampleType}
              onChange={handleInputChange}
              options={[
                { label: "Select...", value: "" },
                { label: "Hydraulic Oil", value: "Hydraulic Oil" },
                { label: "HCL", value: "HCL" },
                { label: "Petrochemical", value: "Petrochemical" },
                { label: "Initiated Product", value: "Initiated Product" },
              ]}
              required
            />
              <CFormInput
              className="mb-3"
              type="text"
              label="COA ID"
              name="CoaId"
              value={coaTemplate.CoaId}
              onChange={handleInputChange}
              required
            />
            
            <CFormSelect
              className="mb-3"
              label="COA Type"
              name="CoaType"
              value={coaTemplate.CoaType}
              onChange={handleInputChange}
              options={[
                { label: "Select COA Type", value: "" },
                { label: "With Specification", value: "With Specification" },
                { label: "Without Specification", value: "Without Specification" },
                { label: "ERP", value: "ERP" },
              ]}
              required
            />
             <CFormInput
              className="mb-3"
              type="Date"
              label="Updated At"
              name="UpdatedAt"
              value={coaTemplate.UpdatedAt}
              onChange={handleInputChange}
              required
            />
            
            <CFormInput
              className="mb-3"
              type="text"
              label="Report Title"
              name="ReportTitle"
              value={coaTemplate.ReportTitle}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product/Material Caption"
              name="MaterialCaption"
              value={coaTemplate.MaterialCaption}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              name="SerialNo"
              value={coaTemplate.SerialNo}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Format No."
              name="FormatNo"
              value={coaTemplate.FormatNo}
              onChange={handleInputChange}
              required
            />
            <CModalFooter>
              <CButton color="secondary" onClick={closeModal}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                Add COA Template
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
          <CModalTitle>Edit COA Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormSelect
              className="mb-3"
              label="Sample Type"
              name="SampleType"
              value={formData?.SampleType || ""}
              onChange={handleChange}
              options={[
                { label: "Select...", value: "" },
                { label: "Hydraulic Oil", value: "Hydraulic Oil" },
                { label: "HCL", value: "HCL" },
                { label: "Petrochemical", value: "Petrochemical" },
                { label: "Initiated Product", value: "Initiated Product" },
              ]}
            />
            
            <CFormInput
              className="mb-3"
              type="text"
              label="COA ID"
              name="CoaId"
              value={formData?.CoaId || ""}
              onChange={handleChange}
              required
            />
            <CFormSelect
              className="mb-3"
              label="COA Type"
              name="CoaType"
              value={formData?.CoaType || ""}
              onChange={handleChange}
              options={[
                { label: "Select COA Type", value: "" },
                { label: "With Specification", value: "With Specification" },
                { label: "Without Specification", value: "Without Specification" },
                { label: "ERP", value: "ERP" },
              ]}
            />
                <CFormInput
              className="mb-3"
              type="Date"
              label="Updated At"
              name="UpdatedAt"
              value={formData?.UpdatedAt || ""}
              onChange={handleChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Report Title"
              name="ReportTitle"
              value={formData?.ReportTitle || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product/Material Caption"
              name="MaterialCaption"
              value={formData?.MaterialCaption || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Serial No."
              name="SerialNo"
              value={formData?.SerialNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Format No."
              name="FormatNo"
              value={formData?.FormatNo || ""}
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Certificate of Analysis</h1>
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
              title="COA Template"
              fileName="COATemplate.pdf"
            />
            <ATMButton text="Import" color="pink" onClick={() => setIsModalsOpen(true)} />
            <ATMButton text="Add COA Template" color="blue" onClick={() => setIsModalOpen(true)} />
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

      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter((field) => field.key !== "action" && field.key !== "checkbox")}
          title="COA Template Details"
          updateStatus={handleStatusUpdate}
        />
      )}

      {isModalOpen && (
        <CoaTemplateModal
          visible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          onAdd={addNewCoaTemplate}
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
};

export default Coa_Template;