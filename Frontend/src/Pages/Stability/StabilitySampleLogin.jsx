























import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormSelect,
} from "@coreui/react";
import axios from "axios";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ReusableModal from "../Modals/ResusableModal";
import {BASE_URL} from "../../config.json";
import { toast } from "react-toastify";

const fields = [
  { label: "Sample Type", key: "sampleType" },
  { label: "Product Material", key: "productMaterial" },
  { label: "Generic Name", key: "genericName" },
  { label: "Specification Code", key: "specificationCode" },
  { label: "Status", key: "status" },
];

function StabilitySampleLogin() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };
  
  const filteredData = data.filter((row) => {
    const uniqueCode = row.specificationCode ? row.specificationCode.toLowerCase() : ""; // Safely handle undefined
    const isMatchingSearchQuery = uniqueCode.includes(searchQuery.toLowerCase());
    const isMatchingStatus = statusFilter === "All" || row.status === statusFilter;
  
    return isMatchingSearchQuery && isMatchingStatus;
  });
  
  console.log("filteredData",filteredData)

  const onViewDetails = (rowData) => {
    setViewModalData(rowData); 
    setIsViewModalOpen(true); 
    
  };

  
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product / Material", accessor: "productMaterial" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Specification Code", accessor: "specificationCode" },
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
  const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/get-all-lims/sMSampleLogin`);
        const fetchedData = response.data[0]?.sMSampleLogin        || [] || [];
        const updatedData = fetchedData.map((item, index) => ({
            ...item,
            sno: index + 1,
            checkbox: false,
            NoOfCheckItems: item.NoOfCheckItems || 0, // Assuming this field exists in the fetched data
            updatedAt: item.updatedAt || new Date().toLocaleDateString(), // Assuming this field exists in the fetched data
        }));

        setData(updatedData); // Ensure this updates the state correctly
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


useEffect(() => {
    fetchData(); // Ensure this is called to fetch data on component mount
}, []);

  
const handleModalSubmit = async (newEntry) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/manage-lims/add/sMSampleLogin`,
      {
        ...newEntry,
        status: newEntry.status || "INITIATED",
      }
    );
    if (response.status === 200) {
      toast.success("Sample added successfully.");
      fetchData(); // Refresh data after adding
      setIsModalOpen(false); // Close modal
    } else {
      toast.error("Failed to add sample.");
    }
  } catch (error) {
    toast.error("Error adding sample: " + (error.response?.data || error.message));
  }
};
  
  
const closeViewModal = () => {
  setIsViewModalOpen(false);
  setIsViewModalOpen(null); 
};


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };


  

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,

      sno: initialData.length + index + 1,
      sampleType: item["Sample Type"] || "",
      productMaterial: item["Product / Material"] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };


  const handleDelete = async (item) => {
    console.log("Deleting item with uniqueId:", item.uniqueId); // Log the uniqueId
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/sMSampleLogin/${item.uniqueId}`);
      console.log("Delete response:", response); // Log the response
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Data deleted successfully");
        fetchData(); // Optional: Refresh data after deletion
      } else {
        console.error("Failed to delete item:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item: " + (error.response?.data || error.message));
    }
  };
  
  
  
  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      console.error("New status is undefined");
      toast.error("Invalid Status update");
      return;
    }
    if (!viewModalData || !viewModalData.uniqueId) {
      console.error("No valid admin data selected for update");
      toast.error("No valid data selected for update");
      return;
    }
  
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMSampleLogin/${viewModalData.uniqueId}`,
        { status: newStatus }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        toast.success("Status updated successfully");
        closeViewModal();
        // fetchStorageCondition(); // Refresh the data after update
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };  
  
  
  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [testPlan, setTestPlan] = useState("");
    const [productMaterial, setProductMaterial] = useState("");
    const [productMaterialCode, setProductMaterialCode] = useState("");
    const [genericName, setGenericName] = useState("");
    const [specificationId, setSpecificationId] = useState("");
    const [copySampleForm, setCopySampleForm] = useState("");
    const [sampleType, setSampleType] = useState("");
    const [certificatsIfAny, setCertificatsIfAny] = useState("");
    const [protocolId, setProtocolId] = useState("");
    const [storageCondition, setStorageCondition] = useState("");

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleAdd = () => {
      const newCondition = {
        sampleType: sampleType,
        productMaterial: productMaterial,
        genericName: genericName,
        specificationCode: "SPECI 001",
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
            <CModalTitle>Add Sample login</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Test Plan / Revision No."
              placeholder="Select... "
              options={[
                "Select...",
                { label: "Hydroulic Oil" },
                { label: "CHP Oil" },
                { label: "Sacubitril" },
                { label: "Bio burden Test For PM" },
              ]}
              value={testPlan}
              onChange={(e) => setTestPlan(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product / Material"
              placeholder=" Product / Material"
              value={productMaterial}
              onChange={(e) => setProductMaterial(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product / Material Code"
              placeholder=" Product / Material Code"
              value={productMaterialCode}
              onChange={(e) => setProductMaterialCode(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Generic Name"
              placeholder=" Generic Name"
              value={genericName}
              onChange={(e) => setGenericName(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification ID"
              placeholder="Specification ID"
              value={specificationId}
              onChange={(e) => setSpecificationId(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Copy Sample from"
              placeholder=" Select..."
              options={["Select...", { label: "No Options" }]}
              value={copySampleForm}
              onChange={(e) => setCopySampleForm(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="select"
              label="Sample Type"
              placeholder="Sample Type"
              value={sampleType}
              onChange={(e) => setSampleType(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Certificates (If any)"
              placeholder=" Select..."
              options={["Select...", { label: "No Options" }]}
              value={certificatsIfAny}
              onchange={(e) => setCertificatsIfAny(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Protocol ID"
              placeholder=" Select..."
              options={[
                "Select...",
                { label: "HCL10132%" },
                { label: "HOS 234" },
                { label: "CHPOIL001" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={protocolId}
              onchange={(e) => setProtocolId(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Storage Conditions"
              placeholder=" Select..."
              options={[
                "Select...",
                { label: "°F" },
                { label: "30°C" },
                { label: "42°F" },
                { label: "25°C ± 2" },
                { label: "32°C" },
                { label: "24°F" },
                { label: "25°C" },
              ]}
              value={storageCondition}
              onChange={(e) => setStorageCondition(e.target.value)}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={handleAdd}>
              Add Sample
            </CButton>
          </CModalFooter>
        </CModal>
      </>
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
        const response = await axios.put(`${BASE_URL}/manage-lims/update/sMSampleLogin/${updatedData.uniqueId}`, updatedData);
        if (response.status === 200) {
            const newData = data.map((item) =>
                item.sno === updatedData.sno ? updatedData : item
            );
            setData(newData);
            setEditModalData(null);
            toast.success("Data updated successfully."); // Notify success
        } else {
            toast.error("Failed to update data."); // Notify failure
        }
    } catch (error) {
        console.error("Error updating data:", error);
        toast.error("Error updating data: " + (error.response?.data || error.message));
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
    
    
  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);

      const response = await axios.put(`${BASE_URL}/manage-lims/update/sMSampleLogin/${viewModalData.uniqueId}`, {
        ...dataToSend,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId ? { ...item, status: newStatus } : item
          )
        );
        toast.success("Approval status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Approval status");
      }
    } catch (error) {
      console.error("Error updating Approval status:", error);
      toast.error("Error updating Approval status"); ``
    }
  };
    
  // const filteredData = data.filter((row) => {
  //   return (
  //     row.reportTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
  //     (statusFilter === "All" || row.status === statusFilter)
  //   );
  // });
  //   console.log("filteredData",filteredData)

    return (
      <>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Sample login</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Test Plan / Revision No."
              placeholder="Select... "
              name="testPlan"
              options={[
                "Select...",
                { label: "Hydroulic Oil" },
                { label: "CHP Oil" },
                { label: "Sacubitril" },
                { label: "Bio burden Test For PM" },
              ]}
              value={formData?.testPlan || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product / Material"
              placeholder=" Product / Material"
              name="productMaterial"
              value={formData?.productMaterial || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product / Material Code"
              placeholder=" Product / Material Code"
              name="productMaterialCode"
              value={formData?.productMaterialCode || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Generic Name"
              name="genericName"
              placeholder=" Generic Name"
              value={formData?.genericName || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification ID"
              name="specificationId"
              placeholder="Specification ID"
              value={formData?.specificationId || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Copy Sample from"
              placeholder=" Select..."
              name="copySampleForm"
              options={["Select...", { label: "No Options" }]}
              value={formData?.copySampleForm || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="select"
              label="Sample Type"
              name="sampleType"
              placeholder="Sample Type"
              value={formData?.sampleType || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Certificates (If any)"
              placeholder=" Select..."
              name="certificatsIfAny"
              options={["Select...", { label: "No Options" }]}
              value={formData?.certificatsIfAny || ""}
              onchange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Protocol ID"
              placeholder=" Select..."
              name="protocolID"
              options={[
                "Select...",
                { label: "HCL10132%" },
                { label: "HOS 234" },
                { label: "CHPOIL001" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={formData?.protocolId || ""}
              onchange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Storage Conditions"
              placeholder=" Select..."
              name="storageCondition"
              options={[
                "Select...",
                { label: "°F" },
                { label: "30°C" },
                { label: "42°F" },
                { label: "25°C ± 2" },
                { label: "32°C" },
                { label: "24°F" },
                { label: "25°C" },
              ]}
              value={formData?.storageCondition || ""}
              onChange={handleChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={handleSave}>
              Add Sample
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  return (
    <>
   <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sample Log In</h1>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {/* Card components for status counts */}
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
              fileName="Sample_Login.pdf"
              title="Sample Login Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample LogIn"
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
        {isModalOpen && (
          <StatusModal
            visible={isModalOpen}
            closeModal={closeModal}
            onAdd={handleModalSubmit}
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
        visible={isViewModalOpen} // Use isViewModalOpen to control visibility
        closeModal={closeViewModal}
        data={viewModalData}
        onClose={handleCloseModals}
        fields={fields}
        title="Standard Protocol Details"
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
      </div>
    </>
  );
}

export default StabilitySampleLogin;
