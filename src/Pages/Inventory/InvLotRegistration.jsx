import {
  CButton,
  CCol,
  CFormCheck,
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

function InvLotRegistration() {
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "#cdffca" };
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Lot Registration</div>
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
                  <CButton color="dark" onClick={() => setAddModal(true)}>
                    Add Standard
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
                  <CTableHeaderCell scope="col">Standard Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sequence No.</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Used On</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mode of Usage</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Comments</CTableHeaderCell> */}

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
                  {/* <CTableDataCell>describe</CTableDataCell> */}
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
                  {/* <CTableDataCell>testing</CTableDataCell> */}
                  {/* <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>25365488</CTableDataCell> */}
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
                  {/* <CTableDataCell>testing525</CTableDataCell> */}
                  {/* <CTableDataCell>25255488</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell> */}
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
                  {/* <CTableDataCell>25255488</CTableDataCell> */}
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
          <CModalTitle>Reference Standard Lot Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and add new standard lot usage.
          </p>
          <CFormInput
            type="text"
            label="Reference Standard Name"
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Reference Standard Code
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Cas / Cat No.
            "
            placeholder=""
          />
          <CFormInput type="text" label="Source" placeholder="" />
          <CFormInput
            type="text"
            label="Quantity Recieved
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Supplied By
            "
            placeholder=""
          />

          <CFormSelect type="text" label="Certificate" placeholder="" />

          <CFormInput
            type="text"
            label="Batch No. / Lot No."
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Delivery Receipt Number"
            placeholder=""
          />

          <h6>Certificate Received</h6>
          <div style={{marginBottom:"10px"}}>
            <CFormCheck
              type="radio"
              name="option"
              id="optionYes"
              value="yes"
              label="Yes"
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionNo"
              value="no"
              label="No"
            />
          </div>

          <CFormSelect type="text" label="Certificate" placeholder="" />

          <CFormInput
            type="text"
            label="Batch No. / Lot No."
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Delivery Receipt Number"
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Delivery Receipt Date"
            placeholder=""
          />
          <CFormSelect
            type="text"
            label="Recieved By
            "
            placeholder=""
          />
          <CFormInput
            type="date"
            label="Recieved On
            "
            placeholder=""
          />
          <CFormInput
            type="date"
            label="Valid Upto
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Location
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Potency
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="UOM
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Water Content

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="UOM
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
            Add Standard Lot Usage
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default InvLotRegistration;
