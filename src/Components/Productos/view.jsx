import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, LinearProgress } from '@material-ui/core';
import { getProductsData } from './actions';
import Producto from '../Producto/view';

class Productos extends Component {
    componentDidMount(){
        const {dispatch, selectedCategoria} = this.props;
        if(selectedCategoria){
            dispatch(getProductsData(selectedCategoria.id));
        }
    }
    componentDidUpdate(prevProps){
        const {dispatch, selectedCategoria} = this.props;
        if(selectedCategoria !== prevProps.selectedCategoria){
            dispatch(getProductsData(selectedCategoria.id));
        }
    }
    state = {  }
    render() { 
        const {loading, productos, selectedCategoria} = this.props;
        return ( 
        <Grid item xs={8}>
            <h1>{selectedCategoria ? selectedCategoria.name : `Productos`} </h1>
            {loading && <LinearProgress/>}
            {!selectedCategoria && <h4>Seleccione una categoría para ver sus productos</h4>}
            {
                selectedCategoria && productos && Array.isArray(productos) && productos.length > 0 &&
                productos.map((p,i)=>(
                    <Producto producto={p} key={i}/>
                ))
            }
        </Grid> 
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.productos.loading,
    productos: state.productos.productos,
    selectedCategoria: state.productos.selectedCategoria,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Productos);