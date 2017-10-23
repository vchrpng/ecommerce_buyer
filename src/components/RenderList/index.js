import React from 'react'
import { Grid , Icon , Image } from 'semantic-ui-react'
import { Label } from '../Etc/Label'

const RenderList = ({ product , deleteFromBag }) => (
    product.map((item,idx) =>
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
)

export default RenderList