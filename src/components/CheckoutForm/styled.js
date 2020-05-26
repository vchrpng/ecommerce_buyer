import styled from 'styled-components'

export const OrderFormLayout = styled.div`
    margin-top:20px;

    .checkout-box {
        display: flex;
        padding: 20px;
        background: red;
        border-radius: 5px;

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

        .payment-method {
            width:100%;
            padding-left:20px;

            .pay-button {
                width: 40%;

                .secure-icon {
                    width: 15px;
                    height: 15px;
                    filter: invert(1);
                    margin-right:8px;
                }
            }

            .invoice-detail {
                .credit-card {
                    padding: 20px 0;
                }
            }
        }
    }

    .confirm-payment {
        display: flex;
        margin: 25px 0;


    }


`