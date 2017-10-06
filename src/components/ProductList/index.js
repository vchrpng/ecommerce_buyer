import React from 'react'
import { Image } from 'semantic-ui-react'
import { Thumbnail } from './styled'
import { Row , Column } from '../../theme/Grid'
import { Link } from 'react-router-dom'
// import { Dimmer , Image , Header , Button } from 'semantic-ui-react'


const ProductList = ({ product }) => {

    // const content = (
    //     <div> 
    //             <Header as='h2' inverted>Title</Header>
    //             <Button primary>Add</Button>
    //             <Button>View</Button>
    //     </div>
    // )


    return(
      
        <Thumbnail>
            <Link to={`/products/${product.category}/${product.id}`}>
            <Image src={product.img}/>
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