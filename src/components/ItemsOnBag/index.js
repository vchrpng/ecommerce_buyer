import React from 'react'
import { deleteFromBag } from '../../actions'
import { Grid , Icon , Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTotal } from '../../reducers'
import CheckoutDetail from '../CheckoutDetail'
import CheckoutItems from '../CheckoutItems'
import { ButtonStyled } from '../Etc/ButtonStyled'


const ItemsOnBag = ({ product , deleteFromBag , total }) => {
    const renderLists = product.map((item,idx) =>
        <div key={idx}>
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(12,1fr)'}}
                >
                <div style={{gridColumn:'1/3'}}>
                    <Image size="tiny" src={item.img}/>
                </div>
                <div style={{gridColumn:'3/9'}}>
                    <span>{item.title}</span><br/>
                </div>
                <div style={{gridColumn:'9/11'}}>
                    <span >${item.price.toFixed(2)}</span>    
                </div>
                <div style={{gridColumn:'11/12',textAlign:'center'}}>         
                    <Icon style={{cursor:'pointer'}} onClick={() => deleteFromBag(idx)} name='x' />
                </div>
            </div>
        </div>
    )
    
   

    return (
        <Grid style={{margin:'60px'}}>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} computer={8} >
                <CheckoutItems/>
                {renderLists}
                <CheckoutDetail total={total}/>
                <ButtonStyled>Checkout</ButtonStyled>
                </Grid.Column>
                <Grid.Column mobile={16} computer={8} >
             
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => ({
    total : getTotal(state)
})

export default connect(mapStateToProps,{deleteFromBag})(ItemsOnBag)