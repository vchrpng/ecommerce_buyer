import React from 'react';


const Product = ({ match }) => {
    return(
        <div>
        CATEGORY : {match.params.category}
        <br/>
        <br/>
         ID: {match.params.id}
        </div>

    )
}

export default Product