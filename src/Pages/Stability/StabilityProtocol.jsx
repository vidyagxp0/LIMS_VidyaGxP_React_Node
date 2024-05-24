import {
  CButton,
  CCol,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CFormTextarea,
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
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function StabilityProtocol() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const badgeStyle = { background: "#cdffca" };
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Stability Protocol</div>
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
                    "Select Status",
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
                  <CButton
                    className="bg-info text-white"
                    onClick={() => setAddModal(true)}
                  >
                    Add Protocol
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
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Product/Material
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Specification ID
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Generic Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Protocol Type</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Protocol Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>

                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell>Sodium Propyl Paraben IP</CTableDataCell>

                  <CTableDataCell>EUR/SOP-AD-01</CTableDataCell>
                  <CTableDataCell>Sodium Propyl Paraben IP</CTableDataCell>
                  <CTableDataCell>Finised Product</CTableDataCell>
                  <CTableDataCell>New</CTableDataCell>
                  <CTableDataCell>05-may-2024</CTableDataCell>
                  <CTableDataCell>001</CTableDataCell>

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
                      <Link to="/stability/stabilityProtocolDetails">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <div
                        className="cursor-pointer"
                        onClick={() => setAddModal(true)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>Polycaprolactone New</CTableDataCell>

                  <CTableDataCell>EUR/SOP-AD-02</CTableDataCell>
                  <CTableDataCell>Polycaprolactone New</CTableDataCell>
                  <CTableDataCell>Finised Product</CTableDataCell>
                  <CTableDataCell>New</CTableDataCell>
                  <CTableDataCell>15-may-2024</CTableDataCell>
                  <CTableDataCell>002</CTableDataCell>

                  <CTableDataCell className="d-flex">
                    <div
                      className="py-2 px-3 small rounded fw-bold"
                      style={badgeStyle}
                    >
                      DROPPED
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/stability/stabilityProtocolDetails">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <div
                        className="cursor-pointer"
                        onClick={() => setAddModal(true)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>3</CTableDataCell>
                  <CTableDataCell>Polycaprolactone</CTableDataCell>

                  <CTableDataCell>EUR/SOP-AD01</CTableDataCell>
                  <CTableDataCell>Polycaprolactone</CTableDataCell>
                  <CTableDataCell>Finised Product</CTableDataCell>
                  <CTableDataCell>New</CTableDataCell>
                  <CTableDataCell>09-may-2024</CTableDataCell>
                  <CTableDataCell>003</CTableDataCell>
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
                      <Link to="/stability/stabilityProtocolDetails">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <div
                        className="cursor-pointer"
                        onClick={() => setAddModal(true)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          <div className="pagination">
            <div className="pagination">
              <div className="mr-5">
                <button className="btn  mr-2">&lt;&lt;</button>
              </div>
              <div className="current-page-number mr-2 bg-dark-subtle page-item">
                <button className="btn rounded-circle"> 1 </button>
              </div>
              <div>
                <button className="btn mr-2">&gt;&gt;</button>
              </div>
            </div>
            <button className="btn btn-next">
              {" "}
              Next <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
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
          <CModalTitle>Add Protocol</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Specification ID"
            placeholder="Select..."
            options={[
              "",
              { label: "HCL10132%" },
              { label: "HOS234" },
              { label: "CHPOIL001" },
              { label: "rest0001" },
            ]}
          />
          <CFormInput
            type="text "
            label="Product"
            placeholder=" testamine"
            disabled
          />
          <CFormInput
            type="text"
            label="Generic Name"
            placeholder="Testamine "
            disabled
          />
          <CFormSelect
            type="text"
            label="Sample Type"
            placeholder="Select Sample Type"
            options={[
              "Select Sample Type",
              { label: "HCL" },
              { label: "Hydrochloric Acid" },
              { label: "Petrochemical" },
              { label: "Initiated Product" },
            ]}
          />
          <label>Protocol Type</label>
          <CFormCheck
            type="radio"
            id="protocolTypeNew"
            name="protocolType"
            label="New"
          />
          <CFormCheck
            type="radio"
            id="protocolTypeExisting"
            name="protocolType"
            label="Existing"
          />
          <CFormInput
            type="text"
            label="Protocol Id"
            placeholder="Protocol Id "
          />
          <CFormInput
            type="text"
            label="Sample Login Tempalte"
            placeholder="Select..."
            options={[
              "Select Sample Type",
              { label: "ARZ Temp" },
              { label: "AAT" },
            ]}
          />
          <CFormInput type="date" label="MAnufacturing Date" placeholder=" " />

          <label>DateFormat</label>
          <CFormCheck
            type="radio"
            id="DateFormatShort"
            name="DateFormat"
            label="Short Date"
          />
          <CFormCheck
            type="radio"
            id="DateFormatLong"
            name="DateFormat"
            label="Long Date"
          />

          <CFormInput type="text" label="Sample By" placeholder="Sample By " />
          <CFormInput
            type="text"
            label="Storage Condition UOM"
            placeholder="Storage Condition UOM "
          />
          <label>Define Charging Start Date</label>
          <CFormCheck
            type="radio"
            id="DateFormatNow"
            name="ChangingDate"
            label="Now"
          />
          <CFormCheck
            type="radio"
            id="DateFormatLater"
            name="ChangingDate"
            label="Later"
          />

          <CFormInput type="date" label="Starting Date" placeholder="" />

          <label>Initial Testing Required</label>
          <CFormCheck
            type="radio"
            id="TestingRequiredYes"
            name="TestingRequired"
            label="Yes"
          />
          <CFormCheck
            type="radio"
            id="TestingRequiredNo"
            name="TestingRequired"
            label="No"
          />

          <CFormInput type="file" label="Certificates If Any" placeholder=" " />
          <div>
            <CFormInput
              type="text"
              label="Number Of Storage Conditions"
              placeholder="Number Of Storage Conditions "
            />
            <CButton className="bg-info text-white">Add</CButton>
          </div>
          <CFormSelect
            type="text"
            label="Test Plan / Revision No."
            placeholder="Select... "
            options={[
              "Select Sample Type",
              { label: "Hydraulic Oil" },
              { label: "CHP Oil" },
              { label: "Sacubitril" },
              { label: "Bio Burden Test For PM" },
            ]}
          />
          
          <CFormInput
            type="text"
            label="Instructions"
            placeholder="Instructions "
          />
          <CFormInput
            type="text"
            label="Package Configuration"
            placeholder="Package Configuration "
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add Protocol</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
const DeleteModal = (_props) => {
  return (
    <>

      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Delete Protocol</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Do you want to delete this Protocol?</p>
          <CFormInput
            type="text"
            label="User ID"
            placeholder="User Id "
          />
          <CFormInput
            type="password"
            label="Password"
            placeholder="Your password"
          />

        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>Back</CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}

export default StabilityProtocol;
