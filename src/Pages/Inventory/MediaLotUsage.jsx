import {
  CButton,
  CCol,
  // CFormInput,
  CFormSelect,
  CModal,
  // CModalBody,
  CFormInput,
  CForm,
  CFormLabel,
  CFormCheck,
  CModalFooter,
  CModalHeader,
  // CDropdown,
  // CDropdownToggle,
  // CDropdownMenu,
  // CDropdownItem,
  // CDropdownDivider,
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

function MediaLotUsage() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      MediaName: "55",
      BatchNo: "55",
      UsageType: "Infra",
      ContainerNo: "55",
      CollectionType: "55",
      AddedOn: "55",

      status: "Active",
    },
    {
      id: 2,
      MediaName: "55",
      BatchNo: "55",
      UsageType: "Infra",
      ContainerNo: "55",
      CollectionType: "55",
      AddedOn: "55",
      status: "Active",
    },

    {
      id: 3,
      MediaName: "55",
      BatchNo: "55",
      UsageType: "Infra",
      ContainerNo: "55",
      CollectionType: "55",
      AddedOn: "55",
      status: "Active",
    },
    {
      id: 4,
      MediaName: "55",
      BatchNo: "55",
      UsageType: "Infra",
      ContainerNo: "55",
      CollectionType: "55",
      AddedOn: "55",
      status: "Inactive",
    },
    {
      id: 5,
      MediaName: "55",
      BatchNo: "55",
      UsageType: "Infra",
      ContainerNo: "55",
      CollectionType: "55",
      AddedOn: "55",
      status: "Inactive",
    },

    {
      id: 6,
      MediaName: "55",
      BatchNo: "55",
      UsageType: "Infra",
      ContainerNo: "55",
      CollectionType: "55",
      AddedOn: "55",
      status: "Inactive",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const badgeStyle = { background: "gray", color: "white", width: "110px" };

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
      item.MediaName.toLowerCase().includes(search.toLowerCase())
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
            <div className="title fw-bold fs-5 mb-5">Media Lot Usage</div>
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
              {/* <CCol sm={2}></CCol> */}
              <CCol sm={8}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Media Lot Usage
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
                  <CTableHeaderCell scope="col">Media Name	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Batch No.	</CTableHeaderCell>

                  <CTableHeaderCell scope="col">
                  Usage Type	
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                  Container No.	
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Collection Type		</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>

                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData().slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.MediaName.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.MediaName	}
                      </CTableDataCell>

                      
                      <CTableDataCell>{item.MediaLotNo	}</CTableDataCell>
                      <CTableDataCell>{item.BatchNo		}</CTableDataCell>
                      <CTableDataCell>{item.UsageType			}</CTableDataCell>
                      <CTableDataCell>{item.ContainerNo	}</CTableDataCell>
                      
                      <CTableDataCell>{item.CollectionType	}</CTableDataCell>
                      <CTableDataCell>{item.AddedOn	}</CTableDataCell>
                      

                      <CTableDataCell className="d-flex">
                        <div
                          className="py-2 px-3 small rounded fw-bold"
                          style={
                            item.status === "Active"
                              ? badgeStyle2
                              : item.status === "Inactive"
                              ? badgeStyle3
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
          <CModalTitle>Add Media Lot Usage</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and add new Media Lot Usage</p>
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Media Lot No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Media Name"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Usage Type"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Container No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Mfg. Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Container Expiry Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Lot Expiry Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Collection Type</CFormLabel>
              <div>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Manual"
                  value="accept"
                  className="me-3"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Auto Binding"
                  value="reject"
                />
              </div>
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Quantity Used"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Used On"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Used By"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Used For"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <h6>Comments if Any</h6>
              <textarea className="form-control" rows="3"></textarea>
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

export default MediaLotUsage;
