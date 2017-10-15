import React from 'react'
import { deleteFromBag } from '../../actions'
import { Grid , Icon , Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTotal } from '../../reducers'
import CheckoutDetail from '../CheckoutDetail'


const ItemsOnBag = ({ product , deleteFromBag , total }) => {
    const renderLists = product.map((item,idx) =>
        <div key={idx}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(12,1fr)'}}>
                <div style={{gridColumn:'4/5'}}>
                    <Image size="tiny" src={item.img}/>
                </div>
                <div style={{gridColumn:'6/7'}}>
                    <span>{item.title}</span><br/>
                </div>
                <div style={{gridColumn:'11/12'}}>
                    <span >${item.price.toFixed(2)}</span>    
                </div>
                <div style={{gridColumn:'12/13'}}>         
                    <Icon onClick={() => deleteFromBag(idx)} name='x' />
                </div>
            </div>
        </div>
    )
    
   

    return (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column width={8} >
                  <p style={{textAlign:'center'}}>  Shopping Bag </p>
              
                        {renderLists}
                    
                <CheckoutDetail total={total}/>
                </Grid.Column>
                <Grid.Column width={8} >
                    register
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => ({
    total : getTotal(state)
})

export default connect(mapStateToProps,{deleteFromBag})(ItemsOnBag)