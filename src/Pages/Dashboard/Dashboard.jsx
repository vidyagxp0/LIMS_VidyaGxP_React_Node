import { CChart, CChartBar, CChartLine } from "@coreui/react-chartjs"
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LineChart from 'echarts-for-react';

function Dashboard(props) {
  useEffect(() => {
    if (props.show) {
      toast.success("Login successfully");
      props.setToast(false)
    }
  }, [props.show]);

  const latestProducts = ['Apixaban', 'Glass', 'Hydraulic Oil', 'chpoil', 'Feliconar', 'Feliconar', 'Feliconar', 'Sacubitril', 'Testamine'];

  const ARNumber = ['ARPC0000099', 'ARPC0000098', 'ARPC0000097', 'ARPC0000096', 'ARIP0000095', 'ARFFT0000094', 'ARRW0000093', 'ARRW0000092', 'ARFFT0000091', 'ARRW0000090'];

  const analysisOptions = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Initiated', 'Completed', 'Pending', 'Dropped']
    },
    grid: {
      show: false,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      data: [
        'Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Mon Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Tue Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Wed Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Thu Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Fri Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sat Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)',
        'Sun Jun 22 2023 00:00:00 GMT+0530 (India Standard Time)'
      ]
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'Initiated',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        stack: 'Total',
        data: [0, 0, 5, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      },
      {
        name: 'Completed',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        stack: 'Total',
        data: [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0]
      },
      {
        name: 'Pending',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        stack: 'Total',
        data: [3, 1, 3, 4, 7, 1, 2, 1, 0, 1, 1, 1, 1, 2, 2, 11, 2, 8, 1, 1, 1, 7, 8, 1, 18, 2, 2, 2]
      },
      {
        name: 'Dropped',
        type: 'line',
        symbol: 'circle',
        smooth: true,
        stack: 'Total',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  const materialOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Material']
    },
    grid: {
      show: false,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true
      },
      data: ['16 Jun 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '24 Jun 2023', '20 Sep 2023', '12 Feb 2023', '22 Mar 2023', '12 Feb 2023', '22 Mar 2023']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'Material',
        type: 'bar',
        stack: 'Total',
        color: '#0089c8',
        data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  const instrumentOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Category']
    },
    grid: {
      show: false,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true
      },
      data: ["chromatography", 'weighing balance']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true
      },
      splitLine: {
        show: true
      }
    },
    series: [
      {
        name: 'Category',
        type: 'bar',
        stack: 'Total',
        color: '#0089c8',
        data: [2, 7],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  const testStatsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '1%',
      right: '8%',
      top: '10%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: {
      name: 'Sample Login',
      type: 'category',
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0
      },
      data: [
        'ARPC0000099', 'ARRW0000017', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017',
        'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099',
        'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017',
        'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099',
        'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017',
        'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099',
        'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017',
        'ARPC0000099', 'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099',
        'ARRW0000017', 'ARPC0000099', 'ARRW0000017', 'ARPC0000099'
      ]
    },
    yAxis: {
      type: 'value',
      name: 'Tests'
    },
    series: [
      {
        name: 'Approved',
        type: 'bar',
        data: [
          6, 8, 3, 2, 5, 1, 7, 9, 4,
          3, 7, 2, 4, 1, 9, 5, 8, 6,
          2, 5, 4, 3, 1, 7, 9, 6, 8,
          3, 7, 2, 4, 1, 9, 5, 8, 6,
          2, 5, 4, 3, 1, 7, 9, 8
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'Mgr',
        type: 'bar',
        data: [
          4, 9, 8, 1, 2, 7, 5, 3, 6,
          2, 7, 1, 6, 3, 9, 8, 5, 4,
          3, 5, 2, 9, 6, 8, 1, 7, 4,
          5, 8, 2, 3, 9, 1, 4, 7, 6,
          7, 3, 9, 4, 2, 6, 5, 1
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'Pending',
        type: 'bar',
        data: [
          8, 3, 2, 6, 5, 4, 1, 9, 7,
          3, 9, 5, 4, 2, 1, 6, 7, 8,
          2, 7, 1, 6, 9, 3, 5, 8, 4,
          5, 4, 2, 7, 3, 8, 1, 9, 6,
          1, 9, 6, 8, 3, 5, 4, 7
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'QA Approval',
        type: 'bar',
        data: [
          7, 1, 5, 2, 6, 9, 4, 8, 3,
          2, 5, 8, 3, 7, 6, 9, 1, 4,
          6, 9, 4, 7, 8, 2, 3, 1, 5,
          4, 6, 9, 2, 1, 8, 7, 3, 5,
          3, 7, 2, 9, 1, 6, 8, 5
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'Rejected',
        type: 'bar',
        data: [
          5, 8, 2, 7, 1, 9, 6, 4, 3,
          7, 2, 9, 1, 5, 3, 4, 6, 8,
          3, 6, 4, 2, 5, 8, 1, 9, 7,
          9, 5, 7, 1, 3, 4, 8, 6, 2,
          1, 3, 7, 9, 6, 4, 8, 2
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'SC Approval',
        type: 'bar',
        data: [
          9, 7, 1, 4, 6, 3, 8, 5, 2,
          4, 5, 9, 2, 7, 8, 3, 6, 1,
          6, 8, 2, 5, 1, 4, 7, 9, 3,
          1, 3, 6, 7, 9, 2, 5, 8, 4,
          8, 2, 3, 1, 5, 7, 6, 4
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'SI',
        type: 'bar',
        data: [
          3, 5, 6, 9, 2, 8, 1, 4, 7,
          2, 1, 5, 7, 9, 4, 6, 3, 8,
          4, 3, 6, 1, 5, 8, 9, 7, 2,
          9, 8, 7, 2, 3, 6, 4, 1, 5,
          7, 4, 1, 8, 3, 2, 9, 6
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'TCI',
        type: 'bar',
        data: [
          0, 0, 1, 2, 2, 0, 0, 1, 7,
          0, 5, 0, 3, 2, 4, 2, 0, 2,
          2, 0, 4, 6, 8, 1, 0, 3, 0,
          4, 0, 5, 2, 0, 5, 2, 3
        ],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 15,
        bottom: '5%',
      }
    ]
  };

  const productWiseTestStatsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '1%',
      right: '5%',
      top: '10%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: {
      name: 'Product',
      type: 'category',
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0
      },
      data: [
        'Formulation Analysis', 'Impurity Profiling', 'Potency Testing', 'Dissolution Testing',
        'Stability Testing', 'Bioavailability Assessment', 'Microbiological Testing',
        'Extractable and Leachable Studies', 'Process Validation', 'Method Development and Validation',
        'Particle Size Analysis', 'Container Closure Integrity Testing', 'Water Content Determination',
        'Residual Solvents Analysis', 'Toxicological Studies', 'Excipient Compatibility Testing',
        'Pharmacokinetic Analysis', 'Pharmacodynamic Evaluation', 'Biowaivers Assessment',
        'Container Material Compatibility', 'Photostability Testing', 'Forced Degradation Studies',
        'Reference Standard Qualification', 'Sterility Testing', 'Endotoxin Testing'
      ]
    },
    yAxis: {
      type: 'value',
      name: 'Tests'
    },
    series: [
      {
        name: 'Test Registered',
        type: 'bar',
        data: [
          6, 8, 3, 2, 5, 1, 7, 9, 4,
          3, 7, 2, 4, 1, 9, 5, 8, 6,
          2, 5, 4, 3, 1, 7, 9
        ],
        itemStyle: {
          color: '#0089c8',
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'Test Executed',
        type: 'bar',
        data: [0, 0, 1, 2, 2, 0, 0, 1, 7, 0, 5, 0, 3, 2, 4, 2, 0, 2, 2, 0, 4, 6, 8, 1, 0],
        itemStyle: {
          color: '#ffada4',
          borderRadius: [5, 5, 0, 0]
        }
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 10,
        bottom: '5%',
      }
    ]
  };

  const testWiseStatsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '1%',
      right: '5%',
      top: '10%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      name: 'Products',
      boundaryGap: [0, 0.01],
      axisLabel: {
        rotate: 45,
        interval: 0
      },
      data: [
        'Formulation Analysis', 'Pharmacodynamic Evaluation', 'In Silico Modeling and Simulation', 'Process Optimization', 'Potency Testing',
        'Toxicological Studies', 'Microbiological Testing', 'In Vitro Diagnostics', 'Genomic Biomarker Analysis', 'Pharmacogenomics Analysis',
        'Drug Delivery Systems', 'Clinical Endpoint Assessment', 'Environmental Monitoring', 'Sterility Testing', 'Bacterial Endotoxin Testing (BET)',
        'Biological Product Characterization', 'Excipient Selection', 'Tablet Hardness Testing', 'Pharmaceutical Packaging', 'Solubility Testing',
        'Pharmacogenetics Testing', 'Genotoxicity Studies', 'Pharmacovigilance Monitoring', 'Pharmacogenetics Profiling', 'Bioavailability Assessment',
        'Inhalation Toxicology', 'Description', 'Lyophilization Cycle Optimization', 'Method Development and Validation', 'Quality Control Measures',
        'Endotoxin Testing', 'Single Maximum unknown impurity Mirabegron', 'Special Gravity', 'Post-Marketing Surveillance', 'Cell Culture Studies',
        'Sterilization Validation', 'Process Validation', 'Bioequivalence Studies', 'Pharmacoeconomic Evaluation', 'Pharmaceutical Marketing',
        'Quality by Design (QbD) Implementation', 'Mirabegron (As Extended Release)...25mg', 'Regulatory Compliance', 'Pharmacokinetic Analysis',
        'Extractable and Leachable Studies', 'Total Acid Number (TAN)', 'Nanoparticle Characterization', 'Analytical Method Development',
        'Impurity Profiling', 'In Vitro-In Vivo Correlation', 'Pharmaceutical Development', 'Total Impurities', 'Formulation Development',
        'Freeze-Thaw Testing', 'Drug Product Development', 'Pharmacokinetic Modeling', 'Immunogenicity Testing', 'Biowaivers Assessment',
        'Assay', 'Reference Standard Qualification', 'Dissolution Testing', 'Pharmaceutical Testing', 'Clinical Development', 'Color Test',
        'FG Assya Text', 'Pharmacogenomics Analysis'
      ]

    },
    yAxis: {
      type: 'value',
      name: 'Tests'
    },
    series: [
      {
        name: 'Test Planned',
        type: 'bar',
        data: [
          6, 3, 1, 3, 4, 4, 3, 1, 9, 1, 8, 4, 6, 3, 7, 6, 4, 2, 2, 3, 6, 1, 9, 3, 2, 7, 3, 5, 9, 1,
          4, 6, 2, 1, 4, 5, 8, 2, 3, 7, 4, 9, 6, 3, 2, 8, 6, 1, 14, 9, 3, 2, 7, 3, 5, 9, 1, 4, 6, 2, 1,
          4, 5, 8, 2, 3, 7, 4, 9, 6, 3
        ],
        itemStyle: {
          color: '#0089c8',
          borderRadius: [5, 5, 0, 0]
        }
      },
      {
        name: 'Test Executed',
        type: 'bar',
        data: [
          2, 7, 4, 1, 8, 3, 6, 5, 9, 0,
          4, 8, 1, 6, 2, 3, 7, 9, 5, 0,
          3, 9, 4, 5, 6, 1, 0, 2, 7, 8,
          6, 0, 2, 7, 1, 9, 5, 4, 8, 3,
          8, 2, 5, 7, 0, 9, 3, 6, 1, 4,
          4, 3, 1, 0, 8, 2, 6, 9, 7, 5,
          7, 1, 6, 5, 4, 8, 0, 3, 9, 2,
          2, 9, 6, 1, 7, 5, 4, 8, 0, 3
        ],
        itemStyle: {
          color: '#ffada4',
          borderRadius: [5, 5, 0, 0]
        }
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 10,
        bottom: '5%',
      }
    ]
  };

  return (
    <>
      <div id="dashboard" className="mx-5">
        <div className="sub-head mt-5 mb-4">
          <div className="title fw-bold fs-5">Dashboard</div>
        </div>
        <div className="d-flex gap-4">
          <div className="chart-widgets w-75">
            <div className="">
              <div className="row">
                <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
                  <div className="text-light fs-5">On Going Test</div>
                  <div className="count fs-1 text-light fw-bolder">277</div>
                </div>
                <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }}>
                  <div className="text-light fs-5">Completed Test</div>
                  <div className="count fs-1 text-light fw-bolder">48</div>
                </div>
                <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }}>
                  <div className="text-light fs-5">Pending Test</div>
                  <div className="count fs-1 text-light fw-bolder">221</div>
                </div>
              </div>
              <div className="row">
                <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#dc3545, #9ec5fe)' }}>
                  <div className="text-light fs-5">Instruments</div>
                  <div className="count fs-1 text-light fw-bolder">9</div>
                </div>
                <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0dcaf0, #9ec5fe)' }}>
                  <div className="text-light fs-5">Instrument Under Calibration</div>
                  <div className="count fs-1 text-light fw-bolder">5</div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 my-2">
              <div className="w-75 shadow rounded px-3">
                <div className="d-flex justify-content-between py-4">
                  <div className="py-2 fw-bolder">Material</div>
                  <div className="mt-0 pt-0 fw-bolder fs-4">...</div>
                </div>
                <div className="d-flex gap-3">
                  <div className="d-flex">
                    <div className="rounded-circle bg-warning mt-1 mx-2" style={{ width: '12px', height: '12px' }}>
                    </div>
                    <span className="text-muted">Pending</span>
                  </div>
                  <div className="d-flex">
                    <div className="rounded-circle bg-primary mt-1 mx-2" style={{ width: '12px', height: '12px' }}>
                    </div>
                    <span className="text-muted">In-progess</span>
                  </div>
                  <div className="d-flex">
                    <div className="rounded-circle bg-success mt-1 mx-2" style={{ width: '12px', height: '12px' }}>
                    </div>
                    <span className="text-muted">Approved</span>
                  </div>
                  <div className="d-flex">
                    <div className="rounded-circle bg-danger mt-1 mx-2" style={{ width: '12px', height: '12px' }}>
                    </div>
                    <span className="text-muted">Dropped</span>
                  </div>
                </div>
                <div className="d-flex circullar-chart py-5">
                  <CircularProgressbar className="w-75 h-75 p-3" background backgroundPadding={6} value={2.13} text={"2.13%"} strokeWidth={8} styles={buildStyles({
                    backgroundColor: "rgb(255 244 217)",
                    textColor: "black",
                    pathColor: "#ffc107",
                    trailColor: "transparent"
                  })} />
                  <CircularProgressbar className="w-75 h-75 p-3" background backgroundPadding={6} value={21.3} text={"21.3%"} strokeWidth={8} styles={buildStyles({
                    backgroundColor: "rgb(227 225 253)",
                    textColor: "black",
                    pathColor: "#0d6efd",
                    trailColor: "transparent"
                  })} />
                  <CircularProgressbar className="w-75 h-75 p-3" background backgroundPadding={6} value={93.87} text={"93.87%"} strokeWidth={8} styles={buildStyles({
                    backgroundColor: "rgb(225 244 226)",
                    textColor: "black",
                    pathColor: "rgb(0 184 98)",
                    trailColor: "transparent"
                  })} />
                  <CircularProgressbar className="w-75 h-75 p-3" background backgroundPadding={6} value={1} text={"1%"} strokeWidth={8} styles={buildStyles({
                    backgroundColor: "rgb(255 226 223)",
                    textColor: "black",
                    pathColor: "#dc3545",
                    trailColor: "transparent"
                  })} />
                </div>
              </div>
              <div className="w-25 shadow rounded p-4">
                <div className="d-flex justify-content-between">
                  <div className="py-2 fw-bolder">Analysis</div>
                  <div className="mt-0 pt-0 fw-bolder fs-4">...</div>
                </div>
                <div className="mt-4">
                  <LineChart option={analysisOptions} />
                </div>
              </div>
            </div>
            <div className="my-4 shadow rounded">
              <div className="py-4 mx-3 fw-bolder">Material Status</div>
              <div className="pt-4 mx-4">
                <LineChart option={materialOption} />
              </div>
            </div>
            <div className="my-4 shadow rounded">
              <div className="py-4 mx-3 fw-bolder">Category wise Instruments</div>
              <div className="pt-4 mx-5">
                <LineChart option={instrumentOption} />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-4 w-25 mt-3">
            <div className="rounded shadow">
              <div className="h5 m-4">Latest Products</div>
              <ul className="list-unstyled d-grid gap-3 text-muted mx-4">
                {latestProducts.map((product, idx) => {
                  return <li key={idx}>{product}</li>
                })}
              </ul>
            </div>
            <div className="rounded shadow">
              <div className="h5 m-4">AR Number</div>
              <ul className="list-unstyled d-grid gap-3 text-muted mx-4">
              {ARNumber.map((number, idx) => {
                  return <li key={idx}>{number}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-4 shadow rounded">
          <div className="py-4 mx-3 fw-bolder">Test Stats</div>
          <div className="pt-4 mx-5">
            <LineChart option={testStatsOption} />
          </div>
        </div>
        <div className="mb-4 shadow rounded">
          <div className="py-4 mx-3 fw-bolder">Product Wise Test stats</div>
          <div className="pt-4 mx-4">
            <LineChart option={productWiseTestStatsOption} />
          </div>
        </div>
        <div className="mb-4 shadow rounded">
          <div className="py-4 mx-3 fw-bolder">Test Wise stats</div>
          <div className="pt-4 mx-5">
            <LineChart option={testWiseStatsOption} />
          </div>
        </div>
      </div>

      <div>
        <ToastContainer />
      </div>

    </>
  );
}

export default Dashboard
