import React from 'react'

export const Button = ({color, bgColor, size, text,borderRadius}) => {
  return (
    <button  className={`text-${size} p-3 hover:drop-shadow-xl`} type="button" style={{color:color, backgroundColor:bgColor, borderRadius:borderRadius}}>
      {text}
    </button>
  )
}
