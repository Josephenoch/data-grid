import React,{FC, useState} from 'react';
import DataGrid from './components/DataGrid';
import "./index.css"
import fakeData, { emptyData } from './fakeData';
import { data } from './interfaces';
import DataEntry from './components/DataEntry';

const App:FC= ()=>  {
  
  //state variables 
  const [width, setWidth] = useState<number>(1400)
  const [data, setData] = useState<data[]>(fakeData)
  const [id,setId] = useState<number|null>(null)
  const [inputData, setInputData] = useState<data>(emptyData)

  // function for editing data
  const handleData = (newData:data) =>{
    setData(prevData=>{
      const oldData = [...prevData]
      if(id || id===0){
        oldData[id] = {...newData}
        return [...oldData]
      }
      oldData.push({...newData})
      return [...oldData]
    })
  }

  // function for deleting data
  const deleteData =  (id:number) =>{
    setData(prevState=>{
      const newData = [...prevState]
      newData.splice(id,1)
      return [...newData]
    })
  }

  // js for smooth scrolll
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });

  // tailwind css classes
  const styles={
    width:`min-w-[${width}]`
  }
  return (
    <div className="flex min-w-full justify-center text-gray-500">
      <a href="top" className="hidden">Hi</a>
      <div className={`${styles.width} flex-col flex justify-center mt-10 space-y-10`}>
        <DataEntry 
          handleData={handleData}
          inputData={inputData}
          setInputData={setInputData}
        />
        <DataGrid 
          data = {data} 
          width = {width} 
          setWidth = {setWidth}
          deleteData = {deleteData}
          setId={setId}
          handleData={handleData}
          setInputData = {setInputData}
        />
      </div>
    </div>
  );
}

export default App;
