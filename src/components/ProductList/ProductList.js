import React from 'react'
import Image from '../Etc/Image'
import {Thumbnail} from './ProductList.style'

const ProductList = ({product}) => {

    return(
      
        <Thumbnail>
              
            <Image 
                height={'291px'} 
                width={'235px'}
                image={product.img}
            />
            <label>{product.title}</label><br/>
            <label>{product.price} $</label>
        
        </Thumbnail>
      
    )
}

export default ProductList