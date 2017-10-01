import React, { Component } from 'react'
import Container from '../components/Etc/Container'
import { Row , Column } from '../theme/Grid'

export default class ShoppingBag extends Component {
    render() {
        return (
            <Container height={500}>
                <Row>
                    <Column>
                    My Shopping Bag
                    </Column>
                </Row>
            </Container>
        )
    }
}
