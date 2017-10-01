import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-transform:uppercase;
    font-size:1em;
    float:${(props) => props.float};
`

export const ListItem = styled.li`
    display:inline-block;
    padding:30px;
`

export const CustomLink = styled(Link)`
    color:black;
    text-decoration: none;

`