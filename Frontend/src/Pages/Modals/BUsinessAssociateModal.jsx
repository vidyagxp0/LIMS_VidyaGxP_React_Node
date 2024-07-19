import { CButton, CFormCheck, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'

const BUsinessAssociateModal = ({ visible, closeModal, handleSubmit }) => {
  const [businessAssociate, setBusinessAssociate] = useState({
    BusinessAssociateName:"",
    UniqueCode:"",
    CategoryOfBussinessAssociate:[],
    ContactPerson:"",
    Location:"",
    AddressLine1:"",
    AddressLine2:"",
    AddressLine3:"",
    City:"",
    State:"",
    Country:"",
    ZipCode:"",
    Email:"",
    Phone:"",
    Fax:"",
  })

  const handleInputChange = (field, value) => {
    const updatedData = { ...businessAssociate, [field]: value };
    setBusinessAssociate(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...businessAssociate });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setBusinessAssociate({
      BusinessAssociateName:"",
      UniqueCode:"",
      CategoryOfBussinessAssociate:[],
      ContactPerson:"",
      Location:"",
      AddressLine1:"",
      AddressLine2:"",
      AddressLine3:"",
      City:"",
      State:"",
      Country:"",
      ZipCode:"",
      Email:"",
      Phone:"",
      Fax:"",
    });
  };

  useEffect(() => {
    resetForm();
  }, []);

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
          value={businessAssociate.BusinessAssociateName}
          onChange={(e) => handleInputChange("BusinessAssociateName", e.target.value)}
          required
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
          value={businessAssociate.UniqueCode}
          onChange={(e) => handleInputChange("UniqueCode", e.target.value)}
          required
        />

        <label className="mb-2">
          Category Of Business Associate <span style={{ color: "red" }}>*</span>
        </label>

        <CFormCheck
  className="mb-3"
  type="checkbox"
  id="checkbox1"
  label="Customer"
  checked={businessAssociate.CategoryOfBussinessAssociate.includes("Customer")}
  onChange={(e) => handleInputChange("CategoryOfBussinessAssociate", "Customer")}
/>
<CFormCheck
  className="mb-3"
  type="checkbox"
  id="checkbox2"
  label="Supplier"
  checked={businessAssociate.CategoryOfBussinessAssociate.includes("Supplier")}
  onChange={(e) => handleInputChange("CategoryOfBussinessAssociate", "Supplier")}
/>
<CFormCheck
  className="mb-3"
  type="checkbox"
  id="checkbox3"
  label="Manufacturer"
  checked={businessAssociate.CategoryOfBussinessAssociate.includes("Manufacturer")}
  onChange={(e) => handleInputChange("CategoryOfBussinessAssociate", "Manufacturer")}
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
          value={businessAssociate.ContactPerson}
          onChange={(e) => handleInputChange("ContactPerson", e.target.value)}
          required
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
          value={businessAssociate.Location}
          onChange={(e) => handleInputChange("Location", e.target.value)}
          required
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
          value={businessAssociate.AddressLine1}
          onChange={(e) => handleInputChange("AddressLine1", e.target.value)}
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={<>Address : Line 2</>}
          placeholder="Address : Line 2"
          value={businessAssociate.AddressLine2}
          onChange={(e) => handleInputChange("AddressLine2", e.target.value)}
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={<>Address : Line 3</>}
          placeholder="Address : Line 3"
          value={businessAssociate.AddressLine3}
          onChange={(e) => handleInputChange("AddressLine3", e.target.value)}
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
          value={businessAssociate.City}
          onChange={(e) => handleInputChange("City", e.target.value)}
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
          value={businessAssociate.State}
          onChange={(e) => handleInputChange("State", e.target.value)}
          required
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
          value={businessAssociate.Country}
          onChange={(e) => handleInputChange("Country", e.target.value)}
          required
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
          value={businessAssociate.ZipCode}
          onChange={(e) => handleInputChange("ZipCode", e.target.value)}
          required
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
          value={businessAssociate.Phone}
          onChange={(e) => handleInputChange("Phone", e.target.value)}
          required
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
          value={businessAssociate.Fax}
          onChange={(e) => handleInputChange("Fax", e.target.value)}
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
          value={businessAssociate.Email}
          onChange={(e) => handleInputChange("Email", e.target.value)}
          required
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
  )
}

export default BUsinessAssociateModal
