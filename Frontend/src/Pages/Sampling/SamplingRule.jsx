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

function SamplingRule() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    fetchSamplingRuleData();
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
  const fetchSamplingRuleData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/sSamplingRule`);
      const formattedData = response?.data[0]?.sSamplingRule || [];
      console.log("Response Data:", response.data);
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
        updatedAt:convertToIST(item.updatedAt),
      }));
      console.log("Updated Data:", updatedData);
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Sampling Rule data:", error);
      toast.error("Failed to fetch Sampling Rule data");
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
      const response = await axios.delete(`${BASE_URL}/delete-lims/sSamplingRule/${item.uniqueId}`);
      if (response?.status === 200) {
        setData((prevData) => prevData.filter((d) => d.uniqueId !== item.uniqueId));
        toast.success("Sampling Rule deleted successfully");
        fetchSamplingRuleData();
      } else {
        toast.error("Failed to delete Sampling Rule");
      }
    } catch (error) {
      console.error("Error deleting Sampling Rule:", error);
      toast.error("Error deleting Sampling Rule");
    }
  };

  const handleStatusUpdate = async (updatedData, newStatus) => {
    try {
      const response = await axios.put(`${BASE_URL}/manage-lims/update/sSamplingRule/${updatedData.uniqueId}`, {
        ...updatedData,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === updatedData.uniqueId ? { ...item, status: newStatus } : item
          )
        );
        toast.success("Sampling Rule status updated successfully");
      } else {
        toast.error("Failed to update Sampling Rule status");
      }
    } catch (error) {
      console.error("Error updating Sampling Rule status:", error);
      toast.error("Error updating Sampling Rule status");
    }
  };

  const addNewSamplingRule = async (newSamplingRule) => {
    try {
     const currentDateTime=new Date().toISOString();
      const response = await axios.post(`${BASE_URL}/manage-lims/add/sSamplingRule`, {...newSamplingRule,updatedAt:currentDateTime,status:"Active"});
      if (response.status === 200) {
        const addedSamplingRule = response.data;
  
        setData((prevData) => [
          {
            ...addedSamplingRule,
            checkbox: false,
            updatedAt: new Date(addedSamplingRule.updatedAt).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }), 
          },
          ...prevData,
        ]);
  
        toast.success("Sampling Rule added successfully");
        fetchSamplingRuleData();
      }
    } catch (error) {
      console.error("Error adding Sampling Rule:", error);
      toast.error("Failed to add Sampling Rule");
    }
    
    setIsModalOpen(false); // Close the modal after completion
  };
  
  

  const handleEditSave = async (updatedData) => {
    try {
      const {sno,...dataToSend}=updatedData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/sSamplingRule/${updatedData.uniqueId}`, dataToSend);
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => (item.uniqueId === updatedData.uniqueId ? updatedData : item))
        );
        toast.success("Sampling Rule updated successfully");
      } else {
        toast.error("Failed to update Sampling Rule");
      }
    } catch (error) {
      console.error("Error updating Sampling Rule:", error);
      toast.error("Error updating Sampling Rule");
    }
    setEditModalData(null);
  };

  const handleExcelDataUpload = useCallback(
    (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false,
        sno: data.length + index + 1,
        uniqueCode: item["Unique Code"] || "",
        description: item["Description"] || "",
        numberofRanges: item["Number of Ranges"] || "",
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
    const uniqueCodeMatch = row.uniqueCode ? row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const descriptionMatch = row.description ? row.description.toLowerCase().includes(searchQuery.toLowerCase()) : false;

    return (uniqueCodeMatch || descriptionMatch) && (statusFilter === "All" || row.status === statusFilter);
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
    const [formData, setFormData] = useState({
      uniqueCode: "",
      description: "",
      numberofRanges: "",
      status:"Active"
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
      onAdd(formData);
      setFormData({
        uniqueCode: "",
        description: "",
        numberofRanges: "",
        status:"Active"
      });
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Sampling Rule</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Unique Code"
              name="uniqueCode"
              value={formData.uniqueCode}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Number of Ranges"
              name="numberofRanges"
              value={formData.numberofRanges}
              onChange={handleChange}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSubmit}>
            Add
          </CButton>
        </CModalFooter>
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
          <CModalTitle>Edit Sampling Rule</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Unique Code"
              name="uniqueCode"
              value={formData?.uniqueCode || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              name="description"
              value={formData?.description || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Number of Ranges"
              name="numberofRanges"
              value={formData?.numberofRanges || ""}
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
            <PDFDownload columns={columns} data={filteredData} fileName="SamplingRule.pdf" title="Sampling Rule Data" />
            <ATMButton text="Import" color="pink" onClick={() => setIsModalsOpen(true)} />
            <ATMButton text="Add Sampling Rule" color="blue" onClick={() => setIsModalOpen(true)} />
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
        {console.log("Filtered Data",filteredData)}
      </div>

      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter((field) => field.key !== "action" && field.key !== "checkbox")}
          title="Sampling Rule Details"
          updateStatus={(newStatus) => handleStatusUpdate(viewModalData, newStatus)}
        />
      )}

      {isModalOpen && <StatusModal visible={isModalOpen} closeModal={() => setIsModalOpen(false)} onAdd={addNewSamplingRule} />}

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
        <EditModal visible={Boolean(editModalData)} closeModal={closeEditModal} data={editModalData} onSave={handleEditSave} />
      )}
    </>
  );
}

export default SamplingRule;