import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    head: {
        margin: '0 auto',
        alignItems: 'center',
        borderBottom: '2px solid black',
        paddingBottom: 5,
        width: '100%',
        fontSize: 20

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    section: {
        margin: 10,
        padding: 10,
        fontSize: 12,
    },
    title: {
        fontSize: 18,
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: 120,
        height: 120,
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#bfbfbf',
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 20,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableColHeader: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#bfbfbf',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f2f2f2',
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#bfbfbf',
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCellHeader: {
        margin: 5,
        fontSize: 10,
        fontWeight: 'bold',
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
    }
});

const PdfDocument = () => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.head}>
                <Text>Coa Report</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>Certificate of Analysis (COA)</Text> <Text>VIDYAGXP PRIVATE LIMITED.</Text>
                </View>
                <Image src="/images/QRCode.png" alt="QR Code" style={styles.image} />
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Product Name	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Test01_0101	</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Market</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Domestic</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Generic Name/Dosage Form/Strength (mg)	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Testing sample	</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Specification No.	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>FG002</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Product Code	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>tst</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Effective Date	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>10/10/2023
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Reference</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>IH</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Rev. No. & Date	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>30/10/2023
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Superseded</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>na</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Page No.	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Page 1 of 1
                        </Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Stage</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>FG Templage
                        </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Page No.	</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Page 1 of 1
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Sr No.</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Test Parameter</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>   Units</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Specification</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>1</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Water Ph test</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>na</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>-</Text>
                    </View>
                </View>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Sno.</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Checked by</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Reviewed by</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Approved by</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Designation</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>TCI</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}></Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Signature</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}></Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Date</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>21/05/2024 04:51:40</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Invalid date</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Invalid date</Text>
                    </View>
                </View>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={[styles.tableColHeader, { width: "100%" }]} colSpan={4}>
                        <Text style={styles.tableCellHeader}>Note: This document has been generated electronically and is valid without signature.</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Printed By</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Admin</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Printed On</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>22nd May 2024, 12:38:06 pm</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableColHeader, { width: "50%" }]}>
                        <Text style={styles.tableCellHeader}>Print Copy Number</Text>
                    </View>
                    <View style={[styles.tableCol, { width: "50%" }]} colSpan={2}>
                        <Text style={styles.tableCell}>PC0000036</Text>
                    </View>
                </View>
            </View>

        </Page>
    </Document>
);

const SampleLoginDetails = () => {
    return (
        <div className='m-5 shadow rounded px-5 py-3'>
            <div className="d-flex justify-content-between my-3">
                <div className="fw-bolder fs-4">Sample Login Details</div>
                <div className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#copyModal">Copy AR No.</div>
            </div>
            <div className="modal fade" id="copyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Copr Ar No.</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Do you want to copy this AR No. ARFFT0000104?
                        </div>
                        <div className="d-flex justify-content-end mx-4 my-4">
                            <button type="button" className="btn btn-primary mx-3">Copy</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className='table table-bordered border-dark'>
                <tbody>
                    <tr>
                        <td className="text-light bg-info">A.R No.</td>
                        <td>ARPC0000097	</td>
                        <td className="text-light bg-info">Registered On</td>
                        <td>17/05/2024</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Sample Type</td>
                        <td>Petrochemical</td>
                        <td className="text-light bg-info">Party Name</td>
                        <td>MIT Power</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Product/Material Code</td>
                        <td>Hydraulic Oil</td>
                        <td className="text-light bg-info">Days to Complete</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Generic Name</td>
                        <td>hyo</td>
                        <td className="text-light bg-info">Specification Id</td>
                        <td>HOS 234</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Set Days to Complete</td>
                        <td><input type="text" className='form-control' defaultValue={10} readOnly /></td>
                        <td className="text-light bg-info">Due On</td>
                        <td><input type="date" className='form-control' defaultValue={'2024-12-12'} /></td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Sample In Charge</td>
                        <td>
                            <select className='form-select'>
                                <option >Select</option>
                                <option value="Analyst two">Analyst two</option>
                                <option value="Analyst">Analyst</option>
                            </select>
                        </td>
                        <td className="text-light bg-info">QA approval Required</td>
                        <td className='d-flex gap-3'>
                            <input type="radio" className='form-check-input' id="yes" name='approval' /> <label htmlFor="yes">Yes</label>
                            <input type="radio" className='form-check-input' id="no" name='approval' /> <label htmlFor="no">No</label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="btn btn-primary mx-4 my-2">Submit</div>
            <table className='table table-bordered border-dark my-3'>
                <thead>
                    <tr>
                        <th className='bg-info text-light'>SNo.</th>
                        <th className='bg-info text-light'>Specification</th>
                        <th className='bg-info text-light'>Test Name</th>
                        <th className='bg-info text-light'>Worksheet</th>
                        <th className='bg-info text-light'>Test In-Charge</th>
                        <th className='bg-info text-light'>Test Status</th>
                        <th className='bg-info text-light'>Updated On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>HOS 234</td>
                        <td>Water Content PPM</td>
                        <td>water content kf worksheet</td>
                        <td>
                            <select className='form-select' disabled>
                                <option value="Analyst" selected>Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className='d-flex'><IoEyeSharp className='mt-1 mx-1 cursor-pointer' data-bs-toggle="modal" data-bs-target="#approvedStatusModal" /> <span>APPROVED</span></td>
                        <td>21/05/2024</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>HOS 234</td>
                        <td>	Viscosity @40C</td>
                        <td>-</td>
                        <td>
                            <select className='form-select' disabled>
                                <option value="Analyst" selected>Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className='d-flex'><IoEyeSharp className='mt-1 mx-1 cursor-pointer' data-bs-toggle="modal" data-bs-target="#approvedStatusModal" /> <span>APPROVED</span></td>
                        <td>21/05/2024</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>HOS 234</td>
                        <td>	Total Acid Number (TAN)</td>
                        <td>-</td>
                        <td>
                            <select className='form-select' disabled>
                                <option value="Analyst" selected>Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className='d-flex'><IoEyeSharp className='mt-1 mx-1 cursor-pointer' data-bs-toggle="modal" data-bs-target="#approvedStatusModal" /> <span>APPROVED</span></td>
                        <td>21/05/2024</td>
                    </tr>

                </tbody>

            </table>
            <div className="d-flex gap-4 mt-4 mx-4">
                <div className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#coaPreviewModal" >Coa Preview</div>
                <div className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rawDataPreviewModal">Raw Data Preview</div>
                <div className="btn btn-primary">Submit</div>
            </div>
            <div className="modal fade" id="rawDataPreviewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">Worksheet Preview</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3 className="fs-5 mt-4">Water Ph test</h3>
                            CHQTY0001: <span className='text-muted bg-warning-subtle rounded p-1'>CHQTY0001</span> <hr className='text-light m-2' />
                            Add <span className='text-muted bg-warning-subtle rounded p-1'>CHQTY0001</span> g of caco to water and get the ph value calculate.<hr className='text-light m-2' />
                            <button type="button" className="btn btn-primary px-4 mt-3" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="approvedStatusModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">Result values</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-5">
                            <h3 className="fs-5 fw-bold mt-4">FG Assay Test</h3>
                            <h2 className="fs-5 ">Formula</h2>
                            <p className='fs-6'>(w+m)/10</p>
                            <p className='fs-5 fw-bold mt-4 mb-0'>Variable Data</p>
                            <table className='table table-bordered border-dark'>
                                <thead>
                                    <tr>
                                        <th>Sno.</th>
                                        <th>Variables</th>
                                        <th>Symbol</th>
                                        <th>UOM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>weight of the sample</td>
                                        <td>w</td>
                                        <td>gm</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>sample qt</td>
                                        <td>m</td>
                                        <td>gm</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='fs-5 fw-bold mt-2 mb-0'>Execution data</p>
                            <table className='table table-bordered border-dark'>
                                <thead>
                                    <tr>
                                        <th>Sno.</th>
                                        <th>Symbol</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>w</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>m</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='fs-5 fw-bold mt-2 mb-0'>Worksheet</p>
                            WSQTY0001: <span className='text-muted bg-warning-subtle rounded p-1'>
                                WSQTY0001
                            </span> <hr className='text-light m-2' />
                            WSQTY0002: <span className='text-muted bg-warning-subtle rounded p-1'>
                                WSQTY0002
                            </span>
                            <hr className='text-light m-2' />
                            <p className='l-2'><span className='fw-bold'>Procedure:</span>Weigh about (0.15)<span className='text-muted bg-warning-subtle rounded p-1'>
                                WSQTY0001
                            </span>
                                gm of Calcium Hydroxide powder, and transfer in  a Idometric flask add (50)
                                <span className='text-muted bg-warning-subtle rounded p-1'>
                                    WSQTY0002
                                </span>
                                ml of  0.1 N Iodine Solution, Keep the solution in dark for 30 minutes and Shake it in regular time interval  Titrate the excess iodine with 0.1 N Sodium Thiosulphate using starch as an indicator. End point is bluish to colorless. Carry out a blank titration without sample. <br />
                                Weight of butter paper. <br />
                                Weight of butter paper + sample <br />
                                Weight of sample taken. <br />
                                Blank value (B) <br />
                                Titer value (A)</p>

                            <span className='text-success d-flex justify-content-center'>Test Cases Passed Successfully with value 11.00</span> <br />
                            <div className="d-flex">
                                <button type="button" className="btn btn-danger px-4 mt-3 ms-auto" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="coaPreviewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">Coa Report</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className=""> <img src="/images/vidhyaGxp.png" alt="logo" width={250} height={60} /></div>
                                <div>
                                    <PDFDownloadLink
                                        document={<PdfDocument />}
                                        fileName="CoaReport.pdf"
                                        className="btn btn-primary text-light mx-2"
                                    >
                                        Print
                                    </PDFDownloadLink>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className='fw-bolder h3'>
                                    Certificate of Analysis (COA) <br />
                                    VIDYAGXP PRIVATE LIMITED.

                                </div>
                                <div>
                                    <img src="/images/QRCode.png" alt="QR Code" />
                                </div>
                            </div>
                            <table className='table table-bordered border-dark'>
                                <tbody>
                                    <tr>
                                        <td className="fw-bolder">
                                            Product Name</td>
                                        <td>Test01_0101		</td>
                                        <td className="fw-bolder">Market</td>
                                        <td>Domestic</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bolder">Generic Name/Dosage Form/Strength (mg)</td>
                                        <td>Testing sample</td>
                                        <td className="fw-bolder fs-10" >Specification No.</td>
                                        <td>FG002</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bolder">Product Code</td>
                                        <td>tst</td>
                                        <td className="fw-bolder">Effective Date</td>
                                        <td>10/10/2023</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bolder">Reference</td>
                                        <td>IH</td>
                                        <td className="fw-bolder">Rev. No. & Date	</td>
                                        <td>30/10/2023</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bolder">Superseded</td>
                                        <td>na</td>
                                        <td className="fw-bolder align-middle" rowSpan={2}>Page No.</td>
                                        <td className="align-middle" rowSpan={2}>Page 1 of 1</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bolder">Stage</td>
                                        <td>FG Templage</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='table table-bordered border-dark'>
                                <thead>
                                    <tr>
                                        <th className='bg-info text-light'>Sr No.</th>
                                        <th className='bg-info text-light'>Test Paramemter	</th>
                                        <th className='bg-info text-light'>Units</th>
                                        <th className='bg-info text-light'>Specification	</th>
                                        <th className='bg-info text-light'>Values</th>
                                        <th className='bg-info text-light'>Reasult Value</th>
                                        <th className='bg-info text-light'>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Water Ph test</td>
                                        <td>na</td>
                                        <td>-</td>
                                        <td>p:6</td>
                                        <td>6.0</td>
                                        <td>Fail</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='table table-bordered border-dark'>
                                <thead>
                                    <tr>
                                        <th>Sno.</th>
                                        <th>Checked by	</th>
                                        <th>Reviewed by	</th>
                                        <th>Approved by
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='fw-bolder'>Designation</td>
                                        <td>TCI</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>Signature</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>Date</td>
                                        <td>21/05/2024 04:51:40</td>
                                        <td>Invalid date</td>
                                        <td>Invalid date
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='table table-bordered border-dark border-dark'>
                                <tbody>
                                    <tr>
                                        <td colSpan={4} className='fw-bolder'>Note : This document has been generated electronically and is valid without signature.</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bolder'>Printed By</td>
                                        <td>Admin</td>
                                        <td className='fw-bolder'>Printed On</td>
                                        <td>22nd May 2024, 12:38:06 pm</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className='fw-bolder'>Print Copy Number</td>
                                        <td colSpan={2}>PC0000036</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SampleLoginDetails