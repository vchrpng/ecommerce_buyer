import styled from 'styled-components'
import { Form } from 'formik'

export const PaymentSelector = styled.div`
    &:nth-child(1) {
        margin-right:15px;
    }
    pointer-events:${props => props.disabled ? 'none' : 'auto'};
    border-radius:4px;
    width: 100%;
    height: 85px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:3px solid ${props => props.selected ? 'blue' : '#f3f3f3'};
`


export const OrderFormLayout = styled(Form)`
    width:100%;
    padding: 20px 40px;
    border-right:1px solid #f8f8f8;

    .shipping-adress-selector {
        display:flex;

        .more-address {
            
            .add-address-btn {
                width: 60px;
                height: 100%;
                background: lightgray;
                border: none;
                border-radius: 4px;
                padding: 10px;
                font-size:30px;
                color:gray;
            }
        }

        ul {
            .address-box {
                width: 180px;
                border: 2px solid gray;
                padding: 20px;
                margin-right:10px;
                border-radius: 4px;
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
                    
 
                }

                .credit-card {
                    padding: 20px 0;
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