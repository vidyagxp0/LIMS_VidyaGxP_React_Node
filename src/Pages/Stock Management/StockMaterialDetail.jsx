import React from 'react'

export default function StockMaterialDetail() {

  const materialData = [
    { key: 'Material Name', value: 'M1' },
    { key: 'Description', value: 'material 1' },
    { key: 'Created On', value: '20/06/2023' },
    { key: 'Updated On', value: '23/06/2023' },
    { key: 'Status', value: 'APPROVED' }
  ];

  return (
    <div className='m-5 p-5 rounded shadow'>
      <h4 className='fw-bold'>Material Details</h4>
      <table className='table-responsive table-bordered border-dark mb-4 w-100'>
        <tbody>
          {materialData.map((data) => {
            return <tr key={data.key}>
              <td className="text-light bg-info w-25 px-2 py-1">{data.key}</td>
              <td className='px-2 py-1'>{data.value}	</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
