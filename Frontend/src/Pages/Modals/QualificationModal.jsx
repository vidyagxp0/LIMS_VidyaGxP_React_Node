import {
  CButton,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const QualificationModal = (_props) => {
  const [selectedColumnNo, setSelectedColumnNo] = useState("");
  const [formData, setFormData] = useState({
    assignmentNo: "",
    columnName: "",
    brandName: "",
    filmThickness: "",
    umo: "",
    serialNo: "",
    length: "",
    packingMaterial: "",
    innerDiameter: "",
    receivedOn: "",
    outerDiameter: "",
    productName: "",
    tests: "",
    qualificationType: "",
    certificate: "",
    remarks: "",
  });
  const generateRandomData = () => {
    return {
      assignmentNo: "A12345",
      columnName: "Column A",
      brandName: "Brand X",
      filmThickness: "0.5mm",
      umo: "UMO Value",
      serialNo: "SN123456",
      length: "100cm",
      packingMaterial: "Material Y",
      innerDiameter: "10mm",
      receivedOn: "2024-07-15",
      outerDiameter: "12mm",
      productName: "Product Z",
      tests: "Test 1",
      qualificationType: "Type A",
      certificate: "Cert123",
      remarks: "Sample remarks",
    };
  };

  useEffect(() => {
    if (selectedColumnNo) {
      const randomData = generateRandomData();
      setFormData(randomData);
    }
  }, [selectedColumnNo]);

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Qualification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and Add qualification.
          </p>
          <CFormSelect
            type="text"
            label="Column No."
            placeholder="Column No."
            options={[
              { value: "", label: "Select Column No." },
              { value: "apxbn-20240524", label: "apxbn-20240524" },
              { value: "c313", label: "c313" },
              { value: "1234", label: "1234" },
            ]}
            onChange={(e) => setSelectedColumnNo(e.target.value)}
          />
          <CFormInput
            type="text"
            label=" Assignment No."
            className="custom-placeholder"
            value={formData.assignmentNo}
            disabled
          />

          <CFormInput
            type="text"
            label=" Column Name"
            className="custom-placeholder"
            value={formData.columnName}
            disabled
          />

          <CFormInput
            type="text"
            label=" Brand Name / Manufacturer Name"
            className="custom-placeholder"
            value={formData.brandName}
            disabled
          />

          <CFormInput
            type="text"
            label=" Film Thikness / Particle Size"
            disabled
            className="custom-placeholder"
            value={formData.filmThickness}
          />

          <CFormInput
            type="text"
            label=" UMO"
            disabled
            className="custom-placeholder"
            value={formData.umo}
          />

          <CFormInput
            type="text"
            label="Mfg. Serial No."
            disabled
            className="custom-placeholder"
            value={formData.serialNo}
          />

          <CFormInput
            type="text"
            label=" Length"
            disabled
            className="custom-placeholder"
            value={formData.length}
          />

          <CFormInput
            type="text"
            label=" UMO"
            className="custom-placeholder"
            disabled
            value={formData.packingMaterial}
          />

          <CFormInput
            type="text"
            label=" Packing Material"
            className="custom-placeholder"
            disabled
            value={formData.innerDiameter}
          />

          <CFormInput
            type="text"
            label=" Inner Diameter"
            className="custom-placeholder"
            disabled
            value={formData.receivedOn}
          />

          <CFormInput
            type="text"
            label=" UMO"
            className="custom-placeholder"
            disabled
            value={formData.outerDiameter}
          />

          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label=" Recieved On"
            className="custom-placeholder"
            disabled
            value={formData.productName}
          />
          <CFormInput
            type="text"
            label=" Outer Diameter"
            className="custom-placeholder"
            disabled
            value={formData.tests}
          />

          <CFormInput
            type="text"
            label=" Product name"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Test(s)"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label=" Qualification Type"
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Certificate"
            className="custom-placeholder"
          />
          <CFormTextarea
            type="checkbox"
            label="Reasons / Remarks"
            className="custom-placeholder"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Assignment
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default QualificationModal;
