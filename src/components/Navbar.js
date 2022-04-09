import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = (props) => {
  // console.log(props)
  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
     const state = useSelector((state)=>state.cart.cartItems)

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            MeShop
          </NavLink>
          <form className="">
            <input
              ref={inputEl}
              className="form-control me-2"
              type="search"
              value={props.term}
              placeholder="Search"
              aria-label="Search"
              onChange={getSearchTerm}
            />
            {/* <button
              className="btn btn-outline-success"
              type="submit"
              
            >
              Search
            </button> */}
          </form>
        <button className="btn btn-primary disabled "  >Cart({state.length})</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
