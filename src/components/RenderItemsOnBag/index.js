import React from 'react'
import { Label } from '../Etc/Label'
import { ButtonStyled } from '../Etc/Reusable'
import { connect } from 'react-redux'
import { deleteFromBag } from '../../actions'

const RenderItemsOnBag = ({ product , deleteFromBag , size }) => {
    return (
        product.map((item,idx) =>
            <tr key={idx}>
                    <td >
                        <img style={{ width: '80px' }} src={item.thumbnail}/>
                    </td>
                    <td style={{ width: '200px' }}>
                        <Label weight={'bold'}>{item.title}</Label>
                        <Label weight={'lighter'}>{item.category}</Label>
                        <Label weight={'lighter'}>Size : {size[idx]}</Label>
                    </td>
                    <td  >
                        <ButtonStyled onClick={() => 
                            deleteFromBag(idx,size[idx],item.id)}
                        >  REMOVE </ButtonStyled>
                    </td>
                    <td style={{ paddingLeft: '20px' }}>
                        <label>${item.price.toFixed(2)}</label>    
                    </td>
            </tr>
        )
    )
}

export default connect(null,{deleteFromBag})(RenderItemsOnBag)