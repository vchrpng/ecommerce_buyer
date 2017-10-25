import React from 'react'
import { ButtonStyled } from '../Etc/ButtonStyled'
import { Label} from '../Etc/Label' 
import { Table } from 'semantic-ui-react'

const CheckoutDetail = ({ total }) => {
    const shippingCost = total > 500 ? 0 : 50
    const orderTotal = parseFloat(total) + parseFloat(shippingCost)
    return (
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Label> Total </Label>
                </Table.Cell>
                <Table.Cell>
                    ${total}
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Label>Shipping Estimate </Label>
                </Table.Cell>
                <Table.Cell>
                    ${shippingCost.toFixed(2)}
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Label> Duties and Taxes </Label>
                </Table.Cell>
                <Table.Cell>
                    included
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Label>Order Total</Label>
                </Table.Cell>
                <Table.Cell>
                    ${orderTotal.toFixed(2)}
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}

export default CheckoutDetail