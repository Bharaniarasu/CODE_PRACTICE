import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  // console.log(props.data[1].thumbnail);
  // console.log(props);
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <div
        className="card p-3 cursor-pointer"
        role="button"
        onClick={() => navigate(`/product/${props.id}`)}
      >
        <img
          src={props.thumbnail}
          loading="lazy"
          alt=""
          width={150}
          height={190}
          className="rounded text-center"
        />

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="mt-2">Price : ${props.price}</h6>
          <h6>Discount : {props.discountPercentage}</h6>
          <h6>Rating : {props.rating}</h6>
          {props.stock > 0 ? (
            <button className="btn btn-success d-block m-auto">
              Available
            </button>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
