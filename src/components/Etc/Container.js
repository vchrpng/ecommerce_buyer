import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContainerStyle = styled.div`
    height: ${(props) => props.height}px;
`

class Container extends React.Component  {
    render(){
        const  { height } = this.props
            return (
                <ContainerStyle height={height}>
                    {this.props.children}
                </ContainerStyle>
                    )
                }
            }

Container.PropTypes = {
    height : PropTypes.number.isRequired,
}

export default Container