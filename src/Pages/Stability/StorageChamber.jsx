import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
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
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function StorageChamber() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([
    {
      id: 1,
      chamberId: "stmp1",
      description: "describe",
      makeModel: "isubus111",
      serialNo: "54255455",
      location: "loc1",
      status: "APPROVED",
    },
    {
      id: 2,
      chamberId: "test21",
      description: "NA",
      makeModel: "testing",
      serialNo: "25365488",
      location: "Plant1",
      status: "INITIATED",
    },
    {
      id: 3,
      chamberId: "test",
      description: "NA",
      makeModel: "testing525",
      serialNo: "25255488",
      location: "Lab1",
      status: "REJECTED",
    },
    {
      id: 4,
      chamberId: "chmb4",
      description: "Temperature controlled",
      makeModel: "coolerX200",
      serialNo: "85236974",
      location: "Warehouse",
      status: "APPROVED",
    },
    {
      id: 5,
      chamberId: "chmb5",
      description: "Humidity controlled",
      makeModel: "humidX100",
      serialNo: "96325874",
      location: "Lab2",
      status: "REJECTED",
    },
    {
      id: 6,
      chamberId: "chmb6",
      description: "High pressure",
      makeModel: "pressurX500",
      serialNo: "15975326",
      location: "Plant2",
      status: "APPROVED",
    },
    {
      id: 7,
      chamberId: "chmb7",
      description: "Vacuum chamber",
      makeModel: "vacuumV700",
      serialNo: "75395184",
      location: "Plant3",
      status: "INITIATED",
    },
    {
      id: 8,
      chamberId: "chmb8",
      description: "Thermal chamber",
      makeModel: "thermoT300",
      serialNo: "45612378",
      location: "loc2",
      status: "APPROVED",
    },
    {
      id: 9,
      chamberId: "chmb9",
      description: "Soundproof",
      makeModel: "soundS100",
      serialNo: "14725836",
      location: "Lab3",
      status: "INITIATED",
    },
    {
      id: 10,
      chamberId: "chmb10",
      description: "Refrigerated",
      makeModel: "refrigR400",
      serialNo: "32165498",
      location: "Plant4",
      status: "REJECTED",
    },
    {
      id: 11,
      chamberId: "chmb11",
      description: "Cryogenic",
      makeModel: "cryoC600",
      serialNo: "78945612",
      location: "Warehouse",
      status: "APPROVED",
    },
    {
      id: 12,
      chamberId: "chmb12",
      description: "Dust-free",
      makeModel: "dustD200",
      serialNo: "12378945",
      location: "Lab4",
      status: "INITIATED",
    },
  ]);

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
      item.chamberId.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.makeModel.toLowerCase().includes(search.toLowerCase()) ||
      item.serialNo.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredData = filterData();

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setDeleteModal(false);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Storage Chamber</h4>
        </div>
        <div className="mt-5 d-flex gap-4">
          <div className="chart-widgets w-100">
            <div className="">
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
                      filterData().filter(
                        (item) => item.status === "INITIATED"
                      ).length
                    }
                  </div>
                </button>
                <button
                  className="col shadow p-3 m-3 rounded"
                  style={{
                    background: "linear-gradient(25deg, orange , #f7e05f )",

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
                    background: "linear-gradient(27deg, green , #0fd850  )",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("APPROVED")}
                >
                  <butto className="text-light font-bold fs-5">
                    APPROVED
                  </butto>
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
                    background: "linear-gradient(27deg ,red, #FF719A)",
                    textAlign: "left",
                  }}
                  onClick={() => setSelectedStatus("REJECTED")}
                >
                  <div className="text-light font-bold fs-5">REJECTED</div>
                  <div className="count fs-1 text-light fw-bolder">
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
        </div>
        <div>
          <CRow className="mb-3">
            <CCol sm={4}>
              <CFormInput
                style={{ fontSize: '0.9rem' }}
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus}
                style={{ fontSize: '0.9rem' }}
                options={[
                  { value: "All", label: "All" },
                  { value: "INITIATED", label: "Initiated" },
                  { value: "APPROVED", label: "Approved" },
                  { value: "REJECTED", label: "Rejected" },
                  { value: "REINITIATED", label: "Reinitiated" },
                  { value: "DROPPED", label: "Dropped" },
                ]}
              />
            </CCol>
            <CCol sm={2}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton
                  className=" text-white"
                  style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                  onClick={() => setAddModal(true)}>
                  Add Chamber
                </CButton>
              </div>
            </CCol>
          </CRow>
        </div>
        <div
          className=" rounded bg-white"
          style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
        >          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">

            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                  className="text-center"
                >
                  <input type="checkbox" />
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  S NO.
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Chamber ID
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Description
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Make/Model
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Serial.No.
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Location
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Status
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filterData()
                .slice(startIndex, endIndex)
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.chamberId.toLowerCase().includes(search.toLowerCase()) ||
                    item.description.toLowerCase().includes(search.toLowerCase()) ||
                    item.makeModel.toLowerCase().includes(search.toLowerCase()) ||
                    item.serialNo.toLowerCase().includes(search.toLowerCase()) ||
                    item.location.toLowerCase().includes(search.toLowerCase());

                })
                .map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell key={item.id}>
                      {item.chamberId}
                    </CTableDataCell>
                    <CTableDataCell>{item.description}</CTableDataCell>
                    <CTableDataCell>{item.makeModel}</CTableDataCell>
                    <CTableDataCell>{item.serialNo}</CTableDataCell>
                    <CTableDataCell>{item.location}</CTableDataCell>
                    <CTableDataCell>
                      <button
                        className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "INITIATED"
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
                          }`} style={{ fontSize: '0.6rem' }}
                      >
                        {item.status}
                      </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/stability/storageChamberDetails">
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
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
              &lt;&lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
            <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
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
  const [numRows, setNumRows] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setInputValue(value);
    }
  };

  const addRows = () => {
    setNumRows(inputValue);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        <CTableRow key={i}>
          <CTableHeaderCell className="mb-3" scope="row">{i + 1}</CTableHeaderCell>
          <CTableDataCell className="mb-3">Rack {i + 1}: <input type="text" /> </CTableDataCell>
        </CTableRow>
      );
    }
    return rows;
  };

  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Storage Chamber</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Chamber ID"
            placeholder="Chamber Id "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Enter Description "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make / Model"
            placeholder="Make / Model "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Serial No."
            placeholder="Serial Number "
          />
          <CFormInput type="text" label="Location" placeholder="Location " />
          <CFormTextarea type="text" label="Comments" placeholder="" />
          <CFormInput
            className="mb-3"
            type="select"
            label="Stability Storage Condition"
            placeholder="Select... "
          />

          <CContainer>
            <CFormLabel htmlFor="numRowsInput">Number of Racks</CFormLabel>
            <CFormInput
              className="mb-3"
              type="number"
              id="numRowsInput"
              value={inputValue}
              onChange={handleInputChange}
              min="0"
              placeholder="Number of Racks"
            />
            <div className="py-4 mb-3">
              <Button variant="info" onClick={addRows}>
                Add Rows
              </Button>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Sno.</CTableHeaderCell>
                    <CTableHeaderCell>
                      Number of Shelfs Per Rack
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className="mb-3">{renderRows()}</CTableBody>
              </CTable>
            </div>
          </CContainer>

          <CFormInput
            className="mb-3"
            type="text"
            label="Number Of Shelfs"
            placeholder="Number Of Shelfs "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Maximum No. Of Positions For Shelf"
            placeholder="0"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
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
          Delete Storage Chamber
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
        <p>Do you want to delete this storage chamber</p>
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

export default StorageChamber;
