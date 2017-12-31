import { createSelector } from 'reselect'

const products = state => state.products

export const filterCategory = createSelector(
    products,
    products => products.byId.filter()
)