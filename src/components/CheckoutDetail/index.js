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
                    <label style={{fontWeight:'bold'}}> Total </label>
                </Cell>
                <Cell/>
                <Cell textAlign={'right'}>
                    $ {total}
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <Cell/>
                <Cell>
                    <label style={{fontWeight:'bold'}}>Shipping Estimate </label>
                </Cell>
                <Cell/>
                <Cell textAlign={'right'}>
                    $ {shippingCost.toFixed(2)}
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <Cell/>
                <Cell>
                    <label style={{fontWeight:'bold'}}> Duties and Taxes </label>
                </Cell>
                <Cell />
                <Cell textAlign={'right'}>
                    included
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <Cell/>
                <Cell>
                    <label style={{fontWeight:'bold'}}>Order Total</label>
                </Cell>
                <Cell/>
                <Cell textAlign={'right'}>
                    $ {orderTotal.toFixed(2)}
                </Cell>
                <Cell/>
            </tr>
        </Table.Body>
    )
}

export default CheckoutDetail