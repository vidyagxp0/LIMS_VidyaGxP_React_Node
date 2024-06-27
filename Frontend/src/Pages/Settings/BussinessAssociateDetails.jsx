import React from 'react'

export default function BussinessAssociateDetails() {

    const businessAssociateData = [
        { key: 'Name', value: 'Access Enterprise' },
        { key: 'Email', value: 'contact@access.com' },
        { key: 'Phone', value: '9876544321' },
        { key: 'Unique Code', value: 'ACE' },
        { key: 'Category Of Business Associate', value: 'SUPPLIER' },
        { key: 'Contact Person', value: 'vinesh' },
        { key: 'Address Line1', value: 'gandhinagar' },
        { key: 'Address Line2', value: '-' },
        { key: 'Address Line3', value: '-' },
        { key: 'City', value: 'Gandhinagar' },
        { key: 'State', value: 'Gujarat' },
        { key: 'Country', value: 'India' },
        { key: 'Pin Code', value: '645435' },
        { key: 'Fax', value: '786756435' },
        { key: 'Status', value: 'APPROVED' }
      ];

      const history = [
        { key: 'Name', value: 'ARZ ENT' },
        { key: 'Email', value: 'contact@arizoana.com' },
        { key: 'Phone', value: '9876543210' },
        { key: 'Unique Code', value: 'ARE' },
        { key: 'Category Of Business Associate', value: 'SUPPLIER' },
        { key: 'Contact Person', value: 'Manish' },
        { key: 'Address Line1', value: 'adress1' },
        { key: 'Address Line2', value: '-' },
        { key: 'Address Line3', value: '-' },
        { key: 'City', value: 'Ahmedabad' },
        { key: 'State', value: 'Gujarat' },
        { key: 'Country', value: 'India' },
        { key: 'Pin Code', value: '500019' },
        { key: 'Fax', value: '98765453210' },
        { key: 'Status', value: 'INITIATED' }
      ];

  return (
    <>
      <div className='m-5 p-5 rounded shadow'>
        <h4 className='fw-bold'>Bussiness Associate Details</h4>
        <table className='table-responsive table-bordered border-dark mb-4 w-100'>
          <tbody>
            {businessAssociateData.map((data) => {
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
