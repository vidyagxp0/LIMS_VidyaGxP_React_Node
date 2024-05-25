import React from 'react'

export default function StockOnboardingDetails() {

  const stockDetails = [
    { key: 'Material Name', value: 'Polycaprolactone New' },
    { key: 'Invoice Date', value: '05/05/2024' },
    { key: 'Invoice Number', value: 'INC3434' },
    { key: 'Supplier Name', value: 'Ariz tech' },
    { key: 'Quantity of Material as per Invoice', value: 2 },
    { key: 'Vendor Code of Supplier', value: 'uc' },
    { key: 'Truck Number', value: 'DF4353D' },
    { key: 'Ch Number', value: 'hgfgjh5354' },
    { key: 'Stock Registration Remark', value: 'na' },
    { key: 'Supplier Approved by QA Department', value: 'Yes' },
    { key: 'COA of Material Received', value: 'Yes' },
    { key: 'Status', value: 'APPROVED' }
  ];

  const history = [
    { key: 'Material Name', value: 'Polycaprolactone New' },
    { key: 'Invoice Date', value: '05/05/2024' },
    { key: 'Invoice Number', value: 'INC3434' },
    { key: 'Supplier Name', value: 'Ariz tech' },
    { key: 'Quantity of Material as per Invoice', value: 2 },
    { key: 'Vendor Code of Supplier', value: 'uc' },
    { key: 'Truck Number', value: 'DF4353D' },
    { key: 'Ch Number', value: 'hgfgjh5354' },
    { key: 'Stock Registration Remark', value: 'na' },
    { key: 'Supplier Approved by QA Department', value: 'Yes' },
    { key: 'COA of Material Received', value: 'Yes' },
    { key: 'Status', value: 'INITIATED' }
  ];

  return (
    <>
      <div className='m-5 p-5 rounded shadow'>
        <h4 className='fw-bold'>Stock Details</h4>
        <table className='table-responsive table-bordered border-dark mb-4 w-100'>
          <tbody>
            {stockDetails.map((data) => {
              return <tr key={data.key}>
                <td className="text-light bg-info w-25 px-2 py-1">{data.key}</td>
                <td className='px-2 py-1'>{data.value}	</td>
              </tr>
            })}
          </tbody>
        </table>
        <h4 className='fw-bold'>History</h4>
        <table className='table-responsive table-bordered border-dark mb-4 w-100'>
          <tbody>
            <tr>
              <td className="text-dark bg-secondary-subtle w-25 px-2 py-1">Revision</td>
              <td className='text-dark bg-secondary-subtle px-2 py-1'>0</td>
            </tr>
            {history.map((data) => {
              return <tr key={data.key}>
                <td className="text-light bg-info w-25 px-2 py-1">{data.key}</td>
                <td className='px-2 py-1'>{data.value}	</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
