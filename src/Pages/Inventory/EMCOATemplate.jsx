import {
  CButton,
  CCol,
  // CFormInput,
  // CFormSelect,
  CModal,
  CFormLabel,
  CFormInput,
  CForm,
  CContainer,
  // CFormCheck,
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
  CFormSelect,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function EMCOATemplate() {
  const [selectedStatus, setSelectedStatus] = useState("Select Status");

  const handleSelect = (status) => {
    setSelectedStatus(status);
  };
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "#cdffca" };
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5 mb-5">EM COA Template</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100"></div>
          </div>
          <div>
            <CRow className="mb-3 ">
              <CDropdown
                style={{
                  width: "200px",
                  border: "1px solid lightgray",
                  boxShadow: "0 0 5px  black",
                  borderRadius: "5px",
                }}
              >
                <CDropdownToggle color="" style={{ color: "gray" }}>
                  {selectedStatus}
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem header>Select Status</CDropdownItem>
                  <CDropdownItem onClick={() => handleSelect("Active")}>
                    Active
                  </CDropdownItem>
                  <CDropdownItem onClick={() => handleSelect("Inactive")}>
                    Inactive
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              {/* <CCol sm={3}>
                <CFormSelect
                  options={[
                    "Select Sample Area",
                    { label: "All" },
                    { label: "Initiated" },
                    { label: "Approved" },
                    { label: "Rejected" },
                    { label: "Reinitiated" },
                    { label: "Dropped" },
                  ]}
                />
              </CCol> */}

              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton
                    color="info"
                    text="white"
                    style={{ marginLeft: "50px" }}
                    onClick={() => setAddModal(true)}
                  >
                    Add Monitoring Details
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
                  <CTableHeaderCell scope="col">Object Name </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unique Code </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Date Of Monitoring{" "}
                  </CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">prefix</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Location Type Id
                  </CTableHeaderCell> */}
                  {/* <CTableHeaderCell scope="col">Media Usage </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Comments </CTableHeaderCell> */}
                  {/* <CTableHeaderCell scope="col">Added On</CTableHeaderCell> */}

                  {/* <CTableHeaderCell scope="col">Added On</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Status </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>1</CTableDataCell>

                  <CTableDataCell>stmp1</CTableDataCell>
                  {/* <CTableDataCell>describe</CTableDataCell> */}
                  {/* <CTableDataCell>isubus111</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell> */}
                  <CTableDataCell>54255455</CTableDataCell>
                  {/* <CTableDataCell>54255455</CTableDataCell> */}
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
                  {/* <CTableDataCell>test21</CTableDataCell> */}
                  {/* <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell> */}
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  {/* <CTableDataCell>25365488</CTableDataCell> */}
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
                  {/* <CTableDataCell>test</CTableDataCell> */}
                  {/* <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>25255488</CTableDataCell> */}
                  <CTableDataCell>Lab1</CTableDataCell>
                  {/* <CTableDataCell>Lab1</CTableDataCell> */}
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
                  {/* <CTableDataCell>3</CTableDataCell>
                  <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell> */}
                  {/* <CTableDataCell>testing525</CTableDataCell>  */}
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
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
        <CModalHeader className="p-3">
          <CModalTitle>Add COA Template</CModalTitle>
        </CModalHeader>

        <p>Add information and Add Coa Template</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Configuration type


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Unique Code


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Report Title


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Format No.



                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div style={{ background: "lightgray", padding: "5px auto " }}>
              <p>Header</p>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Rows
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Columns

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div style={{ background: "lightgray", padding: "5px auto " }}>
              <p>Footer</p>
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Rows
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Columns

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <CContainer>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="approved_by"
                    className="d-flex align-items-center"
                    style={{border:"1px solid lightgray", borderRadius:"5px", padding:"8px" ,background:"#F5F6FA"}}
                  >
                    Approved By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="approved_by">
                    <option value="approved_by">approved_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="reviewed_by"
                    className="d-flex align-items-center"
                    style={{border:"1px solid lightgray", borderRadius:"5px", padding:"8px",background:"#F5F6FA"}}
                  >
                    Reviewed By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="reviewed_by">
                    <option value="reviewed_by">reviewed_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol xs="auto">
                  <CFormLabel
                    htmlFor="checked_by"
                    className="d-flex align-items-center"
                    style={{border:"1px solid lightgray", borderRadius:"5px", padding:"8px",background:"#F5F6FA"}}
                  >
                    Checked By
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormSelect id="checked_by">
                    <option value="checked_by">checked_by</option>
                  </CFormSelect>
                </CCol>
              </CRow>
            </CContainer>

           
          </CForm>
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default EMCOATemplate;
