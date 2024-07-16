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
import React, { useState } from "react";

const MediaLotModal = (props) => {
  const [containers, setContainers] = useState([]);
  const [noOfContainers, setNoOfContainers] = useState("");

  const handleAddContainers = () => {
    const containerCount = parseInt(noOfContainers, 10);
    if (isNaN(containerCount) || containerCount <= 0) return;

    const newContainers = Array.from(
      { length: containerCount },
      (_, index) => ({
        sno: index + 1,
        containerNo: `Container No. ${index + 1}`,
        quantity: "",
      })
    );
    setContainers(newContainers);
  };

  const handleQuantityChange = (index, value) => {
    const updatedContainers = [...containers];
    updatedContainers[index].quantity = value;
    setContainers(updatedContainers);
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={props.visible}
        onClose={props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Media Lot</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new mediaLot</p>
          <CFormSelect
            type="text"
            label="Media Name"
            placeholder=" "
            options={[
              { value: "SCDA", label: "SCDA" },
              { value: "Micro Media", label: "Micro Media" },
              { value: "Microbegran Media", label: "Microbegran Media" },
              { value: "SCADA", label: "SCADA" },
            ]}
          />
          <CFormInput type="text" label="Media Prefix" placeholder="" />
          <CFormInput type="text" label="Storage Condition" placeholder="" />
          <CFormInput type="text" label="Mode Of Preparation" placeholder="" />
          <CFormInput type="text" label="Manufacturer(Code)" placeholder="" />
          <CFormInput type="text" label="Batch No." placeholder="" />
          <CFormInput type="date" label="Mfg. Date" placeholder="" />
          <CFormInput type="date" label="Exp. Date" placeholder="" />
          <CFormInput type="date" label="Received On" placeholder="" />
          <CFormInput
            type="file"
            label="Certificate"
            placeholder="Choose file"
          />
          <div className="flex gap-3">
            <CFormInput
              type="text"
              label="Quantity Received"
              placeholder="in gm."
            />
            <span className="mt-3">gm</span>
          </div>
          <CFormSelect
            type="text"
            label="Usage Type"
            placeholder=""
            options={[
              { value: "select", label: "select" },
              { value: "single", label: "single" },
              { value: "multiple", label: "multiple" },
            ]}
          />
          <div className="flex gap-3">
            <CFormInput
              type="text"
              label="Container Validity Period"
              placeholder="in gm."
            />
            <span className="mt-3">Day(s)</span>
          </div>
          <CFormInput
            type="text"
            label="Container Starting Number"
            placeholder=""
          />
          <div className="flex gap-3">
            <CFormInput
              type="text"
              label="No. of Containers Prepared"
              placeholder=""
              value={noOfContainers}
              onChange={(e) => setNoOfContainers(e.target.value)}
            />
            <span className="mt-3">
              <button
                className="bg-blue mt-3 px-2 p-2 text-white"
                style={{ backgroundColor: "#3B82F6", color: "white" }}
                onClick={handleAddContainers}
              >
                Add
              </button>
            </span>
          </div>
          <CFormInput
            type="text"
            label="Minimum No. Of Containers for Alert"
            placeholder=""
          />

          {containers.length > 0 && (
            <table className="table-auto w-full mt-4">
              <thead>
                <tr>
                  <th
                    style={{ backgroundColor: "#3B82F6" }}
                    className="px-4 py-2"
                  >
                    Sno.
                  </th>
                  <th
                    style={{ backgroundColor: "#3B82F6" }}
                    className="px-4 py-2"
                  >
                    Container No.
                  </th>
                  <th
                    style={{ backgroundColor: "#3B82F6" }}
                    className="px-4 py-2"
                  >
                    Quantity in UOM
                  </th>
                </tr>
              </thead>
              <tbody>
                {containers.map((container, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{container.sno}</td>
                    <td className="border px-4 py-2">
                      {container.containerNo}
                    </td>
                    <td className="border px-4 py-2">
                      <CFormInput
                        type="text"
                        value={container.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <CFormTextarea
            type="text"
            id="Description"
            label="Comments"
            placeholder=""
          ></CFormTextarea>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default MediaLotModal;
