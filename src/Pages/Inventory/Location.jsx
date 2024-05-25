import {
  CButton,
  CCol,
  // CFormInput,
  // CFormSelect,
  CModal,
  // CModalBody,
  CFormInput,
  CForm,
  CFormLabel,
  CFormCheck,
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

function Location() {
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
      PlantName		: "55",
      Location	: "55",
      Prefix	: "PRD",
      LocationTypeId		: "PRD",
      AddedOn	: "PRD",
      
      

      status: "Active",
    },
    {
      id: 2,
      PlantName		: "55",
      Location	: "55",
      Prefix	: "PRD",
      LocationTypeId		: "PRD",
      AddedOn	: "PRD",
      
      status: "Active",
    },

    {
      id: 3,
      PlantName		: "55",
      Location	: "55",
      Prefix	: "PRD",
      LocationTypeId		: "PRD",
      AddedOn	: "PRD",
      status: "Active",
    },
    {
      id: 4,
      PlantName		: "55",
      Location	: "55",
      Prefix	: "PRD",
      LocationTypeId		: "PRD",
      AddedOn	: "PRD",
      
      status: "Inactive",
    },
    {
      id: 5,
      PlantName		: "55",
      Location	: "55",
      Prefix	: "PRD",
      LocationTypeId		: "PRD",
      AddedOn	: "PRD",
     
      status: "Inactive",
    },

    {
      id: 6,
      PlantName		: "55",
      Location	: "55",
      Prefix	: "PRD",
      LocationTypeId		: "PRD",
      AddedOn	: "PRD",
     
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
            <div className="title fw-bold fs-5 mb-5">Locations</div>
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
                    Add Location
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
                  <CTableHeaderCell scope="col">Plant Name		 </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                  Facility
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Prefix</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Location Type Id	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On	</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.PlantName	.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.PlantName	}
                      </CTableDataCell>

                      <CTableDataCell>{item.Facility	}</CTableDataCell>
                      <CTableDataCell>{item.Location	}</CTableDataCell>
                      <CTableDataCell>{item.Prefix	}</CTableDataCell>
                      <CTableDataCell>{item.LocationTypeId	}</CTableDataCell>
                      

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
          <CModalTitle>Add Location</CModalTitle>
        </CModalHeader>
        <p>Add information and add new Location</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Facility
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Plan
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Location
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Plant Prefix/ Facility Prefix / Prefix

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <p>Description</p>
            <textarea rows="5" name="" id=""></textarea>
            <CForm>
              <CFormLabel>Location Type Id</CFormLabel>
              <div>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="System"
                  value="accept"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Undefined"
                  value="reject"
                />
              </div>
            </CForm>
          </CForm>
        </div>
        <div className="mb-3">
              <CFormInput
                type="text"
                label="No. of Sampling Points"
                placeholder=""
                className="custom-placeholder"
              />
              <CButton color="info">Add</CButton>
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

export default Location;
