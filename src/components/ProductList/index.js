import React from 'react'
import { Image } from 'semantic-ui-react'
import { Thumbnail } from './styled'
import { Row , Column } from '../../theme/Grid'
import { Link } from 'react-router-dom'


const ProductList = ({ product }) => {



    return(
      
        <Thumbnail>
            <Link to={`/products/${product.category}/${product.id}`}>
            <Image src={product.img}/>
            </Link>
            <Row>
                <Column style={{marginTop:'10px'}}>
                    <strong>   
                    {product.title} 
                    <br/>
                    ({product.color})
                    </strong>
                </Column>
                <Column>
                    {product.price} $
                </Column>
            </Row>
        
        </Thumbnail>
      
    )
}

export default ProductList