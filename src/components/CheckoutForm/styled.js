import styled from 'styled-components'
import { Form } from 'formik'

export const AddressBox = styled.li`
    width: 180px;
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

export const PaymentSelector = styled.div`
    font-size:12px;
    color: rgb(0,0,0,0.7);
    &:nth-child(1) {
        margin-right:15px;
    }
    > input {
        margin-bottom: 5px;
    }
    opacity:${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    display:flex;
    flex-direction: column;
    border-radius:4px;
    width: 100%;
    height: 85px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:2px solid ${props => props.selected ? 'lightblue' : '#f3f3f3'};
    box-shadow: ${props => props.selected ? '0px 0px 5px -1px lightblue' : 'none'};

    > input,label {
        pointer-events:none;
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    }
`


export const OrderFormLayout = styled(Form)`
    width:100%;
    padding: 20px 40px;
    border-right:1px solid #f8f8f8;

    .shipping-adress-selector {
        display:flex;

        .more-address {
            
            .add-address-btn {
                width: 45px;
                height: 100%;
                background: lightgray;
                border: none;
                border-radius: 4px;
                padding: 10px;
                font-size:30px;
                color:gray;
                cursor:pointer;
            }
        }

        ul {
            .address-box {
               
            }
        }
    }

    .payment-method {
            width:100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .invoice-detail {

                .payment-choice {
                    display:flex;
                    margin-bottom:20px;
 
                }

                .credit-card {
                    padding: 20px;
                    border: 1px solid black;
                    border-radius:4px;
                    box-shadow:0px 1px 5px 1px lightgray;
                }
            }
        }
    

    .checkout-box {
        display: flex;
        padding: 20px;
        /* background: #f3f3f3; */
        border-radius: 5px;
        box-shadow: 2px 5px 20px -4px rgba(163,163,163,1);

        @media only screen and (max-width : 750px){
            flex-direction:column;
        }

        .shipping-destination {
            padding-right: 20px;
            width:100%;
            
            .input-group {
                display: flex;
                input:nth-child(1) {
                    margin-right: 10px;
                }
            }
        }

       
    }

    .confirm-payment {
        display: flex;
        margin-top: 15px;

        .pay-button {
                margin-bottom: 20px;
                width: 100%;

                .secure-icon {
                    width: 15px;
                    height: 15px;
                    filter: invert(1);
                    margin-right:8px;
                }
            }
    }


`