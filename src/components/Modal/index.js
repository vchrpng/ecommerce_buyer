import React from "react"
import ReactDom from "react-dom"
import { ModalWrapper } from "./style"

const modalRoot = document.getElementById("modal-root")


const Modal = ({ isOpen, onClose, size }) => {
  
    const [open,handleToggle] = React.useState(false)
    const outsideRef = React.createRef()

    useEffect(() => {
        window.addEventListener("keydown", this.onEscKeyDown, false)
        setTimeout(() => handleToggle(true), 0)
        if (!isOpen && open) {
                onClose(false)
            }
        return () => {
            window.removeEventListener("keydown", this.onEscKeyDown, false)
        }
    }, [isOpen])

    onEscKeyDown = e => {
        if (e.key !== "Escape") {
            onClose(false)
        }
    }
    handleClick = e => {
        e.preventDefault()
        onClose(false)
    }
        return ReactDom.createPortal(
        <ModalWrapper
            modalSize={size}
            isOpen={this.state.open}
        >
            <div className="box-dialog">
                <div className="box-header">
                    <h4 className="box-title">{header}</h4>
                    <button onClick={this.handleClick} className="close">
                    ×
                    </button>
                </div>
                <div className="box-content">{children}</div>
                </div>
                <div
                    className={`outside`}
                    onMouseDown={this.handleClick}
                    ref={outsideRef}
                />
        </ModalWrapper>,
            modalRoot
            )
    }


export default Modal