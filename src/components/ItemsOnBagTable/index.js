import React from 'react'
import { Label } from '../Etc/Label'
import { ButtonStyled } from '../Etc/Reusable'
import { connect } from 'react-redux'
import { deleteFromBag } from '../../actions'
import styled from 'styled-components'

const TableBody = styled.tbody`
    max-height: 400px;
    display: block;
    overflow-y: scroll;
    width: 100%;
`

const ItemsOnBagTable = ({ product , deleteFromBag , size }) => {
    return (
        <TableBody>
            {product.map((item,idx) =>
            <tr  style={{ width: '100%' }}key={idx}>
                    <td >
                        <img style={{ width: '80px' }} src={item.thumbnail}/>
                    </td>
                    <td style={{ width: '100%' }}>
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
        )}
        </TableBody>
    )
}

export default connect(null,{deleteFromBag})(ItemsOnBagTable)