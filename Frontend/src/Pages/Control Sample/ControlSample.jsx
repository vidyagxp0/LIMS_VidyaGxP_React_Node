import React, { useEffect, useState } from "react";
import AtmTab from "../../components/ATM components/AtmTab/AtmTab";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { toast } from "react-toastify";

const storedData = JSON.parse(localStorage.getItem("controlSample")) || [];

const initialData = [
  {
    checkbox: false,
    sampleId: "SID001",
    productName: "Material 1",
    productCode: "MCode001",
    sampleType: "Type A",
    market: "Market A",
    arNo: "AR001",
    batchNo: "Batch001",
    mfgDate: "2023-10-01",
    expiryDate: "2025-10-01",
    quantity: "1000",
    quantityWithdrawn: "500",
    currentQuantity: "500",
    uom: "KG",
    storageLocation: "Loc001",
    storageCondition: "Cold Storage",
    visualInspectionScheduledOn: "2024-10-01",
    visualInspectionPerformedBy: "Inspector A",
    abnormalObservation: "No",
    observationDate: "2024-09-30",
    destructionDueOn: "2026-10-01",
    destroyedBy: "Staff A",
    neutralizingAgent: "Agent A",
    destructionDate: "2026-09-30",
    remarks: "No remarks",
    status: "Active",
  },
  {
    checkbox: false,
    sampleId: "SID002",
    productName: "Material 2",
    productCode: "MCode002",
    sampleType: "Type B",
    market: "Market B",
    arNo: "AR002",
    batchNo: "Batch002",
    mfgDate: "2023-11-01",
    expiryDate: "2025-11-01",
    quantity: "2000",
    quantityWithdrawn: "1000",
    currentQuantity: "1000",
    uom: "L",
    storageLocation: "Loc002",
    storageCondition: "Room Temperature",
    visualInspectionScheduledOn: "2024-11-01",
    visualInspectionPerformedBy: "Inspector B",
    abnormalObservation: "No",
    observationDate: "2024-10-31",
    destructionDueOn: "2026-11-01",
    destroyedBy: "Staff B",
    neutralizingAgent: "Agent B",
    destructionDate: "2026-10-31",
    remarks: "Minor observation",
    status: "Inactive",
  },
  {
    checkbox: false,
    sampleId: "SID003",
    productName: "Material 3",
    productCode: "MCode003",
    sampleType: "Type C",
    market: "Market C",
    arNo: "AR003",
    batchNo: "Batch003",
    mfgDate: "2023-12-01",
    expiryDate: "2025-12-01",
    quantity: "3000",
    quantityWithdrawn: "1500",
    currentQuantity: "1500",
    uom: "g",
    storageLocation: "Loc003",
    storageCondition: "Freezer",
    visualInspectionScheduledOn: "2024-12-01",
    visualInspectionPerformedBy: "Inspector C",
    abnormalObservation: "Yes",
    observationDate: "2024-11-30",
    destructionDueOn: "2026-12-01",
    destroyedBy: "Staff C",
    neutralizingAgent: "Agent C",
    destructionDate: "2026-11-30",
    remarks: "Requires follow-up",
    status: "Active",
  },
  ...storedData, // Add the data from localStorage (if any) at the end
];

const ControlSample = () => {
  const [data, setData] = useState(initialData);
  console.log(data, "data");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const filteredData = data.filter((row) => {
    return (
      row.productName?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/get-all-lims/controlSampleManagement`
        );
        const fetchData = response?.data[0]?.controlSampleManagement || [];
        const updatedData = fetchData?.map((item, index) => ({
          ...item,
          sno: index + 1,
        }));
        setData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
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
  };

  const closeControlModal = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "Sr No", accessor: "sno" },
    { header: "Sample ID", accessor: "sampleId" },
    { header: "Product/ Material Name", accessor: "productName" },
    { header: "Product/ Material Code", accessor: "productCode" },
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
      accessor: "visualInspectionScheduledOn",
    },
    {
      header: "Visual Inspection Performed By",
      accessor: "visualInspectionPerformedBy",
    },
    { header: "Any Abnormal Observation", accessor: "abnormalObservation" },
    { header: "Observation Date", accessor: "observationDate" },
    { header: "Destruction Due On", accessor: "destructionDueOn" },
    { header: "Destroyed By", accessor: "destroyedBy" },
    { header: "Neutralizing Agent", accessor: "neutralizingAgent" },
    { header: "Destruction Date", accessor: "destructionDate" },
    { header: "Remarks", accessor: "remarks" },
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
            onClick={() => openEditModal(row)}
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleDeleteControl = (item) => {
    console.log(item , "item")
    axios
      .delete(`http://localhost:9000/delete-lims/controlSampleManagement/${item.uniqueId}`)
      .then((response) => {
        toast.success(response.data.message || "Control Sample deleted successfully!");
  
        closeModal(); 
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error deleting Control Sample.");
      });
  };
  

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
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
  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };``

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleModalSubmit = (newControlSample) => {
    console.log(newControlSample, "newControlSample");
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) => {
        console.log(item, "ittteeemmm");
        return item.productName === newControlSample.productName
          ? newControlSample
          : item;
      });
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sampleId: newControlSample?.sampleId,
          productName: newControlSample.productName,
          productCode: newControlSample.productCode,
          sampleType: newControlSample.sampleType,
          market: newControlSample.market,
          arNo: newControlSample.arNo,
          batchNo: newControlSample.batchNo,
          mfgDate: newControlSample.mfgDate,
          expiryDate: newControlSample.expiryDate,
          quantity: newControlSample.quantity,
          quantityWithdrawn: newControlSample.quantityWithdrawn,
          currentQuantity: newControlSample.currentQuantity,
          uom: newControlSample.uom,
          storageLocation: newControlSample.storageLocation,
          storageCondition: newControlSample.storageCondition,
          visualInspectionScheduledOn:
            newControlSample.visualInspectionScheduledOn,
          visualInspectionPerformedBy:
            newControlSample.visualInspectionPerformedBy,
          abnormalObservation: newControlSample.abnormalObservation,
          observationDate: newControlSample.observationDate,
          destructionDueOn: newControlSample.destructionDueOn,
          destroyedBy: newControlSample.destroyedBy,
          neutralizingAgent: newControlSample.neutralizingAgent,
          destructionDate: newControlSample.destructionDate,
          remarks: newControlSample.remarks,
          status: "Active",
        },
      ]);
    }
    closeControlModal();
  };

  const handleEditSave = (updatedData) => {
    console.log(updatedData, "updatedData");
    const updatedList = data.map((item) =>
      item.productName === updatedData.productName ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
    }, [data]);

    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleEditControlSample = (e) => {
      e.preventDefault();
    
      axios
        .put(
          `http://localhost:9000/manage-lims/update/controlSampleManagement/${formData.uniqueId}`,
          formData
        )
        .then((response) => {
          toast.success(response.data.message || "Control Sample updated successfully!");
    
          // Update the local state with the updated formData
          setData((prevData) =>
            prevData.map((item) => (item.sno === formData.sno ? formData : item))
          );
    
          closeModal();
        })
        .catch((err) => {
          console.error(err);
          toast.error("Error while updating Control Sample");
        });
    };
    

    useEffect(() => {
      setFormData(data);
    }, [data]);

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };

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
          <CModalTitle>Add Instrument</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Edit information and register new Control Sample</p>
          <CForm onSubmit={handleEditControlSample}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample Id"
              placeholder="Sample Id"
              value={formData?.sampleId || ""}
              onChange={handleChange}
              name="sampleId"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product Name"
              placeholder="Product Name"
              value={formData?.productName || ""}
              onChange={handleChange}
              name="productName"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product Code"
              placeholder="Product Code"
              value={formData?.productCode || ""}
              onChange={handleChange}
              name="productCode"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample Type"
              placeholder="Sample Type"
              value={formData?.sampleType || ""}
              onChange={handleChange}
              name="sampleType"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Market"
              placeholder="Market"
              value={formData?.market || ""}
              onChange={handleChange}
              name="market"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Batch No"
              placeholder="Batch No"
              value={formData?.batchNo || ""}
              onChange={handleChange}
              name="batchNo"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="AR No"
              placeholder="AR No"
              value={formData?.arNo || ""}
              onChange={handleChange}
              name="arNo"
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Mfg Date"
              placeholder="Mfg Date"
              value={formData?.mfgDate || ""}
              onChange={handleChange}
              name="mfgDate"
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Expiry Date"
              placeholder="Expiry Date"
              value={formData?.expiryDate || ""}
              onChange={handleChange}
              name="expiryDate"
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Quantity"
              placeholder="Quantity"
              value={formData?.quantity || ""}
              onChange={handleChange}
              name="quantity"
            />
            <CFormInput
              className="mb-3"
              type="number"
              label="Quantity Withdrawn"
              placeholder="Quantity Withdrawn"
              value={formData?.quantityWithdrawn || ""}
              onChange={handleChange}
              name="quantityWithdrawn"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Current Quantity"
              placeholder="Current Quantity"
              value={formData?.currentQuantity || ""}
              onChange={handleChange}
              name="currentQuantity"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="UOM"
              placeholder="UOM"
              value={formData?.uom || ""}
              onChange={handleChange}
              name="uom"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Storage Location"
              placeholder="Storage Location"
              value={formData?.storageLocation || ""}
              onChange={handleChange}
              name="storageLocation"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Storage Condition"
              placeholder="Storage Condition"
              value={formData?.storageCondition || ""}
              onChange={handleChange}
              name="storageCondition"
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Visual Inspection Scheduled On"
              placeholder="Visual Inspection Scheduled On"
              value={formData?.visualInspectionScheduledOn || ""}
              onChange={handleChange}
              name="visualInspectionScheduledOn"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Visual Inspection Performed By"
              placeholder="Visual Inspection Performed By"
              value={formData?.visualInspectionPerformedBy || ""}
              onChange={handleChange}
              name="visualInspectionPerformedBy"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Abnormal Observation"
              placeholder="Abnormal Observation"
              value={formData?.abnormalObservation || ""}
              onChange={handleChange}
              name="abnormalObservation"
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Observation Date"
              placeholder="Observation Date"
              value={formData?.observationDate || ""}
              onChange={handleChange}
              name="observationDate"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Destruction Due On"
              placeholder="Destruction Due On"
              value={formData?.destructionDueOn || ""}
              onChange={handleChange}
              name="destructionDueOn"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Destroyed By"
              placeholder="Destroyed By"
              value={formData?.destroyedBy || ""}
              onChange={handleChange}
              name="destroyedBy"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Neutralizing Agent"
              placeholder="Neutralizing Agent"
              value={formData?.neutralizingAgent || ""}
              onChange={handleChange}
              name="neutralizingAgent"
            />
            <CFormInput
              className="mb-3"
              type="date"
              label="Destruction Date"
              placeholder="Destruction Date"
              value={formData?.destructionDate || ""}
              onChange={handleChange}
              name="destructionDate"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Remarks"
              placeholder="Remarks"
              value={formData?.remarks || ""}
              onChange={handleChange}
              name="remarks"
            />
            <CButton color="primary" type="submit">
              Save changes
            </CButton>
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
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
          <h4 className="fw-bold ">Control Sample Management</h4>
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
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDeleteControl}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
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

      <ControlSampleModal
        visible={isModalOpen}
        closeModal={closeControlModal}
        handleSubmit={handleModalSubmit}
        addRow={addRow}
      />

      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </>
  );
};

export default ControlSample;
