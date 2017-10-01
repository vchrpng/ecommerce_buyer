import React from 'react'
import Image from '../Etc/Image'
import {Thumbnail} from './ProductList.style'
import { Row , Column } from '../../theme/Grid'


const ProductList = ({product}) => {

    return(
      
        <Thumbnail>
              
            <Image 
                height={'291px'} 
                width={'237px'}
                image={product.img}
            />
            <Row>
                <Column style={{marginTop:'10px'}}>
                    {product.title}
                </Column>
                <Column>
                    {product.price} $
                </Column>
            </Row>
        
        </Thumbnail>
      
    )
}

export default ProductList