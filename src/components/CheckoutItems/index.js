import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Label} from '../Etc/Label' 

const CheckoutItems = ({children}) => {
    return (
        <Grid textAlign={'center'}>
            <Grid.Column computer={14}>
            <div 
            style={{
                display:'grid',
                gridTemplateColumns:'repeat(12,1fr)',padding:'10px 0 10px 0'}}>
                {/* <div style={{gridColumn:'1/13',textAlign:'center',padding:'10px'}}>Shopping Bag</div> */}
                   
                    <div style={{
                        gridColumn:'3/9'}}> 
                        <Label> Product  </Label>
                        </div>
                    <div style={{
                        gridColumn:'9/11',
                        textAlign:'right'}}>
                         <label> Price  </label>
                         </div>
                    <div style={{
                        gridColumn:'11/13',
                        textAlign:'center'}}>
                         <label> Remove  </label>
                        </div>
            </div>
            {children}
            </Grid.Column>
        </Grid>
       
    )
}

export default CheckoutItems