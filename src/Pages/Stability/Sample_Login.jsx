import {
  CButton,
  CCol,
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
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sample_Login() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const [permanentlyDeleteModal, setPermanentlyDeleteModal] = useState(false)
  const badgeStyle = { background: "#cdffca" };
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5"> Stability Sample Login</div>
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
                    <div className="count fs-1 text-light fw-bolder">0</div>
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
                    <div className="count fs-1 text-light fw-bolder">2</div>
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
                  <div className="p-2">
                    <CButton className="bg-danger bg-opacity-75 rounded" >
                      <FaDownload />
                    </CButton>
                  </div>
                  <CButton
                    className="bg-info text-white"
                    onClick={() => setAddModal(true)}
                  >
                    Add Sample Login
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
                  <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Product / Material
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Generic Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Specification Code
                  </CTableHeaderCell>

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
                  <CTableDataCell>FG Templage</CTableDataCell>
                  <CTableDataCell>Polycaprolactone</CTableDataCell>
                  <CTableDataCell>plsspec</CTableDataCell>
                  <CTableDataCell>With Specification</CTableDataCell>

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
                      <Link to="/stability/sample_LoginDetails">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <div
                        className="cursor-pointer"
                        onClick={() => setAddModal(true)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                      <div className='cursor-pointer' onClick={() => setPermanentlyDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                    
                    </div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>FG Templage</CTableDataCell>
                  <CTableDataCell>Polycaprolactone</CTableDataCell>
                  <CTableDataCell>plsspec</CTableDataCell>
                  <CTableDataCell>With Specification</CTableDataCell>

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
                    <Link to="/stability/sample_LoginDetails">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <div
                        className="cursor-pointer"
                        onClick={() => setAddModal(true)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                      <div className='cursor-pointer' onClick={() => setPermanentlyDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
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
      {permanentlyDeleteModal && <PermanentlyDeleteModal visible={permanentlyDeleteModal} closeModal={() => setPermanentlyDeleteModal(false)} />}
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
          <CModalTitle>Add Sample login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Test Plan / Revision No."
            placeholder="Select... "
            options={[
              "Select...",
              { label: "Hydroulic Oil" },
              { label: "CHP Oil" },
              { label: "Sacubitril" },
              { label: "Bio burden Test For PM" },
            ]}
          />
          <CFormInput
            type="text"
            label="Product / Material"
            placeholder=" Product / Material"
            disabled
          />
          <CFormInput
            type="text"
            label="Product / Material Code"
            placeholder=" Product / Material Code"
            disabled
          />
          <CFormInput
            type="text"
            label="Generic Name"
            placeholder=" Generic Name"
            disabled
          />
          <CFormInput
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
            disabled
          />
          <CFormSelect
            type="text"
            label="Copy Sample from"
            placeholder=" Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormInput
            type="text"
            label="Sample Type"
            placeholder="Sample Type"
            disabled
          />
          <CFormSelect
            type="text"
            label="Certificates (If any)"
            placeholder=" Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormSelect
            type="text"
            label="Protocol ID"
            placeholder=" Select..."
            options={[
              "Select...",
              { label: "HCL10132%" },
              { label: "HOS 234" },
              { label: "CHPOIL001" },
              { label: "MB-PM-001/01" },
              { label: "RPS-TSLV-00" },
              { label: "rest0001" },
            ]}
          />
          <CFormSelect
            type="text"
            label="Storage Conditions"
            placeholder=" Select..."
            options={[
              "Select...",
              { label: "°F" },
              { label: "30°C" },
              { label: "42°F" },
              { label: "25°C ± 2" },
              { label: "32°C" },
              { label: "24°F" },
              { label: "25°C" },
            ]}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton className="bg-info text-white">Add Sample</CButton>
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
          <CModalTitle>Delete Stability Sample Login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Do you want to delete this stability Sample login <code>ARFFT0000081</code>?</p>

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

const PermanentlyDeleteModal = (_props) => {
  return (
    <>

      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Delete Stability Sample Login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Do you want to permanently delete this stability Sample login <code>ARFFT0000081</code>?</p>

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

export default Sample_Login;
