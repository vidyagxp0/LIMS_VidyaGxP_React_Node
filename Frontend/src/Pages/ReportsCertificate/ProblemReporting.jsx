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
import ProblemReportingModal from "../Modals/ProblemReportingModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormCheck,
  CFormInput,
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
    InstrumentId: "INST-001",
    InstrumentCategory: "Cat-001",
    SuppliedBy: "Supplier A",
    ProblemId: "PRB-001",
    ProblemInBrief: "Brief description 1",
    ProblemInDetails: "Detailed description 1",
    OccuredOn: "2024-06-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    InstrumentId: "INST-002",
    InstrumentCategory: "Cat-002",
    SuppliedBy: "Supplier B",
    ProblemId: "PRB-002",
    ProblemInBrief: "Brief description 2",
    ProblemInDetails: "Detailed description 2",
    OccuredOn: "2024-06-02",
    status: "Inactive",
  },
];

const ProblemReporting = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  // *********************Edit ****************************

  const [isModalsOpen, setIsModalsOpen] = useState(false);

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
    return (
      row.SuppliedBy.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "InstrumentId", accessor: "InstrumentId" },
    { header: "Instrument Category", accessor: "InstrumentCategory" },
    { header: "Supplied By", accessor: "SuppliedBy" },
    { header: "Problem ID", accessor: "ProblemId" },
    { header: "Problem In Details", accessor: "ProblemInDetails" },
    { header: "Occured On", accessor: "OccuredOn" },
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
            key="delete"
            className="cursor-pointer"
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      instrument: item["Instrument"] || "",
      InstrumentCategory: item["Instrument Category"] || "",
      suppliedBy: item["Supplied By"] || "",
      problemId: item["Problem ID"] || "",
      problemInDetails: item["Problem In Details"] || "",
      occurredOn: item["Occurred On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (problemData) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === problemData.sno ? problemData : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          InstrumentId: problemData.instrumentId,
          InstrumentCategory: problemData.InstrumentCategory,
          SuppliedBy: problemData.suppliedBy,
          ProblemId: problemData.problemId,
          ProblemInBrief: problemData.problemInBrief,
          ProblemInDetails: problemData.problemInDetails,
          OccuredOn: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  //************************************************************************************************ */

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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Problem Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Problem Reporting</p>
          <CFormSelect
            type="text"
            label="Instrument (Instrument ID)"
            options={[
              "Select...",
              { label: "eqi/eng/163" },
              { label: "arzph001" },
              { label: "arz003" },
              { label: "qc/bal/0011" },
              { label: "hplc" },
              { label: "qc/bal/02" },
            ]}
            placeholder="Select... "
            name="InstrumentId"
            value={formData?.InstrumentId || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Instrument Category"
            placeholder="weighing balance "
            name="InstrumentCategory"
            value={formData?.InstrumentCategory || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Supplied By"
            placeholder="Supplied By "
            name="SuppliedBy"
            value={formData?.SuppliedBy || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem ID"
            placeholder="Problem ID"
            name="ProblemId"
            value={formData?.ProblemId || ""}
            onChange={handleChange}
          />
          <label>Problem In</label>
          <CFormCheck
            type="radio"
            id="ProblemInInstrument"
            name="ProblemIn"
            label="Instrument"
            value={formData?.ProblemIn || ""}
            onChange={handleChange}
          />
          <CFormCheck
            type="radio"
            className="mb-3"
            id="ProblemInModule"
            name="ProblemIn"
            label="Module"
            value={formData?.ProblemIn || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="ProblemInBrief"
            label="Problem In Brief"
            placeholder=" Problem In Brief"
            value={formData?.ProblemInBrief || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Reference Document"
            placeholder=" choose file"
            name="ReferenceDocument"
            value={formData?.ReferenceDocument || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Occurred On"
            name=""
            placeholder="OccurredOn"
            value={formData?.OccurredOn || ""}
            onChange={handleChange}
          />

          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            className="mb-3"
            label="Reported On"
            name="ReportedOn"
            placeholder=" "
            value={formData?.ReportedOn || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Details"
            placeholder=" Problem In Details"
            name="ProblemInDetails"
            value={formData?.ProblemInDetails || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleSave}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };
  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Problem Reporting</h1>

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
              fileName="Problem_Reporting.pdf"
              title="Problem Reporting Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Problem" color="blue" onClick={openModal} />
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
        <ProblemReportingModal
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
      </div>
    </>
  );
};
export default ProblemReporting;
