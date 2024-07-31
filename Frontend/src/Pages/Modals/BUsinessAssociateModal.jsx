import {
  CButton,
  CFormCheck,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, {useState} from "react";


const BUsinessAssociateModal = ({ visible, closeModal, handleSubmit }) => {
  const [bussiness, setBussiness] = useState({
    businessAssociateName: "",
    uniqueCode: "",
    categoryOfBusinessAssociate: "",
    contactPerson: "",
    location: "",
    address: "",
    city:"",
    state:"",
    country:"",
    zipPin:"",
    phone:"",
    fax:"",
    email:""
   });



   const handleInputChange = (field, value) => {
    const updatedData = { ...bussiness, [field]: value };
    setBussiness(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...bussiness });
    closeModal();
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Business Associate</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Business Associate Name <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Business Associate Name"
            required
            value={bussiness.businessAssociateName}
            onChange={(e) => handleInputChange("businessAssociateName", e.target.value)}


          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Unique Code <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Unique Code"
            required
            value={bussiness.uniqueCode}
            onChange={(e) => handleInputChange("uniqueCode", e.target.value)}

          />

          <label className="mb-2">
            Category Of Business Associate{" "}
            <span style={{ color: "red" }}>*</span>
          </label>

          <CFormCheck
            className="mb-3"
            type="checkbox"
            id="checkbox1"
            label="Customer"
          />
          <CFormCheck
            className="mb-3"
            type="checkbox"
            id="checkbox2"
            label="Supplier"
          />
          <CFormCheck
            className="mb-3"
            type="checkbox"
            id="checkbox3"
            label="Manufacturer"
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Contact Person <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Contact Person"
            required
            value={bussiness.contactPerson}
            onChange={(e) => handleInputChange("contactPerson", e.target.value)}

          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Location <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Location"
            required
            value={bussiness.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            

          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Address : Line 1 <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Address : Line 1"
            required
            value={bussiness.address}
            onChange={(e) => handleInputChange("address", e.target.value)}

          />

          <CFormInput
            className="mb-3"
            type="text"
            label={<>Address : Line 2</>}
            placeholder="Address : Line 2"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={<>Address : Line 3</>}
            placeholder="Address : Line 3"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                City <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="City"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                State <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="State"
            required
            value={bussiness.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Country <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Country"
            required
            value={bussiness.problemInDetail}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                ZIP / PIN <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="ZIP / PIN"
            required
            value={bussiness.zIPPIN}
            onChange={(e) => handleInputChange("zIPPIN", e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Phone <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Phone"
            required
            value={bussiness.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Fax <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Fax"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Email <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Email"
            required
            value={bussiness.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default BUsinessAssociateModal;


