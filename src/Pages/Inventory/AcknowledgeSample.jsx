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
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " green",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "red", color: "white", width: "110px" };

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      BatchSample	: "55",
      

      status: "Active",
    },
    {
      id: 2,
      BatchSample: "55",
      
      status: "Active",
    },

    {
      id: 3,
      BatchSample: "55",
     

      status: "Active",
    },
    {
      id: 4,
      BatchSample: "55",
     

      status: "Inactive",
    },
    {
      id: 5,
      BatchSample: "55",
      
      status: "Inactive",
    },

    {
      id: 6,
      BatchSample: "55",
    

      status: "Inactive",
    },
  ]);
  const filterData = () => {
    if (selectedStatus === "All") {
      return data;
    }

    return data.filter((item) => item.status === selectedStatus);
  };

  const [search, setSearch] = useState("");
  console.log(search);
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
          <CRow className="mb-3">
              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{ border: "2px solid gray" }}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                 <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Acknowledge Sample
                  </CButton> 
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
          <CTable align="middle" responsive className=" ">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Batch Sample	 </CTableHeaderCell>
                  

                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ConfigurationType.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      {/* <CTableDataCell key={item.id}>{item.Name}</CTableDataCell> */}

                      <CTableDataCell>{item.BatchSample}</CTableDataCell>
                      

                      <CTableDataCell className="d-flex">
                        <div
                          className="py-2 px-3 small rounded fw-bold"
                          style={
                            item.status === "Active"
                              ? badgeStyle2
                              : item.status === "Inactive"
                              ? badgeStyle3
                              : badgeStyle
                          }
                        >
                          {item.status}
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
                  ))}
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
        <p style={{marginLeft:"20px"}}>Add information and register new Batch Sample</p>

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
            <h5 style={{ fontWeight: "700" }}>
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
