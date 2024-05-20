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

function CultureTemplateConfiguration() {
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "#cdffca" };
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">
              Culture Template Configuration
            </div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row">
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#0d6efd, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">INITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">2</div>
                  </div>
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#d63384, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">REINITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#ffc107, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">APPROVED</div>
                    <div className="count fs-1 text-light fw-bolder">1</div>
                  </div>

                  <div
                    className="col shadow p-3 m-3 rounded"
                    style={{ background: "linear-gradient(#dc3545, #9ec5fe)" }}
                  >
                    <div className="text-light fs-5">REJECTED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CRow className="mb-3">
              <CCol sm={4}>
                <CFormInput type="email" placeholder="Search..." />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  options={[
                    "All",
                    { label: "All" },
                    { label: "Initiated" },
                    { label: "Approved" },
                    { label: "Rejected" },
                    { label: "Reinitiated" },
                    { label: "Dropped" },
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="info" onClick={() => setAddModal(true)}>
                    Add Template Configuration
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
            <CTable align="middle" responsive className=" shadow">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">SNo.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Reference Culture Name
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Reference Culture Code
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Sample Culture Lot Acceptance
                  </CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Mode of Usage</CTableHeaderCell> */}
                  {/* <CTableHeaderCell scope="col">Media</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Analysis Required
                  </CTableHeaderCell> */}

                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>1</CTableDataCell>

                  {/* <CTableDataCell>stmp1</CTableDataCell> */}
                  <CTableDataCell>describe</CTableDataCell>
                  {/* <CTableDataCell>isubus111</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell> */}
                  <CTableDataCell>loc1</CTableDataCell>

                  <CTableDataCell className="d-flex">
                    <div
                      className="py-2 px-3 small rounded fw-bold"
                      style={badgeStyle}
                    >
                      APPROVED
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

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>2</CTableDataCell>
                  {/* <CTableDataCell>test21</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell> */}
                  {/* <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell> */}
                  <CTableDataCell>25365488</CTableDataCell>
                  <CTableDataCell>Plant1</CTableDataCell>

                  <CTableDataCell className="d-flex">
                    <div
                      className="py-2 px-3 small rounded fw-bold"
                      style={badgeStyle}
                    >
                      INITIATED
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

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>3</CTableDataCell>
                  {/* <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell> */}
                  {/* <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>25255488</CTableDataCell> */}
                  <CTableDataCell>Lab1</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell>

                  <CTableDataCell className="d-flex">
                    <div
                      className="py-2 px-3 small rounded fw-bold"
                      style={badgeStyle}
                    >
                      INITIATED
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
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>3</CTableDataCell>
                  {/* <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell> */}
                  {/* <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell> */}
                  <CTableDataCell>25255488</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell>

                  <CTableDataCell className="d-flex">
                    <div
                      className="py-2 px-3 small rounded fw-bold"
                      style={badgeStyle}
                    >
                      INITIATED
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
          <CModalTitle>Add Culture Template Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Template</p>
          <h3>Registration Initiation</h3>

          <CFormSelect
            type="text"
            label="Reference Culture Name


            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Reference Culture Code


            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Login Template For Culture Lot Acceptance

"
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Comments
"
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Template Culture
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CultureTemplateConfiguration;
