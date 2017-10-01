import React from 'react'
import Image from '../Etc/Image'

const ProductList = ({product}) => {

    return(
        <Image 
            height={160} 
            width={160} 
            image={product.img}
        />

    )
}

export default ProductList