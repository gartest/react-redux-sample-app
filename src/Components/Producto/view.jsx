import React from 'react';
import "./producto.css";

const Producto = ({producto}) => {
    return(
        <div className="producto">
            <img src={producto.thumbnail} alt={producto.title} />
            <p>{producto.title}</p>
            <h4>{producto.price}</h4>
        </div>
    )
}
export default Producto;