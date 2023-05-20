import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../service";
import { setData } from "../redux/reducers";
import { addToCart } from "../redux/reducers/cart";

const ProductCard = () => {
  const selector = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const props = selector.productData.value.find(
    (element) => element.id === parseInt(params.id)
  );
  const [enteredData, setEnteredData] = useState(selector.productData.value);
  // console.log(selector);
  const cartItem = selector.cartData.value.find((item) => item.id === props.id);
  console.log(cartItem);
  const givenData = [
    {
      id: 12,
      title: "iPhone 000",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 11,
      title: "iPhone 000",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  ];
  // console.log([]);

  // console.log(props);

  const addCart = () => {
    setEnteredData([...enteredData, ...givenData]);
    dispatch(addToCart({ ...props, count: 1 }));
    // navigate("/cart");
    // console.log(enteredData)
  };
  useEffect(() => {
    console.log("UseEffect...........................");

    // dispatch({ type: "SETDATA", data: enteredData });              //redux version
    dispatch(setData(enteredData)); //redux toolkit version
  }, [enteredData]);

  return (
    <>
      <div className="p-3 cursor-pointer row">
        <div className="col-6">
          <img
            src={props.thumbnail}
            height={400}
            width={600}
            alt=""
            className="rounded text-center"
          />
        </div>
        <div className="offset-2 col-4">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="mt-2">Price : ${props.price}</h6>
            <h6>Discount : {props.discountPercentage}</h6>
            <h6>Rating : {props.rating}</h6>
            {props.stock > 0 ? (
              <>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => navigate(`/checkout/${props.id}`)}
                >
                  Buy Now
                </button>
                &nbsp;&nbsp;
                {!cartItem?.count > 0 ? (
                  <button
                    className="btn btn-outline-success "
                    onClick={addCart}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-success "
                    onClick={() => navigate("/cart")}
                  >
                    Go to Cart
                  </button>
                )}
              </>
            ) : (
              <button className="btn btn-outline-danger">Out of stock</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
