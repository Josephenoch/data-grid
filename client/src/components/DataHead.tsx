import React from 'react'

const DataHead = () => {
  return (
    <tr className='flex text-sm p-3 justify-between border-b-[1px] border-b-gray-400 w-full'>
        <th className="w-5 h-5 text-center my-auto text-xs inline-block rounded-full border-[1px] border-blue-500 mr-2">N</th>
        <th className="inline-block text-left  w-[20%]">Employee Number</th>
        <th className="inline-block text-left  w-[40%]">Description</th>
        
        <span className="flex justify-between w-[40%]">
            <th className="inline-block text-left w-[60%]">Name</th>
            <th className="inline-block text-left w-[40%]">Name</th>
        </span>
    </tr>
  )
}

export default DataHead