import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.div`
    background-image: url('${(props) => props.image}');
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-size:cover;
`

class Image extends React.Component  {
    render(){
    const  { image , height , width } = this.props
return (
    <Img
        height={height}
        width={width}
        image={image}
    />
        )
    }
}

Image.PropTypes = {
    image : PropTypes.string.isRequired,
    height : PropTypes.number.isRequired,
    width : PropTypes.number.isRequired
}

export default Image