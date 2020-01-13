import React from 'react';
import "./categoria.css";

const Categoria = ({categoria, handleClick}) => {
    return(
        <div className="categoria" onClick={() => handleClick(categoria)}>
            <h4>{categoria.name}</h4>
        </div>
    )
}
export default Categoria;