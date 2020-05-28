import styled from 'styled-components'

export const OrderFormLayout = styled.div`
    margin-top:20px;

    .checkout-box {
        display: flex;
        padding: 20px;
        /* background: #f3f3f3; */
        border-radius: 5px;
        box-shadow: 2px 5px 20px -4px rgba(163,163,163,1);

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
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .pay-button {
                margin-bottom: 20px;

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