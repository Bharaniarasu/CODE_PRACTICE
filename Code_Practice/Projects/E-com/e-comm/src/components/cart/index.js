import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCart from "../productCart";
import { modifyOnCart, removeFromCart } from "../redux/reducers/cart";

export default function Cart() {
  const cartList = useSelector((state) => state.cartData.value);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  // console.log("-------cart----------");
  // console.log(cartList);
  const incrementItem = (item) => {
    dispatch(modifyOnCart({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count <= 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(modifyOnCart({ ...item, count: item.count - 1 }));
    }
  };
  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      {cartList.length > 0 ? (
        cartList.map((item) => {
          return (
            <ProductCart
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItem(item)}
            />
          );
        })
      ) : (
        <h3 className="text-center">Cart is Empty.</h3>
      )}
      <button className="btn btn-success d-block m-auto" onClick={()=>navigate("/checkout")}>Checkout</button>
    </div>
  );
}
