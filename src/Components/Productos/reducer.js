import productosState from "./state";

const productsReducer = (state = productosState, action) => {
  switch (action.type) {
    case "PRODUCTS_SET_LOADING":
      return {...state, loading: action.value };
    case "PRODUCTS_SET_PRODUCTS":
        return {...state, productos: action.productsArray };
    case "PRODUCTS_SET_SELECTED_CATEGORIE":
        return {...state, selectedCategoria: action.categorie };
    default:
      return state;
  }
};

export default productsReducer;