import { CButton, CCol,  CFormInput, CFormSelect, CHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CForm, CFormLabel } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function WorkSheet() {
  const [addModal, setAddModal] = useState(false)
  const badgeStyle = { background: "#cdffca" }
  return (
    <>

      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">

          <div className="main-head">
            <div className="title fw-bold fs-5"> WorkSheets</div>


          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row">
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
                    <div className="text-light fs-5">INITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }}>
                    <div className="text-light fs-5">REINITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }}>
                    <div className="text-light fs-5">APPROVED</div>
                    <div className="count fs-1 text-light fw-bolder">2</div>
                  </div>

                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#dc3545, #9ec5fe)' }}>
                    <div className="text-light fs-5">REJECTED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                </div>
              </div>


            </div>

          </div>
          <div>
            <CRow className="mb-3">

              <CCol sm={3}>
                <CFormSelect
                  options={[
                    'Select Status',
                    { label: 'All' },
                    { label: 'Initiated' },
                    { label: 'Approved' },
                    { label: 'Rejected' },
                    { label: 'Reinitiated' },
                    { label: 'Dropped' }
                  ]}
                />
              </CCol>
              <CCol sm={6}>

              </CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Worksheet</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
            <CTable align="middle" responsive className=" shadow">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sequence Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Worksheet Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Gtp Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Method Validation No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Standard Prepration</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>

                <CTableRow>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell>Worksheet001</CTableDataCell>
                  <CTableDataCell>hcl</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Initiated</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell>Worksheet001</CTableDataCell>
                  <CTableDataCell>hcl</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>001</CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Initiated</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                      <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                  </CTableDataCell>
                </CTableRow>

              </CTableBody>
            </CTable>
          </div>

          <div className="pagination">

            <div className="pagination">
              <div className='mr-5'>
                <button className="btn  mr-2" >&lt;&lt;</button>
              </div>
              <div className="current-page-number mr-2 bg-dark-subtle page-item">
                <button className='btn rounded-circle'> 1 </button>
              </div>
              <div>
                <button className="btn mr-2" >&gt;&gt;</button>

              </div>

            </div>
            <button className="btn btn-next" > Next <FaArrowRight /></button>
          </div>


        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

    </>
  )
}

const StatusModal = (_props) => {
  return (
    <>

      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Worksheet</CModalTitle>
        </CModalHeader>
        <CModalBody>

          <CFormInput
            type="text"
            label="Type"
            placeholder="WorkSheet"
            disabled
          />
          <CFormInput
            type="text"
            label="Name"
            placeholder="Name"
          />

          <CFormSelect
            type="text"
            label="Product"
            placeholder="Select..."
            options={[
              "Select...",
              { label: "TadalafilL" },
              { label: "Diclofenac Resinate" },
              { label: "Diclofenac Potassium" },
              { label: "Diclofenac Salts" }
            ]}
          />
          <CHeader>Uniformity of Dosage Units:</CHeader>
          <CFormInput
            type="text"
            label="GTP No:"
            placeholder="GTP No:"
          />
          <CFormInput
            type="text"
            label="Method Validation No:"
            placeholder="Method Validation No:"
          />

          <CForm >
            <CFormLabel htmlFor="text_editor">Description:</CFormLabel>
            <div className="worksheet-editor-main">
              <CRow className="option-buttons mb-3">
                <CCol xs="auto">
                  <CFormSelect className="option-select">
                    <option value="12">12px</option>
                    <option value="14">14px</option>
                    <option value="16">16px</option>
                    <option value="18">18px</option>
                    <option value="20">20px</option>
                    <option value="22">22px</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormSelect className="option-select">
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-bold"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-italic"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-underline"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-strikethrough"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-subscript"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-superscript"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-image"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-link"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-align-left"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-align-center"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-align-right"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-align-justify"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-list-ol"></i>
                  </CButton>
                  <CButton className="each-option-btn">
                    <i className="fa-solid fa-list"></i>
                  </CButton>
                </CCol>
              </CRow>

              <CRow className="custom-btns mb-3">
                <CCol xs="auto">
                  <CButton className="each-option-btn">EDAP</CButton>
                  <CButton className="each-option-btn">WSQTY</CButton>
                  <CButton className="each-option-btn">CHQTY</CButton>
                  <CButton className="each-option-btn">EWS</CButton>
                  <CButton className="each-option-btn">RSQTY</CButton>
                  <CButton className="each-option-btn">SDQTY</CButton>
                </CCol>
              </CRow>
              <hr style={{ height: '1.5px', background: 'rgb(15, 147, 195)' }} />
              <div
                contentEditable="true"
                className="editor"
                style={{ minHeight: '200px', fontSize: '16px', fontFamily: 'Arial' }}
              ></div>
            </div>
          </CForm>

        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>Back</CButton>
          <CButton className="bg-info text-white">Add </CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}


export default WorkSheet
