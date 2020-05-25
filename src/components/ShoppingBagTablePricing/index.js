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
                    <label style={{fontWeight:'bold'}}>Total</label>
                </Cell>
                <Cell textAlign={'right'}>
                  <h4>  $ {total} </h4>
                </Cell>
            </tr>
        </Table.Body>
    )
}

export default ShoppingBagTablePricing