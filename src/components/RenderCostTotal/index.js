import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    display:flex;
    flex-direction:column;
    margin:10px 0;
    padding:10px 0;
`
const TableRow = styled.tr`
    display:flex;
    justify-content:space-between;
`

const RenderCostTotal = ({ total }) => {
    // const shipping = total > 500 ? 0 : 50 
    // const orderTotal = parseFloat(total) + parseFloat(shipping)
    return(
        <Table>
            <tbody>
                <TableRow>
                    <td><strong>Shipping Estimate</strong></td>
                    <td><strong>free</strong></td>
                </TableRow>
                <TableRow>
                    <td><strong>Duties and Taxes</strong></td>
                    <td><strong>included</strong></td>
                </TableRow>
                <TableRow>
                    <td style={{display:'flex',alignItems:'center'}}><h4>Order Total</h4></td>
                    <td><h2>$ {total}</h2></td>
                </TableRow>
            </tbody>
        </Table>
    )
}

export default RenderCostTotal