import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { FaArrowRight } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StockInventory() {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
  ];

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'INITIATED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'REJECTED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'DROPPED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredEmployees = employees.filter(employee => {
    return (
      (filterStatus === "" || employee.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (employee.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ProdName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.EffectFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ReviewDate.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const deleteEmployee = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.ProdName}</td>
        <td ><div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED" ? badgeStyle2 :
              employee.status === "APPROVED" ? badgeStyle3 :
              employee.status === "REJECTED" ? badgeStyle4 :
              employee.status === "REINITIATED" ? badgeStyle5 :
              employee.status === "DROPPED" ? badgeStyle6 :
              badgeStyle
            }
          >
            {employee.status}
          </div></td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/stock-management/stock-inventory-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#updateInventory" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faPenToSquare} /></div>
            <div className="cursor-pointer" onClick={() => deleteEmployee(startIndex + index)}><FontAwesomeIcon icon={faTrashCan} /></div>
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
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <>
      <div id="div1">
        <h5>Inventory/Inventory Registration</h5>
      </div>
      <div id="div2" className="d-flex justify-content-between">
        <div className="d-flex gap-4 w-75">
          <div id="searchmain">
            <div id="searchicon">
              <CiSearch />
            </div>
            <div className="">
              <input 
                type="text" 
                className="w-75" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="dropdown w-25">
            <div>
              <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <select
                  id='selectOption'
                  onChange={handleFilterChange}
                  style={{ outline: 'none' }}
                >
                  <option value="">All</option>
                  <option value="initiated">Initiated</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="reinitiated">Reinitiated</option>
                  <option value="dropped">Dropped</option>
                </select>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <button
            className="btn btn-primary m-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#addInventory"
            aria-controls="offcanvasRight"
          >
            <CgAddR /> <span>Add Inventory Registration</span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end overflow-y-scroll"
          tabIndex="-1"
          id="addInventory"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Inventory
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
          <label className="line3" htmlFor="">Material Name</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            className="my-0"
            options={top100Films}
            sx={{ width: 370, margin: 2 }}
            renderInput={(params) => <TextField {...params} label="" />}
          />

          <label className="line3" htmlFor="">Received Date</label>
          <input className="line4" style={{ padding: '14px' }} required type="date" placeholder="" />

          <label className="line3" htmlFor="">Supplier Name</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            className="my-0"
            options={top100Films}
            sx={{ width: 370, margin: 2 }}
            renderInput={(params) => <TextField {...params} label="" />}
          />
          <label className="line3" htmlFor="">Truck No.</label>
          <input className="line4" type="number" placeholder="Truck No." />
          <label className="line3" htmlFor="">Ch No.</label>
          <input className="line4" type="number" placeholder="Ch No." />
          <label className="line3" htmlFor="">Invoice Number</label>
          <input className="line4" type="number" placeholder="Invoice Number" />
          <label className="line3" htmlFor="">Quantity In MT</label>
          <input className="line4" type="text" placeholder="Quantity In MT" />
          <label className="line3" htmlFor="">Remarks</label>
          <input className="line4" type="text" placeholder="Remarks" />

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
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="updateInventory"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div id="line1">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Update Inventory
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
        <label className="line3" htmlFor="">Material Name</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          className="my-0"
          options={top100Films}
          sx={{ width: 370, margin: 2 }}
          renderInput={(params) => <TextField {...params} label="" />}
        />

        <label className="line3" htmlFor="">Received Date</label>
        <input className="line4" style={{ padding: '14px' }} required type="date" placeholder="" />

        <label className="line3" htmlFor="">Supplier Name</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          className="my-0"
          options={top100Films}
          sx={{ width: 370, margin: 2 }}
          renderInput={(params) => <TextField {...params} label="" />}
        />
        <label className="line3" htmlFor="">Truck No.</label>
        <input className="line4" type="number" placeholder="Truck No." />
        <label className="line3" htmlFor="">Ch No.</label>
        <input className="line4" type="number" placeholder="Ch No." />
        <label className="line3" htmlFor="">Invoice Number</label>
        <input className="line4" type="number" placeholder="Invoice Number" />
        <label className="line3" htmlFor="">Quantity In MT</label>
        <input className="line4" type="text" placeholder="Quantity In MT" />
        <label className="line3" htmlFor="">Remarks</label>
        <input className="line4" type="text" placeholder="Remarks" />

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
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="removeInventory" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header border-bottom pb-2 border-2 border-dark mx-3 px-0">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Delete Inventory</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p className="mb-3">Do you want to delete this Inventory<code>IR0000002</code>?</p>
          <div className="mb-3">
            <label htmlFor="userID" className="form-label">User Id</label>
            <input type="text" className="form-control" id="userID" defaultValue={'User-062023-0000001'} placeholder="User Id" />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" defaultValue={'Password'} placeholder="Password" />
          </div>
          <div className="d-flex gap-4 my-5">
            <button className="btn btn-secondary w-100" data-bs-dismiss="offcanvas" aria-label="Close">Back</button>
            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </div>
      </div>

      <br />
      <div className='mx-3 table-responsive p-4 container1'>
        <table className='table shadow' style={{ fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sr.no.</th>
              <th>Material Name</th>
              <th>Supplier Name</th>
              <th>Truck No.</th>
              <th>CH No.</th>
              <th>Invoice No.</th>
              <th>Quantity In Mt</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      <div className="pagination" style={{ margin: '0 40px' }}>
        <div className="pagination ">
          <div className='mr-5'>
            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className='btn rounded-circle'> {currentPage} </button>
          </div>
          <div>
            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
          </div>
        </div>
        <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
      </div>
    </>
  );
}
