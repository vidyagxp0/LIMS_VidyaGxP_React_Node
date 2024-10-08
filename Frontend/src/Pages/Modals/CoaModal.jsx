

import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";
import ATMButton from "../../components/ATM components/Button/ATMButton";

const CoaModal = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg p-8 z-10 max-w-md w-[300px] flex flex-col gap-2">
            <p className="text-bold" > Click the Button below to download the respective report </p>
        <ATMButton text="ACETMINOPHEN COA" color="blue"      onClick={() => {
        window.open("https://docs.google.com/document/d/1BtZ4efjnyoMiV329n4QCqQt14i74j0h2qNlVLnXeQJA/edit?usp=sharing", '_blank');
      }}
/>
        <ATMButton text="COA CRM" color="blue"  onClick={() => {
        window.open("https://docs.google.com/document/d/1I6zsnHM8QI-wWwM3Nt0bukQKfLJOAblgfKVrJNig2Ns/edit?usp=sharing", '_blank');
      }} />
        <button
              className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
              onClick={onClose}
            >
              Close
            </button>
        </div>
      
      </div>
    </>
  );
};

export default CoaModal;
