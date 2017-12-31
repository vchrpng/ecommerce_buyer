import { createSelector } from 'reselect'

const products = state => state.products
const shoppingbag = state => state.shoppingbag


export const totalSelector = createSelector(
    shoppingbag,
    products,
    (shoppingbag,products) => shoppingbag.addedIds
        .reduce((total,id) => 
        total + products.byId[id].price,0).toFixed(2)
)

export const selectedProducts = createSelector(
    shoppingbag,
    products,
    (shoppingbag,products) => shoppingbag.addedIds
        .map(id => products.byId[id])
)

export const selectedSizes = createSelector(
    shoppingbag,
    shoppingbag => shoppingbag.addedSizes
)

export const showProducts = createSelector(
    products,
    products => products.getProductId.map(id => products.byId[id])
)
