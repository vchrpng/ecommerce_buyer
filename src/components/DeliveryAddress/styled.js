import styled from 'styled-components'
const checkedIcon = require('../../assets/correct.svg')

export const AddressBox = styled.li`
    position:relative;
    min-width: 193px;
    padding: 10px 20px;
    margin-right:16px;
    font-size:10px;
    color: rgb(0,0,0,0.7);
    padding-left:10px;
    cursor: pointer;
    transition:.3s;


    .address-box-background {
        &:before {
        border-radius: 4px;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border:2px solid ${props => props.selected ? 'cornflowerblue' : 'lightgray'};
        pointer-events: none;
        content: '';
    }

    p {
        margin-bottom:5px;
    }

     ${props => props.selected && `
        &:after {
            content: " ";
            width: 20px;
            height: 20px;
            background-size:contain;
            background-image: url(${checkedIcon});
            position: absolute;
            right:-9px;
            top:-9px;
        }
    `}
    }

    
   

`

export const DeliveryAddressContainer = styled.section`

        .shipping-address-selector {
            display:flex;

            .delivery-address-list {
                display: flex;
                overflow-x: scroll;
                margin-right: -3px;
                padding:10px 0;
            }

            .more-address {
                min-width:193px;

                .add-address-btn {
                    height:197px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction:column;
                    border: 1px dashed gray;
                    border-radius: 4px;
                    padding: 10px;
                    font-size:12px;
                    color:rgb(0,0,0,0.5);
                    cursor:pointer;
                    position:relative;


                    .img {
                        width: 100px;
                    }
                }
            }

            ul {
                .address-box {
                
                }
            }
        }

`