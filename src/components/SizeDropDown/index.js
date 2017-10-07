import React from 'react'
import { Dropdown } from 'semantic-ui-react'


var stateOptions = [
    { key : 'S',value: 'S', text: 'S' },
    { key : 'M',value: 'M', text: 'M' },
    { key : 'L',value: 'L', text: 'L' },
    { key : 'XL',value: 'XL', text: 'XL' },
  ]


const SizeDropDown =  props  => {
  return ( 
    <Dropdown style={{width:'100%'}}
        selection {...props.input}
         value={props.input.value}
         onChange={(param,data) => props.input.onChange(data.value)}
          placeholder='SELECT YOUR SIZE' search 
          options={stateOptions} />
)}


export default SizeDropDown