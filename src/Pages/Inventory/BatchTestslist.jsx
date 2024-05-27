import {
  CButton,
  CCol,
  CModal,
  CFormInput,
  CForm,
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
  CFormSelect,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function BatchTestslist() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Active",
    },
    {
      id: 2,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Active",
    },
    {
      id: 3,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Active",
    },
    {
      id: 4,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Inactive",
    },
    {
      id: 5,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Inactive",
    },
    {
      id: 6,
      BatchSampleID: "55",
      RegisteredOn: "55",
      status: "Inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const badgeStyle2 = { background: "green", color: "white", width: "110px" };
  const badgeStyle3 = { background: "red", color: "white", width: "110px" };

  const [search, setSearch] = useState("");

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  const filterData = () => {
    const filteredData =
      selectedStatus === "All"
        ? data
        : data.filter((item) => item.status === selectedStatus);
    return filteredData.filter((item) =>
      item.BatchSampleID.toLowerCase().includes(search.toLowerCase())
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
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5 mb-5">Batch Tests list</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100"></div>
          </div>
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
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </CCol>
              <CCol sm={6}>
                <CFormInput
                  type="text"
                  placeholder="Search by Batch Sample ID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Batch Test list
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
                  <CTableHeaderCell scope="col">
                    Batch Sample ID
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Registered On</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData
                  .slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ConfigurationType.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell>{item.BatchSampleID}</CTableDataCell>
                      <CTableDataCell>{item.RegisteredOn}</CTableDataCell>
                      <CTableDataCell className="d-flex">
                        <div
                          className="py-2 px-3 small rounded fw-bold"
                          style={
                            item.status === "Active" ? badgeStyle2 : badgeStyle3
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
          <div className="pagination mt-5">
            <button
              className="btn mr-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>
            <div className="current-page-number mr-2 bg-dark-subtle page-item">
              <button className="btn rounded-circle">{currentPage}</button>
            </div>
            <button
              className="btn mr-2"
              onClick={nextPage}
              disabled={endIndex >= filteredData.length}
            >
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
        <CModalHeader className="p-3">
          <CModalTitle>Add Batch Tests List Registration</CModalTitle>
        </CModalHeader>

        <p>Add information and register new Batch Tests List</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Batch Sample ID
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Test Name
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Test Type




               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Submission Type
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div>
              <table>
                <thead
                  style={{ background: "lightblue", border: "2px solid black" }}
                >
                  <tr
                    style={{
                      background: "lightblue",
                      border: "2px solid black",
                    }}
                  >
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Sno.
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      EM A RN.
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Location
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Location Description
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Alert Limits
                    </th>
                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Action Limits
                    </th>

                    <th
                      style={{
                        background: "lightblue",
                        border: "2px solid black",
                      }}
                    >
                      Evaluation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CForm>
        </div>

        <CModalFooter className="p-3">
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

export default BatchTestslist;
