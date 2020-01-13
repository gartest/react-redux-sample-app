import React from 'react';
import {AppBar, Toolbar, Typography, Grid} from "@material-ui/core"
import Categorias from './Components/Categorias/view';
import Productos from './Components/Productos/view';
import { Provider } from 'react-redux';
import store from './config/store';

function App() {
  return (
    <Provider store={store}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Aplicación de ejemplo React + Material + Redux
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Categorias/>
        <Productos/>
      </Grid>
    </Provider>
  );
}

export default App;
