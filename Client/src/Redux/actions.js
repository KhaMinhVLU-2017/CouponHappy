import { ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT, GET_PRODUCT } from './actionTypes'

export const addProduct = product => {
	return {
		type: ADD_PRODUCT,
		payload: {
			product
		}
	}
}

export const removeProduct = productId => {
	return {
		type: REMOVE_PRODUCT,
		payload: {
			productId
		}
	}
}