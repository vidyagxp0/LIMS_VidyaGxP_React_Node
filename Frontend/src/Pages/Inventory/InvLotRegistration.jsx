
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
    LotRegistrationNo: "code1",
    StandardName: "application1",
    Source: "brand1",
    BatchNo: "material1",
    DeliveryReceiptDate	: "material1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    LotRegistrationNo: "code2",
    StandardName: "application2",
    Source: "brand2",
    BatchNo: "material2",
    DeliveryReceiptDate	: "material2",
    status: "DROPPED",
  },{
    checkbox: false,
    sno: 1,
    LotRegistrationNo: "code1",
    StandardName: "application1",
    Source: "brand1",
    BatchNo: "material1",
    DeliveryReceiptDate	: "material1",
    status: "REINITIATED",
  },{
    checkbox: false,
    sno: 1,
    LotRegistrationNo: "code1",
    StandardName: "application1",
    Source: "brand1",
    BatchNo: "material1",
    DeliveryReceiptDate	: "material1",
    status: "DROPPED",
  },{
    checkbox: false,
    sno: 1,
    LotRegistrationNo: "code1",
    StandardName: "application1",
    Source: "brand1",
    BatchNo: "material1",
    DeliveryReceiptDate	: "material1",
    status: "INITIATED",
  },{
    checkbox: false,
    sno: 1,
    LotRegistrationNo: "code1",
    StandardName: "application1",
    Source: "brand1",
    BatchNo: "material1",
    DeliveryReceiptDate	: "material1",
    status: "APPROVED",
  },{
    checkbox: false,
    sno: 1,
    LotRegistrationNo: "code1",
    StandardName: "application1",
    Source: "brand1",
    BatchNo: "material1",
    DeliveryReceiptDate	: "material1",
    status: "REJECTED",
  },
  
];


const InvlotRegistration = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
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
      row.StandardName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Lot Registration No.	", accessor: "LotRegistrationNo" },
    { header: "Standard Name", accessor: "StandardName" },
    { header: "Source", accessor: "Source" },
    { header: "Batch No.	", accessor: "BatchNo" },
    { header: "Delivery Receipt Date		", accessor: "DeliveryReceiptDate" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reference Standard Lot Registration
      </h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right">
          <ATMButton text="Add Lot Registration" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
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

export default InvlotRegistration;
