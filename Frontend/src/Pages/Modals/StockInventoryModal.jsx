import React, { useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { Autocomplete, TextField } from "@mui/material";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

const StockInventoryModal = ({ visible, closeModal, handleSubmit }) => {
  const [stockInventory, setStockInventory] = useState({
    MaterialName: "",
    Description: "",
    revisedDate: "",
    SupplierName: "",
    TruckNo: "",
    ChNo: "",
    InvoiceNo: "",
    QuantityInMt: "",
    remarks: "",
  });

  const handleChange = (field, value) => {
    const updatedData = { ...stockInventory, [field]: value };
    setStockInventory(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit({ ...stockInventory });
    closeModal();
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
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="" />}
            value={stockInventory.MaterialName}
            onChange={(e) => handleChange("MaterialName", e.target.value)}
          />
          <CFormInput
            label="Received Date"
            className="mb-3"
            type="date"
            placeholder="Received Date"
            value={stockInventory.revisedDate}
            onChange={(e) => handleChange("revisedDate", e.target.value)}
          />
          <label className="mb-2" htmlFor="supplier-name">
            Supplier Name
          </label>
          <Autocomplete
            disablePortal
            id="supplier-name"
            className="mb-3"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="" />}
            value={stockInventory.SupplierName}
            onChange={(e) => handleChange("SupplierName", e.target.value)}
          />
          <CFormInput
            label="Truck No."
            className="mb-3"
            type="text"
            placeholder="Truck No."
            value={stockInventory.TruckNo}
            onChange={(e) => handleChange("TruckNo", e.target.value)}
          />
          <CFormInput
            label="Ch No."
            className="mb-3"
            type="text"
            placeholder="Ch No."
            value={stockInventory.ChNo}
            onChange={(e) => handleChange("ChNo", e.target.value)}
          />
          <CFormInput
            label="Invoice Number"
            className="mb-3"
            type="text"
            placeholder="Invoice Number"
            value={stockInventory.InvoiceNo}
            onChange={(e) => handleChange("InvoiceNo", e.target.value)}
          />
          <CFormInput
            label="Quantity In MT"
            className="mb-3"
            type="text"
            placeholder="Quantity In MT"
            value={stockInventory.QuantityInMt}
            onChange={(e) => handleChange("QuantityInMt", e.target.value)}
          />
          <CFormInput
            label="Remarks"
            className="mb-3"
            type="text"
            placeholder="Remarks"
            value={stockInventory.remarks}
            onChange={(e) => handleChange("remarks", e.target.value)}
          />
          <div className="d-flex gap-3 mt-3">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleFormSubmit}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default StockInventoryModal;
