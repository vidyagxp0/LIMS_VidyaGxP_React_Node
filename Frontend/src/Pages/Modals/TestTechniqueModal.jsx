import React from 'react';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CButton,
  CModalFooter,
  CFormTextarea,
} from '@coreui/react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const TestTechniqueModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Add Test Technique</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p className="my-3 fs-5">Add information and add new Test Technique.</p>
        <CFormInput type="text" className="mb-3" label="Technique Name" placeholder="Technique Name" />
        <FormControl>
          <FormLabel id="technique-type-label" className="fw-medium">
            Type of technique
          </FormLabel>
          <RadioGroup row aria-labelledby="technique-type-label" name="technique-type">
            <FormControlLabel value="Complex" control={<Radio />} label="Complex" />
            <FormControlLabel value="Non-complex" control={<Radio />} label="Non-complex" />
          </RadioGroup>
        </FormControl>
        <CFormInput type="text" className="mb-3" label="Technique Description" placeholder="Technique Description" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton className="bg-info text-white">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

const UpdateModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Update Test Technique</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p className="my-3 fs-5">Add information and update Test Technique.</p>
        <CFormInput type="text" className="mb-3" label="Technique Name" placeholder="Technique Name" />
        <FormControl>
          <FormLabel id="update-technique-type-label" className="fw-medium">
            Type of technique
          </FormLabel>
          <RadioGroup row aria-labelledby="update-technique-type-label" name="update-technique-type">
            <FormControlLabel value="Complex" control={<Radio />} label="Complex" />
            <FormControlLabel value="Non-complex" control={<Radio />} label="Non-complex" />
          </RadioGroup>
        </FormControl>
        <CFormInput type="text" className="mb-3" label="Technique Description" placeholder="Technique Description" />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton className="bg-info text-white">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

export  default TestTechniqueModal ;
