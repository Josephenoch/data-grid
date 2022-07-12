import React, { FC } from 'react'

interface Props{
    name:string|number,
    secondary?:boolean,
    [x:string]:any
}

const Button:FC<Props> = ({name, secondary, ...rest}) => {
  const styles = {
    btnType:secondary?"text-blue-400 hover:bg-blue-400 hover:text-white":"bg-blue-400 text-white"
  }
  return (
    <button {...rest} className={`text-blue ${styles.btnType} border-2 py-1 px-3 rounded-lg border-blue-400 hover:scale-105 active:scale-90 transition-all duration-200 ease-linear`}>{name}</button>
  )
}

export default Button