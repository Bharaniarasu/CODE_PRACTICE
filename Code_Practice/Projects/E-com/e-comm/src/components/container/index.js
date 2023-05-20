import { data } from "../../service";
import Card from "../card";

const Container = () => {
  return (
    <>
      <div>
        {data.map(
          (product) => (
            <Card {...product} />
          )
          //   <img src={product.thumbnail} alt="" />;
        )}
      </div>
    </>
  );
};
export default Container;
