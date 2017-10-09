import React from 'react'
import { DisplayGrid } from '../../theme/Grid'
import { Image } from 'semantic-ui-react'

const ItemsOnBag = ({ product }) => {
    // const nodes = product.map(item =>
    //     <DisplayGrid key={item} column={'repeat(10,1fr)'} style={{gridColumn:'3/8',gridRow:'3'}}>
    //         <div style={{gridColumn:'1/3'}}> 
    //           <Image src={item.img}/> 
    //         </div>
    //         <div style={{gridColumn:'3/6'}}> {item.title} </div>
    //         <div style={{gridColumn:'7/9'}}>  {item.price} </div>
    //         <div style={{gridColumn:'9/10'}}>  X </div>
    //     </DisplayGrid>
    // )
   
    return (
        <DisplayGrid column={'repeat(10,1fr)'} autoRows={'max-content,1fr'}>
            <div style={{gridColumn:'5/6',gridRow:'1'}}><h3>Shopping Bag</h3></div>
            <DisplayGrid column={'repeat(10,1fr)'} style={{gridColumn:'3/8',gridRow:'2',borderBottom:'1px solid black'}}>
                    <div style={{gridColumn:'3/6'}}>  ITEM </div>
                    <div style={{gridColumn:'7/9'}}> PRICE </div>
                    <div style={{gridColumn:'9/10'}}>  REMOVE </div>
            </DisplayGrid>
            
            <DisplayGrid column={'repeat(10,1fr)'} style={{gridColumn:'3/8',gridRow:'4'}}>
                    <div style={{gridColumn:'3/6'}}>  ITEM </div>
                    <div style={{gridColumn:'7/9'}}> PRICE </div>
            </DisplayGrid>
        </DisplayGrid>
    )
}

export default ItemsOnBag