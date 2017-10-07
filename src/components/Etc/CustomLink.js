import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CustomLink = styled(Link)`
    color: ${(props) => props.color};
    text-decoration: none;
    
`