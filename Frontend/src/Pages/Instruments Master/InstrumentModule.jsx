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
import InstrumentModuleModal from "../Modals/InstrumentModuleModal.jsx";
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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Category: "Product 1",
    Module: "Description 1",
    ModuleId: "MOD001",
    Make: "Brand A",
    Model: "Model X",
    ManufacturerNo: "MFG12345",
    SuppliedBy: "Supplier 1",
    InstallOn: "2024-06-01",
    ExpiresOn: "2025-06-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    Category: "Product 2",
    Module: "Description 2",
    ModuleId: "MOD002",
    Make: "Brand B",
    Model: "Model Y",
    ManufacturerNo: "MFG67890",
    SuppliedBy: "Supplier 2",
    InstallOn: "2024-06-02",
    ExpiresOn: "2025-06-02",
    status: "Inactive",
  },
];

const InstrumentModule = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument Module</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Instrument Module</p>
          <CFormSelect
            className="mb-3"
            label="Instrument (Instrument ID)"
            placeholder="Select..."
            name="InstrumentId"
            options={[
              "Select...",
              { label: "Weighing Balance 2" },
              { label: "Pressure Gauge" },
              { label: "ARZ ph Meter" },
              { label: "Ariz Balance" },
              { label: "Weighing Balance-1" },
              { label: "Weighing Balance" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Category"
            placeholder="Category"
            name="Category"
            value={formData?.Category || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Module"
            name="Module"
            placeholder="Module"
            value={formData?.Module || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Module ID"
            name="ModuleId"
            placeholder="Module ID"
            value={formData?.ModuleId || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make"
            name="Make"
            placeholder="Make"
            value={formData?.Make || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Model"
            name="Model"
            placeholder="Ser33"
            value={formData?.Model || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            name="ManufacturerNo"
            label="Manufacturer's Serial No."
            placeholder="adf3434"
            value={formData?.ManufacturerNo || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Installed On"
            name="InstallOn"
            placeholder="05/10/2024"
            value={formData?.InstallOn || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            placeholder="05/05/2023"
            name="ExpiresOn"
            value={formData?.ExpiresOn || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            placeholder="VidyaGxP"
            name="SuppliedBy"
            value={formData?.SuppliedBy || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            name="SopNo"
            placeholder="ASTM6453"
            value={formData?.SopNo || ""}
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
      row.Model.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Category", accessor: "Category" },
    { header: "Module", accessor: "ModuleId" },
    { header: "Make", accessor: "Make" },
    { header: "Model", accessor: "Model" },
    { header: "Manufacturer No.", accessor: "ManufacturerNo" },
    { header: "Supplied By", accessor: "SuppliedBy" },
    { header: "Install On", accessor: "InstallOn" },
    { header: "Expires On", accessor: "ExpiresOn" },
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
      Category: item["Category"] || "",
      ModuleId: item["Module"] || "",
      Make: item["Make"] || "",
      Model: item["Model"] || "",
      ManufacturerNo: item["Manufacturer No."] || "",
      SuppliedBy: item["Supplied By"] || "",
      InstallOn: item["Install On"] || "",
      ExpiresOn: item["Expires On"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newInstrument) => {
    const currentDate = new Date().toISOString().split("T")[0];

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
          Category: newInstrument.Category,
          Module: newInstrument.Module,
          ModuleId: newInstrument.ModuleId,
          Make: newInstrument.Make,
          Model: newInstrument.Model,
          ManufacturerNo: newInstrument.ManufacturerNo,
          InstallOn: currentDate,
          ExpiresOn: newInstrument.ExpiresOn,
          SuppliedBy: newInstrument.SuppliedBy,
          SopNo: newInstrument.SopNo,
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Instrument Module</h1>

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
        <PDFDownload columns={columns} data={filteredData} fileName="Instrument_Module.pdf" title="Instrument Module Data" />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Instrument Category"
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
      <InstrumentModuleModal
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
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={() => setIsViewModalOpen(false)}
          data={viewModalData}
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
  );
};
export default InstrumentModule;
