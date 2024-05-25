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
            <div className="title fw-bold fs-5 py-4">
              Reference Culture List
            </div>
          </div>
          <div className="d-flex gap-4"></div>
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
                    Add Reference Culture
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
                  <CTableHeaderCell scope="col">Template Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Reference Name
                  </CTableHeaderCell>

                  <CTableHeaderCell scope="col">
                    Reference Code{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Media</CTableHeaderCell>

                  <CTableHeaderCell scope="col">
                    Analysis Required
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.TemplateName	.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.TemplateName}
                      </CTableDataCell>

                      <CTableDataCell>
                        {item.ReferenceName	}
                      </CTableDataCell>
                      <CTableDataCell>{item.ReferenceCode	}</CTableDataCell>
                      <CTableDataCell>{item.Media}</CTableDataCell>
                      <CTableDataCell>{item.AnalysisRequired}</CTableDataCell>

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

export default RefrenceCulture;
