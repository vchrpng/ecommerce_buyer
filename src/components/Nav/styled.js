import styled from 'styled-components'


export const List = styled.ul`
    display:flex;
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    text-transform:uppercase;
    font-size:0.8em;
    float:${(props) => props.float};
`

export const Item = styled.li`
    display:inline-block;
    margin:30px;
`

