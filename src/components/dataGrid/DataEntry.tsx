import React, { FC, useRef, ChangeEvent, Dispatch, SetStateAction } from 'react'
import Input from '../generalComponents/Input'
import Button from '../generalComponents/Button'
import { data } from '../../interfaces'
import { emptyData } from '../../fakeData'

interface Props{
    handleData(newValue:data, id?:number):void,
    inputData:data,
    setInputData:Dispatch<SetStateAction<data>>
}

const DataEntry:FC<Props> = ({handleData, inputData, setInputData}) => {

  const formRef = useRef<HTMLFormElement|null>(null)

  const handleChange = (e:ChangeEvent)=>{
    const value = (e.target as HTMLInputElement).value
    const name = (e.target as HTMLInputElement).name
    setInputData(prevState=>{
        return {...prevState, [name]:value}
    })

  }
  const handleSubmit = (e:SubmitEvent)=>{
    e.preventDefault()
    if((formRef.current as HTMLFormElement).checkValidity()){
       handleData(inputData)
       setInputData(emptyData)
    }
  }
  return (
    <form ref={formRef} className="w-full flex flex-col">
        <div className="w-full flex justify-between py-4 ">
            <Input required width={35} value={inputData.firstName} placeholder="Employee's First Name" type="text" name="fName" onChange={(e:ChangeEvent)=>handleChange(e)}/>
            <Input required width={35} value={inputData.lastName} placeholder="Employee's Last Name" type="text" name="lName" onChange={(e:ChangeEvent)=>handleChange(e)}/>
            <Input required width={12} value={inputData.age} placeholder="Employee's Age" name="age" type="number" onChange={(e:ChangeEvent)=>handleChange(e)}/>
            <Input required width={12} value={inputData.pay} placeholder="Employee's Pay" name="pay" type="number" onChange={(e:ChangeEvent)=>handleChange(e)}/>
        </div>
        
       <textarea required name="description" placeholder="Enter employee's role description" className="h-[200px] placeholder:text-sm focus:outline-none focus:ring-1 shadow-lg rounded-lg p-2 bg-gray-300/10 resize-none" value={inputData.description} onChange={(e:ChangeEvent)=>handleChange(e)}></textarea>
       <div className="mt-6 space-x-6">
        <Button name="Submit" type="submit"onClick={(e:SubmitEvent)=>handleSubmit(e)}/>
        <Button name="Clear" type="submit" secondary/>

       </div>

    </form>
  )
}

export default DataEntry