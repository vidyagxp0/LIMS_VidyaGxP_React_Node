import { cilArrowTop, cilOptions } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CWidgetStatsA, CWidgetStatsE } from "@coreui/react"
import { CChartBar, CChartLine } from "@coreui/react-chartjs"
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard(props) {
    useEffect(() => {
        if (props.show) {
            toast.success("Login successfully");
            props.setShow(false)
        }
    }, [props.show]);

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
                                            $9.000{' '}
                                            <span className="fs-6 fw-normal">
                                                (40.9% <CIcon icon={cilArrowTop} />)
                                            </span>
                                        </>
                                    }
                                    title="Widget title"
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
                                            $9.000{' '}
                                            <span className="fs-6 fw-normal">
                                                (40.9% <CIcon icon={cilArrowTop} />)
                                            </span>
                                        </>
                                    }
                                    title="Widget title"
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
                                            $9.000{' '}
                                            <span className="fs-6 fw-normal">
                                                (40.9% <CIcon icon={cilArrowTop} />)
                                            </span>
                                        </>
                                    }
                                    title="Widget title"
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
                                <CWidgetStatsE
                                    className="mb-3 text-light"
                                    color="danger"
                                    chart={
                                        <CChartBar
                                            className="mx-auto"
                                            style={{ height: '40px', width: '80px' }}
                                            data={{
                                                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                                                datasets: [
                                                    {
                                                        backgroundColor: '#321fdb',
                                                        borderColor: 'transparent',
                                                        borderWidth: 1,
                                                        data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
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
                                                        display: false,
                                                    },
                                                    y: {
                                                        display: false,
                                                    },
                                                },
                                            }}
                                        />
                                    }
                                    title="Widget title"
                                    value="89.9%"
                                />
                            </CCol>
                            <CCol sm={6}>
                                <CWidgetStatsE
                                    className="mb-3 text-light"
                                    color="primary"
                                    chart={
                                        <CChartLine
                                            className="mx-auto"
                                            style={{ height: '40px', width: '80px' }}
                                            data={{
                                                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                                                datasets: [
                                                    {
                                                        backgroundColor: 'transparent',
                                                        borderColor: '#321fdb',
                                                        borderWidth: 2,
                                                        data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                                                    },
                                                ],
                                            }}
                                            options={{
                                                maintainAspectRatio: false,
                                                elements: {
                                                    line: {
                                                        tension: 0.4,
                                                    },
                                                    point: {
                                                        radius: 0,
                                                    },
                                                },
                                                plugins: {
                                                    legend: {
                                                        display: false,
                                                    },
                                                },
                                                scales: {
                                                    x: {
                                                        display: false,
                                                    },
                                                    y: {
                                                        display: false,
                                                    },
                                                },
                                            }}
                                        />
                                    }
                                    title="Widget title"
                                    value="89.9%"
                                />
                            </CCol>
                            {/* <CCol sm={4}>
                                <CWidgetStatsE
                                    className="mb-3"
                                    chart={
                                        <CChartBar
                                            className="mx-auto"
                                            style={{ height: '40px', width: '80px' }}
                                            data={{
                                                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                                                datasets: [
                                                    {
                                                        backgroundColor: '#321fdb',
                                                        borderColor: 'transparent',
                                                        borderWidth: 1,
                                                        data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
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
                                                        display: false,
                                                    },
                                                    y: {
                                                        display: false,
                                                    },
                                                },
                                            }}
                                        />
                                    }
                                    title="Widget title"
                                    value="89.9%"
                                />
                            </CCol> */}
                        </CRow>

                        <div className="d-flex gap-4 my-2">
                            <div className="w-75 shadow rounded px-3">
                                <div className="d-flex justify-content-between py-4">
                                    <div className="py-2">Material</div>
                                    <div className="mt-0 pt-0 fw-bolder fs-4">...</div>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="d-flex">
                                        <div className="rounded-circle bg-warning mt-1 mx-2" style={{width: '12px', height: '12px'}}>
                                        </div>
                                        <span>Pending</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="rounded-circle bg-primary mt-1 mx-2" style={{width: '12px', height: '12px'}}>
                                        </div>
                                        <span>In-progess</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="rounded-circle bg-success mt-1 mx-2" style={{width: '12px', height: '12px'}}>
                                        </div>
                                        <span>Approved</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="rounded-circle bg-danger mt-1 mx-2" style={{width: '12px', height: '12px'}}>
                                        </div>
                                        <span>Dropped</span>
                                    </div>
                                </div>
                                <div className="circullar-chart pt-5 w-25 h-25">
                                    <CircularProgressbar className="" background backgroundPadding={6} value={70} text={"70%"} strokeWidth={5} styles={buildStyles({
                                        backgroundColor: "#3e98c7",
                                        textColor: "#fff",
                                        pathColor: "yellow",
                                        trailColor: "transparent"
                                    })} />
                                </div>

                            </div>
                            <div className="d-flex justify-content-between w-25 shadow rounded p-4">
                                <div className="py-2">Analysis</div>
                                <div className="mt-0 pt-0 fw-bolder fs-4">...</div>
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
