import styled from 'styled-components'
import { Table } from 'semantic-ui-react' 

export const OnlyComputer = styled.div`
    @media only screen and (max-width : 1100px){
        display:none;
    }
`

export const OnlyTablet = styled.div`
     @media only screen and (min-width : 1100px){
        display:none;
    }

`

export const FooterResponsive = styled.div`
        @media only screen and (min-width : 765px){
            margin-top:150px;
        }
        margin-top:20px;
`

export const ButtonResponsive = styled.div`
    @media only screen and (min-width : 765px){
        margin-top:150px;
    }
    margin-top:20px;

`

export const Padded = styled.div`
    @media only screen and (max-width : 765px){
        padding:20px;
    }
`

export const Td = styled.td`
    @media only screen and (max-width : 765px){
        display:none;
    }

`

export const First = styled.td`
padding:5px 0 5px 11px !important;
border:none !important;
text-align : ${(props) => props.textAlign ? 'right !important' : 'left'  };
@media only screen and (max-width : 765px){
    display:none;
 }
`
export const ProdImg = styled(Table.Cell)`
@media only screen and (max-width : 765px){
    display:none;
 }
`
