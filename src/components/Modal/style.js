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
    width: 400px;
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
        z-index: 1050;
        width: 100%;
        background-color: #fefefe;
        box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);

        .box-content {
            padding: 24px;
            width: 100%;
        }

        .box-header {
            height: 48px;
            padding: 8px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #c7c7c7;

            .box-title {
                font-size: 24px;
                font-weight: 400;
                margin: 0 0 0 0;
            }
        }
        
        .box-body {
            font-size: 14px;
            padding: 0px;
            width: auto;
            height: auto;
        }
    }
`;

