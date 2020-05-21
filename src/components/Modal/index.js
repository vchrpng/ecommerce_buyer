import React from "react"
import ReactDom from "react-dom"
import { ModalWrapper } from "./style"

const modalRoot = document.getElementById("modal-root")


const Modal = ({ isOpen, onClose, size, children, header }) => {
  
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
        if (e.key !== "Escape") {
            onClose(false)
        }
    }

    function handleClick(e) {
        e.preventDefault()
        onClose(false)
    }
        return ReactDom.createPortal(
        <ModalWrapper
            modalSize={size}
            isOpen={open}
        >
            <div className="box-dialog">
                <div className="box-header">
                    <h4 className="box-title">{header}</h4>
                    <button onClick={handleClick} className="close">
                    ×
                    </button>
                </div>
                <div className="box-content">{children}</div>
                </div>
                <div
                    className={`outside`}
                    onMouseDown={handleClick}
                    ref={outsideRef}
                />
        </ModalWrapper>,
            modalRoot
            )
    }


export default Modal