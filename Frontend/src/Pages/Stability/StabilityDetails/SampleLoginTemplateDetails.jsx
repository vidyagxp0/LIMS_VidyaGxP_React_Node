import { CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableRow } from "@coreui/react"
import { useState } from "react"


function SampleLoginTemplateDetails() {
    const [statusModal, setStatusModal] = useState(false)
     
    const initialData = [
     {
       checkbox: false,
       sno: 1,
       SAMPLETYPE: "CSR001",
       PRODUCT_MATERIAL: "product 1",
       ARNO: "2024-01-01",
       GENERICNAME: "2024-01-01",
       SPECIFICATIONCODE: "2024-01-01",
       ATTACHMENT: "DROPPED",
       STATUS: "DROPPED",
       ACTIONS: "DROPPED",
     },
     {
          checkbox: false,
          sno: 2,
          SAMPLETYPE: "CSR001",
          PRODUCT_MATERIAL: "product 1",
          ARNO: "2024-01-01",
          GENERICNAME: "2024-01-01",
          SPECIFICATIONCODE: "2024-01-01",
          ATTACHMENT: "DROPPED",
          STATUS: "DROPPED",
          ACTIONS: "DROPPED",
        },
        {
          checkbox: false,
          sno: 3,
          SAMPLETYPE: "CSR001",
          PRODUCT_MATERIAL: "product 1",
          ARNO: "2024-01-01",
          GENERICNAME: "2024-01-01",
          SPECIFICATIONCODE: "2024-01-01",
          ATTACHMENT: "DROPPED",
          STATUS: "DROPPED",
          ACTIONS: "DROPPED",
        },
        {
             checkbox: false,
             sno: 4,
             SAMPLETYPE: "CSR001",
             PRODUCT_MATERIAL: "product 1",
             ARNO: "2024-01-01",
             GENERICNAME: "2024-01-01",
             SPECIFICATIONCODE: "2024-01-01",
             ATTACHMENT: "DROPPED",
             STATUS: "DROPPED",
             ACTIONS: "DROPPED",
           },
           
   ];
        const handleDelete = (item) => {
        const newData = data.filter((d) => d !== item);
        setData(newData);
        console.log("Deleted item:", item);
   };
       const handleCheckboxChange = (index) => {
       const newData = [...data];
       newData[index].checkbox = !newData[        index].checkbox;
       setData(newData);
   };
   
     return (
          <>
               <div id="sampleLogin-page" className="py-3 bg-light h-100">
                    <div className="container-fluid">
                         <div className="block mb-3">
                              <div className="main-head d-flex justify-content-between align-items-center">
                                   <h4 className="fw-bold mb-4 mt-3">Sample Login Tempalte Details</h4>
                                   <CButton color="dark" onClick={() => setStatusModal(true)}>Update Status</CButton>

                              </div>
                              <div className="bg-white px-5 py-3">
                                   <CTable align="middle" className="mb-0" small bordered>
                                        <CTableBody>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">A.R. No.</CTableDataCell>
                                                  <CTableDataCell>SLT-022024-0000003</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Template title</CTableDataCell>
                                                  <CTableDataCell>testing</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Auto Deduction Required</CTableDataCell>
                                                  <CTableDataCell>True</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Batch No.</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Batch Size</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Batch Type</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Chemicals name of Impurities</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Customer</CTableDataCell>
                                                  <CTableDataCell>True</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Details of Packing Components</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Dosage Form</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Expiry Date</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Label Claim</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Manufactured At</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Recommended Reference Lot</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Manufacturing Date</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Mother Protocol Id</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">No. of APIS</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Pack Size</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Packed at</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Packing Type</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Proposed Market</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Purpose Of Study</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Reference Protocol No</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sample Location</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Sample Orientation</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Source of API</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>                                       

                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Study Location</CTableDataCell>
                                                  <CTableDataCell>False</CTableDataCell>
                                             </CTableRow>
                                             <CTableRow>
                                                  <CTableDataCell className="text-light bg-info">Status</CTableDataCell>
                                                  <CTableDataCell>INITIATED</CTableDataCell>
                                             </CTableRow>
                                             
                                        </CTableBody>
                                   </CTable>
                                   
                              </div>
                         </div>
                         <div className="block mb-3"> 
                              <div className="main-head">
                                   <h4 className="fw-bold mb-4 mt-3">History</h4>
                              </div>
                              <div className="bg-white px-5 py-3">
                                   <div>No History Found</div>
                              </div>
                         </div>
                    </div>
               </div>

               {statusModal && <StatusModal visible={statusModal} closeModal={() => setStatusModal(false)} />}
          </>
     )
}
const StatusModal = (_props) => {
    return (
         <>

              <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                   <CModalHeader>
                        <CModalTitle>Update Status</CModalTitle>
                   </CModalHeader>
                   <CModalBody>
                        <CFormSelect
                             label="Status"
                             text="Status is required."
                             options={[
                                  'Update Status',
                                  { label: 'Approve', value: 'approve' },
                                  { label: 'Drop', value: 'drop' },
                                  { label: 'Reject', value: 'reject' }
                             ]}
                        />
                   </CModalBody>
                   <CModalFooter>
                        <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                        <CButton color="dark">Update</CButton>
                   </CModalFooter>
              </CModal>
              <Table
                 columns={columns}
                 data={filteredData}
                 onDelete={handleDelete}
                 onCheckboxChange={handleCheckboxChange}
                 onViewDetails={onViewDetails}
                 openEditModal={openEditModal}
                />
     
              {isModalOpen && (
                <StatusModal
                  visible={isModalOpen}
                  closeModal={closeModal}
                 onAdd={addNewStorageCondition}
               />
             )}
                 {isModalsOpen && (
                 <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
              )}
                {editModalData && (
                <EditModal
                visible={Boolean(editModalData)}
                closeModal={closeEditModal}
                 data={editModalData}
                onSave={handleEditSave}
                />
             )}
    
             
         </>
    )
}

export default SampleLoginTemplateDetails
