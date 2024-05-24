import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
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

function Inventory() {
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
      ProductName: "stmp1",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "APPROVED",
    },
    {
      id: 2,
      ProductName: "stmp1",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "REJECTED",
    },
    {
      id: 3,
      ProductName: "Alpha",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "REINITIATED",
    },
    {
      id: 4,
      ProductName: "Infra",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "INITIATED",
    },
    {
      id: 5,
      ProductName: "Infra",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "INITIATED",
    },
    {
      id: 6,
      ProductName: "Alpha",
      SequenceNo: "describe",
      AdditionalInformation: "isubus111",
      ContainerStartingNo: "54255455",
      SampleRefrenceNo: "loc1",
      status: "INITIATED",
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

  
  // const [count, setCount] = useState(0);

  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Material</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
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
                <div className="d-flex justify-content-end"></div>
              </CCol>
            </CRow>
          </div>
          <div
            className="bg-white mt-5"
            style={{ boxShadow: "0px 0px 8px black" }}
          >
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    SNo.
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Product Name
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Sequence No.
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Additional Information
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Container Starting No.
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Sample Refrence No.
                  </CTableHeaderCell>

                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Status
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ fontSize: "17px" }}>
                    Actions{" "}
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ProductName.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.ProductName}
                      </CTableDataCell>

                      <CTableDataCell>{item.SequenceNo}</CTableDataCell>
                      <CTableDataCell>
                        {item.AdditionalInformation}
                      </CTableDataCell>
                      <CTableDataCell>
                        {item.ContainerStartingNo}
                      </CTableDataCell>
                      <CTableDataCell>{item.SampleRefrenceNo}</CTableDataCell>
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
        <CModalBody>
          <CFormInput type="text" label="Lot Type" placeholder="Select " />
          <CFormInput
            type="text"
            label="Lot Type"
            placeholder="Select.... "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Sample Refrence No."
            placeholder="Sample Refrence No. "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Container Type"
            placeholder="Container Type "
            className="custom-placeholder"
          />
          <CFormInput
            type="number"
            label="Storage Condition"
            placeholder="Storage Condition"
            className="custom-placeholder"
          />
          <CFormTextarea
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity for Distribution"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity "
            className="custom-placeholder"
          />
          <CFormInput
            type="date"
            label="W.s Validate On"
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormInput
            type="date"
            label="Lot Valid Upto"
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Usage Type"
            placeholder="Single / Multiple"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Direction of Usage"
            placeholder="Direction of Usage"
            className="custom-placeholder"
          />
          <CFormInput
            type="number"
            label="No. Of Purities"
            placeholder="1"
            className="custom-placeholder"
          />

          <CFormInput
            type="number"
            label="UOM"
            placeholder="Select..."
            className="custom-placeholder"
          />

          <div className="container mt-5 ">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Purity
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Value-UOM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <select className="form-control">
                      <option>Acids</option>
                      <option>Bases</option>
                      <option>Salts</option>
                      <option>Solvents</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <CFormInput
            type="number"
            label="Additional Purities Information"
            placeholder="Additional Information"
            className="custom-placeholder"
          />
          <CFormInput
            type="number"
            label="Standard Type"
            placeholder="Standard Type"
          />
          <CFormInput type="number" label="Source" placeholder="Source" />

          <CFormInput type="number" label="Comments" placeholder="Comments" />

          <CFormInput
            type="number"
            label="Container Validaty Period"
            placeholder="Container Validaty Period"
          />
          <CFormInput
            type="number"
            label="Container Starting No."
            placeholder="Container No."
          />
          <CFormInput
            type="number"
            label="Minimum No. of Containers for Alert"
            placeholder="1"
          />
          <CFormInput
            type="number"
            label="No. of Containers Prepared"
            placeholder=""
          />
          <CFormInput
            type="number"
            label="Total Quantity in containers"
            placeholder="Total Quantity in containers"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Inventory;
