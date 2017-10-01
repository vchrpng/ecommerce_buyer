

const shop = (state = [],action) => {
    switch(action.type){
        case 'ADD_TO_WISHLIST' :
            return {

            }
        default :
            return state;
    }
}

export default shop