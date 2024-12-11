import React, { useEffect, useState } from "react";
import AtmTab from "../../components/ATM components/AtmTab/AtmTab";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import ImportModal from "../Modals/importModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ControlSampleModal from "../Modals/ControlSampleModal";
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
import axios from "axios";
import ToastContainer from "../../components/HotToaster/ToastContainer";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReusableModal from "../Modals/ResusableModal";

const ControlSample = () => {
  const [data, setData] = useState([]);
  // console.log(data, "data");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);
  const [loading, setLoading] = useState({});
  const navigate = useNavigate();

  const filteredData = data.filter((row) => {
    const fullNameLower = row.FullName?.toLowerCase() || "";
    return (
      fullNameLower.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.QualificationStatus === statusFilter)
    );
  });
  // console.log(filteredData,"CONTROL SAMPLE FILTERED");

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const handleEdit = (controlSample) => {
    setSelectedSample(controlSample); // Set the selected analyst data
    console.log(controlSample, "CONTROL SAMPLE EDIT");

    setIsModalOpen(true); // Open the modal
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/controlSample/get-control-sample`
      );
      const fetchData = response?.data.data || [];
      const updatedData = fetchData?.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));
      setData(updatedData);
      // console.log(updatedData,"ControlSample");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addRow = (newRow) => {
    setData([...data, newRow]);
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const openControlModal = () => {
    setIsModalOpen(true);
    navigate("/control-Sample-modal");
  };

  const closeControlModal = () => {
    setIsModalOpen(false);
  };

  const handlePdfGenerate = async (ControlSampId) => {
    console.log("Generating PDF for Control Sample ID:", ControlSampId);
    setLoading((prevLoading) => ({ ...prevLoading, [ControlSampId]: true }));

    try {
      const response = await fetch(
        `http://localhost:9000/controlSample/generate-report/${ControlSampId}`
      );
      console.log("Response:", response);

      // Check if the response is actually a PDF
      if (
        !response.ok ||
        response.headers.get("content-type") !== "application/pdf"
      ) {
        const errorText = await response.text();
        console.error("Error Response Text:", errorText);
        throw new Error("Network response was not ok or not a PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `ControlSample_Report_${ControlSampId}.pdf`
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }

    setLoading((prevLoading) => ({ ...prevLoading, [ControlSampId]: false }));
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "Sr No", accessor: "sno" },
    { header: "Sample ID", accessor: "sampleId" },
    { header: "Product/ Material Name", accessor: "productMaterialName" },
    { header: "Product/ Material Code", accessor: "productMaterialCode" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Market", accessor: "market" },
    { header: "AR No.", accessor: "arNo" },
    { header: "Batch No.", accessor: "batchNo" },
    { header: "MFG Date", accessor: "mfgDate" },
    { header: "Expiry Date", accessor: "expiryDate" },
    { header: "Quantity", accessor: "quantity" },
    { header: "Quantity Withdrawn", accessor: "quantityWithdrawn" },
    { header: "Current Quantity", accessor: "currentQuantity" },
    { header: "UOM", accessor: "uom" },
    { header: "Storage Location", accessor: "storageLocation" },
    { header: "Storage Condition", accessor: "storageCondition" },
    {
      header: "Visual Inspection Scheduled On",
      accessor: "visualInspectionSheduledOn",
    },
    {
      header: "Visual Inspection Performed By",
      accessor: "visualInspectionPerformedBy",
    },
    { header: "Any Abnormal Observation", accessor: "anyAbnoramalObservation" },
    { header: "Observation Date", accessor: "ObservationDate" },
    { header: "Destruction Due On", accessor: "destructionDueOn" },
    { header: "Destroyed By", accessor: "destroyedBy" },
    { header: "Neutralizing Agent", accessor: "neutralizingAgent" },
    { header: "Destruction Date", accessor: "destructionDate" },
    { header: "Remarks", accessor: "remarks" },
    { header: "Generate Audit Trail", accessor: "audit" },
    { header: "Generate PDF", accessor: "report" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "actionControl",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => onDeleteItem(row)}
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

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewModalData(null);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    // console.log("Deleted item:", item);
  };

  const handleDeleteControl = async (item) => {
    try {
      await axios.delete(
        `http://localhost:9000/controlSample/delete-control-sample/${item.id}`
      );
      setData((prevData) =>
        prevData.filter((dataItem) => dataItem.id !== item.id)
      );
      toast.success("Data deleted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error deleting Data:", error);
      toast.error("Error deleting Data.");
    }
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false, // Default unchecked checkbox
      sampleId: item["Sample ID"] || "", // Mapping 'Sample ID' from Excel data
      productName: item["Product/ Material Name"] || "", // Mapping 'Product/ Material Name'
      productCode: item["Product/ Material Code"] || "", // Mapping 'Product/ Material Code'
      sampleType: item["Sample Type"] || "", // Mapping 'Sample Type'
      market: item["Market"] || "", // Mapping 'Market'
      arNo: item["AR No."] || "", // Mapping 'AR No.'
      batchNo: item["Batch No."] || "", // Mapping 'Batch No.'
      mfgDate: item["MFG Date"] || "", // Mapping 'MFG Date'
      expiryDate: item["Expiry Date"] || "", // Mapping 'Expiry Date'
      quantity: item["Quantity"] || "", // Mapping 'Quantity'
      quantityWithdrawn: item["Quantity Withdrawn"] || "", // Mapping 'Quantity Withdrawn'
      currentQuantity: item["Current Quantity"] || "", // Mapping 'Current Quantity'
      uom: item["UOM"] || "", // Mapping 'UOM'
      storageLocation: item["Storage Location"] || "", // Mapping 'Storage Location'
      storageCondition: item["Storage Condition"] || "", // Mapping 'Storage Condition'
      visualInspectionScheduledOn: item["Visual Inspection Scheduled On"] || "", // Mapping 'Visual Inspection Scheduled On'
      visualInspectionPerformedBy: item["Visual Inspection Performed By"] || "", // Mapping 'Visual Inspection Performed By'
      abnormalObservation: item["Any Abnormal Observation"] || "", // Mapping 'Any Abnormal Observation'
      observationDate: item["Observation Date"] || "", // Mapping 'Observation Date'
      destructionDueOn: item["Destruction Due On"] || "", // Mapping 'Destruction Due On'
      destroyedBy: item["Destroyed By"] || "", // Mapping 'Destroyed By'
      neutralizingAgent: item["Neutralizing Agent"] || "", // Mapping 'Neutralizing Agent'
      destructionDate: item["Destruction Date"] || "", // Mapping 'Destruction Date'
      remarks: item["Remarks"] || "", // Mapping 'Remarks'
      status: item["Status"] || "", // Mapping 'Status'
    }));

    // Update the state with the parsed Excel data
    setData(updatedData);
    setIsModalsOpen(false); // Close the modal after data upload
  };

  const handleModalSubmit = (newControlSample) => {
    const currentDate = new Date().toISOString().split("T")[0];
    setData((prevData) => [
      ...prevData,
      {
        ...newControlSample,
        createdAt: currentDate,
      },
    ]);
    setIsModalOpen(false);
  };
  const fields = {
    checkbox: false,
    sno: "",
    sampleId: "",
    productName: "",
    productCode: "",
    sampleType: "",
    market: "",
    arNo: "",
    batchNo: "",
    mfgDate: "",
    expiryDate: "",
    quantity: "",
    quantityWithdrawn: "",
    currentQuantity: "",
    uom: "",
    storageLocation: "",
    storageCondition: "",
    visualInspectionScheduledOn: "",
    visualInspectionPerformedBy: "",
    abnormalObservation: "",
    observationDate: "",
    destructionDueOn: "",
    destroyedBy: "",
    neutralizingAgent: "",
    destructionDate: "",
    remarks: "",
    status: "",
  };

  return (
    <>
      <ToastContainer />
      <LaunchQMS />

      <div className="m-2 mt-3">
        <div className="main-head">
          <h4 className="font-bold text-xl mb-3 ">Control Sample Management</h4>
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
              title="Storage Location"
              fileName="Storage_Location.pdf"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Control Sample"
              color="blue"
              onClick={openControlModal}
            />
          </div>
        </div>
        {/* {console.log(filteredData,"TABLE KO SEND")} */}
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDeleteControl}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          onPdfGenerate={handlePdfGenerate}
          // openEditModal={openEditModal}
          onEdit={handleEdit}
        />
      </div>
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
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter(
              (field) => field.key !== "action" && field.key !== "checkbox"
            )}
          title="Control Sample Details"
          //  updateStatus={handleStatusUpdate}
        />
      )}

      {viewModalData && (
        <ControlSampleModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title=" Analyst Qualification Modal"
          updateStatus={""}
        />
      )}

      {showModal && <ControlSampleModal onClose={closeWorkflowModal} />}
    </>
  );
};

export default ControlSample;
