import {
    CButton,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel, CFormSelect,
    CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle
} from '@coreui/react'
import React from 'react'

const InternalRegistrationModal = (_props) => {
    return (

        <div>
            <CModal
                alignment="center"
                visible={_props.visible}
                onClose={_props.closeModal}
                size="lg"
            >
                <CModalHeader>
                    <CModalTitle>New Internal</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CFormSelect
                        type="text"
                        label="Lot Type"
                        placeholder="Select "
                        className="mb-3"
                    />
                    <CFormInput
                        type="text"
                        label="Sample Refrence No."
                        placeholder="Sample Refrence No. "
                        className="custom-placeholder mb-3"
                    />

                    <CForm className="mb-3">
                        <CFormLabel>Container Type</CFormLabel>
                        <div>
                            <CFormCheck
                                type="radio"
                                name="sampleRadio"
                                id="acceptRadio"
                                label="Bottle"
                                value="accept"
                            />
                            <CFormCheck
                                type="radio"
                                name="sampleRadio"
                                id="rejectRadio"
                                label="Vial"
                                value="reject"
                            />
                        </div>
                    </CForm>
                    <CFormInput
                        type="text"
                        label="Storage Condition"
                        placeholder="Storage Condition "
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="W.s Batch Quantity"
                        placeholder="W.s Batch Quantity "
                        className="custom-placeholder mb-3"
                    />
                    <CFormTextarea
                        type="text"
                        label="Available Quantity for Distribution"
                        placeholder="Available Quantity for Distribution"
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="text"
                        label="Lot Quantity for Distribution"
                        placeholder="Lot Quantity "
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="date"
                        label="W.s Validate On"
                        placeholder=" "
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="date"
                        label="Lot Valid Upto"
                        placeholder=""
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="text"
                        label="Usage Type"
                        placeholder="Single / Multiple"
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="text"
                        label="Direction of Usage"
                        placeholder="Direction of Usage"
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="No. Of Purities"
                        placeholder="1"
                        className="custom-placeholder mb-3"
                    />

                    <CFormSelect
                        type="number"
                        label="UOM"
                        placeholder="Select..."
                        className="custom-placeholder mb-3"
                    />

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
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <select className="form-control">
                                            <option>Acids</option>
                                            <option>Bases</option>
                                            <option>Salts</option>
                                            <option>Solvents</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CFormInput
                        type="number"
                        label="Additional Purities Information"
                        placeholder="Additional Information"
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="Standard Type"
                        placeholder="Standard Type"
                        className="custom-placeholder mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="Source"
                        placeholder="Source"
                        className="mb-3"
                    />

                    <CFormInput
                        type="number"
                        label="Comments"
                        placeholder="Comments"
                        className="mb-3"
                    />

                    <CFormInput
                        type="number"
                        label="Container Validaty Period"
                        placeholder="Container Validaty Period"
                        className="mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="Container Starting No."
                        placeholder="Container No."
                        className="mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="Minimum No. of Containers for Alert"
                        placeholder="1"
                        className="mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="No. of Containers Prepared"
                        placeholder=""
                        className="mb-3"
                    />
                    <CFormInput
                        type="number"
                        label="Total Quantity in containers"
                        placeholder="Total Quantity in containers"
                        className="mb-3"
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                        Cancel
                    </CButton>
                    <CButton style={{ background: "#0F93C3", color: "white" }}>
                        Add
                    </CButton>
                </CModalFooter>
            </CModal></div>
    )
}

export default InternalRegistrationModal