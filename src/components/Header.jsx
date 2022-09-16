import React from 'react'

export const Header = ({category, title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>
          {category}
      </p>
      <p className='text-3xl font-extrabold text-slate-900 tracking-tight' >
        {title}
      </p>
    </div>
  )
}
