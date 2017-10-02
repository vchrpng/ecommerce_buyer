import React from 'react'
import Image from '../Etc/Image'
import {Thumbnail} from './ProductList.style'
import { Row , Column } from '../../theme/Grid'
import { Link } from 'react-router-dom'


const ProductList = ({product}) => {

    return(
      
        <Thumbnail>
            <Link to={`/products/${product.category}/${product.id}`}>
            <Image 
                height={'291px'} 
                width={'237px'}
                image={product.img}
            />
            </Link>
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