import React from "react"
import ReactDom from "react-dom"
import { Link } from 'react-router-dom'
import { SubmitMessageWrapper } from "./style"
import Loader from 'react-loader-spinner'
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

    const [loaded, setLoaded] = React.useState(false);
    function onLoad() {
        setLoaded(true);
    }

    function handleClick(e) {
        e.preventDefault()
    }
        return  ReactDom.createPortal(
        <SubmitMessageWrapper
            verticalHeight={window.pageYOffset}
            SubmitMessageSize={size}
            isOpen={open}
        >
            <div className="box-dialog">
                <div style={{ float: 'right', padding: '10px', cursor: 'pointer' }}>
                    <Link to="/">
                        <Icon name="close" />
                    </Link>
                </div>
                <div className="box-content">
                    <div className="payment-success-img">
                        <img onLoad={onLoad} alt="open-wallet-vector" src={openWalletVector} />
                    </div>
                    <div className="payment-success-content">
                        {!loaded ? 
                            <Loader
                                type="Oval"
                                color="#000000"
                                height={50}
                                width={50}
                            /> : 
                        <React.Fragment>
                        <h2>Payment Successful!</h2>
                        <p>
                        Thank you for purchasing <br/>
                        Your payment was successful.
                        </p>
                        <Link to="/">Back to shopping</Link>
                        </React.Fragment>
                        }
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