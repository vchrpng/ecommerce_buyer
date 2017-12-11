import React from 'react'
import { Table } from 'semantic-ui-react'

const CheckoutItems = () => {
    return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell
                        style={{borderLeft:'none'}}>
                        <label> Product  </label>
                    </Table.HeaderCell>
                    <Table.HeaderCell style={{borderLeft:'none'}}/>
                    <Table.HeaderCell 
                        textAlign={'right'} 
                        style={{borderLeft:'none'}}>
                         <label> Price  </label>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
    )
}

export default CheckoutItems