import React, { FC, Dispatch, SetStateAction, useState } from 'react'
import { data } from '../../interfaces'    

interface Props{
    id:number,
    last?:boolean,
    data:data,
    width:number,
    setWidth:Dispatch<SetStateAction<number>>,
    deleteData(id:number):void,
    setId:Dispatch<SetStateAction<number|null>>,
    handleData(newValue:data, id?:number):void,
    setInputData:Dispatch<SetStateAction<data>>
}

const DataRow:FC<Props> = (
    {
    id, 
    last, 
    data, 
    width, 
    setId, 
    handleData, 
    setWidth, 
    deleteData,
    setInputData
    }) => {
    const [height, setHeight] = useState<number>(100)
    const styles={
        last:last?"":"border-b-[1px]"
    }

    const handler = (mouseDownEvent:any) => {
        const startSize = {x:width, y:height};
        const startPosition ={x: mouseDownEvent.pageX, y:mouseDownEvent.pageY};
        
        
        function onMouseMove(mouseMoveEvent:any) {
        setWidth(currentValue => startSize.x - startPosition.x + mouseMoveEvent.pageX);
        setHeight(currentValue => startSize.y - startPosition.y + mouseMoveEvent.pageY);}
        
        function onMouseUp() {
        document.body.removeEventListener("mousemove", onMouseMove);
        }
        
        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };
    const handleEdit = () =>{
        setId(id)
        setInputData({...data})
    }
    return(
        <tr className={` hover:bg-gray-50 cursor-pointer items-center rounded-b-xs flex px-3 text-sm justify-between w-full ${styles.last} border-blue-400 relative min-h-[85px] overflow-y-clip overflow-x-visible`} style={{ height: height }}>
            <td className="w-5 h-5 text-center my-auto text-xs inline-block rounded-full border-[1px] border-blue-500 mr-2 text-blue-400">{data.firstName[0].toUpperCase()}</td>
            <span className="flex justify-between w-full">    
                <td className="text-left flex items-center  w-[20%] py-1 px-2">{`${data.firstName} ${data.lastName}`}</td>
                <td className="inline-block text-left  w-[40%] py-1 px-2">{data.description}</td>

                <span className="flex justify-between w-[40%]">
                    <td className="inline-block text-left my-auto w-[60%] py-1 px-2">{data.age}</td>
                    <td className="inline-block text-left my-auto w-[40%] py-1 px-2">{data.pay}</td>
                </span>
            </span>
            <button className="absolute bottom-0 w-2 h-2 inline-block cursor-nw-resize right-0 translate-x-[50%] translate-y-[50%]" type="button" onMouseDown={(e)=>handler(e)}></button>
            <span className="absolute flex h-7 rounded-full active:scale-90 hover:scale-105 duration-400 transition-all ease-linear hover:bg-gray-200 w-7 items-center justify-center -left-8" onClick={()=>deleteData(id)}>
                <img src="/trash.svg"alt="trash icon" className="w-5"/>
            </span>
            <span  className="absolute flex h-7 rounded-full active:scale-90 hover:scale-105 duration-400 transition-all ease-linear hover:bg-gray-200 w-7 items-center justify-center -right-8" onClick={handleEdit}>
                <a href="#top"><img src="/edit.svg"alt="trash icon" className="w-5"/></a>
            </span>

        </tr>
    )
    
}

export default DataRow

