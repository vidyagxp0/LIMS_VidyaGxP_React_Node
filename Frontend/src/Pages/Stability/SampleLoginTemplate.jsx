import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
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
  CFormCheck,
} from "@coreui/react";

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
function SampleLoginTemplate() {
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
  const [editModalData, setEditModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const fields = [
    { label: "S.No", key: "sno" },
    { label: "Template Title", key: "templateTitle" },
    { label: "Added On", key: "addedOn" },
    { label: "Status", key: "status" },
  ];

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
      if (counts.hasOwnProperty(item.status)) {
        counts[item.status]++;
      }
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
    const titleMatch = row.templateTitle && row.templateTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const statusMatch = statusFilter === "All" || row.status === statusFilter;
    return titleMatch && statusMatch;
  });

  console.log("fiterdata", filteredData);
  
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  

  
const columns = [
  {
    header: <input type="checkbox" onChange={handleSelectAll} />,
    accessor: "checkbox",
    Cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.original.checkbox || false}
        onChange={() => handleCheckboxChange(row.index)}
      />
    ),
  },
  { header: "SrNo.", accessor: "sno" },
  { header: "Template Title", accessor: "templateTitle" },
  { header: "Added On", accessor: "addedOn" },
  { header: "Status", accessor: "status" },
  {
    header: "Actions",
    accessor: "action",
    Cell: ({ row }) => (
      <div className="flex space-x-2">
        <FontAwesomeIcon
          icon={faEye}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(row.original);
          }}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="cursor-pointer text-green-500 hover:text-green-700"
          onClick={(e) => {
            e.stopPropagation();
            openEditModal(row.original);
          }}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="cursor-pointer text-red-500 hover:text-red-700"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(row.original);
          }}
        />
      </div>
    ),
  },
];

// ... rest of the code ...
  
  
  
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewModalData(null);
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
      sno: data.length + index + 1,
      templateTitle: item["Template Title"] || "",
      addedOn: item["Added On"] || new Date().toISOString().split('T')[0],
      status: item["Status"] || "INITIATED",
    }));

    setData((prevData) => [...prevData, ...updatedData]);
    setIsModalsOpen(false);
    toast.success("Data imported successfully");
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`http://localhost:9000/delete-lims/sMSampleLoginTemplate/${item.uniqueId}`);
      if (response.status === 200) {
        setData((prevData) => {
          const updatedData = prevData
            .filter((d) => d.uniqueId !== item.uniqueId)
            .map((d, index) => ({ ...d, sno: index + 1 }));
          return updatedData;
        });
        toast.success("Sample Login Template deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting sample login template:", error);
      toast.error("Failed to delete Sample Login Template");
    }
  };

  const addNewSampleLoginTemplate = async (newTemplate) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/sMSampleLoginTemplate`, {
        ...newTemplate,
        addedOn: new Date().toISOString().split("T")[0],
        status: "INITIATED",
      });

      if (response.status === 200 || response.status === 201) {
        setData((prevData) => [...prevData, { ...response.data, sno: prevData.length + 1 }]);
        toast.success("Sample Login Template added successfully");
        setIsModalOpen(false);
      } else {
        console.error("Failed to add sample login template:", response.status);
      }
    } catch (error) {
      console.error("Error adding sample login template:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sMSampleLoginTemplate`
      );
      const fetchedData = response?.data[0]?.sMSampleLoginTemplate || [];

      const updatedData = fetchedData?.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/sMSampleLoginTemplate/${viewModalData.uniqueId}`, {
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
      toast.error("Error updating Approval status");
    }
  };

  const handleEditSave = async (updatedData) => {
    try {
      const { sno, ...dataToSend } = updatedData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/sMSampleLoginTemplate/${updatedData.uniqueId}`, dataToSend);
      
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => 
            item.uniqueId === updatedData.uniqueId ? { ...updatedData, sno: item.sno } : item
          )
        );
        toast.success("Sample Login Template updated successfully");
      } else {
        toast.error("Failed to update Sample Login Template");
      }
    } catch (error) {
      console.error("Error updating Sample Login Template:", error);
      toast.error("Error updating Sample Login Template");
    }
    setEditModalData(null);
  };

  const StatusModal = ({ visible, closeModal, onSave }) => {
    const [templateTitle, setTemplateTitle] = useState("");
    const [checkboxes, setCheckboxes] = useState({
      referenceProtocolNo: false,
      customer: false,
      studyLocation: false,
      proposedMarket: false,
      batchType: false,
      batchNo: false,
      manufacturingDate: false,
      manufacturedAt: false,
      expiryRetestDate: false,
      packedAt: false,
      noOfAPIs: false,
      sourceOfAPI: false,
    });
    const [autoDetection, setAutoDetection] = useState("");

    const handleCheckboxChange = (e) => {
      setCheckboxes({ ...checkboxes, [e.target.id]: e.target.checked });
    };

    const handleSave = () => {
      const newTemplate = {
        templateTitle,
        ...checkboxes,
        autoDetection,
      };
      onSave(newTemplate);
      closeModal();
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Template Title"
            placeholder="Template title"
            value={templateTitle}
            onChange={(e) => setTemplateTitle(e.target.value)}
          />
          {Object.entries(checkboxes).map(([key, value]) => (
            <CFormCheck
              key={key}
              className="mb-3"
              type="checkbox"
              id={key}
              label={key.replace(/([A-Z])/, ' $1').replace(/^./, str => str.toUpperCase())}
              checked={value}
              onChange={handleCheckboxChange}
            />
          ))}
          <CFormSelect
            className="mb-3"
            label="Auto Detection Required"
            options={[
              "Select...",
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
            value={autoDetection}
            onChange={(e) => setAutoDetection(e.target.value)}
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

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);
  
    useEffect(() => {
      setFormData(data);
    }, [data]);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({ 
        ...formData, 
        [name]: type === 'checkbox' ? checked : value 
      });
    };
  
    const handleSave = () => {
      onSave(formData);
    };
  
    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Update Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Template Title"
            placeholder="Template title"
            name="templateTitle"
            value={formData?.templateTitle || ""}
            onChange={handleChange}
          />
          {Object.entries(formData || {}).map(([key, value]) => {
            if (typeof value === 'boolean') {
              return (
                <CFormCheck
                  key={key}
                  className="mb-3"
                  type="checkbox"
                  id={key}
                  name={key}
                  label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  checked={value}
                  onChange={handleChange}
                />
              );
            }
            return null;
          })}
          <CFormSelect
            className="mb-3"
            label="Auto Detection Required"
            name="autoDetection"
            options={[
              "Select...",
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
            value={formData?.autoDetection || ""}
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

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sample Login Template</h1>
        <div className="grid grid-cols-5 gap-4 mb-4">
          <Card
            title="DROPPED"
            count={cardCounts.DROPPED}
            color="pink"
            onClick={() => handleCardClick("DROPPED")}
          />
          <Card
            title="INITIATED"
            count={cardCounts.INITIATED}
            color="blue"
            onClick={() => handleCardClick("INITIATED")}
          />
          <Card
            title="REINITIATED"
            count={cardCounts.REINITIATED}
            color="yellow"
            onClick={() => handleCardClick("REINITIATED")}
          />
          <Card
            title="APPROVED"
            count={cardCounts.APPROVED}
            color="green"
            onClick={() => handleCardClick("APPROVED")}
          />
          <Card
            title="REJECTED"
            count={cardCounts.REJECTED}
            color="red"
            onClick={() => handleCardClick("REJECTED")}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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
            <PDFDownload columns={columns} data={filteredData} fileName="Sample_Login_Template.pdf" title="Sample Login Template Data" />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample Login Template"
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
            onSave={addNewSampleLoginTemplate}
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
        {viewModalData && (
          <ReusableModal
            visible={isViewModalOpen}
            closeModal={closeViewModal}
            data={viewModalData}
            fields={fields}
            onClose={closeViewModal}
            title="Sample Login Template Details"
            updateStatus={handleStatusUpdate}
          />
        )}
      </div>
    </>
  );
}

export default SampleLoginTemplate;