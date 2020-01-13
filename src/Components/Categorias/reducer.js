import categoriasState from "./state";

const categoriesReducer = (state = categoriasState, action) => {
  switch (action.type) {
    case "CATEGORIES_SET_LOADING":
      return {...state, loading: action.value };
    case "CATEGORIES_SET_CATEGORIES":
        return {...state, categorias: action.categoriasArray };
    default:
      return state;
  }
};

export default categoriesReducer;