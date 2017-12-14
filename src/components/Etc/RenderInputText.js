import styled from 'styled-components'
import React from 'react';


export const InputText = styled.input`
    width:${(props) => props.width ? props.width : '100%'};
    height:${(props) => props.height ? props.height : '30px'};
    background-color:white !important;
    border:1px solid black !important;
    margin-bottom:20px;
    padding-left:17px !important;
    border-radius:0 !important;
    font-size:12px !important;
    letter-spacing:1px !important;
`
class RenderInputText extends React.Component {

    handleChange = (e,data) => {
        this.props.onEventChange(e.target.value)
    }

    render(){
    const { width , height , placeholder , name , value } = this.props
    
        return (
            <InputText
                name={name}
                width={width}
                height={height}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
            />
        )
    }
}


export default RenderInputText