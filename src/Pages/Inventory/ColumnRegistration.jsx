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

function ColumnRegistration() {
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
      ColumnName				: "describe",
      ColumnNumber				: "describe",
      BrandName						: "stmp1",
      PackingMaterial						: "isubus111",
      InnerDiameter						: "Admin",
      status: "INITIATED",
      

    },
    {
      id: 2,
      ColumnName				: "describe",
      ColumnNumber				: "describe",
      BrandName						: "stmp1",
      PackingMaterial						: "isubus111",
      InnerDiameter						: "Admin",
      status: "INITIATED",
    },

    {
      id: 3,
      ColumnName				: "describe",
      ColumnNumber				: "describe",
      BrandName						: "stmp1",
      PackingMaterial						: "isubus111",
      InnerDiameter						: "Admin",
      status: "REJECTED",
    },
    {
      id: 4,
      ColumnName				: "describe",
      ColumnNumber				: "describe",
      BrandName						: "stmp1",
      PackingMaterial						: "isubus111",
      InnerDiameter						: "Admin",
      status: "APPROVED",
    },
    {
      id: 5,
      ColumnName				: "describe",
      ColumnNumber				: "describe",
      BrandName						: "stmp1",
      PackingMaterial						: "isubus111",
      InnerDiameter						: "Admin",
      status: "APPROVED",
    },

    {
      id: 6,
      ColumnName				: "describe",
      ColumnNumber				: "describe",
      BrandName						: "stmp1",
      PackingMaterial						: "isubus111",
      InnerDiameter						: "Admin",
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
            <div className="title fw-bold fs-5"> Column Registration</div>
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
                        filterData().filter(
                          (item) => item.status === "INITIATED"
                        ).length
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
                        filterData().filter(
                          (item) => item.status === "APPROVED"
                        ).length
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
                        filterData().filter(
                          (item) => item.status === "REJECTED"
                        ).length
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
                    Add Registration
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
                  <CTableHeaderCell scope="col">Column Name	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                  Column Number	
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Brand Name		</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Packing Material		</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Inner Diameter	</CTableHeaderCell>
                  
                  
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ColumnName				.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.ColumnName			}
                      </CTableDataCell>

                      <CTableDataCell>{item.ColumnNumber				}</CTableDataCell>
                      <CTableDataCell>{item.BrandName				}</CTableDataCell>
                      
                      <CTableDataCell>{item.PackingMaterial				}</CTableDataCell>
                      <CTableDataCell>{item.InnerDiameter		}</CTableDataCell>
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
          <CModalTitle>Add Registration</CModalTitle>
        </CModalHeader>
       <CModalBody>
        <p style={{fontWeight:"bolder"}}>Add information and Add registration.</p>
          <CFormInput type="text" label="Column Application" placeholder="Column Application " />
          <CFormInput
            type="text"
            label="Column Name"
            placeholder=" Column Name "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Column Number"
            placeholder="Column Number"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Brand Name / Manufacturer Name"
            placeholder="Brand Name / Manufacturer Name"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Mfg. Serial No. "
            placeholder="Select"
            className="custom-placeholder"
          />

          <CFormInput
            type="number"
            label="Film Thikness / Particle Size"
            placeholder="Film Thikness / Particle Size"
            className="custom-placeholder"
          />
          <CFormInput
            type="number"
            label="UOM"
            placeholder="UOM"
          />
          <CFormInput
            type="number"
            label="Packing Material"
            placeholder="Packing Material"
          />
          <CFormInput
            type="number"
            label="Length"
            placeholder="select"
          />
          <CFormInput
            type="number"
            label=" UOM"
            placeholder="UOM"
          />
          <CFormInput
            type="number"
            label="Inner Diameter"
            placeholder="select"
          />
          

          <CFormInput
            type="number"
            label="Outer Diameter"
            placeholder="Outer Diameter"
          />

          <CFormInput
            type="date"
            label="Recieved On"
            placeholder=""
          />

          <CFormInput
            type="number"
            label="Certificate Recieved"
            placeholder="Certificate Recieved"
          />

          <CFormInput
            type="number"
            label="Certificate"
            placeholder="Browse"
          />

         
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <label>Remarks if</label>
            <textarea name="" id=""></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Chemical
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ColumnRegistration;
