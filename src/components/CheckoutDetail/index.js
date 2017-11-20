import React from 'react'
import { Cell } from './styled'
import { Table } from 'semantic-ui-react'

const CheckoutDetail = ({ total }) => {
    const shippingCost = total > 500 ? 0 : 50
    const orderTotal = parseFloat(total) + parseFloat(shippingCost)
    return (
        <Table.Body>
            <tr>
                <Cell/>
                <Cell>
                    <label> Total </label>
                </Cell>
                <Cell >
                    ${total}
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <Cell/>
                <Cell>
                    <label>Shipping Estimate </label>
                </Cell>
                <Cell >
                    ${shippingCost.toFixed(2)}
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <Cell/>
                <Cell>
                    <label> Duties and Taxes </label>
                </Cell>
                <Cell >
                    included
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <Cell/>
                <Cell>
                    <label>Order Total</label>
                </Cell>
                <Cell textAlign={'right'}>
                    ${orderTotal.toFixed(2)}
                </Cell>
                <Cell/>
            </tr>
        </Table.Body>
    )
}

export default CheckoutDetail