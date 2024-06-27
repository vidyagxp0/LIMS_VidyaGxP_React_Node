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
import Chart from "react-apexcharts";

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

  function genData(len, offset) {
    let arr = new Float32Array(len * 2);
    let off = 0;
    for (let i = 0; i < len; i++) {
      let x = +Math.random() * 10;
      let y =
        +Math.sin(x) -
        x * (len % 2 ? 0.1 : -0.1) * Math.random() +
        (offset || 0) / 10;
      arr[off++] = x;
      arr[off++] = y;
    }
    return arr;
  }

  const options = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const options2 = {
    chart: {
      id: "basic-area",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series2 = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const options3 = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series3 = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const options4 = {
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  };
  const series4 = [44, 55, 13, 43, 22];

  const options5 = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  };
  const series5 = [44, 55, 67, 83];

  const options6 = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series6 = [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
      ],
    },
  ];
  const options7 = {
    chart: {
      id: "basic-polar-area",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  };
  const series7 = [44, 55, 13, 43, 22];

  const options8 = {
    chart: {
      id: "basic-treemap",
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: true,
      },
    },
  };
  const series8 = [
    {
      data: [
        { x: "Category A", y: 10 },
        { x: "Category B", y: 20 },
        { x: "Category C", y: 30 },
        { x: "Category D", y: 40 },
        { x: "Category E", y: 50 },
      ],
    },
  ];

  const options9 = {
    chart: {
      id: "basic-heatmap",
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            { from: 0, to: 50, color: "#00A100" },
            { from: 51, to: 100, color: "#128FD9" },
            { from: 101, to: 150, color: "#FFB200" },
            { from: 151, to: 200, color: "#FF0000" },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series9 = [
    {
      name: "Metric1",
      data: [
        { x: "Jan", y: 30 },
        { x: "Feb", y: 20 },
        { x: "Mar", y: 50 },
        { x: "Apr", y: 80 },
        { x: "May", y: 20 },
        { x: "Jun", y: 30 },
      ],
    },
    {
      name: "Metric2",
      data: [
        { x: "Jan", y: 50 },
        { x: "Feb", y: 70 },
        { x: "Mar", y: 40 },
        { x: "Apr", y: 60 },
        { x: "May", y: 70 },
        { x: "Jun", y: 80 },
      ],
    },
  ];

  const options10 = {
    chart: {
      id: "basic-radar",
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
  };
  const series10 = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
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
              <Chart
                options={options3}
                series={series3}
                type="bar"
                width="100%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>

          <div className="w-full p-2 shadow lg:w-6/12 md:w-full flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">
              Test Wise Stats
            </div>
            <div className="flex items-center justify-center">
              <Chart
                options={options2}
                series={series2}
                type="area"
                width="100%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>

          <div className="w-full shadow lg:w-2/12 bg-white rounded-xl">
            <div className="text-lg font-bold m-4 text-center lg:text-left">
              AR Number
            </div>
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
              <Chart
                options={options7}
                series={series7}
                type="polarArea"
                width="80%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart
                options={options8}
                series={series8}
                type="treemap"
                width="80%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart
                options={options9}
                series={series9}
                type="heatmap"
                width="80%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Product</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart
                options={options10}
                series={series10}
                type="radar"
                width="85%"
                className="lg:w-[100%]  lg:h-full "
              />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="w-full p-2 shadow lg:w-6/12 md:w-full flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">
              Test Wise Stats
            </div>
            <div className="flex items-center justify-center">
              <Chart
                options={options5}
                series={series5}
                type="radialBar"
                width="70%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>  

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">Test</div>
            <div className="pt-4 mx-3 flex items-center justify-center">
              <Chart
                options={options4}
                series={series4}
                type="pie"
                width="70%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4 flex flex-col lg:flex-row rounded-xl m-3">
          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 font-bold text-center">
              Category wise Instruments
            </div>
            <div className="p-4 flex items-center justify-center  ">
              <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
                className="lg:w-[100%] lg:h-full "
              />
            </div>
          </div>

          <div className="p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 font-bold text-center">
              Material Status
            </div>
            <div className="pt-4 mx-4 flex items-center justify-center">
              <Chart
                options={options6}
                series={series6}
                type="candlestick"
                width="100%"
                className="w-[100%] h-full lg:w-[100%] lg:h-full "
              />
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
