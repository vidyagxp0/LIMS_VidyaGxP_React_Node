import { cilOptions } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CWidgetStatsA } from "@coreui/react"
import { CChartBar, CChartLine } from "@coreui/react-chartjs"
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

  const options = {
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


  return (
    <>
      <div id="dashboard" className="mx-5">
        <div className="sub-head my-5">
          <div className="title fw-bold fs-5">Dashboard</div>
        </div>
        <div className="d-flex gap-4">
          <div className="chart-widgets w-75">
            <CRow>
              <CCol sm={4}>
                <CWidgetStatsA
                  className="mb-4"
                  color="primary"
                  value={
                    <>
                      On Going Test
                    </>
                  }
                  title={<span className="fs-2 fw-bolder">277</span>}
                  action={
                    <CDropdown alignment="end">
                      <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-white" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  }
                  chart={
                    <CChartLine
                      className="mt-3 mx-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: '#5856d6',
                            data: [65, 59, 84, 84, 51, 55, 40],
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            border: {
                              display: false,
                            },
                            grid: {
                              display: false,
                              drawBorder: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                          y: {
                            min: 30,
                            max: 89,
                            display: false,
                            grid: {
                              display: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 1,
                            tension: 0.4,
                          },
                          point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  }
                />
              </CCol>
              <CCol sm={4}>
                <CWidgetStatsA
                  className="mb-4"
                  color="warning"
                  value={
                    <>
                      Completed Test
                    </>
                  }
                  title={<span className="fs-2 fw-bolder">48</span>}
                  action={
                    <CDropdown alignment="end">
                      <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-white" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  }
                  chart={
                    <CChartLine
                      className="mt-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40],
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            display: false,
                          },
                          y: {
                            display: false,
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 2,
                            tension: 0.4,
                          },
                          point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  }
                />
              </CCol>
              <CCol sm={4}>
                <CWidgetStatsA
                  className="mb-4"
                  color="danger"
                  value={
                    <>
                      Pending Test
                    </>
                  }
                  title={<span className="fs-2 fw-bolder">221</span>}
                  action={
                    <CDropdown alignment="end">
                      <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-white" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  }
                  chart={
                    <CChartBar
                      className="mt-3 mx-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: [
                          'January',
                          'February',
                          'March',
                          'April',
                          'May',
                          'June',
                          'July',
                          'August',
                          'September',
                          'October',
                          'November',
                          'December',
                          'January',
                          'February',
                          'March',
                          'April',
                        ],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                            barPercentage: 0.6,
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        scales: {
                          x: {
                            grid: {
                              display: false,
                              drawTicks: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                          y: {
                            border: {
                              display: false,
                            },
                            grid: {
                              display: false,
                              drawBorder: false,
                              drawTicks: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                      }}
                    />
                  }
                />
              </CCol>
              <CCol sm={6}>
                <CWidgetStatsA
                  className="mb-4"
                  color="success"
                  value={
                    <>
                      Instruments
                    </>
                  }
                  title={<span className="fs-2 fw-bolder">9</span>}
                  action={
                    <CDropdown alignment="end">
                      <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-white" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  }
                  chart={
                    <CChartLine
                      className="mt-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40],
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            display: false,
                          },
                          y: {
                            display: false,
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 2,
                            tension: 0.4,
                          },
                          point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  }
                />
              </CCol>
              <CCol sm={6}>
                <CWidgetStatsA
                  className="mb-4"
                  color="info"
                  value={
                    <>
                      Instrument Under Calibration
                    </>
                  }
                  title={<span className="fs-2 fw-bolder">5</span>}
                  action={
                    <CDropdown alignment="end">
                      <CDropdownToggle color="transparent" caret={false} className="p-0">
                        <CIcon icon={cilOptions} className="text-white" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>Action</CDropdownItem>
                        <CDropdownItem>Another action</CDropdownItem>
                        <CDropdownItem>Something else here...</CDropdownItem>
                        <CDropdownItem disabled>Disabled action</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  }
                  chart={
                    <CChartLine
                      className="mt-3"
                      style={{ height: '70px' }}
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40],
                            fill: true,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            display: false,
                          },
                          y: {
                            display: false,
                          },
                        },
                        elements: {
                          line: {
                            borderWidth: 2,
                            tension: 0.4,
                          },
                          point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                          },
                        },
                      }}
                    />
                  }
                />
              </CCol>
            </CRow>
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
                    pathColor: "#198754",
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
                  <LineChart option={options} />
                </div>
              </div>
            </div>
            <div className="shadow rounded">
              <div className="py-4 mx-3">Material Status</div>
              <div className="py-4">
                {/* Do this... */}
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
      </div>

      <div>
        <ToastContainer />
      </div>

    </>
  );
}

export default Dashboard
