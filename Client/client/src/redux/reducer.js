// reducers are functions that take in the current state and an action

const initialState = {
  products: [],
  cart: [],
  total: 0,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //case get all products
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    //case add to cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    //case remove from cart
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
      };

    //case 'GET_PRODUCT_BY_ID'

    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_PRODUCT_BY_NAME":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
