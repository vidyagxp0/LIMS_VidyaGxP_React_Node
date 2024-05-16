import React, { useState } from "react";
import "./StorageCondition.css";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function StorageCondition() {
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
  return (
    <>
      <div id="div1">
        <h5>Storage Condition</h5>
      </div>

      <div id="div2">
        <div id="searchmain"> 
          <div id="searchicon">
            <CiSearch />
          </div>

          <div className="">
            <input type="text" className="" id="" placeholder="search" />
          </div>
        </div>

        <div id="div2ka2">
          <select
            className="form-control form-select"
            id="fv-topics"
            name="status"
            data-placeholder="Select a option"
            required=""
          >
            <option label=" Select Status" value=""></option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">In Active</option>
          </select>
        </div>

        <button
          id="Addbtn"
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <CgAddR /> <span>Add Storage Condition</span>
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
                New Storage Condition
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
          <p id="line2">Add a new storage.</p>
          <label id="line3" htmlFor="">
            Name
          </label>
          <input
            id="line4"
            required
            type="text"
            placeholder="Storage Name"
            value={storageName}
            onChange={(e) => setStorageName(e.target.value)}
          />
          {errorMessage && (
            <div id="error" style={{ color: "red" ,fontSize:"10px",marginLeft:"30px"}}>
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
            <button onClick={handleAddStorage}>Add</button>
          </div>
          <div>
            <ToastContainer/>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div>
        <center>
          <h4>No Storages Found</h4>
        </center>
      </div>
    </>
  );
}
