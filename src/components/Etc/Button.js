import React from 'react'

const Button = ({ children , addProductToBag }) => {
    return (
        <div>
            <button
                onClick={addProductToBag}
            >
                {children}
            </button>
        </div>
    )
}

export default Button