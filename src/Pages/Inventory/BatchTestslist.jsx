import {
  CButton,
  CCol,
  // CFormInput,
  // CFormSelect,
  CModal,
  // CFormLabel,
  CFormInput,
  CForm,
  // CContainer,
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

function BatchTestslist() {
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
            <div className="title fw-bold fs-5 mb-5">Batch Tests list</div>
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
                    Batch Tests List
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
                    Batch Sample Id
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Registered On{" "}
                  </CTableHeaderCell>
                  {/*<CTableHeaderCell scope="col">
                  Generic Name	
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Specification Code	
</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Media Usage </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Comments </CTableHeaderCell> */}
                  {/* <CTableHeaderCell scope="col">Added On</CTableHeaderCell> */}

                  {/* <CTableHeaderCell scope="col">Added On</CTableHeaderCell> */}
                  {/* <CTableHeaderCell scope="col">Status </CTableHeaderCell> */}
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
                  <CTableDataCell>stmp1</CTableDataCell>
                  {/* <CTableDataCell>describe</CTableDataCell> */}

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
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>

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
                  <CTableDataCell>3</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell>

                  {/* <CTableDataCell>Lab1</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell> */}

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
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  {/* <CTableDataCell>testing525</CTableDataCell> */}
                  {/* <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>25255488</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell> */}

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
          <CModalTitle>Add Batch Tests List Registration</CModalTitle>
        </CModalHeader>

        <p>Add information and register new Batch Tests List</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Batch Sample ID
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Test Name
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Test Type




               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Submission Type
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div>
              <table>
                <thead style={{background:"lightblue", border:"2px solid black"}}>
                  <tr style={{background:"lightblue", border:"2px solid black"}}>
                    <th style={{background:"lightblue", border:"2px solid black"}}>Sno.</th>
                    <th style={{background:"lightblue", border:"2px solid black"}}>EM A RN.</th>
                    <th style={{background:"lightblue", border:"2px solid black"}}>Location</th>
                    <th style={{background:"lightblue", border:"2px solid black"}}>Location Description</th>
                    <th style={{background:"lightblue", border:"2px solid black"}}>Alert Limits</th>
                    <th style={{background:"lightblue", border:"2px solid black"}}>Action Limits</th>
                    
                    <th style={{background:"lightblue", border:"2px solid black"}}>Evaluation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </CForm>
        </div>

        <CModalFooter className="p-3">
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

export default BatchTestslist;