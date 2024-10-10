import React, { useState, useEffect } from "react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InstrumentUsageModal from "../Modals/InstrumentUsageModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import ReusableModal from "../Modals/ResusableModal.jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = JSON.parse(localStorage.getItem("instruments")) || [];


const InstrumentUsage = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
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
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Instrument Usage</p>

          <CFormSelect
            className="mb-3"
            type="select"
            label="Instrument (Instrument ID)"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "en33/23" },
              { label: "eqi/eng/163" },
              { label: "ARZ001" },
              { label: "Arz003" },
              { label: "qc/bal/011" },
              { label: "hplc" },
            ]}
            value={formData?.InstrumentID || ""}
            name="InstrumentID"
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Category"
            placeholder="chromatography "
            name="InstrumentCategory"
            value={formData?.InstrumentCategory || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Usage Code"
            name="UsageCode"
            placeholder="Usage Code"
            value={formData?.UsageCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            name="ProductName"
            placeholder="Product Name"
            value={formData?.ProductName || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="A.R.No."
            name="ARNO"
            placeholder="A.R.No."
            value={formData?.ARNO || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Used For"
            placeholder="Used For"
            name="UsedFor"
            value={formData?.UsedFor || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Used By"
            name="UsedBy"
            placeholder="Used By"
            value={formData?.UsedBy || ""}
            onChange={handleChange}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Used From"
            placeholder=""
            name="UsedFor"
            value={formData?.UsedFrom || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Used To"
            placeholder=""
            name="UsedTo"
            value={formData?.UsedTo || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Comment If Any"
            placeholder="Comment"
            name="Comment"
            value={formData?.Comment || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

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
      row?.ARNO?.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Instrument ID", accessor: "InstrumentID" },
    { header: "Instrument Category", accessor: "InstrumentCategory" },
    { header: "Usage Code", accessor: "UsageCode" },
    { header: "Product Name", accessor: "ProductName" },
    { header: "Ar.No", accessor: "ARNO" },
    { header: "Used For", accessor: "UsedFor" },
    { header: "UsedBy", accessor: "UsedBy" },
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

  const fields = [
    { label: "InstrumentID", key: "InstrumentID" },
    { label: "InstrumentCategory", key: "InstrumentCategory" },
    { label: "UsageCode", key: "UsageCode" },
    { label: "ProductName", key: "ProductName" },
    { label: "ARNO", key: "ARNO" },
    { label: "UsedFor", key: "UsedFor" },
    { label: "UsedBy", key: "UsedBy" },
    { label: "status", key: "status" },
  ];

  const handleStatusUpdate = (sampleType, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.sampleType === sampleType ? { ...row, status: newStatus } : row
      )
    );
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      InstrumentID: item["Instrument ID"] || "",
      InstrumentCategory: item["Instrument Category"] || "",
      UsageCode: item["Usage Code"] || "",
      ProductName: item["Product Name"] || "",
      ARNO: item["Ar.No"] || "",
      UsedFor: item["Used For"] || "",
      UsedBy: item["UsedBy"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newInstrument) => {
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === newInstrument.sno ? newInstrument : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          InstrumentID: newInstrument.InstrumentID,
          InstrumentCategory: newInstrument.InstrumentCategory,
          UsageCode: newInstrument.UsageCode,
          ProductName: newInstrument.ProductName,
          ARNO: newInstrument.ARNO,
          UsedFor: newInstrument.UsedFor,
          UsedBy: newInstrument.UsedBy,
          UsedFrom: newInstrument.UsedFrom,
          UsedTo: newInstrument.UsedTo,
          comment: newInstrument.Comment,
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Instrument Usage</h1>

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
            fileName="Instrument_Usage.pdf"
            title="Instrument Usage Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Instrument Usage" color="blue" onClick={openModal} />
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
      <InstrumentUsageModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
      />
      {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="InstrumentMasterReg."
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
export default InstrumentUsage;
