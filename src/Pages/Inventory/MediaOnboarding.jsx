import {
  CButton,
  CCol,
  // CFormGroup,
  CForm,
  CFormInput,
  CFormCheck,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
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

function MediaOnboarding() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",

      status: "Active",
    },
    {
      id: 2,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Active",
    },

    {
      id: 3,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Active",
    },
    {
      id: 4,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Inactive",
    },
    {
      id: 5,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Inactive",
    },

    {
      id: 6,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
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
      <div id="approval-page" className="h-100 mx-5 ">
        <div className="container-fluid my-5 ">
          <div className="main-head">
            <div className="title fw-bold fs-5 py-4">Media Onboarding</div>
          </div>

          <div>
            <CRow className="mb-3">
              

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
              {/* <CCol sm={2}></CCol> */}
              <CCol sm={8}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Media onboarding
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
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Media Name</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Media Prefix</CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                    Storage Condition{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">UOM </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                    Mode Of Preparation{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Added On</CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</CTableHeaderCell>
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
                      <CTableHeaderCell  className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.MediaName}
                      </CTableDataCell>

                      <CTableDataCell>{item.MediaPrefix}</CTableDataCell>
                      <CTableDataCell>{item.StorageCondition}</CTableDataCell>
                      <CTableDataCell>{item.UOM}</CTableDataCell>
                      <CTableDataCell>{item.ModeOfPreparation}</CTableDataCell>
                      <CTableDataCell>{item.AddedOn}</CTableDataCell>

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
        <CModalHeader>
          <CModalTitle>Add Media Onboarding</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new mediaOnboarding</p>
          {/* <h3>Registration Initiation</h3> */}
          <CFormSelect
            type="text"
            label="Media Name
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Media Prefix
            "
            placeholder=""
          />

          <CFormInput type="text" label="Storage Condition" placeholder="" />

          <CFormInput type="text" label="UOM" placeholder="" />
          <CForm>
            <CFormLabel>Mode of Prepration</CFormLabel>
            <div>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="To be Prepared"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Ready Mode"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Refrence Document if Any"
            placeholder="choose file"
          />
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

export default MediaOnboarding;
