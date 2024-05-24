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

function AcknowledgeSample() {
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
            <div className="title fw-bold fs-5 mb-5">Acknowledge Sample</div>
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
                    Acknowledge Sample
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
                  <CTableHeaderCell scope="col">Batch Sample</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">A.R No.	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
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
                  {/* <CTableDataCell>describe</CTableDataCell> */}
                  {/* <CTableDataCell>isubus111</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell> */}
                  {/* <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell>loc1</CTableDataCell> */}

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
                  {/* <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>25365488</CTableDataCell>
                  <CTableDataCell>Plant1</CTableDataCell> */}

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
          <CModalTitle>
            Add information and register new Acknowledge Sample
          </CModalTitle>
        </CModalHeader>

        <p>Add information and register new Batch Sample</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch Sample


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <h5 style={{ fontWeight: "bolder" }}>
            EM Monitoring Details(Sampling Schedule ,Batch Sample)

            </h5>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Date of Monitoring


+
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Monitored / Sampled By


               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Activity Type


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="time"
                label="Exposure Start Time

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Product Name

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="time"
                label="Report No.


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div></div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="Membrane Holder Sterilized On


                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Gelatine Membrane Lot> No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="Use Before




                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <h5 style={{ fontWeight: "bolder" }}>EM Monitoring Details</h5>
            <div className="mb-3">
              <CFormInput
                type="time"
                label="Exposure End Time



                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Monitoring Comments



                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch> No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Charge No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Membrane Holder ID
               ."
                placeholder=""
                className="custom-placeholder"
              />
            </div><div className="mb-3">
              <CFormInput
                type="date"
                label="Sterilized On
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div><div className="mb-3">
              <CFormInput
                type="text"
                label="Media Usage
                "
                placeholder=""
                className="custom-placeholder"
              />
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

export default AcknowledgeSample;
