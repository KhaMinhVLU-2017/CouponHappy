import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actionTypes'

const intialState = {
  listProduct: []
}

export default (state = intialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      const {product} = action.payload
      return {
        ...state,
        listProduct: [...state.listProduct, product]
      }
    case REMOVE_PRODUCT:
      const {productId} = action.payload
      const listProduct = state.listProduct.filter(s => s.Id !== productId)
      return {
        ...state,
        listProduct
      }
    default:
      return state
  }
}