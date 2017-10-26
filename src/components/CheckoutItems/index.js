import React from 'react'
import { Table } from 'semantic-ui-react'
// import { Label} from '../Etc/Label' 

const CheckoutItems = () => {
    return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell>
                        <label> Product  </label>
                    </Table.HeaderCell>  
                    <Table.HeaderCell>
                         <label> Price  </label>
                    </Table.HeaderCell>  
                    <Table.HeaderCell>
                         <label> Remove  </label>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
    )
}

export default CheckoutItems