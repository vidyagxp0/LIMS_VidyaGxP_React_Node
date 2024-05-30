import React, { useState } from "react";
// import "./StorageCondition.css";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PiDownloadBold } from "react-icons/pi";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function CalibrationRecord() {
  const [addModal, setAddModal] = useState(false);

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
  ];

  const [storageName, setStorageName] = useState("");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle> Add Calibration Record</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Calibration id"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Instrument (Instrument ID)"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Module (Module ID)"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <CFormInput
            label="Calibration Record Template"
            className="mb-3"
            type="text"
            placeholder=""
          />

          <CFormInput className="mb-3" label="Certificates" type="file" />

          <CFormInput
            label="Calibration Type"
            className="mb-3"
            type="text"
            placeholder=""
          />
          <span>
            <input className="line4" type="checkbox" /> By Pass
          </span>

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Evaluate</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };
  const employees = [
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INPending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INPending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INPending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INPending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "Pending",
    },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return employees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.role}</td>
        <td>{employee.role}</td>
        <td>{employee.role}</td>
        <td>{employee.role}</td>
        <td>{employee.role}</td>
        <td>{employee.addedBy}</td>
        <td>{employee.status}</td>
        <td>
          <div className="d-flex gap-3">
            <div className="cursor-pointer">
              <FontAwesomeIcon
                onClick={() => setAddModal(true)}
                icon={faPenToSquare}
              />
            </div>
          </div>
        </td>
      </tr>
    ));
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(employees.length / pageSize));
  };

  return (
    <>
      <div className="m-5">
        <div className="">
          <h5>Calibration Records</h5>
        </div>

        <div className="border-dark-subtle border-2 bg-light mt-5 mb-4 rounded">
          <table className="table table-responsive table-striped text-xs">
            <thead>
              <tr>
                <th style={{background:"#3C496A", color:"white"}}>
                  <input type="checkbox" />
                </th>
                <th style={{background:"#3C496A", color:"white"}}>SNo.</th>
                <th style={{background:"#3C496A", color:"white"}}>Calibration Id</th>
                <th style={{background:"#3C496A", color:"white"}}>Instrument Id</th>
                <th style={{background:"#3C496A", color:"white"}}>(Module)Module Id</th>
                <th style={{background:"#3C496A", color:"white"}}>Calibration Type</th>
                <th style={{background:"#3C496A", color:"white"}}>Schedule Date</th>
                <th style={{background:"#3C496A", color:"white"}}>Next Due Date</th>
                <th style={{background:"#3C496A", color:"white"}}>Tolerance (Day(s))</th>
                <th style={{background:"#3C496A", color:"white"}}>Calibration Status</th>
                <th style={{background:"#3C496A", color:"white"}}>Actions </th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination">
            <div>
              <button
                className="btn  mr-2"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
            </div>
            <div className="current-page-number mr-2 bg-dark-subtle page-item">
              <button className="btn rounded-circle"> {currentPage} </button>
            </div>
            <div>
              <button
                className="btn mr-2"
                onClick={nextPage}
                disabled={endIndex >= employees.length}
              >
                &gt;&gt;
              </button>
            </div>
          </div>

          <button
            className="btn btn-next d-flex align-items-center"
            onClick={nextPage}
          >
            {" "}
            Next <FaArrowRight className="ms-2" />
          </button>
        </div>

        {addModal && (
          <StatusModal
            visible={addModal}
            closeModal={() => setAddModal(false)}
          />
        )}
      </div>
    </>
  );
}
