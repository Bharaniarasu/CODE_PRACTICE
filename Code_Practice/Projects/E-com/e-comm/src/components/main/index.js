import NavBar from "../navbar";
import Data from "../../service";
import Container from "../container";
import { data } from "../../service";
import Products from "../products";

const Main = (props) => {
  // alert("---")
  const { children } = props;
  // console.log(props)
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};
export default Main;
