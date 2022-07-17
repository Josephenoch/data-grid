import React,{FC, useEffect, useState} from 'react';
import DataGrid from './components/dataGrid/DataGrid';
import "./index.css"
import { emptyData } from './fakeData';
import { data, newData } from './interfaces';
import DataEntry from './components/dataGrid/DataEntry';
import Instructions from './components/Instructions';


const App:FC= ()=>  {
  
  //state variables 
  const [width, setWidth] = useState<number>(1400)
  const [data, setData] = useState<data[]|[]>([])
  const [id,setId] = useState<string>("")
  const [inputData, setInputData] = useState<data>(emptyData)

  const getData = async () => {
    const data = await fetch("https://datagrid-userlist.herokuapp.com/api/users")
    const res = await data.json()
    setData(res)
  }
  useEffect(()=>{
    getData()
  },[])
  // function for editing data
  const addData = async (newData:newData)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
  };
    await fetch("https://datagrid-userlist.herokuapp.com/api/users",requestOptions)
    await getData()
  }
  const editData = async (newData:newData)=>{
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
  };
    await fetch(`https://datagrid-userlist.herokuapp.com/api/users/${id}`,requestOptions)
    await getData()
  }
  const handleData = async(newData:data) =>{
    if(id){
      await editData(newData)
    }
    else{
      await addData(newData)
    }
  }

  // function for deleting data
  const deleteData = async (id:string) =>{
    await fetch(`https://datagrid-userlist.herokuapp.com/api/users/${id}`, { method: 'DELETE' })
    getData()
  }

  // function for sort data
  const sortData = (num:number) =>{
    console.log(num)
    const compare =(a:string|number,b:string|number)=>{
      if((typeof(a) === typeof(b))&&typeof(a)==='string'){
        if(a>b)return 1   
        if(a<b)return -1
        return 0
      }
      else if((typeof(a) === typeof(b)) && typeof(a)==='number'){
        if(a>b)return -1   
        if(a<b)return 11
        return 0
      }
      return 0

      
    }
    setData(prevState=>{
      const oldState = [...prevState]
      switch(num){
        
        case 1:
          oldState.sort((a,b)=>compare(a.firstName,b.firstName))
          console.log(oldState)
          return [...oldState]
        case 2:
          oldState.sort((a,b)=>compare(a.age,b.age))
          console.log(oldState)
          return [...oldState]
        case 3:
          oldState.sort((a,b)=>compare(a.pay,b.pay))
          return [...oldState]
        default:
          return [...oldState]
      }
    })
  }

  // tailwind css classes
  const styles={
    width:`min-w-[${width}]`
  }
  return (
    <div className="flex min-w-full justify-center text-gray-500">
      <a href="top" className="hidden">Hi</a>
      <div className={`${styles.width} flex-col flex justify-center mt-10 space-y-10`}>
        <Instructions/>
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
          sortData = {sortData}
        />
      </div>
    </div>
  );
}

export default App;
