import React from "react"
import ReactDom from "react-dom"
import { SubmitMessageWrapper } from "./style"
import { Icon } from 'semantic-ui-react'

const openWalletVector = require('../../assets/open-wallet.jpg')

const SubmitMessageRoot = document.getElementById("message-root")


const SubmitMessage = ({ isOpen, onClose, size }) => {
  
    const [open,handleToggle] = React.useState(false)
    const outsideRef = React.createRef()

    React.useEffect(() => {
        window.addEventListener("keydown", onEscKeyDown, false)
        setTimeout(() => handleToggle(true), 0)
        if (!isOpen && open) {
                onClose(false)
            }
        return () => {
            window.removeEventListener("keydown", onEscKeyDown, false)
        }
    }, [isOpen])

    function onEscKeyDown(e) {
        if (e.key === "Escape") {
            onClose(false)
        }
    }

    function handleClick(e) {
        e.preventDefault()
    }
        return ReactDom.createPortal(
        <SubmitMessageWrapper
            verticalHeight={window.pageYOffset}
            SubmitMessageSize={size}
            isOpen={open}
        >
            <div className="box-dialog">
                <div style={{ float: 'right', padding: '10px', cursor: 'pointer' }}>
                    <Icon onClick={() => window.href} name="close" />
                </div>
                <div className="box-content">
                    <div className="payment-success-img">
                        <img alt="open-wallet-vector" src={openWalletVector} />
                    </div>
                    <div className="payment-success-content">
                        <h2>Payment Successful!</h2>
                        <p>
                        Thank you for purchasing <br/>
                        Your payment was successful.
                        </p>
                        <a href="http://localhost:3000">Back to shopping</a>
                    </div>
                </div>
            </div>
            <div
                className={`outside`}
                onMouseDown={handleClick}
                ref={outsideRef}
            />
        </SubmitMessageWrapper>,
            SubmitMessageRoot
            )
    }


export default SubmitMessage