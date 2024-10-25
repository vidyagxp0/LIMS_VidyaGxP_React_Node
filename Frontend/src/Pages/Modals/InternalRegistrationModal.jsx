import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const InternalRegistrationModal = ({
  visible,
  closeModal,
  handleSubmit,
  addRow,
}) => {
  const [internalData, setInternalData] = useState({
    lotType: "",
    sampleLogin: "",
    productMaterial: "",
    wsarNo: "",
    sampleReferenceNo: "",
    containerType: "",
    storageCondition: "",
    wsBatchQuantity: "",
    availableQuantity: "",
    lotQuantity: "",
    wsValidateOn: "",
    lotValidUpto: "",
    usageType: "",
    directionOfUsage: "",
    sequence: "",
    noOfPurities: "",
    productname: "",
    sequenceNo: "",
    uom: "",
    purityDetails: [{ sno: 1, purity: "", valueUom: "" }],
    additionalPuritiesInformation: "",
    standardType: "",
    source: "",
    comments: "",
    containerValidityPeriod: "",
    containerStartingNo: "",
    minNoOfContainersForAlert: "",
    noOfContainersPrepared: "",
    containerDetails: [{ sno: 1, containerNo: "", quantityInContainers: "" }],
    totalQuantityInContainers: "",
  });

  const resetForm = () => {
    setInternalData({
      lotType: "",
      sampleLogin: "",
      productMaterial: "",
      wsarNo: "",
      sampleReferenceNo: "",
      containerType: "",
      storageCondition: "",
      wsBatchQuantity: "",
      productname: "",
      sequenceNo: "",
      availableQuantity: "",
      lotQuantity: "",
      wsValidateOn: "",
      lotValidUpto: "",
      usageType: "",
      directionOfUsage: "",
      noOfPurities: "",
      uom: "",
      purityDetails: [{ sno: 1, purity: "", valueUom: "" }],
      additionalPuritiesInformation: "",
      standardType: "",
      source: "",
      comments: "",
      containerValidityPeriod: "",
      containerStartingNo: "",
      minNoOfContainersForAlert: "",
      noOfContainersPrepared: "",
      containerDetails: [{ sno: 1, containerNo: "", quantityInContainers: "" }],
      totalQuantityInContainers: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...internalData, [field]: value };
    setInternalData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    console.log("Submitting Internal Registration Data: ", internalData);

    const newSampleData = {
      ...internalData,
      sno: addRow.length > 0 ? addRow.length + 1 : 1,
    };

    axios
      .post(
        `http://localhost:9000/manage-lims/add/iWSInternalRegistration`,
        newSampleData
      )
      .then((response) => {
        console.log("API Response: ", response.data);

        toast.success(
          response.data.message || "Internal Registration added successfully!"
        );
        addRow(newSampleData);
        closeModal();
      })
      .catch((err) => {
        console.error("API Error: ", err);

        toast.error("Internal registration Already Registered");
      });
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
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add Information and add new Internal</p>
          <CFormInput
            label="Product Name"
            value={internalData.productname}
            onChange={(e) => handleInputChange("productname", e.target.value)}
            className="mb-3"
          />
          <CFormInput
            label="Sequence No."
            value={internalData.sequenceNo}
            onChange={(e) => handleInputChange("sequenceNo", e.target.value)}
            className="mb-3"
          />
          <CFormSelect
            label="Lot Type"
            value={internalData.lotType}
            onChange={(e) => handleInputChange("lotType", e.target.value)}
            className="mb-3"
            options={[
              { value: "", label: "Select..." },
              { value: "Internal", label: "Internal" },
              { value: "External", label: "External" },
            ]}
          />
          {internalData.lotType === "Internal" && (
            <>
              <CFormSelect
                label="Sample Login"
                className="mb-3"
                value={internalData.sampleLogin}
                onChange={(e) =>
                  handleInputChange("sampleLogin", e.target.value)
                }
                options={[
                  { value: "Option 1", label: "Option 1" },
                  { value: "Option 2", label: "Option 2" },
                  { value: "Option 3", label: "Option 3" },
                  { value: "Option 4", label: "Option 4" },
                  { value: "Option 5", label: "Option 5" },
                ]}
              />
              <CFormInput
                type="text"
                label="Product/Material"
                placeholder="Product/Material"
                className="custom-placeholder mb-3"
                disabled
                value={internalData.productMaterial}
                onChange={(e) => {
                  handleInputChange("productMaterial", e.target.value);
                }}
              />
            </>
          )}
          {internalData.lotType === "External" && (
            <>
              <CFormInput
                type="text"
                label="W.S.A.R No."
                className="custom-placeholder mb-3"
                placeholder="AR No."
                value={internalData.wsarNo}
                onChange={(e) => handleInputChange("wsarNo", e.target.value)}
              />
            </>
          )}
          <CFormInput
            type="text"
            label="Sample Reference No."
            placeholder="Sample Reference No."
            className="custom-placeholder mb-3"
            value={internalData.sampleReferenceNo}
            onChange={(e) =>
              handleInputChange("sampleReferenceNo", e.target.value)
            }
          />
          <CForm className="mb-3">
            <CFormLabel>Container Type</CFormLabel>
            <div className="flex gap-5">
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="bottleRadio"
                label="Bottle"
                value="Bottle"
                checked={internalData.containerType === "Bottle"}
                onChange={(e) =>
                  handleInputChange("containerType", e.target.value)
                }
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="vialRadio"
                label="Vial"
                value="Vial"
                checked={internalData.containerType === "Vial"}
                onChange={(e) =>
                  handleInputChange("containerType", e.target.value)
                }
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition"
            className="custom-placeholder mb-3"
            value={internalData.storageCondition}
            onChange={(e) =>
              handleInputChange("storageCondition", e.target.value)
            }
          />
          <CFormInput
            type="number"
            label="W.s Batch Quantity"
            placeholder="W.s Batch Quantity"
            className="custom-placeholder mb-3"
            value={internalData.wsBatchQuantity}
            onChange={(e) =>
              handleInputChange("wsBatchQuantity", e.target.value)
            }
          />
          <CFormInput
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity"
            className="custom-placeholder mb-3"
            value={internalData.availableQuantity}
            onChange={(e) =>
              handleInputChange("availableQuantity", e.target.value)
            }
          />
          <CFormInput
            type="text"
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity"
            className="custom-placeholder mb-3"
            value={internalData.lotQuantity}
            onChange={(e) => handleInputChange("lotQuantity", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="W.s Validate On"
            className="custom-placeholder mb-3"
            value={internalData.wsValidateOn}
            onChange={(e) => handleInputChange("wsValidateOn", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            label="Lot Valid Upto"
            className="custom-placeholder mb-3"
            value={internalData.lotValidUpto}
            onChange={(e) => handleInputChange("lotValidUpto", e.target.value)}
          />
          <CFormLabel>Usage Type</CFormLabel>
          <div className="flex gap-5">
            <CFormCheck
              type="radio"
              name="usageRadio"
              id="singleRadio"
              label="Single"
              value="Single"
              checked={internalData.usageType === "Single"}
              onChange={(e) => handleInputChange("usageType", e.target.value)}
            />
            <CFormCheck
              type="radio"
              name="usageRadio"
              id="multipleRadio"
              label="Multiple"
              value="Multiple"
              checked={internalData.usageType === "Multiple"}
              onChange={(e) => handleInputChange("usageType", e.target.value)}
            />
          </div>
          <CFormInput
            type="text"
            label="Direction of Usage"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
            value={internalData.directionOfUsage}
            onChange={(e) =>
              handleInputChange("directionOfUsage", e.target.value)
            }
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="No. Of Purities"
              placeholder="1"
              className="custom-placeholder mb-3"
              value={internalData.noOfPurities}
              onChange={(e) =>
                handleInputChange("noOfPurities", e.target.value)
              }
            />
            <span className="mt-2 w-10">
              <IoIosAddCircleOutline />
            </span>
          </div>
          <CFormSelect
            label="UOM"
            className="mb-3"
            value={internalData.uom}
            onChange={(e) => handleInputChange("uom", e.target.value)}
            options={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
              { value: "Option 4", label: "Option 4" },
              { value: "Option 5", label: "Option 5" },
            ]}
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="S.No"
              className="custom-placeholder mb-3"
              value={internalData.purityDetails[0].sno}
              onChange={(e) => {
                const updatedPurityDetails = [...internalData.purityDetails];
                updatedPurityDetails[0].sno = e.target.value;
                handleInputChange("purityDetails", updatedPurityDetails);
              }}
            />
            <CFormInput
              type="text"
              label="Purity"
              placeholder="Purity"
              className="custom-placeholder mb-3"
              value={internalData.purityDetails[0].purity}
              onChange={(e) => {
                const updatedPurityDetails = [...internalData.purityDetails];
                updatedPurityDetails[0].purity = e.target.value;
                handleInputChange("purityDetails", updatedPurityDetails);
              }}
            />
            <CFormInput
              type="text"
              label="Value/UOM"
              placeholder="Value/UOM"
              className="custom-placeholder mb-3"
              value={internalData.purityDetails[0].valueUom}
              onChange={(e) => {
                const updatedPurityDetails = [...internalData.purityDetails];
                updatedPurityDetails[0].valueUom = e.target.value;
                handleInputChange("purityDetails", updatedPurityDetails);
              }}
            />
          </div>
          <CFormInput
            type="text"
            label="Additional Purities Information"
            placeholder="Additional Purities Information"
            className="custom-placeholder mb-3"
            value={internalData.additionalPuritiesInformation}
            onChange={(e) =>
              handleInputChange("additionalPuritiesInformation", e.target.value)
            }
          />
          <CFormSelect
            label="Standard Type"
            className="mb-3"
            value={internalData.standardType}
            onChange={(e) => handleInputChange("standardType", e.target.value)}
            options={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
              { value: "Option 4", label: "Option 4" },
              { value: "Option 5", label: "Option 5" },
            ]}
          />
          <CFormInput
            type="text"
            label="Source"
            placeholder="Source"
            className="custom-placeholder mb-3"
            value={internalData.source}
            onChange={(e) => handleInputChange("source", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Comments"
            placeholder="Comments"
            className="custom-placeholder mb-3"
            value={internalData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Container Validity Period"
            placeholder="Container Validity Period"
            className="custom-placeholder mb-3"
            value={internalData.containerValidityPeriod}
            onChange={(e) =>
              handleInputChange("containerValidityPeriod", e.target.value)
            }
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="S.No"
              className="custom-placeholder mb-3"
              value={internalData.containerDetails[0].sno}
              onChange={(e) => {
                const updatedContainerDetails = [
                  ...internalData.containerDetails,
                ];
                updatedContainerDetails[0].sno = e.target.value;
                handleInputChange("containerDetails", updatedContainerDetails);
              }}
            />
            <CFormInput
              type="text"
              label="Container No."
              placeholder="Container No."
              className="custom-placeholder mb-3"
              value={internalData.containerDetails[0].containerNo}
              onChange={(e) => {
                const updatedContainerDetails = [
                  ...internalData.containerDetails,
                ];
                updatedContainerDetails[0].containerNo = e.target.value;
                handleInputChange("containerDetails", updatedContainerDetails);
              }}
            />
            <CFormInput
              type="text"
              label="Quantity in Containers"
              placeholder="Quantity in Containers"
              className="custom-placeholder mb-3"
              value={internalData.containerDetails[0].quantityInContainers}
              onChange={(e) => {
                const updatedContainerDetails = [
                  ...internalData.containerDetails,
                ];
                updatedContainerDetails[0].quantityInContainers =
                  e.target.value;
                handleInputChange("containerDetails", updatedContainerDetails);
              }}
            />
          </div>
          <CFormInput
            type="text"
            label="Total Quantity in Containers"
            placeholder="Total Quantity in Containers"
            className="custom-placeholder mb-3"
            value={internalData.totalQuantityInContainers}
            onChange={(e) =>
              handleInputChange("totalQuantityInContainers", e.target.value)
            }
          />
          <CFormInput
            type="text"
            label="Container Starting No."
            placeholder="Container Starting No."
            className="custom-placeholder mb-3"
            value={internalData.containerStartingNo}
            name="containerStartingNo"
            onChange={(e) =>
              handleInputChange("containerStartingNo", e.target.value)
            }
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InternalRegistrationModal;
