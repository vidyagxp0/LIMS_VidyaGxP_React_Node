import React, { useEffect, useState } from "react";
import axios from "axios";
import ESignatureModal from "./ESignature/ESignatureModal";
import { useNavigate } from "react-router-dom";

const baseStages = [
  "Opened",
  "Pending Analysis",
  "Pending Supervisor Review ",
  "Pending QA Review",
  "Closed Done",
];

const ProgressBar2 = (props) => {
  const navigate = useNavigate();
  const { stage = 1, sampleId = 1, onStageClick } = props;

  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState(baseStages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVzIjpbeyJ1c2VyUm9sZV9pZCI6MTksInJvbGVfaWQiOjIsInVzZXJfaWQiOjQsInJvbGUiOiJJbml0aWF0b3IiLCJjcmVhdGVkQXQiOiIyMDI0LTEwLTE4VDExOjMzOjA0LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEwLTE4VDExOjMzOjA0LjAwMFoifSx7InVzZXJSb2xlX2lkIjoyMCwicm9sZV9pZCI6MywidXNlcl9pZCI6NCwicm9sZSI6IlJldmlld2VyIiwiY3JlYXRlZEF0IjoiMjAyNC0xMC0xOFQxMTozMzowNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0xMC0xOFQxMTozMzowNC4wMDBaIn0seyJ1c2VyUm9sZV9pZCI6MjEsInJvbGVfaWQiOjQsInVzZXJfaWQiOjQsInJvbGUiOiJBcHByb3ZlciIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMThUMTE6MzM6MDQuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMThUMTE6MzM6MDQuMDAwWiJ9LHsidXNlclJvbGVfaWQiOjIyLCJyb2xlX2lkIjo1LCJ1c2VyX2lkIjo0LCJyb2xlIjoiVmlld29ubHkiLCJjcmVhdGVkQXQiOiIyMDI0LTEwLTE4VDExOjMzOjA0LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEwLTE4VDExOjMzOjA0LjAwMFoifSx7InVzZXJSb2xlX2lkIjoyMywicm9sZV9pZCI6NiwidXNlcl9pZCI6NCwicm9sZSI6IkZ1bGxwZXJtaXNzaW9uIiwiY3JlYXRlZEF0IjoiMjAyNC0xMC0xOFQxMTozMzowNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0xMC0xOFQxMTozMzowNC4wMDBaIn1dLCJpYXQiOjE3MjkyNTEyMzQsImV4cCI6MTcyOTMzNzYzNH0.9MW4KFce_eizbvURp4XEaurDiPiQIkK5cJSlWqQdLlY";
  useEffect(() => {
    setCurrentStage(stage - 1);
    console.log(stage);

    // if (stage === 5) {
    //   setStages([...baseStages, "Closed Cancelled"]);
    // } else {
    //   setStages(baseStages);
    // }
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

  const callApis = async (formData, sampleId) => {
    try {
      const email = formData.username;
      const password = formData.password;
      const comment = formData.comment;

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
        const response = await axios.post(
          `http://localhost:9000/${url}`,
          { sampleId, comment },
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
      <ESignatureModal open={isModalOpen} handleClose={handleClose} submitAction={handleSubmit} />
      <div className="flex flex-col items-center p-4 pb-2 bg-slate-300">
        <div className="flex w-full max-w-4xl justify-between mb-2 ">
          {stages.map((stageName, index) => (
            <div
              key={index}
              className={`flex-1 text-center p-2 cursor-pointer border rounded 
              ${index < currentStage ? "bg-green-500 text-white" : ""} 
              ${index === currentStage && index !== 4 ? "bg-orange-500 text-white" : ""} 
              ${index === 3 && currentStage === 3 ? "bg-orange-500 text-white" : ""}
              ${index === 4 && currentStage === 4 ? "bg-red-500 text-white" : ""} 
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
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-review")}
              >
                Sample Registration
              </button>
            </>
          )}
          {stage == "2" && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-supervisor")}
              >
                Analysis Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-open")}
              >
                More Info Required
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-to-open")}
              >
                Create Child
              </button>
              {/* <button className="bg-white text-black px-4 py-2 rounded hover:bg-teal-500">
                  Create 00S
                </button>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-teal-500">
                  Create 00T
                </button>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-teal-500">
                  Create Lab Incident
                </button>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-teal-500">
                  Create Action Item
                </button>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-teal-500">
                  Create RCA
                </button>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-teal-500">
                  Create CAPA
                </button> */}
            </>
          )}
          {stage == "3" && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200"
                onClick={() => handleOpen("send-qa")}
              >
                Superwiser Review Complete
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200"
                onClick={() => handleOpen("send-to-open")}
              >
                More Info Required
              </button>
            </>
          )}
          {stage == "4" && (
            <>
              <button
                className="bg-white text-black px-4 py-2 rounded hover:scale-95 duration-200 hover:bg-teal-500"
                onClick={() => handleOpen("send-qa-review")}
              >
                QA Review Complete
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

export default ProgressBar2;
