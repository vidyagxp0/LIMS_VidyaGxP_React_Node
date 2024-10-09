import React from "react";
import axios from "axios";

export default function Apicall(props) {
  const { apiType, gridName, data, buttonName = "Submit", apiResponse } = props;

  const postApi = () => {
    axios
      .post(`http://localhost:9000/manage-lims/add/${gridName}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        apiResponse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateApi = () => {
    axios
      .post(`http://localhost:9000/manage-lims/update/${gridName}/${data._sNo}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // props.setGridData({ [gridName]: response.data });
        apiResponse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {apiType === "post" ? (
        <button onClick={postApi}>{buttonName}</button>
      ) : (
        <button onClick={updateApi}>{buttonName}</button>
      )}
    </>
  );
}
