import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
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

function WorkingStandardIssue() {
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
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "ACTIVE",
    },
    {
      id: 2,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "ACTIVE",
    },
    {
      id: 3,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "UNACTIVE",
    },
    {
      id: 4,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "UNACTIVE",
    },
    {
      id: 5,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "ACTIVE",
    },
    {
      id: 6,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "UNACTIVE",
    },
  ]);

  const filterData = () => {
    if (selectedStatus === "All") {
      return data;
    }
    return data.filter((item) => item.status === selectedStatus.toUpperCase());
  };

  const filteredData = filterData().filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.WorkingContainerno.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Media Lot Containers Issue</div>
          </div>
          <div className="d-flex gap-4"></div>
          <div>
            <CRow className="mb-3">
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{ border: "2px solid gray" }}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Unactive">Unactive</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}></CCol>
              {/* <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CFormInput
                    type="text"
                    placeholder="Search by Container No."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </CCol> */}
              <CCol sm={7}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Media Lot Container Issue
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div
            className="bg-white mt-5"
            style={{ boxShadow: "0px 0px 4px black" }}
          >
            <CTable align="middle" responsive className=" ">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Working Container no.
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Container Qty</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Container Validity Period Day(s)
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Container Valid Upto
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Lot Valid Upto</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{item.id}</CTableDataCell>
                    <CTableDataCell>{item.WorkingContainerno}</CTableDataCell>
                    <CTableDataCell>{item.ContainerQty}</CTableDataCell>
                    <CTableDataCell>{item.ContainerValidityPeriodDays}</CTableDataCell>
                    <CTableDataCell>{item.ContainerValidUpto}</CTableDataCell>
                    <CTableDataCell>{item.LotValidUpto}</CTableDataCell>
                    <CTableDataCell>{item.AddedOn}</CTableDataCell>
                    <CTableDataCell className="d-flex">
                      <div
                        className="py-2 px-3 small rounded fw-bold"
                        style={
                          item.status === "ACTIVE"
                            ? badgeStyle3
                            : item.status === "UNACTIVE"
                            ? badgeStyle4
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
        size="xl"
      >
        <CModalBody>
          <table
            className="table table-bordered"
            style={{ width: "100%", height: "700px" }}
          >
            <thead className="thead-light">
              <tr>
                <th style={{ background: "#0F93C3", color: "white" }}>SNo.</th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Working Container No
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Qty
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Validity Period Day(s)
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Valid Upto
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Lot Valid Upto
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>Select</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>WSI-1020223-000000061</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>WSI-1020223-000000062</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>WSI-1020223-000000063</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>WSI-1020223-000000064</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>WSI-1020223-000000065</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>WSI-1020223-000000066</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>WSI-1020223-000000067</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>WSI-1020223-000000068</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>WSI-1020223-000000069</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>WSI-1020223-000000610</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default WorkingStandardIssue;
