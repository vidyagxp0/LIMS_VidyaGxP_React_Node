import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  boxShadow: 24,
  padding: theme.spacing(4),
  borderRadius: "8px",
}));

const ESignatureModal = ({ open = true, handleClose, submitAction }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const formData = { username, password, comment };
    submitAction(formData); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox className="p-6 bg-white rounded-lg shadow-md">
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#1e90ff" }}
        >
          E-Signature
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-justify">
          Please enter your username and password for this task. You are performing an electronic
          signature, which is legally binding equivalent of a handwritten signature.
        </Typography>
        <form className="mt-4 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            required
            id="username"
            label="Username"
            variant="outlined"
            className="mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on change
          />
          <TextField
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
          <TextField
            fullWidth
            id="comment"
            label="Comment"
            variant="outlined"
            className="mb-4"
            value={comment}
            onChange={(e) => setComment(e.target.value)} // Update state on change
          />
          <div className="flex justify-between mt-4">
            <Button variant="contained" color="primary" className="mr-2" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </div>
        </form>
      </StyledBox>
    </Modal>
  );
};

export default ESignatureModal;
