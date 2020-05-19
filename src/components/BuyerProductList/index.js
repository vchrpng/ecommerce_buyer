import React from 'react'
import Product from '../../containers/Product'
import { Image } from 'semantic-ui-react'
import Modal from '../Modal'

import { Thumbnail, ProductListContainer } from './styled'
import { Row , Column } from '../../theme/Grid'


const BuyerProductList = ({ product }) => {
    const [isOpen,onToggleModal] = React.useState(false)
    
    return (
        <div>
            <Thumbnail onClick={() => onToggleModal(true)}>
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
            {isOpen && 
            <Modal
                id="modal"
                isOpen={isOpen}
                onClose={onToggleModal}
                header={product.title}
            >
                <Product id={product.id} />
            </Modal>}
        </div>
    )
}

export default BuyerProductList