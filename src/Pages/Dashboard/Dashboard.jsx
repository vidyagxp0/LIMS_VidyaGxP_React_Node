/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import "../Dashboard/Dashboard.css";
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LineChart from "echarts-for-react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

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

  const pieChartOptions = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Initiated", "Completed", "Pending", "Dropped"],
    },
    series: [
      {
        name: "Status",
        type: "pie",
        radius: "50%",
        data: [
          { value: 10, name: "Initiated" }, // sum of all "Initiated" data
          { value: 8, name: "Completed" }, // sum of all "Completed" data
          { value: 68, name: "Pending" }, // sum of all "Pending" data
          { value: 0, name: "Dropped" }, // sum of all "Dropped" data
        ],
        emphasis: {
          itemStyle: {
            Blur: 10,
            OffsetX: 0,
            Color: "rgba(0, 0, 0, 0.8)",
          },
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };

  const funnelOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      data: ["Material Status"],
    },
    series: [
      {
        name: "Material Status",
        type: "funnel",
        left: "16%",
        top: 60,
        bottom: 60,
        width: "70%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        data: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
        ],
      },
    ],
  };

  const analysisOptions = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Initiated", "Completed", "Pending", "Dropped"],
    },
    grid: {
      show: false,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: [
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
        "Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)",
      ],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Initiated",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          0, 0, 5, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 1,
        ],
      },
      {
        name: "Completed",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1,
          0, 1, 0, 0, 0,
        ],
      },
      {
        name: "Pending",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          3, 1, 3, 4, 7, 1, 2, 1, 0, 1, 1, 1, 1, 2, 2, 11, 2, 8, 1, 1, 1, 7, 8,
          1, 18, 2, 2, 2,
        ],
      },
      {
        name: "Dropped",
        type: "line",
        symbol: "circle",
        smooth: true,
        stack: "Total",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0,
        ],
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };

  const materialOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Material"],
    },
    grid: {
      show: false,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        show: true,
      },
      data: [
        "16 Jun 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "24 Jun 2023",
        "20 Sep 2023",
        "12 Feb 2023",
        "22 Mar 2023",
        "12 Feb 2023",
        "22 Mar 2023",
      ],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Material",
        type: "bar",
        stack: "Total",
        color: "#0089c8",
        data: [
          1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3,
          2, 2, 1, 1, 2, 2, 1, 1, 2, 2,
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };

  const productWiseTestStatsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "",
      },
    },
    legend: {},
    grid: {
      left: "1%",
      right: "5%",
      top: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      name: "Product",
      type: "category",
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0,
      },
      data: [
        "Formulation Analysis",
        "Impurity Profiling",
        "Potency Testing",
        "Dissolution Testing",
        "Stability Testing",
        "Bioavailability Assessment",
        "Microbiological Testing",

        "Biowaivers Assessment",
        "Container Material Compatibility",
        "Photostability Testing",
        "Forced Degradation Studies",
        "Reference Standard Qualification",
        "Sterility Testing",
        "Endotoxin Testing",
      ],
    },
    yAxis: {
      type: "value",
      name: "Tests",
    },
    series: [
      {
        name: "Test Registered",
        type: "bar",
        data: [
          6, 8, 3, 2, 5, 1, 7, 9, 4, 3, 7, 2, 4, 1, 9, 5, 8, 6, 2, 5, 4, 3, 1,
          7, 9,
        ],
        itemStyle: {
          color: "#0089c8",
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        name: "Test Executed",
        type: "bar",
        data: [
          0, 0, 1, 2, 2, 0, 0, 1, 7, 0, 5, 0, 3, 2, 4, 2, 0, 2, 2, 0, 4, 6, 8,
          1, 0,
        ],
        itemStyle: {
          color: "#ffada4",
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 40,
        bottom: "0%",
      },
    ],
  };

  const testWiseStatsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "",
      },
    },
    legend: {},
    grid: {
      left: "1%",
      right: "5%",
      top: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      name: "Products",
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0,
      },
      data: [
        "Formulation Analysis",
        "Pharmacodynamic Evaluation",
        "In Silico Modeling and Simulation",
        "Process Optimization",
        "Potency Testing",
        "Toxicological Studies",
        "Microbiological Testing",
        "In Vitro Diagnostics",
        "Genomic Biomarker Analysis",
        "Pharmacogenomics Analysis",
        "Drug Delivery Systems",
        "Clinical Endpoint Assessment",
        "Environmental Monitoring",
        "Sterility Testing",
        "Bacterial Endotoxin Testing (BET)",
        "Biological Product Characterization",
        "Excipient Selection",
        "Tablet Hardness Testing",
        "Pharmaceutical Packaging",
        "Solubility Testing",
        "Pharmacogenetics Testing",
        "Genotoxicity Studies",
        "Pharmacovigilance Monitoring",
        "Pharmacogenetics Profiling",
        "Bioavailability Assessment",
        "Inhalation Toxicology",
        "Description",
        "Lyophilization Cycle Optimization",
        "Method Development and Validation",
        "Quality Control Measures",
        "Endotoxin Testing",
        "Single Maximum unknown impurity Mirabegron",
        "Special Gravity",
        "Post-Marketing Surveillance",
        "Cell Culture Studies",
        "Sterilization Validation",
        "Process Validation",
        "Bioequivalence Studies",
        "Pharmacoeconomic Evaluation",
        "Pharmaceutical Marketing",
        "Quality by Design (QbD) Implementation",
        "Mirabegron (As Extended Release)...25mg",
        "Regulatory Compliance",
        "Pharmacokinetic Analysis",
        "Extractable and Leachable Studies",
        "Total Acid Number (TAN)",
        "Nanoparticle Characterization",
        "Analytical Method Development",
        "Impurity Profiling",
        "In Vitro-In Vivo Correlation",
        "Pharmaceutical Development",
        "Total Impurities",
        "Formulation Development",
        "Freeze-Thaw Testing",
        "Drug Product Development",
        "Pharmacokinetic Modeling",
        "Immunogenicity Testing",
        "Biowaivers Assessment",
        "Assay",
        "Reference Standard Qualification",
        "Dissolution Testing",
        "Pharmaceutical Testing",
        "Clinical Development",
        "Color Test",
        "FG Assya Text",
        "Pharmacogenomics Analysis",
      ],
    },
    yAxis: {
      type: "value",
      name: "Tests",
    },
    series: [
      {
        name: "Test Planned",
        type: "line",
        data: [
          6, 3, 1, 3, 4, 4, 3, 1, 9, 1, 8, 4, 6, 3, 7, 6, 4, 2, 2, 3, 6, 1, 9,
          3, 2, 7, 3, 5, 9, 1, 4, 6, 2, 1, 4, 5, 8, 2, 3, 7, 4, 9, 6, 3, 2, 8,
          6, 1, 14, 9, 3, 2, 7, 3, 5, 9, 1, 4, 6, 2, 1, 4, 5, 8, 2, 3, 7, 4, 9,
          6, 3,
        ],
        itemStyle: {
          color: "blue",
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        name: "Test Executed",
        type: "bar",
        data: [
          2, 7, 4, 1, 8, 3, 6, 5, 9, 0, 4, 8, 1, 6, 2, 3, 7, 9, 5, 0, 3, 9, 4,
          5, 6, 1, 0, 2, 7, 8, 6, 0, 2, 7, 1, 9, 5, 4, 8, 3, 8, 2, 5, 7, 0, 9,
          3, 6, 1, 4, 4, 3, 1, 0, 8, 2, 6, 9, 7, 5, 7, 1, 6, 5, 4, 8, 0, 3, 9,
          2, 2, 9, 6, 1, 7, 5, 4, 8, 0, 3,
        ],
        itemStyle: {
          color: "#CE2029",
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 10,
        bottom: "5%",
      },
    ],
  };

  const getOption = () => {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
      },
      legend: {},
      grid: {
        left: "1%",
        right: "5%",
        top: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: {
        name: "Month",
        type: "category",
        boundaryGap: [0, 0.01],
        axisLabel: {
          rotate: 45,
          interval: 0,
        },
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        type: "value",
        name: "Rainfall (mm)",
      },
      series: [
        {
          name: "Rainfall",
          type: "bar",
          data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
          itemStyle: {
            color: "#0089c8",
            borderRadius: [5, 5, 0, 0],
          },
        },
      ],
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          type: "slider",
          show: true,
          xAxisIndex: 0,
          start: 0,
          end: 100,
          bottom: "0%",
        },
      ],
    };
  };

  const radarOption = {
    radar: {
      indicator: [
        { name: "Formulation Analysis", max: 10 },
        { name: "In Silico Modeling and Simulation", max: 10 },
        { name: "Pharmacodynamic Evaluation", max: 10 },
        { name: "In Silico Modeling and Simulation", max: 10 },
      ],
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [6, 3, 1, 5, 8, 5, 7, 1, 7],
            name: "Test Planned",
          },
          {
            value: [2, 7, 4, 5, 8, 7, 4, 5, 9, 5, 8],
            name: "Test Executed",
          },
          {
            value: [1, 2, 3, 4, 5, 6, 8, 7, 9, 5, 5, 5, 8, 4, 5],
            name: "Test Executed",
          },
          {
            value: [1, 55, 88, 77, 44, 55, 99, 66, 22, 5, 5],
            name: "Test Executed",
          },
          {
            value: [2, 7, 4, 5, 8, 7, 4, 5, 9, 5, 0],
            name: "Test Executed",
          },
        ],
      },
    ],
  };

  const chartRef = useRef(null);
  useEffect(() => {
    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        data: [
          "Direct",
          "Marketing",
          "Search Engine",
          "Email",
          "Union Ads",
          "Video Ads",
        ],
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          label: {
            position: "inner",
            fontSize: 14,
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1548, name: "Search Engine" },
            { value: 775, name: "Direct" },
            { value: 679, name: "Marketing", selected: true },
          ],
        },
        {
          name: "Access From",
          type: "pie",
          radius: ["45%", "60%"],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: "#6E7079",
                lineHeight: 22,
                align: "center",
              },
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: [
            { value: 1048, name: "Baidu" },
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 251, name: "Google" },
            { value: 234, name: "Union Ads" },
          ],
        },
      ],
    };

    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

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

  return (
    <>
      <div className=" w-full ">
        <div className=" p-4 m-3 rounded-xl">
          <div>
            <h2 className="font-extrabold  text-3xl mb-4">Dashboard</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between h-auto">
            <div
              className="-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px] xs:w-full "
              style={{
                backgroundImage:
                  'url("https://media.istockphoto.com/id/1410455925/vector/dynamic-blue-particle-wave-abstract-sound-visualization-digital-structure-of-the-wave-flow.jpg?s=612x612&w=0&k=20&c=RL7do3aEvte0cKukjC30eHQ4nujXUIOa2TvQbIN8eKw=")',
              }}
            >
              <div className="text-white text-2xl">On Going Test</div>
              <div className="text-3xl text-white font-bold">277</div>
            </div>
            <div
              className="-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://c4.wallpaperflare.com/wallpaper/624/336/42/science-the-big-bang-theory-atoms-wallpaper-preview.jpg')",
              }}
            >
              <div className="text-white text-2xl">Completed Test</div>
              <div className="text-3xl text-white font-bold">48</div>
            </div>

            <div
              className="-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/006/712/955/small/abstract-health-medical-science-consist-doctor-digital-wireframe-concept-modern-medical-technology-treatment-medicine-on-gray-background-for-template-web-design-or-presentation-vector.jpg')",
              }}
            >
              <div className="text-white text-2xl">Pending Test</div>
              <div className="text-3xl text-white font-bold">221</div>
            </div>

            <div
              className="-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-photo/high-angle-view-eyeglasses-table-against-black-background_1048944-215100.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715731200&semt=ais_user')",
              }}
            >
              <div className="text-white text-2xl">Instruments</div>
              <div className="text-3xl text-white font-bold">9</div>
            </div>

            <div
              className="-lg m-1 p-4 text-center bg-cover bg-no-repeat rounded-2xl flex flex-col items-center justify-center w-full sm:w-[280px] h-[160px]"
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

        <div className=" p-2 gap-4   flex flex-col  lg:flex-row justify-between rounded-xl m-3 ">
          <div className="w-full lg:w-10/12 shadow flex flex-col bg-white rounded-xl">
            <div className="flex p-2 justify-between">
              <div className="py-2 font-bold text-black">Material</div>
              <div className="text-black font-bold text-2xl">
                <button>...</button>
              </div>
            </div>
            <div className="flex flex-col p-3 ">
              <div className="flex gap-3 mb-4 ">
                <div className="flex items-center ">
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
                  <div className="bg-red-500 rounded-full w-3 h-3 mr-2"></div>
                  <span className="text-gray-700">Dropped</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center pt-4 xs:flex-col xs:items-center sm:flex-col sm:items-center md:flex-row md:justify-center lg:flex-row lg:justify-center xl:flex-row xl:justify-center 2xl:flex-row 2xl:justify-center">
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

          <div className="w-full shadow lg:w-2/12 bg-white rounded-xl">
            <div className="text-lg font-bold m-4">Latest Products</div>
            <ul className="list-none font-serif grid gap-3 p-3 text-gray-800 mx-4">
              {latestProducts.map((product, idx) => (
                <li className="text-black" key={idx}>
                  ◆ {product}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-2 gap-4  flex flex-col lg:flex-row  rounded-xl m-3 ">
          <div className="w-full shadow lg:w-5/12 flex flex-col bg-white rounded-xl">
            <div className="-lg cardItem bg-white rounded p-4">
              <div className="flex justify-between">
                <div className="py-2 font-semibold">Analysis</div>
                <div className="font-semibold text-lg">...</div>
              </div>
              <div className="mt-4">
                <LineChart option={pieChartOptions} />
              </div>
            </div>
          </div>

          <div className="w-full shadow lg:w-5/12 flex flex-col bg-white rounded-xl">
            <div className="-lg cardItem bg-white rounded p-4">
              <div className="flex justify-between">
                <div className="py-2 font-semibold">Test Stats</div>
                <div className="font-semibold text-lg">...</div>
              </div>
              <div className="mt-4">
                <LineChart option={materialOption} />
              </div>
            </div>
          </div>
          <div className="w-full shadow lg:w-2/12 bg-white rounded-xl">
            <div className="text-lg font-bold m-4">AR Number</div>
            <ul className="list-none grid gap-3 text-gray-700 mx-4">
              {ARNumber.map((product, idx) => (
                <li className="text-black" key={idx}>
                  ◆ {product}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-2 gap-4  flex flex-col lg:flex-row   rounded-xl m-3 ">
          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder">Product Wise Test stats</div>
            <div className="pt-4 mx-5">
              <div
                ref={chartRef}
                style={{ width: "100%", height: "400px" }}
              ></div>
            </div>
          </div>

          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder text-center">
              Material Status
            </div>
            <div className="pt-4 mx-4">
              <LineChart option={funnelOption} />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4  flex flex-col lg:flex-row   rounded-xl m-3 ">
          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder">Product Wise Test stats</div>
            <div className="pt-4 mx-4">
              <LineChart option={productWiseTestStatsOption} />
            </div>
          </div>

          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder">Test Wise stats</div>
            <div className="pt-4 mx-5">
              <LineChart option={testWiseStatsOption} />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4  flex flex-col lg:flex-row   rounded-xl m-3 ">
          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder">Product</div>
            <div className="pt-4 mx-5">
              <ReactEcharts option={radarOption} />
            </div>
          </div>

          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder">Test </div>
            <div className="pt-4 mx-5">
              <ReactEcharts option={getOption()} />
            </div>
          </div>
        </div>

        <div className="p-2 gap-4  flex flex-col lg:flex-row   rounded-xl m-3 ">
          <div className="w-full p-2 shadow  lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 fw-bolder text-center">
              Category wise Instruments
            </div>
            <div className="">
              <LineChart option={analysisOptions} className="p-4" />
            </div>
          </div>

          <div className="w-full p-2 shadow lg:w-6/12 flex flex-col bg-white rounded-xl">
            <div className="py-4 mx-3 fw-bolder text-center">
              Material Status
            </div>
            <div className="pt-4 mx-4">
              <LineChart option={funnelOption} />
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
