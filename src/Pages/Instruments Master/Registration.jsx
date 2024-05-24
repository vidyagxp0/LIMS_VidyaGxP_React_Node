import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Registration() {
     const [addModal, setAddModal] = useState(false)
     const [deleteModal, setDeleteModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">
                    
                         <div className="main-head">
                    <div className="title fw-bold fs-5">Instrument Registration</div>

                              
                         </div>
                         <div className="d-flex gap-4">
          
          
        </div>
                         <div>
                              <CRow className="mb-3">
                              <CCol sm={3}>
                                        <CFormSelect
                                             options={[
                                                'Select Status',                                            
                                                { label: 'Active' },
                                                { label: 'Inactive' }                                
                                           ]}
                                        />
                                   </CCol>
                                   <CCol sm={3}>
                                        <CFormSelect
                                             options={[
                                                'Select Instrument Category',                                            
                                                { label: 'Chromatography' },
                                                { label: 'weighing balance' }                                                
                                           ]}
                                        />
                                   </CCol>
                                   <CCol sm={3}></CCol>
                                   
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Instrument Registration</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className="bg-white mt-5">
                              <CTable align="middle" responsive className=" shadow">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Instrument ID</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Instrument</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Made</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Model</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Manu no.</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Installed At</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Expire On</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Calibration Status</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        <CTableRow>
                                             <CTableDataCell>1</CTableDataCell>
                                             <CTableDataCell>weighing balance</CTableDataCell>
                                             <CTableDataCell>EN33/23</CTableDataCell>
                                             <CTableDataCell>Weighing Balance 2</CTableDataCell>
                                             <CTableDataCell>Shimadu</CTableDataCell>
                                             <CTableDataCell>Ser33</CTableDataCell>
                                             <CTableDataCell>adf3434</CTableDataCell>
                                             <CTableDataCell>Lab 1</CTableDataCell>
                                             <CTableDataCell>Nov 17th 24</CTableDataCell>
                                             <CTableDataCell className="">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                             </CTableDataCell>
                                             <CTableDataCell className="">
                                                  <div className="py-2 px-3 small rounded fw-bold " style={badgeStyle}>Active</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                  <Link to="/instrumentMaster/registrationDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
                                             </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                             
                                             <CTableDataCell>2</CTableDataCell>
                                             <CTableDataCell>chromatography</CTableDataCell>
                                             <CTableDataCell>EQI/ENG/163</CTableDataCell>
                                             <CTableDataCell>Pressure Gauge</CTableDataCell>
                                             <CTableDataCell>Testo</CTableDataCell>
                                             <CTableDataCell>625</CTableDataCell>
                                             <CTableDataCell>2320474</CTableDataCell>
                                             <CTableDataCell>Plant1</CTableDataCell>
                                             <CTableDataCell>Jan 5th 24</CTableDataCell>
                                             <CTableDataCell className="">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                             </CTableDataCell>
                                             <CTableDataCell className="">
                                                  <div className="py-2 px-3 small rounded fw-bold bg-danger " >Pending</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                  <Link to="/instrumentMaster/registrationDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
                                             </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                             
                                             <CTableDataCell>3</CTableDataCell>
                                             <CTableDataCell>weighing balance</CTableDataCell>
                                             <CTableDataCell>ARZPH001</CTableDataCell>
                                             <CTableDataCell>ARZ Ph Meter</CTableDataCell>
                                             <CTableDataCell>PHMKE23</CTableDataCell>
                                             <CTableDataCell>MKPJ32</CTableDataCell>
                                             <CTableDataCell>MS4543</CTableDataCell>
                                             <CTableDataCell>Plant A</CTableDataCell>
                                             <CTableDataCell>09-may-2024</CTableDataCell>
                                             <CTableDataCell className="">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Active</div>
                                             </CTableDataCell>
                                             <CTableDataCell className="">
                                                  <div className="py-2 px-3 small rounded fw-bold " style={badgeStyle}>Active</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/instrumentMaster/registrationDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div></div>
                                             </CTableDataCell>
                                        </CTableRow>
     
                                   </CTableBody>
                              </CTable>
                         </div>
                <div className="pagination">

                <div className="pagination">
                    <div className='mr-5'>
                        <button className="btn  mr-2" >&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'> 1 </button>
                    </div>
                    <div>
                        <button className="btn mr-2" >&gt;&gt;</button>

                    </div>

                </div>
                <button className="btn btn-next" > Next <FaArrowRight /></button>
            </div>
                    </div>
               </div>


               {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
               {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
          </>
     )
}

const StatusModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                    <CModalHeader>
                         <CModalTitle>Add Instrument</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormSelect
                              type="text"
                              label="Instrument Category"
                              placeholder="Select... "                        
                              options={[
                                   " Select",
                                   { label: "chromatography" },
                                   { label: "weighing balance" }                                  
                                   
                                 ]}
                         />
                         <CFormInput
                              type="text"
                              label="Instrument Category Description"
                              placeholder="chroma "
                              disabled
                         />
                         
                         <CFormInput
                              type="text"
                              label="Instrument"
                              placeholder=" Instrument"
                         />
                         <CFormInput
                              type="text"
                              label="Instrument ID"
                              placeholder="Instrument ID "
                         />
                         <CFormInput
                              type="text"
                              label="Make"
                              placeholder=" Make"
                         />
                         <CFormInput
                              type="text"
                              label="Model"
                              placeholder="Model "
                         />
                         <CButton className="bg-info text-white d-flex ">Add Fields</CButton>
                         <CFormInput
                              type="text"
                              label="Manufacturer's Serial No."
                              placeholder=" Manufacturer's Serial No."
                         />
                         <CFormInput
                              type="text"
                              label="Capacity Size"
                              placeholder="Capacity Size "
                         />
                         <CFormInput
                              type="text"
                              label="Equip No."
                              placeholder=" Equip No."
                         />
                         <CFormInput
                              type="text"
                              label="Installed At"
                              placeholder="Installed At"
                         />
                         <CFormInput
                              type="date"
                              label="Installed On"
                              placeholder=" "
                         />
                         <CFormInput
                              type="date"
                              label="Warranty Expires On"
                              placeholder=" "
                         />
                         <CFormInput
                              type="text"
                              label="Supplied By"
                              placeholder="Supplied By"
                         />

                         <label>Contains module ?</label>
                         <CFormCheck
                         type="radio"
                         id="ContainsModuleYes"
                         name="ContainsModule"
                         label="Yes"
                         />
                         <CFormCheck
                         type="radio"
                         id="ContainsModuleNo"
                         name="ContainsModule"
                         label="No"
                         />



                         <CFormInput
                              type="text"
                              label="SOP No."
                              placeholder="SOP Number"
                         />
                         <CFormInput
                              type="text"
                              label="Software"
                              placeholder="Software"
                         />

                         <CFormTextarea
                              type="text"
                              label="Description"
                              placeholder=""
                         />
                         
                    </CModalBody>
                    <CModalFooter>
                         <CButton className="bg-info text-white">Submit</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

const DeleteModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                    <CModalHeader>
                         <CModalTitle>Delete Instrument Registration</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                         <p>Do you want to delete this Instrument Registration <code>weighing balance</code>?</p>

                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                         <CButton className="bg-info text-white">Submit</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default Registration
