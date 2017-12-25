import React from 'react'
import { Cell } from './styled'
import { Table } from 'semantic-ui-react'
import { First } from '../Responsive'

const ShoppingBagTablePricing = ({ total }) => {
    return (
        <Table.Body>
            <tr>
                <First/>
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
                <First/>
                <Cell>
                    <label style={{fontWeight:'bold'}}>Shipping Estimate </label>
                </Cell>
                <Cell/>
                <Cell textAlign={'right'}>
                    $ free
                </Cell>
                <Cell/>
            </tr>
            <tr>
                <First/>
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
                <First/>
                <Cell>
                    <label style={{fontWeight:'bold'}}>Order Total</label>
                </Cell>
                <Cell/>
                <Cell textAlign={'right'}>
                    $ {total}
                </Cell>
                <Cell/>
            </tr>
        </Table.Body>
    )
}

export default ShoppingBagTablePricing