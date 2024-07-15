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
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const InternalRegistrationModal = ({ visible, closeModal, handleSubmit }) => {
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
    noOfPurities: "",
    uom: "",
    additionalPuritiesInformation: "",
    standardType: "",
    source: "",
    comments: "",
    containerValidityPeriod: "",
    containerStartingNo: "",
    minimumContainersForAlert: "",
    noOfContainersPrepared: "",
    containerData: [{ containerNo: "", quantityInContainer: "" }],
    purityData: [{ purityType: "", valueUOM: "" }],
    totalQuantityInContainers: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...internalData, [field]: value };
    setInternalData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...internalData });
    closeModal();
  };
  const addContainerDataRow = () => {
    setInternalData((prevState) => ({
      ...prevState,
      containerData: [
        ...prevState.containerData,
        { containerNo: "", quantityInContainer: "" },
      ],
    }));
  };

  const handleContainerDataChange = (index, field, value) => {
    const newContainerData = [...internalData.containerData];
    newContainerData[index][field] = value;
    setInternalData((prevState) => ({
      ...prevState,
      containerData: newContainerData,
    }));
  };

  const addPurityDataRow = () => {
    setInternalData((prevState) => ({
      ...prevState,
      purityData: [...prevState.purityData, { purityType: "", valueUOM: "" }],
    }));
  };

  const handlePurityDataChange = (index, field, value) => {
    const newPurityData = [...internalData.purityData];
    newPurityData[index][field] = value;
    setInternalData((prevState) => ({
      ...prevState,
      purityData: newPurityData,
    }));
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add Information and add new Internal</p>
          <CFormSelect
            label="Lot Type"
            value={internalData.lotType}
            onChange={(e) => handleInputChange("lotType", e.target.value)}
            className="mb-3"
          >
            <option value="">Select...</option>
            <option value="Internal">Internal</option>
            <option value="External">External</option>
          </CFormSelect>

          {internalData.lotType === "Internal" && (
            <>
              <CFormSelect
                label="Sample Login"
                value={internalData.sampleLogin}
                onChange={(e) =>
                  handleInputChange("sampleLogin", e.target.value)
                }
                className="mb-3"
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
              </CFormSelect>
              <CFormInput
                type="text"
                label="Product/Material"
                placeholder="Product/Material"
                value={internalData.productMaterial}
                onChange={(e) =>
                  handleInputChange("productMaterial", e.target.value)
                }
                className="custom-placeholder mb-3"
                disabled
              />
            </>
          )}

          {internalData.lotType === "External" && (
            <>
              <CFormInput
                type="text"
                label="W.S.A.R No."
                placeholder="AR No."
                value={internalData.wsarNo}
                onChange={(e) => handleInputChange("wsarNo", e.target.value)}
                className="custom-placeholder mb-3"
              />
            </>
          )}

          <CFormInput
            type="text"
            label="Sample Reference No."
            placeholder="Sample Reference No."
            value={internalData.sampleReferenceNo}
            onChange={(e) =>
              handleInputChange("sampleReferenceNo", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <CForm className="mb-3">
            <CFormLabel>Container Type</CFormLabel>
            <div className="flex gap-5">
              <CFormCheck
                type="radio"
                name="containerType"
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
                name="containerType"
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
            value={internalData.storageCondition}
            onChange={(e) =>
              handleInputChange("storageCondition", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="W.s Batch Quantity"
            placeholder="W.s Batch Quantity"
            value={internalData.wsBatchQuantity}
            onChange={(e) =>
              handleInputChange("wsBatchQuantity", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity"
            value={internalData.availableQuantity}
            onChange={(e) =>
              handleInputChange("availableQuantity", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity"
            value={internalData.lotQuantity}
            onChange={(e) => handleInputChange("lotQuantity", e.target.value)}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="date"
            label="W.s Validate On"
            value={internalData.wsValidateOn}
            onChange={(e) => handleInputChange("wsValidateOn", e.target.value)}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="date"
            label="Lot Valid Upto"
            value={internalData.lotValidUpto}
            onChange={(e) => handleInputChange("lotValidUpto", e.target.value)}
            className="custom-placeholder mb-3"
          />

          <CFormLabel>Usage Type</CFormLabel>
          <div className="flex gap-5">
            <CFormCheck
              type="radio"
              name="usageType"
              id="singleRadio"
              label="Single"
              value="Single"
              checked={internalData.usageType === "Single"}
              onChange={(e) => handleInputChange("usageType", e.target.value)}
            />
            <CFormCheck
              type="radio"
              name="usageType"
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
            value={internalData.directionOfUsage}
            onChange={(e) =>
              handleInputChange("directionOfUsage", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="No. Of Purities"
              placeholder="1"
              value={internalData.noOfPurities}
              onChange={(e) =>
                handleInputChange("noOfPurities", e.target.value)
              }
              className="custom-placeholder mb-3"
            />
            <span className="mt-2 w-10" onClick={addPurityDataRow}>
              <IoIosAddCircleOutline />
            </span>
          </div>

          <CFormSelect
            label="UOM"
            value={internalData.uom}
            onChange={(e) => handleInputChange("uom", e.target.value)}
            className="custom-placeholder mb-3"
          >
            <option value="">Select...</option>
            <option value="Kg">Kg</option>
            <option value="g">g</option>
            <option value="L">L</option>
            <option value="ml">ml</option>
          </CFormSelect>

          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Purity
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Value-UOM
                  </th>
                </tr>
              </thead>
              <tbody>
                {internalData.purityData.map((purity, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <select
                        className="form-control"
                        value={purity.purityType}
                        onChange={(e) =>
                          handlePurityDataChange(
                            index,
                            "purityType",
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select...</option>
                        <option value="Acids">Acids</option>
                        <option value="Bases">Bases</option>
                        <option value="Salts">Salts</option>
                        <option value="Solvents">Solvents</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={purity.valueUOM}
                        onChange={(e) =>
                          handlePurityDataChange(
                            index,
                            "valueUOM",
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CFormInput
            type="number"
            label="Additional Purities Information"
            placeholder="Additional Information"
            value={internalData.additionalPuritiesInformation}
            onChange={(e) =>
              handleInputChange("additionalPuritiesInformation", e.target.value)
            }
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="Standard Type"
            placeholder="Standard Type"
            value={internalData.standardType}
            onChange={(e) => handleInputChange("standardType", e.target.value)}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="Source"
            placeholder="Source"
            value={internalData.source}
            onChange={(e) => handleInputChange("source", e.target.value)}
            className="mb-3"
          />

          <CFormInput
            type="number"
            label="Comments"
            placeholder="Comments"
            value={internalData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
            className="mb-3"
          />

          <div className="flex gap-2 mt-4">
            <CFormInput
              type="number"
              label="Container Validity Period"
              placeholder="Container Validity"
              value={internalData.containerValidityPeriod}
              onChange={(e) =>
                handleInputChange("containerValidityPeriod", e.target.value)
              }
              className="mb-3"
            />
            <span className="mt-2">Days</span>
          </div>

          <CFormInput
            type="number"
            label="Container Starting No."
            placeholder="Container No."
            value={internalData.containerStartingNo}
            onChange={(e) =>
              handleInputChange("containerStartingNo", e.target.value)
            }
            className="mb-3"
          />

          <CFormInput
            type="number"
            label="Minimum No. of Containers for Alert"
            placeholder="1"
            value={internalData.minimumContainersForAlert}
            onChange={(e) =>
              handleInputChange("minimumContainersForAlert", e.target.value)
            }
            className="mb-3"
          />

          <div className="flex gap-2">
            <CFormInput
              type="number"
              label="No. of Containers Prepared"
              value={internalData.noOfContainersPrepared}
              onChange={(e) =>
                handleInputChange("noOfContainersPrepared", e.target.value)
              }
              className="mb-3"
            />
            <span className="mt-2 w-10" onClick={addContainerDataRow}>
              <IoIosAddCircleOutline />
            </span>
          </div>

          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Container No.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Quantity in Containers
                  </th>
                </tr>
              </thead>
              <tbody>
                {internalData.containerData.map((container, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <select
                        className="form-control"
                        value={container.containerNo}
                        onChange={(e) =>
                          handleContainerDataChange(
                            index,
                            "containerNo",
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select...</option>
                        <option value="Acids">Acids</option>
                        <option value="Bases">Bases</option>
                        <option value="Salts">Salts</option>
                        <option value="Solvents">Solvents</option>
                      </select>
                    </td>
                    <td className="flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        value={container.quantityInContainer}
                        onChange={(e) =>
                          handleContainerDataChange(
                            index,
                            "quantityInContainer",
                            e.target.value
                          )
                        }
                      />
                      <span className="mt-2">kg</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 mt-4">
            <CFormInput
              type="number"
              label="Total Quantity in containers"
              placeholder="Total Quantity in containers"
              value={internalData.totalQuantityInContainers}
              onChange={(e) =>
                handleInputChange("totalQuantityInContainers", e.target.value)
              }
              className="mb-3"
            />
            <span className="mt-2">Kg</span>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            onClick={handleFormSubmit}
            style={{ background: "#0F93C3", color: "white" }}
          >
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InternalRegistrationModal;
