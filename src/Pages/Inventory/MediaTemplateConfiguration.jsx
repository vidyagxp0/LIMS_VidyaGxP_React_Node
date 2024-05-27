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

function MediaTemplateConfiguration() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      MediaName: "55",
      MediaLotAcceptance: "Infra",
      ModiaContainerType: "55",
      MediaPreparation: "55",
      ValidityPeriod: "55",
      MediaUsage: "55",
      Comments: "55",
      AddedOn: "55",

      status: "Active",
    },
    {
      id: 2,
      MediaName: "55",
      MediaLotAcceptance: "Infra",
      ModiaContainerType: "55",
      MediaPreparation: "55",
      ValidityPeriod: "55",
      MediaUsage: "55",
      Comments: "55",
      AddedOn: "55",
      status: "Active",
    },

    {
      id: 3,
      MediaName: "55",
      MediaLotAcceptance: "Infra",
      ModiaContainerType: "55",
      MediaPreparation: "55",
      ValidityPeriod: "55",
      MediaUsage: "55",
      Comments: "55",
      AddedOn: "55",
      status: "Active",
    },
    {
      id: 4,
      MediaName: "55",
      MediaLotAcceptance: "Infra",
      ModiaContainerType: "55",
      MediaPreparation: "55",
      ValidityPeriod: "55",
      MediaUsage: "55",
      Comments: "55",
      AddedOn: "55",
      status: "Inactive",
    },
    {
      id: 5,
      MediaName: "55",
      MediaLotAcceptance: "Infra",
      ModiaContainerType: "55",
      MediaPreparation: "55",
      ValidityPeriod: "55",
      MediaUsage: "55",
      Comments: "55",
      AddedOn: "55",
      status: "Inactive",
    },

    {
      id: 6,
      MediaName: "55",
      MediaLotAcceptance: "Infra",
      ModiaContainerType: "55",
      MediaPreparation: "55",
      ValidityPeriod: "55",
      MediaUsage: "55",
      Comments: "55",
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
            <div className="title fw-bold fs-5 mb-5">
              Media Template Configuration
            </div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
               
              </div>
            </div>
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
                    Media Template Configuration  
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
                  <CTableHeaderCell scope="col">Media Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Media Lot Acceptance	</CTableHeaderCell>

                  <CTableHeaderCell scope="col">
                  Modia Container Type	
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Media Preparation	 </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                  Validity Period	
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Media Usage	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Comments	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On	</CTableHeaderCell>

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
                        {item.MediaName}
                      </CTableDataCell>

                      <CTableDataCell>{item.MediaLotAcceptance	}</CTableDataCell>
                      <CTableDataCell>{item.ModiaContainerType	}</CTableDataCell>
                      <CTableDataCell>{item.MediaPreparation	}</CTableDataCell>
                      <CTableDataCell>{item.ValidityPeriod	}</CTableDataCell>
                      <CTableDataCell>{item.MediaUsage		}</CTableDataCell>
                      <CTableDataCell>{item.Comments}</CTableDataCell>
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
          <CModalTitle>Add Media Template Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Media Configuration Type</p>
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
          <CFormInput
            type="text"
            label="Mode Of Preparation
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Login Tempalate for Media Lot Acceptance
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Prepared Media Validity Period
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Login Tempalate for Media Preparation"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Prepared Media Container Types

          "
            placeholder=""
          />
          <CForm>
            <CFormLabel>Prepared Media Usage</CFormLabel>
            <div>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Before Acceptance"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="After Acceptance"
                value="reject"
              />
            </div>
          </CForm>
          <h6>Comments</h6>

          <textarea name="" id=""></textarea>
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

export default MediaTemplateConfiguration;
