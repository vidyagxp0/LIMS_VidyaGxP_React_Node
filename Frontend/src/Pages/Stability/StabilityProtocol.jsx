import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
  CRow,
  CCol,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/ATM components/Table/Table";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ReusableModal from "../Modals/ResusableModal";
import { BASE_URL } from "../../config.json";

function StabilityProtocol() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [data, setData] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fields = [
    { label: "Protocol ID", key: "protocolID" },
    { label: "Description", key: "description" },
    { label: "Product/Material", key: "productMaterial" },
    { label: "Specification ID", key: "specificationID" },
    { label: "Sample Type", key: "sampleType" },
    { label: "Initiated On", key: "initiatedOn" },
    { label: "Status", key: "status" },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-all-lims/sMStabilityProtocol`
      );
      const fetchedData = response?.data[0]?.sMStabilityProtocol || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch stability protocol data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleEditSave = async (updatedData) => {
    const { sno, checkbox, ...dataToSend } = updatedData;
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/sMStabilityProtocol/${updatedData.uniqueId}`,
        dataToSend
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...response.data }
            : item
        );
        setData(newData);
        closeEditModal();
        toast.success("Stability protocol updated successfully");
        fetchData();
      } else {
        console.error(
          "Failed to update stability protocol:",
          response.statusText
        );
        toast.error("Failed to update stability protocol");
      }
    } catch (error) {
      console.error("Error updating stability protocol:", error);
      toast.error("Error updating stability protocol");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);

      const response = await axios.put(
        `https://lims-api.mydemosoftware.com/manage-lims/update/sMStabilityProtocol/${viewModalData.uniqueId}`,
        {
          ...dataToSend,
          status: newStatus,
        }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
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
      ``;
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const protocolId = row.protocolId || "";
        return (
          protocolId.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Protocol ID", accessor: "protocolID" },
    { header: "Description", accessor: "description" },
    { header: "Product/Material", accessor: "productMaterial" },
    { header: "Specification ID", accessor: "specificationID" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Initiated On", accessor: "initiatedOn" },
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
            onClick={() => openEditModal(row.original)}
            className="mr-2 cursor-pointer"
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/sMStabilityProtocol/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Stability protocol deleted successfully");
        fetchData();
      } else {
        console.error(
          "Failed to delete stability protocol:",
          response.statusText
        );
        toast.error("Failed to delete stability protocol");
      }
    } catch (error) {
      console.error("Error deleting stability protocol:", error);
      toast.error("Error deleting stability protocol");
    }
  };

  const handleAdd = async (newStabilityProtocol) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sMStabilityProtocol`,
        {
          ...newStabilityProtocol,
          initiatedOn: new Date().toISOString().split("T")[0],
          status: newStabilityProtocol.status || "INITIATED",
        }
      );
      if (response.status === 200) {
        toast.success("Stability protocol added successfully");
        fetchData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to add stability protocol");
      }
    } catch (error) {
      toast.error(
        "Error adding stability protocol: " +
          (error.response?.data || error.message)
      );
    }
  };

  const handleExcelDataUpload = async (excelData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/bulk-add/sMStabilityProtocol`,
        excelData
      );
      if (response.status === 200) {
        toast.success("Bulk upload successful");
        fetchData();
        handleCloseModals();
      } else {
        toast.error("Failed to upload data");
      }
    } catch (error) {
      toast.error(
        "Error uploading data: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [conditions, setConditions] = useState([]);
    const [specificationID, setSpecificationID] = useState("");
    const [sampleType, setSampleType] = useState("");
    const [newProtocolType, setNewProtocolType] = useState("");
    const [oldProtocolType, setOldProtocolType] = useState("");
    const [protocolID, setProtocolID] = useState("");
    const [description, setDescription] = useState("");
    const [sampleLoginTemplet, setSampleLoginTemplet] = useState("");
    const [manufacturingDate, setManufacturingDate] = useState("");
    const [shortDate, setShortDate] = useState("");
    const [longDate, setLongDate] = useState("");
    const [sampleBy, setSampleBy] = useState("");
    const [storageConditionUOM, setStorageConditionUOM] = useState("");
    const [defineChargingStartDate, setDefineChargingStartDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [initialTestingRequired, setInitialTestingRequired] = useState("");
    const [certificatesIfAny, setCertificatesIfAny] = useState("");
    const [numberOfStorageConditions, setNumberOfStorageConditions] =
      useState("");
    const [testPlanet, setTestPlanet] = useState("");
    const [instructions, setInstructions] = useState("");
    const [packageConfiguration, setPackageConfiguration] = useState("");

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };
    const handleAddConditions = () => {
      const numberOfConditions = parseInt(
        document.getElementById("numberOfConditions").value
      );
      if (!isNaN(numberOfConditions) && numberOfConditions > 0) {
        const newConditions = Array.from(
          { length: numberOfConditions },
          (_, index) => ({
            id: index + 1,
          })
        );
        setConditions(newConditions);
      }
    };

    const handleAdd = () => {
      const newCondition = {
        productMaterial: "000",
        specificationID: specificationID,
        genericName: "generic",
        sampleType: sampleType,
        protocolType: [newProtocolType, oldProtocolType],
        protocolID: protocolID,
        description: description,
        addedOn: "2022-01-01",
        action: [],
      };
      onAdd(newCondition);
    };

    const handleStatusUpdate = (samplingConfiguration, newStatus) => {
      const updatedData = data.map((item) =>
        item.samplingID === samplingConfiguration.samplingID
          ? { ...item, status: newStatus }
          : item
      );
      setData(updatedData);
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
            <CModalTitle>Stability Protocol</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Specification ID"
              placeholder="Select..."
              options={[
                "",
                { label: "HCL10132%" },
                { label: "HOS234" },
                { label: "CHPOIL001" },
                { label: "rest0001" },
              ]}
              value={specificationID}
              onChange={(e) => setSpecificationID(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Product"
              placeholder="testamine"
              disabled
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Generic Name"
              placeholder="Testamine"
              disabled
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Sample Type"
              placeholder="Select Sample Type"
              options={[
                "Select Sample Type",
                { label: "HCL" },
                { label: "Hydrochloric Acid" },
                { label: "Petrochemical" },
                { label: "Initiated Product" },
              ]}
              value={sampleType}
              onChange={(e) => setSampleType(e.target.value)}
            />
            <label className="mb-3">Protocol Type</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="protocolTypeNew"
              name="protocolType"
              label="New"
              value={newProtocolType}
              onChange={(e) => setNewProtocolType(e.target.value)}
            />
            <CFormCheck
              type="radio"
              id="protocolTypeExisting"
              name="protocolType"
              label="Existing"
              value={oldProtocolType}
              onChange={(e) => setOldProtocolType(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Protocol Id"
              placeholder="Protocol Id"
              value={protocolID}
              onChange={(e) => setProtocolID(e.target.value)}
            />

            <CFormInput
              className="mb-3"
              type="text"
              label="Description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <CFormInput
              className="mb-3"
              type="select"
              label="Sample Login Template"
              placeholder="Select..."
              options={[
                "Select Sample Type",
                { label: "ARZ Temp" },
                { label: "AAT" },
              ]}
              value={sampleLoginTemplet}
              onChange={(e) => setSampleLoginTemplet(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Manufacturing Date"
              placeholder=" "
              value={manufacturingDate}
              onChange={(e) => setManufacturingDate(e.target.value)}
            />

            <label>DateFormat</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatShort"
              name="DateFormat"
              label="Short Date"
              value={shortDate}
              onChange={(e) => setShortDate(e.target.value)}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatLong"
              name="DateFormat"
              label="Long Date"
              value={longDate}
              onChange={(e) => setLongDate(e.target.value)}
            />

            <CFormInput
              className="mb-3"
              type="text"
              label="Sample By"
              placeholder="Sample By"
              value={sampleBy}
              onChange={(e) => setSampleBy(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Storage Condition UOM"
              placeholder="Storage Condition UOM"
              value={storageConditionUOM}
              onChange={(e) => setStorageConditionUOM(e.target.value)}
            />
            <label className="mb-3">Define Charging Start Date</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatNow"
              name="ChangingDate"
              label="Now"
              value={defineChargingStartDate}
              onChange={(e) => setDefineChargingStartDate(e.target.value)}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatLater"
              name="ChangingDate"
              label="Later"
            />

            <CFormInput
              className="mb-3"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Starting Date"
              placeholder=""
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <label className="mb-3">Initial Testing Required</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="TestingRequiredYes"
              name="TestingRequired"
              label="Yes"
              value={initialTestingRequired}
              onChange={(e) => setInitialTestingRequired(e.target.value)}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="TestingRequiredNo"
              name="TestingRequired"
              label="No"
              value={initialTestingRequired}
              onChange={(e) => setInitialTestingRequired(e.target.value)}
            />

            <CFormInput
              className="mb-3"
              type="file"
              label="Certificates If Any"
              placeholder=" "
              value={certificatesIfAny}
              onChange={(e) => setCertificatesIfAny(e.target.value)}
            />

            <CRow>
              <CCol sm={10}>
                <CFormInput
                  className="mb-3"
                  type="text"
                  id="numberOfConditions"
                  label="Number Of Storage Conditions"
                  placeholder="Number Of Storage Conditions"
                  value={numberOfStorageConditions}
                  onChange={(e) => setNumberOfStorageConditions(e.target.value)}
                />
              </CCol>

              <CCol sm={2}>
                <CButton
                  className="bg-info text-white mb-3 mt-4"
                  onClick={handleAddConditions}
                >
                  Add
                </CButton>
              </CCol>
            </CRow>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Test Plan / Revision No."
              placeholder="Select..."
              options={[
                "Select Sample Type",
                { label: "Hydraulic Oil" },
                { label: "CHP Oil" },
                { label: "Sacubitril" },
                { label: "Bio Burden Test For PM" },
              ]}
              value={testPlanet}
              onChange={(e) => setTestPlanet(e.target.value)}
            />

            {conditions.map((condition, index) => (
              <div className="each-condition-data mt-4" key={condition.id}>
                <h6 className="font-extrabold">
                  Stability Storage Condition-{condition.id}
                </h6>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.storage_condition`}
                  >
                    Storage Condition
                  </label>
                  <div className="form-control-wrap">
                    <select
                      className="form-control form-select"
                      id={`conditions_data.${index}.storage_condition`}
                      name={`conditions_data.${index}.storage_condition`}
                      placeholder="Storage condition Uom"
                    >
                      <option value="">Select</option>
                      <option value="6651c0dfa9d2755d7705ce05">10 to 25</option>
                      <option value="664f1373a9d2755d770568b4">
                        -20 ± 5°c
                      </option>
                      <option value="664f06cea9d2755d77055787">
                        25 ± 2°c 60 ± 5% rh
                      </option>
                      <option value="664f06aaa9d2755d77055748">
                        30 ± 2°c 65 ± 5% rh
                      </option>
                      <option value="664f02f0a9d2755d77055627">
                        40 ± 2°c and 75 ± 5% rh
                      </option>
                      <option value="664f02c3a9d2755d7705561b">40 ± 2°c</option>
                      <option value="664c24cdc105e11a716a938a">15℃</option>
                      <option value="65cb1132de5392629a1b59b6">℉</option>
                      <option value="6527cb451d0d0c3cb2ddceac">30℃</option>
                      <option value="65262853842e2542b312a465">42℉</option>
                      <option value="652580fc842e2542b3129c77">32℃</option>
                      <option value="651fd1c204e9976b7c625a57">24℉</option>
                      <option value="64eb669f4b131677f6614266">25℃ ± 2</option>
                      <option value="64e9fbba4b131677f66140d1">25℃</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.no_of_pulls`}
                  >
                    No of Pulls
                  </label>
                  <div className="form-control-wrap">
                    <div className="d-flex">
                      <input
                        type="number"
                        className="form-control"
                        id={`conditions_data.${index}.no_of_pulls`}
                        name={`conditions_data.${index}.no_of_pulls`}
                        placeholder="No"
                        value="1"
                      />
                      <button
                        className="btn btn-primary"
                        style={{ height: "36px", marginLeft: "8px" }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row d-flex flex-nowrap">
                    <div style={{ width: "400px" }}>
                      <label
                        className="form-label mt-3"
                        htmlFor={`conditions_data.${index}.station`}
                      >
                        Station
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.additional_quantity`}
                  >
                    Additional Quantity
                  </label>
                  <div className="form-control-wrap">
                    <input
                      type="number"
                      className="form-control"
                      id={`conditions_data.${index}.additional_quantity`}
                      name={`conditions_data.${index}.additional_quantity`}
                      placeholder="Additional Quantity"
                      value="0"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.comments`}
                  >
                    Comments
                  </label>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      className="form-control"
                      id={`conditions_data.${index}.comments`}
                      name={`conditions_data.${index}.comments`}
                      placeholder="comments"
                      value=""
                    />
                  </div>
                </div>
              </div>
            ))}
            <CFormInput
              className="mb-3"
              type="text"
              label="Instructions"
              placeholder="Instructions"
              name="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Package Configuration"
              placeholder="Package Configuration"
              value={packageConfiguration}
              onChange={(e) => setPackageConfiguration(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Instructions"
              placeholder="Instructions"
              name="instructions"
              value={specificationID}
              onChange={(e) => setSpecificationID(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Package Configuration"
              placeholder="Package Configuration"
              value={sampleType}
              onChange={(e) => setSampleType(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Instructions"
              placeholder="Instructions"
              name="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Package Configuration"
              placeholder="Package Configuration"
              value={packageConfiguration}
              onChange={(e) => setPackageConfiguration(e.target.value)}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleAdd}>
              Add Protocol
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
    }, [data]);
    const handleChange = (e) => {
      const { name, type, value, files } = e.target;
      const val = type === "file" ? files[0] : value;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Edit Stability Protocol</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              className="mb-3"
              type="text"
              label="Protocol ID"
              name="protocolId"
              value={formData?.protocolId || ""}
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
              type="text"
              label="Product/Material"
              name="productMaterial"
              value={formData?.productMaterial || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Specification ID"
              name="specificationId"
              value={formData?.specificationId || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Sample Type"
              name="sampleType"
              value={formData?.sampleType || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Protocol Id"
              placeholder="Protocol Id"
              value={formData?.protocolID || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="select"
              label="Sample Login Template"
              placeholder="Select..."
              options={[
                "Select Sample Type",
                { label: "ARZ Temp" },
                { label: "AAT" },
              ]}
              value={formData?.sampleLoginTemplet || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Manufacturing Date"
              placeholder=" "
              value={formData?.manufacturingDate || ""}
              onChange={handleChange}
            />

            <label>DateFormat</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatShort"
              name="DateFormat"
              label="Short Date"
              value={formData?.shortDate || ""}
              onChange={handleChange}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatLong"
              name="DateFormat"
              label="Long Date"
              value={formData?.longDate || ""}
              onChange={handleChange}
            />

            <CFormInput
              className="mb-3"
              type="text"
              label="Sample By"
              placeholder="Sample By"
              value={formData?.sampleBy || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Storage Condition UOM"
              placeholder="Storage Condition UOM"
              value={formData?.storageConditionUOM || ""}
              onChange={handleChange}
            />
            <label className="mb-3">Define Charging Start Date</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatNow"
              name="ChangingDate"
              label="Now"
              value={formData?.defineChargingStartDate || ""}
              onChange={handleChange}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="DateFormatLater"
              name="ChangingDate"
              label="Later"
            />

            <CFormInput
              className="mb-3"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Starting Date"
              placeholder=""
              value={formData?.startDate || ""}
              onChange={handleChange}
            />

            <label className="mb-3">Initial Testing Required</label>
            <CFormCheck
              className="mb-3"
              type="radio"
              id="TestingRequiredYes"
              name="TestingRequired"
              label="Yes"
              value={formData?.initialTestingRequired || ""}
              onChange={handleChange}
            />
            <CFormCheck
              className="mb-3"
              type="radio"
              id="TestingRequiredNo"
              name="TestingRequired"
              label="No"
              value={formData?.initialTestingRequired || ""}
              onChange={handleChange}
            />

            <CFormInput
              className="mb-3"
              type="file"
              label="Certificates If Any"
              placeholder=" "
              value={formData?.certificatesIfAny || ""}
              onChange={handleChange}
            />

            <CRow>
              <CCol sm={10}>
                <CFormInput
                  className="mb-3"
                  type="text"
                  id="numberOfConditions"
                  label="Number Of Storage Conditions"
                  placeholder="Number Of Storage Conditions"
                  value={formData?.numberOfStorageConditions || ""}
                  onChange={handleChange}
                />
              </CCol>
              <CCol sm={2}>
                <CButton
                  className="bg-info text-white mb-3 mt-4"
                  onClick={handleAddConditions}
                >
                  Add
                </CButton>
              </CCol>
            </CRow>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Test Plan / Revision No."
              placeholder="Select..."
              options={[
                "Select Sample Type",
                { label: "Hydraulic Oil" },
                { label: "CHP Oil" },
                { label: "Sacubitril" },
                { label: "Bio Burden Test For PM" },
              ]}
              value={formData?.testPlanet || ""}
              onChange={handleChange}
            />

            {conditions.map((condition, index) => (
              <div className="each-condition-data mt-4" key={condition.id}>
                <h6 className="font-extrabold">
                  Stability Storage Condition-{condition.id}
                </h6>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.storage_condition`}
                  >
                    Storage Condition
                  </label>
                  <div className="form-control-wrap">
                    <select
                      className="form-control form-select"
                      id={`conditions_data.${index}.storage_condition`}
                      name={`conditions_data.${index}.storage_condition`}
                      placeholder="Storage condition Uom"
                    >
                      <option value="">Select</option>
                      <option value="6651c0dfa9d2755d7705ce05">10 to 25</option>
                      <option value="664f1373a9d2755d770568b4">
                        -20 ± 5°c
                      </option>
                      <option value="664f06cea9d2755d77055787">
                        25 ± 2°c 60 ± 5% rh
                      </option>
                      <option value="664f06aaa9d2755d77055748">
                        30 ± 2°c 65 ± 5% rh
                      </option>
                      <option value="664f02f0a9d2755d77055627">
                        40 ± 2°c and 75 ± 5% rh
                      </option>
                      <option value="664f02c3a9d2755d7705561b">40 ± 2°c</option>
                      <option value="664c24cdc105e11a716a938a">15℃</option>
                      <option value="65cb1132de5392629a1b59b6">℉</option>
                      <option value="6527cb451d0d0c3cb2ddceac">30℃</option>
                      <option value="65262853842e2542b312a465">42℉</option>
                      <option value="652580fc842e2542b3129c77">32℃</option>
                      <option value="651fd1c204e9976b7c625a57">24℉</option>
                      <option value="64eb669f4b131677f6614266">25℃ ± 2</option>
                      <option value="64e9fbba4b131677f66140d1">25℃</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.no_of_pulls`}
                  >
                    No of Pulls
                  </label>
                  <div className="form-control-wrap">
                    <div className="d-flex">
                      <input
                        type="number"
                        className="form-control"
                        id={`conditions_data.${index}.no_of_pulls`}
                        name={`conditions_data.${index}.no_of_pulls`}
                        placeholder="No"
                        value="1"
                      />
                      <button
                        className="btn btn-primary"
                        style={{ height: "36px", marginLeft: "8px" }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row d-flex flex-nowrap">
                    <div style={{ width: "400px" }}>
                      <label
                        className="form-label mt-3"
                        htmlFor={`conditions_data.${index}.station`}
                      >
                        Station
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.additional_quantity`}
                  >
                    Additional Quantity
                  </label>
                  <div className="form-control-wrap">
                    <input
                      type="number"
                      className="form-control"
                      id={`conditions_data.${index}.additional_quantity`}
                      name={`conditions_data.${index}.additional_quantity`}
                      placeholder="Additional Quantity"
                      value="0"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor={`conditions_data.${index}.comments`}
                  >
                    Comments
                  </label>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      className="form-control"
                      id={`conditions_data.${index}.comments`}
                      name={`conditions_data.${index}.comments`}
                      placeholder="comments"
                      value=""
                    />
                  </div>
                </div>
              </div>
            ))}
            <CFormInput
              className="mb-3"
              type="text"
              label="Instructions"
              placeholder="Instructions"
              name="instructions"
              value={formData?.instructions || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Package Configuration"
              placeholder="Package Configuration"
              value={formData?.packageConfiguration || ""}
              onChange={handleChange}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>
              Update
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  return (
    <>
      <LaunchQMS />
      <div className="p-2">
        <h1 className="text-xl font-bold mb-4">Stability Protocol</h1>
        {/* <div className="grid grid-cols-5 gap-4 mb-4">
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
        </div> */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "APPROVED", label: "APPROVED" },
                { value: "REJECTED", label: "REJECTED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "DROPPED", label: "DROPPED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Stability_Protocol.pdf"
              title="Stability Protocol Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Stability Protocol"
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
      </div>
      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={handleAdd}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          onClose={closeViewModal}
          title="Stability Protocol Details"
          updateStatus={handleStatusUpdate}
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
    </>
  );
}

export default StabilityProtocol;
