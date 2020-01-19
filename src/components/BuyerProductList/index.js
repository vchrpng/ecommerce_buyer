import React from 'react'
import Product from '../../containers/Product'
import { Image, Modal } from 'semantic-ui-react'
import { Thumbnail } from './styled'
import { Row , Column } from '../../theme/Grid'
import { ButtonStyled } from '../Etc/Reusable'


const BuyerProductList = ({ product }) => {


    return(
        <Modal trigger={
            <Thumbnail>
                <Image src={product.thumbnail}/>
                <Row>
                    <Column style={{marginTop:'10px'}}>
                        <strong>   
                        {product.title} 
                        </strong>
                    </Column>
                    <Column>
                       <h4> {product.price} $</h4>
                    </Column>
                    <Column><ButtonStyled>Add To Bag</ButtonStyled></Column>
                </Row>
            </Thumbnail>
        }>
        <Product id={product.id} />
        </Modal>
    )
}

export default BuyerProductList