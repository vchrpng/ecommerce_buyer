import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const MessageBox = styled.div`
    position:fixed;
    top:0;
    left:0;
    color:white;
    width:100%;
    height:50px;
    background-color:red;
    display:flex !important;
    justify-content:center !important;
    align-items:center !important;
    letter-spacing:1px;
    
`

const RequiredMsg = ({ message , children }) => {
    return (
        <MessageBox>
           <p>{message}</p>
        </MessageBox>
    )
}

RequiredMsg.PropTypes = {
    message : PropTypes.string.required
}

export default RequiredMsg