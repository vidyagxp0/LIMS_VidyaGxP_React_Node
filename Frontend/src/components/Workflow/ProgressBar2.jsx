import React, { useEffect, useState } from "react";
import axios from "axios";
import ESignatureModal from "./ESignature/ESignatureModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Updated base stages to include only the specified stages
const baseStages = ["Opened", "Pending Qualification", "Closed Done"];

export const ProgressBar2 = (props) => {
  const navigate = useNavigate();
  const { stage = 1, sampleId = 1, onStageClick } = props;

  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState(baseStages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setCurrentStage(stage - 1);
    console.log(stage);
  }, [stage]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    setIsModalOpen(false);
    callApis(formData, sampleId);
  };

  const handleOpen = (url) => {
    setUrl(url);
    setIsModalOpen(true);
  };

  const callApis = async (formData, analystId) => {
    try {
      const email = formData.username.trim();
      const password = formData.password.trim();
      const comment = formData.comment.trim();

      // Check for empty fields
      if (!email || !password || !comment || !analystId) {
        toast.error("Please fill in all required fields!");
        return;
      }

      const response = await axios.post(
        "https://lims-api.mydemosoftware.com/e-signature",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.error) {
        console.log(analystId, "AAAAAAAAAAAAAAAAAAAA");

        await axios.post(
          `https://lims-api.mydemosoftware.com/analyst/${url}`,
          { analystId, comment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      onStageClick();
    } catch (error) {
      console.error("API error:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ESignatureModal
        open={isModalOpen}
        handleClose={handleClose}
        submitAction={handleSubmit}
      />
      <div className="flex flex-col items-center p-4 pb-2 bg-slate-300 shadow-lg">
        <div className="flex w-full max-w-4xl justify-between mb-2 ">
          {stages.map((stageName, index) => (
            <div
              key={index}
              className={`flex-1 text-center p-2 cursor-pointer border rounded 
              ${index < currentStage ? "bg-green-500 text-white" : ""} 
              ${
                index === currentStage && index !== stages.length - 1
                  ? "bg-orange-500 text-white"
                  : ""
              } 
              ${
                index === stages.length - 1 && currentStage === index
                  ? "bg-red-500 text-white"
                  : ""
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
          {stage === 1 && (
            <button
              className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
              onClick={() => handleOpen("send-review")}
            >
              Submit
            </button>
          )}
          {stage === 2 && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-reviewer")}
              >
                Qualification Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-open")}
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

const baseStages2 = [
  "Opened",
  "Pending Inspection of Control Sample",
  "Pending Destruction",
  "Closed Done",
];

export const ProgressBar3 = (props) => {
  const navigate = useNavigate();
  const { stage = 1, sampleId = 1, onStageClick } = props;

  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState(baseStages2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setCurrentStage(stage - 1);
  }, [stage]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    setIsModalOpen(false);
    callApis(formData, sampleId);
  };

  const handleOpen = (url) => {
    setUrl(url);
    setIsModalOpen(true);
  };

  const token = localStorage.getItem("token");

  const callApis = async (formData, controlSampleId) => {
    try {
      const email = formData.username;
      const password = formData.password;
      const comment = formData.comment;

      const response = await axios.post(
        "https://lims-api.mydemosoftware.com/e-signature",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.error) {
        await axios.post(
          `https://lims-api.mydemosoftware.com/controlSample/${url}`,
          { controlSampleId, comment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      onStageClick();
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <>
      <ESignatureModal
        open={isModalOpen}
        handleClose={handleClose}
        submitAction={handleSubmit}
      />
      <div className="flex flex-col items-center p-4 pb-2 bg-slate-300">
        <div className="flex w-full max-w-4xl justify-between mb-2">
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
                index === 2 && currentStage === 2
                  ? "bg-orange-500 text-white"
                  : ""
              } 
              ${
                index === 3 && currentStage === 3 ? "bg-red-500 text-white" : ""
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
          {stage === 1 && (
            <button
              className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
              onClick={() => handleOpen("send-review")}
            >
              Submit
            </button>
          )}
          {stage === 2 && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-reviewer")}
              >
                Inspection Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-open")}
              >
                More Info Required
              </button>
            </>
          )}
          {stage === 3 && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200"
                onClick={() => handleOpen("send-to-closed")}
              >
                Destruction Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200"
                onClick={() => handleOpen("send-to-open")}
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
