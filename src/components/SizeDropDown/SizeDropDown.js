import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

var options = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ]


const SizeDropDown = ({ input }) => {
  return ( 
    <Select
        {...input}
         onFocus={input.onFocus}
         value={input.value}
         options={options}
         onChange={(value) => input.onChange(value)}
         onBlur={() => input.onBlur(input.value)}
         simpleValue    
    />
)}


export default SizeDropDown