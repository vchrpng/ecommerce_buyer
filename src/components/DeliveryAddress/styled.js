import styled from 'styled-components'
const checkedIcon = require('../../assets/correct.svg')

export const AddressBox = styled.li`
    position:relative;
    min-width: 193px;
    border: 2px solid ${props => props.selected ? 'lightblue' : 'gray'};
    box-shadow: ${props => props.selected ? '0px 0px 15px -1px lightblue' : 'none'};
    padding: 10px 20px;
    margin-right:16px;
    border-radius: 4px;
    font-size:10px;
    color: rgb(0,0,0,0.7);
    padding-left:10px;

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

`

export const DeliveryAddressContainer = styled.section`

        .shipping-address-selector {
            margin-right:-66px;
            display:flex;

            .delivery-address-list {
                display: flex;
                overflow-x: scroll;
                margin-right: 5px;
                padding-bottom: 10px;
                padding-left: 15px;
                margin-left: -15px;
                margin-top: -10px;
                padding-top: 10px;
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

                    p {
                        margin-top:30px;
                    }

                    &:after {
                            content:" ";
                            position:absolute;
                            top:36px;
                            width: 84px;
                            height: 84px;
                            background-color:#f3f3f3;
                            border-radius:50%;
                            z-index: -1;
                        }

                    .parcel-img {
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