import {
  CButton,
  CCol,
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

function ChamberConditionMapping() {
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "#cdffca" };
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <h4 className="fw-bold mb-4 mt-3">Chamber Condition Mapping</h4>
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
                  <CTableHeaderCell scope="col">Chamber ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Current Storage Conditions
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Initiated On</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
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
                  <CTableDataCell>65°F</CTableDataCell>
                  <CTableDataCell>05-may-2024 20:50</CTableDataCell>

                  <CTableDataCell>
                    <CButton
                      className="bg-info text-white"
                      onClick={() => setAddModal(true)}
                    >
                      Update
                    </CButton>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>Na</CTableDataCell>
                  <CTableDataCell>65°C</CTableDataCell>
                  <CTableDataCell>15-may-2024 12:50</CTableDataCell>

                  <CTableDataCell>
                    <CButton
                      className="bg-info text-white"
                      onClick={() => setAddModal(true)}
                    >
                      Update
                    </CButton>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>3</CTableDataCell>
                  <CTableDataCell>stmp5</CTableDataCell>
                  <CTableDataCell>sample</CTableDataCell>
                  <CTableDataCell>65°c</CTableDataCell>
                  <CTableDataCell>20-may-2024 15:20</CTableDataCell>

                  <CTableDataCell>
                    <CButton
                      className="bg-info text-white"
                      onClick={() => setAddModal(true)}
                    >
                      Update
                    </CButton>
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
          <CModalTitle>Update Condition Mapping</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Chamber ID"
            placeholder="Chamber Id "
          />
          <CFormInput
            type="text"
            label="Description"
            placeholder="Enter Description "
          />

          <CFormInput
            type="text"
            label="Current Storage Condition"
            placeholder=" 42°F"
          />
          <CFormInput
            type="datetime-local"
            label="Date"
            placeholder="Initiated On "
          />
          <CFormSelect
            type="text"
            label="Configurable Storage Condition"
            options={[
               "",
               { label: "°F" },
               { label: "30°C" },
               { label: "42°F" },
               { label: "25°C ± 2" },
               { label: "32°C" },
               { label: "24°F" },
               { label: "25°C" },
             ]}
            
            placeholder="Conditions "
          />
          <CFormInput
            type="file"
            label="Reference Documents (If Any)"
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ChamberConditionMapping;
