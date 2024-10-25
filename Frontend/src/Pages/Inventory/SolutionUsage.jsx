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
import SolutionUsageModal from "../Modals/SolutionUsageModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    volumetricSolutionName: "code1",
    usedOn: "code1",
    modeOfUsage: "material 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    volumetricSolutionName: "solution 2",
    usedOn: "2024-07-01",
    modeOfUsage: "usage 2",
    status: "INITIATED",
  },
];

const SolutionUsage = () => {
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

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
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
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="xl"
        >
          <CModalHeader>
            <CModalTitle>Add Solution</CModalTitle>
          </CModalHeader>
          <p style={{ marginLeft: "13px" }}>
            Add information and Add new usage.
          </p>
          <CModalBody>
            <CFormSelect
              name="standardizationNo"
              label="Standardization No."
              placeholder=" "
              value={formData?.standardizationNo || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
              options={[
                { value: "select", label: "select" },
                { value: "test", label: "test" },
              ]}
            />
            <CFormInput
              name="volumetricSolutionName"
              type="text"
              label="Volumetric Solution Name"
              placeholder="Volumetric Solution Name"
              value={formData?.volumetricSolutionName || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="preparationNo"
              type="text"
              label="Preparation No."
              placeholder="Preparation No."
              value={formData?.preparationNo || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="usedOn"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Used On"
              placeholder="Solution Expiry Period"
              value={formData?.usedOn || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="preparationDate"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Preparation Date"
              placeholder="Solution Quantity"
              value={formData?.preparationDate || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="standardizationDate"
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Standardization Date"
              placeholder="Standardization Schedule"
              value={formData?.standardizationDate || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="usedBy"
              type="text"
              label="Used By"
              placeholder="Batch No"
              value={formData?.usedBy || ""}
              onChange={handleChange}
              className="mb-3"
            />
            <CForm className="mb-3">
              <CFormLabel>Mode of Usage</CFormLabel>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <CFormCheck
                  type="radio"
                  name="modeOfUsage"
                  id="sampleAnalysis"
                  label="Sample Analysis"
                  value="Sample Analysis"
                  checked={formData?.modeOfUsage === "Sample Analysis" || ""}
                  onChange={handleChange}
                />
                <CFormCheck
                  type="radio"
                  name="modeOfUsage"
                  id="miscellaneous"
                  label="Miscellaneous"
                  value="Miscellaneous"
                  checked={formData?.modeOfUsage === "Miscellaneous" || ""}
                  onChange={handleChange}
                />
              </div>
            </CForm>
            <CFormSelect
              name="productMaterial"
              label="Product / Material"
              placeholder="select"
              value={formData?.productMaterial || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
              options={[
                { value: "select", label: "select" },
                { value: "AAT-062024-00000106", label: "AAT-062024-00000106" },
              ]}
            />
            <CFormInput
              name="arNos"
              type="number"
              label="A.R. No's"
              placeholder="select"
              value={formData?.arNos || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="testName"
              type="text"
              label="Test Name"
              placeholder="select"
              value={formData?.testName || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <CFormInput
              name="commentsIfAny"
              type="text"
              label="Comments If Any"
              placeholder="select"
              value={formData?.commentsIfAny || ""}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <label>Comments</label>
              <textarea
                name="comments"
                id="comments"
                className="form-control"
                value={formData?.comments}
                onChange={handleChange}
              ></textarea>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton
              onClick={handleSave}
              style={{ background: "#0F93C3", color: "white" }}
            >
              Add Solution
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const filteredData = data.filter((row) => {
    return (
      row.volumetricSolutionName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
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
      volumetricSolutionName: item["Volumetric Solution Name"] || "",
      usedOn: item["Used On"] || "",
      modeOfUsage: item["Mode of Usage"] || "",
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
    { header: "Volumetric Solution Name	", accessor: "volumetricSolutionName" },
    { header: "Used On", accessor: "usedOn" },
    { header: "Mode of Usage", accessor: "modeOfUsage" },
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
    const currentDate = new Date().toISOString().split("T")[0];

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
          standardizationNo: requalification.standardizationNo,
          volumetricSolutionName: requalification.volumetricSolutionName,
          preparationNo: requalification.preparationNo,
          usedOn: requalification.usedOn,
          preparationDate: requalification.preparationDate,
          standardizationDate: requalification.standardizationDate,
          usedBy: requalification.usedBy,
          modeOfUsage: requalification.modeOfUsage,
          productMaterial: requalification.productMaterial,
          arNos: requalification.arNos,
          testName: requalification.testName,
          commentsIfAny: requalification.commentsIfAny,
          comments: requalification.comments,
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
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Usage</h1>
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
              fileName="Group_Name.pdf"
              title="Group Name Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Usage" color="blue" onClick={openModal} />
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
        <SolutionUsageModal
          visible={isModalOpen}
          handleSubmit={handleModalSubmit}
          closeModal={closeModal}
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
      </div>
    </>
  );
};

export default SolutionUsage;
