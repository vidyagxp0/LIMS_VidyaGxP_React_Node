import { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
  prefix,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import axios from "axios";

// const initialData = JSON.parse(localStorage.getItem("sampletypes")) || [];

const fields = [
  { label: "Sample Type Name", key: "sampleTypeName" },
  { label: "Add Date", key: "addDate" },
  { label: "Days to Complete", key: "daysToComplete" },
  { label: "Status", key: "status" },
];

function SampleType() {
  // const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Active");
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/get-all-lims/mSampleType`
        );
        const fetchedData = response?.data[0]?.mSampleType || [];

        const updatedData = fetchedData.map((item, index) => ({
          ...item,
          sno: item?.sno || index + 1,
        }));

        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data
    .filter((row) => {
      return (
        row?.sampleTypeName
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) &&
        (statusFilter === "All" || row.status === statusFilter)
      );
    })
    .map((row, index) => ({ ...row, sno: index + 1 }));

  const onAdd = (newRow) => {
    const updatedData = [...data, { ...newRow, sno: data.length + 1 }];
    setData(updatedData);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };

  const handleStatusUpdate = (testPlan, newStatus) => {
    const updatedData = data.map((item) =>
      item.testPlan === testPlan ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [inputValue, setInputValue] = useState(0);
    const [statusData, setStatusData] = useState({
      sampleName: "",
      prefix: "",
      daysToComplete: 0,
    });

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleAdd = async () => {
      const currentDate = new Date().toISOString().split("T")[0];

      const newCondition = {
        sampleTypeName: statusData.sampleName,
        addDate: currentDate,
        daysToComplete: statusData.daysToComplete,
        action: [],
      };

      try {
        const response = await axios.post(
          "http://localhost:9000/manage-lims/add/mSampleType", 
          newCondition
        );

        if (response.status === 200 || response.status === 201) {
          console.log("Sample type added successfully:", response.data);
          closeModal();
          onAdd(newCondition);
        } else {
          console.error("Failed to add sample type:", response.statusText);
        }
      } catch (error) {
        console.error("Error adding sample type:", error);
      }
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Sample Type</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Name"
            placeholder="Sample Name"
            name="sampleName"
            value={statusData.sampleName}
            onChange={(e) =>
              setStatusData({ ...statusData, sampleName: e.target.value })
            }
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Prefix"
            placeholder="Prefix"
            name="prefix"
            value={statusData.prefix}
            onChange={(e) =>
              setStatusData({ ...statusData, prefix: e.target.value })
            }
          />

          <CFormInput
            className="mb-3"
            type="number"
            label="Days To Complete"
            placeholder="Days To Complete"
            name="daysToComplete"
            value={statusData.daysToComplete}
            onChange={(e) =>
              setStatusData({ ...statusData, daysToComplete: e.target.value })
            }
          />

          <label className="line3" htmlFor="">
            Selected Standard Fields Displays At Sample Registration
          </label>
          <FormGroup style={{ marginLeft: "20px" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Manufacturing Date"
            />
            <FormControlLabel control={<Checkbox />} label="Expiry Date" />
            <FormControlLabel control={<Checkbox />} label="Batch No." />
            <FormControlLabel control={<Checkbox />} label="Batch Size" />
            <FormControlLabel control={<Checkbox />} label="Packing Type" />
            <FormControlLabel control={<Checkbox />} label="Project" />
            <FormControlLabel control={<Checkbox />} label="Supplier" />
            <FormControlLabel control={<Checkbox />} label="Customer" />
            <FormControlLabel control={<Checkbox />} label="Manufacturer" />
            <FormControlLabel control={<Checkbox />} label="Priority" />
            <FormControlLabel
              control={<Checkbox />}
              label="Sampling Quantity"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sample Reference No"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Recommended Reference Lot"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="W.S. Validity Period"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Storage Condition"
            />
            <FormControlLabel control={<Checkbox />} label="Storage Location" />
            <FormControlLabel control={<Checkbox />} label="Comments" />
          </FormGroup>

          <FormControl style={{ margin: "20px" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Reserve Sample Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Sampling Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Analyst Level Investigation Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Sample Destruction Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Sample Acceptance Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              TCI Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              SI Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              MGR Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              QA Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Reduced/Retesting Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
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
  const handleEditSave = async (updatedData) => {
    try {
      // Make sure updatedData contains uniqueId before making the API call
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/mSampleType/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        // Update the state with the new data
        const newData = data.map((item) =>
          item.sno === updatedData.sno ? updatedData : item
        );
        setData(newData);
        setEditModalData(null);
        console.log("Sample Type updated successfully:", response.data);
      } else {
        console.error("Failed to update Sample Type:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating Sample Type:", error);
    }
  };
  

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [inputValue, setInputValue] = useState(0);
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

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Sample Type</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Sample Name"
            placeholder="Sample Name"
            name="sampleTypeName"
            value={formData?.sampleTypeName || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Prefix"
            placeholder="Prefix"
            name="prefix"
            value={formData?.prefix || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Days To Complete"
            placeholder="Days To Complete"
            name="daysToComplete"
            value={formData?.daysToComplete || ""}
            onChange={handleChange}
          />

          <label className="line3" htmlFor="">
            Selected Standard Fields Displays At Sample Registration
          </label>
          <FormGroup style={{ marginLeft: "20px" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Manufacturing Date"
            />
            <FormControlLabel control={<Checkbox />} label="Expiry Date" />
            <FormControlLabel control={<Checkbox />} label="Batch No." />
            <FormControlLabel control={<Checkbox />} label="Batch Size" />
            <FormControlLabel control={<Checkbox />} label="Packing Type" />
            <FormControlLabel control={<Checkbox />} label="Project" />
            <FormControlLabel control={<Checkbox />} label="Supplier" />
            <FormControlLabel control={<Checkbox />} label="Customer" />
            <FormControlLabel control={<Checkbox />} label="Manufacturer" />
            <FormControlLabel control={<Checkbox />} label="Priority" />
            <FormControlLabel
              control={<Checkbox />}
              label="Sampling Quantity"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sample Reference No"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Recommended Reference Lot"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="W.S. Validity Period"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Storage Condition"
            />
            <FormControlLabel control={<Checkbox />} label="Storage Location" />
            <FormControlLabel control={<Checkbox />} label="Comments" />
          </FormGroup>

          <FormControl style={{ margin: "20px" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Reserve Sample Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Sampling Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Analyst Level Investigation Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Sample Destruction Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Sample Acceptance Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              TCI Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              SI Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              MGR Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              QA Approval Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Reduced/Retesting Required
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Update
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sample Type Name", accessor: "sampleTypeName" },
    { header: "Add Date", accessor: "addDate" },
    { header: "Days to Complete", accessor: "daysToComplete" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      sampleTypeName: item["Sample Type Name"] || "",
      addDate: item["Add Date"] || "",
      daysToComplete: item["Days to Complete"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setViewModalData(false);
  };

  const handleDelete = async (item) => {
    console.log(item,"<><><><><><><><><><><><><><><><><><><><")
   
    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/mSampleType/${item.uniqueId}`
      );
      if (response?.status === 200) {
        const newData = data.filter((d) => d.sno !== item.sno);
        setData(newData);
        console.log("Sample Type deleted successfully:", response.data);
      } else {
        console.error("Failed to delete Sample Type:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting Sample Type:", error);
    }
  };

  return (
    <>
      <LaunchQMS />

      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Type</h4>
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
              fileName="Sample_Type.pdf"
              title="Sample Type Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample Type"
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
      </div>
      {isModalsOpen && (
        <ImportModal
          // initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {isModalOpen && (
        <StatusModal
          onAdd={onAdd}
          visible={isModalOpen}
          closeModal={closeModal}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          onAdd={onAdd}
          fields={fields}
          title="Test Plan Details"
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
    </>
  );
}

export default SampleType;
