// import Home from "./components/home/index";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Main from "./components/main";
import ProductCard from "./components/productCard";
import Products from "./components/products";
import { data } from "./service";
import Cart from "./components/cart";
import App from "./App";
import CheckOut from "./components/checkOut";
import Success from "./components/success";

// const Main = lazy(() => import("./components/main"));

function RouterComp() {
  return (
    <Suspense>
      <Routes>
        {/* <NavBar /> */}
        <Route exact path="/" element={<Main />} />
        <Route exact path="/product/:id" element={<ProductCard />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/checkout/">
          <Route path="" element={<CheckOut />} />
          <Route path=":id" element={<CheckOut />} />
        </Route>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Suspense>
  );
}

export default RouterComp;
