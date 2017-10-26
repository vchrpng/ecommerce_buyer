import React from 'react'
import { Label} from '../Etc/Label' 
import { Table } from 'semantic-ui-react'

const CheckoutDetail = ({ total }) => {
    const shippingCost = total > 500 ? 0 : 50
    const orderTotal = parseFloat(total) + parseFloat(shippingCost)
    return (
        <Table.Body >
            <Table.Row>
                <Table.Cell/>
                <Table.Cell>
                    <label> Total </label>
                </Table.Cell>
                <Table.Cell textAlign={'right'}>
                    ${total}
                </Table.Cell>
                <Table.Cell/>
            </Table.Row>
            <Table.Row>
                <Table.Cell/>
                <Table.Cell>
                    <label>Shipping Estimate </label>
                </Table.Cell>
                <Table.Cell textAlign={'right'}>
                    ${shippingCost.toFixed(2)}
                </Table.Cell>
                <Table.Cell/>
            </Table.Row>
            <Table.Row>
                <Table.Cell/>
                <Table.Cell>
                    <label> Duties and Taxes </label>
                </Table.Cell>
                <Table.Cell textAlign={'right'}>
                    included
                </Table.Cell>
                <Table.Cell/>
            </Table.Row>
            <Table.Row>
                <Table.Cell/>
                <Table.Cell>
                    <label>Order Total</label>
                </Table.Cell>
                <Table.Cell textAlign={'right'}>
                    ${orderTotal.toFixed(2)}
                </Table.Cell>
                <Table.Cell/>
            </Table.Row>
        </Table.Body>
    )
}

export default CheckoutDetail