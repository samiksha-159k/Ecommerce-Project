import React from "react";
// import axios from "axios";
// import { useState } from "react";
// // import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const renderList = props.products.map((detail) => {
    const { id, image, title, price } = detail;

    return (
      <>
        <div className="col-3 my-3 ">
          <div
            className="card align-items-center text-center "
            style={{ width: "18rem" }}
            key={id}
          >
            <img
              src={image}
              className="card-img-top  "
              alt="..."
              style={{ width: "200px", height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{title.substring(0, 12)}</h5>
              <p className="card-text ">$ {price}</p>
              <NavLink to={`/products/${id}`} className="btn btn-primary">
                Details
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  });
  return renderList;
  // return <>{renderList.length > 0 ? renderList : "no products"} </>;
};

export default Products;
