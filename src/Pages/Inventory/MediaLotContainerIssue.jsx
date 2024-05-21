import {
  CButton,
  CCol,
  // CFormInput,
  // CFormSelect,
  CModal,
  CModalBody,
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
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function MediaLotContainersIssue() {
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
            <div className="title fw-bold fs-5 mb-5">
              Media Lot Containers Issue
            </div>
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
                  Show {selectedStatus}
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
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton
                    color="info"
                    text="white"
                    style={{ marginLeft: "50px" }}
                    onClick={() => setAddModal(true)}
                  >
                    Media Lot Containers Issue
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
                    Media Container No.{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Container Qty{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Container Validity Period Day(s)
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Container Valid Upto
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Lot Valid Upto{" "}
                  </CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Media Usage </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Comments </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell> */}

                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>1</CTableDataCell>

                  <CTableDataCell>stmp1</CTableDataCell>
                  <CTableDataCell>describe</CTableDataCell>
                  {/* <CTableDataCell>isubus111</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell> */}
                  <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell>
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
                  <CTableDataCell>test21</CTableDataCell>
                  {/* <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell> */}
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
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
                  <CTableDataCell>test</CTableDataCell>
                  {/* <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>25255488</CTableDataCell> */}
                  <CTableDataCell>Lab1</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell>
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
                  <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell> */}
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
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
        size="xl"
      >
        <CModalHeader>
          <CModalTitle size="xl">Add Media Lot</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table
            className="table table-bordered"
            style={{ width: "100%", height: "700px" }}
          >
            <thead className="thead-light">
              <tr>
                <th style={{ background: "#0F93C3", color: "white" }}>SNo.</th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                Media Container No.	
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Qty
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Validity Period Day(s)
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Container Valid Upto
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Lot Valid Upto
                </th>
                <th style={{ background: "#0F93C3", color: "white" }}>
                  Select
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>WSI-1020223-000000061</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>WSI-1020223-000000062</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>WSI-1020223-000000063</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>WSI-1020223-000000064</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>WSI-1020223-000000065</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>WSI-1020223-000000066</td>
                <td>10</td>
                <td>60</td>
                <td>18/05/2024 15:08</td>
                <td>18/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>WSI-1020223-000000067</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>WSI-1020223-000000068</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>WSI-1020223-000000069</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>WSI-1020223-000000610</td>
                <td>10</td>
                <td>60</td>
                <td>19/05/2024 15:08</td>
                <td>19/05/2024 15:08</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </CModalBody>
        <CModalFooter>
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

export default MediaLotContainersIssue;
