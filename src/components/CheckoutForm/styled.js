import styled from 'styled-components'

export const OrderFormLayout = styled.div`
    margin-top:20px;

    .invoice-detail {
        display: flex;

        .shipping-destination {
            width:100%;
            
            .input-group {
                display: flex;
            }
        }

        .payment-method {
            width:100%;

            .credit-card {

            }
        }
    }
    
    

    .credit-card {
        background: red;
    }

    .confirm-payment {
        display: flex;
        margin: 25px 0;

        .pay-button {
            width: 40%;

            .secure-icon {
                width: 15px;
                height: 15px;
                filter: invert(1);
                margin-right:8px;
            }
        }
    }


`