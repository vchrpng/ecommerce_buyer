import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.isOpen ? 1 : 0};
    width: 600px;
    z-index: 99;
    margin: 40px auto;

    

    .outside {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 90;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        outline: 0;
    }

    .box-dialog {
        border-radius: 3px;
        z-index: 1050;
        width: 100%;
        background-color: #fefefe;
        -webkit-box-shadow: 0px 8px 26px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 8px 26px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 8px 26px -4px rgba(0,0,0,0.75);

        .box-content {
            padding: 30px 24px 35px 24px;
            width: 100%;
            height:100%
        }

        .box-body {
            font-size: 14px;
            padding: 0px;
            width: auto;
            height: auto;
        }
    }

    @media only screen and (max-width : 750px) {
        width:420px;

        .box-dialog {
            height: 560px;
        }
    }
`;

