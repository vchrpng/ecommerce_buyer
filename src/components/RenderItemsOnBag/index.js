import React from 'react'
import { Table , Image } from 'semantic-ui-react'
import { Label } from '../Etc/Label'
import { ButtonStyled } from '../Etc/Reusable'
import { connect } from 'react-redux'
import { ProdImg } from '../Responsive'
import { deleteFromBag } from '../../actions'

const RenderItemsOnBag = ({ product , deleteFromBag , size }) => {
    return (
        product.map((item,idx) =>
            <Table.Body key={idx}>
                <Table.Row>
                    <ProdImg width={2}>
                        <Image style={{marginLeft:'20%'}} size="tiny" src={item.thumbnail}/>
                    </ProdImg>
                    <Table.Cell width={10} verticalAlign={'top'} style={{borderLeft:'none'}}>
                        <Label weight={'bold'}>{item.title}</Label>
                        <Label weight={'lighter'}>{item.category}</Label>
                        <Label weight={'lighter'}>Size : {size[idx]}</Label>
                    </Table.Cell>
                    <Table.Cell width={2} style={{borderLeft:'none'}}>
                        <ButtonStyled onClick={() => 
                            deleteFromBag(idx,size[idx],item.id)}
                        >  REMOVE </ButtonStyled>
                    </Table.Cell>
                    <Table.Cell width={2} 
                        textAlign={'right'} 
                        style={{borderLeft:'none'}}>
                        <label>${item.price.toFixed(2)}</label>    
                    </Table.Cell>
                    </Table.Row>
            </Table.Body>
        )
    )
}

export default connect(null,{deleteFromBag})(RenderItemsOnBag)