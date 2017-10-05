import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

export const ButtonStyled = styled(Button)`
    width:65%;
    color:white !important; 
    background:black !important;
    font-size:9px !important;
    border-radius:0px !important;
    height:50px;

    &:hover{
        color:black !important;
        background:white !important;
    } 
`