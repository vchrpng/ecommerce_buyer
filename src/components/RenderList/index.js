import React from 'react'
import { Table , Icon , Image } from 'semantic-ui-react'
import { Label } from '../Etc/Label'

const RenderList = ({ product , deleteFromBag , size }) => {
    return (
        product.map((item,idx) =>
            <Table.Body key={idx}>
                <Table.Row>
                    <Table.Cell width={2}>
                        <Image size="tiny" src={item.img}/>
                    </Table.Cell>
                    <Table.Cell width={10} verticalAlign={'top'}>
                        <Label>{item.title}</Label>
                        <Label>{item.category}</Label>
                        <Label>Size : {size[idx]}</Label>
                    </Table.Cell>
                    <Table.Cell width={2} textAlign={'right'}>
                        <label>${item.price.toFixed(2)}</label>    
                    </Table.Cell>
                    <Table.Cell width={2} textAlign={'center'}>
                        <Icon 
                        style={{cursor:'pointer'}} 
                        onClick={() => deleteFromBag(idx)} name='x' />
                    </Table.Cell>
                    </Table.Row>
            </Table.Body>
        )
    )
}

export default RenderList