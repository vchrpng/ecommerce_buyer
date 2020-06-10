import styled from 'styled-components'

export const AddressBox = styled.li`
    min-width: 193px;
    border: 2px solid ${props => props.selected ? 'lightblue' : 'gray'};
    box-shadow: ${props => props.selected ? '0px 0px 5px -1px lightblue' : 'none'};
    padding: 10px 20px;
    margin-right:10px;
    border-radius: 4px;
    font-size:10px;
    color: rgb(0,0,0,0.7);

    p {
        margin-bottom:5px;
    }

`

export const DeliveryAddressContainer = styled.section`

        .shipping-address-selector {
            margin-right:-66px;
            display:flex;

            .more-address {
                
                .add-address-btn {
                    height:197px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 45px;
                    border: 1px dashed gray;
                    border-radius: 4px;
                    padding: 10px;
                    font-size:30px;
                    color:rgb(0,0,0,0.2);
                    cursor:pointer;
                }
            }

            ul {
                .address-box {
                
                }
            }
        }

`