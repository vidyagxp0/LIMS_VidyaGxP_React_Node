import React, { useState } from "react";
// import "./StorageCondition.css";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Material() {
  const [storageName, setStorageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddStorage = () => {
    if (storageName.trim() === "") {
      setErrorMessage("Storage condition is Required");
    } else {
      toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.")
    }
  };
  const notify = () => toast("Wow so easy!");


  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },

  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return employees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td id='edatabtn' className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/stock-management/stock-material-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#updateMaterial" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faPenToSquare} /></div>
            <div className="cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#removeMaterial" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faTrashCan} /></div>
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
      <div id="div1">
        <h5>Inventory Labels</h5>
      </div>
      <div id="div2" className="d-flex justify-content-between">
        <div className="d-flex gap-4 w-75">
          <div id="searchmain">
            <div id="searchicon">
              <CiSearch />
            </div>
            <div className="">
              <input type="text" className="w-75" id="" placeholder="Search..." />
            </div>
          </div>
          <div className="dropdown w-25">
            <div>
              <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <select id='selectOption'>
                  <option>All</option>
                  <option>Initiated</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                  <option>Reinitiated</option>
                  <option>Droped</option>
                </select>
              </button>
            </div>
          </div>
        </div>


        <div className="">
          <button
            id="Addbtn"
            className="btn btn-primary m-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <CgAddR /> <span style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Add Material</span>
          </button>
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Material
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

          <label id="line3" htmlFor="">Material Name</label>
          <input id="line4" required type="text" placeholder="" />

          <label id="line3" htmlFor="">Description</label>
          <input id="line4" required type="text" placeholder="" />

          {errorMessage && (
            <div id="error" style={{ color: "red", fontSize: "10px", marginLeft: "30px" }}>
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
            <button>Add Material</button>
          </div>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>

      <br />
      <div className='table-responsive p-4 container1'>
        <table className='table shadow ' style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sr.no.</th>
              <th>Unique Code</th>
              <th>Material Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="removeMaterial" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header border-bottom pb-2 border-2 border-dark mx-3 px-0">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Delete Stock</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p className="mb-3">Do you want to delete this Material <code>INL0000001</code>?</p>
            <div className="mb-3">
              <label htmlFor="userID" class="form-label">User Id</label>
              <input type="text" class="form-control" id="userID" defaultValue={'User-062023-0000001'} placeholder="User Id" />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" class="form-label">Password</label>
              <input type="password" class="form-control" id="Password" defaultValue={'Password'} placeholder="Password" />
            </div>
            <div className="d-flex gap-4 my-5">
              <button className="btn btn-secondary w-100" data-bs-dismiss="offcanvas" aria-label="Close">Back</button>
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="updateMaterial"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div id="line1">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Update Material
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

        <label id="line3" htmlFor="">Material Name</label>
        <input id="line4" required type="text" placeholder="" />

        <label id="line3" htmlFor="">Description</label>
        <input id="line4" required type="text" placeholder="" />

        {errorMessage && (
          <div id="error" style={{ color: "red", fontSize: "10px", marginLeft: "30px" }}>
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
          <button>Add Material</button>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>

      <div className="pagination" style={{ margin: '0 35px' }}>
        <div className="pagination">
          <div className='mr-5'>
            <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className='btn rounded-circle'> {currentPage} </button>
          </div>
          <div>
            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>&gt;&gt;</button>
          </div>
        </div>
        <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
      </div>


    </>
  );
}
