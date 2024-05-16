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
        data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2]
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
        data: [2, 7]
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  const testStatsOption = {
    title: {
      text: 'Test Stats'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'value',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Material', '2', '3', '4']
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
        name: 'Material',
        type: 'bar',
        stack: 'Total',
        color: '#0089c8',
        data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2]
      },
      {
        name: '2',
        type: 'bar',
        stack: 'Total',
        color: '#0089c8',
        data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2]
      },
      {
        name: '3',
        type: 'bar',
        stack: 'Total',
        color: '#0089c8',
        data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 4, 1, 1, 1, 1, 3, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2]
      },
      {
        name: '4',
        type: 'bar',
        stack: 'Total',
        color: '#0089c8',
        data: [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2]
      }
    ],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    }
  };

  return (
    <>
      <div id="dashboard" className="mx-5">
        <div className="sub-head my-5">
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
                  <div className="py-2 fw-medium">Material</div>
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
                  <div className="py-2 fw-medium">Analysis</div>
                  <div className="mt-0 pt-0 fw-bolder fs-4">...</div>
                </div>
                <div className="mt-4">
                  <LineChart option={analysisOptions} />
                </div>
              </div>
            </div>
            <div className="my-4 shadow rounded">
              <div className="py-4 mx-3">Material Status</div>
              <div className="pt-4 mx-4">
                <LineChart option={materialOption} />
              </div>
            </div>
            <div className="my-4 shadow rounded">
              <div className="py-4 mx-3">Category wise Instruments</div>
              <div className="pt-4 mx-5">
                <LineChart option={instrumentOption} />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-4 w-25">
            <div className="rounded shadow">
              <div className="h5 m-4">Latest Products</div>
              <ul className="list-unstyled d-grid gap-3 text-muted mx-4">
                <li>Para</li>
                <li>Sacubitril</li>
                <li>Testamine</li>
                <li>Sulphuric Acid</li>
                <li>NACL</li>
                <li>CNCD</li>
                <li>CACO N</li>
                <li>Potting compound</li>
                <li>Vitamin A & D</li>
                <li>samp2</li>
              </ul>
            </div>
            <div className="rounded shadow">
              <div className="h5 m-4">AR Number</div>
              <ul className="list-unstyled d-grid gap-3 text-muted mx-4">
                <li>ARIP0000095</li>
                <li>ARFFT0000094</li>
                <li>ARRW0000093</li>
                <li>ARRW0000092</li>
                <li>ARFFT0000091</li>
                <li>ARRW0000090</li>
                <li>ARFP0000089</li>
                <li>ARFFT0000088</li>
                <li>ARFFT0000087</li>
                <li>ARFFT0000086</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-4 shadow rounded">
          <div className="py-4 mx-3">Test Stats</div>
          <div className="pt-4 mx-5">
            <LineChart option={testStatsOption} />
          </div>
        </div>
        <div className="mb-4 shadow rounded">
          <div className="py-4 mx-3">Material Status</div>
          <div className="pt-4 mx-4">
            <LineChart option={materialOption} />
          </div>
        </div>
        <div className="mb-4 shadow rounded">
          <div className="py-4 mx-3">Test Stats</div>
          <div className="pt-4 mx-5">
            <LineChart option={testStatsOption} />
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
