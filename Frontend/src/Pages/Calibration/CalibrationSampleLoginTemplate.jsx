//   const StatusModal = (_props) => {
//     return (

//     )
//   }

//   const DeleteModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//             <CModalHeader>
//                 <CModalTitle>Delete User</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
//                 <p>Are you sure you want to delete this sample login template?</p>
//             </CModalBody>
//             <CModalFooter>
//                 <CButton
//                     color="secondary"
//                     onClick={_props.closeModal}
//                     style={{
//                         marginRight: "0.5rem",
//                         fontWeight: "500",
//                     }}
//                 >
//                     Cancel
//                 </CButton>
//                 <CButton
//                     color="danger"
//                     onClick={_props.confirmDelete}
//                     style={{
//                         fontWeight: "500",
//                         color: "white",
//                     }}
//                 >
//                     Delete
//                 </CButton>
//             </CModalFooter>
//         </CModal>
//     );
// };

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
import CalibrationSampleLoginTemplateModal from "../Modals/CalibrationSampleLoginTemplateModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleLogintemplate: "Product 1",
    testPlan: "Seq 1",
    QuantitativeParameters: "Info 1",
    GenricName: "Start 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    sampleLogintemplate: "Product 2",
    testPlan: "Seq 2",
    QuantitativeParameters: "Info 2",
    GenricName: "Start 2",
    status: "INITIATED",
  },
];

const CalibrationSampleLoginTemplate = () => {
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
  const fetchCalibrationSample = async () => {
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
      console.error("Error fetching calibration types:", error);
      toast.error("Failed to fetch calibration types");
    }
  };

  useEffect(() => {
    fetchCalibrationSample();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("calibrationData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(initialData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calibrationData", JSON.stringify(data));
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
    { header: "Sample Login template", accessor: "sampleLogintemplate" },
    { header: "Test Plan", accessor: "testPlan" },
    {
      header: "Genric Name",
      accessor: "GenricName",
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
      sampleLogintemplate: item["Sample Login template"] || "",
      testPlan: item["Test Plan"] || "",
      GenricName: item["Genric Name"] || "",
      status: item["Status"] || "",
    }));
    const concatenateData = [...updatedData];
    setData(concatenateData);
    setIsModalsOpen(false);
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
        `${BASE_URL}/delete-lims/cCalibrationSampleLogin/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Calibration SampleLogin Template deleted successfully");
      } else {
        console.error("Failed response:", response);
        toast.error("Delete failed: unexpected response");
      }
    } catch (error) {
      console.error(
        "Error deleting template:",
        error.response || error.message
      );
      toast.error("Failed to delete calibration SampleLogin Template");
    }
  };

  const handleModalSubmit = async (newInstrument) => {
    const currentDate = new Date().toISOString().split("T")[0];
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/cCalibrationSampleLogin`,
        {
          sampleLogintemplate: newInstrument.sampleLogintemplate,
          testPlan: newInstrument.testPlan,
          productMaterial: newInstrument.productMaterial,
          productMaterialCode: newInstrument.productMaterialCode,
          genericName: newInstrument.genericName,
          specificationId: newInstrument.specificationId,
          status: "Active",
        }
      );

      if (response.status === 200) {
        const addedCalibrationSamplee = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...addedCalibrationSamplee,
            sno: addedCalibrationSamplee.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);
        fetchCalibrationSample();

        toast.success("Calibration Type added successfully");
      }
    } catch (error) {
      console.error("Error adding calibration type:", error);
      toast.error("Failed to add calibration type");
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
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/cCalibrationSampleLogin/${updatedData.uniqueId}`, // Update endpoint with uniqueId
        updatedData // Sending the updated data
      );

      if (response.status === 200) {
        // Assuming the response may contain the updated data, you can use it if necessary
        const newData = data.map(
          (item) =>
            item.sno === updatedData.sno ? { ...item, ...updatedData } : item // Update item in state
        );

        setData(newData);
        toast.success("Calibration SampleLogin Template updated successfully");
      }
    } catch (error) {
      console.error("Error updating Calibration SampleLogin Template:", error);
      toast.error("Failed to update Calibration SampleLogin Template");
    } finally {
      setEditModalData(null); // Close the modal after handling the edit
    }
  };
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const test_name = [
      { title: "TP-2024-01" },
      { title: "TP-2024-02" },
      { title: "TP-2024-03" },
      { title: "TP-2024-04" },
      { title: "TP-2024-05" },
      { title: "TP-2024-06" },
      { title: "TP-2024-07" },
      { title: "TP-2024-08" },
      { title: "TP-2024-09" },
      { title: "TP-2024-10" },
      { title: "TP-2024-11" },
    ];

    const [formData, setFormData] = useState(data);
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

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
            <CModalTitle>Add Sample Login Template</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              label="Sample Login Template"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.sampleLogintemplate || ""}
              onChange={handleChange}
              name="sampleLogintemplate"
            />
            <div>
              <label htmlFor="testPlan">Test Plan / Revision No.</label>
              <select
                name="testPlan"
                id="testPlan"
                className="mb-3 form-select"
                value={formData?.testPlan || ""}
                onChange={handleChange}
              >
                <option value="">Select a test plan</option>
                {test_name.map((testPlan, index) => (
                  <option key={index} value={testPlan.title}>
                    {testPlan.title}
                  </option>
                ))}
              </select>
            </div>

            <CFormInput
              label="Product / Material"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.productMaterial || ""}
              onChange={handleChange}
              name="productMaterial"
            />
            <CFormInput
              label="Product / Material Code"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.productMaterialCode || ""}
              onChange={handleChange}
              name="productMaterialCode"
            />
            <CFormInput
              label="Generic Name"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.GenricName || ""}
              onChange={handleChange}
              name="GenricName"
            />
            <CFormInput
              label="Specification ID"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.specificationId || ""}
              onChange={handleChange}
              name="specificationId"
            />
            <div className="d-flex gap-3 mt-4">
              <CButton color="light w-50" onClick={closeModal}>
                &lt; Back
              </CButton>
              <CButton color="primary w-50" onClick={handleSave}>
                Add
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
        <h1 className="text-2xl font-bold mb-4">Sample Login Template</h1>

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
              fileName="Calibration_Sample_login_Template.pdf"
              title="Calibration Sample Login Template Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Login Template"
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
        <CalibrationSampleLoginTemplateModal
          visible={isModalOpen}
          closeModal={closeModal}
          handleSubmit={handleModalSubmit}
        />
        {isViewModalOpen && (
          <ViewModal
            visible={isViewModalOpen}
            closeModal={closeViewModal}
            data={viewModalData}
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

export default CalibrationSampleLoginTemplate;
