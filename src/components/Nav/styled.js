import styled from 'styled-components'


export const List = styled.ul`
    display:flex;
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    text-transform:uppercase;
    font-size:0.8em;
    float:${(props) => props.float};
    padding:20px 50px 0 50px;
`

export const Item = styled.li`
    display:inline-block;
    margin:30px 10px;
`

