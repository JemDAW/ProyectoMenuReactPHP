import React from "react";
import Item from "./Item";
import useApiRestGet from "../hooks/useApiRestGet";

const ItemList = () => {

    const results = useApiRestGet("items");
    var array = Object.values(results);

    const renderedItems = array.map((result) => {
        return(
            <div className="item" key={result.id}>
                <Item
                nombre= {result.nombre}
                descripcion= {result.descripcion}
                precio= {result.precio}
                />     
            </div>
        );
        });

    return(
        <div className="ui fluid card">
        <div className="content">
        <h4 className="ui dividing header">Lista Items</h4>
        <div className="ui middle aligned divided list">
        {renderedItems}
        </div>
        </div>
        </div>
      )
};

export default ItemList;