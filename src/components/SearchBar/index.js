import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
   
   
   transition:.5s;
   width: ${(props) => props.open ? '200px' : '0'};
   border-bottom:1px solid lightgray;
   border-top:1px solid white;
   border-left:1px solid white;
   border-right:1px solid white;
    :focus{
        outline:none;
    }

`
const Div = styled.div`
    position:absolute;
    top:62px;
    left:92px;

`


const SearchBar = ({ open }) => {
    return (
        <Div>
            <SearchInput open={open}/>
        </Div>
    )
}

export default SearchBar