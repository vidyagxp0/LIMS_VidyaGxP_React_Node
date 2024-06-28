import React from "react"
import {
  CButton,
  CCol,
  // CFormInput,
  CModalTitle,
  CFormSelect,
  CModal,
  CModalHeader,
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
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
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
      status: "Inactive",
    },
    {
      id: 4,
      WorkingContainerno: "stmp1",
      ContainerQty: "describe",
      ContainerValidityPeriodDays: "isubus111",
      ContainerValidUpto: "54255455",
      LotValidUpto: "loc1",
      AddedOn: "loc1",
      status: "Inactive",
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
      status: "Inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const badgeStyle = { background: "gray", color: "white", width: "110px" };

  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };

  const [search, setSearch] = useState("");

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter(
            (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
          );
    return filteredData.filter((item) =>
      item.WorkingContainerno.toLowerCase().includes(search.toLowerCase())
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
          <h4 className="fw-bold">Media Lot Containers Issue</h4>
          </div>
          <div>
            <CRow className="mb-3 mt-5">
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{fontSize:'0.9rem'}}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}></CCol>

              <CCol sm={7}>
                <div className="d-flex justify-content-end">
                  <CButton style={{ fontSize: "0.9rem" }} color="primary" onClick={() => setAddModal(true)}>
                    Media Lot Container Issue
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
            <CTable
              align="middle"
              responsive
              className="mb-0    table-responsive"
            >
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                    className="text-center"
                  >
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    S NO.
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Working Container no.
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Container Qty
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Container Validity Period Day(s)
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Container Valid Upto
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Lot Valid Upto
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Added On
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Status
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    style={{ background: "#5D76A9", color: "white"}}
                    scope="col"
                  >
                    Action
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData.slice(startIndex, endIndex).map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{item.WorkingContainerno}</CTableDataCell>
                    <CTableDataCell>{item.ContainerQty}</CTableDataCell>
                    <CTableDataCell>
                      {item.ContainerValidityPeriodDays}
                    </CTableDataCell>
                    <CTableDataCell>{item.ContainerValidUpto}</CTableDataCell>
                    <CTableDataCell>{item.LotValidUpto}</CTableDataCell>
                    <CTableDataCell>{item.AddedOn}</CTableDataCell>
                    <CTableDataCell className="d-flex">
                    <button
              style={{
                background:
                item.status === "ACTIVE" ? "#15803d" : "#b91c1c",
                color: "white",
                width: "4rem",
                fontSize: "0.6rem",
                padding: "2px 7px",
                borderRadius: "7px",
              }}
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
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Select
                </th>
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

export default WorkingStandardIssue;
