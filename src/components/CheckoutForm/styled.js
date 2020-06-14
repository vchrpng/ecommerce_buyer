import styled from 'styled-components'
import { Form } from 'formik'

const checkedIcon = require('../../assets/correct.svg')



export const PaymentSelector = styled.div`
    position:relative;
    font-size:12px;
    color: rgb(0,0,0,0.7);
    transition:.3s;
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
    border:2px solid ${props => props.selected ? 'lightblue' : 'lightgray'};


    > input,label {
        pointer-events:none;
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    }

    > img {
        margin: 0 auto;
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


export const OrderFormContainer = styled(Form)`
    max-width:620px;
    width:100%;
    padding: 20px 40px;
    border-right:1px solid #f8f8f8;

    @media only screen and (max-width : 750px){
            max-width:100%;
    }

    .checkout-form-layout {
        max-width:400px;
        margin:0 auto;

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
                        border-radius:4px;
                        border: 2px solid lightblue
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
            margin-top: 25px;

            .pay-button {
                    width: 100%;

                    .secure-icon {
                        width: 15px;
                        height: 15px;
                        filter: invert(1);
                        margin-right:8px;
                    }
                }
        }
    }

    


`