/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import "../Dashboard/Dashboard.css";
import { useEffect, useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";
import Chart6 from "./Chart6";
import Chart7 from "./Chart7";
import { Chart8 } from "./Chart8";
import Chart9 from "./Chart9";
import Chart10 from "./Chart10";

function Dashboard(props) {
  useEffect(() => {
    if (props.show) {
      toast.success("Login successfully");
      props.setToast(false);
    }
  }, [props.show]);

  const latestProducts = [
    "Apixaban",
    "Glass",
    "Hydraulic Oil",
    "chpoil",
    "chpoil",
    "chpoil",
    "chpoil",
    "Feliconar",
  ];

  const ARNumber = [
    "ARPC0000099",
    "ARPC0000098",
    "ARPC0000097",
    "ARPC0000096",
    "ARFFT0000094",
    "ARRW0000093",
    "ARRW0000093",
    "ARFFT0000091",
  ];

  return (
    <>
      <div className=" w-full h-full ">
        <div className="p-4 rounded-xl">
          <div>
            <h2 className="font-extrabold text-2xl mb-4">Dashboard</h2>
          </div>
          <div className="flex flex-wrap items-center justify-around gap-4 h-auto">
            <div
              className="m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px] xs:w-full"
              style={{
                backgroundImage:
                  'url("https://media.istockphoto.com/id/1410455925/vector/dynamic-blue-particle-wave-abstract-sound-visualization-digital-structure-of-the-wave-flow.jpg?s=612x612&w=0&k=20&c=RL7do3aEvte0cKukjC30eHQ4nujXUIOa2TvQbIN8eKw=")',
              }}
            >
              <div className="text-white text-2xl">On Going Test</div>
              <div className="text-3xl text-white font-bold">277</div>
            </div>
            <div
              className="m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://c4.wallpaperflare.com/wallpaper/624/336/42/science-the-big-bang-theory-atoms-wallpaper-preview.jpg')",
              }}
            >
              <div className="text-white text-2xl">Completed Test</div>
              <div className="text-3xl text-white font-bold">48</div>
            </div>

            <div
              className="m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/006/712/955/small/abstract-health-medical-science-consist-doctor-digital-wireframe-concept-modern-medical-technology-treatment-medicine-on-gray-background-for-template-web-design-or-presentation-vector.jpg')",
              }}
            >
              <div className="text-white text-2xl">Pending Test</div>
              <div className="text-3xl text-white font-bold">221</div>
            </div>

            <div
              className="m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-photo/high-angle-view-eyeglasses-table-against-black-background_1048944-215100.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715731200&semt=ais_user')",
              }}
            >
              <div className="text-white text-2xl">Instruments</div>
              <div className="text-3xl text-white font-bold">9</div>
            </div>

            <div
              className="m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://png.pngtree.com/thumb_back/fh260/background/20210716/pngtree-abstract-geometric-medical-background-of-science-and-technology-style-gene-atom-image_743373.jpg')",
              }}
            >
              <div className="text-white text-2xl">
                Instrument Under Calibration
              </div>
              <div className="text-3xl text-white font-bold">5</div>
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row justify-between rounded-xl m-3">
          <div className=" lg:w-10/12 shadow flex flex-col bg-white rounded-xl">
            <div className="flex p-2 justify-between">
              <div className="py-2 font-bold text-black">Material</div>
              <div className="text-black font-bold text-2xl">
                <button>...</button>
              </div>
            </div>
            <div className="flex flex-col p-3">
              <div className="flex gap-3 items-center flex-wrap">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">Pending</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">In-progress</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">Approved</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-700 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">Dropped</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-600 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">Under-Review</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">Completed</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center pt-4">
                <div className="p-3 w-48 h-48 flex items-center justify-center">
                  <CircularProgressbar
                    background
                    backgroundPadding={6}
                    value={15}
                    text={"15%"}
                    strokeWidth={8}
                    styles={buildStyles({
                      backgroundColor: "#e3e1fd",
                      textColor: "#212529",
                      pathColor: "orange",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="p-3 w-48 h-48 flex items-center justify-center">
                  <CircularProgressbar
                    background
                    backgroundPadding={6}
                    value={30.1}
                    text={"30.1%"}
                    strokeWidth={8}
                    styles={buildStyles({
                      backgroundColor: "#e3e1fd",
                      textColor: "#212529",
                      pathColor: "blue",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="p-3 w-48 h-48 flex items-center justify-center">
                  <CircularProgressbar
                    background
                    backgroundPadding={6}
                    value={45.87}
                    text={"45.87%"}
                    strokeWidth={8}
                    styles={buildStyles({
                      backgroundColor: "#e3e1fd",
                      textColor: "#212529",
                      pathColor: "green",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="p-3 w-48 h-48 flex items-center justify-center">
                  <CircularProgressbar
                    background
                    backgroundPadding={6}
                    value={60}
                    text={"60%"}
                    strokeWidth={8}
                    styles={buildStyles({
                      backgroundColor: "#e3e1fd",
                      textColor: "#212529",
                      pathColor: "purple",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="p-3 w-48 h-48 flex items-center justify-center">
                  <CircularProgressbar
                    background
                    backgroundPadding={6}
                    value={75}
                    text={"75%"}
                    strokeWidth={8}
                    styles={buildStyles({
                      backgroundColor: "#e3e1fd",
                      textColor: "#212529",
                      pathColor: "red",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="p-3 w-48 h-48 flex items-center justify-center">
                  <CircularProgressbar
                    background
                    backgroundPadding={6}
                    value={90.87}
                    text={"90.87%"}
                    strokeWidth={8}
                    styles={buildStyles({
                      backgroundColor: "#e3e1fd",
                      textColor: "#212529",
                      pathColor: "yellow",
                      trailColor: "transparent",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/12 shadow bg-white rounded-xl">
            <div className="text-lg font-bold m-4 text-center lg:text-left">
              Latest Products
            </div>
            <ul className="list-none font-serif grid gap-3 text-gray-800 mx-4">
              {latestProducts.map((product, idx) => (
                <li className="text-black" key={idx}>
                  ◆ {product}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart1 />
            </div>
          </div>

          <div className="w-full p-2 shadow lg:w-6/12 md:w-full flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">
              Test Wise Stats
            </div>
            <div className="flex items-center justify-center">
              <Chart2 />
            </div>
          </div>

          <div className="w-full shadow lg:w-2/12 bg-white rounded-xl">
            <div className="text-lg font-bold m-4 text-center ">AR Number</div>
            <ul className="list-none font-serif grid gap-3 text-gray-800 mx-4">
              {ARNumber.map((product, idx) => (
                <li className="text-black" key={idx}>
                  ◆ {product}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart3 />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart4 />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart5 />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product6</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart6 />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="w-full p-2 shadow lg:w-6/12 md:w-full flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">
              Test Wise Stats
            </div>
            <div className="flex items-center justify-center">
              <Chart7 />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Test</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart8 />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 font-bold text-center">
              Category wise Instruments
            </div>
            <div className="p-4 flex items-center justify-center  ">
              <Chart9 />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">
              Material Status
            </div>
            <div className="pt-4 mx-4 flex items-center justify-center">
              <Chart10 />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Dashboard;
