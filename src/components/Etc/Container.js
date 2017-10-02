import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContainerStyle = styled.div`
    height: ${(props) => props.height}px;
    padding: ${(props) => props.padding}px;
`

class Container extends React.Component  {
    render(){
        const  { height , padding } = this.props
            return (
                <ContainerStyle padding={padding} height={height}>
                    {this.props.children}
                </ContainerStyle>
                    )
                }
            }

Container.PropTypes = {
    height : PropTypes.number.isRequired,
}

export default Container