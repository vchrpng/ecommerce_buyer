import React from 'react'
import { connect } from 'react-redux'
import { DisplayGrid } from '../theme/Grid'
import { getBagProducts } from '../reducers'

const ShoppingBag = ({ products }) => {
    console.log(products)
        return (
            <DisplayGrid column={'repeat(10,1fr)'} autoRows={'max-content,1fr'}>
                    <div style={{gridColumn:'5/6',gridRow:'1'}}><h3>Shopping Bag</h3></div>
                <DisplayGrid column={'repeat(10,1fr)'} style={{gridColumn:'3/8',gridRow:'2'}}>
                    <div style={{gridColumn:'3/6'}}>  ITEM </div>
                    <div style={{gridColumn:'7/9'}}> PRICE </div>
                    <div style={{gridColumn:'9/10'}}>  REMOVE </div>
                </DisplayGrid>
                <DisplayGrid column={'repeat(10,1fr)'} style={{gridColumn:'3/8',gridRow:'3'}}>
                    <div style={{gridColumn:'1/3'}}>  pic </div>
                    <div style={{gridColumn:'3/6'}}> ITEM </div>
                    <div style={{gridColumn:'7/9'}}>  PRICE </div>
                    <div style={{gridColumn:'9/10'}}>  X </div>
                </DisplayGrid>
                <DisplayGrid column={'repeat(10,1fr)'} style={{gridColumn:'3/8',gridRow:'4'}}>
                    <div style={{gridColumn:'3/6'}}>  ITEM </div>
                    <div style={{gridColumn:'7/9'}}> PRICE </div>
                  
                 </DisplayGrid>
           
            </DisplayGrid>
        )
}


const mapStateToProps = state => ({
    products : getBagProducts(state)
})


export default connect(mapStateToProps)(ShoppingBag)
