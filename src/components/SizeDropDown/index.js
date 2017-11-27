import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { checkItem } from '../../helpers/util'



const SizeDropDown =  ({ inventory  })  => {

const hasSizeSmall = checkItem(inventory.s)
const hasSizeMedium = checkItem(inventory.m)
const hasSizeLarge = checkItem(inventory.l)
const hasSizeExtra = checkItem(inventory.xl)


const stateOptions = [
  { key : 'S',  value: 'S',   text: 'S' , disabled : hasSizeSmall },
  { key : 'M',  value: 'M',   text: 'M' , disabled : hasSizeMedium },
  { key : 'L',  value: 'L',   text: 'L' , disabled : hasSizeLarge },
  { key : 'XL', value: 'XL',  text: 'XL' ,disabled : hasSizeExtra },
]


  return ( 
    <Dropdown
          placeholder={'Please pick your size'} 
          fluid 
          options={stateOptions} />
)}



export default SizeDropDown