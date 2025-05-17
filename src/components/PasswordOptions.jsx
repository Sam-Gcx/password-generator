import React from 'react'
import {Slider, Checkbox, FormControlLabel, Typography} from '@mui/material'

const PasswordOptions = ({options, setOptions}) => {
  const handleChange=()=>{}
  return (
    <div className='options'>
      <Typography>Password Length:{options.length}</Typography>
      <Slider min={4} max={32} value={options.length} onChange={(e,val)=>setOptions(prev=>({...prev, length:val}))}/>
      <FormControlLabel control={<Checkbox checked={options.useUppercase} onChange={handleChange} />} label='Include Uppercase'/>
      <FormControlLabel control={<Checkbox checked={options.useLowercase} onChange={handleChange} />} label='Include Lowercase'/>
      <FormControlLabel control={<Checkbox checked={options.useNumbers} onChange={handleChange} />} label='Include Numbers'/>
      <FormControlLabel control={<Checkbox checked={options.useSymbols} onChange={handleChange}/>}  label='Include Symbols'/>
    </div>
  )
}

export default PasswordOptions