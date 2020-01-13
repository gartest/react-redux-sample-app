import axios from "axios";

export const setLoading = (value) => ({
    type: "PRODUCTS_SET_LOADING",
    value,
});
export const setProducts = (productsArray) => ({
    type: "PRODUCTS_SET_PRODUCTS",
    productsArray,
});
export const setSelectedCategorie = (categorie) => ({
    type: "PRODUCTS_SET_SELECTED_CATEGORIE",
    categorie,
});

export const getProductsData = (categorieId) => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`https://api.mercadolibre.com/sites/MLC/search?category=${categorieId}&official_store_id=alls`)
    .then((res) => {
        console.log(res);
        dispatch(setProducts(res.data.results));
    })
    .catch((err) => {
        console.log(err);
        setProducts([]);
    })
    .finally(()=>{
        dispatch(setLoading(false));
    });
};