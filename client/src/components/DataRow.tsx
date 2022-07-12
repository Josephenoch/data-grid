import React, { FC } from 'react'
import { data } from '../interfaces'

interface Props{
    last?:boolean,
    data:data
}

const DataRow:FC<Props> = ({last,data}) => {
    const styles={
        last:last?"":"border-b-[1px]"
    }
    return(
        <tr className={`flex px-3 text-sm justify-between w-full ${styles.last} border-blue-400`}>
            <td className="w-5 h-5 text-center my-auto text-xs inline-block rounded-full border-[1px] border-blue-500 mr-2">N</td>
            <span className="flex justify-between w-full">    
                <td className="text-left flex items-center  border-l-[1px] border-l-blue-400 w-[20%] p-2">{data.name}</td>
                <td className="inline-block text-left  border-l-[1px] border-l-blue-400 w-[40%] p-2">{data.description}</td>

                <span className="flex justify-between w-[40%]">
                    <td className="inline-block text-left border-l-[1px] border-l-blue-400 w-[60%] p-2">{data.age}</td>
                    <td className="inline-block text-left  border-l-[1px] border-l-blue-400 w-[40%] p-2">{data.pay}</td>
                </span>
            </span>
        </tr>
    )
    
}

export default DataRow