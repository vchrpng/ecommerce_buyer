import { createSelector } from 'reselect'

const products = state => state.products
const shoppingbag = state => state.shoppingbag

// export const id = createSelector(
//     products,
//     shoppingbag,
//     products  => products.byId.findIndex(el => el.id === state.shoppingbag.Ids)
// )

export const id = createSelector(
    // products,
    shoppingbag,
    products,
    (shoppingbag,products)  => shoppingbag.addedIds
        .reduce((total,id) => 
        total + products.byId[id].price,0).toFixed(2)
)


export const totalSelector = createSelector(
    // byId,
    // addedIds,
    // byId => byId[addedIds].reduce((acc,cur) => acc + cur.price ,0).toFixed(2)
)
