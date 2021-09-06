import React, { useState, useEffect } from "react";
import "../component/main.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loadProducts, addCartItem } from "../Action/actions";
const Main = ({ products, itemsInCart, addCartItem, loadProducts }) => {
  let history = useHistory();
  const [productArr, setProductArr] = useState(products);
  const [show, setShow] = useState([...productArr]);
  const [cart, setCart] = useState(itemsInCart);
  const [searchQuery, setSearchQuery] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setProductArr(() => products);
    setShow(() => products);
  }, [products]);

  useEffect(() => {
    setCart(() => itemsInCart);
  }, [itemsInCart]);

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
      addCartItem(checkedProduct);
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

  const handleClick = () => {
    history.push("/newScreen");
  };
  return (
    <div className="main-div">
      <header>
        <ul className="topnav " id="myTopnav">
          <a>
            {" "}
            <i className="fas fa-circle"></i> Blue
          </a>
          <a>
            {" "}
            <i className="fas fa-circle"></i> Red
          </a>

          <a className="icon"></a>
          <i className="fa fa-bars"></i>
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

          {show.map((value, idx) => {
            // console.log(show);
            return (
              <ul id="myUL" key={idx}>
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
          {cart.map((value, idx) => {
            // console.log(show);
            return (
              <ul id="myUL" key={idx}>
                <li>
                  <a href="#">{value.val}</a>
                </li>
              </ul>
            );
          })}
          <button
            style={{ marginTop: "200px" }}
            className="addcart"
            onClick={handleClick}
          >
            Checkout -{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    products: state.prods.products,
    itemsInCart: state.prods.itemsInCart,
  };
};
export default connect(mapStateToProps, { loadProducts, addCartItem })(Main);
