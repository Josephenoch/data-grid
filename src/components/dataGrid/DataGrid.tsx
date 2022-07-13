import React, { FC, Dispatch, SetStateAction } from 'react'

import { data} from '../../interfaces'
import DataHead from './DataHead'
import DataRow from './DataRow'

interface Props{
    data:data[],
    width:number,
    setWidth:Dispatch<SetStateAction<number>>,
    deleteData(id:string):void,
    setId:Dispatch<SetStateAction<string>>
    handleData(newValue:data, id?:number):void,
    setInputData:Dispatch<SetStateAction<data>>,
    sortData(num:number):void

}

const DataGrid:FC<Props> = ({data, width, sortData, setWidth, handleData, setInputData, setId, deleteData}) => {
  const styles = {
    noData:data.length<1&&"items-center justify-center" 
  }
  return (
    <table className={`${styles.noData} flex w-full rounded-lg flex-col border-[1px] border-blue-400 min-w-[800px]`} style={{width:width}} >
        <thead className="w-full flex">
          <DataHead sortData={sortData}/>
        </thead>
        <tbody className='w-full flex flex-col'>
        {data.map((datum,index,arr)=>
            <DataRow 
                key = {index} 
                id = {index}
                data = {datum} 
                last = {index === arr.length-1}
                width = {width}
                setWidth = {setWidth}
                deleteData = {deleteData}
                setId = {setId}
                handleData = {handleData}
                setInputData = {setInputData}
            />
        )} 
        {
        data.length<1&&<tr className="py-5">
          <td>No data</td> 
        </tr>
        }
        </tbody>
        
    </table>
  )
}

export default DataGrid