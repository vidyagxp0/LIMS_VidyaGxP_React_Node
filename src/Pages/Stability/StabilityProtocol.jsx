import {
  CButton,
  CCol,
  CFormCheck,
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

function StabilityProtocol() {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px", };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };
  const [selectedStatus, setSelectedStatus] = useState("All");
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      product: "Sodium Propyl Paraben IP",
      specificationId: "EUR/SOP-AD-01",
      genericName: "Sodium Propyl Paraben IP",
      sampleType: "Finished Product",
      protocolType: "New",
      protocolId: "001",
      addedOn: "05-may-2024",
      status: "APPROVED"
    },
    {
      id: 2,
      product: "Polycaprolactone New",
      specificationId: "EUR/SOP-AD-02",
      genericName: "Polycaprolactone New",
      sampleType: "Finished Product",
      protocolType: "New",
      protocolId: "002",
      addedOn: "15-may-2024",
      status: "DROPPED"
    },
    {
      id: 3,
      product: "Aspirin USP",
      specificationId: "EUR/SOP-AD-03",
      genericName: "Acetylsalicylic Acid",
      sampleType: "Active Pharmaceutical Ingredient",
      protocolType: "Revised",
      protocolId: "003",
      addedOn: "20-apr-2024",
      status: "INITIATED"
    },
    {
      id: 4,
      product: "Ibuprofen BP",
      specificationId: "EUR/SOP-AD-04",
      genericName: "Ibuprofen",
      sampleType: "Finished Product",
      protocolType: "New",
      protocolId: "004",
      addedOn: "10-may-2024",
      status: "APPROVED"
    },
    {
      id: 5,
      product: "Paracetamol IP",
      specificationId: "EUR/SOP-AD-05",
      genericName: "Acetaminophen",
      sampleType: "Finished Product",
      protocolType: "Revised",
      protocolId: "005",
      addedOn: "25-apr-2024",
      status: "REJECTED"
    },
    {
      id: 6,
      product: "Metformin HCl IP",
      specificationId: "EUR/SOP-AD-06",
      genericName: "Metformin Hydrochloride",
      sampleType: "Active Pharmaceutical Ingredient",
      protocolType: "New",
      protocolId: "006",
      addedOn: "30-apr-2024",
      status: "INITIATED"
    },
    {
      id: 7,
      product: "Amoxicillin Trihydrate",
      specificationId: "EUR/SOP-AD-07",
      genericName: "Amoxicillin",
      sampleType: "Active Pharmaceutical Ingredient",
      protocolType: "New",
      protocolId: "007",
      addedOn: "01-may-2024",
      status: "APPROVED"
    },
    {
      id: 8,
      product: "Omeprazole IP",
      specificationId: "EUR/SOP-AD-08",
      genericName: "Omeprazole",
      sampleType: "Finished Product",
      protocolType: "Revised",
      protocolId: "008",
      addedOn: "05-may-2024",
      status: "DROPPED"
    },
    {
      id: 9,
      product: "Ciprofloxacin HCl",
      specificationId: "EUR/SOP-AD-09",
      genericName: "Ciprofloxacin Hydrochloride",
      sampleType: "Active Pharmaceutical Ingredient",
      protocolType: "New",
      protocolId: "009",
      addedOn: "12-may-2024",
      status: "APPROVED"
    },
    {
      id: 10,
      product: "Lisinopril BP",
      specificationId: "EUR/SOP-AD-10",
      genericName: "Lisinopril",
      sampleType: "Finished Product",
      protocolType: "New",
      protocolId: "010",
      addedOn: "18-may-2024",
      status: "INITIATED"
    }
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  // const paginatedData = data.slice(startIndex, endIndex);

  // const nextPage = () => {
  //   if (endIndex < data.length) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const nextToLastPage = () => {
  //   setCurrentPage(Math.ceil(data.length / pageSize));
  // };


  // const filterData = () => {
  //   if (selectedStatus === "All") {
  //     return data;
  //   }

  //   return data.filter((item) => item.status === selectedStatus.toUpperCase());
  // };

  // const [search, setSearch] = useState("");
  // console.log(search);
  const nextPage = () => {
    if (endIndex < filterData().length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextToLastPage = () => {
    setCurrentPage(Math.ceil(filterData().length / pageSize));
  };

  const filterData = () => {
    let filtered = data;

    if (selectedStatus !== "All") {
      filtered = filtered.filter((item) => item.status === selectedStatus.toUpperCase());
    }

    if (search) {
      filtered = filtered.filter((item) =>
        item.product.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  };

  const handleDelete = () => {
    setData(data.filter(item => item.id !== deleteId));
    setDeleteModal(false);
    setDeleteId(null);
  };


  return (
    <>
      <div className="h-100 mx-5">
        <div className="container-fluid my-5">
          <div className="main-head">
            <div className="title fw-bold fs-5">Stability Protocol</div>
          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row" style={{ cursor: "pointer" }}>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background:
                        "linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)",

                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("DROPPED")}
                  >
                    <div className="text-light font-bold fs-5">DROPPED</div>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white" }}
                    >
                      {
                        filterData().filter((item) => item.status === "DROPPED")
                          .length
                      }
                    </div>
                  </button>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background:
                        "linear-gradient(25deg, #13517a 6% , #2A5298 50%)",
                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("INITIATED")}
                  >
                    <div className="text-light font-bold fs-5">INITIATED</div>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white" }}
                    >
                      {
                        filterData().filter((item) => item.status === "INITIATED")
                          .length
                      }
                    </div>
                  </button>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background:
                        "linear-gradient(25deg, orange , #f7e05f )",

                      textAlign: "left",
                      boxShadow: "0px 10px 20px  black !important",
                    }}
                    onClick={() => setSelectedStatus("REINITIATED")}
                  >
                    <div className="text-light font-bold fs-5">REINITIATED</div>

                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white" }}
                    >
                      {
                        filterData().filter(
                          (item) => item.status === "REINITIATED"
                        ).length
                      }
                    </div>
                  </button>
                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background:
                        "linear-gradient(27deg, green , #0fd850  )",
                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("APPROVED")}
                  >
                    <butto className="text-light font-bold fs-5">APPROVED</butto>
                    <div
                      className="count fs-1 text-light fw-bolder"
                      style={{ color: "white", textAlign: "left" }}
                    >
                      {
                        filterData().filter((item) => item.status === "APPROVED")
                          .length
                      }
                    </div>
                  </button>

                  <button
                    className="col shadow p-3 m-3 rounded"
                    style={{
                      background:
                        "linear-gradient(27deg ,red, #FF719A)",
                      textAlign: "left",
                    }}
                    onClick={() => setSelectedStatus("REJECTED")}
                  >
                    <div className="text-light font-bold fs-5">REJECTED</div>
                    <div className="count fs-1 text-light fw-bolder">
                      {
                        filterData().filter((item) => item.status === "REJECTED")
                          .length
                      }
                    </div>
                  </button>
                </div>
              </div>
            </div>
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
                  <CButton
                    color="primary"
                    onClick={() => setAddModal(true)}
                  >
                    Add Protocol
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className=" rounded   bg-white" style={{ border: "2px solid gray" }}>
            <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">
                    Product/Material
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">
                    Specification ID
                  </CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Generic Name</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Sample Type</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Protocol Type</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Protocol Id</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Added On</CTableHeaderCell>

                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {filterData().slice(startIndex, endIndex).map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{item.product}</CTableDataCell>
                    <CTableDataCell>{item.specificationId}</CTableDataCell>
                    <CTableDataCell>{item.genericName}</CTableDataCell>
                    <CTableDataCell>{item.sampleType}</CTableDataCell>
                    <CTableDataCell>{item.protocolType}</CTableDataCell>
                    <CTableDataCell>{item.protocolId}</CTableDataCell>
                    <CTableDataCell>{item.addedOn}</CTableDataCell>
                    <CTableDataCell className="">
                      <button
                        className=" btn py-2 px-3 small rounded fw-bold"
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
                      </button>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to="/stability/stabilityProtocolDetails">
                          <FontAwesomeIcon icon={faEye} />
                        </Link>

                        <div className="cursor-pointer" onClick={() => setDeleteModal(true)} >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="pagination">
              <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                &lt;&lt;
              </button>
              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
              <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                &gt;&gt;
              </button>
            </div>
            <button className="btn btn-next" onClick={nextToLastPage}>
              Next <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
    </>
  );
}


const StatusModal = (_props) => {
  const [conditions, setConditions] = useState([]);

  const handleAddConditions = () => {
    const numberOfConditions = parseInt(document.getElementById('numberOfConditions').value);
    if (!isNaN(numberOfConditions) && numberOfConditions > 0) {
      const newConditions = Array.from({ length: numberOfConditions }, (_, index) => ({
        id: index + 1,
      }));
      setConditions(newConditions);
    }
  };

  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Protocol</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
          className="mb-3"
            type="text"
            label="Specification ID"
            placeholder="Select..."
            options={[
              "",
              { label: "HCL10132%" },
              { label: "HOS234" },
              { label: "CHPOIL001" },
              { label: "rest0001" },
            ]}
          />
          <CFormInput
          className="mb-3"
            type="text"
            label="Product"
            placeholder="testamine"
            disabled
          />
          <CFormInput
          className="mb-3"
            type="text"
            label="Generic Name"
            placeholder="Testamine"
            disabled
          />
          <CFormSelect
          className="mb-3"
            type="text"
            
            label="Sample Type"
            placeholder="Select Sample Type"
            options={[
              "Select Sample Type",
              { label: "HCL" },
              { label: "Hydrochloric Acid" },
              { label: "Petrochemical" },
              { label: "Initiated Product" },
            ]}
          />
          <label className="mb-3">Protocol Type</label>
          <CFormCheck
          className="mb-3"
            type="radio"
            id="protocolTypeNew"
            name="protocolType"
            label="New"
          />
          <CFormCheck
            type="radio"
            id="protocolTypeExisting"
            name="protocolType"
            label="Existing"
          />
          <CFormInput
          className="mb-3"
            type="text"
            label="Protocol Id"
            placeholder="Protocol Id"
          />
          <CFormInput
            type="text"
            label="Sample Login Template"
            placeholder="Select..."
            options={[
              "Select Sample Type",
              { label: "ARZ Temp" },
              { label: "AAT" },
            ]}
          />
          <CFormInput type="date" label="Manufacturing Date" placeholder=" " />

          <label>DateFormat</label>
          <CFormCheck
            type="radio"
            id="DateFormatShort"
            name="DateFormat"
            label="Short Date"
          />
          <CFormCheck
            type="radio"
            id="DateFormatLong"
            name="DateFormat"
            label="Long Date"
          />

          <CFormInput type="text" label="Sample By" placeholder="Sample By" />
          <CFormInput
            type="text"
            label="Storage Condition UOM"
            placeholder="Storage Condition UOM"
          />
          <label>Define Charging Start Date</label>
          <CFormCheck
            type="radio"
            id="DateFormatNow"
            name="ChangingDate"
            label="Now"
          />
          <CFormCheck
            type="radio"
            id="DateFormatLater"
            name="ChangingDate"
            label="Later"
          />

          <CFormInput type="date" label="Starting Date" placeholder="" />

          <label>Initial Testing Required</label>
          <CFormCheck
            type="radio"
            id="TestingRequiredYes"
            name="TestingRequired"
            label="Yes"
          />
          <CFormCheck
            type="radio"
            id="TestingRequiredNo"
            name="TestingRequired"
            label="No"
          />

          <CFormInput className="mb-3" type="file" label="Certificates If Any" placeholder=" " />

          <CRow>
            <CCol sm={10}>
              <CFormInput 
              className="mb-3"
                type="text"
                id="numberOfConditions"
                label="Number Of Storage Conditions"
                placeholder="Number Of Storage Conditions"
              />
            </CCol>

            <CCol sm={2}>
              <CButton className="bg-info text-white mt-4" onClick={handleAddConditions}>Add</CButton>
            </CCol>

          </CRow>
          <CFormSelect
            className="mb-3"
            type="text"
            label="Test Plan / Revision No."
            placeholder="Select..."
            options={[
              "Select Sample Type",
              { label: "Hydraulic Oil" },
              { label: "CHP Oil" },
              { label: "Sacubitril" },
              { label: "Bio Burden Test For PM" },
            ]}
          />

          {conditions.map((condition, index) => (
            <div className="each-condition-data mt-4" key={condition.id}>
              <h6>Stability Storage Condition-{condition.id}</h6>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.storage_condition`}>Storage Condition</label>
                <div className="form-control-wrap">
                  <select className="form-control form-select" id={`conditions_data.${index}.storage_condition`} name={`conditions_data.${index}.storage_condition`} placeholder="Storage condition Uom">
                    <option value="">Select</option>
                    <option value="6651c0dfa9d2755d7705ce05">10 to 25</option>
                    <option value="664f1373a9d2755d770568b4">-20 ± 5°c</option>
                    <option value="664f06cea9d2755d77055787">25 ± 2°c 60 ± 5% rh</option>
                    <option value="664f06aaa9d2755d77055748">30 ± 2°c  65 ± 5% rh</option>
                    <option value="664f02f0a9d2755d77055627">40 ± 2°c and 75 ± 5% rh</option>
                    <option value="664f02c3a9d2755d7705561b">40 ± 2°c</option>
                    <option value="664c24cdc105e11a716a938a">15℃</option>
                    <option value="65cb1132de5392629a1b59b6">℉</option>
                    <option value="6527cb451d0d0c3cb2ddceac">30℃</option>
                    <option value="65262853842e2542b312a465">42℉</option>
                    <option value="652580fc842e2542b3129c77">32℃</option>
                    <option value="651fd1c204e9976b7c625a57">24℉</option>
                    <option value="64eb669f4b131677f6614266">25℃ ± 2</option>
                    <option value="64e9fbba4b131677f66140d1">25℃</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.no_of_pulls`}>No of Pulls</label>
                <div className="form-control-wrap">
                  <div className="d-flex">
                    <input type="number" className="form-control" id={`conditions_data.${index}.no_of_pulls`} name={`conditions_data.${index}.no_of_pulls`} placeholder="No" value="1" />
                    <button className="btn btn-primary" style={{ height: "36px", marginLeft: "8px" }}>Add</button>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row d-flex flex-nowrap">
                  <div style={{ width: "400px" }}>
                    <label className="form-label mt-3" htmlFor={`conditions_data.${index}.station`}>Station</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.additional_quantity`}>Additional Quantity</label>
                <div className="form-control-wrap">
                  <input type="number" className="form-control" id={`conditions_data.${index}.additional_quantity`} name={`conditions_data.${index}.additional_quantity`} placeholder="Additional Quantity" value="0" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`conditions_data.${index}.comments`}>Comments</label>
                <div className="form-control-wrap">
                  <input type="text" className="form-control" id={`conditions_data.${index}.comments`} name={`conditions_data.${index}.comments`} placeholder="comments" value="" />
                </div>
              </div>
            </div>
          ))}
          <CFormInput
            type="text"
            label="Instructions"
            placeholder="Instructions"
          />
          <CFormInput
            type="text"
            label="Package Configuration"
            placeholder="Package Configuration"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add Protocol</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};






const DeleteModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Delete Instrument Registration
        </CModalTitle>
      </CModalHeader>
      <div
        className="modal-body"
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          lineHeight: "1.5",
          marginBottom: "1rem",
          columnGap: "0px",
          border: "0px !important",
        }}
      >
        <p>Are you sure you want to delete this { }?</p>
      </div>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={_props.closeModal}
          style={{
            marginRight: "0.5rem",
            fontWeight: "500",
          }}
        >
          Cancel
        </CButton>
        <CButton
          color="danger"
          onClick={_props.handleDelete}
          style={{
            fontWeight: "500",
            color: "white",
          }}
        >
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default StabilityProtocol;
