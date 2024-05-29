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

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function TestTechniques() {
  const [storageName, setStorageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filterStatus, setFilterStatus] = useState("Select Status");

  const handleAddStorage = () => {
    if (storageName.trim() === "") {
      setErrorMessage("Storage condition is Required");
    } else {
      toast.warning(
        "Apologies, an unexpected error occurred while adding the Storage Condition."
      );
    }
  };
  const notify = () => toast("Wow so easy!");

  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
    {
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "ACTIVE",
    },
    {
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INACTIVE",
    },
    {
      user: "CHPOIL",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "ACTIVE",
    },
    {
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "ACTIVE",
    },
    {
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INACTIVE",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees
    .filter((employee) =>
      employee.user.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (employee) =>
        filterStatus === "Select Status" || employee.status === filterStatus
    );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td
          style={{ width: "110px" }}
          className={`rounded-3 ${employee.status === "ACTIVE"
            ? "bg-success text-white"
            : "bg-danger text-white"
            } d-flex justify-content-center p-1 m-2 `}
        >
          {employee.status}
        </td>
        <td>{employee.SpecificID}</td>
        <td>
          &nbsp; &nbsp;&nbsp;
          <HiDotsHorizontal />
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
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <>
      <div className="m-5">
        <div className="">
          <h5>Test Techniques</h5>
        </div>

        <div className="">
          <div >
            <div id="searchicon">
              <CiSearch />
            </div>

            <div className="">
              <input
                type="text"
                className=""
                id=""
                placeholder="search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="dropdown m-5"></div>

          <div className="dropdown">
            <div>
              <button
                className="btn border"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <select
                  id="selectOption"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option>Select Status </option>
                  <option>ACTIVE</option>
                  <option>INACTIVE</option>
                </select>
              </button>
            </div>
          </div>

          <button
            id="Addbtn"
            className="btn btn-primary m-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            style={{ position: "absolute", left: "990px" }}
          >
            <CgAddR /> <span>Add Technique</span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <div id="line1">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Add Test Technique
                </h5>
                <button
                  id="closebtn"
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <p style={{ marginLeft: "20px" }}>
              Add information and add new Test Technique.
            </p>
            <label className="line3" htmlFor="">
              Technique Name
            </label>
            <input
              className="line4"
              required
              type="text"
              placeholder="Technique Name"
            />

            <FormControl style={{ margin: "20px" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Type of technique
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Complex
"
                  control={<Radio />}
                  label="
Complex
"
                />
                <FormControlLabel
                  value="Non-complex"
                  control={<Radio />}
                  label="Non-complex"
                />
              </RadioGroup>
            </FormControl>

            <label className="line3" htmlFor="">
              Technique Description
            </label>
            <input
              className="line4"
              required
              type="text"
              placeholder="Technique Description"
            />

            {errorMessage && (
              <div
                id="error"
                style={{ color: "red", fontSize: "10px", marginLeft: "30px" }}
              >
                {errorMessage}
              </div>
            )}

            <div id="line5">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                &lt; Back
              </button>
              <button>Submit</button>
            </div>
            <div>
              <ToastContainer />
            </div>
          </div>
        </div>

        <br />
        <div className="table-responsive p-4 container1">
          <table className="table shadow ">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Sr.no.</th>
                <th>Technique Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Added On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination " style={{ margin: "0 30px" }}>
            <div className="mr-5">
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
            className="btn btn-next"
            style={{ margin: "0 30px" }}
            onClick={nextToLastPage}
          >
            {" "}
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
