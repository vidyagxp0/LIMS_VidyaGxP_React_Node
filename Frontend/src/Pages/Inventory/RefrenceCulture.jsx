import {
  CButton,
  CCol,
  // CFormCheck,
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

function RefrenceCulture() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
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
      TemplateName: "Infra",
      ReferenceName: "55",
      ReferenceCode: "55",
      Media: "55",
      AnalysisRequired: "55",

      status: "INITIATED",
    },
    {
      id: 2,
      TemplateName: "Infra",
      ReferenceName: "55",
      ReferenceCode: "55",
      Media: "55",
      AnalysisRequired: "55",
      status: "INITIATED",
    },

    {
      id: 3,
      TemplateName: "Infra",
      ReferenceName: "55",
      ReferenceCode: "55",
      Media: "55",
      AnalysisRequired: "55",
      status: "REJECTED",
    },
    {
      id: 4,
      TemplateName: "Infra",
      ReferenceName: "55",
      ReferenceCode: "55",
      Media: "55",
      AnalysisRequired: "55",
      status: "APPROVED",
    },
    {
      id: 5,
      TemplateName: "Infra",
      ReferenceName: "55",
      ReferenceCode: "55",
      Media: "55",
      AnalysisRequired: "55",
      status: "APPROVED",
    },

    {
      id: 6,
      TemplateName: "Infra",
      ReferenceName: "55",
      ReferenceCode: "55",
      Media: "55",
      AnalysisRequired: "55",
      status: "APPROVED",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
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
      item.TemplateName.toLowerCase().includes(search.toLowerCase())
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
          <h4 className="fw-bold ">
              Reference Culture List
            </h4>
          </div>
        
          <div>
            <CRow className="mb-3 mt-5">
              <CCol sm={4}>
                <CFormInput
                  style={{fontSize:'0.9rem'}}
                  type="email"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>

              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{fontSize:'0.9rem'}}
                >
                  <option value="All">All</option>
                  <option value="Initiated">Initiated</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Reinitiated">Reinitiated</option>
                  <option value="Dropped">Dropped</option>
                </CFormSelect>
              </CCol>
              {/* <CCol sm={2}></CCol> */}
              <CCol sm={5}>
                <div className="d-flex justify-content-end">
                  <CButton  style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>
                    Add Reference Culture
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
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Template Name</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                    Reference Name
                  </CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                    Reference Code{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Media</CTableHeaderCell>

                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">
                    Analysis Required
                  </CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell  style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData().slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.TemplateName	.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell  className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.TemplateName}
                      </CTableDataCell>

                      <CTableDataCell>
                        {item.ReferenceName	}
                      </CTableDataCell>
                      <CTableDataCell>{item.ReferenceCode	}</CTableDataCell>
                      <CTableDataCell>{item.Media}</CTableDataCell>
                      <CTableDataCell>{item.AnalysisRequired}</CTableDataCell>

                      <CTableDataCell>
                        <button  
                        className={`py-1 px-3 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                          item.status === "INITIATED"
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
                        }`} style={{fontSize:'0.6rem'}}
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
      >
        <CModalHeader>
          <CModalTitle>Add information and Add Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h3>Registration Initiation</h3>
          <CFormSelect
            type="text"
            label="Template Name

            "
            placeholder=""
          />

          <CFormSelect
            type="text"
            label="Reference Culture Name


            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Reference Culture Code/Strain No.


            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Media
"
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Analysis Required
"
            placeholder=""
          />
          <h6>Passage For Sub Culture 1 (Passage 0)</h6>
          {/* <CButton color="info">Add</CButton> */}
          <CFormInput type="text" label="Validity Period" placeholder="" />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 2 (Passage 1)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 3 (Passage 2)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 4 (Passage 3)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 5 (Passage 4)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />

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
            Add Refrence Culture
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
export default RefrenceCulture;