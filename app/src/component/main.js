import React, { useState, useEffect } from "react";
import "../component/main.css";
import { useHistory } from "react-router-dom";
import Route from "./Route";

const Main = () => {
  let history = useHistory();
  const [productArr, setProductArr] = useState([
    { id: 1, val: "simple product1 - 100" },
    { id: 2, val: "simple product2 - 101" },
    { id: 3, val: "simple product3 - 102" },
    { id: 4, val: "simple product4 - 103" },
    { id: 5, val: "simple product5 - 104" },
    { id: 6, val: "simple product6 - 105" },
    { id: 7, val: "simple product7 - 105" },
  ]);
  const [show, setShow] = useState([...productArr]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);
  const updateCart = (event) => {
    const isChecked = event.target.checked;
    const prodId = event.target.value;
    if (isChecked) {
      const product = getProductById(prodId);
      setCheckedProduct((products) => [...products, product]);
    } else {
      let prod = checkedProduct.filter((item) => item.id != prodId);
      setCheckedProduct(() => prod);
    }
  };
  const addToCart = () => {
    if (checkedProduct.length !== 0) {
      setCart((cart) => [...cart, ...checkedProduct]);
      //   setCheckedProduct(() => []);
    }
  };
  const getProductById = (id) => {
    let prod = productArr.filter((item) => {
      return item.id == id;
    });
    console.log(productArr);
    console.log(prod);
    return prod[0];
  };
  const searchStr = () => {
    const query = searchQuery;
    if (query == "" || query == null) {
      setShow(() => productArr);
      return;
    }
    const filtered = productArr.filter((item) => item.val.indexOf(query) != -1);
    setShow(() => filtered);
  };
  return (
    <div className="main-div">
      <header>
        <ul className="topnav " id="myTopnav">
          <a>
            {" "}
            <i class="fas fa-circle"></i> Blue
          </a>
          <a>
            {" "}
            <i class="fas fa-circle"></i> Red
          </a>

          <a className="icon" onclick="myFunction()"></a>
          <i class="fa fa-bars"></i>
        </ul>
      </header>

      <div className="second-div">
        <div>
          <input
            type="text"
            id="myInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(() => e.target.value)}
            placeholder="Search for names.."
            title="Type in a name"
          ></input>
          <button id="myInput" onChange={searchStr}>
            Search
          </button>

          {show.map((value) => {
            // console.log(show);
            return (
              <ul id="myUL">
                <input
                  style={{ marginTop: "18px" }}
                  type="checkbox"
                  value={value.id}
                  name="vehicle1"
                  onChange={updateCart}
                ></input>
                <li>
                  <a href="#">{value.val}</a>
                </li>
              </ul>
            );
          })}
          <button className="addcart" onClick={addToCart}>
            Add to Cart -{" "}
          </button>
        </div>

        <div className="left-text">
          <div className="car-div">
            <div>Car</div>
            <div>{cart.length} items</div>
          </div>
          {cart.map((value) => {
            // console.log(show);
            return (
              <ul id="myUL">
                <li>
                  <a href="#">{value.val}</a>
                </li>
              </ul>
            );
          })}
          <button
            style={{ marginTop: "200px" }}
            className="addcart"
            onClick={history.push("/")}
          >
            Checkout -{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

// sidemenu.pho - in view folder
// controller - web.php — copy one function and make stack
// meta-data - go to web folder —> meta - create same file as file name and put all configuration
