import styled from 'styled-components'


export const Cell = styled.td`
    padding:5px 0 5px 11px !important;
    border:none !important;
    text-align : ${(props) => props.textAlign ? 'right !important' : 'left'  };
`
