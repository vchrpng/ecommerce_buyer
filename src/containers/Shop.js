import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/Etc/Container'
import { Row , Column } from '../theme/Grid'

class Shop extends React.Component {
    render(){
     
        return(
            <Container height={800}>
                <Row>
                    <Column md={4}>
                    nah
                        </Column>
                    <Column md={4}>
                        <Row>
                            yes
                        </Row>
                    </Column>
                    <Column md={1}>
                        woah
                    </Column>
                </Row>
            </Container>
        )
    }
}

Shop.PropTypes = {
    products : PropTypes.shape({
        id : PropTypes.number.isRequired,
        img : PropTypes.string.isRequired,
        brand : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        description : PropTypes.string.isRequired
    }).isRequired
}

export default Shop

