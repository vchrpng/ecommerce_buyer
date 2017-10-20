import React from 'react'
import { Grid } from 'semantic-ui-react'

const CheckoutItems = ({children}) => {
    return (
        <Grid>
            <Grid.Column>
            <div 
            style={{
                display:'grid',
                gridTemplateColumns:'repeat(12,1fr)',padding:'10px 0 10px 0'}}>
                {/* <div style={{gridColumn:'1/13',textAlign:'center',padding:'10px'}}>Shopping Bag</div> */}
                    <div
                    style={{
                        gridColumn:'1/3'}}/>
                    <div style={{
                        gridColumn:'3/9'}}> Product </div>
                    <div style={{
                        gridColumn:'9/11'}}> Price</div>
                    <div style={{
                        gridColumn:'11/12'}}>Remove</div>
                
                <div style={{gridColumn:'1/12'}}>
                    {children}
                </div>
            </div>
        </Grid.Column>
        </Grid>
       
    )
}

export default CheckoutItems