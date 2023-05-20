import React from "react";

export default function ProductCart(props) {
  console.log(props);
  return (
    <div className="d-flex m-4 align-items-center justify-content-center">
      <img
        src={props.thumbnail}
        height={150}
        width={150}
        alt=""
        className="rounded text-center"
      />
      <h5 className="card-title me-4">{props.title}</h5>
      <h6 className="mt-2">Price : ${props.price * props.count}</h6>

      <button className="btn btn-danger ms-3" onClick={props.incrementItem}>
        +
      </button>
      <span className="ms-3">{props.count}</span>
      <button className="btn btn-danger ms-3" onClick={props.decrementItem}>
        -
      </button>
      <button className="btn btn-danger ms-3" onClick={props.removeItem}>
        Remove
      </button>
    </div>
  );
}
