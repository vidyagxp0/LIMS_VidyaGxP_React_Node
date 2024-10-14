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
import CalibrationTypeModal from "../Modals/CalibrationTypeModal.jsx";
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
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";

const CalibrationType = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });
  const [editModalData, setEditModalData] = useState(null);

  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const fetchCalibrationTypes = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/cCalibrationType`
      );
      console.log(response);
      const formattedData = response.data[0]?.cCalibrationType || []; // Adjust this based on your API response structure

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
    fetchCalibrationTypes();
  }, []);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
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
    { header: "Calibration Type", accessor: "CalibrationType" },
    { header: "Calibration Prefix", accessor: "CalibrationPrefix" },
    { header: "Added On", accessor: "AddedOn" },
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
      CalibrationType: item["Calibration Type"] || "",
      CalibrationPrefix: item["Calibration Prefix"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
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
        `${BASE_URL}/delete-lims/cCalibrationType/${item.uniqueId}` // Update endpoint with uniqueId
      );

      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId); // Filter out the deleted item
        setData(newData);
        toast.success("Calibration Type deleted successfully");
        console.log("Deleted item:", item);
      }
      fetchCalibrationTypes();
    } catch (error) {
      console.error("Error deleting calibration type:", error);
      toast.error("Failed to delete calibration type");
    }
  };

  const handleModalSubmit = async (newInstrument) => {
    const currentDate = new Date().toISOString().split("T")[0];
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/cCalibrationType`,
        {
          CalibrationType: newInstrument.CalibrationType,
          CalibrationPrefix: newInstrument.CalibrationPrefix,
          AddedOn: currentDate,
          status: "Active",
        }
      );

      if (response.status === 200) {
        const addedCalibration = response.data.addLIMS; // Accessing the added item from the response

        setData((prevData) => [
          ...prevData,
          {
            ...addedCalibration,
            sno: addedCalibration.uniqueId, // Using uniqueId as sno
            checkbox: false,
          },
        ]);
        fetchCalibrationTypes();

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
        `${BASE_URL}/manage-lims/update/cCalibrationType/${updatedData.uniqueId}`, // Update endpoint with uniqueId
        updatedData // Sending the updated data
      );

      if (response.status === 200) {
        // Assuming the response may contain the updated data, you can use it if necessary
        const newData = data.map(
          (item) =>
            item.sno === updatedData.sno ? { ...item, ...updatedData } : item // Update item in state
        );

        setData(newData);
        toast.success("Calibration Type updated successfully");
      }
    } catch (error) {
      console.error("Error updating calibration type:", error);
      toast.error("Failed to update calibration type");
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
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle> Add Calibration Type</CModalTitle>
          </CModalHeader>
          <p className="ms-3 m-2">
            Add information and add new calibration type
          </p>
          <CModalBody>
            <CFormInput
              label="Calibration Type"
              className="mb-3"
              type="text"
              name="CalibrationType"
              placeholder="Calibration Type"
              value={formData?.CalibrationType || ""}
              onChange={handleChange}
            />
            <CFormInput
              label="Calibration Type Prefix"
              className="mb-3"
              type="text"
              name="CalibrationPrefix"
              placeholder="Calibration Type Prefix"
              value={formData?.CalibrationPrefix || ""}
              onChange={handleChange}
            />

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
        <h1 className="text-2xl font-bold mb-4">Calibration Type</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
              fileName="Calibration_Type.pdf"
              title="Calibration Type Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Calibration Type"
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
        <CalibrationTypeModal
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
            initialData={initialData}
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
export default CalibrationType;

/* const addNewStorageCondition = async (newCondition) => {
    try {
      // Prepare the new condition object (not an array)
      const conditionData = {
        name: newCondition.name,
        conditionCode: newCondition.conditionCode,
        storageCondition: newCondition.storageCondition,
        createdAt: new Date().toISOString(), // Current date as createdAt
        attachment: newCondition.attachment || null,
        status: newCondition.status || "Active",
      };

      // Send the POST request with a single object (not an array)
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/storageCondition`,
        conditionData
      );

      closeModal();
      console.log("Response received:", response.data);
      fetchData(); // show data in table without refresh
    } catch (error) {
      console.error("Error creating storage condition:", error);
    }
  };*/
