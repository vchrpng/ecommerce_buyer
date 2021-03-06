import React from 'react'
import { Label } from '../Etc/Label'
import { ButtonStyled } from '../Etc/Reusable'
import { connect } from 'react-redux'
import { deleteFromBag } from '../../actions'
import styled from 'styled-components'

const TableBody = styled.tbody`
    max-height: 230px;
    display: block;
    overflow-y: scroll;
    width: 100%;

    @media only screen and (max-width : 750px){
        .product-in-bag {
            /* display:none; */
        }
    }
`

const ItemsOnBagTable = ({ product , deleteFromBag , size }) => {
    return (
        <TableBody>
            {product.map((item,idx) =>
            <tr style={{ width: '100%' }}key={idx}>
                <td >
                    <img alt="thumbnail" style={{ width: '80px' }} src={item.thumbnail}/>
                </td>
                <td className="product-in-bag" style={{ width: '100%' }}>
                    <Label weight={'bold'}>{item.title}</Label>
                    <Label weight={'lighter'}>{item.category}</Label>
                    <Label weight={'lighter'}>Size : {size[idx]}</Label>
                </td>
                <td  >
                    <ButtonStyled onClick={() => 
                        deleteFromBag(idx,size[idx],item.id)}
                    >  REMOVE </ButtonStyled>
                </td>
                <td style={{ padding: '20px' }}>
                    <label>${item.price.toFixed(2)}</label>    
                </td>
            </tr>
        )}
        </TableBody>
    )
}

export default connect(null,{deleteFromBag})(ItemsOnBagTable)