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

const InvestigationCoa = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    fetchInvestigationCoaData();
  }, []);

  const fetchInvestigationCoaData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/rCInvestigationCoa`);
      const formattedData = response?.data[0]?.rCInvestigationCoa || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Investigation COA data:", error);
      toast.error("Failed to fetch Investigation COA data");
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
      const response = await axios.delete(`${BASE_URL}/delete-lims/rCInvestigationCoa/${item.uniqueId}`);
      if (response?.status === 200) {
        setData((prevData) => prevData.filter((d) => d.uniqueId !== item.uniqueId));
        toast.success("Investigation COA data deleted successfully");
        fetchInvestigationCoaData();
      } else {
        toast.error("Failed to delete Investigation COA data");
      }
    } catch (error) {
      console.error("Error deleting Investigation COA data:", error);
      toast.error("Error deleting Investigation COA data");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus || !viewModalData) {
      toast.error("Invalid status update");
      return;
    }
    try {
      const { sno, ...dataToSend } = viewModalData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/rCInvestigationCoa/${viewModalData.uniqueId}`, {
        ...dataToSend,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId ? { ...item, status: newStatus } : item
          )
        );
        toast.success("Investigation COA status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Investigation COA status");
      }
    } catch (error) {
      console.error("Error updating Investigation COA status:", error);
      toast.error("Error updating Investigation COA status");
    }
  };

  const addNewInvestigationCoa = async (newInvestigationCoa) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/rCInvestigationCoa`, newInvestigationCoa);
      if (response.status === 200) {
        const addedInvestigationCoa = response.data;
        setData((prevData) => [
          {
            ...addedInvestigationCoa,
            checkbox: false,
          },
          ...prevData,
        ]);
        toast.success("Investigation COA added successfully");
        setIsModalOpen(false);
        fetchInvestigationCoaData();
      } else {
        toast.error("Failed to add Investigation COA");
      }
    } catch (error) {
      console.error("Error adding Investigation COA:", error);
      toast.error("Failed to add Investigation COA");
    }
    setIsModalOpen(false);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const { sno, ...dataToSend } = updatedData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/rCInvestigationCoa/${updatedData.uniqueId}`, dataToSend);
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => (item.uniqueId === updatedData.uniqueId ? { ...updatedData, sno: item.sno } : item))
        );
        toast.success("Investigation COA updated successfully");
      } else {
        toast.error("Failed to update Investigation COA");
      }
    } catch (error) {
      console.error("Error updating Investigation COA:", error);
      toast.error("Error updating Investigation COA");
    }
    setEditModalData(null);
  };

  const handleExcelDataUpload = useCallback(
    (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false,
        sno: data.length + index + 1,
        SampleType: item["Sample Type"] || "",
        ProductMaterial: item["Product/Material"] || "",
        ArNo: item["AR NO."] || "",
        GenericName: item["Generic Name"] || "",
        SpecificationCode: item["Specification Code"] || "",
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
    { header: "Product/Material", accessor: "ProductMaterial" },
    { header: "AR NO.", accessor: "ArNo" },
    { header: "Generic Name", accessor: "GenericName" },
    { header: "Specification Code", accessor: "SpecificationCode" },
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

  const InvestigationCoaModal = ({ visible, closeModal, onAdd }) => {
    const [investigationCoa, setInvestigationCoa] = useState({
      SampleType: "",
      ProductMaterial: "",
      ArNo: "",
      GenericName: "",
      SpecificationCode: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInvestigationCoa((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({
        ...investigationCoa,
        status: "Active",
      });
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Investigation COA</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample Type"
              name="SampleType"
              value={investigationCoa.SampleType}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product/Material"
              name="ProductMaterial"
              value={investigationCoa.ProductMaterial}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="AR NO."
              name="ArNo"
              value={investigationCoa.ArNo}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Generic Name"
              name="GenericName"
              value={investigationCoa.GenericName}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification Code"
              name="SpecificationCode"
              value={investigationCoa.SpecificationCode}
              onChange={handleInputChange}
              required
            />
            <CModalFooter>
              <CButton color="secondary" onClick={closeModal}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                Add Investigation COA
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
          <CModalTitle>Edit Investigation COA</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample Type"
              name="SampleType"
              value={formData?.SampleType || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product/Material"
              name="ProductMaterial"
              value={formData?.ProductMaterial || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="AR NO."
              name="ArNo"
              value={formData?.ArNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Generic Name"
              name="GenericName"
              value={formData?.GenericName || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification Code"
              name="SpecificationCode"
              value={formData?.SpecificationCode || ""}
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
        <h1 className="text-2xl font-bold mb-4">Investigation COA</h1>
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
              title="Investigation COA"
              fileName="InvestigationCOA.pdf"
            />
            <ATMButton text="Import" color="pink" onClick={() => setIsModalsOpen(true)} />
            <ATMButton text="Add Investigation COA" color="blue" onClick={() => setIsModalOpen(true)} />
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
          title="Investigation COA Details"
          updateStatus={handleStatusUpdate}
        />
      )}

      {isModalOpen && (
        <InvestigationCoaModal
          visible={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          onAdd={addNewInvestigationCoa}
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

export default InvestigationCoa;






