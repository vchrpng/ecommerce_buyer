import React from 'react'
import Product from '../../containers/Product'
import { Image, Modal } from 'semantic-ui-react'
import { Thumbnail } from './styled'
import { Row , Column } from '../../theme/Grid'


const BuyerProductList = ({ product }) => {


    return(
        <Modal trigger={
            <Thumbnail>
                <Image src={product.thumbnail}/>
                <Row>
                    <Column style={{marginTop:'10px'}}>
                       <h4> {product.title} </h4>
                    </Column>
                    <Column><p style={{ color: 'gray' }}>{product.category}</p></Column>
                    <Column>
                       <h4> {product.price} $</h4>
                    </Column>
                </Row>
            </Thumbnail>
        }>
        <Product id={product.id} />
        </Modal>
    )
}

export default BuyerProductList