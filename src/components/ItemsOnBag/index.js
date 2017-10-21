import React from 'react'
import { deleteFromBag } from '../../actions'
import { Grid , Icon , Image , Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTotal } from '../../reducers'
import CheckoutDetail from '../CheckoutDetail'
import CheckoutItems from '../CheckoutItems'
// import { ButtonStyled } from '../Etc/ButtonStyled'
import { Label } from '../Etc/Label'
import Member from '../Member'


const ItemsOnBag = ({ product , deleteFromBag , total }) => {
    const renderLists = product.map((item,idx) =>
        <Grid key={idx} textAlign={'center'}>
            <Grid.Column>
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(12,1fr)'}}
                >
                <div style={{gridColumn:'1/3'}}>
                    <Image size="tiny" src={item.img}/>
                </div>
                <div style={{gridColumn:'3/9'}}>
                    <Label>{item.title}</Label><br/>
                </div>
                <div style={{gridColumn:'9/11',textAlign:'right'}}>
                    <label>${item.price.toFixed(2)}</label>    
                </div>
                <div style={{gridColumn:'11/13',textAlign:'center'}}>         
                    <Icon style={{cursor:'pointer'}} onClick={() => deleteFromBag(idx)} name='x' />
                </div>
            </div>
            </Grid.Column>
        </Grid>
    )
    
   

    return (
        <Grid style={{margin:'60px'}}>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} computer={8}>
                    <CheckoutItems>
                    <Divider/>
                        {renderLists}
                        <Divider/>
                    </CheckoutItems>
                    <CheckoutDetail total={total}/>
                </Grid.Column>
                <Grid.Column only={'computer'} computer={8} >
                    <Member/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => ({
    total : getTotal(state)
})

export default connect(mapStateToProps,{deleteFromBag})(ItemsOnBag)