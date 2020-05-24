import styled from 'styled-components'


export const List = styled.ul`
    max-width: 800px;
    display:flex;
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    justify-content:flex-end;
    text-transform:uppercase;
    font-size:0.8em;
    float:${(props) => props.float};
    padding:50px 0;
    margin:0 auto;
`

export const Item = styled.li`
    filter:${props => props.disabled ? 'invert(0.5)': 'invert(0)'};
    cursor:${props => props.disabled ? 'default': 'pointer'};
    display:flex;
    justify-content:center;
    align-items:flex-end;
    margin-right:20px;
`

