import axios from "axios";

export const setLoading = (value) => ({
    type: "CATEGORIES_SET_LOADING",
    value,
});
export const setCategorias = (categoriasArray) => ({
    type: "CATEGORIES_SET_CATEGORIES",
    categoriasArray,
});

export const getCategoriasData = () => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`https://api.mercadolibre.com/sites/MLC/categories`)
    .then((res) => {
        console.log(res);
        dispatch(setCategorias(res.data));
    })
    .catch((err) => {
        console.log(err);
        setCategorias([]);
    })
    .finally(()=>{
        dispatch(setLoading(false));
    });
};