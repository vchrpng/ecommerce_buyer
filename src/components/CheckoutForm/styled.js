import styled from 'styled-components'

export const OrderFormLayout = styled.div`
    margin-top:20px;
    
    .input-group {
        display: flex;
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
                width: 18px;
                height: 18px;
                filter: invert(1);
            }
        }
    }


`