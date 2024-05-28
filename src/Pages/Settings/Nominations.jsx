import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Nominations() {
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
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "admin",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
    {
      user: "Initiated Product",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "ACTIVE",
    },
    {
      user: "admin",
      role: "Sacubitril",
      departments: "ARIP0000095",
      joiningDate: "N/A",
      addedBy: "RPS-TSLV-00",
      status: "INACTIVE",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.user.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(employee => 
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
        <td>{employee.role}</td>
        <td>{employee.departments}</td>
        <td>{employee.joiningDate}</td>
        <td>{employee.user}</td>
        <td>{employee.addedBy}</td>
        <td style={{width:"110px"}}
          className={`rounded-3 ${
            employee.status === "ACTIVE" ? "bg-success text-white" : "bg-danger text-white"
          } d-flex justify-content-center p-1 m-2 `}
        >
          {employee.status}
        </td>
        <td>
          &nbsp; &nbsp; &nbsp;
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
      <div id="div1">
        <h5>Nominations</h5>
      </div>

      <div id="div2">
        <div id="searchmain">
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
          style={{position:"absolute", left:"950px"}}
        >
          <CgAddR /> <span>Add Nomination</span>
        </button>

        <div
          className="offcanvas offcanvas-end overflow-y-scroll"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Nomination
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
            Add information about Nominations
          </p>

          <label className="line3" htmlFor="">
            Analyst
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Resource Name"
          />

          <label className="line3" htmlFor="">
            Employee ID
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Employee ID"
          />

          <label className="line3" htmlFor="">
            Role/Title
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Role/Title"
          />
          <label className="line3" htmlFor="">
            Test Technique
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Test Technique"
          />
          <label className="line3" htmlFor="">
            Training Documents
          </label>
          <input
            className="line4"
            style={{ padding: "23px", fontSize: "10px" }}
            required
            type="file"
            placeholder="Training Details"
          />
          <label className="line3" htmlFor="">
            Total Experience / Work Area
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Total Experience"
          />
          <label className="line3" htmlFor="">
            Past Experience / Work Area
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Past Experience"
          />
          <label className="line3" htmlFor="">
            Justification for Direct Nomination
          </label>
          <input
            className="line4"
            required
            type="text"
            placeholder="Justification for Direct Nomination"
          />

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
        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>SNo.</th>
              <th>Analyst</th>
              <th>Test Technique</th>
              <th>Total Experience</th>
              <th>Past Experience</th>
              <th>Justification for Direct Nomination</th>
              <th>Added On</th>
              <th>Status</th>
              <th>Actions </th>
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
              disabled={endIndex >= filteredEmployees.length}
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
    </>
  );
}
