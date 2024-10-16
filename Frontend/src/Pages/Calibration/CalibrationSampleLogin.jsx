import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import CalibrationSampleLoginModal from "../Modals/CalibrationSampleLoginModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import { FormLabel } from "react-bootstrap";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";
import ReusableModal from "../Modals/ResusableModal";

const fields = [
  { label: "Sample Type", key: "sampleType" },
  { label: "Product / Material", key: "productMaterial" },
  { label: "Generic Name", key: "genericName" },
  { label: "Specification Code", key: "specificationCode" },

  { label: "Status", key: "status" },
];

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleType: "Product 1",
    productMaterial: "Seq 1",
    genericName: "Info 1",
    specificationCode: "Start 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    sampleType: "Product 2",
    productMaterial: "Seq 2",
    genericName: "Info 2",
    specificationCode: "Start 2",
    status: "INITIATED",
  },
];

const CalibrationSampleLogin = () => {
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

  useEffect(() => {
    fetchCalibrationSampleLogin();
  }, []);

  const fetchCalibrationSampleLogin = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/cCalibrationSampleLogin`
      );
      console.log(response);
      const formattedData = response.data[0]?.cCalibrationSampleLogin || []; // Adjust this based on your API response structure

      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Calibration Sample Login:", error);
      toast.error("Failed to fetch Calibration Sample Login");
    }
  };
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
    const calibrationTypeLower = row.CalibrationType?.toLowerCase() || "";
    return (
      calibrationTypeLower.includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

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
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      sampleType: item["Sample Type"] || "",
      productMaterial: item["Product / Material"] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data/ Close the import modal after data upload
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/cCalibrationSampleLogin/${item.uniqueId}` // Update endpoint with uniqueId
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId); // Filter out the deleted item
        setData(newData);
        toast.success("Calibration Type deleted successfully");
        console.log("Deleted item:", item);
        fetchCalibrationSampleLogin();
      }
    } catch (error) {
      console.error("Error deleting calibration type:", error);
      toast.error("Failed to delete calibration type");
    }
  };

  const handleModalSubmit = async (newInstrument) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/cCalibrationSampleLogin`,
        {
          sampleType: newInstrument.sampleType,
          productMaterial: newInstrument.productMaterial,
          genericName: newInstrument.genericName,
          specificationCode: newInstrument.specificationCode,
          status: "Active",
        }
      );

      if (response.status === 200) {
        const addedCalibrationlogin = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...addedCalibrationlogin,
            sno: addedCalibrationlogin.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);

        toast.success("Calibration Type added successfully");
      }
    } catch (error) {
      console.error("Error adding calibration type:", error);
      toast.error("Failed to add calibration type");
    }

    setIsModalOpen(false);
  };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.storageCondition === StorageCondition
        ? { ...item, status: newStatus }
        : item
    );
    setData(updatedData);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/cCalibrationSampleLogin/${updatedData.uniqueId}`, // Update endpoint with uniqueId
        updatedData // Sending the updated data
      );

      if (response.status === 200) {
        // Assuming the response may contain the updated data, you can use it if necessary
        const newData = data.map(
          (item) =>
            item.uniqueId === updatedData.uniqueId
              ? { ...item, ...updatedData }
              : item // Update item in state
        );

        setData(newData);
        toast.success("Calibration Sample Login updated successfully");
      }
    } catch (error) {
      console.error("Error updating calibration Sample Login:", error);
      toast.error("Failed to update calibration Sample Login");
    } finally {
      setEditModalData(null); // Close the modal after handling the edit
    }
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, []);

    const handleSave = () => {
      onSave(formData);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    return (
      <div>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle></CModalTitle>
            {data.uniqueId ? "Edit" : "Add}"} Add New Sample Login
          </CModalHeader>

          <CModalBody>
            <CFormInput
              label="Sample Login Template/ Revision No."
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.setCalibrationScheduleampleType || ""}
              onChange={handleChange}
              name="setCalibrationScheduleampleType"
            />
            <CFormInput
              label="Test Plan / Revision No."
              className="mb-3"
              type="text"
              placeholder=" Prefix"
              value={formData?.testPlan || ""}
              onChange={handleChange}
              name="testPlan"
            />
            <CFormInput
              label="Product / Material"
              className="mb-3"
              type="text"
              placeholder=" Prefix"
              value={formData?.productMaterial || ""}
              onChange={handleChange}
              name="productMaterial"
            />
            <CFormInput
              label="Product / Material Code"
              className="mb-3"
              type="text"
              placeholder=" "
              value={formData?.productMaterialCode || ""}
              onChange={handleChange}
              name="productMaterialCode"
            />
            <CFormInput
              label="Generic Name"
              className="mb-3"
              type="text"
              placeholder=" "
              value={formData?.genericName || ""}
              onChange={handleChange}
              name="genericName"
            />
            <CFormInput
              label="Specification ID"
              className="mb-3"
              type="text"
              placeholder=" "
              value={formData?.specificationCode || ""}
              onChange={handleChange}
              name="specificationCode"
            />
            <CFormInput
              label="Sample Type"
              className="mb-3"
              type="text"
              placeholder=" "
              value={formData?.sampleType || ""}
              onChange={handleChange}
              name="sampleType"
            />
            <FormLabel
              style={{ margin: "15px 20px" }}
              id="demo-row-radio-buttons-group-label"
            >
              Auto Sample Allotted
            </FormLabel>
            <RadioGroup
              style={{ margin: "15px 20px" }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formData?.autoSampleAllotted || ""}
              onChange={handleChange}
              className="mb-3"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <div className="d-flex gap-3 mt-4">
              <CButton color="light w-50" onClick={closeModal}>
                &lt; Back
              </CButton>
              <CButton color="primary w-50" onClick={handleSave}>
                Submit
              </CButton>
            </div>
          </CModalBody>
        </CModal>
      </div>
    );
  };

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Calibartion Sample Login</h1>
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
              fileName="Calibration_Sample_Login.pdf"
              title="Calibration Sample Login Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample Login"
              color="blue"
              onClick={openModal}
            />
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
        <CalibrationSampleLoginModal
          visible={isModalOpen}
          closeModal={closeModal}
          handleSubmit={handleModalSubmit}
        />
        {viewModalData && (
          <ReusableModal
            visible={viewModalData !== null}
            closeModal={closeViewModal}
            data={viewModalData}
            fields={fields}
            title="Test Plan Details"
            updateStatus={handleStatusUpdate}
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
      </div>
    </>
  );
};

export default CalibrationSampleLogin;
