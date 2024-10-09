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
import ColumnApplicationModal from "../Modals/ColumnApplicationModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "hgfv",
    columnPressureQualification: "code1",
    FlowRate: "code1",
    WaveLength: "material 1",
    Injector: "John Doe",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    name: "hgfv",
    columnPressureQualification: "pressure2",
    FlowRate: "flow2",
    WaveLength: "wavelength2",
    Injector: "Jane Smith",
    status: "INITIATED",
  },
];

const ColumnApplication = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

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

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  // ************************************************************************************************
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <div>
        <CModal size="lg" alignment="" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>New Application</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p style={{ fontWeight: "bolder" }}>New Application</p>

            <CFormInput
              type="text"
              label="Name"
              placeholder="Name"
              className="custom-placeholder"
              name="name"
              value={formData?.name}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Prefix"
              placeholder="Prefix"
              className="custom-placeholder"
              name="prefix"
              value={formData?.prefix}
              onChange={handleChange}
            />

            <table
              className="table table-bordered"
              style={{ marginTop: "5px" }}
            >
              <thead>
                <tr>
                  <th>
                    Selected Standard Fields Displayed At Columns Qualification
                    And Usage
                  </th>
                  <th>Qualification</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Column Pressure</td>
                  <td>
                    <input
                      type="checkbox"
                      name="columnPressureQualification"
                      checked={formData?.columnPressureQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="columnPressureUsage"
                      checked={formData?.columnPressureUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Flow Rate (Mobile Phase/Carrier Gas)</td>
                  <td>
                    <input
                      type="checkbox"
                      name="flowRateQualification"
                      checked={formData?.flowRateQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="flowRateUsage"
                      checked={formData?.flowRateUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>PH of Mobile Phase</td>
                  <td>
                    <input
                      type="checkbox"
                      name="phQualification"
                      checked={formData?.phQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="phUsage"
                      checked={formData?.phUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Wave Length</td>
                  <td>
                    <input
                      type="checkbox"
                      name="waveLengthQualification"
                      checked={formData?.waveLengthQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="waveLengthUsage"
                      checked={formData?.waveLengthUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Injector</td>
                  <td>
                    <input
                      type="checkbox"
                      name="injectorQualification"
                      checked={formData?.injectorQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="injectorUsage"
                      checked={formData?.injectorUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Detector Type</td>
                  <td>
                    <input
                      type="checkbox"
                      name="detectorTypeQualification"
                      checked={formData?.detectorTypeQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="detectorTypeUsage"
                      checked={formData?.detectorTypeUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Injector Volume</td>
                  <td>
                    <input
                      type="checkbox"
                      name="injectorVolumeQualification"
                      checked={formData?.injectorVolumeQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="injectorVolumeUsage"
                      checked={formData?.injectorVolumeUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mobile Phase / Carrier Gas</td>
                  <td>
                    <input
                      type="checkbox"
                      name="mobilePhaseQualification"
                      checked={formData?.mobilePhaseQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="mobilePhaseUsage"
                      checked={formData?.mobilePhaseUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Hydrogen Low Rate</td>
                  <td>
                    <input
                      type="checkbox"
                      name="hydrogenFlowRateQualification"
                      checked={formData?.hydrogenFlowRateQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="hydrogenFlowRateUsage"
                      checked={formData?.hydrogenFlowRateUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Air Flow Rate</td>
                  <td>
                    <input
                      type="checkbox"
                      name="airFlowRateQualification"
                      checked={formData?.airFlowRateQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="airFlowRateUsage"
                      checked={formData?.airFlowRateUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Column Temperature</td>
                  <td>
                    <input
                      type="checkbox"
                      name="columnTemperatureQualification"
                      checked={formData?.columnTemperatureQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="columnTemperatureUsage"
                      checked={formData?.columnTemperatureUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Injector Temperature</td>
                  <td>
                    <input
                      type="checkbox"
                      name="injectorTemperatureQualification"
                      checked={formData?.injectorTemperatureQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="injectorTemperatureUsage"
                      checked={formData?.injectorTemperatureUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>No. Of Injection</td>
                  <td>
                    <input
                      type="checkbox"
                      name="noOfInjectionQualification"
                      checked={formData?.noOfInjectionQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="noOfInjectionUsage"
                      checked={formData?.noOfInjectionUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Split Ratio</td>
                  <td>
                    <input
                      type="checkbox"
                      name="splitRatioQualification"
                      checked={formData?.splitRatioQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="splitRatioUsage"
                      checked={formData?.splitRatioUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mode</td>
                  <td>
                    <input
                      type="checkbox"
                      name="modeQualification"
                      checked={formData?.modeQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="modeUsage"
                      checked={formData?.modeUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Concentration</td>
                  <td>
                    <input
                      type="checkbox"
                      name="concentrationQualification"
                      checked={formData?.concentrationQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="concentrationUsage"
                      checked={formData?.concentrationUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Temperature</td>
                  <td>
                    <input
                      type="checkbox"
                      name="temperatureQualification"
                      checked={formData?.temperatureQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="temperatureUsage"
                      checked={formData?.temperatureUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pharmacopoeia</td>
                  <td>
                    <input
                      type="checkbox"
                      name="pharmacopoeiaQualification"
                      checked={formData?.pharmacopoeiaQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="pharmacopoeiaUsage"
                      checked={formData?.pharmacopoeiaUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Detector Temperature</td>
                  <td>
                    <input
                      type="checkbox"
                      name="detectorTemperatureQualification"
                      checked={formData?.detectorTemperatureQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="detectorTemperatureUsage"
                      checked={formData?.detectorTemperatureUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>A.R.No.</td>
                  <td>
                    <input
                      type="checkbox"
                      name="arNoQualification"
                      checked={formData?.arNoQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="arNoUsage"
                      checked={formData?.arNoUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Load</td>
                  <td>
                    <input
                      type="checkbox"
                      name="loadQualification"
                      checked={formData?.loadQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="loadUsage"
                      checked={formData?.loadUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Batch No.</td>
                  <td>
                    <input
                      type="checkbox"
                      name="batchNoQualification"
                      checked={formData?.batchNoQualification || ""}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="batchNoUsage"
                      checked={formData?.batchNoUsage || ""}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <CButton color="primary" type="button">
                Add Application
              </CButton>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={handleSave}>
              Add Application
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      name: item["Name"] || "",
      ColumnPressure: item["Column Pressure	"] || "",
      FlowRate: item["Flow Rate	"] || "",
      WaveLength: item["Wave Length	"] || "",
      Injector: item["Injector"] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Name", accessor: "name" },
    { header: "Column Pressure	", accessor: "ColumnPressure" },
    { header: "Flow Rate	", accessor: "FlowRate" },
    { header: "Wave Length	", accessor: "WaveLength" },
    { header: "Injector", accessor: "Injector" },
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

  const handleModalSubmit = (requalification) => {
    // const currentDate = new Date().toISOString().split("T")[0];

    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === requalification.sno ? requalification : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          prefix: "",
          columnPressureQualification:
            requalification.columnPressureQualification,
          columnPressureUsage: requalification.columnTemperatureUsage,
          flowRateQualification: requalification.flowRateQualification,
          flowRateUsage: requalification.flowRateUsage,
          phQualification: requalification.phQualification,
          phUsage: requalification.phUsage,
          waveLengthQualification: requalification.waveLengthQualification,
          waveLengthUsage: requalification.waveLengthUsage,
          injectorQualification: requalification.injectorQualification,
          injectorUsage: requalification.injectorUsage,
          detectorTypeQualification: requalification.detectorTypeQualification,
          detectorTypeUsage: requalification.detectorTypeUsage,
          injectorVolumeQualification:
            requalification.injectorVolumeQualification,
          injectorVolumeUsage: requalification.injectorVolumeUsage,
          mobilePhaseQualification: requalification.mobilePhaseQualification,
          mobilePhaseUsage: requalification.mobilePhaseUsage,
          hydrogenFlowRateQualification:
            requalification.hydrogenFlowRateQualification,
          hydrogenFlowRateUsage: requalification.hydrogenFlowRateUsage,
          airFlowRateQualification: requalification.airFlowRateQualification,
          airFlowRateUsage: requalification.airFlowRateQualification,
          columnTemperatureQualification:
            requalification.columnTemperatureQualification,
          columnTemperatureUsage: requalification.columnTemperatureUsage,
          injectorTemperatureQualification:
            requalification.injectorTemperatureQualification,
          injectorTemperatureUsage: requalification.injectorTemperatureUsage,
          noOfInjectionQualification:
            requalification.noOfInjectionQualification,
          noOfInjectionUsage: requalification.noOfInjectionUsage,
          splitRatioQualification: requalification.splitRatioQualification,
          splitRatioUsage: requalification.splitRatioUsage,
          modeQualification: requalification.modeQualification,
          modeUsage: requalification.modeUsage,
          concentrationQualification:
            requalification.concentrationQualification,
          concentrationUsage: requalification.concentrationUsage,
          temperatureQualification: requalification.temperatureQualification,
          temperatureUsage: requalification.temperatureUsage,
          pharmacopoeiaQualification:
            requalification.pharmacopoeiaQualification,
          pharmacopoeiaUsage: requalification.pharmacopoeiaUsage,
          detectorTemperatureQualification:
            requalification.detectorTemperatureQualification,
          detectorTemperatureUsage: requalification.detectorTemperatureUsage,
          arNoQualification: requalification.arNoQualification,
          arNoUsage: requalification.arNoUsage,
          loadQualification: requalification.loadQualification,
          loadUsage: requalification.loadUsage,
          batchNoQualification: requalification.batchNoQualification,
          batchNoUsage: requalification.batchNoUsage,
          status: "Active",
        },
      ]);
    }
    closeModal();
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Column Application </h1>
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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Application" color="blue" onClick={openModal} />
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
      <ColumnApplicationModal
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
      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div></>
  );
};

export default ColumnApplication;
