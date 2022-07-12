import React, { FC } from 'react'

interface Props{
    width:number,
    [x:string]:any,
}

const Input:FC<Props> = ({width, ...rest}) => {
  const styles = {
    width:`w-[${width}%]`
  }
  return (
    <input {...rest} className={`${styles.width} placeholder:text-sm focus:outline-none focus:ring-1 shadow-lg rounded-lg p-2 bg-gray-300/10`} />
  )
}

export default Input