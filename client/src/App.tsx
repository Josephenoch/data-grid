import React,{FC, useState} from 'react';
import DataGrid from './components/DataGrid';
import "./index.css"
import fakeData from './fakeData';
import { data } from './interfaces';

const App:FC= ()=>  {
  const [width, setWidth] = useState<number>(1400);
  const [data, setData] = useState<data[]>(fakeData)
  const editData = (id:number, newValue:data) =>{
    setData(prevData=>{
      const newData = [...prevData]
      newData[id] = newValue
      return [...newData]
    })
  }
  const deleteData =  (id:number) =>{
    setData(prevState=>{
      const newData = [...prevState]
      newData.splice(id,1)
      return [...newData]
    })
  }
  const styles={
    width:`min-w-[${width}]`
  }
  return (
    <div className="flex min-w-full justify-center text-gray-500">
      <div className={`${styles.width} flex-col flex justify-center mt-10`}>
        <DataGrid 
          data = {data} 
          width = {width} 
          setWidth = {setWidth}
          editData = {editData}
          deleteData = {deleteData}
        />
      </div>
    </div>
  );
}

export default App;
