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
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Assignment() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      ColumnName: "describe",
      ColumnApplication: "describe",
      BrandName: "describe",
      PackingMaterial: "describe",
      RecievedOn: "25-04-2024",

      status: "INITIATED",
    },
    {
      id: 2,
      ColumnName: "describe",
      ColumnApplication: "describe",
      BrandName: "describe",
      PackingMaterial: "describe",
      RecievedOn: "25-04-2024",
      status: "INITIATED",
    },

    {
      id: 3,
      ColumnName: "describe",
      ColumnApplication: "describe",
      BrandName: "describe",
      PackingMaterial: "describe",
      RecievedOn: "25-04-2024",
      status: "REJECTED",
    },
    {
      id: 4,
      ColumnName: "describe",
      ColumnApplication: "describe",
      BrandName: "describe",
      PackingMaterial: "describe",
      RecievedOn: "25-04-2024",
      status: "APPROVED",
    },
    {
      id: 5,
      ColumnName: "describe",
      ColumnApplication: "describe",
      BrandName: "describe",
      PackingMaterial: "describe",
      RecievedOn: "25-04-2024",
      status: "APPROVED",
    },

    {
      id: 6,
      ColumnName: "describe",
      ColumnApplication: "describe",
      BrandName: "describe",
      PackingMaterial: "describe",
      RecievedOn: "25-04-2024",
      status: "APPROVED",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const [search, setSearch] = useState("");

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
            (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
          );
    return filteredData.filter((item) =>
      item.ColumnName.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredData = filterData();
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(filteredData.length / pageSize))
    );
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div id="approval-page" className="m-5 mt-3">
     
          <div className="main-head">
          <h4 className="fw-bold ">Column Assignment</h4>
          </div>
          <div className="d-flex gap-4 mt-3">
            <div className="chart-widgets w-100">
            <div className="row" style={{ cursor: "pointer" }}>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",

                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("DROPPED")}
                >
                  <div className="text-light font-bold fs-5">DROPPED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "DROPPED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, #13517a 6% , #2A5298 50%)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("INITIATED")}
                >
                  <div className="text-light font-bold fs-5">INITIATED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "INITIATED")
                        .length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(25deg, orange , #f7e05f )",

                    textAlign: "left",
                    boxShadow: "0px 10px 20px  black !important",
                  }}
                  onClick={() => setSelectedStatus("REINITIATED")}
                >
                  <div className="text-light font-bold fs-5">REINITIATED</div>

                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter(
                        (item) => item.status === "REINITIATED"
                      ).length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(27deg, green , #0fd850  )",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("APPROVED")}
                >
                  <butto className="text-light font-bold fs-5">APPROVED</butto>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white", textAlign: "left" }}
                  >
                    {
                      filterData().filter((item) => item.status === "APPROVED")
                        .length
                    }
                  </div>
                </button>

                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background:
                      "linear-gradient(27deg ,red, #FF719A)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("REJECTED")}
                >
                  <div className="text-light font-bold fs-5">REJECTED</div>
                  <div className="count fs-1 text-light fw-bolder">
                    {
                      filterData().filter((item) => item.status === "REJECTED")
                        .length
                    }
                  </div>
                </button>
              </div>
            </div>
          </div>
      
        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput
                style={{fontSize:'0.9rem'}}
                type="email"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>

            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
                style={{fontSize:'0.9rem'}}
              >
                <option value="All">All</option>
                <option value="Initiated">Initiated</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Reinitiated">Reinitiated</option>
                <option value="Dropped">Dropped</option>
              </CFormSelect>
            </CCol>
            
            <CCol sm={5}>
              <div className="d-flex justify-content-end">
                <CButton  style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>
                  Add Assignment
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
          <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
          <CTable align="middle" responsive className="mb-0    table-responsive">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col" className="text-center">
                  <input type="checkbox" />
                </CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">S NO.</CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Column Name </CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                  Column Application
                </CTableHeaderCell>

                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Brand Name </CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                  Packing Material{" "}
                </CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Recieved On </CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filterData().slice(startIndex, endIndex)
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.ColumnName	.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell key={item.id}>
                      {item.ColumnName	}
                    </CTableDataCell>

                    <CTableDataCell>{item.ColumnApplication	}</CTableDataCell>
                    <CTableDataCell>{item.BrandName		}</CTableDataCell>
                    <CTableDataCell>{item.PackingMaterial		}</CTableDataCell>
                    <CTableDataCell>{item.RecievedOn			}</CTableDataCell>
                    

                    <CTableDataCell>
                      <button  
                        className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          item.status === "INITIATED"
                            ? "blue-700"
                            : item.status === "APPROVED"
                            ? "green-700"
                            : item.status === "REJECTED"
                            ? "red-700"
                            : item.status === "REINITIATED"
                            ? "yellow-500"
                            : item.status === "DROPPED"
                            ? "purple-700"
                            : "white"
                        }`} style={{fontSize:'0.6rem'}}
                      >
                        {item.status}
                      </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/approval/1321">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <div
                          className="cursor-pointer"
                          onClick={() => setAddModal(true)}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => setDeleteModal(item.id)}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </div>

      <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
       {deleteModal && (
        <DeleteModal
          visible={deleteModal !== false}
          closeModal={() => setDeleteModal(false)}
          handleDelete={() => handleDelete(deleteModal)}
        />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Assignmment</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>Add information.</p>
          <CFormInput type="text" label="Column No." placeholder="Column No." />
          <CFormInput
            type="text"
            label=" Column Name"
            placeholder=" Column Name "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Column Application"
            placeholder=" Column Application "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Brand Name / Manufacturer Name"
            placeholder=" Brand Name / Manufacturer Name "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Film Thikness / Particle Size"
            placeholder=" Film Thikness / Particle Size "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Mfg. Serial No."
            placeholder="Mfg. Serial No."
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Length"
            placeholder="Length"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Packing Material"
            placeholder="Packing Material"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Inner Diameter"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" UMO"
            placeholder="UMO"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Outer Diameter"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="date"
            label=" Recieved On"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Specification ID"
            placeholder=""
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Product / Material"
            placeholder=""
            className="custom-placeholder"
          />

          <h3>Test(s) Selection for Analysis</h3>
          <table className="table table-bordered">
            <thead>
              <th>S No.</th>
              <th>Test Name</th>
              <th>Selection</th>
            </thead>
            <tr>
              <td>1</td>
              <td>Viscosity @40C</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Total Acid Number (TAN)</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Water Content PPM</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>TAN Total acid number</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Viscosity @40C</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Water Content PPM</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Average Weight</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Description</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Assay test for SPP</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Specific Gravity PA</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Color Test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Specific Gravity</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Melting Range</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Color</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Ph test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Hydroxyl Value</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Acid Value</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Viscosity (mPa.s)</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Color Test</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </table>

          <h3>Column Performance Test</h3>
          <CFormInput
            type="text"
            label=" Number of Performance Test"
            placeholder="No. of Variables"
            className="custom-placeholder"
          />
          <CButton color="info" onClick={_props.closeModal}>
            Add
          </CButton>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          ></div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Assignment
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
const DeleteModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Delete Batch Sample Allotment
        </CModalTitle>
      </CModalHeader>
      <div
        className="modal-body"
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          lineHeight: "1.5",
          marginBottom: "1rem",
          columnGap: "0px",
          border: "0px !important",
        }}
      >
        <p>Are you sure you want to delete this Batch Sample Allotment?</p>
      </div>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={_props.closeModal}
          style={{
            marginRight: "0.5rem",
            fontWeight: "500",
          }}
        >
          Cancel
        </CButton>
        <CButton
          color="danger"
          onClick={_props.handleDelete}
          style={{
            fontWeight: "500",
            color: "white",
          }}
        >
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};


export default Assignment;
