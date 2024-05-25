import {
  CButton,
  CCol,
  // CFormGroup,
  CForm,
  CFormInput,
  CFormCheck,
  CFormLabel,
  CFormSelect,
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

function MediaOnboarding() {
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
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",

      status: "Active",
    },
    {
      id: 2,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Active",
    },

    {
      id: 3,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Active",
    },
    {
      id: 4,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Inactive",
    },
    {
      id: 5,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
      status: "Inactive",
    },

    {
      id: 6,
      MediaName: "55",
      MediaPrefix: "Infra",
      StorageCondition: "55",
      UOM: "55",
      ModeOfPreparation: "55",
      AddedOn: "55",
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
      <div id="approval-page" className="h-100 mx-5 ">
        <div className="container-fluid my-5 ">
          <div className="main-head">
            <div className="title fw-bold fs-5 py-4">Media Onboarding</div>
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
                    Media onboarding
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
                  <CTableHeaderCell scope="col">Media Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Media Prefix</CTableHeaderCell>

                  <CTableHeaderCell scope="col">
                    Storage Condition{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">UOM </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Mode Of Preparation{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>

                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.MediaName.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.MediaName}
                      </CTableDataCell>

                      <CTableDataCell>{item.MediaPrefix}</CTableDataCell>
                      <CTableDataCell>{item.StorageCondition}</CTableDataCell>
                      <CTableDataCell>{item.UOM}</CTableDataCell>
                      <CTableDataCell>{item.ModeOfPreparation}</CTableDataCell>
                      <CTableDataCell>{item.AddedOn}</CTableDataCell>

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
        <CModalHeader>
          <CModalTitle>Add Media Onboarding</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new mediaOnboarding</p>
          {/* <h3>Registration Initiation</h3> */}
          <CFormSelect
            type="text"
            label="Media Name
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Media Prefix
            "
            placeholder=""
          />

          <CFormInput type="text" label="Storage Condition" placeholder="" />

          <CFormInput type="text" label="UOM" placeholder="" />
          <CForm>
            <CFormLabel>Mode of Prepration</CFormLabel>
            <div>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="To be Prepared"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Ready Mode"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Refrence Document if Any"
            placeholder="choose file"
          />
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

export default MediaOnboarding;
