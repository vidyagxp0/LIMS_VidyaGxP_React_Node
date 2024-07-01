// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add COA Template</CModalTitle>
//         </CModalHeader>

//         <p>Add information and Add Coa Template</p>
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Configuration type

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Unique Code

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Report Title

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Format No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div style={{ background: "lightgray", padding: "5px auto " }}>
//               <p>Header</p>
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Rows
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Columns

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div style={{ background: "lightgray", padding: "5px auto " }}>
//               <p>Footer</p>
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Rows
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Columns

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <CContainer>
//               <CRow className="my-3">
//                 <CCol xs="auto">
//                   <CFormLabel
//                     htmlFor="approved_by"
//                     className="d-flex align-items-center"
//                     style={{
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       padding: "8px",
//                       background: "#F5F6FA",
//                     }}
//                   >
//                     Approved By
//                   </CFormLabel>
//                 </CCol>
//                 <CCol>
//                   <CFormSelect id="approved_by">
//                     <option value="approved_by">approved_by</option>
//                   </CFormSelect>
//                 </CCol>
//               </CRow>
//               <CRow className="my-3">
//                 <CCol xs="auto">
//                   <CFormLabel
//                     htmlFor="reviewed_by"
//                     className="d-flex align-items-center"
//                     style={{
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       padding: "8px",
//                       background: "#F5F6FA",
//                     }}
//                   >
//                     Reviewed By
//                   </CFormLabel>
//                 </CCol>
//                 <CCol>
//                   <CFormSelect id="reviewed_by">
//                     <option value="reviewed_by">reviewed_by</option>
//                   </CFormSelect>
//                 </CCol>
//               </CRow>
//               <CRow className="my-3">
//                 <CCol xs="auto">
//                   <CFormLabel
//                     htmlFor="checked_by"
//                     className="d-flex align-items-center"
//                     style={{
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       padding: "8px",
//                       background: "#F5F6FA",
//                     }}
//                   >
//                     Checked By
//                   </CFormLabel>
//                 </CCol>
//                 <CCol>
//                   <CFormSelect id="checked_by">
//                     <option value="checked_by">checked_by</option>
//                   </CFormSelect>
//                 </CCol>
//               </CRow>
//             </CContainer>
//           </CForm>
//         </div>

//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Add Monitoring Details</CModalTitle>
//         </CModalHeader>
//         {/* <p>Add information and add new Location</p> */}
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Object Name

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Unique Code

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Date Of Monitoring

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Monitored / Sampled By

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Activity Type
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Exposure Start Time

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Exposure End Time

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Monitoring Comments

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Product Name

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Batch No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Report No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Charge No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Membrane Holder Sterilized On

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Membrane Holder ID

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Gelatine Membrane Lot No.

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Sterlized On

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Use Before

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>

//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Location</CModalTitle>
//         </CModalHeader>
//         <p>Add information and add new Location</p>
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Facility
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Plan
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>

//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Location
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Plant Prefix/ Facility Prefix / Prefix

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <p>Description</p>
//             <textarea rows="5" name="" id=""></textarea>
//             <CForm>
//               <CFormLabel>Location Type Id</CFormLabel>
//               <div>
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="acceptRadio"
//                   label="System"
//                   value="accept"
//                 />
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="rejectRadio"
//                   label="Undefined"
//                   value="reject"
//                 />
//               </div>
//             </CForm>
//           </CForm>
//         </div>
//         <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="No. of Sampling Points"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//               <CButton color="info">Add</CButton>
//             </div>

//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Facility</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Plant
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Facility
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             {/* <CForm>
//               <CFormLabel>Types of Frequency</CFormLabel>
//               <div>
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="acceptRadio"
//                   label="Daily"
//                   value="accept"
//                 />
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="rejectRadio"
//                   label="Set Frequency"
//                   value="reject"
//                 />
//               </div>
//             </CForm> */}
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Prefix
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Termination</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and register new Termination</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Schedule Code
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Schdule Time
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             {/* <CForm>
//               <CFormLabel>Types of Frequency</CFormLabel>
//               <div>
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="acceptRadio"
//                   label="Daily"
//                   value="accept"
//                 />
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="rejectRadio"
//                   label="Set Frequency"
//                   value="reject"
//                 />
//               </div>
//             </CForm> */}
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Schdule Type
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Reasons for Termination

//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Acknowledgement</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and register new Acknowledgement</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Schedule Code
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Schdule Time
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             {/* <CForm>
//               <CFormLabel>Types of Frequency</CFormLabel>
//               <div>
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="acceptRadio"
//                   label="Daily"
//                   value="accept"
//                 />
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="rejectRadio"
//                   label="Set Frequency"
//                   value="reject"
//                 />
//               </div>
//             </CForm> */}
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Schdule Type
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//               <CFormSelect label="Select"></CFormSelect>
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Sample Collected By(System Users)
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Sample Collected By(Other Users)
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Unschedule Registration</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and register new UnSchedule</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Schedule Code
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Description"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <CForm>
//             <CFormLabel>Types of Frequency</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="Daily"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="Set Frequency"
//                 value="reject"
//               />
//             </div>
//           </CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Frequency"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//               <CFormSelect label="Select"></CFormSelect>
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Start Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="End Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>{" "}
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Test Plan"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <h5>Sampling Points Data</h5>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Proccesing System"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Schedule Registration</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and register new Schedule</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Schedule Code
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Description"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <CForm>
//             <CFormLabel>Types of Frequency</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="Daily"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="Set Frequency"
//                 value="reject"
//               />
//             </div>
//           </CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Frequency"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Start Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="End Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>{" "}
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Test Plan"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <h5>Sampling Points Data</h5>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Proccesing System"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Processing System</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and register new Processing System</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormSelect
//                 type="text"
//                 label="Category"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Processing System

//               "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Unique Code
//               "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Description"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="No. of Sample Area(s)
//                 "
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//               <CButton color="info">Add</CButton>
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//       <CModalHeader className="p-3">
//         <CModalTitle>Add Sample Area</CModalTitle>
//       </CModalHeader>
//       <div className="modal-body p-4">
//         <p>Add information and register new Sample Area

// </p>
//         <CForm>
//           <div className="mb-3">
//             <CFormSelect
//               type="text"
//               label="Category"
//               placeholder=""
//               className="custom-placeholder"
//             />
//           </div>
//           <div className="mb-3">
//             <CFormInput
//               type="text"
//               label="Sample Area
//               "
//               placeholder=""
//               className="custom-placeholder"
//             />
//           </div>
//           <div className="mb-3">
//             <CFormInput
//               type="text"
//               label="Unique Code
//               "
//               placeholder=""
//               className="custom-placeholder"
//             />
//           </div>
//           <div className="mb-3">
//             <CFormInput
//               type="text"
//               label="Description"
//               placeholder=""
//               className="custom-placeholder"
//             />
//           </div>

//         </CForm>
//       </div>
//       <CModalFooter className="p-3">
//         <CButton color="light" onClick={_props.closeModal}>
//           Cancel
//         </CButton>
//         <CButton style={{ background: "#0F93C3", color: "white" }}>
//           Submit
//         </CButton>
//       </CModalFooter>
//     </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader className="p-3">
//           <CModalTitle>Add Media Lot Usage</CModalTitle>
//         </CModalHeader>
//         <div className="modal-body p-4">
//           <p>Add information and add new Media Lot Usage</p>
//           <CForm>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Media Lot No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Media Name"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Batch No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Usage Type"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Container No."
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Mfg. Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Container Expiry Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Lot Expiry Date"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormLabel>Collection Type</CFormLabel>
//               <div>
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="acceptRadio"
//                   label="Manual"
//                   value="accept"
//                   className="me-3"
//                 />
//                 <CFormCheck
//                   type="radio"
//                   name="sampleRadio"
//                   id="rejectRadio"
//                   label="Auto Binding"
//                   value="reject"
//                 />
//               </div>
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Quantity Used"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="date"
//                 label="Used On"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Used By"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <CFormInput
//                 type="text"
//                 label="Used For"
//                 placeholder=""
//                 className="custom-placeholder"
//               />
//             </div>
//             <div className="mb-3">
//               <h6>Comments if Any</h6>
//               <textarea className="form-control" rows="3"></textarea>
//             </div>
//           </CForm>
//         </div>
//         <CModalFooter className="p-3">
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//         size="xl"
//       >
//         <CModalHeader>
//           <CModalTitle size="xl">Add Media Lot</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <table
//             className="table table-bordered"
//             style={{ width: "100%", height: "700px" }}
//           >
//             <thead className="thead-light">
//               <tr>
//                 <th style={{ background: "#0F93C3", color: "white" }}>SNo.</th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                 Media Container No.
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Container Qty
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Container Validity Period Day(s)
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Container Valid Upto
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Lot Valid Upto
//                 </th>
//                 <th style={{ background: "#0F93C3", color: "white" }}>
//                   Select
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>WSI-1020223-000000061</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>WSI-1020223-000000062</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>WSI-1020223-000000063</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>WSI-1020223-000000064</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>WSI-1020223-000000065</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>6</td>
//                 <td>WSI-1020223-000000066</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>18/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>7</td>
//                 <td>WSI-1020223-000000067</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>8</td>
//                 <td>WSI-1020223-000000068</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>9</td>
//                 <td>WSI-1020223-000000069</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>10</td>
//                 <td>WSI-1020223-000000610</td>
//                 <td>10</td>
//                 <td>60</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>19/05/2024 15:08</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Media Lot</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Add information and add new mediaLot</p>
//           {/* <h3>Registration Initiation</h3> */}
//           <CFormSelect
//             type="text"
//             label="Media Name
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Media Prefix
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Storage Condition

// "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Mode Of Preparation

// "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Manufacturer(Code)

//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Batch No.
//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="date"
//             label="Mfg. Date

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="date"
//             label="Exp. Date

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="date"
//             label="Received On

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Certificate

//             "
//             placeholder="Choose file"
//           />

//           <CFormInput
//             type="text"
//             label="Quantity Received

//             "
//             placeholder="in gm."
//           />

//           <CFormInput
//             type="text"
//             label="Usage Type

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Container Validity Period

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Container Starting Number

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="No. of Containers Prepared

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Minimum No. Of Containers for Alert

//             "
//             placeholder=""
//           />

//           {/* <CForm>
//             <CFormLabel>Prepared Media Usage</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="Before Acceptance"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="After Acceptance"
//                 value="reject"
//               />
//             </div>
//           </CForm> */}
//           <h6>Comments</h6>

//           <textarea name="" id=""></textarea>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Media Template Configuration</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Add information and add new Media Configuration Type</p>
//           {/* <h3>Registration Initiation</h3> */}
//           <CFormSelect
//             type="text"
//             label="Media Name
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Media Prefix
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Mode Of Preparation
// "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Sample Login Tempalate for Media Lot Acceptance
// "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Prepared Media Validity Period
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Sample Login Tempalate for Media Preparation"
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Prepared Media Container Types

//           "
//             placeholder=""
//           />
//           <CForm>
//             <CFormLabel>Prepared Media Usage</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="Before Acceptance"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="After Acceptance"
//                 value="reject"
//               />
//             </div>
//           </CForm>
//           <h6>Comments</h6>

//           <textarea name="" id=""></textarea>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Media Onboarding</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Add information and add new mediaOnboarding</p>
//           {/* <h3>Registration Initiation</h3> */}
//           <CFormSelect
//             type="text"
//             label="Media Name
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Media Prefix
//             "
//             placeholder=""
//           />

//           <CFormInput type="text" label="Storage Condition" placeholder="" />

//           <CFormInput type="text" label="UOM" placeholder="" />
//           <CForm>
//             <CFormLabel>Mode of Prepration</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="To be Prepared"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="Ready Mode"
//                 value="reject"
//               />
//             </div>
//           </CForm>
//           <CFormInput
//             type="text"
//             label="Refrence Document if Any"
//             placeholder="choose file"
//           />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Culture Lot Acceptance</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Add information and Add Template</p>
//           <h3>Registration Initiation</h3>
//           <CFormSelect
//             type="text"
//             label="Reference Culture Name"
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Reference Culture Lot Code"
//             placeholder=""
//           />
//           <CForm>
//             <CFormLabel>Sample</CFormLabel>
//             <div>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="Accept"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="Reject"
//                 value="reject"
//               />
//             </div>
//           </CForm>

//           <CFormInput type="text" label="Comments" placeholder="" />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Lot Acceptance
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Culture Lot</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Add information and Add Template</p>
//           <h3>Registration Initiation</h3>
//           <CFormSelect
//             type="text"
//             label="Reference Culture Lot Code

//             "
//             placeholder=" "
//           />
//           <CFormInput type="text" label="Reference Culture" placeholder="" />
//           <CFormInput type="text" label="Received Quantity" placeholder="" />
//           <CFormInput type="text" label="Received By" placeholder="" />
//           <CFormInput type="date" label="Received On" placeholder="" />{" "}
//           <CFormInput
//             type="date"
//             label="Valid Upto
//           "
//             placeholder=""
//           />
//           <CFormInput type="text" label="Delivery Receipt No" placeholder="" />
//           <CFormInput type="text" label="Supplied By" placeholder="" />
//           <CFormInput
//             type="text"
//             label="Certificate No
//             "
//             placeholder=""
//           />
//           <CFormInput type="text" label="Certificate" placeholder="" />
//           <CFormInput
//             type="text"
//             label="Batch No. On Catalogue
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Catalogue No.
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Packing Description

//             "
//             placeholder=""
//           />
//           <CFormSelect
//             type="text"
//             label="Stored At

//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Comments
//             "
//             placeholder=""
//           />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Culture Lot
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Sub Culture Template</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>
//             Add information and Add Template
//           </p>
//           <h3>Registration Initiation</h3>
//           <CFormInput
//             type="text"
//             label="Template Name

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Template Description

//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Unique Code

//             "
//             placeholder=""
//           />
//           <CFormInput type="text" label="No Of Passage's" placeholder="" />
//           <CButton color="info">Add</CButton>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           ></div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Culture Template
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Reference Standard Lot Usage</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>
//             Add information and add new standard usage registration..
//           </p>
//           <CFormInput
//             type="text"
//             label="Ref. Std. Lot. No.
//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Reference Standard Name
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Reference Standard Code
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="date"
//             label="Delivery Receipt Date
// "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Delivery Receipt Number

//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="date"
//             label="Recieved On

//             "
//             placeholder=""
//           />

//           <CFormSelect
//             type="date"
//             label="Valid Upto
// "
//             placeholder=""
//           />

//           <h6>Collection Type</h6>
//           <div style={{ marginBottom: "10px" }}>
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionYes"
//               value="yes"
//               label="Manual"
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionNo"
//               value="no"
//               label="Auto Binding"
//             />
//           </div>

//           <CFormSelect
//             type="text"
//             label="Quantity Used Now
// "
//             placeholder=""
//           />

//           <CFormInput
//             type="date"
//             label="Used On
//             "
//             name="batchNumber"
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             name="receiptNumber"
//             label="Used By
//             "
//             placeholder=""
//           />

//           <h6>Usage For</h6>
//           <div style={{ marginBottom: "10px" }}>
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionYes"
//               value="yes"
//               label="Sample Analysis
//               "
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionNo"
//               value="no"
//               label="Instrument Calibration
//               "
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionMiscellaneous"
//               value="Miscellaneous"
//               label="Miscellaneous
//               "
//             />
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           ></div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Standard Lot Usage
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Reference Standard Lot Usage</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>
//             Add information and add new standard lot usage.
//           </p>
//           <CFormInput
//             type="text"
//             label="Reference Standard Name"
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Reference Standard Code
//             "
//             placeholder=" "
//           />
//           <CFormInput
//             type="text"
//             label="Cas / Cat No.
//             "
//             placeholder=""
//           />
//           <CFormInput type="text" label="Source" placeholder="" />
//           <CFormInput
//             type="text"
//             label="Quantity Recieved
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Supplied By
//             "
//             placeholder=""
//           />

//           <CFormSelect type="text" label="Certificate" placeholder="" />

//           <CFormInput
//             type="text"
//             label="Batch No. / Lot No."
//             name="batchNumber"
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             name="receiptNumber"
//             label="Delivery Receipt Number"
//             placeholder=""
//           />

//           <h6>Certificate Received</h6>
//           <div style={{ marginBottom: "10px" }}>
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionYes"
//               value="yes"
//               label="Yes"
//             />
//             <CFormCheck
//               type="radio"
//               name="option"
//               id="optionNo"
//               value="no"
//               label="No"
//             />
//           </div>

//           <CFormSelect type="text" label="Certificate" placeholder="" />

//           <CFormInput
//             type="text"
//             label="Batch No. / Lot No."
//             name="batchNumber"
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             name="receiptNumber"
//             label="Delivery Receipt Number"
//             placeholder=""
//           />

//           <CFormInput
//             type="date"
//             label="Delivery Receipt Date"
//             placeholder=""
//           />
//           <CFormSelect
//             type="text"
//             label="Recieved By
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="date"
//             label="Recieved On
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="date"
//             label="Valid Upto
//             "
//             placeholder=""
//           />
//           <CFormInput
//             type="text"
//             label="Storage Location
//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Potency
//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="UOM
//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="Water Content

//             "
//             placeholder=""
//           />

//           <CFormInput
//             type="text"
//             label="UOM
//             "
//             placeholder=""
//           />

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           ></div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Standard Lot Usage
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Qualification</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>
//             Add information and Add qualification.
//           </p>
//           <CFormInput type="text" label="Column No." placeholder="Column No." />
//           <CFormInput
//             type="text"
//             label=" Assignment No."
//             placeholder=" Assignment No. "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Column Name"
//             placeholder=" Column Name "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Brand Name / Manufacturer Name"
//             placeholder=" Brand Name / Manufacturer Name "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Film Thikness / Particle Size"
//             placeholder=" Film Thikness / Particle Size "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" UMO"
//             placeholder="UMO "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label="Mfg. Serial No."
//             placeholder="Mfg. Serial No."
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Length"
//             placeholder="Length"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" UMO"
//             placeholder="UMO"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Packing Material"
//             placeholder="Packing Material"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Inner Diameter"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" UMO"
//             placeholder="UMO"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="date"
//             label=" Recieved On"
//             placeholder=""
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label=" Outer Diameter"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Product name"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Test(s)"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Qualification Type"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label="Certificate"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <div >
//           <h4>Reasons/Remarks</h4>
//           <textarea style={{width:"350px"}} name="" id=""></textarea>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           ></div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Assignment
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Assignmment</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>Add information.</p>
//           <CFormInput type="text" label="Column No." placeholder="Column No." />
//           <CFormInput
//             type="text"
//             label=" Column Name"
//             placeholder=" Column Name "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Column Application"
//             placeholder=" Column Application "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Brand Name / Manufacturer Name"
//             placeholder=" Brand Name / Manufacturer Name "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Film Thikness / Particle Size"
//             placeholder=" Film Thikness / Particle Size "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" UMO"
//             placeholder="UMO "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label="Mfg. Serial No."
//             placeholder="Mfg. Serial No."
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Length"
//             placeholder="Length"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" UMO"
//             placeholder="UMO"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Packing Material"
//             placeholder="Packing Material"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Inner Diameter"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" UMO"
//             placeholder="UMO"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Outer Diameter"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="date"
//             label=" Recieved On"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Specification ID"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label=" Product / Material"
//             placeholder=""
//             className="custom-placeholder"
//           />

//           <h3>Test(s) Selection for Analysis</h3>
//           <table className="table table-bordered">
//             <thead>
//               <th>S No.</th>
//               <th>Test Name</th>
//               <th>Selection</th>
//             </thead>
//             <tr>
//               <td>1</td>
//               <td>Viscosity @40C</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>

//             <tr>
//               <td>2</td>
//               <td>Total Acid Number (TAN)</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>Water Content PPM</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>4</td>
//               <td>TAN Total acid number</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>5</td>
//               <td>Viscosity @40C</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>6</td>
//               <td>Water Content PPM</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>7</td>
//               <td>Average Weight</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>8</td>
//               <td>Description</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>9</td>
//               <td>Assay test for SPP</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>10</td>
//               <td>Specific Gravity PA</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>11</td>
//               <td>Color Test</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>12</td>
//               <td>Specific Gravity</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>13</td>
//               <td>Melting Range</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>14</td>
//               <td>Color</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>15</td>
//               <td>Ph test</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>16</td>
//               <td>Test</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>17</td>
//               <td>Hydroxyl Value</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>18</td>
//               <td>Acid Value</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>19</td>
//               <td>Viscosity (mPa.s)</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td>20</td>
//               <td>Color Test</td>
//               <td>
//                 <input type="checkbox" />
//               </td>
//             </tr>
//           </table>

//           <h3>Column Performance Test</h3>
//           <CFormInput
//             type="text"
//             label=" Number of Performance Test"
//             placeholder="No. of Variables"
//             className="custom-placeholder"
//           />
//           <CButton color="info" onClick={_props.closeModal}>
//             Add
//           </CButton>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           ></div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Assignment
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Registration</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ marginLeft: "2px" }}>
//             Add information and Add registration.
//           </p>
//           <CFormInput
//             type="text"
//             label="Column Application"
//             placeholder="Column Application "
//           />
//           <CFormSelect
//             type="text"
//             label="Column Name"
//             placeholder=" Column Name "
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="text"
//             label="Column Number"
//             placeholder="Column Number"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Brand Name / Manufacturer Name"
//             placeholder="Brand Name / Manufacturer Name"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Mfg. Serial No. "
//             placeholder="Select"
//             className="custom-placeholder"
//           />

//           <CFormInput
//             type="number"
//             label="Film Thikness / Particle Size"
//             placeholder="Film Thikness / Particle Size"
//             className="custom-placeholder"
//           />
//           <CFormInput type="number" label="UOM" placeholder="UOM" />
//           <CFormInput
//             type="number"
//             label="Packing Material"
//             placeholder="Packing Material"
//           />
//           <CFormInput type="number" label="Length" placeholder="select" />
//           <CFormInput type="number" label=" UOM" placeholder="UOM" />
//           <CFormInput
//             type="number"
//             label="Inner Diameter"
//             placeholder="select"
//           />

//           <CFormInput
//             type="number"
//             label="Outer Diameter"
//             placeholder="Outer Diameter"
//           />

//           <CFormInput type="date" label="Recieved On" placeholder="" />

//           <CForm className="mb-3">
//             <CFormLabel>Certificate Received</CFormLabel>
//             <div style={{ display: "flex", justifyContent: "space-around" }}>
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="acceptRadio"
//                 label="YES"
//                 value="accept"
//               />
//               <CFormCheck
//                 type="radio"
//                 name="sampleRadio"
//                 id="rejectRadio"
//                 label="NO"
//                 value="reject"
//               />
//             </div>
//           </CForm>

//           <CFormInput type="number" label="Certificate" placeholder="Browse" />

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           >
//             <label>Remarks if</label>
//             <textarea name="" id=""></textarea>
//           </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton style={{ background: "#0F93C3", color: "white" }}>
//             Add Chemical
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const StatusModal = (props) => {
//   return (
//     <>
//       <CModal
//         size="lg"
//         alignment=""
//         visible={props.visible}
//         onClose={props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>New Application</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p style={{ fontWeight: "bolder" }}>New Application</p>

//           <CFormInput
//             type="text"
//             label="Name"
//             placeholder="Name"
//             className="custom-placeholder"
//           />
//           <CFormInput
//             type="text"
//             label="Prefix"
//             placeholder="Prefix"
//             className="custom-placeholder"
//           />

//           <table className="table table-bordered" style={{ marginTop: "5px" }}>
//             <thead>
//               <tr>
//                 <th>
//                   Selected Standard Fields Displayed At Columns Qualification
//                   And Usage
//                 </th>
//                 <th>Qualification</th>
//                 <th>Usage</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Column Pressure</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Flow Rate (Mobile Phase/Carrier Gas)</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>PH of Mobile Phase</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Wave Length</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Injector</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Detector Type</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Injector Volume</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Mobile Phase / Carrier Gas</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Hydrogen Low Rate</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Air Flow Rate</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Column Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Injector Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>No. Of Injection</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Split Ratio</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Mode</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Concentration</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Pharmacopoeia</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Detector Temperature</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>A.R.No.</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Load</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Batch No.</td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           >
//             <CButton color="primary" type="button">
//               Add Application
//             </CButton>
//           </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={props.closeModal}>
//             Cancel
//           </CButton>
//           <CButton color="primary" onClick={props.closeModal}>
//             Add Application
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Batch Sample Allotment
//         </CModalTitle>
//       </CModalHeader>
//       <div
//         className="modal-body"
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Are you sure you want to delete this Batch Sample Allotment?</p>
//       </div>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.handleDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ConfigurationType: "Plant Configuration",
    UniqueCode: "PLA-001",
    ReportTitle: "Production Line A Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    ConfigurationType: "Warehouse Configuration",
    UniqueCode: "WHB-001",
    ReportTitle: "Warehouse B Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    ConfigurationType: "Lab Configuration",
    UniqueCode: "RLC-001",
    ReportTitle: "Research Lab C Configuration",
    UpdatedAt: "2024-07-01",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    ConfigurationType: "Assembly Line Configuration",
    UniqueCode: "ALD-001",
    ReportTitle: "Assembly Line D Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    ConfigurationType: "Processing Unit Configuration",
    UniqueCode: "PUE-001",
    ReportTitle: "Processing Unit E Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    ConfigurationType: "Distribution Center Configuration",
    UniqueCode: "DCF-001",
    ReportTitle: "Distribution Center F Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    ConfigurationType: "Testing Facility Configuration",
    UniqueCode: "TFG-001",
    ReportTitle: "Testing Facility G Configuration",
    UpdatedAt: "2024-07-01",
    status: "Active",
  },
];

const EMCOATemplate = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.ConfigurationType.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Configuration Type", accessor: "ConfigurationType" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "Report Title", accessor: "ReportTitle" },
    { header: "Updated At ", accessor: "UpdatedAt" },
    { header: "Status", accessor: "status" },

    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">EM COA Template</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right">
          <ATMButton text="Add COA Template" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
    </div>
  );
};
export default EMCOATemplate;
