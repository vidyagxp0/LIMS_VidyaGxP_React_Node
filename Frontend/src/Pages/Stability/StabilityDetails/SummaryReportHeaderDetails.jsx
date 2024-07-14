import {
  CFooter,
  CHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from "@coreui/react";

function SummaryReportHeaderDetails() {
  return (
    <>
      <div id="worksheetHeaderPage" className="py-3 bg-light h-100">
        <div className="container-fluid">
          <div className="block mb-3">
            <div className="main-head d-flex justify-content-between align-items-center">
              <h4 className="fw-bold mb-4 mt-3">
                Summary Report Header Details
              </h4>
            </div>
            <div className="bg-white px-5 py-3">
              <CTable align="middle" className="mb-0" small bordered>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Template Id
                    </CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Report Title
                    </CTableDataCell>
                    <CTableDataCell>testing</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Product Material
                    </CTableDataCell>
                    <CTableDataCell>testing</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Format No.
                    </CTableDataCell>
                    <CTableDataCell>001</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Added By
                    </CTableDataCell>
                    <CTableDataCell>afiya</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Added On
                    </CTableDataCell>
                    <CTableDataCell>05/05/2024</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Status
                    </CTableDataCell>
                    <CTableDataCell>DROPPED</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>
          </div>
          <div className="block mb-3">
            <div className="bg-white px-5 py-3">
              <CTable align="middle" className="mb-0" small bordered>
                <CTableBody>
                  <CHeader className="bg-light">Header</CHeader>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Header Rows
                    </CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Header Columns
                    </CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Sample Field 1
                    </CTableDataCell>
                    <CTableDataCell>batch_no</CTableDataCell>
                  </CTableRow>
                  <CFooter className="bg-light">Footer</CFooter>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Header Rows
                    </CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Header Columns
                    </CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Sample Field 1
                    </CTableDataCell>
                    <CTableDataCell></CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Sample Field 2
                    </CTableDataCell>
                    <CTableDataCell>approved_by</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Sample Field 3
                    </CTableDataCell>
                    <CTableDataCell>reviewed_by</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-light bg-info">
                      Sample Field 4
                    </CTableDataCell>
                    <CTableDataCell>checked_by</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>
            <div className="main-head">
              <h4 className="fw-bold mb-4 mt-3 ">History</h4>
              <h5>No History Found</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryReportHeaderDetails;
