
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
import StockInventoryModal from "../Modals/StockInventoryModal.jsx";
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
import { Autocomplete, TextField } from "@mui/material";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    MaterialName: "PLA-001",
    SupplierName: "PC-00111",
    TruckNo: "TRK-001",
    ChNo: "CH-001",
    InvoiceNo: "1005ch-55",
    QuantityInMt: "25 MT",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MaterialName: "CHEM-002",
    SupplierName: "PC-002",
    TruckNo: "TRK-002",
    ChNo: "CH-002",
    InvoiceNo: "1006ch-56",
    QuantityInMt: "30 MT",
    status: "Inactive",
  },
];

const StockInventory = () => {
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
  const [editModalData, setEditModalData] = useState(null); 
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
      row.TruckNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Material Name", accessor: "MaterialName" },
    { header: "Supplier Name", accessor: "SupplierName" },
    { header: "Truck No.", accessor: "TruckNo" },
    { header: "CH No.", accessor: "ChNo" },
    { header: "Invoice No.", accessor: "InvoiceNo" },
    { header: "Quantity in Mt", accessor: "QuantityInMt" },
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
      sno:  index + 1,
      MaterialName: item["Material Name"] || "",
      SupplierName: item["Supplier Name"] || "",
      TruckNo: item["Truck No."] || "",
      ChNo: item["CH No."] || "",
      InvoiceNo: item["Invoice No."] || "",
      QuantityInMt: item["Quantity in Mt"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
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
          MaterialName: newInstrument.MaterialName,
          SupplierName: newInstrument.SupplierName,
          TruckNo: newInstrument.TruckNo,
          ChNo: newInstrument.ChNo,
          InvoiceNo: newInstrument.InvoiceNo,
          QuantityInMt: newInstrument.QuantityInMt,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
  ];

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
        <CModal
          alignment="center"
          visible={visible} 
          onClose={closeModal}
          size="xl"
        >
          <CModalHeader>
            <CModalTitle>Add Inventory</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <label className="mb-2" htmlFor="material-name">
              Material Name
            </label>
            <Autocomplete
              disablePortal
              id="material-name"
              className="mb-3"
              name="MaterialName"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} label="" />}
             value={formData?.MaterialName||""}
             onChange={handleChange}
            />
            <CFormInput
              label="Received Date"
              className="mb-3"
              type="date"
              name="revisedDate"
              placeholder="Received Date"
              value={formData?.revisedDate||""}
              onChange={handleChange}
            />
            <label className="mb-2" htmlFor="supplier-name">
              Supplier Name
            </label>
            <Autocomplete
              disablePortal
              id="supplier-name"
              className="mb-3"
              name="SupplierName"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} label="" />}
              value={formData?.SupplierName||""}
              onChange={ handleChange}
            />
            <CFormInput
              label="Truck No."
              className="mb-3"
              name="TruckNo"
              type="text"
              placeholder="Truck No."
              value={formData?.TruckNo||""}
              onChange={ handleChange}
            />
            <CFormInput
              label="Ch No."
              className="mb-3"
              type="text"
              name="ChNo"
              placeholder="Ch No."
              value={formData?.ChNo||""}
              onChange={ handleChange}
            />
            <CFormInput
              label="Invoice Number"
              className="mb-3"
              type="text"
              name="InvoiceNo"
              placeholder="Invoice Number"
              value={formData?.InvoiceNo||""}
              onChange={ handleChange}
            />
            <CFormInput
              label="Quantity In MT"
              className="mb-3"
              type="text"
              name="QuantityInMt"
              placeholder="Quantity In MT"
              value={formData?.QuantityInMt||""}
              onChange={ handleChange}
            />
            <CFormInput
              label="Remarks"
              className="mb-3"
              type="text"
              name="remarks"
              placeholder="Remarks"
              value={formData?.remarks||""}
              onChange={ handleChange}
            />
            <div className="d-flex gap-3 mt-3">
              <CButton color="light w-50" onClick={closeModal}>
                &lt; Back
              </CButton>
              <CButton color="primary w-50" onClick={handleSave}>Submit</CButton>
            </div>
          </CModalBody>
        </CModal>
      </div>
    );
  };
  


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory/Inventory Registration</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
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
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
          <ATMButton text="Add Inventory Registration" color="blue" onClick={openModal} />
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
      <StockInventoryModal
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
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
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
  );
};
export default StockInventory;
