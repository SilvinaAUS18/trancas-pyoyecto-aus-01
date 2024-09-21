import React from 'react'

const Imput = ( {type, value, onChange, name,label, placeholder}) => {
  return (
    <div className='space-y-1 bg-slate-300 text-blue-800'>
        <label className='text-lg font-bold' > {label}</label>
        <input 
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className=' w-full bg-zinc-100 p-3 rounded-lg'
         />

        
    </div>
  )
}

export default Imput 