import React from 'react'
import { Table , Icon , Image } from 'semantic-ui-react'
import { Label } from '../Etc/Label'

const RenderList = ({ product , deleteFromBag }) => (
    product.map((item,idx) =>
        <Table.Body key={idx}>
            <Table.Row>
                <Table.Cell>
                    <Image size="tiny" src={item.img}/>
                </Table.Cell>
                <Table.Cell>
                    <Label>{item.title}</Label><br/>
                </Table.Cell>
                <Table.Cell>
                    <label>${item.price.toFixed(2)}</label>    
                </Table.Cell>
                <Table.Cell>
                    <Icon 
                    style={{cursor:'pointer'}} 
                    onClick={() => deleteFromBag(idx)} name='x' />
                </Table.Cell>
                </Table.Row>
        </Table.Body>
    )
)

export default RenderList