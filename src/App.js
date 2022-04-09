import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import { useState, useEffect } from "react";
// import { axios } from "axios";

function App() {
  const [detail, setDetail] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products").catch(
        (err) => {
          console.log("err".err);
        }
      );
      setDetail(await response.json());
      // console.log(detail);
    };
    fetchProducts();
  });
  const searchHandler = (SearchTerm) => {
    setSearchTerm(SearchTerm);
    if (SearchTerm !== "") {
      const newContactList = detail.filter((detail)=>{
        return (Object.values(detail)
        .join(" ")
        .toLowerCase()
        .includes(SearchTerm.toLowerCase())
        )
      })
      
      setSearchResult(newContactList);
    }
      else{
      setSearchResult(detail)
    }
  };
  return (
    <>
      <div className="App">
        <Navbar term={SearchTerm} searchKeyword={searchHandler} />
        <div className="row">
          <Switch>
            <Route exact path="/">
              <Products products={SearchTerm.length < 1 ? detail : searchResult} />
            </Route>
            <Route exact path="/Products/:id" component={Product}></Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
