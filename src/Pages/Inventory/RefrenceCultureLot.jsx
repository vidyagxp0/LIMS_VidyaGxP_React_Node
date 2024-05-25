import {
  CButton,
  CCol,
  // CFormCheck,
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
import { Link } from "react-router-dom";

function CultureTemplateConfiguration() {
  const [addModal, setAddModal] = useState(false);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = {
    background: " #2A5298",
    color: "white",
    width: "110px",
  };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [data, setData] = useState([
    {
      id: 1,
      ReferenceLotCode	: "55",
      ReferenceCulture: "Infra",
      ReceivedQuantity: "55",
      BatchNo: "55",
      CatalogueNo: "55",
      ValidUpto: "55",

      status: "INITIATED",
    },
    {
      id: 2,
      ReferenceLotCode: "55",
      ReferenceCulture: "Infra",
      ReceivedQuantity: "55",
      BatchNo: "55",
      CatalogueNo: "55",
      ValidUpto: "55",
      status: "INITIATED",
    },

    {
      id: 3,
      ReferenceLotCode: "55",
      ReferenceCulture: "Infra",
      ReceivedQuantity: "55",
      BatchNo: "55",
      CatalogueNo: "55",
      ValidUpto: "55",
      status: "REINITIATED",
    },
    {
      id: 4,
      ReferenceLotCode: "55",
      ReferenceCulture: "Infra",
      ReceivedQuantity: "55",
      BatchNo: "55",
      CatalogueNo: "55",
      ValidUpto: "55",
      status: "APPROVED",
    },
    {
      id: 5,
      ReferenceLotCode: "55",
      ReferenceCulture: "Infra",
      ReceivedQuantity: "55",
      BatchNo: "55",
      CatalogueNo: "55",
      ValidUpto: "55",
      status: "APPROVED",
    },

    {
      id: 6,
      ReferenceLotCode: "55",
      ReferenceCulture: "Infra",
      ReceivedQuantity: "55",
      BatchNo: "55",
      CatalogueNo: "55",
      ValidUpto: "55",
      status: "APPROVED",
    },
  ]);
  const filterData = () => {
    if (selectedStatus === "All") {
      return data;
    }

    return data.filter((item) => item.status === selectedStatus.toUpperCase());
  };

  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Reference Culture Lot</div>
          </div>

          <div>
            <CRow className="mb-3">
              <CCol sm={4}>
                <CFormInput
                  style={{ border: "2px solid gray" }}
                  type="email"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </CCol>

              <CCol sm={3}>
                <CFormSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  style={{ border: "2px solid gray" }}
                >
                  <option value="All">All</option>
                  <option value="Initiated">Initiated</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Reinitiated">Reinitiated</option>
                  <option value="Dropped">Dropped</option>
                </CFormSelect>
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>
                    Add Culture Lot
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
                  <CTableHeaderCell scope="col">
                    Reference Lot Code{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Reference Culture
                  </CTableHeaderCell>

                  <CTableHeaderCell scope="col">
                    Received Quantity
                  </CTableHeaderCell>

                  <CTableHeaderCell scope="col">Batch No. </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Catalogue No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Valid Upto</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filterData()
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.ReferenceLotCode.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="text-center">
                        <input type="checkbox" />
                      </CTableHeaderCell>
                      <CTableDataCell>{item.id}</CTableDataCell>
                      <CTableDataCell key={item.id}>
                        {item.ReferenceLotCode}
                      </CTableDataCell>

                      <CTableDataCell>{item.ReferenceCulture}</CTableDataCell>
                      <CTableDataCell>{item.ReceivedQuantity}</CTableDataCell>
                      <CTableDataCell>{item.BatchNo}</CTableDataCell>
                      <CTableDataCell>{item.CatalogueNo}</CTableDataCell>
                      <CTableDataCell>{item.ValidUpto}</CTableDataCell>

                      <CTableDataCell className="d-flex">
                        <div
                          className="py-2 px-3 small rounded fw-bold"
                          style={
                            item.status === "INITIATED"
                              ? badgeStyle2
                              : item.status === "APPROVED"
                              ? badgeStyle3
                              : item.status === "REJECTED"
                              ? badgeStyle4
                              : item.status === "REINITIATED"
                              ? badgeStyle5
                              : item.status === "DROPPED"
                              ? badgeStyle6
                              : item.status === "ALL"
                              ? badgeStyle
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
          <CModalTitle>Add Culture Lot</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Template</p>
          <h3>Registration Initiation</h3>
          <CFormSelect
            type="text"
            label="Reference Culture Lot Code



            "
            placeholder=" "
          />
          <CFormInput type="text" label="Reference Culture" placeholder="" />
          <CFormInput type="text" label="Received Quantity" placeholder="" />
          <CFormInput type="text" label="Received By" placeholder="" />
          <CFormInput type="date" label="Received On" placeholder="" />{" "}
          <CFormInput
            type="date"
            label="Valid Upto
          "
            placeholder=""
          />
          <CFormInput type="text" label="Delivery Receipt No" placeholder="" />
          <CFormInput type="text" label="Supplied By" placeholder="" />
          <CFormInput
            type="text"
            label="Certificate No
            "
            placeholder=""
          />
          <CFormInput type="text" label="Certificate" placeholder="" />
          <CFormInput
            type="text"
            label="Batch No. On Catalogue
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Catalogue No.
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Packing Description


            "
            placeholder=""
          />
          <CFormSelect
            type="text"
            label="Stored At

            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Comments
            "
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Culture Lot
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CultureTemplateConfiguration;
