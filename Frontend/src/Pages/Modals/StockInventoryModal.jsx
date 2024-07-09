import React from "react";
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

const StockInventoryModal = (props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={props.visible} 
        onClose={props.closeModal}
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
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="" />}
          />
          <CFormInput
            label="Received Date"
            className="mb-3"
            type="date"
            placeholder="Received Date"
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
          />
          <CFormInput
            label="Truck No."
            className="mb-3"
            type="number"
            placeholder="Truck No."
          />
          <CFormInput
            label="Ch No."
            className="mb-3"
            type="number"
            placeholder="Ch No."
          />
          <CFormInput
            label="Invoice Number"
            className="mb-3"
            type="number"
            placeholder="Invoice Number"
          />
          <CFormInput
            label="Quantity In MT"
            className="mb-3"
            type="text"
            placeholder="Quantity In MT"
          />
          <CFormInput
            label="Remarks"
            className="mb-3"
            type="text"
            placeholder="Remarks"
          />
          <div className="d-flex gap-3 mt-3">
            <CButton color="light w-50" onClick={props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default StockInventoryModal;
