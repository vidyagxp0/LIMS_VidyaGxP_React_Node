import React, { useEffect, useState } from "react";
import axios from "axios";
import ESignatureModal from "./ESignature/ESignatureModal";
import { useNavigate } from "react-router-dom";
import ToastContainer from "../HotToaster/ToastContainer";
import toast from "react-hot-toast";

const baseStages = [
  "Opened",
  "Pending Analysis",
  "Pending Supervisor Review",
  "Pending QA Review",
  "Closed Done",
];

const ProgressBar = (props) => {
  const navigate = useNavigate();
  const { stage = 1, sampleId = 1, onStageClick } = props;

  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState(baseStages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    setCurrentStage(stage - 1);
  }, [stage]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData) => {
    const isSuccess = await callApis(formData, sampleId);
    if (isSuccess) {
      setIsModalOpen(false);
      toast.success(submitMessage);
      onStageClick();
    } else {
      setIsModalOpen(true);
      toast.error("Submission failed. Please try again.");
    }
  };

  const handleOpen = (url, message) => {
    setUrl(url);
    setIsModalOpen(true);
    setSubmitMessage(message);
  };

  const token = localStorage.getItem("token");

  const callApis = async (formData, sampleId) => {
    try {
      const email = formData.username.trim();
      const password = formData.password.trim();
      const comment = formData.comment.trim();
      if (!email || !password) {
        toast.error("All fields are required!");
        return false;
      }

      const response = await axios.post(
        "http://localhost:9000/e-signature",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.error) {
        await axios.post(
          `http://localhost:9000/${url}`,
          { sampleId, comment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return true;
      } else {
        toast.error("Incorrect email or password. Please try again.");
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error during request");
      return false;
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>

      <ESignatureModal
        open={isModalOpen}
        handleClose={handleClose}
        submitAction={handleSubmit}
      />
      <div className="flex flex-col items-center p-4 pb-2 bg-slate-300">
        <div className="flex w-full max-w-4xl justify-between mb-2 ">
          {stages.map((stageName, index) => (
            <div
              key={index}
              className={`flex-1 text-center p-2 cursor-pointer border rounded 
              ${index < currentStage ? "bg-green-500 text-white" : ""} 
              ${
                index === currentStage && index !== 4
                  ? "bg-orange-500 text-white"
                  : ""
              }
              ${
                index === 3 && currentStage === 3
                  ? "bg-orange-500 text-white"
                  : ""
              }
              ${
                index === 4 && currentStage === 4 ? "bg-red-500 text-white" : ""
              }
              ${index > currentStage ? "bg-gray-200" : ""}
              ${index < stages.length - 1 ? "mr-1" : ""}`}
            >
              {stageName}
            </div>
          ))}
        </div>
      </div>
      <div className="inner-container pqrform-topdiv">
        <div className="flex justify-end gap-4 bg-slate-700 p-3">
          {stage == "1" && (
            <button
              className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
              onClick={() =>
                handleOpen("send-review", "Sample registration initiated.")
              }
            >
              Sample Registration
            </button>
          )}
          {stage == "2" && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() =>
                  handleOpen("send-supervisor", "Analysis complete.")
                }
              >
                Analysis Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-open", "Action Done.")}
              >
                More Info Required
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() =>
                  handleOpen("send-to-open", "Create child initiated.")
                }
              >
                Create Child
              </button>
            </>
          )}
          {stage == "3" && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200"
                onClick={() =>
                  handleOpen("send-qa", "Supervisor review complete.")
                }
              >
                Supervisor Review Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200"
                onClick={() => handleOpen("send-to-open", "Action Done.")}
              >
                More Info Required
              </button>
            </>
          )}
          {stage == "4" && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() =>
                  handleOpen("send-qa-review", "QA review complete.")
                }
              >
                QA Review Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-open", "Action Done.")}
              >
                More Info Required
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
