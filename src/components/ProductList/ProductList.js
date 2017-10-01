import React from 'react'
import Image from '../Etc/Image'

const ProductList = ({product}) => {

    return(
        <div>
            <Image 
                height={200} 
                width={200} 
                image={product.img}
            />
            <label>{product.title}</label><br/>
            <label>{product.price} $</label>
        </div>
    )
}

export default ProductList