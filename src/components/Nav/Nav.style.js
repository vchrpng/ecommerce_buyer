import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.ul`
    list-style-type: none;
    margin-top: 50px;
    margin-bottom:20px;
    padding: 0;
    overflow: hidden;
    text-transform:uppercase;
    font-size:0.7em;
    float:${(props) => props.float};
`

export const Item = styled.li`
    display:inline-block;
    padding:30px;
`

