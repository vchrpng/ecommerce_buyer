import styled from 'styled-components'

export const OrderFormLayout = styled.div`
    margin-top:20px;
    width:100%;
    padding: 20px;

    .shipping-adress-selector {
        display:flex;

        .more-address {
            
            .add-address-btn {
                width: 100px;
                height: 80px;
                background: lightgray;
                border: none;
                border-radius: 4px;
                padding: 10px;
            }
        }

        ul {
            .address-box {
                width: 180px;
                background: gray;
                padding: 20px;
                margin-right:10px;
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
                    width: 120px;
                    height: 85px;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    background:lightgray;
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
        margin: 25px 0;

        .pay-button {
                margin-bottom: 20px;

                .secure-icon {
                    width: 15px;
                    height: 15px;
                    filter: invert(1);
                    margin-right:8px;
                }
            }
    }


`