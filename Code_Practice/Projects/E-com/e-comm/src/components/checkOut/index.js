import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../service";
import ProductCart from "../productCart";
import { modifyOnCart, removeFromCart } from "../redux/reducers/cart";

export default function CheckOut() {
  const cartList = useSelector((state) => state.cartData.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [selectedItem, setSelectedItem] = useState([
    params
      ? {
          ...data.find((element) => element.id === parseInt(params.id)),
          count: 1,
        }
      : cartList,
  ]);

  console.log([selectedItem]);
  const incrementItem = (item) => {
    const index=selectedItem.findIndex(element=>element.id===item.id);

    // dispatch(modifyOnCart({ ...item, count: item.count + 1 }));
    setSelectedItem((state)=>
     [
      ...state.slice(0,index),
      {...item,count:item.count+1},
      ...state.slice(index+1),
     ] 
    )
  
  };
  const decrementItem = (item) => {
    const index=selectedItem.findIndex(element=>element.id===item.id);

    if (item.count <= 1) {
      // dispatch(removeFromCart(item));
   
      setSelectedItem((state)=>[
        ...state.slice(0,index),
        ...state.slice(index+1),
      ])
    } else {
      // dispatch(modifyOnCart({ ...item, count: item.count - 1 }));
      setSelectedItem((state)=>[
        ...state.slice(0,index),
        {...item,count:item.count-1},
        ...state.slice(index+1),
      ])
    }
  };
  const removeItem = (item) => {
    const index=selectedItem.findIndex(element=>element.id===item.id);

    // dispatch(removeFromCart(item));
    setSelectedItem((state)=>[
      ...state.slice(0,index),
      ...state.slice(index+1),
    ])
  };
  return (
    <div>
      {selectedItem.length > 0 ? (
        selectedItem.map((item) => {
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
      <button
        className="btn btn-success d-block m-auto"
        onClick={() => navigate("/success")}
      >
        Place Order
      </button>
    </div>
  );
}
