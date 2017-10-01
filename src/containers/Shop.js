import React from 'react'
// import PropTypes from 'prop-types'
import Container from '../components/Etc/Container'
import { Row , Column } from '../theme/Grid'

class Shop extends React.Component {
    render(){
        return(
            <Container height={800}>
                <Row>
                    <Column md={3}>
                        fucking Shop
                    </Column>
                    <Column md={3}>
                        <Row>
                        </Row>
                    </Column>
                    <Column md={3}>
                        fucking Shop3
                    </Column>
                </Row>
            </Container>
        )
    }
}


export default Shop

