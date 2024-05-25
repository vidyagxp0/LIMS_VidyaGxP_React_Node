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
  const filterData = () => {
    if (selectedStatus === "All") {
      return data;
    }

    return data.filter((item) => item.status === selectedStatus.toUpperCase());
  };

  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Column Assignment</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="row" style={{ cursor: "pointer" }}>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background: "linear-gradient(45deg,#0d6efd, #9ec5fe )",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("INITIATED")}
                >
                  <div className="text-light fs-5">INITIATED</div>
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
                    background: "linear-gradient(45deg, #d63384, #9ec5fe)",
                    textAlign: "left",
                    boxShadow: "0px 10px 20px  black !important",
                  }}
                  onClick={() => setSelectedStatus("REINITIATED")}
                >
                  <div className="text-light fs-5">REINITIATED</div>

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
                    background: "linear-gradient(45deg, #ffc107, #9ec5fe)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("APPROVED")}
                >
                  <butto className="text-light fs-5">APPROVED</butto>
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
                    background: "linear-gradient(45deg, #dc3545, #9ec5fe)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("REJECTED")}
                >
                  <div className="text-light fs-5">REJECTED</div>
                  <div
                    className="count fs-1 text-light fw-bolder"
                    style={{ color: "white" }}
                  >
                    {
                      filterData().filter((item) => item.status === "REJECTED")
                        .length
                    }
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput
                style={{ border: "2px solid gray" }}
                type="email"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>

            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
                style={{ border: "2px solid gray" }}
              >
                <option value="All">All</option>
                <option value="Initiated">Initiated</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Reinitiated">Reinitiated</option>
                <option value="Dropped">Dropped</option>
              </CFormSelect>
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>
                  Add Assignment
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div className="bg-white mt-5">
          <CTable align="middle" responsive className=" ">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="text-center">
                  <input type="checkbox" />
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                <CTableHeaderCell scope="col">Column Name </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Column Application
                </CTableHeaderCell>

                <CTableHeaderCell scope="col">Brand Name </CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Packing Material{" "}
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Recieved On </CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filterData()
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
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell key={item.id}>
                      {item.ColumnName	}
                    </CTableDataCell>

                    <CTableDataCell>{item.ColumnApplication	}</CTableDataCell>
                    <CTableDataCell>{item.BrandName		}</CTableDataCell>
                    <CTableDataCell>{item.PackingMaterial		}</CTableDataCell>
                    <CTableDataCell>{item.RecievedOn			}</CTableDataCell>
                    

                    <CTableDataCell className="d-flex">
                      <div
                        className="py-2 px-3 small rounded fw-bold"
                        style={
                          item.status === "INITIATED"
                            ? badgeStyle2
                            : item.status === "APPROVED"
                            ? badgeStyle3
                            : item.status === "REJECTED"
                            ? badgeStyle4
                            : item.status === "REINITIATED"
                            ? badgeStyle5
                            : item.status === "DROPPED"
                            ? badgeStyle6
                            : item.status === "ALL"
                            ? badgeStyle
                            : badgeStyle
                        }
                      >
                        {item.status}
                      </div>
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
                        <Link to="#">
                          <FontAwesomeIcon icon={faTrashCan} />
                        </Link>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
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

export default Assignment;
