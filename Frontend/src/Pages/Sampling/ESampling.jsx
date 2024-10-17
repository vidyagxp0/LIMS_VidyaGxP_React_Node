import React, { useState, useEffect } from "react";
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
  CFormCheck,
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

function ESampling() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  useEffect(() => {
    fetchESamplingData();
  }, []);

  const fetchESamplingData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/sESampling`);
      const formattedData = response?.data[0]?.sESampling || [];
      const updatedData = formattedData.map((item,index) => ({
        ...item,
        sno: index+1, // Use uniqueId as sno
        checkbox: false,
        addedOn: new Date().toLocaleString("en-IN", {
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
      console.error("Error fetching E-Sampling data:", error);
      toast.error("Failed to fetch E-Sampling data");
    }
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sESampling/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        toast.success("E-Sampling data deleted successfully");
        fetchESamplingData();
      } else {
        toast.error("Failed to delete E-Sampling data");
      }
    } catch (error) {
      console.error("Error deleting E-Sampling data:", error);
      toast.error("Error deleting E-Sampling data");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData(data.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOpenModals = () => setIsModalsOpen(true);
  const handleCloseModals = () => setIsModalsOpen(false);

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
    { 
      header: "Sr No.", 
      accessor: "sno",
      Cell: ({ value }) => value
    },
    { header: "Sampling Configuration", accessor: "samplingConfiguration" },
    { header: "Product/Material Name", accessor: "productMaterialName" },
    { header: "No. of Containers", accessor: "noOfContainers" },
    { header: "Containers Sampled", accessor: "containersSampled" },
    { header: "Sampling Conclusion", accessor: "samplingConclusion" },
    {
      header: "Sample BarCode",
      accessor: "sampleBarcode",
      Cell: ({ row }) => (
        <img
          src={row.original.sampleBarcode}
          alt={`Barcode for ${row.original.productMaterialName}`}
          style={{ height: "40px", width: "40px", objectFit: "contain" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/40";
          }}
        />
      ),
    },
    {
      header: "Added On",
      accessor: "addedOn",
      Cell: ({ value }) => {
        if (!value) return "N/A";
        const date = new Date(value);
        return date.toLocaleString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      },
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
    const productMaterialNameLower =
      row.productMaterialName?.toLowerCase() || "";
    return (
      productMaterialNameLower.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      ...item,
      sno: index + 1,
      checkbox: false,
    }));
    setData(updatedData);
    setIsModalsOpen(false);
  };

  const addNewESampling = async (newESampling) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sESampling`,
        newESampling
      );
      console.log("e res", response);
      if (response.status === 200) {
        const addedESampling = response.data;
        const currentDateTime = new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        });
        setData((prevData) => [
          {
            ...addedESampling,
            sno: prevData.length + 1,
            checkbox: false,
            addedOn: currentDateTime,
          },
          ...prevData,
        ]);
        toast.success("E-Sampling added successfully");
        fetchESamplingData();
      }
    } catch (error) {
      console.error("Error adding E-Sampling:", error);
      toast.error("Failed to add E-Sampling");
    }
    setIsModalOpen(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    const { sno, ...dataToSend } = updatedData;
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sESampling/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        toast.success("E-Sampling updated successfully");
        fetchESamplingData();
      }
    } catch (error) {
      console.error("Error updating E-Sampling:", error);
      toast.error("Failed to update E-Sampling");
    }
    setEditModalData(null);
  };

  const handleStatusUpdate = (eSampling, newStatus) => {
    console.log(eSampling, "eSampling");

    const updatedData = data.map((item) =>
      item.uniqueId === eSampling.uniqueId
        ? { ...item, status: newStatus }
        : item
    );
    setData(updatedData);
    // console.log(updatedData,"UpdatedData");
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [eSamplingData, setESamplingData] = useState({
      samplingConfiguration: "",
      productMaterialName: "",
      noOfContainers: "",
      containersSampled: "",
      samplingConclusion: "",
      status: "Active",
    });

    const handleAddESampling = (e) => {
      e.preventDefault();
      onAdd(eSamplingData);
    };

    const handleInputChange = (field, value) => {
      setESamplingData({ ...eSamplingData, [field]: value });
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="md"
      >
        <CModalHeader>
          <CModalTitle>Add E-Sampling</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleAddESampling}>
            <CFormSelect
              className="mb-3"
              label="Sampling Configuration"
              value={eSamplingData.samplingConfiguration}
              onChange={(e) =>
                handleInputChange("samplingConfiguration", e.target.value)
              }
              options={[
                "Select...",
                { label: "SC-072023-0000001", value: "SC-072023-0000001" },
                { label: "SC-072023-0000002", value: "SC-072023-0000002" },
                { label: "SC-072023-0000003", value: "SC-072023-0000003" },
              ]}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product/Material Name"
              value={eSamplingData.productMaterialName}
              onChange={(e) =>
                handleInputChange("productMaterialName", e.target.value)
              }
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="No. of Containers"
              value={eSamplingData.noOfContainers}
              onChange={(e) =>
                handleInputChange("noOfContainers", e.target.value)
              }
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Containers Sampled"
              value={eSamplingData.containersSampled}
              onChange={(e) =>
                handleInputChange("containersSampled", e.target.value)
              }
            />
            <CFormSelect
              className="mb-3"
              label="Sampling Conclusion"
              value={eSamplingData.samplingConclusion}
              onChange={(e) =>
                handleInputChange("samplingConclusion", e.target.value)
              }
              options={[
                "Select...",
                { label: "Complies", value: "Complies" },
                { label: "Does Not Comply", value: "Does Not Comply" },
              ]}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleAddESampling}>
            Add E-Sampling
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
          <CModalTitle>Edit E-Sampling</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormSelect
              className="mb-3"
              label="Sampling Configuration"
              name="samplingConfiguration"
              value={formData?.samplingConfiguration || ""}
              onChange={handleChange}
              options={[
                "Select...",
                { label: "SC-072023-0000001", value: "SC-072023-0000001" },
                { label: "SC-072023-0000002", value: "SC-072023-0000002" },
                { label: "SC-072023-0000003", value: "SC-072023-0000003" },
              ]}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product/Material Name"
              name="productMaterialName"
              value={formData?.productMaterialName || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="No. of Containers"
              name="noOfContainers"
              value={formData?.noOfContainers || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Containers Sampled"
              name="containersSampled"
              value={formData?.containersSampled || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              label="Sampling Conclusion"
              name="samplingConclusion"
              value={formData?.samplingConclusion || ""}
              onChange={handleChange}
              options={[
                "Select...",
                { label: "Complies", value: "Complies" },
                { label: "Does Not Comply", value: "Does Not Comply" },
              ]}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
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
          <h4 className="fw-bold">E-Sampling</h4>
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
              fileName="E_Sampling.pdf"
              title="E-Sampling Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add E-Sampling" color="blue" onClick={openModal} />
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
          title="E-Sampling Details"
          updateStatus={handleStatusUpdate}
        />
      )}

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewESampling}
        />
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

export default ESampling;
