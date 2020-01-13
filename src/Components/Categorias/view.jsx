import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, LinearProgress } from '@material-ui/core';
import { getCategoriasData } from './actions';
import Categoria from '../Categoria/view';
import { setSelectedCategorie, setProducts } from '../Productos/actions';

class Categorias extends Component {
    state = {  }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(getCategoriasData());
    }
    handleClickCategoria = categoria =>{
        if(categoria){
            const {dispatch} = this.props;
            dispatch(setProducts([]));
            dispatch(setSelectedCategorie(categoria));
        }
    }
    render() { 
        const {loading, categorias} = this.props;
        return ( 
        <Grid item xs={4}>
            <h1>Categorías</h1>
            {
                loading && <LinearProgress />
            } 
            {
                categorias && Array.isArray(categorias) && categorias.length > 0 ?
                categorias.map((c,i)=>(
                    <Categoria categoria={c} key={i} handleClick={this.handleClickCategoria} />
                ))
                :
                <span>No hay categorías disponibles</span>
            }           
        </Grid>
        );
    }
}
const mapStateToProps = (state) => ({
    loading: state.categorias.loading,
    categorias: state.categorias.categorias,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Categorias);