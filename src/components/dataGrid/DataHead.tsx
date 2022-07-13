import React, { FC } from 'react'

interface Props{
  sortData(num:number):void
}

const DataHead:FC<Props> = ({sortData}) => {
  return (
    <tr className='flex text-sm p-3 justify-between border-b-[1px] border-b-gray-400 w-full'>
        <th onClick = {()=>sortData(1)} className="w-5 h-5 text-center my-auto cursor-pointer text-xs inline-block rounded-full border-[1px] border-blue-500 mr-2">N</th>
        <th onClick = {()=>sortData(1)} className="inline-block text-left w-[20%] cursor-pointer">Employee Name</th>
        <th className="inline-block text-left w-[40%]">Description</th>
        
        <span className="flex justify-between w-[40%]">
            <th onClick = {()=>sortData(2)}className="inline-block text-left w-[60%] cursor-pointer">Age</th>
            <th onClick = {()=>sortData(3)}className="inline-block text-left w-[40%] cursor-pointer">Pay</th>
        </span>
    </tr>
  )
}

export default DataHead