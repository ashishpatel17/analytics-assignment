import React, { useEffect, useState } from "react";

const Table = ({ tableData }) => {
  const [data, setData] = useState([]);
  const [maxSku, setMaxSku] = useState(0);

  useEffect(() => {
    if (tableData) {
      setData(tableData);
      let skuVals = tableData.map((e)=>{ return parseInt(e.skuStock) });
      setMaxSku(Math.max(...skuVals));
    }
  }, [tableData]);

  return (

    <table className='info-table w-full'>
      <thead>
        <tr className='flex border-b border-gray-300 '>
          <th className='flex-grow w-2/3'>Item Category</th>
          <th className='flex-grow w-2/5'>APSD</th>
          <th className='flex-grow w-2/5'>UPSD {maxSku}</th>
          <th className='flex-grow w-3/4'>SKU Stock</th>
        </tr>
      </thead>
      <tbody >
        {
          (data.map((key,i) => {
            return (
              <tr key={i} className='flex pb-2 pt-2 text-xs border-b border-gray-500'>
                <th className='flex-grow w-2/3'>{key.item}</th>
                <th className='flex-grow w-2/5'>{key.apsd}</th>
                <th className='flex-grow w-2/5'>{key.upsd}</th>
                <th className='flex-grow w-3/4'>
                  <div className='felx progress-bar-box'>
                    <span>0</span>
                    <progress className='progressBar w-1/2 lg:w-3/5 sm:w-3/5  mt-1 mr-2 ml-2' max={maxSku} value={key.skuStock}></progress>
                    <span>{key.skuStock}</span>
                  </div>
                </th>
              </tr>
            )
          }))
        }
      </tbody>
    </table>

  );
};

export default Table;
